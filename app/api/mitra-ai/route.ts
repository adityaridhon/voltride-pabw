import Groq from "groq-sdk";
import { mitraTools } from "@/ai/mitraTools";
import { runMitraTool } from "@/ai/mitraToolRouter";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function POST(req: Request) {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      return Response.json(
        {
          success: false,
          message: "Unauthorized",
        },
        {
          status: 401,
        }
      );
    }

    const { message } = await req.json();

    if (!message?.trim()) {
      return Response.json(
        {
          success: false,
          message: "Message wajib diisi",
        },
        {
          status: 400,
        }
      );
    }

    // ==================================================
    // STEP 1
    // USER MESSAGE -> ACTION
    // ==================================================

    const actionList = mitraTools
      .map(
        (tool) =>
          `${tool.name}: ${tool.description} | params: ${JSON.stringify(
            tool.params
          )}`
      )
      .join("\n");

    const actionCompletion =
      await groq.chat.completions.create({
        model: "llama-3.1-8b-instant",
        temperature: 0,
        messages: [
          {
            role: "system",
            content: `
You are VoltRide Partner Assistant.

Convert user request into JSON action.

Available actions:

${actionList}

Rules:

- Return ONLY JSON
- No explanation
- No markdown

Format:

{
  "action": "action_name",
  "params": {}
}
            `,
          },
          {
            role: "user",
            content: message,
          },
        ],
      });

    const raw =
      actionCompletion.choices[0].message.content ??
      "";

    const cleaned = raw
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    let parsed;

    try {
      parsed = JSON.parse(cleaned);
    } catch {
      return Response.json({
        success: false,
        message:
          "Saya hanya dapat membantu terkait armada, booking, dan pendapatan mitra.",
      });
    }

    // ==================================================
    // STEP 2
    // ACTION -> DATABASE
    // ==================================================

    const mitra = await prisma.mitra.findUnique({
      where: {
        userId: session.user.id,
      },
    });

    if (!mitra) {
      return Response.json({
        success: false,
        message: "Mitra tidak ditemukan",
      });
    }

    const toolResult = await runMitraTool(
      parsed.action,
      parsed.params ?? {},
      mitra.id
    );

    // ==================================================
    // STEP 3
    // DATABASE RESULT -> NATURAL RESPONSE
    // ==================================================

    console.log(
      "TOOL RESULT:",
      JSON.stringify(toolResult, null, 2)
    );
    const answerCompletion =
      await groq.chat.completions.create({
        model: "llama-3.1-8b-instant",
        temperature: 0.7,
        messages: [
          {
            role: "system",
            content: `
You are VoltRide Partner AI.

Your job is answer partner questions naturally.

Rules:

- Use Indonesian.
- Friendly and professional.
- Do not show JSON.
- Do not show raw database objects.
- Summarize data nicely.
- Use bullet points when appropriate.
- Mention important numbers.
- Keep answers concise.

Examples:

User:
berapa total armada saya

Data:
{
  "total": 5,
  "active": 4,
  "maintenance": 1
}

Answer:
Saat ini Anda memiliki 5 armada:

• 4 mobil aktif
• 1 mobil dalam perawatan

----------------------------------

User:
berapa booking aktif saya

Data:
3

Answer:
Saat ini terdapat 3 booking aktif yang sedang berjalan.

----------------------------------

User:
mobil apa saja yang saya punya

Data:
[
  {
    "name":"Tesla Model 3",
    "status":"ACTIVE"
  },
  {
    "name":"Ioniq 5",
    "status":"MAINTENANCE"
  }
]

Answer:
Armada Anda saat ini:

• Tesla Model 3 (Aktif)
• Hyundai Ioniq 5 (Maintenance)
            `,
          },
          {
            role: "user",
            content: `
Pertanyaan User:

${message}

Data Database:

${JSON.stringify(toolResult, null, 2)}
            `,
          },
        ],
      });

    const finalAnswer =
      answerCompletion.choices[0].message.content ??
      "Maaf, saya tidak dapat memproses permintaan Anda.";

    return Response.json({
      success: true,
      message: finalAnswer,
    });

  } catch (error) {
    console.error(error);

    return Response.json(
      {
        success: false,
        message: "Terjadi kesalahan pada AI.",
      },
      {
        status: 500,
      }
    );
  }
}
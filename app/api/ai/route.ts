import Groq from "groq-sdk";
import { tools } from "@/ai/tools";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

function normalizePlate(plate: string): string {
  return plate.replace(/\s+/g, " ").trim().toUpperCase();
}

function extractExplicitAvailability(message: string): boolean | undefined {
  const normalizedMessage = message.toLowerCase();

  const unavailablePatterns = [
    /tidak\s+tersedia/,
    /tak\s+tersedia/,
    /ga\s+tersedia/,
    /gak\s+tersedia/,
    /nggak\s+tersedia/,
    /not\s+available/,
    /available\s*[:=]\s*false/,
    /available\s+false/,
  ];

  const availablePatterns = [
    /tersedia/,
    /available\s*[:=]\s*true/,
    /available\s+true/,
    /status\s+tersedia/,
  ];

  if (unavailablePatterns.some((pattern) => pattern.test(normalizedMessage))) {
    return false;
  }

  if (availablePatterns.some((pattern) => pattern.test(normalizedMessage))) {
    return true;
  }

  return undefined;
}

export async function POST(req: Request) {
  try {
    if (!process.env.GROQ_API_KEY) {
      return Response.json(
        {
          error: "GROQ_API_KEY belum diset",
        },
        { status: 500 },
      );
    }

    const { message } = await req.json();

    if (typeof message !== "string" || !message.trim()) {
      return Response.json(
        {
          error: "Message wajib diisi",
        },
        { status: 400 },
      );
    }

    // membuat daftar action untuk prompt
    const actionList = tools
      .map(
        (t) =>
          `${t.name}: ${t.description} | params: ${JSON.stringify(t.params)}`,
      )
      .join("\n");

    const completion = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      temperature: 0,
      messages: [
        {
          role: "system",
          content: `
You are an AI that converts user commands into JSON actions.

Available actions:
${actionList}

Rules:
- Only return valid JSON
- Do not explain anything
- Do not add markdown
- For create_car, only include params.available if the user explicitly states availability.
- Never infer or auto-fill params.available when the user does not mention it.
- For create_car, plate is required.
- For delete_car, only include params.plate and do not include unrelated params.
- Output format must be:

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

    const raw = completion.choices[0].message.content ?? "";

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
          "Maaf, saya hanya dapat membantu terkait pencarian dan pemesanan kendaraan VoltRide.",
      });
    }

    const allowedTopics = [
    "mobil",
    "kendaraan",
    "booking",
    "sewa",
    "rental",
    "harga",
    "mitra",
    "armada",
    "ev",
    "listrik",
    "tesla",
    "xiaomi",
    "hyundai",
  ];

  const isRelevant = allowedTopics.some((word) =>
    message.toLowerCase().includes(word)
  );

  if (!isRelevant) {
    return Response.json({
      success: false,
      message:
        "Saya hanya dapat membantu pencarian kendaraan, booking, saldo, dan layanan VoltRide.",
    });
  }

    if (typeof parsed?.action !== "string") {
      throw new Error("Respons AI tidak berisi action yang valid");
    }

    if (parsed.action === "create_car") {
      const explicitAvailability = extractExplicitAvailability(message);
      const params =
        parsed.params && typeof parsed.params === "object" ? parsed.params : {};

      if (typeof params.plate === "string") {
        params.plate = normalizePlate(params.plate);
      }

      if (explicitAvailability === undefined) {
        delete params.available;
      } else {
        params.available = explicitAvailability;
      }

      parsed.params = params;
    }

    if (parsed.action === "delete_car") {
      const params =
        parsed.params && typeof parsed.params === "object" ? parsed.params : {};

      if (typeof params.plate === "string") {
        parsed.params = {
          plate: normalizePlate(params.plate),
        };
      } else {
        parsed.params = {};
      }
    }

    return Response.json(parsed);
  } catch (error) {
    console.error(error);

    const errorMessage =
      error instanceof Error ? error.message : "AI command parsing failed";

    return Response.json(
      {
        error: errorMessage,
      },
      { status: 500 },
    );
  }
}

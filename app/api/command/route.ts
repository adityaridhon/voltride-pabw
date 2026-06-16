import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";
import { runTool } from "@/ai/toolRouter";

export async function POST(req: NextRequest) {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const body = await req.json();

    const action =
      typeof body?.action === "string"
        ? body.action
        : "";

    const params = body?.params ?? {};

    if (!action) {
      return NextResponse.json(
        {
          error: "Action tidak valid",
        },
        {
          status: 400,
        }
      );
    }

    const result = await runTool(
      action,
      params,
      session.user.id
    );

    return NextResponse.json({
      success: true,
      data: result,
    });
  } catch (error) {
    console.error("AI COMMAND ERROR", error);

    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : "Unknown error",
      },
      {
        status: 500,
      }
    );
  }
}
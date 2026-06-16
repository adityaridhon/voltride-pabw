import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { runMitraTool } from "@/ai/mitraToolRouter";
import { NextRequest, NextResponse } from "next/server";

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

    const { action, params } = body;

    const mitra = await prisma.mitra.findUnique({
      where: {
        userId: session.user.id,
      },
    });

    if (!mitra) {
      return NextResponse.json(
        { error: "Mitra not found" },
        { status: 404 }
      );
    }

    const result = await runMitraTool(
      action,
      params,
      mitra.id
    );

    return NextResponse.json({
      success: true,
      data: result,
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        error: "Internal Server Error",
      },
      {
        status: 500,
      }
    );
  }
}
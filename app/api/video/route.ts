"use server";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const videoId = searchParams.get("id");
  const source = searchParams.get("source") || "vidsrc.to";

  if (!videoId) {
    return NextResponse.json(
      { error: "No video id provided" },
      { status: 400 }
    );
  }

  const VIDEO_URL = `https://${source}/embed/movie/${videoId}`;

  return NextResponse.json({ link: VIDEO_URL });
}

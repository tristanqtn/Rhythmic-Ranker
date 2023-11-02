import { NextResponse } from "next/server";

export async function GET(request) {
  return NextResponse.json({
    code: "200",
    message: "alive",
  });
}

export async function POST(request) {
  return NextResponse.json({
    code: "200",
    message: "alive",
  });
}

// get request in next 15 modern in the api/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get("name");

  return NextResponse.json({
    message: `Hello, ${name}!`,
  });
}

import { NextResponse } from "next/server";

export async function GET() {
  // Add logic here to check DB connection if necessary
  return new NextResponse(JSON.stringify({ status: "ok" }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

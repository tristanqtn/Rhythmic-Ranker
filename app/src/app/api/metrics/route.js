import db from "./data.json";
import { NextResponse } from "next/server";

export async function GET(request) {
  if (db == undefined)
    return NextResponse.json({
      code: "401",
      error: "impossible to retrieve DB",
    });
  else return NextResponse.json(db);
}

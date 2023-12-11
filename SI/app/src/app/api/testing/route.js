import { NextResponse } from "next/server";
const mongoose = require("mongoose");
const Metrics = require("../metrics/Metrics");
const url = "mongodb://127.0.0.1:27017/PPE";

export async function GET(request) {
  mongoose
    .connect(url, {})
    .then((result) => {})
    .catch((err) => {
      return NextResponse.json({
        code: "400",
        message: "db down",
      });
    });

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

import { NextResponse } from "next/server";

const mongoose = require("mongoose");
const Metrics = require("./Metrics");
const url = "mongodb://127.0.0.1:27017/PPE";

mongoose
  .connect(url, {})
  .then((result) => {})
  .catch((err) => console.log(err));

export async function GET(request) {
  try {
    return NextResponse.json(await Metrics.find());
  } catch (e) {
    console.log(e.message);
  }
}

export async function POST(request) {
  const message = await request.json();
  var response;
  try {
    Metrics.create(message);
    response = NextResponse.json({ code: "200", message: "ok" });
  } catch (e) {
    console.log(e._message);
  }
  console.log("RES" + response);
  return response;
}

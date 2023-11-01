const { MongoClient } = require("mongodb");
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
  try {
    Metrics.create(message);
  } catch (e) {
    console.log(e.message);
  }
  return NextResponse.json(await Metrics.find());
}

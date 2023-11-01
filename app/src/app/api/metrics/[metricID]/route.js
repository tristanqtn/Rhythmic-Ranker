import { NextResponse } from "next/server";

const mongoose = require("mongoose");
const Metrics = require("../Metrics");
const url = "mongodb://127.0.0.1:27017/PPE";

mongoose
  .connect(url, {})
  .then((result) => {})
  .catch((err) => console.log(err));

export async function GET(request, { params }) {
  try {
    const doc = await Metrics.findById(params.metricID); //find the article given in URL
    if (doc == undefined) {
      return NextResponse.json({
        code: "401",
        message: "ERROR: metric doesn't exist",
      });
    } else {
      return NextResponse.json(doc);
    }
  } catch (e) {
    console.log(e.message);
    return NextResponse.json({
      code: "401",
      message: "ERROR: problem occured while reading DB",
    });
  }
}

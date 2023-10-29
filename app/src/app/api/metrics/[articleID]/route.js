import db from "../data.json";
import { NextResponse } from "next/server";

export async function GET(request) {
  var id = request.nextUrl.pathname.substring(14);
  const article = db.articles.find((article) => article.id === id); //find the article given in URL
  if (article == undefined) {
    return NextResponse.json({ code: "401", error: "article doesn't exist" });
  } else {
    return NextResponse.json(article);
  }
}

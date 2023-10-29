"use client";

import React from "react";
import { useParams } from "next/navigation";

const Title = () => <h1 className="wt-title">Specific Article</h1>;

const display_article = (article) => (
  <div>
    <br></br>
    <p className="wt-p">
      {article.author} article named {article.title + " "}
      written on the {article.date}
    </p>
    <p className="wt-p">Article content: {article.content}</p>
    <p className="wt-p">Article ID: {article.id}</p>
  </div>
);

const Article = async (articleID) => {
  const local_data = await getData(articleID);
  if (local_data.code == 401)
    return (
      <div>
        <p className="wt-p">Error: {JSON.stringify(local_data)} </p>
      </div>
    );
  else
    return (
      <div>
        <br></br>
        <p className="wt-p">
          {local_data.author} article named {local_data.title + " "}
          written on the {local_data.date}
        </p>
        <p className="wt-p">Article content: {local_data.content}</p>
        <p className="wt-p">Article ID: {local_data.id}</p>
      </div>
    );
};

const getData = async (articleID) => {
  var api_path = "http://localhost:3000/api/articles/" + articleID;
  const res = await fetch(api_path, { cache: "no-store" });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

export default () => {
  const router = useParams();
  return (
    <div>
      <Title />
      {Article(router.articleID)}
    </div>
  );
};

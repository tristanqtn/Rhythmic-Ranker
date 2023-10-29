import React from "react";
import Link from "next/link";

const Title = () => <h1 className="wt-title">Articles</h1>;

const Description = () => (
  <div>
    <p className="wt-p">
      This page allows you to see every articles available on the website. But
      you can visit a specific article if you want. In order to do that, copy
      the ID of the article you want to read and then enter in the search bar a
      "/" character and the article's ID.
    </p>
    <br></br>
    <p className="wt-p">
      The final URL should look like this :
      http://localhost:3000/articles/1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed
    </p>
  </div>
);

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/articles", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

const Articles = async () => {
  const local_data = await getData();
  if (local_data.code == 401)
    return (
      <div>
        <p className="wt-p">Error: {JSON.stringify(local_data)} </p>
      </div>
    );
  else
    return (
      <div>
        <p className="wt-p">
          Here's a list containing all our recent articles:
        </p>
        <ul>
          {local_data.articles.map((article) => (
            <div key={article.id}>
              <br></br>
              <li>
                <p className="wt-p">
                  {`${article.author}'s article named ${article.title} written on the ${article.date}`}
                </p>
                <p className="wt-p">
                  Article content: {article.content}
                  <Link href={`/articles/${article.id}`}> - See More</Link>{" "}
                </p>
              </li>
            </div>
          ))}
        </ul>
      </div>
    );
};

export default () => {
  return (
    <div>
      <Title />
      <div>
        <Description />
        <Articles />
      </div>
    </div>
  );
};

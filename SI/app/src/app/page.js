import Link from "next/link";
import React from "react";
import "tailwindcss/tailwind.css";

const Title = () => <h1 className="wt-title">PPE</h1>;

const Description = () => (
  <div>
    <p className="wt-p">
      This website has been built by Tristan, for PPE data management !{" "}
    </p>
    <br></br>
    <Link className="wt-button ml-10 mb-20" href={"/api/metrics/"}>
      {" "}
      API Metrics{" "}
    </Link>

    <Link className="wt-button ml-10 " href={"/api/testing/"}>
      {" "}
      API Test{" "}
    </Link>
  </div>
);

const Page = () => (
  <div>
    <Title />
    <main>
      <Description />
    </main>
  </div>
);

Page.displayName = "Home";
export default Page;

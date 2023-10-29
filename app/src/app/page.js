import Link from "next/link";
import React from "react";
import "tailwindcss/tailwind.css";

const Title = () => <h1 className="wt-title">PPE</h1>;

const Description = () => (
  <p className="wt-p">
    This website has been built by Tristan, for PPE data management !{" "}
  </p>
);

export default () => (
  <div>
    <Title />
    <main>
      <Description />
    </main>
  </div>
);

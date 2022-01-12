import React from "react";
import { Helmet } from "react-helmet";

/*
tailwindcss
https://tailwindcss.com/docs/installation
*/
export default function Flight() {
  return (
    <>
      <Helmet>
        <title>Train 🚂</title>
        <meta name="description" content="train page ..." />
      </Helmet>
      <div className="text-base font-mono">Train 🚂</div>
    </>
  );
}

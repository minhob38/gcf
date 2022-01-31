import React from "react";
import type { NextPage } from "next";
import Head from "next/head";

const Train: NextPage = () => {
  return (
    <>
      <Head>
        <title>Train 🚂</title>
        <meta name="description" content="train page ..." />
      </Head>
      <div className="text-base font-mono">Train 🚂</div>
    </>
  );
};

Train.getInitialProps = async ctx => {
  const { data } = await axi
}

export default Train;

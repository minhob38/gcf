import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import axios from "axios";
import { ITrainApi } from "../types/types";

const Train: NextPage<{ serverProps: ITrainApi }> = ({ serverProps }) => {
  const { emoji } = serverProps;

  return (
    <>
      <Head>
        <title>Train 🚂</title>
        <meta name="description" content="train page ..." />
      </Head>
      <div className="text-base font-mono">{`Train ${emoji}`}</div>
    </>
  );
};

Train.getInitialProps = async (ctx) => {
  const { data } = await axios.get("http://localhost:3000/api/train");
  return { serverProps: data };
};

export default Train;

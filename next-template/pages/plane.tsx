/** @jsxImportSource @emotion/react */
import type { NextPage } from "next";
import React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import kfx from "../assets/images/kfx.jpeg";
import Image from "next/image";

const CSS = css`
  font: normal normal 16px / 30px Noto Sans CJK KR;
`;

const INDEX: NextPage = () => {
  return (
    <>
      <div css={CSS}>Plane 🛩</div>
      <Image src={kfx} alt="kfx" width={150} height={112} />
    </>
  );
};

export default INDEX;

import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Home from "../components/Home";
import Button from "../components/Button";

const INDEX: NextPage = () => {
  return (
    <>
      <Home />
      <Button />
      <Link href="/plane">/plane 링크 📌</Link>
      <Link href="/train">/plane 링크 📌</Link>
    </>
  );
};

export default INDEX;

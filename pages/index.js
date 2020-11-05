import Head from "next/head";
// import styles from "../styles/Home.module.css";
import { Box } from "@chakra-ui/core";
// components
import Hero from "../components/hero";

export default function Home() {
  return (
    <>
      <Head>
        <title>Next C19</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box>
        <Hero />
      </Box>
    </>
  );
}

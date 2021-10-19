import { NextPage } from "next";
import { Html, Head, Main, NextScript } from "next/document";
import React from "react";

const Document: NextPage = () => {
  return (
    <Html>
      <Head>
        <meta name="description" content="Cute doggo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;

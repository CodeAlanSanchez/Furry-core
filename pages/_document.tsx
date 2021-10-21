import type { NextPage } from "next";
import { Html, Head, Main, NextScript } from "next/document";
import React from "react";

const Document: NextPage = () => {
  return (
    <Html>
      <Head>
        <meta
          name="description"
          content="Cute animals to help you destress and relax"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow:wght@100;300;400;500;600;700;900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Festive&display=swap"
        />
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

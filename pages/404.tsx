import type { NextPage } from "next";
import Link from "next/link";
import React from "react";

const NotFound: NextPage = () => {
  return (
    <div>
      <h4>404 | Page Not Found</h4>
      <Link href="/dogs">
        <a>
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.0UkR_Zl_lCSYZ02uBDRPQwHaEK%26pid%3DApi&f=1"
            alt="Dog"
          />
        </a>
      </Link>
      <style jsx>{`
        h4 {
          text-align: center;
          margin-bottom: 25px;
        }
      `}</style>
    </div>
  );
};

export default NotFound;

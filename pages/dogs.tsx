import type { NextPage } from "next";
import Link from "next/link";

const Animal: NextPage = () => {
  return (
    <div>
      <h1>Animals</h1>

      <Link href="/dogs">
        <a>Dogs</a>
      </Link>
    </div>
  );
};

export default Animal;

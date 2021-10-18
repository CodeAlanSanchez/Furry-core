import type { NextPage } from "next";
import Link from "next/link";
import animals from "../animals.json";

const Animal: NextPage = () => {
  return (
    <div>
      <h1>Animals</h1>

      <ul>
        {Object.entries(animals["dogs"]).map((value, index) => {
          return (
            <li key={index}>
              <Link href="/animal/[id]" as={"/animal/" + value[0]}>
                <a>{value[1].name}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Animal;

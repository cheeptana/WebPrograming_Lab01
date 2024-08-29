import type { MetaFunction } from "@remix-run/node";
import CardDetail from "./page.fcard";
import headert from "./temple/header";
import Headert from "./temple/header";
import Homepage from "./page.home";


export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <>
    <Headert/>
      <div>
        <Homepage />
      </div>
    </>
  );
}

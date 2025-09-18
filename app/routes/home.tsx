import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import Book from "~/components/book";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  //return <Welcome />;
  return (
    <div className="w-[70%] mx-auto">
      <Book />
    </div>
  )
}

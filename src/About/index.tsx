import { useContext } from "react";
import { NumberContext } from "../context/ShareContext";

export function About() {
  const { number } = useContext(NumberContext);

  return (
    <div>
      <span>Número: {number}</span>
    </div>
  );
}

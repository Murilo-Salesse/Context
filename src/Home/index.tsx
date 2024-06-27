import { useContext } from "react";
import { NumberContext } from "../context/ShareContext";

export function Home() {
  const { changeNumber, number } = useContext(NumberContext);

  return (
    <div>
      <button onClick={changeNumber}>Incrementar Número</button>
      <h1>Número: {number}</h1>

    </div>
  );
}

import "./styles.css";
import { useState } from "react";
import Testomagico from "./Testomagico";

export default function Button() {
  const [contatore, setContatore] = useState(0);

  return (
    <div className="App">
      <button onClick={() => setContatore(contatore + 1)}>Cliccami</button>
      <Testomagico testo={contatore} />
    </div>
  );
}

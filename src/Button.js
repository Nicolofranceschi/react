import "./styles.css";
import { useState } from "react";
import Testomagico from "./Testomagico";

export default function Button() {
  const [contatore, setContatore] = useState(0);

  return (
    <div className="App">
      <Button onClik={() => setContatore(contatore + 1)} />
      <Testomagico testo={contatore} />
    </div>
  );
}

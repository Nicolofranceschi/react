import "./styles.css";
import { useState , useEffect} from "react";
import Testomagico from "./Testomagico";

export default function Button() {
  const [contatore, setContatore] = useState(0);

  useEffect(() => {

    document.title = `Hai cliccato ${contatore} volte`;

  },[contatore]);


  return (
    <div className="App">
      <button onClick={() => setContatore(contatore + 1)}>
        Cliccami
      </button>
      <Testomagico testo={contatore} />
    </div>
  );
}

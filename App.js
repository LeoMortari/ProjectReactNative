import { Container } from "./styles";

import Header from "./containers/Header";
import Tracker from "./containers/Tracker";
import { useState } from "react";

export default function App() {
  const [encomenda, setEncomenda] = useState([]);

  return (
    <Container>
      <Header
        user="Leonardo"
        encomenda={encomenda}
        setEncomenda={setEncomenda}
      />
      <Tracker encomenda={encomenda} />
    </Container>
  );
}

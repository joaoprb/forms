import { useState } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import Dados from "./components/Dados";

function App() {

  const [informs, setInforms] = useState(null);

  const handleEnviarDados = (novasInforms) => {
    setInforms(novasInforms);
  }

  return (
    <>
      <Header />
      <Formulario onEnviar={handleEnviarDados}/>
      {informs && (
        <Dados>
          <p>Nome: {informs.nome}</p>
          <p>Endereço: {informs.endereco}</p>
          <p>Email: {informs.email}</p>
          <p>Dara de Nascimento: {informs.dataNascimento}</p>
        </Dados>
      )}
    </>
  );
}

export default App;

import { useState } from "react";
import styles from "./Formulario.module.css";

function Formulario({ onEnviar }) {

    const [nome, setNome] = useState("");
    const [endereco, setEndereco] = useState("");
    const [email, setEmail] = useState("");
    const [dataNascimento, setDataNascimento] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        onEnviar({
            nome,
            endereco,
            email,
            dataNascimento
        });
    }

    return(
        <main className={styles.formulario}>
          <form onSubmit={handleSubmit}>
                <label>
                Nome:
                <input
                    type="text"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />
                </label>
                <br />
                <label>
                Endereço:
                <input
                    type="text"
                    value={endereco}
                    onChange={(e) => setEndereco(e.target.value)}
                />
                </label>
                <br />
                <label>
                Email:
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                </label>
                <br />
                <label>
                Data de Nascimento:
                <input
                    type="date"
                    value={dataNascimento}
                    onChange={(e) => setDataNascimento(e.target.value)}
                />
                </label>
                <br />
                <button type="submit">Enviar</button>
            </form>
        </main>
    )
}

export default Formulario;
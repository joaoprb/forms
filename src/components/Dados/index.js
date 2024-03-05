import styles from "./Dados.module.css";

function Dados ({ children }) {
    return(
        <section className={styles.dados}>
          <h2>Dados do Formulario:</h2>
            {children}
        </section>
    );
}

export default Dados;
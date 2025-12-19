export default function Sobre() {
  return (
    <div className="card">
      <h2>Sobre</h2>

      <img
        src="https://avatars.githubusercontent.com/u/250465712?v=4"
        alt="Avatar do aluno"
        style={{
          borderRadius: "50%",
          display: "block",
          margin: "20px auto"
        }}
      />

      <p><b>Nome:</b> Jorge Ferreira</p>

      <p>
        <b>LinkedIn:</b>{" "}
        <a
          href="https://github.com/JorgeVLF"
          target="_blank"
          rel="noreferrer"
        >
          Acessar perfil
        </a>
      </p>
    </div>
  );
}

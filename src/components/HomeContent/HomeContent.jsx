import "./homecontent.css";

const HomeContent = () => {
  return (
    <main>
      <div className="text-container">
        <h1>Menos de 2% da população brasileira é doadora de sangue</h1>
        <p>
          O Brasil ainda tem um número baixo de pessoas que realizam doações de
          sangue voluntárias e de forma constante.
        </p>
        <button className="red-border-button">
          <a
            href="https://bvsms.saude.gov.br/14-6-dia-mundial-do-doador-de-sangue-2/"
            target="_blank"
          >
            Saiba mais
          </a>
        </button>
      </div>
      <img src="/src/assets/vector_one.png" alt="" />
    </main>
  );
};

export default HomeContent;

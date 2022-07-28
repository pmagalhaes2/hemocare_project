import Cards from "../Cards/Cards";
import Paragraph from "../Paragraph/Paragraph";
import Title from "../Title/Title";
import "./orientations.css";

const Orientations = () => {
  return (
    <>
      <main>
        <img
          src="https://github.com/pmagalhaes2/homecare_project/blob/main/src/assets/vector_five.png?raw=true"
          className="orientation-vector"
        />
        <div className="text-container">
          <Title titleClass="title-black" titleText="Quem pode doar sangue?" />
          <Paragraph
            paragraphClass="text-grey"
            paragraphText="Podem doar sangue pessoas entre 16 e 69 anos e que estejam pesando mais de 50kg. Além disso, é preciso apresentar documento oficial com foto e menores de 18 anos só podem doar com consentimento formal dos responsáveis."
          />
          <Paragraph
            paragraphClass="text-grey"
            paragraphText="Pessoas com febre, gripe ou resfriado, diarreia recente, grávidas e mulheres no pós-parto não podem doar temporariamente."
          />
          <Paragraph
            paragraphClass="text-grey"
            paragraphText="O procedimento para doação de sangue é simples, rápido e totalmente seguro. Não há riscos para o doador, porque nenhum material usado na coleta do sangue é reutilizado, o que elimina qualquer possibilidade de contaminação."
          />
        </div>
      </main>
      <Cards />
    </>
  );
};

export default Orientations;

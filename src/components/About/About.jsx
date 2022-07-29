import ShadedBox from "../ShadedBox/ShadedBox";
import Title from "../Title/Title";
import Paragraph from "../Paragraph/Paragraph";
import "./about.css";

const About = () => {
  return (
    <>
      <div className="about-container">
        <img
          src="https://i.ibb.co/VLhy1x8/logo-hc-3.png"
          alt="Logo HemoCare com efeito espelhado"
        />
        <ShadedBox>
          <Title titleClass="title-black" titleText="Sobre a HemoCare" />
          <Paragraph
            paragraphClass="text-grey"
            paragraphText="O HemoCare é um projeto criado com a intenção de auxiliar pessoas interessadas em doar sangue a encontrar hemocentros mais próximos de suas localidades de forma mais simples e eficaz."
          />
          <Paragraph
            paragraphClass="text-grey"
            paragraphText="A plataforma provê todas as informações necessárias a fim de tirar dúvidas sobre a doação de sangue e acabar com mitos relacionados à prática."
          />
          <Paragraph
            paragraphClass="text-grey"
            paragraphText="Além disso, na HemoCare, os usuários podem preencher um formulário de triagem, evitando uma ida desnecessária a um posto de doação caso não atendam a todos os requisitos para realizar a doação."
          />
        </ShadedBox>
      </div>
      <section className="team">
        <div className="team-text">
          <Title titleClass="title-black" titleText="Equipe do projeto" />
          <Paragraph
            paragraphClass="text-grey"
            paragraphText="Conheça os responsáveis pela criação do projeto HomeCare"
          />
        </div>
        <div className="team-members">
          <div className="member-one"></div>
          <div className="member-two"></div>
        </div>
        <div className="team-text">
          <Paragraph
            paragraphClass="text-grey"
            className="team-members text"
            paragraphText="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit"
          />
        </div>
      </section>
    </>
  );
};

export default About;

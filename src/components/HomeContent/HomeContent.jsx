import Button from "../Button/Button";
import Footer from "../Footer/Footer";
import "./homecontent.css";

const HomeContent = () => {
  return (
    <>
      <main>
        <div className="text-container">
          <h2 className="title-black">
            Menos de 2% da população brasileira é doadora de sangue
          </h2>
          <p className="text-grey">
            O Brasil ainda tem um número baixo de pessoas que realizam doações
            de sangue voluntárias e de forma constante.
          </p>
          <Button
            class="red-border-button"
            link="https://bvsms.saude.gov.br/14-6-dia-mundial-do-doador-de-sangue-2/"
          >
            Saiba mais
          </Button>
        </div>
        <img
          src="https://github.com/pmagalhaes2/homecare_project/blob/main/src/assets/vector_one.png?raw=true"
          alt=""
        />
      </main>
      <section className="banner">
        <img
          src="https://github.com/pmagalhaes2/homecare_project/blob/main/src/assets/vector_two.png?raw=true"
          alt=""
        />
        <div className="text-container">
          <h2 className="subtitle-white">
            14/6 – Dia Mundial do Doador de Sangue
          </h2>
          <p className="text-white">
            A data de 14 de junho foi instituída em homenagem ao nascimento de
            Karl Landsteiner, imunologista austríaco que descobriu o fator Rh e
            as várias diferenças entre os tipos sanguíneos.
          </p>
          <Button class="white-border-button" link="#">
            Saiba mais
          </Button>
        </div>
      </section>
      <section className="donation">
        <h2 className="title-black">Por que a situação é tão crítica?</h2>
        <div className="donation-container">
          <ul className="donation-informations">
            <li className="subtitle-black">Doações no Brasil:</li>
            <div className="percentage">
              <span className="line red"></span>
              <span>1,9%</span>
            </div>
            <p className="text-grey">
              De acordo com dados do Ministério da Saúde (MS), 16 a cada mil
              habitantes são doadores de sangue no país, o que corresponde a
              1,9% da população brasileira.
            </p>

            <li className="subtitle-black">Mínimo recomendado:</li>
            <div className="percentage">
              <span className="line medium-red"></span>
              <span>3%</span>
            </div>
            <p className="text-grey">
              Um país deve ter um mínimo de 3% de doadores em relação ao total
              da população, segundo recomendação da Organização Mundial da Saúde
              (OMS).
            </p>

            <li className="subtitle-black">Quantidade ideal:</li>
            <div className="percentage">
              <span className="line soft-red"></span>
              <span>5%</span>
            </div>
            <p className="text-grey">
              A recomendação (OMS), é que seja de pelo menos 5% em relação a
              população total.
            </p>
          </ul>
          <img
            className="donation-vector"
            src="https://github.com/pmagalhaes2/homecare_project/blob/main/src/assets/vector_three.png?raw=true"
            alt=""
          />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default HomeContent;

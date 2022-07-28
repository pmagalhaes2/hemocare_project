import Button from "../Button/Button";
import Paragraph from "../Paragraph/Paragraph";
import Title from "../Title/Title";
import "./homecontent.css";

const HomeContent = () => {
  return (
    <>
      <main>
        <div className="text-container">
          <Title
            titleClass="title-black"
            titleText="Menos de 2% da população brasileira é doadora de sangue"
          />
          <Paragraph
            paragraphClass="text-grey"
            paragraphText="O Brasil ainda tem um número baixo de pessoas que realizam doações
            de sangue voluntárias e de forma constante."
          />

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
          <Title
            titleClass="subtitle-white"
            titleText="14/6 – Dia Mundial do Doador de Sangue"
          />
          <Paragraph
            paragraphClass="text-white"
            paragraphText="A data de 14 de junho foi
          instituída em homenagem ao nascimento de Karl Landsteiner,
          imunologista austríaco que descobriu o fator Rh e as várias diferenças entre os tipos sanguíneos."
          />
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

      <section className="blood-inventory">
        <h3 className="title-black">Estoque de bolsa de sangue no Brasil</h3>
        <div className="inventory-container">
          <img
            src="https://github.com/pmagalhaes2/homecare_project/blob/main/src/assets/vector_four.png?raw=true"
            alt=""
          />
          <div className="text-container">
            <Paragraph
              paragraphClass="text-grey"
              paragraphText="Em 2019, foram realizadas 3.271.824 coletas de sangue no país. Em 2020, o número caiu para 2.958.665. Já em 2021, o número subiu para 3.035.533 bolsas de sangue coletadas."
            />
            <Paragraph
              paragraphClass="text-grey"
              paragraphText="Até marco de 2022, de acordo com a secretaria, foram coletadas aproximadamente 732 mil bolsas de sangue. Ela lembra que a Organização Mundial da Saúde (OMS) recomenda que a taxa de doadores de sangue na população seja de 1% a 3%. 
              A taxa de doação no Brasil foi de 1,4%, em 2021."
            />

            <Button
              class="red-border-button"
              link="https://forms.gle/toPCuWF4LGHbSCF66"
            >
              Quero doar
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeContent;

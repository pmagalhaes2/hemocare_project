import Button from "../Button/Button";
import Title from "../Title/Title";
import Paragraph from "../Paragraph/Paragraph";
import "./form.css";

const Form = () => {
  return (
    <div className="container">
      <div className="content">
        <div className="text-information">
          <Title
            titleClass="title-black"
            titleText="Entre em contato conosco!"
          />
          <span className="line-red"></span>
          <Paragraph
            paragraphClass="text-grey"
            paragraphText="Preencha os campos abaixo e envie-nos suas dúvidas ou sugestões."
          />
          <Paragraph
            paragraphClass="text-grey"
            paragraphText="Desde já agradecemos a sua mensagem!"
          />
        </div>
        <form>
          <div className="form-container">
            <div className="field">
              <input type="text" placeholder="Seu nome completo" required />
            </div>
            <fieldset className="group">
              <div className="field-inline">
                <input type="tel" pattern="[0-9]({2}) [0-9]{5}-[0-9]{4}" placeholder="Seu telefone" />
                <input type="email" placeholder="Seu e-mail" required />
                <input type="text" placeholder="Assunto" required />
              </div>
            </fieldset>
            <textarea rows="3" placeholder="Sua mensagem" required></textarea>
          </div>
          <Button class="red-button">Enviar</Button>
        </form>
      </div>
    </div>
  );
};

export default Form;

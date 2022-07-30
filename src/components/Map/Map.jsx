import Paragraph from "../Paragraph/Paragraph";
import Title from "../Title/Title";
import Button from "../Button/Button";
import "./map.css";
import states from "./states";
import { useState } from "react";

const Map = () => {
  const [myValue, setMyValue] = useState("default");
  const changeHandler = (e) => {
    setMyValue(e.target.value);
  };

  return (
    <>
      <section className="map">
        <Title titleClass="title-black" titleText="Onde doar?" />
        <Paragraph
          paragraphClass="text-grey"
          paragraphText="Encontre os serviços de hemoterapia mais próximos de você."
        />
        <Paragraph
          paragraphClass="text-grey"
          paragraphText="Aqui você consegue filtrar por estados e cidades."
        />
        <div className="form-group">
          <select
            id="select"
            className="select-state"
            value={myValue}
            onChange={changeHandler}
          >
            <option value="default" required="required">
              * Informe o estado para pesquisa
            </option>
            {states.map((state) => {
              return (
                <option value={state.sigla} key={state.sigla}>
                  {state.sigla}
                </option>
              );
            })}
          </select>
          <input
            type="text"
            placeholder="Informe a cidade na qual deseja doar"
            className="input-state"
          />
          <Button class="red-button">Pesquisar</Button>
        </div>
        <img
          src="https://i.ibb.co/Bns16Zj/map.png"
          alt="Mapa com localidades de hemocentros no Brasil"
        />
      </section>
    </>
  );
};

export default Map;

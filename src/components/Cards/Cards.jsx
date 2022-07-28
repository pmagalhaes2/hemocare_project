import requirements from "./requirements";
import impediments from "./impediments";
import "./cards.css";
import { BsFillCheckSquareFill, BsFillXSquareFill } from "react-icons/bs";
import Title from "../Title/Title";

const Cards = () => {
  return (
    <>
      <div className="cards">
        <div className="card-container">
          <div className="card">
            <Title
              titleClass="title-black"
              titleText="Requisitos para doação"
            />
            <ul className="requirement-list">
              {requirements.map((requirement) => {
                return (
                  <li key={requirement.id} className="requirement-item">
                    <p>
                      <BsFillCheckSquareFill />
                    </p>
                    <p className="text-grey">{requirement.text}</p>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="card">
            <Title
              titleClass="title-black"
              titleText="Impedimentos para doação"
            />
            <ul className="requirement-list">
              {impediments.map((impediment) => {
                return (
                  <li key={impediment.id} className="impediment-item">
                    <p>
                      <BsFillXSquareFill />
                    </p>
                    <p className="text-grey">{impediment.text}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;

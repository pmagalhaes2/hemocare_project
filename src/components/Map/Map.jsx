import Paragraph from "../Paragraph/Paragraph";
import Title from "../Title/Title";
import "./map.css";

const Map = () => {
  return (
    <section className="map">
      <Title titleClass="title-black" titleText="Onde doar?" />
      <Paragraph
        paragraphClass="text-grey"
        paragraphText="Encontre os serviços de hemoterapia mais próximos de você, Aqui você consegue filtrar por estados e cidades."
      />
    </section>
  );
};

export default Map;

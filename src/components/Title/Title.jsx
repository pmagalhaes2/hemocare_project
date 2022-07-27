import "./title.css";

const Title = (props) => {
  return <h2 className={props.titleClass}>{props.titleText}</h2>;
};

export default Title;

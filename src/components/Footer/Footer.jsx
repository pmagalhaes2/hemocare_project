import {
  AiOutlinePhone,
  AiOutlineWhatsApp,
  AiOutlineMail,
} from "react-icons/ai";

import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";

import "./footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="contact-infos">
          <ul>
            <li>
              <AiOutlinePhone />
              <p>(11) 9000-0000</p>
            </li>
            <li>
              <AiOutlineWhatsApp />
              <p>(11) 9000-0000</p>
            </li>
            <li>
              <AiOutlineMail />
              <p>aloatendimento@homecare.com.br</p>
            </li>
          </ul>
        </div>
        <div className="icons">
          <AiFillFacebook />
          <AiFillInstagram />
          <img
            src="https://github.com/pmagalhaes2/homecare_project/blob/main/src/assets/logo-hc%202.png?raw=true"
            alt=""
          />
        </div>
      </footer>
      <div className="copyright">
        <p>Copyright 2022 © Todos os direitos reservados</p>
      </div>
    </>
  );
};

export default Footer;

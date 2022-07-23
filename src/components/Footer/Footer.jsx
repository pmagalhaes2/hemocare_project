import {
  AiOutlinePhone,
  AiOutlineWhatsApp,
  AiOutlineMail,
} from "react-icons/ai";

import "./footer.css";

const Footer = () => {
  return (
    <footer>
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
    </footer>
  );
};

export default Footer;

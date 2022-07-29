import contacts from "./contactList";

import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";

import "./footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="contact-infos">
          <ul>
            {contacts.map((contact) => {
              return (
                <li key={contact.id}>
                  <contact.component />
                  <p>{contact.information}</p>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="icons">
          <a href="https://www.facebook.com/" target="_blank">
            <AiFillFacebook />
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <AiFillInstagram />
          </a>
          <img
            src="https://i.ibb.co/kKPpSns/logo-hc-2.png"
            alt="Logo Home Care nas cores cinza e branco."
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

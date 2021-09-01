import React from "react";
import { slide as Menu } from "react-burger-menu";
import { FaGithub } from 'react-icons/fa';
import { BsKanban } from 'react-icons/bs';

// import ContactForm from './ContactForm';

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header__container">
          <h1 className="logo">Benford's Law Calculator</h1>
          <Menu right width={"350px"}>
            <h2>Thank You.</h2>
            <p>Visit us on Github to contribute or view our project roadmap.</p>
            {/* <ContactForm /> */}
            <div className="menu-links">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/john-rock/benfords-law"
              >
                <FaGithub /> View on Github
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/john-rock/benfords-law/projects/2?fullscreen=true"
              >
                <BsKanban /> Project Roadmap
              </a>
            </div>
          </Menu>
        </div>
      </div>
    </>
  );
};

export default Header;

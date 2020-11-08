import React from 'react';
import { slide as Menu } from 'react-burger-menu';

// import ContactForm from './ContactForm';

const Header = () => {
    return (
        <>
            <div className="header">
                <div className="header__container">
                    <h1 className="logo">Benford's Law Calculator</h1>
                    <Menu right width={'370px'}>
                        <h2>Thank You.</h2>
                        <p>
                            If you have found this tool useful or would like to
                            suggest a feature please use the <strong>Contact</strong> link below.
                            </p>
                            <p>
                            This tool is open source, if you would like to contribute or view the roadmap visit the <strong>Project Board</strong>.
                        </p>
                        {/* <ContactForm /> */}
                        <div className="menu-links">
                            <a href="mailto:johnmrock.jr@gmail.com?subject=Benfords Law Calculator Feedback">
                                Contact
                            </a>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://github.com/john-rock/benfords-law/projects/2?fullscreen=true"
                            >
                                Project Board
                            </a>
                        </div>
                    </Menu>
                </div>
            </div>
        </>
    );
};

export default Header;

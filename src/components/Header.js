import React from 'react';
import { slide as Menu } from 'react-burger-menu';

import ContactForm from './ContactForm';

const Header = () => {
    return (
        <>
            <div className="header">
                <div className="header__container">
                    <h1 className="logo">Benford's Law Calculator</h1>
                    <Menu right width={ '370px' }>
                        <h2>Thank You.</h2>
                        <p>If you have found this tool useful or would like to suggest a feature fill out the form below. All feedback is greatly appreciated.</p>
                        <ContactForm />
                    </Menu>
                </div>
            </div>
        </>
    );
};

export default Header;

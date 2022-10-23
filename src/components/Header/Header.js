import React from 'react';

import Dropdown from "../Dropdown/Dropdown";

const Header = ({ handleChange }) => {
    return (
        <header>
            <Dropdown handleChange={handleChange} />
        </header>
    );
};

export default Header;
import React from 'react';

import Header from "../Header/Header";
import {UserInfo} from "../UserInfo/UserInfo";
import {Search} from "../Search/Search";

import cinema from "./cinema.png";
import css from './MainHeader.module.css';

const MainHeader = ({handleChange}) => {
    return (
        <div className={css.Header}>

            <div className={css.upperMenu}>
                <div className={css.logoSearch}>
                <div className={css.logoName}>
                    <img className={css.logo} src={cinema} alt={'logo'}/>
                    Cinematron
                </div>
                <Search/>
                </div>
                <Header handleChange={handleChange} />
            <UserInfo/>
            </div>
        </div>
    );
};

export {MainHeader};
import React from 'react';

import {Genres, MovieList} from "../../components";
import {MainHeader} from "../../components";

import css from "./MainMoviePage.module.css";


const MainMoviePage = ({handleChange}) => {
    return (<div className={css.mainPage}>
<div className={css.upperHeader}> <MainHeader handleChange={handleChange}/> </div>
        <div className={css.flexData}>
<div className={css.sideBar}>
    <Genres/>
</div>
<div className={css.pageElem}>
    <MovieList/>
</div>

        </div>
    </div>
    );
};

export {MainMoviePage};
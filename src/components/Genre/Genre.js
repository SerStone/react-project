import {useDispatch} from "react-redux";

import {filterActions} from "../../redux";

import css from './OneGenreButt.module.css';


const Genre = ({genre}) => {

    const dispatch = useDispatch();

    return (
        <li className={css.oneGenre}>
            <button className={css.buttonGenre}
                onClick={() => dispatch(filterActions.setGenre(genre.id))}>{genre.name}</button>
        </li>
    );
};

export {Genre};
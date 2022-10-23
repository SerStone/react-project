import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {genreActions} from "../../redux";
import {Genre} from "../Genre/Genre";

import css from './FilterGenre.module.css';







const Genres = () => {

    const {genre} = useSelector(state => state.genre);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(genreActions.getAll())
    }, [dispatch]);


    return (
        <ul className={css.cssFilter}>
            {
                genre?.genres && genre.genres.map(genre =>
                <Genre key={genre.id} genre={genre}/>)
            }
        </ul>
    );
}



export {Genres};
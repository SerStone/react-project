import React, {useEffect,useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Pagination} from "@mui/material";

import {MovieListCard} from "../MovieListCard/MovieListCard";
import {filterActions} from "../../redux";
import {movieService} from "../../services";
import {AddingComp} from "../AddingComp/AddingComp";

import css from './MovieList.module.css';
import notFound from './notFound.jpg';





const MovieList = () => {
    const dispatch = useDispatch();
    const {genre} = useSelector(state => state.genre);
    const {totalPages, currentPage,searchValue,currentGenre} = useSelector(state => state.filter);

    const [foundMovies, setFoundMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const {results, total_pages} = foundMovies;

    const SearchMovies = async () => {
        if (searchValue) {
            try {
                const {data} = await movieService.search(movieService.searchFor(searchValue, currentPage));
                setFoundMovies(data);
                dispatch(filterActions.setTotalPages(data.total_pages));
            } catch (e) {
                alert('Not found(Unreachable)(((');
            }
        }
    };

    const getMovies = async () => {
        try {
            setIsLoading(true);
            const {data} = await movieService.getAll(movieService.moviesFor(
                'popular',
                currentGenre,
                currentPage
            ));
            setFoundMovies(data);
            setIsLoading(false);
        } catch (e) {
            alert('Not found...');
        }
    };

    useEffect(() => {
        getMovies();
        SearchMovies();

    }, [dispatch,searchValue, currentPage, currentGenre]);

    useEffect(() => {
        if (total_pages) {
            dispatch(filterActions.setTotalPages(total_pages));
        }
    }, [dispatch,total_pages]);

    const filteredMovies = results && results.filter(movie => movie.title.toLowerCase().includes(searchValue.toLowerCase()))

    return (
        <section className={css.movies}>

                <div className={css.moviesInner}>

                    <div>
                        <AddingComp/>
                    </div>
                </div>
                <br/>
                <h3>Popular Films</h3>
                <ul className={css.container}>
                    {results && filteredMovies.map((movie) => <MovieListCard key={movie.id} notFound={notFound} movie={movie}
                                 genre={genre.genres}/>)}
                </ul>

                <Pagination
                    className={css.MuiPaginationUl}
                    color={"primary"}
                    count={total_pages}
                    variant="text"
                    page={currentPage}
                    shape="rounded"
                    onChange={(_, num) => dispatch(filterActions.setCurrentPage(num))}/>


        </section>

    );
};

export {MovieList};
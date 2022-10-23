import {useEffect, useState} from "react";
import {useParams, useNavigate} from "react-router-dom";
import StarRatings from "react-star-ratings/build/star-ratings";

import {movieService} from "../../services";

import css from './DetailsMoviePage.module.css';

const DetailsMoviePage = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [movie, setMovie] = useState();
    const movies = movie && movie;

    useEffect(() => {

        const fetchMovie = async () => {
            try {
                const {data} = await movieService.getById(id);
                await setMovie(data);
            } catch (e) {
            }
        };
        fetchMovie();
    }, [id]);

    if (!movie) {
        return 'Loading...'
    }

    const {title,release_date,runtime,adult,genres,production_countries,backdrop_path,vote_average,overview} = movies

    const img = `https://image.tmdb.org/t/p/original/${movie && backdrop_path}`;

    return (
        <div className={css.detailedContainer}>
            { backdrop_path && <img className={css.posterImg} src={img} alt={'posts'}/>}

                                        <h3 className={css.title}>
                                    {title}
                                        </h3>
            <div className={css.more}>
                <div className={css.information}>

                                        <div className={css.date}>
                                        <span className={css.line}>Year: {release_date}</span>
                                            <br/>
                                        <span className={css.line}>Time: {runtime} min</span>
                                            <br/>
                                        <span className={css.line}>Recommended age: {adult ? '18+' : '14+'}</span>
                                        </div>
                                     <div className={css.line}>
                                        <span>Countries: </span>
                                    {
                                        production_countries.map((country, index) =>
                                        <span className={css.line} key={index}>{country.iso_3166_1}</span>
                                        )
                                    }
                                    </div>

                                        <div>
                                        <span className={css.line}>Genres: </span>
                                    {
                                        genres.map(genre =>
                                        <span className={css.line} key={genre.id}>

                                  <span>{genre.name+' '}</span>
                                        </span>
                                        )
                                    }
                                        </div>
                                    {vote_average ? <span className={css.line}>IMDB : {vote_average}</span> : <span className={css.line}>IMDB : 0</span>}
                                     <br/>
                    <div className={'rating-stars'}>

                                         <StarRatings
                                            starSpacing={'2px'}
                                            rating={vote_average}
                                            starDimension='25px'
                                            starRatedColor='rgb(255, 188, 11)'
                                            numberOfStars={10}/>
                                </div>
                                 </div>
                                     <div className={css.overview}><p>{overview}</p></div>
                                        </div>
                                         <button className={css.backBtn} onClick={()=> navigate(`/`)}><span
                                             className="text">Back</span><span>Sure?</span></button>
                                        </div>
                                        );
                                    };


                                    export {DetailsMoviePage};
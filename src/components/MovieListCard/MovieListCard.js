import {Link} from "react-router-dom";
import StarRatings from "react-star-ratings/build/star-ratings";

import {GenreBadge} from "../GenreBadge/GenreBadge";

import css from './MovieListCard.module.css';

const MovieListCard = ({movie,genre,notFound}) => {

    const {id,title,vote_average,poster_path,genre_ids,release_date}= movie;
    const url =  "https://image.tmdb.org/t/p/w500";

    genre = genre || [];
    const badges = genre.filter(genre => genre_ids.includes(genre.id));
    badges.length = 3;

    return (
        <div className={css.movie}><Link className={css.linkEdit} to={`movie/${id}`}>
                {poster_path ? <img src={url + poster_path} alt={movie.title}/>:<img src={notFound} alt={notFound}/>}
                <div className={css.movieInfos}>
            <div className={css.GenreBadge}>
                        {badges.map(badge => <GenreBadge key={badge.id} genre_ids={genre_ids} badge={badge.name}/>)}
            </div>
                        <div className={css.movieTitle}>{title}</div>
                    {vote_average ? <span>IMDB : {vote_average}</span> : 'IMDB : 0'}
                    <br/>
                    <StarRatings
                        starSpacing={'2px'}
                        rating={vote_average}
                        starDimension='15px'
                        starRatedColor='rgb(255, 188, 11)'
                        numberOfStars={10}/>
                    <h5 className={css.releaseDate}>{release_date?release_date:'Without Date'}</h5>
                </div>

        </Link></div>
    );
};

export {MovieListCard};
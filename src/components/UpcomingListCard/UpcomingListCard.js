import StarRatings from "react-star-ratings/build/star-ratings";
import {Link} from "react-router-dom";

import {GenreBadge} from "../GenreBadge/GenreBadge";

import css from './UpcomingListCard.module.css';

const UpcomingListCard = ({movie,genres,notFound}) => {
    const {id,title,vote_average,poster_path,genre_ids}= movie;

    const url =  "https://image.tmdb.org/t/p/w500";

genres = genres || [];


    const badges = genres.filter(genre => genre_ids.includes(genre.id))
    badges.length = 3
    return (
        <div className={css.movieUp}><Link className={'linkEdit'} to={`movie/${id}`}>

            <div >
                {poster_path ? <img src={url + poster_path} alt={movie.title}/>:<img src={notFound} alt={notFound}/>}
                <div className={css.movieUpInfos}>
                    <div className={css.GenreBadge}>
                        {badges.map(badge => <GenreBadge key={badge.id} genre_ids={genre_ids} badge={badge.name}/>)}
                    </div>
                    <p className={css.movieUpTitle}>{title}</p>
                    {vote_average ? <span>IMDB : {vote_average}</span> : 'IMDB : 0'}
                    <br/>
                    <StarRatings
                        starSpacing={'2px'}
                        rating={vote_average}
                        starDimension='15px'
                        starRatedColor='rgb(255, 188, 11)'
                        numberOfStars={10}/>
                </div>
            </div>
        </Link></div>
    );
};

export {UpcomingListCard};
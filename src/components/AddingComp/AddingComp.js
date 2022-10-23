import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination,Scrollbar} from "swiper";

import {movieActions} from "../../redux";
import {genreActions} from "../../redux";
import {movieService} from "../../services";
import {UpcomingListCard} from "../UpcomingListCard/UpcomingListCard";

import css from './AddingComp.module.css';
import 'swiper/css';
import 'swiper/css/navigation';

const AddingComp = () => {

    const dispatch = useDispatch();
    const {moviesUpcoming} = useSelector(state => state.movie);
    const {genre} = useSelector(state => state.genre);
    const {results} = moviesUpcoming;

    useEffect(() => {
        dispatch(genreActions.getAll());
        dispatch(movieActions.getAllUpcoming({type: movieService.moviesFor('upcoming')}));
    }, [dispatch]);

    return (
        <section className={css.releases}>
            <h3>Upcoming Films</h3>
                 <Swiper
                 modules={[Navigation,Pagination,Scrollbar]}
                 slidesPerView={5}
                 navigation>
                        {
                            genre &&
                            results && results.map((movie) =>
                             <SwiperSlide key={movie.id} >
                                <UpcomingListCard key={movie.id} movie={movie}
                                                  genres={genre.genres}
                                />
                             </SwiperSlide>
                            )}
                 </Swiper>
        </section>
    );
};

export {AddingComp};
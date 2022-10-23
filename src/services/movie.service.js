import {axiosService} from "./axios.service";
import {urls} from "../configs";


const api_key= "api_key=11ce026e9bb5ba2d63b75cc8f9735430"


const movieService = {
    getAll: (type) => axiosService.get(type),
    search: (value) => axiosService.get(value),
    getById: (id) => axiosService.get(`${urls.movie}/${id}?${api_key}`),
    discover: `/discover${urls.movie}?${api_key}`,
    moviesFor: (type, genre, page=1) => `${urls.movie}/${type}?${api_key}&with_genres=${genre || null}&page=${page}`,
    searchFor: (query, page) => `search${urls.movie}?${api_key}&query=${query}&page=${page}`
};
export {
    movieService,

}
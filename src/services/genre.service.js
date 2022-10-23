
let baseUrl = 'https://api.themoviedb.org/3';

const myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMWNlMDI2ZTliYjViYTJkNjNiNzVjYzhmOTczNTQzMCIsInN1YiI6IjYzNGFhMWFkNjg4Y2QwMDA3YzM4ZTkwYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RHWNxvXPpi6PIkmwlUUgv0u3yZjN-eQFY2SIe_DXHjc");

const getGenres = () => fetch(baseUrl + '/genre/movie/list',{method:'GET', headers: myHeaders})
    .then(value => value.json());

export {
    getGenres
};
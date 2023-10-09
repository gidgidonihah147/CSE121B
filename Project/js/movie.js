import { getParams } from './utils.mjs';
import ExternalServices from './ExternalServices.mjs';
import MovieDetails from './movieDetails.mjs';

const dataSource = new ExternalServices();
const movieTitle = getParams('movie');
const movie = new MovieDetails(dataSource, movieTitle);
console.log(movie);
movie.init();

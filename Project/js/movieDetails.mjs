import {
  qs,
  renderListWithTemplate,
} from './utils.mjs';


export default class MovieDetails {
  constructor(dataSource, movieTitle) {
    this.movieTitle = movieTitle;
    this.movie = {};
    this.dataSource = dataSource;
  }

  async init() {
    this.movie = await this.dataSource.findMovieByTitle(this.movieTitle);
    renderListWithTemplate(movieTemplate, qs('main'), [this.movie])
  }
}



function movieTemplate(movie) {
  return `<section class='movie-detail'>
    <h2>${movie.Title}</h2>
    <br>
    <br>
    <picture>
        <source media='(min-width: 1200px)' srcset='${movie.Poster}'>
        <img
        class='divider'
        src='${movie.Poster}'
        alt='${movie.Title}'
        />
      </picture>
      <div id='movie-info'>
        <h3>Movie Details</h3>
        <ul>
            <div id='basic-info'>
                <li>Year: ${movie.Year}</li>
                <li>Rating: ${movie.Rated}</li>
                <li>Release Date: ${movie.Released}</li>
                <li>Runtime: ${movie.Runtime}</li>
                <li>IMDB Rating: ${movie.imdbRating}</li>
            </div>
            <li>Plot: ${movie.Plot}</li>
        </ul>
      </div>
      <div id='cast-crew'>
        <h3>Cast & Crew</h3>
        <ul>
            <li>Director: ${movie.Director}</li>
            <li>Writers: ${movie.Writer}</li>
            <li>Actors: ${movie.Actors}</li>
        </ul>  
      </div> 
      <div id='reviews-awards>
        <h3>Reviews & Awards</h3>
        <ul>
            <li> ${movie.Ratings[0].Source}: ${movie.Ratings[0].Value}</li>
            <li>Metascore: ${movie.Metascore}</li>
            <li>imdb Rating: ${movie.imdbRating}</li>
            <li>Awards: ${movie.Awards}</li>
        </ul>
      </div>
    </section>`
}

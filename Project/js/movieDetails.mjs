import {
  qs,
  renderListWithTemplate,
  getParams
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
  const movieTitle = getParams('movie');
  const titleCheck = movie.Title;
  if (titleCheck == undefined) {
    return `<section class='movie-detail'>
    <h2> ERROR - The movie "${movieTitle}" does not exist</h2>
    <p>Please try searching for a different movie</p>
    <section class="project">
                <form action="/cse121b/Project/movie.html?">
                    <input type="search" id="movieSearch" name="movie" placeholder="Search Movies Here" />
                </form>
            <p>Alternatively choose a genre and select a movie from the list I chose - </p>
            <ul>
                <li id="action">
                    <a href="index.html?genre=action"> Action </a>
                </li>
                <li id="Horror">
                    <a href="index.html?genre=horror"> Horror </a>
                </li>
                <li id="drama">
                    <a href="index.html?genre=drama"> Drama </a>
                </li>
                <li id="fantasy">
                    <a href="index.html?genre=fantasy"> Fantasy </a>
                </li>
            </ul>
        </section>

        <section class="products">
            <h2><span class="title"></span></h2>
            <ul class="product-list"></ul>
        </section>
    </section>`
  } else {

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
}
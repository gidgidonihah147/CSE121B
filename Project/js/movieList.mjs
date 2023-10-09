import { getLocalStorage, renderListWithTemplate } from './utils.mjs';

function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error('Bad Response');
  }
}
function sortByProperty(property){  
  return function(a,b){  
     if(a[property] > b[property])  
        return 1;  
     else if(a[property] < b[property])  
        return -1;  
 
     return 0;  
  }  
}

function movieCardTemplate(movie) {
    return `<li class='movie-card'><a href='/cse121b/Project/movie.html?movie=${movie.Title}'><img
    src='${movie.Poster}'
    alt='Image of ${movie.Title}'
    <h3 class='card__director'>${movie.Director}</h3><h2 class='movie__name'>${movie.Title}</h2><p >${movie.Year}</p></a></li>
    
    `;    
  }
  var sort = 'Title';


export default class MovieListing {
    constructor(genre, dataSource, listElement) {
      this.genre = genre;
      this.dataSource = dataSource;
      this.listElement = listElement;
      this.path = `/cse121b/Project/json/${this.genre}.json`;
    }
    getData() {
      return fetch(this.path)
        .then(convertToJson)
        .then((data) => data.sort(sortByProperty(sort)));
    }
    async init() {
      const list = getLocalStorage(this.genre);
      const localJSON = await this.getData();
      this.renderLocalJson(list,localJSON);
    }
    
    renderLocalJson(list,LocalJSON){
      if (list == null){
        LocalJSON.sort(sortByProperty(sort));
        renderListWithTemplate(movieCardTemplate, this.listElement, LocalJSON);
      }
      else{
        list.sort(sortByProperty(sort));
        renderListWithTemplate(movieCardTemplate, this.listElement, list)
      }
    }
}
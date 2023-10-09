function sortByProperty(property){  
  return function(a,b){  
     if(a[property] > b[property])  
        return 1;  
     else if(a[property] < b[property])  
        return -1;  
 
     return 0;  
  }  
}

var sort = 'title';


function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error('Bad Response');
  }
}


export default class MovieData {
  constructor(genre) {
    //Initial json file I used was just movies.json before I split them between genre's
    //this.path = `../public/json/movies.json`;
    this.genre = genre;
    this.path = `/json/${this.genre}.json`;
  }
  async getData() {
    return fetch(this.path)
      .then(convertToJson)
      .then((data) => data.sort(sortByProperty(sort)));
  }
 
  async findProductById(title) {
    const products = await this.getData();
    return products.find((item) => item.Title === title);
  }
}


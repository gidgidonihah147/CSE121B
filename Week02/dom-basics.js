//Activity 2.1
const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);

//Activity 2.2
const image = document.createElement("img");
//Provided image wouldnt load, found another animal image to use instead
image.setAttribute("src","https://www.awsfzoo.com/media//IMG_3031-1024x683.jpg");
image.setAttribute("alt","Picutre of the favorite Jaguar Animal")
document.body.appendChild(image);

//Activity 2.3
const newDiv = document.createElement("div");
newDiv.innerHTML = "<ul><li>One</li><li>Two</li><li>Three</li></ul>";
document.body.appendChild(newDiv);

//Activity 2.4
const section = document.createElement("section");
section.innerHTML = "<h2>CSE 121b</h2> <p>Welcome to Javascript Language</p>";
document.body.appendChild(section);
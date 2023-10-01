/* LESSON 3 - Programming Tasks 
1.1 Download the starter files (2). Place the w04-task.html file on the root cse121b folder and the w04-task.js file in the scripts folder.
*/

/* Profile Object  */
//2.Object Literal.1 Declare a new object literal variable named myProfile to hold information about yourself and assign an empty object to the variable.
//2.Object Literal.2 Add a property to this object literal named name and set its value to be your name as a string.
//2.Object Literal.3 Add a property named photo. Set its value to be an image's path and name (one used in Programming Task 2) as a string.
//2.Object Literal.4 Add a property named favoriteFoods. Set its value to be an array of your favorite foods as strings
//2.Object Literal.5 Add a property named hobbies. Set its value to be an array of your hobbies as strings.
//2.Object Literal.6 Add a property named placesLived. Set its value to be an empty array.
let myProfile = {
    name: "Tristin Parker",
    photo: "../images/PersonalImage.jpeg",
    favoriteFood: ['Steak and Eggs', 'Hamburger', 'Breakfast Bowls'],
    hobbies: ['Soccer', 'Dungeons & Dragons', 'Xbox'],
    placesLived: []
};

/* Populate Profile Object with placesLive objects */
//2.Object Literal.7 Using code outside of the myProfile definition, add an item to the placesLived array where this new item itself is object with two properties: place and length and for each of these properties, add appropriate values as strings.
myProfile.placesLived.push({
    place: 'Logan, Utah',
    length: '15 years'
})
//2.Object Literal.8 Add additional object literals with appropriate values to the placesLived array for each place you have lived.
myProfile.placesLived.push({
    place: 'Smithfield, Utah',
    length: '3 years'
})
myProfile.placesLived.push({
    place: 'Riverside, CA',
    length: '2 years'
})
myProfile.placesLived.push({
    place: 'Smithfield, Utah',
    length: '1 year'
})
myProfile.placesLived.push({
    place: 'Rexburg, Idaho',
    length: '3 years'
})
myProfile.placesLived.push({
    place: 'Logan, Utah',
    length: '2 years'
})
//Console log to make sure everything worked correctly
console.log(myProfile);



/* DOM Manipulation - Output */
//2.DOM Manipulation (Output).1 Assign the value of the name property of the myProfile object to the HTML element with an ID of name.
/* Name */
document.querySelector('#name').textContent = myProfile.name;
/* Photo with attributes */
//2.DOM Manipulation (Output).2 Assign the value of the photo property as the src attribute of the HTML <img> with an ID of photo.
// Select the HTML element with the ID "photo"
let imgElement = document.getElementById('photo');

// Assign the value of the "photo" property to the "src" attribute
imgElement.src = myProfile.photo;
//2.DOM Manipulation (Output).3 Assign the value of the name property as the alt attribute of the HTML <img> with an ID of photo.
imgElement.alt = myProfile.name;

//2.DOM Manipulation (Output).4 For each favorite food in the favoriteFoods property,
    //2.DOM Manipulation (Output).4.1 create an HTML <li> element (💡createElement)
    //2.DOM Manipulation (Output).4.2 place the value of the favoriteFoods array element into the textContent of this new li element, and then
    //2.DOM Manipulation (Output).4.3 append this new <li> element with content as a child of the HTML <ul> element with an ID of favorite-foods.
/* Favorite Foods List*/
myProfile.favoriteFood.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

//2.DOM Manipulation (Output).5 Repeat the previous process of creating a list of items for each hobby in the hobbies property of the object and appending each item to the HTML <ul> element with an ID of hobbies.
/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
});
//2.DOM Manipulation (Output).6 For each object in the placesLived property:
//2.DOM Manipulation (Output).6.1 Create an HTML <dt> element and put its place property in the <dt> element.
//2.DOM Manipulation (Output).6.2 Create an HTML <dd> element and put its length property in the <dd> element
/* Places Lived DataList */
// Select the HTML <dl> element with the ID "places-lived"
let dlElement = document.getElementById('places-lived');

// Loop through each object in the "placesLived" property
for (let i = 0; i < myProfile.placesLived.length; i++) {
  let place = myProfile.placesLived[i].place;
  let length = myProfile.placesLived[i].length;

  // Create a new <dt> element and set its inner HTML to the value of "place"
  let dtElement = document.createElement('dt');
  dtElement.innerHTML = place;

  // Create a new <dd> element and set its inner HTML to the value of "length"
  let ddElement = document.createElement('dd');
  ddElement.innerHTML = length;

//2.DOM Manipulation (Output).7 Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived.
  dlElement.appendChild(dtElement);
  dlElement.appendChild(ddElement);
}

/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
//2.1 Declare and instantiate a variable to hold your name. Identify the variable as "fullName".
let fullName = "Tristin Parker";
//2.2 Declare and instantiate a variable to hold the current year. Identify the variable as "currentYear".
const currentYear = "2023";
//2.3 Declare and instantiate a variable to hold the file path (location) and file name of the image that you placed in the images folder as a string. Identify the variable as "profilePicture".
let profilePicture = "images/PersonalImage.jpeg";
//4.5 Use the setAttribute method to set the alt property of the image element and set its value to equal 'Profile image of [Insert Name Variable]' where the name variable comes from Step 2. Always use a template literal to create the string.
let profileAlt = `Profile name of ${fullName}`;


/* Step 3 - Element Variables */
//3.1 Use the document.getElementById() method to get the HTML element with the id of name and store it in a const variable named "nameElement".
const nameElement = document.getElementById('name');
//3.2 Use the document.getElementById() method to get the HTML element with the id of food and store it in a const variable named "foodElement".
const foodElement = document.getElementById('food');
//3.3 Use the document.querySelector() method to get the element with the id of "year" and store it in a variable named "yearElement".
const yearElement = document.querySelector('#year');
//3.4 Use any viable method to get the profile image element stored into a variable named "imageElement".
//Alternate option saved below
const imageElement = document.querySelector('img');



/* Step 4 - Adding Content */
//4.1 Assign the nameElement's innerHTML property the fullName variable value.
//4.2 Surround the fullName value with <strong> tags.
nameElement.innerHTML = `<strong>${fullName}</strong>`;
//4.3 Use the textContent property to set the value of the element to the value of the variable currentYear.
yearElement.innerHTML = `${currentYear}`;
//4.4 Use the setAttribute method to set the src property of the image element and set its value to the file path variable set in Step 2.
imageElement.setAttribute ('src',profilePicture);
//4.5 Use the setAttribute method to set the alt property of the image element and set its value to equal 'Profile image of [Insert Name Variable]' where the name variable comes from Step 2. Always use a template literal to create the string.
imageElement.setAttribute ('alt',profileAlt);




/* Step 5 - Array */
//5.1 Declare an array variable to hold your favorite foods.
const favoriteFood = ['Steak and Eggs','Hamburger','Breakfast Bowls'];
//5.2 Modify the HTML element with the id of food to display your favorite foods array. 💡Remember that you set a variable named foodElement in Step 3 to reference the element with the id of food.
foodElement.innerHTML = `${favoriteFood}`;
//5.3 Declare and instantiate a variable to hold another single favorite food item.
const singleFood = "Pizza";
//5.4 Add the value stored in this new variable to your favorite food array.
favoriteFood.push(singleFood);
//5.5 Append the new array values onto the displayed content of the HTML element with the id of food using a += operator and a <br> (line break character) to provide a line break as shown in Figure 2.
foodElement.innerHTML += `<br>${favoriteFood}`;
//5.6 Remove the first element in the favorite food array.
favoriteFood.shift(1);
//5.7 Again, append the array output showing the modified array, using a line break as shown in step 5.5.
foodElement.innerHTML += `<br>${favoriteFood}`;
//5.8 Remove the last element in the favorite food array.
favoriteFood.pop(1);
//5.9 Append the array output with this final modified favorite foods array. Hint: Step 5.5.
foodElement.innerHTML += `<br>${favoriteFood}`;

//Alternate way of inserting picture if there was no img inside <picture>
//3.4 Use any viable method to get the profile image element stored into a variable named "imageElement".
//const imageElement = document.querySelector('picture');
//4.4 Use the setAttribute method to set the src property of the image element and set its value to the file path variable set in Step 2.
//imageElement.innerHTML = `<img src="images/Personal Image.jpeg" alt="Personal Image">`;



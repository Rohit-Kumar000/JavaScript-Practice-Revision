/**************************** Children of an Element ****************************/

// console.log(document.body.firstChild);          // First Child
// console.log(document.body.lastChild);      // Last Child
// console.log(document.body.childNodes);          // All Child Nodes


/**************************** Parents of an Element ****************************/


// console.log(document.body.firstChild.parentNode);
// console.log(document.body.firstChild.parentElement);


/**************************** Siblings of an Element ****************************/

// console.log(document.body.firstChild.nextSibling);


/**************************** Element only Navigation ****************************/

// console.log(document.body.firstChild);                  // First Child (#textnode)
// console.log(document.body.firstElementChild);           // Element Child

/**************************** Searching DOM ****************************/

// let a = document.getElementsByClassName("card-title");       // getElementsByClassName[]
// a[0].style.color = "red";

// let b = document.getElementById("card-text")                // getElementById
// b.style.color = "brown";

// let c = document.getElementsByTagName("li");        // getElementByTagName[]
// c[0].style.color = "yellow";

// let d = document.querySelector(".card");
// d.style.color = "cyan"

// let e = document.querySelectorAll(".card");
// e[0].style.color = "blue"


/**************************** Practice Set ****************************/

// Q.1 Create a navbar and change the color of its first element to red.

// document.getElementsByClassName("navbar-brand")[0].style.color = "red";


// Q.2 Create a table without tbody. Now use "View page source" button to check whether it has a tbody or not.

/*
I created the table without writing a <tbody> tag. When I checked the View Page 
Source, there was no <tbody> in the original HTML source. However, the browser 
automatically adds a <tbody> element to the DOM when the page is loaded.
*/


// Q.3 Create an element with 3 children. Now change the color of first and last element to green.

/*
let a = document.getElementsByClassName("container")[0];
a.firstElementChild.style.color = "green";
a.lastElementChild.style.color = "green";
*/

// Q.4 Write a javascript code to change background of all <li> tag to cyan.

/*
let a = document.getElementsByTagName("li");

for (let i = 0; i < a.length; i++) {
    a[i].style.color = "cyan";
}
*/

// Q.5 Which of the following is used to look for the farthest ancestor that matches a given CSS selector
// a. matches       b. closet       c. contains         d. none of these (-)
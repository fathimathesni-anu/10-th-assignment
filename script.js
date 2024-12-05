//Change the text of the heading (h1) element to "Text Changed!".
const headerElement = document.getElementById("header");

headerElement.textContent = "Text Changed!"
//Change the text color of all paragraphs with the class text to blue.
const updatedtextcolor = document.getElementsByClassName("text");
for (let i = 0; i < updatedtextcolor.length; i++) {
  updatedtextcolor[i].style.color = 'blue';
}
// Log the text content of each li element to the console.
const listitems = document.querySelectorAll("li");
console.log(listitems[0].textContent);
console.log(listitems[1].textContent);
console.log(listitems[2].textContent);
//Change the background color of the first li element to yellow. 
const firstelement = document.querySelector("li");
firstelement.style.backgroundColor = "yellow";
//Change the text color of all li elements to green
const colorElements = document.getElementsByTagName("li");
for (let i = 0; i < colorElements.length; i++) {
  colorElements[i].style.color = "green";
}


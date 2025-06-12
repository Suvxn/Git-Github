// add a alert to the page
alert("Welcome to the page!");

// add a console log to the page
console.log("This is a console log message.");

// add a button to the page
const button = document.createElement("button");
button.textContent = "Click Me!";
button.addEventListener("click", () => {
    alert("Button was clicked!");
});
document.body.appendChild(button);
// add a paragraph to the page
const paragraph = document.createElement("p");
paragraph.textContent = "This is a paragraph.";
document.body.appendChild(paragraph);

// add a array of numbers and log it to the console
const numbers = [1, 2, 3, 4, 5];
console.log("Array of numbers:", numbers);

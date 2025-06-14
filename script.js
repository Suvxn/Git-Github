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

//  add a script to handle the loader animation

const loader = document.createElement("div");
loader.className = "loader";
document.body.appendChild(loader);
// Simulate loading
setTimeout(() => {
    loader.style.display = "none";
    alert("Loading complete!");
}, 3000); // 3 seconds loading time
// add a style for the loader
const style = document.createElement("style");
style.textContent = `
.loader {
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
    
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
    }
    `;      
document.head.appendChild(style);
// add a function to change the background color of the page    
function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}
// add a button to change the background color
const colorButton = document.createElement("button");
colorButton.textContent = "Change Background Color";
colorButton.addEventListener("click", () => {
    const colors = ["#FF5733", "#33FF57", "#3357FF", "#F0F0F0"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    changeBackgroundColor(randomColor);
});
document.body.appendChild(colorButton);

// add a function to toggle the visibility of the paragraph
function toggleParagraphVisibility() {
    paragraph.style.display = paragraph.style.display === "none" ? "block" : "none";
}
// add a button to toggle the paragraph visibility
const toggleButton = document.createElement("button");
toggleButton.textContent = "Toggle Paragraph Visibility";
toggleButton.addEventListener("click", toggleParagraphVisibility);

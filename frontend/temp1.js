const newDiv = document.createElement('div');
newDiv.id = 'myDiv';
newDiv.textContent = 'Hello, I am a new div!';
document.body.appendChild(newDiv);

// Accessing the element using DOM
const accessedDiv = document.getElementById('myDiv');

console.log(accessedDiv.textContent); // Outputs: Hello, I am a new div!
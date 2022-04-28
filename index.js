// Write your code here!
document.querySelector('main').remove();

const newHeader = document.createElement('h1');
newHeader.id = "victory";
newHeader.innerHTML = "Woinshet is the champion";
document.body.appendChild(newHeader);
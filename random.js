
let btnRandom = document.querySelector('button');
let result = document.querySelector('h1');


let users = [

//  Your names here
// anything in this array should be in single qoute '' and end with ,

];

function getRandomNumber(min, max) {
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;

    return result;
}

setInterval(btnRandom.addEventListener('click', () => {
    let index = getRandomNumber(0, users.length-1);
    result.innerText = "The Winner is: " + users[index];
}), 2000);


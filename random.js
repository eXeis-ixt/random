
let btnRandom = document.querySelector('button');
let result = document.querySelector('h1');


let users = [

    
'Bikram Biswas',
'Fardin Ahmed Khan',
'Sami D Zoro',
'Abdullah Al Mahfuz',
'Kazu Rikarinkite',
'Ariyan氣盛',
'Asraful Islam',
'Eren Yeager',
'O Bi To',
'Alvee Ahmed Ratul',
'Anadil Zohair',
'Zafir Exists',
'TW A QI',
'Tahsin H Raiyan',
'Ahu D Sanji',
'Mas Ruma',
'Adaeze',
'Sabit Hassan Mahin',
'Jubayed Ahmed Jehad',
'Nikola X Emu',
'Tushin氣盛',
'Giyu Tomioka',
'Lily Ayaka',
'あ かり',
'Rishi Raj Chowdhury',
'Md Jisan Arafat',
'Jannatul Islam Fariya',
'Tanjila Akter',
'Sinthiya Chan',
'Sabu Bae',
'Mohammad Shihab Rahman',
'ẞhõ Hãñ',
'Adnan Shuvo',
'Adnan Akanda Shuvo',

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


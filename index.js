var randomNum1 = Math.floor(Math.random()*6)+1;

var randomDice1 = "dice"+randomNum1+".png"; //will return between dice1.png to dice6.png

var RandomSource1 = "Images/"+randomDice1; //  Images/dice1.png to Images/dice6.png

var Img1 = document.querySelectorAll("img")[0];

Img1.setAttribute("src",RandomSource1);

// similarly for img2
var randomNum2 = Math.floor(Math.random()*6)+1;

var randomDice2 = "dice"+randomNum2+".png"; //will return between dice1.png to dice6.png

var RandomSource2 = "Images/"+randomDice2; //  Images/dice1.png to Images/dice6.png
var Img2 = document.querySelectorAll("img")[1];
Img2.setAttribute("src",RandomSource2);

//declaring winner
if(randomNum1>randomNum2){
    document.querySelectorAll("h1")[1].innerHTML = "Player 1 WINS!!";
}
else if(randomNum1<randomNum2){
    document.querySelectorAll("h1")[1].innerHTML = "Player 2 WINS!!";
}

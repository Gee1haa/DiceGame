//dice1
var ran_num1 = Math.floor(Math.random() * 6) +1 ;
var randomImageSource = "images/dice"+ran_num1+".png";
document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);

//dice2
var ran_num2 = Math.floor(Math.random() * 6) +1 ;
var randomImageSource2 = "images/dice"+ran_num2+".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

//Decisionmaker
if (ran_num1>ran_num2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!"
}
else if (ran_num1<ran_num2){
    document.querySelector("h1").innerHTML = "Player 2 Wins!"
}
else {
    document.querySelector("h1").innerHTML = "Its a Draw!"

}
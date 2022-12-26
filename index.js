

var imageList = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];
var rand1 = (Math.floor(Math.random() * 5));
console.log(rand1);
document.querySelector(".img1").setAttribute("src", imageList[rand1]);

var rand2 = (Math.floor(Math.random() * 5));
console.log(rand2);
document.querySelector(".img2").setAttribute("src", imageList[rand2]);
if(rand1>rand2)
{   
    document.querySelector(".victory").classList.add("left");
    document.querySelector("h1").textContent="Player 1 Wins";
}
else if (rand2>rand1){
    document.querySelector(".victory").classList.add("right");
    document.querySelector("h1").textContent="Player 2 Wins";
    }
else if (rand1==rand2)
{
    document.querySelector("h1").textContent = "Draw";
}
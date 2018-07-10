var displayRandomNumbers = document.querySelector("h3");
var color1 = document.querySelector(".colorONE");
var color2 = document.querySelector(".colorTWO");
var bk_ground = document.getElementById("gradient");
var random =document.getElementById("btn");





function colorBG(){

  bk_ground.style.background =  "linear-gradient(to right," + color1.value + "," + color2.value + ")" ;


 displayRandomNumbers.textContent =bk_ground.style.background + ";" ;


 
}

  function RandomColorNumbers(){
  var num1 = '#'+Math.floor(Math.random()*16777215).toString(16);
  
  var num2 = '#'+Math.floor(Math.random()*16777215).toString(16);
  
  //
  //'#'+Math.floor(Math.random()*16777215).toString(16);
color1.value=num1;
color2.value =num2;

colorBG();
 } ;
color1.addEventListener("input", colorBG);

color2.addEventListener("input", colorBG);


random.addEventListener("click", RandomColorNumbers);
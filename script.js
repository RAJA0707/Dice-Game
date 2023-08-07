function refresh(){
    location.reload();
}


var random1 = Math.floor(Math.random()*6)+1;

var image1 = "images"+ "/dice"+random1+".png"

document.querySelectorAll("img")[0].setAttribute("src",image1);


var random2 = Math.floor(Math.random()*6)+1;

var image2 = "images"+ "/dice"+random2+".png"

document.querySelectorAll("img")[1].setAttribute("src",image2);


if(random1>random2){
    document.querySelector("h1").textContent="🚩 Play 1 Wins!"
}
else if(random2>random1){
    document.querySelector("h1").textContent="🚩 Play 2 Wins!"
}
else{
    document.querySelector("h1").textContent="🚩The game is a tie!"
}

document.getElementById('refreshButton').addEventListener('click', function() {
    location.reload();
});



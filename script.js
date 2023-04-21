let winner=(randomNumber1,randomNumber2)=>{
    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "Player 1 wins";
    }
    else if (randomNumber1 < randomNumber2) {
        document.querySelector("h1").innerHTML = "Player 2 wins";
    }
    else {
        document.querySelector("h1").innerHTML = "DRAW";
    }
}



reset.addEventListener('click', () => {
    setTimeout(function(){
        var randomNumber1 = Math.floor(Math.random() * 6) + 1
        var randdiceimg = "dice" + randomNumber1 + ".png";
        var randimgsrc1 = "images/" + randdiceimg;
    
        document.querySelectorAll("img")[0].setAttribute("src", randimgsrc1);
    
        var randomNumber2 = Math.floor(Math.random() * 6) + 1
        var randdiceimg = "dice" + randomNumber2 + ".png";
        var randimgsrc2 = "images/" + randdiceimg;
        document.querySelectorAll("img")[1].setAttribute("src", randimgsrc2);
        winner(randomNumber1,randomNumber2)
        document.querySelector("#reset").innerHTML="Play Again"
    },500)


 

   
})



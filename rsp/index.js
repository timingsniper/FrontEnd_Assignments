//1800094804 张晙优
var winCount = 0;
var drawCount = 0;
var lossCount = 0;

for (var i = 0; i < 3; i++){
    document.querySelectorAll(".btn")[i].addEventListener("click", function() {
        var btnInner = this.innerHTML;
        playGame(btnInner);
        //alert(btnInner);
        //alert("clicked!");
    })
}

function playGame(pick){
    var final = 0; //Player's pick
    
    //Numerize the player's pick
    switch(pick){
        case "rock":
            final = "1";
            break;
        case "scissors":
            final = "2";
            break;
        case "paper":
            final = "3";
            break;
    }
    
    //Set player's pick image
    var randomPickImg = "images/" + final + ".png";
    //alert(final);
    document.querySelectorAll("img")[0].setAttribute("src", randomPickImg);

    //Set CPU's pick image
    var cpuPick = Math.floor(Math.random()*3) + 1;
    var randomPickImg = "images/" + cpuPick + ".png";
    document.querySelectorAll("img")[1].setAttribute("src", randomPickImg);

    //Logic
    if(final == cpuPick){
        document.querySelectorAll("h2")[1].style.color = "black";
        document.querySelectorAll("h2")[1].innerHTML = "Draw!";
        drawCount++;
    }
    else if((final == "1" && cpuPick == "2") || (final == "2" && cpuPick == "3") || (final == "3" & cpuPick == "1")){
        document.querySelectorAll("h2")[1].style.color = "blue";
        document.querySelectorAll("h2")[1].innerHTML = "You Win!!!";
        winCount++;
    }
    else{
        document.querySelectorAll("h2")[1].style.color = "red";
        document.querySelectorAll("h2")[1].innerHTML = "You Lose...";
        lossCount++;
    }

    //Win, Draw, Loss Count
    document.querySelector("h3").innerHTML = winCount + " Wins," + drawCount + " Draws," + lossCount + " Losses";

}




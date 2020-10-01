var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var title = document.querySelector("#title");
var message = document.querySelector("#message");
var restart = document.querySelector("#restart");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");
var easyHard = false
var arrSize = 6
pickedColor = colorPicker(arrSize);
title.textContent = pickedColor;

for(var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];

    squares[i].addEventListener("click", function() {
        var clickedColor = this.style.backgroundColor;
        if(clickedColor === pickedColor) {
            message.textContent = "Correct!";
            correctColor(arrSize);
            document.querySelector("h1").style.backgroundColor = pickedColor;
            restart.textContent = "Play Again?"
        }
        else {
            this.style.backgroundColor = "#232323";
            message.textContent = "Try Again";
        }

    })
}

function correctColor(arrSize) {
    for(var i = 0; i < arrSize; i++) {
        squares[i].style.backgroundColor = pickedColor;
    }
}

function generateRandomColors(num) {
    var arr = [];
    for(var i = 0; i < num; i++) {
        var red = Math.floor(Math.random()*256);
        var green = Math.floor(Math.random()*256);
        var blue = Math.floor(Math.random()*256);
        arr.push("rgb(" + red + ", " + green + ", " + blue + ")");
    }
    return arr
}

function colorPicker(arrSize) {
    var random = Math.floor(Math.random()*arrSize);
    return colors[random]
}

easy.addEventListener("click", function() {
    easy.style.backgroundColor = "navy";
    easy.style.color = "white"
    hard.style.backgroundColor = "white"
    hard.style.color = "black"
    easyHard = true;
    for(var i = 3; i < 6; i++) {
        squares[i].style.backgroundColor = "#232323";
    }
    arrSize = 3
    again(arrSize);
})

hard.addEventListener("click", function() {
    hard.style.backgroundColor = "navy";
    hard.style.color = "white"
    easy.style.backgroundColor = "white";
    easy.style.color = "black"
    easyHard = false;
    arrSize = 6
    again(arrSize);
})

restart.addEventListener("click", function() {
    if(!easyHard) {
        arrSize = 6
        again(arrSize);
    }
    else {
        for(var i = 3; i < 6; i++) {
            squares[i].style.backgroundColor = "#232323";
        }
        arrSize = 3
        again(arrSize);
    }
})

function again(arrSize) {
    document.querySelector("h1").style.backgroundColor = "navy";
    message.textContent = "";
    restart.textContent = "New Colors"
    colors = generateRandomColors(arrSize);
    pickedColor = colorPicker(arrSize);
    title.textContent = pickedColor;

    for(var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
    
}
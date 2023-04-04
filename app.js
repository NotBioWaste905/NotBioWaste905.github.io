let tg = window.Telegram.WebApp;

tg.expand();
tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2acd34";

let item = "";

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");

btn1.addEventListener("click", function(){
    if (tg.MainButton.isVisible){
        tg.MainButton.hide();
    }
    else{
        tg.MainButton.setText("здаров молодой");
        item = "1";
        tg.MainButton.show();
    }
});

Telegram.WebApp.onEvent("mainButtonClicked", function(){
    tg.sendData(item);
});

let usercard = document.getElementById("usercard");
let p = document.createElement("p");
p.innerText = `${tg.initDataUnsafe.first_name}`

usercard.appendChild(p)
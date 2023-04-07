let tg = window.Telegram.WebApp;

tg.expand();
tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2aad31";

var item = [];

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");

btn1.addEventListener("click", function () {
  if (tg.MainButton.isVisible) {
    tg.MainButton.hide();
  } else {
    tg.MainButton.setText(item.toString());
    item.push("coffe1");
    tg.MainButton.show();
  }
});
btn2.addEventListener("click", function () {
 
    tg.MainButton.setText(item.toString());
    item.push("coffe2");
    tg.MainButton.show();
});
btn3.addEventListener("click", function () {
  if (tg.MainButton.isVisible) {
    tg.MainButton.hide();
  } else {
    tg.MainButton.setText(item.toString());
    item.push("coffe3");
    tg.MainButton.show();
  }
});
btn4.addEventListener("click", function () {
  if (tg.MainButton.isVisible) {
    tg.MainButton.hide();
  } else {
    tg.MainButton.setText(item.toString());
    item.push("coffe4");
    tg.MainButton.show();
  }
});

Telegram.WebApp.onEvent("mainButtonClicked", function () {
  tg.sendData(item);
});

let usercard = document.getElementById("usercard");
let p = document.createElement("p");
// p.innerText = `${tg.initDataUnsafe.first_name}`;
p.innerText = `${item.toString()}`;

usercard.appendChild(p);

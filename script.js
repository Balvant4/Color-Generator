const code = document.getElementById("color-code");
const startbtn = document.getElementById("start");
const stopbtn = document.getElementById("stop");

const generate = () => {
  const number = Math.floor(Math.random() * 16777215);
  const hexa = "#" + number.toString(16);
  document.body.style.backgroundColor = hexa;
  code.innerText = hexa;
  console.log(number, hexa);
};

let Interval;
const callfunc = () => {
  if (Interval) {
    clearInterval(Interval);
  } else {
    generate();
    Interval = setInterval(generate, 1000);
  }
};

startbtn.addEventListener("click", callfunc);
stopbtn.addEventListener("click", callfunc);

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
const startcolorgenerating = () => {
  if (!Interval) {
    generate();
    Interval = setInterval(generate, 1000);
  }
};

const stopcolorgenerating = () => {
  clearInterval(Interval);
  Interval = null;
};

startbtn.addEventListener("click", startcolorgenerating);
stopbtn.addEventListener("click", stopcolorgenerating);

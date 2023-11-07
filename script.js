var date = new Date("30 nov 2023");
const count = document.getElementById("countdown");

function formate(temp) {
  return temp < 10 ? `0${temp}` : temp;
}

function countdown() {
  var today = new Date();
  const total = (date - today) / 1000;

  const days = Math.floor(total / 60 / 60 / 24);
  const hours = Math.floor(total / 60 / 60) % 24;
  const minutes = Math.floor(total / 60) % 60;
  const seconds = Math.floor(total) % 60;

  count.innerHTML = `${days}D ${formate(hours)}H ${formate(minutes)}M ${formate(
    seconds
  )}S`;
}

countdown();
setInterval(countdown, 1);

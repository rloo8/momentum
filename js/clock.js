const clock = document.querySelector("#clock");

function getClock() {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const weekArray = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const week = weekArray[date.getDay()];

  let hours = date.getHours();
  const ampm = hours < 12 ? "AM" : "PM";

  if (hours === 0) {
    hours = 12;
  } else if (hours > 12) {
    hours = hours - 12;
  }

  const minutes = String(date.getMinutes()).padStart(2, "0");

  clock.innerText = `${year}-${month}-${day} ${week} ${hours}:${minutes} ${ampm}`;
}

getClock();
setInterval(getClock, 1000);

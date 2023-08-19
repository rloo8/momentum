const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];

function handleBackgroundColor() {
  const img = images[Math.floor(Math.random() * images.length)];
  const bgImage = document.createElement("img");
  bgImage.classList.add("bgImg");
  bgImage.src = `image/background/${img}`;
  const body = document.body;
  body.appendChild(bgImage);
}

function handleClick() {
  handleBackgroundColor();
}

handleBackgroundColor();

const colorBtn = document.querySelector("#colorBtn");
colorBtn.addEventListener("click", handleClick);

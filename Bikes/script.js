const red = document.getElementById("red");
const blue = document.getElementById("blue");
const black = document.getElementById("black");
const bike = document.getElementById("bike");

red.addEventListener("click", () => {
  bike.style.backgroundImage = "url(assets/BMW1.png)";
});

blue.addEventListener("click", () => {
  bike.style.backgroundImage = "url(assets/BMW2.png)";
});

black.addEventListener("click", () => {
  bike.style.backgroundImage = "url(assets/BMW3.png)";
});

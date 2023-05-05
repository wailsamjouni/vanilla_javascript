const change = document.getElementById("change");
const models = document.getElementById("models");
const model3 = document.getElementById("model3");
const modelx = document.getElementById("modelx");
const modely = document.getElementById("modely");

const model = document.getElementById("model");

const time = document.getElementById("time");
const desc = document.getElementById("desc");
const pace = document.getElementById("pace");
const horse = document.getElementById("horse");

console.log(modelx);
console.log(modely);

models.addEventListener("click", () => {
  change.style.backgroundImage = "url(./assets/image-1.png)";
  model.innerHTML = "Model S";
  time.innerHTML = "1.6 s";
  desc.innerHTML = "100 mph";
  pace.innerHTML = "300 mph";
  horse.innerHTML = "600";
});

model3.addEventListener("click", () => {
  change.style.backgroundImage = "url(./assets/image-2.png)";
  model.innerHTML = "Model 3";
  time.innerHTML = "2 s";
  desc.innerHTML = "100 mph";
  pace.innerHTML = "256 mph";
  horse.innerHTML = "550";
});

modelx.addEventListener("click", () => {
  change.style.backgroundImage = "url(./assets/image-3.png)";
  model.innerHTML = "Model X";
  time.innerHTML = "1.3 s";
  desc.innerHTML = "100 mph";
  pace.innerHTML = "549 mph";
  horse.innerHTML = "665";
});

modely.addEventListener("click", () => {
  change.style.backgroundImage = "url(./assets/image-4.png)";
  model.innerHTML = "Model Y";
  time.innerHTML = "2.4 s";
  desc.innerHTML = "100 mph";
  pace.innerHTML = "260 mph";
  horse.innerHTML = "330";
});

const point = document.getElementsByClassName("point");
const image = document.getElementById("img");

const timer = () => {
  image.classList.add("anim");
  setTimeout(() => {
    image.classList.remove("anim");
  }, 300);

  for (b of point) {
    b.classList.remove("active");
  }
};

point[0].addEventListener("click", () => {
  image.src = "./assets/pic1.png";
  timer();
  point[0].classList.add("active");
});

point[1].addEventListener("click", () => {
  image.src = "./assets/pic2.png";
  timer();
  point[1].classList.add("active");
});

point[2].addEventListener("click", () => {
  image.src = "./assets/pic3.png";
  timer();
  point[2].classList.add("active");
});

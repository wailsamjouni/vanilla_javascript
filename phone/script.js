const customSelector = (element) => {
  const selector = document.getElementById(element);
  if (selector) {
    return selector;
  } else {
    throw new Error("Something went wrong");
  }
};

const circle = customSelector("circle");
console.log(circle);
const upArrow = customSelector("oben");
const downArrow = customSelector("unten");

var rotateValue = circle.style.transform;
var rotateSum;
console.log(rotateSum);
console.log(rotateValue);

upArrow.addEventListener("click", () => {
  rotateSum = rotateValue + "rotate(-90deg)";
  circle.style.transform = rotateSum;
  rotateValue = rotateSum;
});

downArrow.addEventListener("click", () => {
  rotateSum = rotateValue + "rotate(90deg)";
  circle.style.transform = rotateSum;
  rotateValue = rotateSum;
});

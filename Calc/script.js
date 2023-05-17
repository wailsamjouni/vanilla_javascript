const mult = document.querySelector("#mult");
const display = document.getElementById("display");
const dot = document.getElementById("dot");
const div = document.getElementById("div");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");

const handleOperator = (operator) => {
  let value = display.value;
  let result = value.split("");
  if (result.length === 0) {
    display.value = "";
  } else if (result[result.length - 1] === operator) {
    display.value = display.value;
  } else {
    display.value += operator;
  }
  console.log("hhhh");
};

mult.addEventListener("click", () => {
  handleOperator("*");
});

dot.addEventListener("click", () => {
  handleOperator(".");
});

div.addEventListener("click", () => {
  handleOperator("/");
});

plus.addEventListener("click", () => {
  handleOperator("+");
});

minus.addEventListener("click", () => {
  handleOperator("-");
});

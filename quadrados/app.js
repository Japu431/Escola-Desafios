const filho1 = document.querySelector("#filho1");
const filho2 = document.querySelector("#filho2");

filho1.addEventListener("mouseover", mOver, false);
filho1.addEventListener("mouseout", mOut, false);

function mOver() {
  filho2.setAttribute("style", "background-color:green;");
}

function mOut() {
  filho2.setAttribute("style", "background-color:orange;");
}

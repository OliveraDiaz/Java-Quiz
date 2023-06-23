var dash = document.querySelector("#dash");
var quiz = document.querySelector("#quiz");
var button = document.createElement("button");
// front page
quiz.children[0].textContent = "Coding Challenge Quiz";
// Instructions
quiz.children[2].textContent = "Try to answer the following questions with in the time limit. Keep in mind that incorrect answers will penalize your score/time by 10 seconds";
button.textContent = "Start quiz";


quiz.children[0].setAttribute("style", "display: flex; justify-content: center; font-size: 40px");
quiz.children[2].setAttribute("style", "padding: 30px; display: flex; justify-content: center; font-size: 25px;");
button.setAttribute("style", "display:flex; justify-content: center;");



quiz.appendChild(button);



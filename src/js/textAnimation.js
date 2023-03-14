const hasText = true;
const text = "Mentoria Desenvolve | 2023 | Turma 13 ";
const lettersArray = text.split("");
let interval;

let currentLetterIndex = 0;

function changeColor(el) {
  el.classList.add('active');
}

function renderLetters() {
  const animatedText = document.getElementById("animated-text");
  if (!animatedText) return; 
  
  let letterHtml = "";
  lettersArray.forEach((letter, index) => {
    let classes = "letter";
    if (index === currentLetterIndex) {
      classes += " current";
      if (index === 0) classes += " active";
    } else if (index <= currentLetterIndex) {
      classes += " active";
    }
    letterHtml += `<span class="${classes}">${letter}</span>`;
  });
  
  animatedText.innerHTML = letterHtml;
  
  currentLetterIndex++;
  if (currentLetterIndex > lettersArray.length - 1) clearInterval(interval);
}

if (hasText) {
  document.addEventListener("DOMContentLoaded", function(event) {
    interval = setInterval(renderLetters, 100);
  });
}


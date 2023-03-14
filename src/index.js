const hasText = true;
const text = "Mentoria Desenvolve | 2023 | Turma 13";
const lettersArray = text.split("");

let currentLetterIndex = 0;

function changeColor(el) {
    el.classList.add('active');
}
  
function renderLetters() {
    const animatedText = document.getElementById("animated-text");
    if (!animatedText) return;

    let letterHtml = '';
    lettersArray.forEach((letter, index) => {
      if (index === currentLetterIndex) {
        letterHtml += `<span class="letter active">${letter}</span>`;
      } else {
        letterHtml += `<span class="letter">${letter}</span>`;
      }
    });
    animatedText.innerHTML = letterHtml;
    currentLetterIndex++;
    if (currentLetterIndex > lettersArray.length - 1) clearInterval(interval);
  }
  
  if (hasText) {
    document.addEventListener("DOMContentLoaded", function(event) { 
      const interval = setInterval(() => {
        const animatedText = document.getElementById("animated-text");
        if (!animatedText) return; // aborta a execução se o elemento não existir
        renderLetters(animatedText);
      }, 200);
    });
  }
// function adicionarProximaLetra() {
//     if(currentLetterIndex < letrasArray.length) {
//         const novaLetra = document.createElement("span");
//         novaLetra.innerHTML = letrasArray[currentLetterIndex];
//         elementoAnimacao.appendChild(novaLetra);

//         ++currentLetterIndex;
//         setTimeout(adicionarProximaLetra, 100); //Controla a velocidade da animação
//     }
// }

// adicionarProximaLetra();

fetch('https://wanuzialab.github.io/mentoria-desenvolve-turma13/src/utils/locale.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    setTimeout(() => {
      const buttonsContainer = document.querySelector('#buttons-container');
      data.buttons.forEach(button => {
        const newButton = document.createElement('button');
        const newAnchor = document.createElement('a');
        newAnchor.textContent = button.text;
        newAnchor.href = button.link;
        newAnchor.target = "_blank";
        newButton.appendChild(newAnchor);
        buttonsContainer.appendChild(newButton);
      })
      const buttonTextAnchors = buttonsContainer.querySelectorAll('button a'); // todos as tags 'a' dentro de botões
      buttonTextAnchors.forEach(tag => {
      tag.addEventListener('click', () => {
      tag.classList.toggle('link-clicked'); 
    });
  });
    }, 3000);
  
    })
  
  .catch(error => console.error('Fetch error:', error));

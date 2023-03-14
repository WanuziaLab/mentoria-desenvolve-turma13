fetch('src/utils/locale.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
    .then(data => {
      const buttonsContainer = document.querySelector('#buttons-container');
      data.buttons.forEach(button => {
        const newButton = document.createElement('button');
        const newAnchor = document.createElement('a');
        newAnchor.textContent = button.text;
        newAnchor.href = button.link;
        newAnchor.target = "_blank"; 
        newButton.appendChild(newAnchor);
        buttonsContainer.appendChild(newButton);
      });
    })
  .catch(error => console.error('Fetch error:', error));

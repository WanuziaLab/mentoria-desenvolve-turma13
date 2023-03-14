fetch('src/utils/locale.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
    .then(data => {
        const buttonsContainer = document.querySelector('#buttons-container')
  
        data.buttons.forEach(button => { // Itera sobre os itens da propriedade 'buttons' no objeto de dados.
            const newButton = document.createElement('button'); // Cria um novo elemento de botão.
            newButton.textContent = button.text; // Define o texto do botão com a propriedade 'text' do objeto iterado.
            newButton.href = button.link; // Define o link do botão com a propriedade 'link' do objeto iterado.
            
            buttonsContainer.appendChild(newButton); // Adiciona o novo botão ao container de botões.
          });
    })
  .catch(error => console.error('Fetch error:', error));

fetch('https://wanuzialab.github.io/Mentoria-Desenvolve-Turma13/src/utils/locale.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    setTimeout(() => {
      const buttonsContainer = document.querySelector('#cards-container');
      data.mentors.forEach(mentor => {
        const newMentorCard = document.createElement('div')
        const newImg = document.createElement('img');
        const newName = document.createElement('span');
        const newDescription = document.createElement('span');
        const newButton = document.createElement('button');
        const newAnchor = document.createElement('a');
     
        newImg.src = mentor.image;
        newName.textContent = mentor.name;
        newAnchor.textContent = mentor.text;
        newDescription.textContent = mentor.description;
        newAnchor.href = mentor.link;
        newAnchor.target = "_blank";

        newButton.appendChild(newAnchor);
        buttonsContainer.appendChild(newButton);
      })
  }, 3000);
  
    })
  
  .catch(error => console.error('Fetch error:', error));

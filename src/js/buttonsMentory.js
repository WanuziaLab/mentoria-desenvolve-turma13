fetch('https://wanuzialab.github.io/mentoria-desenvolve-turma13/src/utils/locale.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    setTimeout(() => {
      const cardsContainer = document.querySelector('#cards-container');
      data.mentors.forEach(mentor => {
        const newMentorCard = document.createElement('div')
        newMentorCard.classList.add('mentor-card');

        const imageBox = document.createElement('div')
        imageBox.classList.add('mentor-image-box');
        const newImg = document.createElement('img');
        newImg.classList.add('mentor-image');

        const mentorDetails = document.createElement('div')
        mentorDetails.classList.add('mentor-details');

        const newName = document.createElement('span');
        newName.classList.add('mentor-name');

        const newDescription = document.createElement('span');
        newDescription.classList.add('mentor-description');

        const newCalendarLink = document.createElement('button');
        newCalendarLink.classList.add('mentor-button');

        const newCalendar = document.createElement('a');
        newCalendar.classList.add('mentor-link');

        newImg.src = mentor.image;
        newName.textContent = mentor.name;
        newCalendar.textContent = "Acessar agendamento";
        newDescription.textContent = mentor.description;
        newCalendar.href = mentor.url;
        newCalendar.target = "_blank";


        cardsContainer.appendChild(newMentorCard);

        newMentorCard.appendChild(imageBox, mentorDetails);
        newMentorCard.appendChild(mentorDetails);

        imageBox.appendChild(newImg);

        mentorDetails.appendChild(newName);
        mentorDetails.appendChild(newDescription);
        mentorDetails.appendChild(newCalendarLink);

        newCalendarLink.appendChild(newCalendar);

   
   
      })
  }, 3000);
  
    })
  
  .catch(error => console.error('Fetch error:', error));


const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove active class from all buttons
    filterButtons.forEach(button => button.classList.remove('active'));
    // Add active class to the clicked button
    btn.classList.add('active');

    const filter = btn.dataset.filter;

    projectCards.forEach(card => {
      if (filter === 'all' || card.dataset.category === filter) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });

    
  });
});



emailjs.init('Xz0ZdlbML7OiXQoiF'); 

document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault(); 

  // Get form values
  const fullName = document.getElementById('full-name').value;
  const emailAddress = document.getElementById('email-address').value;
  const mobileNumber = document.getElementById('mobile-number').value;
  const emailSubject = document.getElementById('email-subject').value;
  const message = document.getElementById('message').value;

  // Prepare template parameters for EmailJS
  const templateParams = {
    from_name: fullName,
    from_email: emailAddress,
    mobile_number: mobileNumber,
    subject: emailSubject,
    message: message,
  };

  // Call EmailJS to send the email
  emailjs.send('service_buo54fm', 'template_kl62uio', templateParams)
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert('Message sent successfully!');
      document.getElementById('contact-form').reset(); 
    })
    .catch((error) => {
      console.log('FAILED...', error);
      alert('Failed to send message. Please try again later.');
    });
});


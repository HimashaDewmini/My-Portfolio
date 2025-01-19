document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  const navbar = document.querySelector('.navbar');
  const menuIcon = document.querySelector('#menu-icons');

  // Filter projects
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(button => button.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;

      projectCards.forEach(card => {
        card.style.display = (filter === 'all' || card.dataset.category === filter) ? 'block' : 'none';
      });
    });
  });

  // Menu Toggle for Mobile View
  menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
  });

  // Hide navbar when clicking outside (optional for better UX)
  document.addEventListener('click', (event) => {
    if (!menuIcon.contains(event.target) && !navbar.contains(event.target)) {
      navbar.classList.remove('active');
    }
  });

  // Hide navbar on scroll
  window.addEventListener('scroll', () => {
    navbar.classList.remove('active');
  });

  // Initialize EmailJS
  emailjs.init('Xz0ZdlbML7OiXQoiF');

  // Contact Form Submission
  document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault(); 

    // Get form values
    const fullName = document.getElementById('full-name').value.trim();
    const emailAddress = document.getElementById('email-address').value.trim();
    const mobileNumber = document.getElementById('mobile-number').value.trim();
    const emailSubject = document.getElementById('email-subject').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!fullName || !emailAddress || !mobileNumber || !emailSubject || !message) {
      alert('Please fill out all fields before submitting.');
      return;
    }

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
      .then(response => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message sent successfully!');
        document.getElementById('contact-form').reset(); 
      })
      .catch(error => {
        console.error('FAILED...', error);
        alert('Failed to send message. Please try again later.');
      });
  });
});

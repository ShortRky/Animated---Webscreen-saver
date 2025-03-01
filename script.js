document.addEventListener("DOMContentLoaded", () => {
    // Hover effects for progress cards
    const progressCards = document.querySelectorAll('.progress-card');
    progressCards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.05)';
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
      });
    });
  
    // Button clicks for challenges and marketplace
    const challengeButton = document.querySelector(".btn");
    challengeButton.addEventListener("click", () => {
      alert("Challenge joined! Prepare to level up your skills.");
    });
  });

// Timeline interactivity
const timelineItems = document.querySelectorAll('.timeline-item');
timelineItems.forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('active');
  });
});

// Skill Wheel interactivity
const skillButtons = document.querySelectorAll('.skill');
const skillDetails = document.getElementById('skill-details');

skillButtons.forEach(button => {
  button.addEventListener('click', () => {
    const skill = button.getAttribute('data-skill');
    displaySkillDetails(skill);
  });
});

function displaySkillDetails(skill) {
  let content = '';
  if (skill === 'html') {
    content = 'HTML is the backbone of web development. I use it to structure web content.';
  } else if (skill === 'css') {
    content = 'CSS allows me to style and design the appearance of websites.';
  } else if (skill === 'js') {
    content = 'JavaScript helps make websites interactive and dynamic.';
  } else if (skill === 'python') {
    content = 'Python is a versatile language I use for backend development and automation.';
  }
  skillDetails.textContent = content;
}

// Live Chat Functionality
const sendBtn = document.getElementById('send-btn');
const userInput = document.getElementById('user-input');
const messages = document.getElementById('messages');

sendBtn.addEventListener('click', () => {
  const message = userInput.value;
  if (message.trim() !== '') {
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    messages.appendChild(messageElement);
    userInput.value = '';
    messages.scrollTop = messages.scrollHeight; // Scroll to bottom
  }
});

// Project-Specific CTA
const ctaBtn = document.getElementById('cta-btn');
ctaBtn.addEventListener('click', () => {
  window.location.href = 'contact.html'; // Redirect to the contact form
});
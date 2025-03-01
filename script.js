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
  
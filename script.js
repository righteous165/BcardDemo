document.addEventListener('DOMContentLoaded', () => {

  // ---------- Partition 1: User Info ----------
  const userForm = document.getElementById('userForm');
  const greetingOutput = document.getElementById('greetingOutput');
  const cardMessage = document.getElementById('cardMessage');

  userForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('userName').value.trim();
    const phone = document.getElementById('userPhone').value.trim();

    if (!name || !phone) {
      greetingOutput.textContent = "Please fill in both fields!";
      greetingOutput.style.color = "#e74c3c";
      return;
    }

    greetingOutput.style.color = "#2e7d32";
    greetingOutput.textContent = `Saved! Enjoy your card, ${name} 🎉`;

    // Personalize the birthday card message
    cardMessage.innerHTML =
      `Happy Birthday, ${name}!<br><br> Thank you for always being that amazing person who brings joy to everyone around you. Your kindness, laughter, and warmth make the world a better place.<br> Continue to shine and spread happiness wherever you go. May this year bring you countless blessings, unforgettable memories, and all the love your heart can hold.<br> On this day, I wish you all the sucess, health, and happiness in the world. May your dreams take flight and your heart be filled with endless joy.<br> Wishing you a day filled with love, laughter, and everything that makes you happiest. Happy Birthday Bestie! 🥳🎊 <br>I love you❤️🥹`;
  });

  // ---------- Partition 3: Flip Card ----------
  const card = document.getElementById('birthdayCard');
  card.addEventListener('click', () => {
    card.classList.toggle('flipped');
  });

  // ---------- Partition 4: YouTube CTA ----------
  const clickMeBtn = document.getElementById('clickMeBtn');
  clickMeBtn.addEventListener('click', () => {
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
  });

});
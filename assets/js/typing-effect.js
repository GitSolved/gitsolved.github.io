// Typing animation for AI Security Research & CTF Challenges
document.addEventListener('DOMContentLoaded', function() {
  const subtitleElement = document.querySelector('.site-subtitle');
  if (!subtitleElement) return;

  const phases = ['AI Security', 'CTF Challenges', 'Binary Exploitation', 'Prompt Injection', 'OWASP LLM', 'ROP Chains', 'Security Research'];
  const colors = [
    '#a855f7',  // AI Security - Purple (intelligence, advanced tech)
    '#00aaff',  // CTF Challenges - Cyan/Blue (learning, problem-solving)
    '#ff4500',  // Binary Exploitation - Red-Orange (low-level, critical)
    '#ffd700',  // Prompt Injection - Gold/Yellow (creativity, bypass)
    '#ff6b6b',  // OWASP LLM - Coral Red (vulnerability focus)
    '#00ff00',  // ROP Chains - Green (technical success, complexity)
    '#9333ea'   // Security Research - Deep Purple (knowledge, expertise)
  ];

  let currentPhaseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typeSpeed = 100; // typing speed in milliseconds
  const deleteSpeed = 50; // backspace speed in milliseconds
  const pauseBeforeDelete = 1000; // 1 second pause before deleting

  function typeEffect() {
    const currentPhase = phases[currentPhaseIndex];

    // Set color for current phase
    subtitleElement.style.color = colors[currentPhaseIndex];

    if (!isDeleting && charIndex < currentPhase.length) {
      // Typing
      subtitleElement.textContent = currentPhase.substring(0, charIndex + 1);
      charIndex++;
      setTimeout(typeEffect, typeSpeed);
    } else if (!isDeleting && charIndex === currentPhase.length) {
      // Pause before deleting
      isDeleting = true;
      setTimeout(typeEffect, pauseBeforeDelete);
    } else if (isDeleting && charIndex > 0) {
      // Deleting
      subtitleElement.textContent = currentPhase.substring(0, charIndex - 1);
      charIndex--;
      setTimeout(typeEffect, deleteSpeed);
    } else if (isDeleting && charIndex === 0) {
      // Move to next phase
      isDeleting = false;
      currentPhaseIndex = (currentPhaseIndex + 1) % phases.length;
      setTimeout(typeEffect, 500);
    }
  }

  // Start the animation after a short delay
  setTimeout(typeEffect, 300);
});

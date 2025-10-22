// Portfolio animations and interactions
document.addEventListener('DOMContentLoaded', function() {
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Skill bar animations
  const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px 0px -100px 0px'
  };

  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const skillBars = entry.target.querySelectorAll('.skill-progress');
        skillBars.forEach((bar, index) => {
          setTimeout(() => {
            bar.classList.add('animate');
          }, index * 200);
        });
      }
    });
  }, observerOptions);

  // Observe skills section
  const skillsSection = document.querySelector('#skills');
  if (skillsSection) {
    skillObserver.observe(skillsSection);
  }

  // Add parallax effect to hero section
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('#home');
    if (parallax) {
      const speed = scrolled * 0.5;
      parallax.style.transform = `translateY(${speed}px)`;
    }
  });

  // Add glow effect on mouse move for cards
  document.querySelectorAll('.portfolio-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });
});
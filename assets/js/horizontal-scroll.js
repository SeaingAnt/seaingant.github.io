// Horizontal scroll navigation for projects
document.addEventListener('DOMContentLoaded', function() {
  const wrapper = document.querySelector('.horizontal-scroll-wrapper');
  if (!wrapper) return;

  const container = wrapper.querySelector('.horizontal-scroll-container');
  if (!container) return;

  // Create navigation arrows
  const leftArrow = document.createElement('button');
  leftArrow.className = 'scroll-arrow left';
  leftArrow.innerHTML = '&#8249;'; // Left chevron
  leftArrow.setAttribute('aria-label', 'Scroll left');

  const rightArrow = document.createElement('button');
  rightArrow.className = 'scroll-arrow right';
  rightArrow.innerHTML = '&#8250;'; // Right chevron
  rightArrow.setAttribute('aria-label', 'Scroll right');

  wrapper.insertBefore(leftArrow, container);
  wrapper.appendChild(rightArrow);

  // Scroll amount (one card width + margin)
  const scrollAmount = 1250; // 800px card + 30px margin

  // Update arrow states
  function updateArrows() {
    const scrollLeft = container.scrollLeft;
    const maxScroll = container.scrollWidth - container.clientWidth;

    leftArrow.disabled = scrollLeft <= 0;
    rightArrow.disabled = scrollLeft >= maxScroll - 5; // 5px tolerance
  }

  // Scroll left
  leftArrow.addEventListener('click', function() {
    container.scrollBy({
      left: -scrollAmount,
      behavior: 'smooth'
    });
  });

  // Scroll right
  rightArrow.addEventListener('click', function() {
    container.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  });

  // Update arrow states on scroll
  container.addEventListener('scroll', updateArrows);

  // Initial state
  updateArrows();

  // Update on window resize
  window.addEventListener('resize', updateArrows);
});

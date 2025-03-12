
export const createColorParticle = (
  event: React.MouseEvent | React.TouchEvent,
  container: HTMLElement
) => {
  const colors = ['#FF5678', '#FFDE59', '#58AEF7', '#A66FED', '#4CD97B'];
  const sizes = [8, 12, 16, 20, 24];

  // Get coordinates (handle both mouse and touch events)
  let x, y;
  if ('clientX' in event) {
    // Mouse event
    x = event.clientX;
    y = event.clientY;
  } else if (event.touches && event.touches.length > 0) {
    // Touch event
    x = event.touches[0].clientX;
    y = event.touches[0].clientY;
  } else {
    return;
  }

  // Get container bounds
  const rect = container.getBoundingClientRect();
  
  // Adjust coordinates relative to container
  x = x - rect.left;
  y = y - rect.top;

  // Create 5-8 particles
  const particleCount = Math.floor(Math.random() * 4) + 5;
  
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'color-particle animate-color-particle';
    
    // Random color, size and translation
    const colorIndex = Math.floor(Math.random() * colors.length);
    const sizeIndex = Math.floor(Math.random() * sizes.length);
    const size = sizes[sizeIndex];
    
    particle.style.backgroundColor = colors[colorIndex];
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;
    
    // Random movement direction
    const translateX = (Math.random() - 0.5) * 200;
    const translateY = (Math.random() - 0.5) * 200;
    const rotate = Math.random() * 360;
    
    particle.style.setProperty('--translate-x', `${translateX}px`);
    particle.style.setProperty('--translate-y', `${translateY}px`);
    particle.style.setProperty('--rotate', `${rotate}deg`);
    
    container.appendChild(particle);
    
    // Remove particle after animation completes
    setTimeout(() => {
      if (particle.parentNode === container) {
        container.removeChild(particle);
      }
    }, 8000);
  }
};

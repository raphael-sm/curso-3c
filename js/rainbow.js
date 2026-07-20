let hue = 0;

setInterval(() => {
  document.body.style.backgroundColor = `hsl(${hue}, 100%, 50%)`;
  hue = (hue + 1) % 360; 
}, 20);
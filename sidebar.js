async function loadSidebar() {
  // Highlight the current page's link
  document.querySelectorAll('.sidebar a').forEach(link => {
    if (link.href === window.location.href) {
      link.classList.add('active');
    }
  });
}

function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('open');
  document.getElementById('overlay').classList.toggle('active');
}

function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('overlay').classList.remove('active');
}

loadSidebar();
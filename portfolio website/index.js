function toggleMenu() {
    
    const icon = document.getElementById("hamburger-icon");
    const menu = document.getElementById("menu-links");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
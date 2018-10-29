console.log("hello");

const menuToggle  = document.getElementById("menu-toggle");
const menuNav = document.getElementById("menu-nav");

 const toggleMenu = () => console.log("Called Toggle menu");
menuToggle.addEventListener('click', toggleMenu());
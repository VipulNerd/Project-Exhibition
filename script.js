const nav = document.querySelector("nav");

window.addEventListener("scroll", function () {
  const scrollY = window.scrollY;
  if (scrollY >= 100) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

// Add functionality to navigation links (optional)
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default link behavior (jumping to top)
    const targetSection = document.querySelector(this.getAttribute("href"));
    targetSection.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to target section
  });
});

// You can add more functionalities here!

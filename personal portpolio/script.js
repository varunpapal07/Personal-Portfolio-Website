// Mobile Menu
const menu = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menu.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// Dark Mode
const themeBtn = document.getElementById("themeToggle");
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Contact Validation
const form = document.getElementById("contactForm");
const status = document.getElementById("status");

form.addEventListener("submit", e => {
  e.preventDefault();
  status.innerText = "Message sent successfully!";
  status.style.color = "green";
  form.reset();
});

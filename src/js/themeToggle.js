const themeToggle = document.getElementById("theme-toggle");
const container = document.getElementById("theme-toggle-container");
const moon = document.getElementById("moon-icon");
const sun = document.getElementById("sun-icon");
themeToggle.onchange = (e) => {
  document.body.classList.toggle("dark");
  container.classList.toggle("dark");
  let theme = e.target.checked ? "dark" : "light";
  moon.classList.toggle("bi-moon");
  moon.classList.toggle("bi-moon-fill");
  sun.classList.toggle("bi-sun");
  sun.classList.toggle("bi-sun-fill");
  window.localStorage.setItem("theme", theme);
};
let theme = window.localStorage.getItem("theme");
if (theme == "dark") {
  themeToggle.checked = true;
  container.classList.add("dark");
  document.body.classList.add("dark");
  moon.classList.toggle("bi-moon");
  moon.classList.toggle("bi-moon-fill");
  sun.classList.toggle("bi-sun");
  sun.classList.toggle("bi-sun-fill");
}

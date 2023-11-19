const sections = document.querySelectorAll("section");
const links = document.querySelectorAll(".nav a");
window.onscroll = (e) => {
  const topArr = [];
  sections.forEach((s) => topArr.push(s.getBoundingClientRect().top));
  const index = topArr.findIndex((s) => s < 100 && s > 0);

  if (index != -1) {
    links.forEach((l) => l.classList.remove("active"));
    links[index].classList.add("active");
  } else {
    const newIndex = topArr.findIndex((s) => s > 0);
    if (newIndex != -1) {
      links.forEach((l) => l.classList.remove("active"));
      links[newIndex - 1].classList.add("active");
    }
  }
};

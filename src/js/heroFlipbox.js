let frontTextIndex = 0;
let backTextIndex = 1;
const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Bootstrap",
  "C#",
  ".NET",
  "Express",
  "SQL",
  "Blazor",
];
let frontTimer;
let backTimer;
const frontText = document.getElementById("front");
const backText = document.getElementById("back");
const flipbox = document.querySelector(".flip-box");
flipbox.addEventListener("mouseenter", (e) => {
  if (backTimer) {
    clearTimeout(backTimer);
  }
  frontTimer = setTimeout(() => {
    if (frontTextIndex <= skills.length - 3) {
      frontTextIndex += 2;
    } else if (frontTextIndex == skills.length - 2) {
      frontTextIndex = 0;
    } else if (frontTextIndex == skills.length - 1) {
      frontTextIndex = 1;
    }
    frontText.innerText = skills[frontTextIndex];
  }, 250);
});
flipbox.addEventListener("mouseleave", (e) => {
  if (frontTimer) {
    clearTimeout(frontTimer);
  }
  backTimer = setTimeout(() => {
    if (backTextIndex <= skills.length - 3) {
      backTextIndex += 2;
    } else if (backTextIndex == skills.length - 2) {
      backTextIndex = 0;
    } else if (backTextIndex == skills.length - 1) {
      backTextIndex = 1;
    }
    backText.innerText = skills[backTextIndex];
  }, 250);
});

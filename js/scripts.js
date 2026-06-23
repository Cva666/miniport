// toggle//
const toggle = document.getElementById("themetoggle");
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}
if (toggle) {
  toggle.addEventListener("click", function () {
    document.body.classList.toggle("dark");
    const isdark = document.body.classList.contains("dark");
    localStorage.setItem("theme", isdark ? "dark" : "light");
  });
}

// Time of day
const greeting = document.getElementById("greeting");
if (greeting) {
  const hour = new Date().getHours();
  let word;
  if (hour < 12) {
    word = "morning";
  } else if (hour < 18) {
    word = "afternoon";
  } else {
    word = "evening";
  }
  greeting.textContent = "Good" + word + "!";
}

// Footer
const yearspan = document.getElementById("year");
if (yearspan) {
  yearspan.textContent = new Date().getFullYear();
}

// Faq Q&A

const questions = document.querySelectorAll("faq-question");
questions.forEach(function (q) {
  q.addEventListener("click", function () {
    const answer = q.nextElementSibling;
    answer.classList.toggle("open");
  });
});

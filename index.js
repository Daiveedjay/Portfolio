"use strict";

// const allSections = document.querySelectorAll("section");
// // console.log(allSections);
// const options = {
//   root: null,
//   threshold: 0.3,
// };

// const sectionObserver = new IntersectionObserver(callback, options);

// allSections.forEach((section) => {
//   sectionObserver.observe(section);
// });

// document.querySelectorAll(".left__column").forEach((column) => {
//   column.classList.add("hidden__left");
// });
// document.querySelectorAll(".right__column").forEach((column) => {
//   column.classList.add("hidden__right");
// });

// function callback(entries, observer) {
//   const [entry] = entries;

//   if (!entry.isIntersecting) return;

//   console.log(entry);

//   observer.unobserve(entry.target);
// }

const switchTheme = document.querySelector("#switch");

switchTheme.addEventListener("click", function () {
  document.body.classList.toggle("dark__mode");
});

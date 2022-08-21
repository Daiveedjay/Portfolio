"use strict";

const allSections = document.querySelectorAll("section");
// console.log(allSections);
const options = {
  root: null,
  threshold: 0.3,
};

const sectionObserver = new IntersectionObserver(callback, options);

allSections.forEach((section) => {
  sectionObserver.observe(section);
});

document.querySelectorAll(".left__column").forEach((column) => {
  column.classList.add("hidden__left");
});
document.querySelectorAll(".right__column").forEach((column) => {
  column.classList.add("hidden__right");
});

function callback(entries, observer) {
  const [entry] = entries;

  console.log(entry);
  if (!entry.isIntersecting) return;

  //   get the class name of the target section that came into view
  const curSectionsName = entry.target.getAttribute("class");
  console.log(curSectionsName);
  if (curSectionsName === "about__section") {
    //   now target that specific section
    const curSection = document.querySelector(`.${curSectionsName}`);
    console.log(curSection);
    console.log(curSection.lastElementChild.lastElementChild.firstElementChild);
    //   remove the hidden classes (DOM traversing)
    curSection.lastElementChild.lastElementChild.firstElementChild.classList.remove(
      "hidden__left"
    );
    curSection.lastElementChild.lastElementChild.lastElementChild.classList.remove(
      "hidden__right"
    );
  }

  console.log(entry);

  observer.unobserve(entry.target);
}

const switchTheme = document.querySelector("#switch");

switchTheme.addEventListener("click", function () {
  document.body.classList.toggle("dark__mode");
});

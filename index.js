"use strict";

const allSections = document.querySelectorAll("section");
console.log(allSections);
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
  } else if (curSectionsName === "project__section") {
    // // FOR FIRST PROJECT
    entry.target
      .querySelectorAll(".project__container .hidden__left")
      .forEach((projectContainer) =>
        projectContainer.classList.remove("hidden__left")
      );

    entry.target
      .querySelectorAll(".project__container .hidden__right")
      .forEach((projectContainer) =>
        projectContainer.classList.remove("hidden__right")
      );
  }
}
///////////////////////////////////
const switchTheme = document.querySelector("#switch");

switchTheme.addEventListener("click", function () {
  document.body.classList.toggle("dark__mode");
  if (document.body.classList.contains("dark__mode")) {
    localStorage.setItem("themeMode", "dark__mode");
  } else {
    localStorage.removeItem("themeMode");
  }
});

// Handle darkmode
const mode = localStorage.getItem("themeMode");
if (mode === "dark__mode") {
  document.body.classList.add(mode);
}

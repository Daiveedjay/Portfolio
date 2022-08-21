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

  if (curSectionsName === "project__section") {
    const curSection = document.querySelector(`.${curSectionsName}`);
    console.log(curSection);
    // console.log(curSection.firstElementChild.nextElementSibling);

    // FOR SECOND PROJECT
    // curSection.lastElementChild.firstElementChild.classList.remove(
    //   "hidden__left"
    // );

    // curSection.lastElementChild.lastElementChild.classList.remove(
    //   "hidden__right"
    // );

    // console.log(
    //   curSection.firstElementChild.nextElementSibling.lastElementChild
    //     .lastElementChild
    // );

    // console.log();

    //   remove the hidden classes (DOM traversing)
    // curSection.firstElementChild.nextElementSibling.classList.remove(
    //   "hidden__left"
    // );
  }
  console.log(entry);

  observer.unobserve(entry.target);
}

const projectContents = document.querySelectorAll(".project__container");

console.log(projectContents);

// This options constant name is used for the Intersection Observer inside of a section
const projectOptions = {
  root: null,
  threshold: 0.1,
};

const projectObserver = new IntersectionObserver(callback, projectOptions);

projectContents.forEach((div) => {
  projectObserver.observe(div);
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

  if (curSectionsName === "project__section") {
    const curSection = document.querySelector(`.${curSectionsName}`);
    console.log(curSection);
  }
  console.log(entry);

  observer.unobserve(entry.target);
}

///////////////////////////////////
const switchTheme = document.querySelector("#switch");

switchTheme.addEventListener("click", function () {
  document.body.classList.toggle("dark__mode");
});

// // FOR FIRST PROJECT
// curSection.firstElementChild.nextElementSibling.firstElementChild.classList.remove(
//   "hidden__left"
// );

// curSection.firstElementChild.nextElementSibling.lastElementChild.classList.remove(
//   "hidden__right"
// );

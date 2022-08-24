"use strict";

// Targets all sections
const allSections = document.querySelectorAll("section");

// Target the project section
const projectContainers = document.querySelectorAll(".project__container");

const options = {
  root: null,
  threshold: 0.35,
};

// CREATING AN INTERSECTION OBSERVER FOR ALL SECTIONS
const sectionObserver = new IntersectionObserver(callback, options);

// OBSERVING ALL SECTIONS
allSections.forEach((section) => {
  sectionObserver.observe(section);
});

// OBSERVING PROJECT SECTIONS
projectContainers.forEach((project) => {
  sectionObserver.observe(project);
});

// ADDING THE TRANSLATING CLASSES AND TRANSITION TO TARGETTED AREAS
document.querySelectorAll(".left__column").forEach((column) => {
  column.classList.add("hidden__left");
});
document.querySelectorAll(".right__column").forEach((column) => {
  column.classList.add("hidden__right");
});

// CREATING A CALLBACK FUNCTION FOR THE INTER
function callback(entries, observer) {
  const [entry] = entries;

  // if (!entry.isIntersecting) return;

  //   Get the class name of the target section that came into view
  const curSectionsName = entry.target.getAttribute("class");

  // Callback funtion for about section
  if (curSectionsName === "about__section") {
    //   now target that specific section
    const curSection = document.querySelector(`.${curSectionsName}`);
    //   remove the hidden classes (DOM traversing)
    curSection.lastElementChild.lastElementChild.firstElementChild.classList.remove(
      "hidden__left"
    );
    curSection.lastElementChild.lastElementChild.lastElementChild.classList.remove(
      "hidden__right"
    );

    // Adding the hidden classes to create the swipe effect after each targetted element has ecliped it's threshold
    if (!entry.isIntersecting) {
      curSection.lastElementChild.lastElementChild.firstElementChild.classList.add(
        "hidden__left"
      );
      curSection.lastElementChild.lastElementChild.lastElementChild.classList.add(
        "hidden__right"
      );
    }
  }

  // This marks the begining of the project section functionality
  else if (entry.target.classList.contains("project__container")) {
    entry.target.firstElementChild.classList.remove("hidden__left");

    entry.target.lastElementChild.classList.remove("hidden__right");

    // Adding the hidden classes to create the swipe effect after each targetted element has ecliped it's threshold

    if (!entry.isIntersecting) {
      entry.target.firstElementChild.classList.add("hidden__left");

      entry.target.lastElementChild.classList.add("hidden__right");
    }
  }

  if (curSectionsName === "cta__section") {
    //   now target that specific section
    const curSection = document.querySelector(`.${curSectionsName}`);
    curSection.lastElementChild.lastElementChild.classList.remove(
      "hidden__bottom"
    );

    // Adding the hidden classes to create the swipe effect after each targetted element has ecliped it's threshold
    if (!entry.isIntersecting) {
      curSection.lastElementChild.lastElementChild.classList.add(
        "hidden__bottom"
      );
    }
  }

  if (curSectionsName === "footer__section") {
    const curSection = document.querySelector(`.${curSectionsName}`);

    curSection.lastElementChild.firstElementChild.classList.remove(
      "hidden__bottom"
    );

    curSection.lastElementChild.firstElementChild.nextElementSibling.classList.remove(
      "hidden__bottom"
    );

    // Adding the hidden classes to create the swipe effect after each targetted element has ecliped it's threshold

    if (!entry.isIntersecting) {
      curSection.lastElementChild.firstElementChild.classList.add(
        "hidden__bottom"
      );

      curSection.lastElementChild.firstElementChild.nextElementSibling.classList.add(
        "hidden__bottom"
      );
    }
  }
}

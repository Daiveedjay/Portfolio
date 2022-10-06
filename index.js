//Dark mode toggle
const switchTheme = document.querySelector("#switch");

switchTheme.addEventListener("click", function () {
  document.body.classList.toggle("dark__mode");
  document.querySelector(".lightModeLogo")?.classList.toggle("logo-active");
  if (document.body.classList.contains("dark__mode")) {
    localStorage.setItem("themeMode", "dark__mode");
  } else {
    localStorage.removeItem("themeMode");
  }
});

// Handle darkmode
const mode = localStorage.getItem("themeMode");
console.log(mode);
if (mode === "dark__mode") {
  document.body.classList.add(mode);
}

// IMPLEMENTIG A STICKY NAVIGATION
const nav = document.querySelector(".nav");
const heroSection = document.querySelector(".hero__section");

const stickyNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};

const HeroObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: "-100px",
});
HeroObserver.observe(heroSection);

// OLD METHOD OF MAKING A STICKY NAVIGATION (DO NOT RECOMMEND)

// const initialCoords = aboutSection.getBoundingClientRect();
// console.log(initialCoords);

// window.addEventListener("scroll", function () {
//   console.log(this.window.scrollY);

//   if (window.scrollY > initialCoords.top) nav.classList.add("sticky");
//   else nav.classList.remove("sticky");
// });

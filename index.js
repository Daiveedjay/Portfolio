//Dark mode toggle
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

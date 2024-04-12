function toggleTheme() {
  const body = document.body;
  body.classList.toggle("dark-mode");
  body.classList.toggle("light-mode");
  const currentTheme = body.classList.contains("dark-mode") ? "dark" : "light";
  localStorage.setItem("theme", currentTheme);
}
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  toggleTheme();
}

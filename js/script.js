const app = document.getElementById("app");
const appIcon = document.getElementById("appIcon");

function openApp() {
  appIcon.style.display = "none";
  app.style.display = "block";
}

function closeApp() {
  app.style.display = "none";
  appIcon.style.display = "block";
}

function maximizeApp() {
  const appWidth = app.offsetWidth;

  if (appWidth == "234") {
    app.style.width = "572px";
  } else if (appWidth == "574") {
    app.style.width = "232px";
  }
}

function minimizeApp() {
  app.style.display = "none";
  appIcon.style.display = "block";
}

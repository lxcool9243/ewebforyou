window.addEventListener("load", function () {
  document.addEventListener("click", function (el) {
    const { path = [] } = el;
    const toggleMenu = document.querySelector("span#toggleMenu");
    if (path.indexOf(toggleMenu) > -1) {
      const toggleMenu = document.querySelector("header>div>nav>span>svg");
      if (!toggleMenu) return;
      const menu = document.querySelector("header>div>nav>ul");
      const active = menu.classList.contains("active");
      if (active) {
        menu.classList.remove("active");
        toggleMenu.classList.remove("fa-x");
        toggleMenu.classList.add("fa-bars");
      } else {
        menu.classList.add("active");
        toggleMenu.classList.remove("fa-bars");
        toggleMenu.classList.add("fa-x");
      }
    }
  });
});

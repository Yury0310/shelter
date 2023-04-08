const iconMenu = document.querySelector(".menu_icon");

const overlay = document.createElement("div");
overlay.classList.add("overlay");
const menuBody = document.querySelector(".navigation");
const navA = document.querySelectorAll(".navigation a");

if (iconMenu) {
  iconMenu.addEventListener("click", () => {
    iconMenu.classList.toggle("active");
    menuBody.classList.toggle("active");
    document.body.classList.toggle("lock");
    if (!iconMenu.classList.contains("active")) {
      overlay.remove();
    } else {
      document.body.appendChild(overlay);
    }
  });
}

// Закрытие панели бургер-меню при клике за пределами области панели
document.addEventListener("click", () => {
  if (!menuBody.contains(event.target) && !iconMenu.contains(event.target)) {
    document.body.classList.remove("lock");
    iconMenu.classList.remove("active");
    menuBody.classList.remove("active");
    overlay.remove();
  }
});
navA.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("lock");
    iconMenu.classList.remove("active");
    menuBody.classList.remove("active");
    overlay.remove();

    setTimeout(function () {
      target.scrollIntoView({ behavior: "smooth" });
    }, 300);
  });
});

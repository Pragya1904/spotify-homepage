const menu_btn = document.querySelector(".menu-btn");
const mobile_menu = document.querySelector("#mobile-nav");
const mobile_menu_close = document.querySelector(".mobile-menu-close");
menu_btn.addEventListener("click", function () {
  console.log("clicked");
  mobile_menu.classList.add("show");
});

mobile_menu_close.addEventListener("click", function () {
  mobile_menu.classList.remove("show");
});

const authenticated_link = document.querySelector(".authenticated");
authenticated_link.addEventListener("click", function () {
  document
    .querySelector(".profile-menubar")
    .classList.toggle("dropdown-enable");
});

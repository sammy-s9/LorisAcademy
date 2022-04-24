function navbarColorChanger() {
  const navbar = $("#navbar");
  const miniNavBar = $(".navbar-toggler");
  if (miniNavBar[0].getAttribute("aria-expanded") === "true") {
    navbar[0].classList.add('normal-nav');
    navbar[0].classList.remove('bg-transparent');
  } else {
    navbar[0].classList.add('bg-transparent');
    navbar[0].classList.remove('normal-nav');
  }
}

$(function () {
  $("#search-menu").removeClass("toggled");

  $("#search-icon").click(function (e) {
    e.stopPropagation();
    $("#search-menu").toggleClass("toggled");
    $("#popup-search").focus();
  });

  $("#search-menu input").click(function (e) {
    e.stopPropagation();
  });

  $("#search-menu, body").click(function () {
    $("#search-menu").removeClass("toggled");
  });
});


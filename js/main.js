$(document).ready(function () {
  // work in progress - needs some refactoring and will drop JQuery i promise :)
  const instance = $(".hs__header");
  const sliderbox = $(".hs__wrapper");
  $.each(instance, function (key, value) {
    let arrows = $(instance[key]).find(".arrow"), box = $(sliderbox[key]).find(".hs"), x = 0, mx = 0;
    // , prevArrow = arrows.filter(".arrow-prev"),
    // nextArrow = arrows.filter(".arrow-next")
    // maxScrollWidth = box[0].scrollWidth - box[0].clientWidth / 2 - box.width() / 2;

    $(arrows).on("click", function () {
      if ($(this).hasClass("arrow-next")) {
        x = box.width() / 2 - box.scrollLeft() - 10;
        box.animate({
          scrollLeft: -x
        });
      } else {
        x = box.width() / 2 + box.scrollLeft() - 10;
        box.animate({
          scrollLeft: x
        });
      }
    });

    $(box).on({
      mousemove: function (e) {
        var mx2 = e.pageX - this.offsetLeft;
        if (mx) this.scrollLeft = this.sx + mx - mx2;
      }, mousedown: function (e) {
        this.sx = this.scrollLeft;
        mx = e.pageX - this.offsetLeft;
      }, scroll: function () {
        // toggleArrows();
      }
    });

    $(document).on("mouseup", function () {
      mx = 0;
    });

    // function toggleArrows() {
    //   if (box.scrollLeft() > maxScrollWidth - 10) {
    //     // disable next button when right end has reached
    //     prevArrow.addClass("disabled");
    //   } else if (box.scrollLeft() < 10) {
    //     // disable prev button when left end has reached
    //     nextArrow.addClass("disabled");
    //   } else {
    //     // both are enabled
    //     nextArrow.removeClass("disabled");
    //     prevArrow.removeClass("disabled");
    //   }
    // }
  });

  // Navigation Bar

  window.addEventListener('scroll', function () {
    const navbar = $("#navbar");
    if (window.scrollY > 75) {
      navbar[0].classList.add('bg-dark');
      navbar[0].classList.remove('bg-transparent');
    } else {
      navbar[0].classList.add('bg-transparent');
      navbar[0].classList.remove('bg-dark');
    }
  });
})

function navbarColorChanger() {
  const navbar = $("#navbar");
  const miniNavBar = $(".navbar-toggler");
  if (miniNavBar[0].getAttribute("aria-expanded") === "true") {
    navbar[0].classList.add('bg-dark');
    navbar[0].classList.remove('bg-transparent');
  } else {
    navbar[0].classList.add('bg-transparent');
    navbar[0].classList.remove('bg-dark');
  }
}

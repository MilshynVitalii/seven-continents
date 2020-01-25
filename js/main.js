window.addEventListener("DOMContentLoaded", function() {
  let header = document.querySelector(".header");
  document.addEventListener("scroll", function(event) {
    if (window.pageYOffset > 0) {
      header.style.boxShadow = "0px 0 8px -2px #001e28";
    } else {
      header.style.boxShadow = "";
    }
    if (window.pageYOffset > 360) {
      header.style.transform = "translateY(-110%)";
    } else {
      header.style.transform = "translateY(0%)";
    }
  });

  let tours = document.querySelector(".tours__slide-wrap");
  let buttons = document.querySelectorAll(".tours__button");
  let items = document.querySelectorAll(".tours__item");
  console.log(items);
  items.forEach((item, i) => {
    item;
  });
  tours.addEventListener("click", function(event) {
    if (event.target.tagName == "BUTTON") {
      if (event.target.classList.contains("active-tours__button")) return;
      buttons.forEach(button =>
        button.classList.remove("active-tours__button")
      );
      event.target.classList.add("active-tours__button");
    }
  });
});

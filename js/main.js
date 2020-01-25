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
});

document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".container-fluid");
    const scrollLeft = document.querySelector(".scroll-left");
    const scrollRight = document.querySelector(".scroll-right");
  
    scrollLeft.addEventListener("click", function () {
      container.scrollBy({
        left: -200,
        behavior: "smooth"
      });
    });
  
    scrollRight.addEventListener("click", function () {
      container.scrollBy({
        left: 200,
        behavior: "smooth"
      });
    });
  
    // Hide/show scroll buttons based on scroll position
    // container.addEventListener("scroll", function () {
    //   scrollLeft.style.display = container.scrollLeft > 0 ? "block" : "none";
    //   scrollRight.style.display =
    //     container.scrollLeft < container.scrollWidth - container.clientWidth
    //       ? "block"
    //       : "none";
    // });
  });
  


  document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".review-container-fluid");
    const scrollLeft = document.querySelector(".left-scroll-image");
    const scrollRight = document.querySelector(".right-scroll-image");
  
    scrollLeft.addEventListener("click", function () {
      container.scrollBy({
        left: -200,
        behavior: "smooth"
      });
    });
  
    scrollRight.addEventListener("click", function () {
      container.scrollBy({
        left: 200,
        behavior: "smooth"
      });
    });
  });
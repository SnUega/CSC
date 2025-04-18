  document.addEventListener("DOMContentLoaded", function () {
    const scrollButton = document.getElementById("scrollToTop");

    window.addEventListener("scroll", function () {
      if (window.scrollY > window.innerHeight * 0.6) {
        scrollButton.classList.add("show");
      } else {
        scrollButton.classList.remove("show");
      }
    });

    scrollButton.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  });



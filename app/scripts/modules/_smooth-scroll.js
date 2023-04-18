export function smoothScroll() {

  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      const target = document.querySelector(link.getAttribute("href"));
      target.scrollIntoView({
        behavior: "smooth",
      });
    });
  });
  console.log("heck yeah");
}

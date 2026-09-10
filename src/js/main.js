/* Your JS here. */
const sections = document.querySelectorAll("section")
const navLinks = document.querySelectorAll(".navbar__items a")
const navbar = document.querySelector(".navbar");
const navbarHeight = navbar.offsetHeight;

window.addEventListener("scroll", () => {
  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;

    if (window.scrollY + navbarHeight >= sectionTop) {
      currentSection = section.id;
    }
  });

  navLinks.forEach((link) => {
    link.classList.toggle(
      "active",
      link.getAttribute("href") === `#${currentSection}`
    );
  });
});


// resize navbar
window.addEventListener("scroll", () => {
    if(window.scrollY > 60){
        navbar.classList.add("scrolled")
    } else{
        navbar.classList.remove("scrolled")
    }
})
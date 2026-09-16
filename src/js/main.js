/* Your JS here. */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar__items a");
const navbar = document.querySelector(".navbar");
const track = document.querySelector(".about__carousel-track");
const images = document.querySelectorAll(".about__carousel-track img");
const leftButton = document.querySelector(".about__carousel-button--left");
const rightButton = document.querySelector(".about__carousel-button--right");
const modals = document.querySelectorAll(".modal");
const cards = document.querySelectorAll(".services__card");
const closeButtons = document.querySelectorAll(".modal__close");



// section indicator

function updateActiveSection(){
    let currentSection = "";
    const navbarBottom = navbar.getBoundingClientRect().bottom;

  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;


    if (sectionTop <= navbarBottom ) {
      currentSection = section.id;
    }
  });

    const atBottom =
    window.scrollY + window.innerHeight >=
    document.documentElement.scrollHeight - 1;

  if (atBottom && sections.length > 0) {
    currentSection = sections[sections.length - 1].id;
  }

  navLinks.forEach((link) => {
    link.classList.toggle(
      "active",
      link.getAttribute("href") === `#${currentSection}`
    );
  });
}

window.addEventListener("scroll", updateActiveSection);
window.addEventListener("resize", updateActiveSection);

navbar.addEventListener("transitionend", (event) => {
  if (event.target === navbar && event.propertyName === "height") {
    updateActiveSection();
  }
});

updateActiveSection();

// resize navbar
window.addEventListener("scroll", () => {
    if(window.scrollY > 60){
        navbar.classList.add("scrolled")
    } else{
        navbar.classList.remove("scrolled")
    }
})

// carousel animation
let currentIndex = 0;

function updateCarousel(nextIndex){
  if (currentIndex > 0) {
    track.classList.remove(`about__carousel-track--slide-${currentIndex}`);
  }

  currentIndex = nextIndex;

  if (currentIndex > 0) {
    track.classList.add(`about__carousel-track--slide-${currentIndex}`);
  }
}

rightButton.addEventListener("click", ()=>{
  updateCarousel((currentIndex + 1) % images.length);
})

leftButton.addEventListener("click", ()=>{
  updateCarousel((currentIndex - 1 + images.length) % images.length);
})


// modal interaction
cards.forEach((card) => {
  card.addEventListener("click", ()=>{
    const modalId = card.dataset.modal;
    const modal = document.getElementById(modalId);

    modal.classList.add("active");
  });
});

closeButtons.forEach((button) => {
  button.addEventListener("click", ()=>{
    button.closest(".modal").classList.remove("active")
  })
})

modals.forEach((modal) =>{
  modal.addEventListener("click", (event)=>{
    if (event.target === modal){
      modal.classList.remove("active")
    }
  })
})

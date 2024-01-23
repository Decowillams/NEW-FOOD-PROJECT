console.log("hello world!");

const myName = "Emmanudddddddddel";

const h1 = document.querySelector(".heading-primary");
console.log(myName);
console.log(h1);

h1.textcontent = myName;
h1.style.backgroundColor = "red";

h1.style.padding = " 5rem";
// MAKE MOBILE NAVIGATION WORK

const btnnavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

// sticky navigation

const sectionHeroEl = document.querySelector(".section-hero");

const observer = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false)
      document.querySelector(".header").classList.add("sticky");
  },
  {
    root: null,
    threshold: 0,
  }
);
observer.observe(sectionHeroEl);

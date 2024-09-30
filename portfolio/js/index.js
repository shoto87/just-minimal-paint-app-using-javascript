let dayNight = document.querySelector(".dayNight");
let banner = document.querySelector(".banner");

dayNight.addEventListener("click", () => {
  banner.classList.toggle("night");
});

let typing = new Typed("#text", {
  strings: ["patrick", "a Designer !", "an Artist !", "a lazy person !"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
  showCursor: true,
  backDelay: 1000,

  cursorChar: "|",
});

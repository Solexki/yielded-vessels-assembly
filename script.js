const toggelBtn = document.querySelectorAll(".list-items");

toggelBtn.forEach((btn) => {
  btn.addEventListener("mouseenter", function () {
    if (!this.parentElement.classList.contains("extend-work-process")) {
      this.querySelector("i").classList.replace("fa-plus", "fa-minus");
      this.parentElement.classList.toggle("extend-work-process");
    }
  });
  btn.addEventListener("mouseleave", function () {
    if (this.parentElement.classList.contains("extend-work-process")) {
      this.querySelector("i").classList.replace("fa-minus", "fa-plus");
      this.parentElement.classList.remove("extend-work-process");
    }
  });

  btn.addEventListener("click", function () {
    this.parentElement.classList.toggle("extend-work-process");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".testimonies-slider");
  const slides = document.querySelectorAll(".testimonies");
  const prevButton = document.querySelector(".fa-arrow-left");
  const nextButton = document.querySelector(".navigator-arrow .fa-arrow-right");
  const navigator = document.querySelectorAll(".diomond-indicator");
  console.log(nextButton);
  console.log(prevButton);

  let activeIndex = 1;

  function updateSlidePosition() {
    const translateValue = -activeIndex * (slides[0].offsetWidth + 40); // Slide width + gap
    slider.style.transform = `translateX(${translateValue}px)`;

    prevButton.parentElement.classList.toggle("disabled", activeIndex === 0);
    nextButton.parentElement.classList.toggle(
      "disabled",
      activeIndex === slides.length - 1
    );

    navigator.forEach((indicator, index) => {
      indicator.classList.toggle("active", index === activeIndex);
    });
  }

  nextButton.addEventListener("click", function () {
    if (activeIndex < slides.length - 1) {
      activeIndex++;
    }

    updateSlidePosition();
  });

  prevButton.addEventListener("click", function () {
    if (activeIndex > 0) {
      activeIndex--;
    }

    updateSlidePosition();
  });

  updateSlidePosition(); // Initialize position on load
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      console.log(entry);

      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  },
  { threshold: 0.3 }
);

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));


//mobile button
const menuIcon = document.querySelector(".menu-icon");
const navItem = document.querySelector(".nav-item");

menuIcon.addEventListener("click", function () {
  navItem.classList.toggle("show-nav-item");

  if (navItem.classList.contains("show-nav-item")) {
    menuIcon.innerHTML = "&#10006;";
  } else {
    menuIcon.innerHTML = "&#9776;";
  }
});

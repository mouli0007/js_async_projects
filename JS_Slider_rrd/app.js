const slides = document.querySelectorAll(".slide");
const prevBTn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const alert = document.querySelector(".alert");
const wheel_name = document.querySelector(".wheel-name");
const slides_title = document.querySelectorAll(".slide h2");
const wheel_Btn = document.querySelectorAll(".wheel-btn");
const thanks = document.querySelector(".thanks");

let count = 0;
clearAlert("Choose Your f1 Wheel !");

window.addEventListener("DOMContentLoaded", initialLoad);

function initialLoad() {
  slides.forEach((slide, index) => {
    let position = "inactive";
    if (count === index) {
      slide.classList.add("active");
    }
  });
}

nextBtn.addEventListener("click", () => {
  count++;
  next();
  display_wheel_name();
});

prevBTn.addEventListener("click", () => {
  count--;
  previous();
  display_wheel_name();
});

function next(type) {
  slides.forEach((slide, index) => {
    if (count === index) {
      slide.classList.add("active");
      slide.previousElementSibling.classList.remove("active");

      displayBtns();
    }
  });
}

function previous() {
  slides.forEach((slide, index) => {
    if (count === index) {
      slide.classList.add("active");
      slide.nextElementSibling.classList.remove("active");
      displayBtns();
    }
  });
}

function clearAlert(msg) {
  alert.textContent = msg;
  setTimeout(() => {
    alert.textContent = "";
  }, 2000);
}

function displayBtns() {
  //   Previous button !
  if (count > 0) {
    prevBTn.style.display = "block";
  } else {
    prevBTn.style.display = "none";
  }

  //  next Button !

  if (count === slides.length - 1) {
    nextBtn.style.display = "none";
    clearAlert("I Hope You Selected your Customized Wheel");
  } else {
    nextBtn.style.display = "block";
  }
}

prevBTn.style.display = "none";

function display_wheel_name() {
  slides_title.forEach((slide, index) => {
    if (count === index) {
      wheel_name.textContent = slide.textContent;
    }
  });
}

display_wheel_name();

wheel_Btn.forEach((wheel) => {
  wheel.addEventListener("click", (e) => {
    let wheel_name =
      e.currentTarget.previousElementSibling.previousElementSibling;
    purchase(wheel_name);
  });
});

function purchase(name) {
  thanks.textContent = ` Thanks for purchasing ${name.textContent} Wheel ! `;
  wheel_name.textContent = "";
  if (!name.parentElement.classList.contains("active")) {
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });
    name.parentElement.classList.add("active");
  }
  setTimeout(() => {
    name.parentElement.classList.remove("active");
    initialLoad();
    display_wheel_name();
  }, 2000);
  setTimeout(() => {
    thanks.textContent = "";
  }, 2000);
}

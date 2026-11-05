const form = document.getElementById("adopt-form");
const formMessage = document.getElementById("form-message");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  if (username === "" || email === "") {
    formMessage.textContent = "Please enter your name and email.";
    formMessage.style.color = "#dc2626";
  } else {
    formMessage.textContent = "Thank you, " + username + "! We will contact you at " + email + " soon.";
    formMessage.style.color = "#16a34a";
  }
});

const rows = document.querySelectorAll(".row");

for (let row of rows) {
  row.addEventListener("mouseover", function () {
    row.style.backgroundColor = "var(--highlight)";
  });

  row.addEventListener("mouseout", function () {
    row.style.backgroundColor = "";
  });
}

const themeBtn = document.getElementById("theme-btn");

themeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");
});

const items = document.querySelectorAll(".item");
const totalText = document.getElementById("total");

for (let item of items) {
  item.addEventListener("change", function () {
    let total = 0;

    for (let box of items) {
      if (box.checked) {
        total = total + parseInt(box.value);
      }
    }

    totalText.textContent = "Total: Rs " + total;
  });
}

const birthYear = document.getElementById("birth-year");
const ageMessage = document.getElementById("age-message");

birthYear.addEventListener("change", function () {
  const year = parseInt(birthYear.value);
  const age = new Date().getFullYear() - year;

  if (isNaN(year)) {
    ageMessage.textContent = "Please enter a valid birth year.";
  } else if (age <= 25) {
    ageMessage.textContent = "You are " + age + ". You qualify for a 10% student discount!";
  } else if (age >= 60) {
    ageMessage.textContent = "You are " + age + ". You qualify for a 15% senior discount!";
  } else {
    ageMessage.textContent = "You are " + age + ". No discount available.";
  }
});

const readMoreBtn = document.getElementById("read-more-btn");
const moreText = document.getElementById("more-text");

readMoreBtn.addEventListener("click", function () {
  if (moreText.style.display === "inline") {
    moreText.style.display = "none";
    readMoreBtn.textContent = "Read More";
  } else {
    moreText.style.display = "inline";
    readMoreBtn.textContent = "Read Less";
  }
});

const filterButtons = document.querySelectorAll(".filter-btn");
const shopRows = document.querySelectorAll("#shop tbody tr");

for (let button of filterButtons) {
  button.addEventListener("click", function () {
    const category = button.value;

    for (let row of shopRows) {
      if (category === "all" || row.classList.contains(category)) {
        row.style.display = "";
      } else {
        row.style.display = "none";
      }
    }
  });
}

const statusText = document.getElementById("status");
const hour = new Date().getHours();

if (hour >= 8 && hour < 20) {
  statusText.textContent = "We are Open now!";
  statusText.style.backgroundColor = "green";
} else {
  statusText.textContent = "Closed - Open at 8 AM";
  statusText.style.backgroundColor = "red";
}

const notes = document.getElementById("special-notes");
const charCount = document.getElementById("char-count");

notes.addEventListener("input", function () {
  const remaining = 100 - notes.value.length;
  charCount.textContent = remaining + " characters remaining";
});

const smallCups = document.querySelectorAll(".cup-small");
const liters = document.getElementById(".liters");
const percentage = document.getElementById(".cup-small");
const remained = document.getElementById("remained");

smallCups.forEach(function (cup, idx) {
  // console.log(cup, idx);

  cup.addEventListener("click", () => highlight(idx));
});

function highlight(idx) {
  if (
    smallCups[idx].classList.contains("full") &&
    !smallCups[idx].nextElementSibling.classList.contains("full")
  ) {
    idx--;
  }

  smallCups.forEach((cup, idx2) => {
    if (idx2 <= idx) {
      cup.classList.add("full");
    } else {
      cup.classList.remove("full");
    }
  });
}

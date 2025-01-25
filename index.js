const stars = document.querySelectorAll(".star-rating-container i");
const ratingSpan = document.querySelector(".selected-rating-container span");

stars.forEach((star, index) => {
  star.addEventListener("click", () => {
    // Reset all stars
    stars.forEach((s) => s.classList.remove("active"));

    // Highlight clicked star and all previous stars
    for (let i = 0; i <= index; i++) {
      stars[i].classList.add("active");
    }

    // Update the selected rating value
    ratingSpan.textContent = index + 1;
  });
});

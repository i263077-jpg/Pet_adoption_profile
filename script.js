function say(petName = "") {
  console.log("Adopt button was clicked");

  if (petName) {
    window.alert(`Thanks for adopting ${petName}`);
  } else {
    window.alert("Thanks for adopting");
  }
}

const adoptButton = document.getElementById("adopt-button");
if (adoptButton) {
  adoptButton.addEventListener("click", () => say());
}

document.querySelectorAll(".adopt-button").forEach((button) => {
  button.addEventListener("click", () => say(button.dataset.petName));
});

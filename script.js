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

const contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    console.log("Name:", formData.get("name"));
    console.log("Email:", formData.get("email"));
    console.log("Message:", formData.get("message"));
    window.alert("Thanks for contacting us");
  });
}

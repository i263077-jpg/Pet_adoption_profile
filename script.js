function say() {
  console.log("Adopt button was clicked");
  window.alert("Thanks for adopting");
}

document.getElementById("adopt-button").addEventListener("click", say);

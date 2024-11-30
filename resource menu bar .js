

// Toggle dropdown menu visibility on hamburger click
document.getElementById("hamburger").onclick = function () {
  const dropdown = document.getElementById("dropdownMenu");
  dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
};

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  const dropdown = document.getElementById("dropdownMenu");
  const hamburger = document.getElementById("hamburger");

  // Ensure dropdown is closed when clicking outside of hamburger or dropdown
  if (dropdown.style.display === "block" && !dropdown.contains(event.target) && event.target !== hamburger) {
      dropdown.style.display = "none";
  }
};

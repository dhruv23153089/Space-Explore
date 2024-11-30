document.addEventListener("DOMContentLoaded", function () {
    const dropdown = document.querySelector(".news-dropdown");
    const menu = document.querySelector(".dropdown-menu");

    dropdown.addEventListener("click", function () {
        if (window.innerWidth <= 767) {
            // Toggle dropdown menu for mobile
            menu.style.display = menu.style.display === "block" ? "none" : "block";
        }
    });

    // Optional: Close the dropdown when clicking outside (desktop and mobile)
    document.addEventListener("click", function (event) {
        if (!dropdown.contains(event.target) && !menu.contains(event.target)) {
            menu.style.display = "none";
        }
    });
});

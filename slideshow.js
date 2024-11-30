let slideIndex = 0;
  showSlides();

  // Function to show slides
  function showSlides() {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 8000); // Change image every 8 seconds
  }

  // Function to manually change slides
  function changeSlide(n) {
    slideIndex += n - 1;
    showSlides();
  }

  // Function to set the current slide
  function currentSlide(n) {
    slideIndex = n - 1;
    showSlides();
  }
const imageSlider = () => {
  const sliderContainer = document.querySelector(".slideshow-container");
  const slides = sliderContainer.querySelectorAll(".slide");
  const dots = sliderContainer.querySelectorAll(".dot");
  let currentSlide = Math.floor(Math.random() * 4);

  function nextSlide() {
    slides[currentSlide].classList.toggle("display");
    dots[currentSlide].classList.toggle("active");
    currentSlide = currentSlide === 3 ? 0 : (currentSlide += 1);
    slides[currentSlide].classList.toggle("display");
    dots[currentSlide].classList.toggle("active");
  }

  function previousSlide() {
    slides[currentSlide].classList.toggle("display");
    dots[currentSlide].classList.toggle("active");
    currentSlide = currentSlide === 0 ? 3 : (currentSlide -= 1);
    slides[currentSlide].classList.toggle("display");
    dots[currentSlide].classList.toggle("active");
  }

  document.querySelector(".backarrow").addEventListener("click", previousSlide);
  document.querySelector(".nextarrow").addEventListener("click", nextSlide);

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      dots[currentSlide].classList.toggle("active");
      currentSlide = index === 0 ? 3 : index - 1;
      dots[currentSlide].classList.toggle("active");
      nextSlide();
    });
  });

  slides[currentSlide].classList.toggle("display");
  dots[currentSlide].classList.toggle("active");
  nextSlide();

  //   setInterval(nextSlide, 5000);
};

export default imageSlider;

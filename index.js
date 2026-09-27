
// Define an array of image file names and other variables
const imageArray = ["images/slide1.jpg", "images/slide2.jpg", "images/slide3.jpg", "images/slide4.jpg"];
let currentIndex = 0;
const delay = 1500;

// Function to display the images and update the indicator dots
function displayImage() {
  document.getElementById("slideshow").src = imageArray[currentIndex];
  updateIndicator(currentIndex);
  currentIndex++;
  if (currentIndex == imageArray.length) {
    currentIndex = 0;
  }
  setTimeout(displayImage, delay);
}

// Function to update the indicator dots
function updateIndicator(currentIndex) {
  const indicatorContainer = document.getElementById("indicator-container");
  indicatorContainer.innerHTML = "";
  for (let i = 0; i < imageArray.length; i++) {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (i == currentIndex) {
      dot.classList.add("active");
    }
    indicatorContainer.appendChild(dot);
  }
}

// Load the page and start displaying the images
window.addEventListener("load", function () {
  displayImage();

  // event listener to the "scroll to top" button
  const scrollToTopButton = document.getElementById("scrollfun");
  scrollToTopButton.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});


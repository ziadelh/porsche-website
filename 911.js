// Add an event listener to the "scroll to top" button
window.onload=function(){
 const scrollToTopButton = document.getElementById("scrollfun");
  scrollToTopButton.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}
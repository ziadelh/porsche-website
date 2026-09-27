window.addEventListener("load", function () {
  const img = document.getElementById("drivers");

  img.addEventListener("mouseover", function () {
    img.style.transform = "scale(1.2)";
  });

  img.addEventListener("mouseout", function () {
    img.style.transform = "scale(1)";
  });
});
window.addEventListener("load", function () {
  const img = document.getElementById("drivers2");

  img.addEventListener("mouseover", function () {
    img.style.transform = "scale(1.2)";
  });

  img.addEventListener("mouseout", function () {
    img.style.transform = "scale(1)";
  });
});
window.addEventListener("load", function () {
  const img = document.getElementById("drivers3");

  img.addEventListener("mouseover", function () {
    img.style.transform = "scale(1.2)";
  });

  img.addEventListener("mouseout", function () {
    img.style.transform = "scale(1)";
  });
});
// Set the date and time to count down to
var countDownDate = new Date("2023-05-23T23:59:59Z").getTime();

// Update the countdown as soon as the page loads, then every second
var x = setInterval(updateCountdown, 1000);
document.addEventListener("DOMContentLoaded", updateCountdown);

function updateCountdown() {

  // Get the current date and time
  var now = new Date().getTime();

  // Calculate the distance between now and the count down date
  var distance = countDownDate - now;

  // Calculate days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="countdown"
  document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, show that the season is over
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown-label").innerHTML = "Season finished";
    document.getElementById("countdown").innerHTML = "New dates coming soon";
  }
}

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

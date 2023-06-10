audioPlayer.addEventListener("play", function () {
  if (autoRecordCheckbox.checked) {
    startAutoRecording();
  }
});

function startAutoRecording() {
  let chunks = [];
  
  
  toggleRecording();


}



const threshold = 84; // Adjust the threshold value as needed

window.addEventListener("scroll", function() {
  const showStarredContainer = starredOverlay.querySelector(".show-starred-container");

  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > threshold) {
    // Change the position to fixed
    starredOverlay.style.position = "fixed";


    starredOverlay.style.top = "84px"; // Adjust the top value as needed
  } else {
    // Change the position back to absolute
    starredOverlay.style.position = "absolute";


    starredOverlay.style.top = "204px"; // Adjust the top value as needed
  }
});

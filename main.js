const slider_div = document.querySelectorAll('.slider_image');
const frame_div = document.querySelector('#slider_animation');

let currentIndex = 0;

setInterval(() => {
    currentIndex++;
    if (currentIndex >= slider_div.length) {
        currentIndex = 0; // go back to first image
    }
    
    // move the frame_div left based on current image
    frame_div.style.transform = `translateX(-${currentIndex * 100}vw)`;
    frame_div.style.transition = 'transform 0.5s ease-in-out';
    
}, 2000);






const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view'); // Add the class to trigger the sliding animation
        observer.unobserve(entry.target); // Stop observing after the animation has started
      }
    });
  }, {
    threshold: 0.5 // Trigger the animation when 50% of the image is in the viewport
  });
  
  // Start observing the #achivements div
  const achievementsDiv = document.getElementById('achivements');
  observer.observe(achievementsDiv);
  const certificateDiv = document.getElementById('certifications');
  observer.observe(certificateDiv)



function openFacebookGallery() {
 var webLink = "https://www.facebook.com/kanpuryoungfightersclub/photos"; // Direct web link

  window.open(webLink, "_blank"); // Open in a new browser tab/window
  
}




// Get the current year and update the "year" element
const yearElement = document.getElementById("year");
const currentYear = new Date().getFullYear();
yearElement.textContent = currentYear;

// Get the last modified date and update the "lastModified" element
const dateElement = document.getElementById("lastModified");
const lastModifiedDate = document.lastModified;
dateElement.textContent = "Last Modified: " + lastModifiedDate;


const yearElement = document.getElementById("year");
//const currentYear = new Date().getFullYear();
yearElement.textContent = currentYear;

const dateElement = document.getElementById("lastModified");
//const lastModifiedDate = document.lastModified;
dateElement.textContent = "LastModified: " + lastModifiedDate;

  document.addEventListener("DOMContentLoaded", function() {
    var lazyImages = [].slice.call(document.querySelectorAll("img[loading=lazy]"));

    if ("IntersectionObserver" in window) {
      var lazyImageObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            var lazyImage = entry.target;
            lazyImage.src = lazyImage.dataset.src;
            lazyImage.srcset = lazyImage.dataset.srcset;
            lazyImage.classList.remove("lazy");
            lazyImageObserver.unobserve(lazyImage);
          }
        });
      });

      lazyImages.forEach(function(lazyImage) {
        lazyImageObserver.observe(lazyImage);
      });
    } else {
      // Fallback for browsers that don't support Intersection Observer
      lazyImages.forEach(function(lazyImage) {
        lazyImage.src = lazyImage.dataset.src;
        lazyImage.srcset = lazyImage.dataset.srcset;
        lazyImage.classList.remove("lazy");
      });
    }
  });




  // Retrieve the last visit date from localStorage
const lastVisit = localStorage.getItem('lastVisit');

// Get the current date
const currentDate = new Date();

// Save the current visit date to localStorage
localStorage.setItem('lastVisit', currentDate.toISOString());

// Calculate the time difference between visits
const timeDifference = calculateTimeDifference(lastVisit, currentDate);

// Display the message based on the time difference
const sidebarMessage = document.getElementById('sidebar-message');
sidebarMessage.textContent = getTimeMessage(timeDifference);

// Function to calculate the time difference between two dates
function calculateTimeDifference(startDate, endDate) {
  if (!startDate) return null;

  const start = new Date(startDate);
  const end = new Date(endDate);

  const diff = Math.abs(end - start);
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  return days;
}

// Function to get the appropriate message based on the time difference
function getTimeMessage(days) {
  if (days === null) {
    return "Welcome! It's your first visit.";
  } else if (days === 0) {
    return "Welcome back! You visited today.";
  } else if (days === 1) {
    return "Welcome back! You visited yesterday.";
  } else {
    return `Welcome back! It's been ${days} days since your last visit.`;
  }
}

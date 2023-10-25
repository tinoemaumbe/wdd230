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









const viewToggleButton = document.getElementById('viewToggle');
const gridViewButton = document.getElementById('gridViewBtn');
const listViewButton = document.getElementById('listViewBtn');
const membersList = document.getElementById('membersList');

let viewMode = 'grid'; // Default view mode

// Function to fetch member data from the JSON file
function getMemberData() {
  return fetch('https://tinoemaumbe.github.io/wdd230/chamber/data/members.json')
    .then(response => response.json())
    .then(data => data.members)
    .catch(error => console.log('Error fetching member data:', error));
}

// Function to render members in grid view
function renderGridMembers(memberData) {
  membersList.innerHTML = '';
  memberData.forEach(member => {
    const memberCard = document.createElement('div');
    memberCard.classList.add('member-card');
    memberCard.innerHTML = `
      <img src="images/${member.image}" alt="${member.name}" class="member-image">
      <h2>${member.name}</h2>
      <p>${member.address}</p>
      <p>Phone: ${member.phone}</p>
      <a href="${member.website}" target="_blank">Visit Website</a>
      <p>Membership Level: ${member.membershipLevel}</p>
      <p>${member.otherInfo}</p>
    `;
    membersList.appendChild(memberCard);
  });
}

// Function to render members in list view
function renderListMembers(memberData) {
  membersList.innerHTML = '';
  memberData.forEach(member => {
    const listItem = document.createElement('li');
    listItem.classList.add('member-item');
    listItem.innerHTML = `
      <h2>${member.name}</h2>
      <p>${member.address}</p>
      <p>Phone: ${member.phone}</p>
      <a href="${member.website}" target="_blank">Visit Website</a>
      <p>Membership Level: ${member.membershipLevel}</p>
      <p>${member.otherInfo}</p>
    `;
    membersList.appendChild(listItem);
  });
}

// Event listener for grid view button
gridViewButton.addEventListener('click', () => {
  if (viewMode !== 'grid') {
    gridViewButton.classList.add('active');
    listViewButton.classList.remove('active');
    viewMode = 'grid';
    getMemberData().then(memberData => renderGridMembers(memberData));
  }
});

// Event listener for list view button
listViewButton.addEventListener('click', () => {
  if (viewMode !== 'list') {
    gridViewButton.classList.remove('active');
    listViewButton.classList.add('active');
    viewMode = 'list';
    getMemberData().then(memberData => renderListMembers(memberData));
  }
});

// Initial rendering in grid view
getMemberData().then(memberData => renderGridMembers(memberData));
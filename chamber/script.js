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

{
document.addEventListener('DOMContentLoaded', function() {
  const visitMessage = document.querySelector('.visit-message');
  const lastVisit = localStorage.getItem('lastVisit');
  const currentDate = Date.now();
  const oneDay = 24 * 60 * 60 * 1000; // One day in milliseconds

  if (lastVisit) {
    const daysSinceLastVisit = Math.floor((currentDate - lastVisit) / oneDay);
    if (daysSinceLastVisit === 0) {
      visitMessage.innerHTML = "<p>Back so soon! Awesome!</p>";
    } else {
      const dayText = daysSinceLastVisit === 1 ? "day" : "days";
      visitMessage.innerHTML = `<p>You last visited ${daysSinceLastVisit} ${dayText} ago.</p>`;
    }
  } else {
    visitMessage.innerHTML = "<p>Welcome! Let us know if you have any questions.</p>";
  }

  localStorage.setItem('lastVisit', currentDate.toString());

  const images = document.querySelectorAll('.gallery img');
  const options = {
    threshold: 0.5,
    rootMargin: '0px',
  };

  const loadImage = (image) => {
    image.src = image.dataset.src;
  };

  const handleIntersection = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        loadImage(entry.target);
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(handleIntersection, options);
  images.forEach ((image) => {
    observer.observe(image);
  })
});
}







const viewToggleButton = document.getElementById('viewToggle');
const gridViewButton = document.getElementById('gridViewBtn');
const listViewButton = document.getElementById('listViewBtn');
const membersList = document.getElementById('membersList');

let viewMode = 'grid'; // Default view mode

// Function to fetch member data from the JSON file
function getMemberData() {
  return fetch('https://github.com/tinoemaumbe/wdd230/chamber/data/members.json')
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

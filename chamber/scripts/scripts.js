

const viewToggleButton = document.getElementById('viewToggle');
const gridViewButton = document.getElementById('gridViewBtn');
const listViewButton = document.getElementById('listViewBtn');
const membersList = document.getElementById('membersList');

let viewMode = 'grid'; // Default view mode

// Function to fetch member data from the JSON file
function getMemberData() {
  return fetch('https://tinoemaumbe.github.io/wdd230/chamber/data/data.json')
    .then(response => data.json())
    .then(data => data.data)
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

// links.js

// Define the base URL for your project
const baseURL = "https://tinoemaumbe.github.io/wdd230";

// Define the URL for the links.json data file
const linksURL = "https://tinoemaumbe.github.io/wdd230/data/links.json";

// Fetch the links data from links.json
async function getLinks() {
  try {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data);
  } catch (error) {
    console.log("Error fetching links data:", error);
  }
}

// Display the activity links dynamically
function displayLinks(weeks) {
  const activityLinks = document.getElementById("activityLinks");

  // Loop through each week
  weeks.forEach((week) => {
    const weekNumber = week.week;
    const links = week.links;

    // Create a heading for the week
    const weekHeading = document.createElement("h3");
    weekHeading.textContent = `Week ${weekNumber}`;
    activityLinks.appendChild(weekHeading);

    // Create an unordered list for the activity links
    const linkList = document.createElement("ul");

    // Loop through each activity link
    links.forEach((link) => {
      const { url, title } = link;

      // Create a list item with a link
      const listItem = document.createElement("li");
      const linkElement = document.createElement("a");
      linkElement.href = baseURL + url;
      linkElement.textContent = title;

      listItem.appendChild(linkElement);
      linkList.appendChild(listItem);
    });

    activityLinks.appendChild(linkList);
  });
}

// Call the getLinks function to fetch and display the activity links
getLinks();

const links = [
    { week: 'Week 1', url: 'https://tinoemaumbe.github.io/wdd230/week1', title: 'Week 1 Title' },
    { week: 'Week 2', url: 'https://tinoemaumbe.github.io/wdd230/week2', title: 'Week 2 Title' },
    // Add more week links as needed
  ];
  
  const weekList = document.getElementById('weekList');
  for (const link of links) {
    const listItem = document.createElement('li');
    const anchor = document.createElement('a');
    anchor.href = link.url;
    anchor.textContent = link.week;
  
    listItem.appendChild(anchor);
    weekList.appendChild(listItem);
  }





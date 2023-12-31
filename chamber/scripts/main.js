const date1 = new Date();
const year = date1.getFullYear();
document.getElementById("currentyear").textContent = year;

const date2 = document.querySelector("#currentdate");

try {
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  date2.textContent = new Date().toLocaleDateString("en-UK", options);
} catch (e) {
  alert("Error with code or your browser does not support Locale");
}

const now = new Date();
const datehead =document.getElementById("time-today");
const dateuk = new Intl.DateTimeFormat("en-UK", {  dateStyle: "full",}).format(now);
datehead.innerHTML = `<em>${dateuk}</em>`;


function toggleMenu() {
  document.getElementById("navicon").classList.toggle("open");
  document.getElementById("hum-button").classList.toggle("open");
}

const x = document.getElementById("hum-button");
x.onclick = toggleMenu;

window.onresize = () => {
    if (window.innerWidth > 1022) {
        navicon.classList.remove("open");
        hum-button.classList.remove("open");
    }
  
  }


  // Calculate days between visits
  const lastVisitElement = document.querySelector('.lastvisit');
  const lastVisit = localStorage.getItem('lastVisit');
  if (lastVisit) {
    const currentDate = new Date();
    const diffTime = Math.abs(currentDate - new Date(lastVisit));
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    lastVisitElement.textContent = `Days between visits: ${diffDays}`;
  } else {
    lastVisitElement.textContent = 'Welcome!';
  }

  // Update last visit date
  localStorage.setItem('lastVisit', new Date().toString());




 // Update current year
  const currentYear = new Date().getFullYear();
  document.getElementById("currentYear").textContent = currentYear;

  // Update last updated date
  const lastUpdatedDate = new Date(document.lastModified);
  const options = { year: "numeric", month: "long", day: "numeric" };
  document.getElementById("lastUpdated").textContent = lastUpdatedDate.toLocaleDateString(undefined, options);

  // Handle form submission
  document.getElementById("join-form").addEventListener("submit", function(e) {
    e.preventDefault();
    const submissionDate = new Date().toLocaleDateString(undefined, options);
    document.getElementById("submissionDate").textContent = submissionDate;
    document.getElementById("join-form").style.display = "none";
    document.getElementById("confirmation").style.display = "block";
  });

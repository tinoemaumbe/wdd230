let lastvisit = Number(window.localStorage.getItem("lastvisit"));

let thisvisit = Date.now();

if (lastvisit != 0) {
  let FACTOR = 86400000;

  let daysBetween = (thisvisit - lastvisit) / FACTOR;

  document.querySelector(".lastvisit").textContent =
    "It has been " +
    daysBetween.toFixed(0) +
    " day(s) since your last visit. Welcome back!";
} else {
  window.localStorage.setItem("lastvisit", Date.now());
  document.querySelector(".lastvisit").textContent =
    "This is your first visit! Find something you'll love!";
}

window.localStorage.setItem("lastvisit", thisvisit);



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


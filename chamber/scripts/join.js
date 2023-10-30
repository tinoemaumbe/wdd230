const date = new Date();
const yearfromdate = date.getFullYear();

//Get date and time
var datetime =
    "Last Sync: " +
    date.getDate() +
    "/" +
    (date.getMonth() + 1) +
    "/" +
    date.getFullYear() +
    " || " +
    date.getHours() +
    ":" +
    date.getMinutes() +
    ":" +
    date.getSeconds();

console.log(datetime);
document.getElementById("submitdate").value = datetime;



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

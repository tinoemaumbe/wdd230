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

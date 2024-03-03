const currentDateParagraph = document.getElementById("current-date");
const dateOptionsSelectElement = document.getElementById("date-options");

const date = new Date();
const day = date.getDate();
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const month = months[date.getMonth()];
const year = date.getFullYear();
const time = date.toLocaleTimeString("en-US", {
  hour: "numeric",
  minute: "numeric",
});
const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const dayOfWeek = daysOfWeek[date.getDay()];

const formattedDate = `${day}-${month}-${year}-${dayOfWeek}`;
currentDateParagraph.textContent = formattedDate;

dateOptionsSelectElement.addEventListener("change", () => {
  switch (dateOptionsSelectElement.value) {
    case "yyyy-mm-dd":
      currentDateParagraph.textContent = formattedDate
        .split("-")
        .reverse()
        .join("-");
      break;
    case "mm-dd-yyyy-t":
      currentDateParagraph.textContent = `${month}-${day}-${year}-${dayOfWeek};  Time: ${time}`;
      break;
    default:
      currentDateParagraph.textContent = formattedDate;
  }
});

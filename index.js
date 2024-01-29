// Function to update the digital clock
function updateClock() {
    // Get the current date and time
    const now = new Date();

    // Extract hours from the current time
    let hours = now.getHours();

    // Determine whether it's AM or PM
    const meridiem = hours >= 12 ? "PM" : "AM";

    // Convert hours to 12-hour format
    hours = hours % 12 || 12;

    // Convert hours to a string and ensure it has two digits (pad with leading zero if necessary)
    hours = hours.toString().padStart(2, 0);

    // Get minutes and ensure it has two digits
    const minutes = now.getMinutes().toString().padStart(2, 0);

    // Get seconds and ensure it has two digits
    const seconds = now.getSeconds().toString().padStart(2, 0);

    // Create a formatted time string
    const timeString = `${hours}:${minutes}:${seconds} ${meridiem}`;

    // Update the content of the HTML element with id "clock" with the new time string
    document.getElementById("clock").textContent = timeString;
}

// Initial call to updateClock to set the initial time
updateClock();

// Set up an interval to call updateClock every 1000 milliseconds (1 second)
setInterval(updateClock, 1000);

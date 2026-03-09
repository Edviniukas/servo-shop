// script.js for Servo Shop

// Function to display the current date and time
function displayCurrentDateTime() {
    const now = new Date();
    // Format date and time as 'YYYY-MM-DD HH:MM:SS'
    const formattedDateTime = now.toISOString().slice(0, 19).replace('T', ' ');
    console.log(`Current Date and Time (UTC): ${formattedDateTime}`);
}

// Call the function to display the date and time
displayCurrentDateTime();
// Function to fetch temperature data from the server
async function fetchTemperature() {
  try {
    const response = await fetch('/temperature');
    const data = await response.text();
    document.getElementById('temperature').innerText = data;
  } catch (error) {
    console.error('Error fetching temperature:', error);
  }
}

// Fetch temperature data when the page loads
window.onload = fetchTemperature;

const apiUrl = 'https://pinnacle-odds.p.rapidapi.com/kit/v1/leagues?sport_id=1';
const apiKey = '3e2c571e03msh65252003b5e34e7p1d978fjsn576b1362083a'; // Your RapidAPI key

async function fetchLeaguesByCountry() {
  const leaguesByCountry = {}; // Initialize the dictionary to group by country

  try {
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': apiKey,
        'X-RapidAPI-Host': 'pinnacle-odds.p.rapidapi.com',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const result = await response.json(); // Parse the JSON response

    // Group the leagues by country
    result.leagues.forEach((league) => {
      const country = league.country || 'Countries'; // Get the country, default to 'Unknown' if missing
      if (!leaguesByCountry[country]) {
        leaguesByCountry[country] = []; // Initialize the array for this country
      }
      leaguesByCountry[country].push(league); // Add the league to the country's array
    });

    return leaguesByCountry; // Return the grouped data

  } catch (error) {
    console.error('Error fetching leagues by country:', error);
    throw error; // Rethrow to handle further up
  }
}

async function buildCountryDropdown() {
    const leaguesByCountry = await fetchLeaguesByCountry(); // Fetch and group by country
    const dropdownContent = document.getElementById('country-dropdown-content'); // Find the dropdown content area
  
    // Clear existing content
    dropdownContent.innerHTML = '';
  
    // Create a button for each country in the dropdown
    for (const country in leaguesByCountry) {
      const countryButton = document.createElement('button');
      countryButton.textContent = country; // Set the button's text to the country name
      countryButton.addEventListener('click', () => {
        // Display leagues for the selected country
        displayLeaguesForCountry(leaguesByCountry[country]);
      });
  
      dropdownContent.appendChild(countryButton); // Add the button to the dropdown
    }
  }

  function displayLeaguesForCountry(leagues) {
    const leagueList = document.getElementById('league-list'); // Find the container to display leagues
    leagueList.innerHTML = ''; // Clear any existing content
  
    leagues.forEach((league) => {
      const leagueItem = document.createElement('li');
      leagueItem.textContent = league.name; // Display the league name
      leagueList.appendChild(leagueItem); // Add the item to the list
    });
  }

  // Build the country dropdown when the page loads
buildCountryDropdown(); // This triggers the initial dropdown build



// API endpoint and options
const url = 'https://betigolo-predictions.p.rapidapi.com/basketball/2021-10-18';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '3e2c571e03msh65252003b5e34e7p1d978fjsn576b1362083a',
        'X-RapidAPI-Host': 'betigolo-predictions.p.rapidapi.com'
    }
};

// Function to fetch and display data
async function fetchData() {
    const dataContainer = document.getElementById('data-container'); // Get the target div

    try {
        const response = await fetch(url, options); // Fetch data from the API

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json(); // Parse the response as JSON

        dataContainer.innerHTML = ''; // Clear previous content if any

        // Assuming the API returns predictions data with a date attribute
        const date = '2021-10-18'; // You might want to extract this from the API data if needed

        dataContainer.innerHTML = `
            <h2>Predictions for: ${date}</h2>
            <ul>
                ${data.map(item => `<li>${item.prediction}</li>`).join('')}
            </ul>
        `; // Modify the innerHTML to display the date and other relevant information

    } catch (error) {
        console.error('Error fetching data:', error); // Handle errors
        dataContainer.textContent = "An error occurred while fetching data.";
    }
}

// Fetch the data when the script runs
fetchData();

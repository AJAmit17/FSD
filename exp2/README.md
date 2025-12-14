# Experiment 2: Weather App

A simple weather application that fetches real-time weather data using the OpenWeatherMap API.

## Description

This experiment demonstrates how to build a weather application using HTML, CSS, and JavaScript. The app fetches weather data from the OpenWeatherMap API and displays current weather conditions for any city.

## Features

- Real-time weather data fetching
- City search functionality
- Displays temperature, humidity, wind speed, and weather description
- Modern and responsive UI
- Error handling for invalid cities and API issues
- Beautiful background image

## Prerequisites

- A modern web browser
- An OpenWeatherMap API key (free)

## Setup Instructions

### 1. Get an API Key

1. Visit [OpenWeatherMap](https://openweathermap.org/api)
2. Sign up for a free account
3. Navigate to your API keys section
4. Copy your API key

### 2. Configure the API Key

1. Open `scripts.js` file
2. Find the line: `const API_KEY = "YOUR_API_KEY";`
3. Replace `YOUR_API_KEY` with your actual API key:
   ```javascript
   const API_KEY = "your_actual_api_key_here";
   ```

### 3. Fix the CSS file reference

The HTML file references `styles.css` but the actual file is named `index.css`. You have two options:

**Option A:** Rename the CSS file:
```bash
# In the exp2 folder
mv index.css styles.css
```

**Option B:** Update the HTML file to reference `index.css` instead of `styles.css`

## How to Run

1. **No installation required** - This is a static HTML page

2. **Open the file**:
   - Simply open `index.html` in any modern web browser
   - OR right-click on `index.html` and select "Open with" → Your browser of choice

3. **Alternative method using a local server** (recommended):
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js (if you have http-server installed)
   npx http-server
   ```
   Then navigate to `http://localhost:8000` in your browser

## Usage

1. Enter a city name in the input field
2. Click the "Get Weather" button or press Enter
3. View the current weather information including:
   - City name and country
   - Current temperature
   - Weather description
   - Humidity percentage
   - Wind speed

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- Fetch API
- OpenWeatherMap API

## File Structure

```
exp2/
├── index.html    # Main HTML file
├── index.css     # Styling (should be renamed to styles.css)
├── scripts.js    # JavaScript logic and API calls
└── README.md     # This file
```

## Troubleshooting

### API Key Issues
- **Error 401**: Your API key is invalid or not activated yet (new keys may take a few minutes to activate)
- **Error 404**: City not found - check the spelling of the city name

### CSS Not Loading
- Make sure the CSS file name matches the reference in `index.html`
- The HTML references `styles.css` but the file is named `index.css`

## Notes

- The app uses metric units for temperature (Celsius) and wind speed (m/s)
- Background image is loaded from an external URL
- API requests are made using async/await syntax
- Error handling is implemented for network issues and invalid responses

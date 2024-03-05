![Image Alt text](/Screenshot.png "WeatherApp Screenshot")

# Notes on Development:

- The HTML file (`index.html`) structures the web page, incorporating input fields, buttons, and containers for weather data and error messages.
- CSS styles (in `styles.css`) are applied to refine the visual presentation, including layout formatting, input field styling, button appearance, and design elements for weather display.
- JavaScript code (in `script.js`) orchestrates the core functionality of the weather application, including interactions with the OpenWeatherMap API, rendering weather information, handling errors, and managing loading states.
- Ensure to replace the placeholder `apiKey` variable in the JavaScript code with a valid API key obtained from OpenWeatherMap.
- The `fetchWeather()` function orchestrates the retrieval of weather data from the OpenWeatherMap API based on user-input city names, processes the response, and triggers subsequent actions for displaying data or handling errors.
- Within `displayWeather()`, retrieved weather data is formatted and presented on the webpage, integrating weather icons for visual representation.
- The `showError()` function dynamically presents error messages to users, enhancing user feedback in case of data retrieval issues or invalid inputs.
- With `showLoading()`, users are informed of loading processes through a loading message, contributing to a smoother user experience during data fetching.
- Overall, the application delivers a user-centric interface, empowering users to input city names, retrieve real-time weather data, and visualize current weather conditions with an aesthetically pleasing design and responsive feedback mechanisms for error handling and loading states.

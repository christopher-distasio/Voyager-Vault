# Voyager Vault

This is a project that lets you add countries you have been to in a list, you can also add countries you want to visit in the future to your "wishlist". We are using REST Countries API to pull country information such as population, and capitol city.

## Table of Contents

- [Installation](#installation)
- [Contributors](#who-contributed)

## Installation

npm start on both back and frontend.

Step 1: Register and log in to your account

Step 2: Search for a country, if you want to add this country to a place you wish to visit someday, add
the country to your wish list. If you have already visited this country add this country to destinations!

Step 3: you can view your countries you added to your wishlist in the wishlist tab, and view your countries
you have already visited in you destinations tab.

Step 4: Having trouble picking your next vacation? let us pick for you. In the search tab we have a random
country generator.

## Who Contributed

[Charles](https://github.com/cwdrian): I worked on the REST Countries API call and made a country card component, created the login and register logic, some backend stuff like routes, and database, and schemas. I focused mostly on backend logic making sure adding countries to your wishlist and destinations got put in the right places. A lot of my time on this was trouble shooting user context, and JWT errors.

[Melanie](https://github.com/mktatum): Throughout the course of this project, my main focus was UI/UX and frontend development. I created the initial homepage layout and navigation bar using a bootstrap nav template with collapse functionality. I also created the base layout for secondary pages and was able to complete some initial troubleshooting errors and worked with Taylor for additional styling options.

[Tim](https://github.com/timryan10): For the final project my attention was more on the backend. I set up some of the skeletal structure of the backend to be tested and improved upon as the project continued such as the controllers and the routes to the database along with Charles. Most of my time was directed towards the sign up and login features of the application.

[Taylor](https://github.com/tsmit275): I contributed to the homepage banner by adding images and integrating a Bootstrap carousel component with indicators for smooth navigation. This feature aims to engage visitors visually and encourage further exploration. Additionally, I developed the random destination generator on the countries page, creating the generateRandomCountry() function and using a useEffect hook to pull destinations from the country cards API. This feature encourages users to discover new destinations to visit for their next vacation. I also worked closely with Melanie on the UI/UX design of our website.

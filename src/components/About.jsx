import React from 'react';

function About() {
    return (
        <div>
            <h1>About Marvel API Project</h1>
            <h2>This project is built using React and utilizes the Marvel API KEY to fetch data about various Marvel characters.</h2>

            <p>App.jsx: It is the entry point of the React application and to define the overall structure of the application.
                It sets up client-side routing using react-router-dom by wrapping the
                entire application in a Router component. It also includes the Navbar component to provide navigation
                links and defines routes for different pages using the Routes and Routecomponents.
                Overall, App.jsx orchestrates the routing and navigation logic of the application.</p>

            <p>Search.jsx : This file defines the Search component, which is responsible for fetching and displaying Marvel characters.
                It utilizes React Hooks useState and useEffect to manage state and perform side effects.
                The fetchCharacters function fetches Marvel characters based on a search term using the Marvel API.
                The useEffect hook is used to trigger the initial fetch when the component mounts.
                The handleSearch function is called when the search button is clicked, triggering a new fetch based on the entered search term.
                The fetched characters are displayed as cards in the UI, showing their thumbnail image, name, and description if available.
            </p>


            <p>Home.jsx:
                This file defines the Home component, which serves as the landing page of the application.
                It provides a brief introduction to the Marvel API project and displays a list of famous Marvel characters.
                Inline styles are applied to customize the appearance of the component, including font size, font weight.
            </p>

            <p>Navbar.jsx:
                This file defines the Navbar component, which contains navigation links for different pages.
                It utilizes the Link component from react-router-dom to create clickable links.
                Users can click on the links to navigate between the Home, About, and Search pages.</p>

            



        </div>
    );
}

export default About;

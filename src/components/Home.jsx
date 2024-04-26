import React from 'react';

function Home() {
    const headingStyle = {
        fontWeight: 'bold',
    };

    const listStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        listStyleType: 'none',
        padding: 0,
    };

    const listItemStyle = {
        marginRight: '20px',
    
        fontSize: '1.2em',
    };

    return (
        <div>
            <h2 style={headingStyle}>Welcome to Marvel API Project!</h2>
            <p>This is a project that utilizes the Marvel API Key to display information about Marvel characters. Search for your
                favorite Marvel characters and read details about them like</p>
            <ul style={listStyle}>
                <li style={listItemStyle}>Spider-Man</li>
                <li style={listItemStyle}>Captain America</li>
                <li style={listItemStyle}>Iron Man</li>
                <li style={listItemStyle}>Thor</li>
                <li style={listItemStyle}>Hulk</li>
                <li style={listItemStyle}>Black Widow</li>
                <li style={listItemStyle}>Wolverine</li>
                <li style={listItemStyle}>Doctor Strange</li>
                <li style={listItemStyle}>Black Panther</li>
                <li style={listItemStyle}>Captain Marvel</li>
            </ul>
            <p> Please note if you search Non Marvel Characters you ll get this "No Characters Found"</p>
        </div>
    );
}

export default Home;

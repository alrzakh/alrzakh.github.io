// This file contains the main JavaScript functionality for the website.
// You can add your custom scripts and functions below.

document.addEventListener('DOMContentLoaded', function() {
    // Your JavaScript code goes here
    console.log('Welcome to my personal website!');

    // Example function to handle a button click
    const button = document.getElementById('myButton');
    if (button) {
        button.addEventListener('click', function() {
            alert('Button clicked!');
        });
    }
});
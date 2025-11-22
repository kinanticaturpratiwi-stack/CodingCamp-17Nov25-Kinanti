welcomeMessage();

/// function to prompt user for their name and display a welcome message
function welcomeMessage() {
     /// prompt the user to enter their name
    let userName = prompt("Please enter your name");
    
    /// if the user did not enter a name, default to "Guest"
    if (userName === '' || userName === null) {
        userName ="Guest";
    }

    /// update the welcoome message on the webpage
        document.getElementById("welcome-speech").innerText ="Welcome, " + userName + "!" 
    }

    /// function to validate the message from (to be implemented)
    function validateForm() {

    }
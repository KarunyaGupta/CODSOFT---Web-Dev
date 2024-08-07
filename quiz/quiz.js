document.addEventListener('DOMContentLoaded', function () {
    // Check if the user is logged in
    const isLoggedIn = checkLoginStatus();

    // Load appropriate content based on login status
    if (isLoggedIn) {
        loadQuizContent();
    } else {
        loadLoginContent();
    }
});

function checkLoginStatus() {
    // Implement your user authentication logic here
    // For simplicity, this example uses a basic check
    return localStorage.getItem('isLoggedIn') === 'true';
}

function loadLoginContent() {
    const mainContainer = document.getElementById('main-container');
    mainContainer.innerHTML = `
        <header>
            <h1>Quiz Application</h1>
            <nav>
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="about.html">About Us</a></li>
                    <li><a href="contact.html">Contact Us</a></li>
                    <li><a href="help.html">Help Center</a></li>
                </ul>
            </nav>
        </header>
        <div id="login-container">
            <h2>Login</h2>
            <form id="login-form">
                <label for="username">Username:</label>
                <input type="text" id="username" name="username" required><br>
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" required><br>
                <button type="button" onclick="login()">Login</button>
            </form>
        </div>
    `;
}


function login() {
    // Implement your login logic here
    // For simplicity, this example sets a flag in localStorage
    localStorage.setItem('isLoggedIn', 'true');

    // Reload the page to load quiz content
    location.reload();
}

function loadQuizContent() {
    const mainContainer = document.getElementById('main-container');
    mainContainer.innerHTML = `
        <div id="quiz-container">
            <!-- Quiz content will be dynamically loaded here -->
        </div>
    `;

    // Implement the quiz logic (questions, answers, navigation) here
    // Use the previous example for reference
}



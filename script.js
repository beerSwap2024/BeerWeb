// Store scores for each beer in an object
let beerScores = {
    beer1: { taste: 0, creativity: 0 },
    beer2: { taste: 0, creativity: 0 },
    beer3: { taste: 0, creativity: 0 }
};

// Store total score
let totalScore = 0;

// Function to show password prompt for accessing the results
function showPasswordPrompt() {
    document.getElementById("passwordPrompt").style.display = "block";
}

// Function to check if the entered password is correct
function checkPassword() {
    const password = document.getElementById("passwordInput").value;
    const correctPassword = "beer123"; // Set the correct password here

    if (password === correctPassword) {
        document.getElementById("passwordPrompt").style.display = "none";
        displayResults();
    } else {
        document.getElementById("errorMessage").style.display = "block";
    }
}

// Function to submit scores for the selected beer
function submitScores() {
    const selectedBeer = document.getElementById("beerSelection").value;
    const tasteScore = parseInt(document.getElementById("tasteScore").value) || 0;
    const creativityScore = parseInt(document.getElementById("creativityScore").value) || 0;

    // Update the scores for the selected beer
    beerScores[selectedBeer].taste = tasteScore;
    beerScores[selectedBeer].creativity = creativityScore;

    // Clear input fields after submission
    document.getElementById("tasteScore").value = "";
    document.getElementById("creativityScore").value = "";

    alert("Scores submitted for " + selectedBeer);
}

// Function to display the results
function displayResults() {
    // Calculate total score by adding up all beer scores
    totalScore = 0;
    for (let beer in beerScores) {
        totalScore += beerScores[beer].taste + beerScores[beer].creativity;
    }

    // Display the individual beer scores
    const scoreList = document.getElementById("scoreList");
    scoreList.innerHTML = "";  // Clear previous list
    for (let beer in beerScores) {
        const li = document.createElement("li");
        li.textContent = `${beer}: Taste - ${beerScores[beer].taste}, Creativity - ${beerScores[beer].creativity}`;
        scoreList.appendChild(li);
    }

    // Display the total score
    document.getElementById("totalScore").textContent = totalScore;
    document.getElementById("resultSection").style.display = "block";
}

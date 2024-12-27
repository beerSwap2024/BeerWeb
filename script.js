// Store scores for each beer in an object
let beerScores = {
    beer1: { taste: 0, creativity: 0, total: 0 },
    beer2: { taste: 0, creativity: 0, total: 0 },
    beer3: { taste: 0, creativity: 0, total: 0 }
};

// Retrieve stored scores from localStorage if they exist
const storedScores = localStorage.getItem('beerScores');
if (storedScores) {
    beerScores = JSON.parse(storedScores);
}

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
    beerScores[selectedBeer].total = tasteScore + creativityScore; // Calculate total for the beer

    // Save the updated scores to localStorage
    localStorage.setItem('beerScores', JSON.stringify(beerScores));

    // Clear input fields after submission
    document.getElementById("tasteScore").value = "";
    document.getElementById("creativityScore").value = "";

    alert("Scores submitted for " + selectedBeer);
}

// Function to display the results (taste, creativity, and total points for each beer)
function displayResults() {
    // Display the scores for each beer
    const scoreList = document.getElementById("scoreList");
    scoreList.innerHTML = "";  // Clear previous list
    let grandTotal = 0;

    for (let beer in beerScores) {
        const li = document.createElement("li");
        li.innerHTML = `
            <strong>${beer}</strong><br>
            Taste Points: ${beerScores[beer].taste}<br>
            Creativity Points: ${beerScores[beer].creativity}<br>
            Total Points: ${beerScores[beer].total}<br><br>
        `;
        scoreList.appendChild(li);
        grandTotal += beerScores[beer].total;
    }

    // Display the total score
    document.getElementById("totalScore").textContent = grandTotal;
    document.getElementById("resultSection").style.display = "block";
}

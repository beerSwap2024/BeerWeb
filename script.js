// Function to show password prompt when the access button is clicked
function showPasswordPrompt() {
    document.getElementById("passwordPrompt").style.display = "block";
}

// Function to check the entered password
function checkPassword() {
    const password = document.getElementById("passwordInput").value;
    const correctPassword = "beer123"; // Set the correct password here

    if (password === correctPassword) {
        document.getElementById("passwordPrompt").style.display = "none";
        document.getElementById("scoreForm").style.display = "block";
    } else {
        document.getElementById("errorMessage").style.display = "block";
    }
}

// Function to calculate and display the total score
function calculateTotal() {
    const beer1Score = parseInt(document.getElementById("beer1").value) || 0;
    const beer2Score = parseInt(document.getElementById("beer2").value) || 0;

    const totalScore = beer1Score + beer2Score;

    document.getElementById("totalScore").innerText = totalScore;
}

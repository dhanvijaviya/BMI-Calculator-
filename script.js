// Function to calculate BMI
function bmiCalc(weight, height) {
    return Math.round(weight / (height * height));
}

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {

    // Get references to links, table, and left part text
    const matrixLink = document.getElementById('matrixLink');
    const chartLink = document.getElementById('chartLink');
    const bmiTable = document.getElementById('bmiTable');
    const introText = document.querySelector('.intro-text');
    const resultBox = document.getElementById('result');
    const introParagraph = document.getElementById("introParagraph");
    const bmiImage = document.getElementById("bmiImage"); // Reference to the BMI chart image

    // Click event listener for Matrix link
    matrixLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent link's default behavior

        bmiTable.style.display = 'table'; // Ensure the table with input fields is visible
        introText.style.display = 'block'; // Show the intro text
        resultBox.style.display = 'none'; // Hide the result box
        bmiImage.style.display = 'none'; // Hide the BMI chart image
    });

    // Click event listener for Chart link
    chartLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent link's default behavior

        // No need to hide the input fields
        introText.style.display = 'none'; // Hide the intro text
        resultBox.style.display = 'none'; // Hide the result box
        bmiImage.style.display = 'block'; // Show the BMI chart image
    });

    // BMI Calculation button click event
    document.getElementById("btn").addEventListener("click", function () {
        var weight = parseFloat(document.getElementById("weightInput").value);
        var height = parseFloat(document.getElementById("heightInput").value) / 100; // Convert height to meters

        // Validation: Check if inputs are valid
        if (isNaN(weight) || isNaN(height) || height === 0) {
            alert("Please enter valid weight and height.");
            return;
        }

        var bmi = bmiCalc(weight, height);
        
        // Hide the introductory paragraph with a fade-out effect
        introParagraph.style.opacity = "0"; // Fade out
        setTimeout(function() {
            introParagraph.style.display = "none"; // Hide after fade out
        }, 500);

        // Show BMI result
        resultBox.style.display = "block"; // Show result container
        resultBox.style.opacity = "1"; // Ensure it is visible
        
        // Prepare result text
        var resultText = "Your BMI is " + bmi + ". ";
        if (bmi < 18.5) {
            resultText += "You are Underweight.";
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            resultText += "You are in Normal weight. Keep Maintaining this.";
        } else if (bmi >= 25 && bmi <= 29.9) {
            resultText += "You are Overweight. Try to work out 2-3 days a week.";
        } else {
            resultText += "You are Obese. Try to work out 5-6 days a week.";
        }
        
        resultBox.innerHTML = resultText;
    });
});
    
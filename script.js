const dateInput = document.getElementById("date");

// Set today's date automatically
const today = new Date().toISOString().split("T")[0];
dateInput.value = today;

function checkLight() {
    const result = document.getElementById("result");

    const startDate = new Date("2026-01-02"); // Light ON reference
    const selectedDate = new Date(dateInput.value);

    const diffTime = selectedDate - startDate;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays % 2 === 0) {
        result.innerHTML = "💦 Yes, It's Water Day";
        result.style.color = "lime";
    } 
    
    else {
        result.innerHTML = "❌ Not a Water Day";
        result.style.color = "red";
    }
}

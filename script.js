// script.js
function generateRandom() {
    const min = parseInt(document.getElementById('min').value, 10);
    const max = parseInt(document.getElementById('max').value, 10);
    if (isNaN(min) || isNaN(max) || min > max) {
        document.getElementById('result').innerText = "Please enter a valid range.";
        return;
    const random = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById('result').innerText = "🎲 Random Number: 999 ";
}

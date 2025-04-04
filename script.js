let weekWins = [];
let weekLeaps = [];
let totalScore = 0;

const winList = document.getElementById('winList');
const leapList = document.getElementById('leapList');
const weekScoreEl = document.getElementById('weekScore');
const totalScoreEl = document.getElementById('totalScore');

function addWin() {
    const desc = document.getElementById('winDesc').value;
    const score = parseInt(document.getElementById('winScore').value);
    if (desc) {
        weekWins.push(score);
        const li = document.createElement('li');
        li.textContent = `${desc}: ${score}`;
        winList.appendChild(li);
        updateScores();
        document.getElementById('winDesc').value = ''; // Clear input
    }
}

function addLeap() {
    const desc = document.getElementById('leapDesc').value;
    const score = parseInt(document.getElementById('leapScore').value);
    if (desc) {
        weekLeaps.push(score);
        const li = document.createElement('li');
        li.textContent = `${desc}: ${score}`;
        leapList.appendChild(li);
        updateScores();
        document.getElementById('leapDesc').value = ''; // Clear input
    }
}

function updateScores() {
    const weekTotal = weekWins.reduce((a, b) => a + b, 0) + weekLeaps.reduce((a, b) => a + b, 0);
    weekScoreEl.textContent = weekTotal;
    totalScoreEl.textContent = totalScore + weekTotal;
}

function resetWeek() {
    totalScore += weekWins.reduce((a, b) => a + b, 0) + weekLeaps.reduce((a, b) => a + b, 0);
    weekWins = [];
    weekLeaps = [];
    winList.innerHTML = '';
    leapList.innerHTML = '';
    weekScoreEl.textContent = '0';
    totalScoreEl.textContent = totalScore;
}

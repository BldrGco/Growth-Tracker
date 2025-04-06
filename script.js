let weekWins = [];
let weekLeaps = [];
let totalScore = 0;

const winList = document.getElementById('winList');
const leapList = document.getElementById('leapList');
const weekScoreEl = document.getElementById('weekScore');
const totalScoreEl = document.getElementById('totalScore');
const dailyTotalEl = document.getElementById('dailyTotal');
const leapTotalEl = document.getElementById('leapTotal');
const weekTotalEl = document.getElementById('weekTotal');

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
    const dailyTotal = weekWins.reduce((a, b) => a + b, 0);
    const leapTotal = weekLeaps.reduce((a, b) => a + b, 0);
    const weekTotal = dailyTotal + leapTotal;

    weekScoreEl.textContent = weekTotal;
    totalScoreEl.textContent = totalScore + weekTotal;
    dailyTotalEl.textContent = dailyTotal;
    leapTotalEl.textContent = leapTotal;
    weekTotalEl.textContent = weekTotal;
}

function resetWeek() {
    totalScore += weekWins.reduce((a, b) => a + b, 0) + weekLeaps.reduce((a, b) => a + b, 0);
    weekWins = [];
    weekLeaps = [];
    winList.innerHTML = '';
    leapList.innerHTML = '';
    weekScoreEl.textContent = '0';
    totalScoreEl.textContent = totalScore;
    dailyTotalEl.textContent = '0';
    leapTotalEl.textContent = '0';
    weekTotalEl.textContent = '0';
}

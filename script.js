// Virtuous Cycle Map
const cycleCanvas = document.getElementById('cycleMap');
const cycleCtx = cycleCanvas.getContext('2d');
function drawCycle() {
    cycleCtx.clearRect(0, 0, cycleCanvas.width, cycleCanvas.height);
    cycleCtx.beginPath();
    cycleCtx.arc(200, 200, 150, 0, Math.PI * 2); // Outer circle
    cycleCtx.stroke();
    cycleCtx.fillText("Mindset Reinforcement", 180, 200); // Placeholder
}
drawCycle();

// Compound Growth Tracking
const growthChartCtx = document.getElementById('growthChart').getContext('2d');
let growthData = [];
const growthChart = new Chart(growthChartCtx, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{ label: 'Growth', data: [], borderColor: 'blue', fill: false }]
    }
});
function addGrowth() {
    const value = parseFloat(document.getElementById('growthInput').value);
    if (!isNaN(value)) {
        growthData.push(value);
        growthChart.data.labels.push(growthData.length);
        growthChart.data.datasets[0].data = growthData;
        growthChart.update();
    }
}

// Threshold Identification
const thresholdList = document.getElementById('thresholdList');
function addThreshold() {
    const desc = document.getElementById('thresholdDesc').value;
    const value = parseFloat(document.getElementById('thresholdValue').value);
    if (desc && !isNaN(value)) {
        const li = document.createElement('li');
        li.textContent = `${desc}: ${value}`;
        thresholdList.appendChild(li);
        checkThresholds(value);
    }
}
function checkThresholds(currentValue) {
    const thresholds = Array.from(thresholdList.children).map(li => parseFloat(li.textContent.split(': ')[1]));
    thresholds.forEach(t => {
        if (currentValue >= t) console.log(`Threshold ${t} crossed!`); // Replace with alert/notification
    });
}

// Integration Assessment
const radarChartCtx = document.getElementById('radarChart').getContext('2d');
const radarChart = new Chart(radarChartCtx, {
    type: 'radar',
    data: {
        labels: ['Mindset 1', 'Mindset 2', 'Mindset 3'],
        datasets: [{ label: 'Automaticity', data: [0, 0, 0], backgroundColor: 'rgba(0, 255, 0, 0.2)' }]
    }
});
function updateRadar() {
    const form = document.getElementById('assessmentForm');
    const data = [
        parseInt(form.m1.value) || 0,
        parseInt(form.m2.value) || 0,
        parseInt(form.m3.value) || 0
    ];
    radarChart.data.datasets[0].data = data;
    radarChart.update();
}

// Virtuous Cycle Map
const cycleCanvas = document.getElementById('cycleMap').getContext('2d');
function drawCycle() {
    cycleCanvas.fillStyle = '#3498db';
    cycleCanvas.beginPath();
    cycleCanvas.arc(150, 150, 120, 0, Math.PI * 2);
    cycleCanvas.fill();
    cycleCanvas.fillStyle = 'white';
    cycleCanvas.font = '16px Arial';
    cycleCanvas.textAlign = 'center';
    cycleCanvas.fillText('Mindset Cycle', 150, 150);
}
drawCycle();

// Compound Growth Tracking
const growthChartCtx = document.getElementById('growthChart').getContext('2d');
let growthData = [];
const growthChart = new Chart(growthChartCtx, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: 'Growth',
            data: [],
            borderColor: '#e74c3c',
            backgroundColor: 'rgba(231, 76, 60, 0.2)',
            fill: true
        }]
    },
    options: { scales: { y: { beginAtZero: true } } }
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
        if (currentValue >= t) {
            alert(`Woohoo! You’ve hit the ${t} threshold!`);
        }
    });
}

// Integration Assessment
const radarChartCtx = document.getElementById('radarChart').getContext('2d');
const radarChart = new Chart(radarChartCtx, {
    type: 'radar',
    data: {
        labels: ['Mindset 1', 'Mindset 2', 'Mindset 3'],
        datasets: [{
            label: 'Integration',
            data: [0, 0, 0],
            backgroundColor: 'rgba(46, 204, 113, 0.3)',
            borderColor: '#2ecc71'
        }]
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

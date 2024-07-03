// scripts.js

function updateTime() {
    const now = new Date();
    const utcTime = now.toUTCString();
    const dayOfWeek = now.toLocaleDateString('en-US', { weekday: 'long' });

    document.getElementById('currentTimeUTC').innerText = `Current Time (UTC): ${utcTime}`;
    document.getElementById('currentDay').innerText = `Current Day: ${dayOfWeek}`;
}

// Update time every second
setInterval(updateTime, 1000);
updateTime();

document.addEventListener("DOMContentLoaded", function() {
    const locationStatus = document.getElementById('location-status');
    const mapElement = document.getElementById('map');
    let coordinatesList = [];
    let ipAddresses = [];

    // Generate 100 random latitude, longitude, and IP addresses
    function generateLocations() {
        for (let i = 0; i < 100; i++) {
            let lat = (Math.random() * 180 - 90).toFixed(4);  // Random latitude between -90 and 90
            let lon = (Math.random() * 360 - 180).toFixed(4); // Random longitude between -180 and 180
            let ip = `192.168.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`; // Mock IP Address
            coordinatesList.push({ lat: lat, lon: lon });
            ipAddresses.push(ip);
        }
    }

    // Start location tracking and update every 5 seconds
    let currentIndex = 0;
    function trackLocation() {
        setInterval(() => {
            if (currentIndex < coordinatesList.length) {
                let coords = coordinatesList[currentIndex];
                let ip = ipAddresses[currentIndex];
                updateMap(coords, ip);
                currentIndex++;
            } else {
                currentIndex = 0; // Reset index to loop through again
            }
        }, 5000); // 5 seconds interval
    }

    function updateMap(coords, ip) {
        mapElement.innerHTML = `<p style="color: #33ff33">Lat: ${coords.lat}, Lon: ${coords.lon}</p>`;
        locationStatus.innerHTML = `Dhaksha's Last Known Location: Lat ${coords.lat}, Lon ${coords.lon} | IP: ${ip}`;
    }

    // Call functions to generate locations and start tracking
    generateLocations();
    trackLocation();

    // Typewriter effect for the villain's details (as before)
    const villainNameText = "";
    const villainDetailsText = " ";
    const villainNameElement = document.getElementById('villain-name');
    const villainDetailsElement = document.getElementById('villain-details');

    let typingSpeed = 100;

    function typeWriter(element, text, index, callback) {
        if (index < text.length) {
            element.innerHTML += text.charAt(index);
            setTimeout(() => {
                typeWriter(element, text, index + 1, callback);
            }, typingSpeed);
        } else if (callback) {
            setTimeout(callback, 500); // Delay before typing the next text
        }
    }

    typeWriter(villainNameElement, villainNameText, 0, () => {
        typeWriter(villainDetailsElement, villainDetailsText, 0);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    let progress = 0;
    const progressBar = document.getElementById('progress-bar');
    const loadingText = document.getElementById('loading-text');

    const loadingInterval = setInterval(() => {
        if (progress < 100) {
            progress += 1;
            progressBar.style.width = progress + "%";
            
            // Update loading text based on progress percentage
            if (progress <= 10) {
                loadingText.innerHTML = progress + "% - Loading data...";
            } else if (progress > 10 && progress <= 30) {
                loadingText.innerHTML = progress + "% - Connecting to the server...";
            } else if (progress > 30 && progress <= 80) {
                loadingText.innerHTML = progress + "% - Fetching data...";
            } else if (progress > 80 && progress <= 100) {
                loadingText.innerHTML = progress + "% - Data fetched.";
            }

        } else {
            clearInterval(loadingInterval);
            // Redirect to another page after loading completes
            window.location.href = "main.html";
        }
    }, 50); // Adjust the speed of loading (50ms for a faster effect)
});

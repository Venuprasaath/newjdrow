document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission
    const userId = document.getElementById("userId").value;
    const password = document.getElementById("password").value;

    // Hacking-style text animation
    const hackerText = document.getElementById("hacker-text");
    hackerText.innerHTML = "";
    let fakeProcess = ["Accessing system files...", "Decrypting data...", "Bypassing security protocols...", "Access Granted"];
    let i = 0;

    const interval = setInterval(() => {
        if (i < fakeProcess.length) {
            hackerText.innerHTML += fakeProcess[i] + "\n";
            i++;
        } else {
            clearInterval(interval);
            validateLogin(userId, password);
        }
    }, 1000);
});

function validateLogin(userId, password) {
    // Hardcoded User ID and Password (You can replace this with your own logic)
    const validUserId = "ramya@hackzone";
    const validPassword = "rm2525";

    if (userId === validUserId && password === validPassword) {
        window.location.href = "dashbord.html"; // Redirect to another page
    } else {
        alert("Invalid credentials. Please try again.");
    }
}

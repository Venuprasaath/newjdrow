document.addEventListener('DOMContentLoaded', function() {
    // Detect when mouse enters or leaves the body
    document.body.addEventListener('mouseenter', function() {
        document.body.style.cursor = 'url("custom-cursor.png"), crosshair';
    });

    document.body.addEventListener('mouseleave', function() {
        document.body.style.cursor = 'default';
    });
});

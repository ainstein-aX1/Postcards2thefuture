$(document).ready(function() {
    // Function to open pop-up
    $('.gallery img').click(function() {
        $('#popup').css('display', 'block');
    });

    // Function to close pop-up
    $('.close').click(function() {
        $('#popup').css('display', 'none');
    });

    // Function to handle form submission
    $('#postcard-form').submit(function(event) {
        event.preventDefault();
        // Send form data via AJAX
        // Display success message
        $('.popup-message').text('Thank you! Your message was sent successfully!');
    });
});

// Add event listener to gallery images
var galleryImages = document.querySelectorAll('.grid-item img');
galleryImages.forEach(function(image) {
    image.addEventListener('click', function() {
        var imageUrl = image.dataset.url;
        document.getElementById('attachment').value = imageUrl;
    });
});

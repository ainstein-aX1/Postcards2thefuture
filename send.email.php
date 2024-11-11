<?php
// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $fullname = $_POST["fullname"];
    $subject = $_POST["subject"];
    $email = $_POST["email"];
    $recipient_email = $_POST["recipient_email"];
    $encapsulated_time = $_POST["encapsulated_time"];
    $message = $_POST["message"];

    // Send email to recipient's email
    $to = $recipient_email;
    $subject = $subject;
    $message_body = "From: $fullname\n\nSubject: $subject\n\nEmail: $email\n\nMessage: $message";
    $headers = "From: $email";

    // Set the encapsulated time for sending the email
    // $encapsulated_time should be in the format yyyy-mm-dd
    $send_date = strtotime($encapsulated_time);
    $now = time();
    $time_diff = $send_date - $now;

    // If encapsulated time is in the future, schedule the email
    if ($time_diff > 0) {
        // Sleep until the encapsulated time
        sleep($time_diff);

        // Send the email
        mail($to, $subject, $message_body, $headers);
    }

    // Return success message
    echo "Message sent successfully!";
} else {
    // If form is not submitted, redirect to homepage
    header("Location: index.html");
    exit();
}
?>
// Get attachment details
$attachment_url = $_POST['attachment_url'];

// Add attachment to email
if (!empty($attachment_url)) {
    $file = $attachment_url;
    // Rest of the attachment handling code...
}

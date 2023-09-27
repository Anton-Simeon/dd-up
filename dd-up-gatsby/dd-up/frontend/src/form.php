<?php
header('Content-Type: text/html; charset=utf-8');

// Get the JSON data from the POST request and decode it
$data = json_decode(file_get_contents("php://input"), true);

// Check if the JSON decoding was successful
if ($data === null) {
    echo "Invalid JSON data";
} else {
    // Retrieve and sanitize the data
    $name = trim(htmlspecialchars($data['name']));
    $company = trim(htmlspecialchars($data['company']));
    $email = trim(htmlspecialchars($data['email']));
    $project_name = trim(htmlspecialchars($data['project_name']));
    $description = trim(htmlspecialchars($data['description']));



    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email address";
    } else {
        // Construct the email content
        $html = "Name: " . $name . "\r\nCompany: " . $company . "\r\nEmail: " . $email . "\r\nProject Name: " . $project_name . "\r\nDescription: " . $description;

        // Send the email
        if (mail("antonsimeonvolodymyr@gmail.com", "Contact Form", $html, "From: contact@ddup.at \r\n")) {
            echo "done";
        } else {
            echo "error";
        }
    }
}
?>
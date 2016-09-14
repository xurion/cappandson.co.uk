<?php
$to = 'enquiries@cappandson.co.uk';
$subject = 'Website enquiry';
$message = $_POST['name'] . ' ' . $_POST['email'] . ' ' . $_POST['phone'] . ' ' . $_POST['enquiry'];
$headers = 'From: ' . $_POST['email'] . "\r\n" .
    'Reply-To: ' . $_POST['email'];

mail($to, $subject, $message, $headers);

header('location: ' . $_SERVER['HTTP_REFERER'] . '#?sent=1');

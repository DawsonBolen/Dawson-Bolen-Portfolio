<?php

$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$mailheader = "From:".$name."<".$email.">\r\n";

$recipient = "dawson120@live.com";

mail($recipient, $subject, $message, $mailheader)
or die("Error!");

echo'
<!DOCTYPE html>
<html>
<head>
<title>Contact Message</title>
<meta charset="UTF-8" />
<link rel="stylesheet" href="assets/css/style.css" />
</head>
<body>
    <div class="containerd">
        <h1>Thank you for contacting me. I will get back to you as soon as I can.</h1>
        <p class="goback">Click Here to go back to the <a href="index.html">Homepage</a></p>
        
    </div>
</body>
</html>
';


?>
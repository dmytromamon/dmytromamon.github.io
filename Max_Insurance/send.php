<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
$name = $_REQUEST['name'];
$email = $_REQUEST['mail'];
$phone = $_REQUEST['phone'];
$message = $_REQUEST['message'];
$formData = $_REQUEST['formData'];
    
    if (isset($_POST['phone'])) {$mail = $_POST['phone'];}
    if (isset($_POST['name'])) {$mail = $_POST['name'];}
 
    $to = "info@maxinsurance.ca"; /*your email*/
    $sendfrom   = $email; /*user email*/
    $headers  = "From: " . strip_tags($sendfrom) . "\r\n";
    $headers .= "Reply-To: ". strip_tags($sendfrom) . "\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html;charset=utf-8 \r\n";
    $subject = "$formData";
    $message = "$formData <br>
<b>Name:</b> $name <br>
<b>Phone:</b> $phone <br>
<b>Email:</b> $email <br>
<p> $message </p>";
    $send = mail ($to, $subject, $message, $headers);
    if ($send == 'true')
    {
    echo '<center>
 
<h1 style="padding-top: 45px">We`ll be in touch soon :-)</h1>
<p style="padding-top: 40px">Your message is being reviewed by one of our Claims professionals. Rest assured you will hear from us shortly.</p>
 
</center>';
    }
    else
    {
    echo '<center>
 
<b>Error!</b>
 
</center>';
    }
} else {
    http_response_code(403);
    echo "Please try again!";
}?>
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
$firstName = $_REQUEST['firstName'];
$lastName = $_REQUEST['lastName'];
$email = $_REQUEST['email'];
$text = $_REQUEST['message'];
$checkbox = $_REQUEST['checkbox'];

    if (isset($_POST['email'])) {$mail = $_POST['email'];}

    $to = "support@certree.com"; /*your email*/
    $sendfrom   = $email; /*user email*/
    $headers  = "From: " . strip_tags($sendfrom) . "\r\n";
    $headers .= "Reply-To: ". strip_tags($sendfrom) . "\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html;charset=utf-8 \r\n";
    $subject = "Form from andyedge.com";
    $message = "Hello Certree manager, you have new message: <br>
    $firstName $lastName: $message. <br>
    Their email is $email. <br>
    Their also $checkbox to the mail list.";
    $send = mail ($to, $subject, $message, $headers);
    if ($send == 'true')
    {
    echo '<h5>Thank you, ' + $firstName + '</h5>
            <p>Your message was sent to our Team. You should receive a reply from a representative of our web site by the end of the next business day by email at ' + $email + '.</p>
            <p>Certree Team</p>
            <div class="text-center">
              <a class="btn" id="return-form">
                <img src="img/icon/angle-right.svg" alt="">
                Send an other message
              </a>
            </div>';
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

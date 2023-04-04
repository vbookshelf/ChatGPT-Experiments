<?php

// When the user clicks the submit button in the form
// the page will reload. Each time the page loads, this
// code will run. It checks if the 'name' and 'email' exist.
// If these variables exist then 'Hello' will be printed
// at the top of the page.

// This if statement can also be put in a separate file and
// that file can be included here. When you include the file it's as if
// the code from that file is typed here.

if (isset($_POST["name"], $_POST["email"])) {
	
	$user_name = $_POST["name"];
	$user_email = $_POST["email"];
	
	$message_welcome = 'Welcome ' . $user_name . "!";
	$message_email = 'Your email address is: ' . $user_email;
	
}

?>



<!DOCTYPE HTML>
<html>  
<body>

<form method="post">
	Name: <input type="text" name="name"><br>
	E-mail: <input type="text" name="email"><br>
	<input type="submit">
</form>

<br>

<!-- [ 1 ] This is how to include php echo in html -->

<h3>Welcome <?php echo $user_name; ?></h3>
<h3>Your email address is: <?php echo $user_email; ?></h3>

<br>


<?
// [ 2 ] This is how to create the message using message variables.

echo $message_welcome;
echo '<br>';
echo $message_email;

?>


</body>
</html>
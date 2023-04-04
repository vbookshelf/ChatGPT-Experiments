<?php

// When the user clicks the submit button in the form
// the page will reload. Each time the page loads, this
// code will run. It checks if the 'name' and 'email' exist.
// If these variables exist then 'Hello' will be printed
// at the top of the page.

if (isset($_POST["name"], $_POST["email"])) {
	
	echo 'Hello';
	
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

</body>
</html>
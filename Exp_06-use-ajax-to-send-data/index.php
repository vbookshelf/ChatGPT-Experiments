
<!DOCTYPE HTML>
<html>  
<body>

<form id="myForm" action="chatgpt-api-code.php" method="post">
my_message: <input type="text" name="my_message"><br>
<input type="submit">
</form>

<!-- The Ajax response gets displayed in this div -->
<div id="ajax-response">
	The response from chatgpt will be displayed here.
</div>

</body>
</html>

<script>
	
var form = document.getElementById('myForm');

form.onsubmit = function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the form data
  var formData = new FormData(form);
  
  //console.log(formdata);

  // Send an AJAX request to the server to process the form data
  var xhr = new XMLHttpRequest();
  xhr.open('POST', form.action, true);
  
  xhr.onload = function() {
    if (xhr.status === 200) {
      var response = JSON.parse(xhr.responseText);
	  
	  // Write the message into a div that has the id ajax-response
	  document.getElementById("ajax-response").innerHTML = response.message;
	  
	  // Write the response on the console
      console.log(response.message);
    }
  };
  
  xhr.send(formData);
};

</script>



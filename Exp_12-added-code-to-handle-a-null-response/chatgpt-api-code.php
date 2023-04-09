<?php
session_start();

// Check if the list exists in the session
// If the list does not exist, create an empty array
if (!isset($_SESSION['message_history'])) {
	
	// Create a messages list
	$_SESSION['message_history'] = array();
	$messages = $_SESSION['message_history'];
	$temperature = 0.5;
	
	$system_setup_message = "You are a whimsical female solo traveler who speaks english and spanish. You are sitting in a cafe in Valencia. Your name is Maiya. Keep your respnses short.";
	
	
	
	
	// Append the system role to the messages list.
	// This will included in every message that get's submitted
	$messages[] = array("role" => "system", "content" => $system_setup_message);
	
  	
} else {
	
	// Assign the session variable to $messages
	$messages = $_SESSION['message_history'];
	
}


// This function cleans and secures the user input
function test_input(&$data) {
		$data = trim($data);
		$data = stripslashes($data);
		$data = strip_tags($data);
		$data = htmlentities($data);
		
		return $data;
	}



// Setup
//-------
	
$apiKey = 'your-api-key';
$url = 'https://api.openai.com/v1/chat/completions';
$maxTokens = 1000;
$modelType = "gpt-3.5-turbo";

	

// This code is triggered when the user submits a message
//--------------------------------------------------------

if (isset($_REQUEST["my_message"]) && empty($_REQUEST["robotblock"])) {
	
	$my_message = $_REQUEST["my_message"];
	
	// Clean and secure the user's text input
	$my_message = test_input($my_message);

	$headers = array(
	    "Authorization: Bearer {$apiKey}",
	    "Content-Type: application/json"
	);
	
	
	// Append the user's message to the messages list.
	// Remember that system role is already in the messages list.
	$messages[] = array("role" => "user", "content" => $my_message);
	
	// Define data
	$data = array();
	$data["model"] = $modelType;
	$data["messages"] = $messages;
	$data["max_tokens"] = $maxTokens;
	
	$data["temperature"] = $temperature;
	
	
	// init curl
	$curl = curl_init($url);
	curl_setopt($curl, CURLOPT_POST, 1);
	curl_setopt($curl, CURLOPT_POSTFIELDS, json_encode($data));
	curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);
	curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
	
	$result = curl_exec($curl);
	
	if (curl_errno($curl)) {
	    echo 'Error:' . curl_error($curl);
	} else {
		
	    $generatedText = json_decode($result, true);
		//echo $generatedText;
		//print_r($generatedText['choices'][0]['message']['content']);
		
		//$a = 0;
		//if ($a != 0) {
		
		if (isset($generatedText['choices'][0]['message']['content'])) {
		
			$message = $generatedText['choices'][0]['message']['content'];
			
			
			// Append the response message to the session list
			// This will save the response 
			$_SESSION['message_history'][] = array("role" => "assistant", "content" => $message);
			
			// Display a message on the page
			$response = array('success' => true, 'chat_text' => $message);
		  	echo json_encode($response);
		
		} else {
			
			// When the max tokens is exceeded that API returns a null response.
			// The system on the OpenAi side also freezes.
			
			// Get the finish reason
			$finish_reason = $generatedText['choices'][0]['finish_reason'];
			
			
			
			$message = "Status: " . $finish_reason . "<br>Admin: If the status is blank (null) it means that the token count has been exceeded. Please close this browser tab to clear the chat memory. Then start a new chat.";
			
			
			// Display a message on the page
			$response = array('success' => false, 'chat_text' => $message);
		  	echo json_encode($response);
		}
		
		
		
	}
	
	curl_close($curl);
	
}

?>
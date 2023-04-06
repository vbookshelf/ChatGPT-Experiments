<?php

// This function cleans and secures the user input
function test_input(&$data) {
		$data = trim($data);
		$data = stripslashes($data);
		$data = strip_tags($data);
		$data = htmlentities($data);
		
		return $data;
	}
	



// This code communicates with the OpenAi API
	
$apiKey = 'your-api-key';
$url = 'https://api.openai.com/v1/chat/completions';

if (isset($_REQUEST["my_message"]) && empty($_REQUEST["robotblock"])) {
	
	$my_message = $_REQUEST["my_message"];
	
	// Clean the user's text input
	$my_message = test_input($my_message);
	

	$headers = array(
	    "Authorization: Bearer {$apiKey}",
	    "Content-Type: application/json"
	);
	
	// Define messages
	$messages = array();
	$messages[] = array("role" => "user", "content" => $my_message);
	
	// Define data
	$data = array();
	$data["model"] = "gpt-3.5-turbo";
	$data["messages"] = $messages;
	$data["max_tokens"] = 500;
	
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
		
		$message = $generatedText['choices'][0]['message']['content'];
		
		
		// Return a success response
		$response = array('success' => true, 'chat_text' => $message);
	  	echo json_encode($response);
		
		
	}
	
	curl_close($curl);
	
}

?>
<?php
$apiKey = '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';
$url = 'https://api.openai.com/v1/chat/completions';

if (isset($_REQUEST["my_message"])) {
	
	$my_message = $_REQUEST["my_message"];

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
	$data["max_tokens"] = 50;
	
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
		$response = array('success' => true, 'message' => $message);
	  	echo json_encode($response);
		
		
	}
	
	curl_close($curl);
	
}

?>
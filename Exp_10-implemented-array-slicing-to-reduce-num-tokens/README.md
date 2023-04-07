## Exp_10 - Implemented array slicing to reduce the number of tokens
<br>

### Objective

- Include php code to slice the message array.
- Choose the first 5 items. Choose the last 4 items. Join the arrays.
- This will reduce the number of messages that are sent in the request.

```
	// Create the "system" role
	$system_setup_message = "You are a chat companion for the elderly, named Maiya.
  You are chatting with a 65 year old man named Jack. Jack is a retired radiologist. His wife passed away recently.";
	
	// Append the system role to the messages list.
	// This will included in every message that get's submitted
	$messages[] = array("role" => "system", "content" => $system_setup_message);

```


### Notes
- Not sure if reducing the number of messages will reduce the quality of the chat.
- Sometimes the bot is brilliant at counseling. Sometimes it recommends connecting with local therapists.

### References

- Chat completions<br>
https://platform.openai.com/docs/guides/chat/introduction

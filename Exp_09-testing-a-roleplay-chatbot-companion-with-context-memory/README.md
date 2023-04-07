## Exp_09 - Create a roleplay chatbot companion with context memory
<br>

### Objective

- Add context memory code in php
- Test the chatbot in a roleplay scenario
- Roleplay is a task that requires end to end context awareness i.e. memory of the entire conversation

```
// Create the "system" role
	$system_setup_message = "You are a roleplay chat companion, named Maiya.";
	
	// Append the system role to the messages list.
	// This will included in every message that get's submitted
	$messages[] = array("role" => "system", "content" => $system_setup_message);

```


### Notes
- The chat data is stored in a php session variable.
- The chatbot emulates the character of Dracula.
- The chat transcript is available in this folder.
- The bot clearly undertood when it was in a roleplay scenario and when it wasn't.
- The results are brilliant.

### References

- Chat completions<br>
https://platform.openai.com/docs/guides/chat/introduction

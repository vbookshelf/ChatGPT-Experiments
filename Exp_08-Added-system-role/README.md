## Exp_08 - Added a system role
<br>

### Objective

- Add a system role
- In the system content tell the app what it's purpose is and who it's talking to.

```
// Create the "system" role
$system_setup_message = "You are a chat companion for the elderly, named Maiya. 
You are chatting with a man named Jack. Jack is 65 years old. He is a retired radiologist. 
Jack's wife passed away two months ago. He has been depressed since her death.";

// Append the system role to the messages list.
// This will included in every message that get's submitted
$messages[] = array("role" => "system", "content" => $system_setup_message);

```


### Notes
- This version app does not have memory.
- Added php code to clean and secure the user text input
- Updated the website design

### References

- Chat completions<br>
https://platform.openai.com/docs/guides/chat/introduction

## Exp_27 - Ziggy PHP Voicebot with better error handling
<br>

### Objective

- If the API returns an error dict, then print the error message on the screen.

### Notes
The API can return:<br>
1- A dict containing the reponse message or<br>
2- A different dict containing the error message.<br>

An error can happen when:<br>
1. The API is overloaded with requests. <br>
(The user should simply send the message again.)<br>
2. The context length has been exceeded.<br>

If the response dict from OpenAI conains a key called 'error" then we know something went wrong.

<br>

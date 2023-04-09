## Exp_12 - Added php code to handle a null response
<br>

### Objective

- When the token count is exceeded the OpenAi API returns a null response. And it appears that the chat freezes on the OpenAi side.
- Added code to handle the null respnse. The code tells the user to close the existing tab and to start a new chat. <br>
Closing the tab deletes the session variable thereby deleting the chat memory.

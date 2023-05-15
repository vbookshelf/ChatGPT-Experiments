## Exp_26 - Ziggy PHP Voicebot
<br>

### Objective

- Create a voicebot using PHP.
- Includes Javascript speech-to-text and text-to-speech
- Does not include code for saving a chat and then reloading it.

### Notes
- Finally solved the problem where the bot was hearing itself speak and responding.
- The key was to add and remove the event listener that restarts the mic when the end event is detected.<br>
The problem was caused by this event listener restarting while the bot was still talking.<br>
Needed the use the utterance onend event as part of the solution.<br>

<br>

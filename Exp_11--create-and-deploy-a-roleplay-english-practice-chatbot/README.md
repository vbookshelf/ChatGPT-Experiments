## Exp_11 - Create and deploy a roleplay english practice chatbot
<br>

### Objective

- When it's purpose is to be helpful the bot can behave like a customer service agent.<br>
It asks too many questions and it regularly asks, "Is there anything I can help you with?"
- To get the bot to speak naturally, I created a roleplay context. 
- The goal is to create a bot that Spanish speakers can use to practice english.

```
$temperature = 0.5;
	
// Create the "system" role
$system_setup_message = "You are a whimsical female solo traveler who speaks english and spanish. 
You are sitting in a cafe in Valencia. Your name is Maya. Keep your respnses short.";

```


### Notes
- The bot has context memory.
- The chatbot roleplays the character of a female solo female traveller sitting in a cafe in valencia Spain. 
- Valencia provides a context (and conversation topics) for the english practice conversation.
- The results are brilliant.
- The chat transcript is available in this repo.
- This is a gamified approach to language learning. It's like the movie "Live, Die, Repeat".<br>
The context is fixed but there are many possible variations to the story within that context.
- This is designed to be a language learning tool, but one possibility is that user's will forget the language learning apect and simply approach this as a roleplay game.
- The app freezes when the token count is exceeded.

### References

- Chat completions<br>
https://platform.openai.com/docs/guides/chat/introduction

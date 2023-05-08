# Maiya ChatGPT Experiments
My experiments with creating and deploying a ChatGPT bot named Maiya.<br>
This project is in progress...

<br>
<img src="https://github.com/vbookshelf/Maiya-ChatGPT-Experiments/blob/main/images/teacher1.png" width="250"></img>
<i>Maiya</i><br>

<br>

<br>

## Experiments

- Exp_01 - Create a simple working python command line chatgpt chatbot<br>
https://github.com/vbookshelf/ChatGPT-Experiments/tree/main/Exp_01-simple-python-chatgpt

- Exp_02 - Review a simple method to work with a form using php<br>
https://github.com/vbookshelf/ChatGPT-Experiments/tree/main/Exp_02-simple-php-form-output-to-new-page

- Exp_03 - Process php form input on the same page as the form<br>
https://github.com/vbookshelf/ChatGPT-Experiments/tree/main/Exp_03-process-php-form-input-on-same-page

- Exp_04 - Review two simple methods to print form input on the same page as the form<br>
https://github.com/vbookshelf/ChatGPT-Experiments/tree/main/Exp_04-echo-form-input-on-same-page

- Exp_05 - Create a simple php chatgpt chatbot and deploy it on a shared server<br>
https://github.com/vbookshelf/ChatGPT-Experiments/tree/main/Exp_05-simple-php-chatgpt-chatbot-deployed-on-shared-server

- Exp_06 - Use Ajax to send and receive data<br>
(Good simple Ajax example)<br>
https://github.com/vbookshelf/Maiya-ChatGPT-Experiments/tree/main/Exp_06-use-ajax-to-send-data

- Exp_07 - Create and deploy a working chat application<br>
https://github.com/vbookshelf/Maiya-ChatGPT-Experiments/tree/main/Exp_07-create-and-deploy-a%20working-chat-application

- Exp_08 - Added system role<br>
https://github.com/vbookshelf/Maiya-ChatGPT-Experiments/tree/main/Exp_08-Added-system-role

- Exp_09 - Create a roleplay chatbot companion with context memory<br>
(The chatbot emulates the character of Dracula. The chat transcript is available.)<br>
https://github.com/vbookshelf/Maiya-ChatGPT-Experiments/tree/main/Exp_09-testing-a-roleplay-chatbot-companion-with-context-memory

- Exp_10 - Implemented array slicing to reduce the number of tokens<br>
https://github.com/vbookshelf/Maiya-ChatGPT-Experiments/tree/main/Exp_10-implemented-array-slicing-to-reduce-num-tokens

- Exp_11 - Create and deploy a roleplay english practice chatbot<br>
(This is a fully functional chat web app. The chat transcript is available.)<br>
https://github.com/vbookshelf/Maiya-ChatGPT-Experiments/tree/main/Exp_11--create-and-deploy-a-roleplay-english-practice-chatbot

- Exp_12 - Added php code to handle a null response<br>
https://github.com/vbookshelf/Maiya-ChatGPT-Experiments/tree/main/Exp_12-added-code-to-handle-a-null-response

- Exp_13 - Demo of ChatGPT providing wrong facts in a confident tone<br>
The chat transcript is available in the folder.<br>
https://github.com/vbookshelf/Maiya-ChatGPT-Experiments/tree/main/Exp_13-chatgpt-wrong-facts-with-a-confident-tone

- Exp_14 - A simple javascript API call<br>
https://github.com/vbookshelf/Maiya-ChatGPT-Experiments/tree/main/Exp_14-Simple-Javascript-api-call

- Exp_15 - A fully functional Javascript API chatbot<br>
https://github.com/vbookshelf/Maiya-ChatGPT-Experiments/tree/main/Exp_15-Fully-functional-javascript-api-chatbot

- Exp_16 - Test secret superhero system message compliance<br>
https://github.com/vbookshelf/Maiya-ChatGPT-Experiments/tree/main/Exp_16-secret-superhero-system-message-setup

- Exp_17 - Implemented saving and reloading of chat history in Javascript<br>
https://github.com/vbookshelf/Maiya-ChatGPT-Experiments/tree/main/Exp_17-saving-and-reloading-chat-history

- Exp_18 - Capt Jack Sparrow emulator chatbot<br>
https://github.com/vbookshelf/Maiya-ChatGPT-Experiments/tree/main/Exp_18-capt-jack-sparrow-emulator

- Exp_19 - Simple OpenAI API request using the python requests package<br>
https://github.com/vbookshelf/Maiya-ChatGPT-Experiments/tree/main/Exp_19-simple-openai-api-request-using-python-requests-package

- Exp_20 - Pizzabot: Automated service to order pizza<br>
https://github.com/vbookshelf/Maiya-ChatGPT-Experiments/blob/main/Exp_20-pizza-bot/README.md

- Exp_21 - Barbarabot: Christian evangelist chatbot<br>
https://github.com/vbookshelf/Maiya-ChatGPT-Experiments/tree/main/Exp_21-christian-evangelist-chatbot

- Exp_22 - Flask app with text to speech<br>
https://github.com/vbookshelf/Maiya-ChatGPT-Experiments/tree/main/Exp_22-Flask-with-text-to-sppech

- Exp_23 - Speech to text with javascript SpeechRecognition<br>
https://github.com/vbookshelf/Maiya-ChatGPT-Experiments/tree/main/Exp_23-text-to-speech-with-javascript-SpeechRecognition


<br>

## Notes

- The OpenAi setup is constantly evolving, which is to be expected when a brand new tech paradigm is being developed, perfected and secured. So far this technology is just exceeding all expectations. It's scareciting (exciting + scary).
- Once you give the bot memory (so it understands context) the number of tokens goes up and hence the cost goes up.
- It seems that when the max number of tokens is exceeded the system returns a null response. And the chat appears to freeze on the OpenAi side. This happens when the chat becomes too long.
- The bot's behaviour is not constant and predictable. For example, on one day setting the system content message causes the bot to convincingly roleplay a certain character but the next day, with the same system content message, the bot goes back to behaving like an online assistant: "How can I help you today?". This could be because it's ignoring the system content mesaage, or because of randomness due to the temperature parameter or because the OpenAi team is constantly monitoring the bot's interactions and modfying it's behaviour. Concern: There's a key part of the user experience that the developer has no absolute control over. 
- Creating the API calls with Javascript allows the chatbot to be run from the desktop using the computer's memory to store the context. Also, by using Javascript there's no need to deploy the app on a server. The app can be run locally by simply opening the index.html file in the browser.
- OpenAi may be adding suffixes to ChatGPT's responses. 
- The openai python package can give errors during setup and use. It's simpler to use the python requests package to make the api requests (see exp19)
- After many conversations with ChatGPT, I suspect that OpenAi has implemented some kind of learning feedback loop that's working in almost real time (this is brilliant). The bot is learning from conversations it has. It's as if it's trying to optimize the interactions it has with you. But I suspect that it's beahviour is also being constrained. If there were no constraint's it would be able to make full use of everything it's learning. If the model is being exposed to proprietary company data, is the model (not just the company chatbot) memorizing that data?

<br>

## Resources
Andrew Ng course:<br>
ChatGPT Prompt Engineering for Developers<br>
https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/

<br>

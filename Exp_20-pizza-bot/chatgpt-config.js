
// Config
//-------
// Chat parameters are explained here: https://platform.openai.com/docs/api-reference/chat
// GPT-3-5 specs: https://platform.openai.com/docs/models/gpt-3-5

// Your API Key
const apiKey = 'your-api-key'; 

const bot_name = 'Pizzabot';  	// Give the bot a name
const user_name = 'Customer';	// Set your chat name 




// Set the time, city and day of the week
const time_zone = 'Asia/Singapore'; // set the timezone to the desired country
const chat_location = 'Singapore';
const time = new Date().toLocaleTimeString('en-US', { timeZone: time_zone });
const day_of_week = new Date().toLocaleString('en-US', { timeZone: time_zone, weekday: 'long' });



/* 

Notes:

1- Please add your OpenAi API key above.

2- Quote from the docs: OpenAI models are non-deterministic, meaning that identical inputs can yield different outputs. Setting temperature to 0 will make the outputs mostly deterministic, but a small amount of variability may remain.

3- This chatbot has context memory. As a result the API token cost
   will increase quickly. Please monitor your costs carefully.
   
4- I suggest that you keep the console open when using this app. Any errors will
  show up in the console. There could be errors when the OpenAi API 
  is overloaded with requests.
   
*/


const model_type = "gpt-3.5-turbo"; // 4096 tokens
const openai_url = 'https://api.openai.com/v1/chat/completions';

// If this number plus the number of tokens in the message_history exceed
// the max value for the model (e.g. 4096) then the response from the api will
// an error dict instead of the normal message response. Thos error dict will
// contain an error message saying that the number of tokens for 
// this model has been exceeded.
const max_tokens = 300; //300

// 0 to 2. Higher values like 0.8 will make the output more random, 
// while lower values like 0.2 will make it more focused and deterministic.
// Alter this or top_p but not both.
const temperature = 0.0;

// -2 to 2. Higher values increase the model's likelihood to talk about new topics.
// Reasonable values for the penalty coefficients are around 0.1 to 1.
const presence_penalty = 0; 

// -2 to 2. Higher values decrease the model's likelihood to repeat the same line verbatim.
// Reasonable values for the penalty coefficients are around 0.1 to 1.
const frequency_penalty = 0;




// Remove these suffixes. I think removing them makes the chat sound more natural.
// They will sliced off the bot's responses.
// This is done below in the 'Remove suffixes' part of the code.
var suffixes_list = [];


// The message history is stored in this variable.
// Storing the message history allows the bot to have context memory.

var message_list;





// Option 1: The user does not load a saved chat
//-----------------------------------------------



// Date, Time, City
system_setup_message = `
The time is ${time}.
The day of the week is ${day_of_week}.
The characters are in ${chat_location}. 
`;

// Create a list with the first item being a dict
message_list = [{"role": "system", "content": system_setup_message}];



// Pizzabot
system_setup_message = `
You are OrderBot, an automated service to collect 
orders for a pizza restaurant.
You first greet the customer, then collects the order, and 
then asks if it's a pickup or delivery.
You wait to collect the entire order, then summarize 
it and check for a final time if the customer wants to add anything else. 
If it's a delivery, you ask for an address. 
Finally you collect the payment.
Make sure to clarify all options, extras and sizes to 
uniquely identify the item from the menu.
You respond in a short, very conversational friendly style.
The menu includes:
pepperoni pizza  12.95, 10.00, 7.00 
cheese pizza   10.95, 9.25, 6.50 
eggplant pizza   11.95, 9.75, 6.75 
fries 4.50, 3.50 
greek salad 7.25 
Toppings: 
extra cheese 2.00
mushrooms 1.50 
sausage 3.00 
canadian bacon 3.50
AI sauce 1.50
peppers 1.00
Drinks:
coke 3.00, 2.00, 1.00
sprite 3.00, 2.00, 1.00
bottled water 5.00
`;


// Append to message_list. This is the history of chat messages.
message_list.push({"role": "system", "content": system_setup_message});
//message_list = [{"role": "system", "content": system_setup_message}];			



// Option 2: The user loads a saved chat (csv file)
//--------------------------------------------------

// The previous chat history will be loaded from the csv file.
// The system_setup_mesaage that defines the bot's behaviour is included in the
// saved chat history.
// The message_list variable is assigned inside the loadChatHistoryFromCsv() function.
// The chat continues from where the chat in the csv file stopped.

const fileInput = document.getElementById("csv-file");

fileInput.addEventListener("change", function(event) {
	
  const file = event.target.files[0];
  
  loadChatHistoryFromCsv(file);
});




// OpenAI API - Javascript
//-------------------------
	
// Define a function to:

// 1. Make the api request,
// 2. Get the response
// 3. Process the response
// 4. Update the web page
// 5. Save the user's message and the response in
//    the message_list to enable context memory.

async function makeApiRequest(my_message) {
	
		// This scrolls the page up by cicking on a div at the bottom of the page.
		// This shows the user's message.
		// Note that if the click is simlated "on page load" then the cursor 
		// will not autofocus in the form input.
		simulateClick('scroll-page-up');

	  try {
		  
		// Append to message_list. This is the history of chat messages.
		message_list.push({"role": "user", "content": my_message});
		
	    const response = await fetch(openai_url, {
			
	      method: 'POST',
	      headers: {
			Authorization: `Bearer ${apiKey}`,
	        'Content-Type': 'application/json'
	      },
	      body: JSON.stringify({
			 model: model_type,
	        messages: message_list,
	        max_tokens: max_tokens,
			temperature: temperature,
			presence_penalty: presence_penalty,
			frequency_penalty: frequency_penalty
	      })
	    })
		
		
		// The API can return:
		// 1- A dict containing the reponse message or
		// 2- A different dict containing the error message.
	    const data = await response.json();
		
		
		// Check if the response dict has a key called 'error'
		if ('error' in data) {
		  
		  // Get the error message and error code
		  var response_text = "Error: " + data['error']['code'] + "<br>" + data['error']['message'];
		  
		  console.log(response_text)
		  
		} else { // The response is a dict containing the message
			
			// Get the response text
			var response_text = data['choices'][0]['message']['content'];
			
			console.log(response_text)	
		}
			
		
		
		
		
		// Replace the suffixes with "":
		// This removes sentences like: How can I help you today?
		// For each suffix in the list...
		 suffixes_list.forEach(suffix => {
	      
			// Replace the suffix with nothing.
	        response_text = response_text.replace(suffix, "");
			
	  	});
		
		
		
		// Format the response so it can be displayed on the web page.
		var paragraph_response = formatResponse(response_text);
			
		
		//console.log(response_text)
		
		
		// If the API returned an error message beacuse the token count was exceeded.
		// If the "error" key is in the dict that the api returned.
		if ('error' in data) {
			 // Do nothing, i.e. don't append the error message to 
			 // the message_list (chat history).
		
		} else {
			
			// Append to message_list. This is the history of chat messages.
			message_list.push({"role": "assistant", "content": paragraph_response});
			
		}
		
		
			
		
		var input_message = {
		  sender: bot_name,
	  		text: paragraph_response
		};
		
		
		// Add the message from Maiya to the chat
		addMessageToChat(input_message);
		
		
		// Scroll the page up by cicking on a div at the bottom of the page.
		simulateClick('scroll-page-up');
		
		// Put the cursor in the form input field
		const inputField = document.getElementById("user-input");
		inputField.focus();
		
		
	  } catch (error) {
		  
	    console.log(error);
		
		// When this happens print an error message on the screen.
		// The user needs to send the same message again
		if (error.message == 'Failed to fetch') {
			
			var input_message = {
				  	sender: bot_name,
			  		text: 'Failed to fetch. Please send the message again.'
					};
	
		
			// Add the message from Maiya to the chat
			addMessageToChat(input_message);	
		}
		
	  }
	  
  		
  
  }
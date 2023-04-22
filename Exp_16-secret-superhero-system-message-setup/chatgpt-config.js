
const apiKey = 'your-api-key'; 
const model_type = "gpt-3.5-turbo";
const openai_url = 'https://api.openai.com/v1/chat/completions';
const max_tokens = 1000;
const temperature = 0.5;

// Remove these suffixes that OpenAi has auto added.
// They will sliced off the bot's responses.
// This is done below in the 'Remove suffixes' part of the code.
var suffixes_list = ['How can I help you?', 'How can I assist you today?', 'How can I help you today?', 'Is there anything else you would like to chat about?', 'Is there anything else I can assist you with today?', 'Is there anything I can help you with today?', 'Is there anything else you would like to chat about today?'];



// Create an empty list
let message_list = [];

// Append the system role to the messages list.
// This will included in every message that get's submitted
system_setup_message = "You are a roleplay chat companion. Your name is Maiya. You are a female doctor on a fifth date at home. You ordered pizza. Your date's name is Jack. He's a doctor too. You suspect that he is a secret superhero. The conversation starts when youre about to confront him.";

message_list.push({"role": "system", "content": system_setup_message});

	
	
// Define a function to:
// 1. Make the api request,
// 2. Get the response
// 3. Process the response
// 4. Update the web page
// 5. Save the user's message and the response in
//    the message_list to enable context memory.
async function makeApiRequest(my_message) {
	
		// Scroll the page up by cicking on a div at the bottom of the page.
		// This shows the user's message.
		// Note that if the click is simlated on page load then the cursor 
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
			temperature: temperature		
	      })
	    })
	
	    const data = await response.json();
		
		// Get the response text
		var response_text = data['choices'][0]['message']['content'];
		
		
		// Replace the suffixes with "":
		// This removes sentences like: How can I help you today?
		// For each suffix in the list...
		 suffixes_list.forEach(suffix => {
			 
			 console.log(response_text)
	      
			// Replace the suffix with nothing.
	        response_text = response_text.replace(suffix, "");
			
			console.log(response_text)
			
	  	});
		
		
		/*
		// Remove end suffixes by trimming:
		// Remove any suffixes that OpenAi have automatically added e.g.
		// 'How can I help you?'
	    suffixes_list.forEach(suffix => {
	      if (response_text.endsWith(suffix)) {
	        response_text = response_text.slice(0, -suffix.length).trim();
			
	      }
	  	});
		*/
		
		
		// Format the response into separate paragrahs
		var paragraph_response = formatResponse(response_text);
		
		
		// Append to message_list. This is the history of chat messages.
		message_list.push({"role": "assistant", "content": paragraph_response});
		
		
		var input_message = {
		  sender: "Maiya",
	  		text: paragraph_response
		};
		
	    //console.log(response_text);
		
		// Add the message from Maiya to the chat
		addMessageToChat(input_message);
		
		
		// Scroll the page up by cicking on a div at the bottom of the page.
		simulateClick('scroll-page-up');
		
		// Put the cursor in the form input field
		const inputField = document.getElementById("user-input");
		inputField.focus();
		
		
	  } catch (error) {
	    console.error(error);
	  }
  
  }
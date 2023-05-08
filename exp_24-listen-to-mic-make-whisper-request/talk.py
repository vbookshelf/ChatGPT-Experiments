# Ref: Make your own Jarvis - Speech Recognition - Tutorial 5
# https://www.youtube.com/watch?v=HRDXortlsMA&t=116s


import speech_recognition as sr
import openai



def get_audio():
	
	# obtain audio from the microphone
	r = sr.Recognizer()
	
	with sr.Microphone() as source:
		
		print("Say something!")
		audio = r.listen(source)
		print('Audio detected. Processing...')
		
		# write audio to a WAV file
		with open("microphone-results.wav", "wb") as f:
		    f.write(audio.get_wav_data())
		
			
	API_KEY = 'your-api-key'
	model_id = 'whisper-1'
	
	media_file_path = 'microphone-results.wav'
	media_file = open(media_file_path, 'rb')
	
	response = openai.Audio.translate(
	    api_key=API_KEY,
	    model=model_id,
	    file=media_file,
	    prompt=''
	)
	
	print()
	print(response.text)
	print()
	
		
		
while True:
	get_audio()
	
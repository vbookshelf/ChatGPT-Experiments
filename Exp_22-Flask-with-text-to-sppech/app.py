

import os
from flask import Flask, render_template, url_for, request, redirect, jsonify
from gtts import gTTS
from playsound import playsound
from pydub import AudioSegment


# Create an instance of the Flask class
app = Flask(__name__, static_url_path='/static')


# Get the absolute path to the folder called 'static'.
# We must get this path before we change the working directory.
ABS_PATH_TO_STATIC = os.path.abspath("static")


# This endpoint loads the index.html page.
@app.route('/')
def home_func():
    return render_template('index.html')



# This endpoint receives the message from the bot that
# that is sent by the sendMessageToFlask() javascript function.
@app.route('/process_ajax', methods=['POST'])
def process_ajax():

    # Trying to use pyttsx3 to convert text to speech  keeps giving an error.
    # gTTS works fine.
    #engine = pyttsx3.init(driverName='nsss')
    #engine.say("I am here to take over the world.")
    #engine.runAndWait()

    # Get the value of the 'bot_message' key
    bot_message = request.form.get('bot_message')


    output = {"output1": bot_message}


    # Use gTTS to convert the text into speech

    # Remove the html from the text
    bot_message =  bot_message.replace('<p>', '')
    bot_message = bot_message.replace('</p>', '')
    bot_message = bot_message.replace('<P>', '')
    bot_message = bot_message.replace('</P>', '')
    bot_message = bot_message.replace('<div>', '')
    bot_message = bot_message.replace('</div>', '')
    bot_message = bot_message.replace('<li>', '')
    bot_message = bot_message.replace('</li>', '')
    bot_message = bot_message.replace('<ul>', '')
    bot_message = bot_message.replace('</ul>', '')
    bot_message = bot_message.replace('<ol>', '')
    bot_message = bot_message.replace('</ol>', '')

    # Convert the text to speech
    speech = gTTS(bot_message, lang='en', tld='us')
    speech.save("sound.mp3")


    # Increase the speed of the voice
    # The gTTS voice is too slow

    # Load the MP3 file
    audio = AudioSegment.from_file("sound.mp3", format="mp3")

    # Set the new sample rate (1.15x speed)
    new_sample_rate = int(audio.frame_rate * 1.15)

    # Apply the speed change
    audio = audio._spawn(audio.raw_data, overrides={'frame_rate': new_sample_rate})

    # Export the modified audio file
    # We save as wav because trying to save as mp3 creates an error
    audio.export("sound1.wav", format="wav")


    # Use playsound to play the audio file
    playsound("sound1.wav")

    #return ("", 204)
    return jsonify(output)



# This endpoint is used to test that the app is working
@app.route('/test')
def test():
    return 'This is a test...'




if __name__ == '__main__':
    app.run()
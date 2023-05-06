## Exp_22 - Flask app with text to speech
<br>

### Objective

- Create a flask chat app
- Add text to speech

### Notes
- The speech functionality is unexpectedly useful.
- gTTS (Google Text-to-Speech) is used to convert the bot's responses into speech
- gTTS needs an internet connection to work.
- gTTS default speech sounds slow and boring. I used Pydub to speed up the speech (x1.15). However, because of this speedup the voice sounds a bit childlike.
- It would be good if the voice can be changed to something that sounds better.
- ChatGPT understands that it needs to optimize it's responses for gTTS.
- Using Flask means that all the power of python is available. 
- Using Flask, the bot can also be connected to a Raspberry Pi.

<br>

```

1. Download the project folder, unzip it and place it on your desktop.
Then open your command line console.
The instructions that follow should be typed on the command line. 
There’s no need to type the $ symbol.

2. $ cd Desktop

3. $ cd project_folder

4. Create a virtual environment. (Here it’s named myvenv)
This only needs to be done once when the app is first installed.
You'll need to have python3.8 available on your computer.
When you want to run the app again you can skip this step.
$ python3.8 -m venv myvenv

5. Activate the virtual environment
$ source myvenv/bin/activate

4. Install the requirements.
This only needs to be done once when the app is first installed.
When you want to run the app again you can skip this step.
$ pip install -r requirements.txt

5. Launch the app.
This make take a few seconds the first time.
$ python app.py

6. Copy the url that gets printed out (e.g. http://127.0.0.1:5000)

7. Paste the url into your chrome browser and press Enter. The app will launch in the browser. 

8. To stop the app type ctrl C in the console.
Then deactivate the virtual environment.
$ deactivate

```

<br>

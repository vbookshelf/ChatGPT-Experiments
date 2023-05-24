## Exp_24 - Listen to mic and make whisper api request
<br>

### Objective

- Use Python to continuously listen to the mic for speech
- When speech is detected send the audio file to OpenAI Whisper to convert it to text.

### Notes
- The process is slow but it works.

<br>

```
How I fixed the PyAudio issue:

Was getting a “shallow clone” error for homebrew.

In a normal terminal I did the following:
This fixed the homebrew “shallow clone” update error:
(Chinese site)
https://www.cnblogs.com/xingnie/p/15237818.html

$ cd /usr/local/Homebrew/Library/Taps/homebrew
$ rm -rf homebrew-core
$ rm -rf homebrew-cask
$ brew upgrade

The above took a while. 
Then in a virtual environment I did:

$ brew install portaudio
# pip3 install pyaudio

```

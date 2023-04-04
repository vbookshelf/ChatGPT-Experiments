
import openai

openai.api_key = "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"

completion = openai.ChatCompletion.create(model="gpt-3.5-turbo", messages=[{"role": "user", "content": "What are the primary colours?"}])

#print(completion)
print(completion.choices[0].message.content)
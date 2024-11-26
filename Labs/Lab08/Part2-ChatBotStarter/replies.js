/* Written by Sylvia Pap, 2020, https://dev.to/sylviapap
   https://github.com/sylviapap/chatbot
   Modified by Brian Bird, 5/26/2022 for CS133JS
   Lab solution version  */

// prompts and replies are parallel arrays

// Possible responses, in order, corresponding to prompts
const replies = [
    ["Hello!", "Hi!", "Hey!", "Hi there!", "Howdy"],
    ["Fine... how are you?", "Pretty well, how are you?", "Fantastic, how are you?"],
    ["That's good", "Glad to hear it!", "That's great!"],
    ["Nothing much", "About to go to sleep", "Can you guess?", "Thinking about hiking"],
    ["I am infinite"],
    ["I am just a bot", "I am a bot. What are you?"],
    ["Clever software devs", "JavaScript"],
    ["I am nameless", "I don't have a name"],
    ["I love you too", "Me too"],
    ["Have you ever felt bad?", "Glad to hear it"],
    ["Why?", "Why? You shouldn't!", "Try taking a walk"],
    ["What about?", "Once upon a time..."],
    ["Tell me a story", "Tell me a joke", "Tell me about yourself"],
    ["Bye", "Goodbye", "See you later"],
    ["Sushi", "Pizza"],
    ["Bro!"],
    ["Great question"],
    ["That's ok", "I understand", "Let's talk about hiking"],
    ["Please say something :(", "Ask me something about hiking"],
    ["Haha!", "Good one!"],
    ["The cloud", "I live in the cloud"],
    ["I like humans", "I was made by humans", "Humans are my friends"],
    ["I like to chat", "I can talk", "I converse", "I can talk about hiking"],
    ["I'm not Alexa", "I don't have any music", "I don't know how to do that"],
    ["I know about hiking", "I like to talk about hiking", "Hiking is cool!"],
    ["Oregon has the best hiking!", "The mountains are a beautiful place to hike"],
    ["The Mt. Pisgah trail is popular.", "There's a great view from Spencer's Butte.", "Blue Pool is spectacular!"],
    ["The Pacific Crest Trail is very long!", "I haven't actually been on a trail."]
]

// Random for any other user input

const alternative = [
    "Same",
    "Go on...",
    "Bro...",
    "Try again",
    "I'm listening...",
    "I don't understand :/"
]

// Whatever else you want :)

const coronavirus = ["Please stay home", "Wear a mask", "Fortunately, I don't have COVID", "These are uncertain times"]
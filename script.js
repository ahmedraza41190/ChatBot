document.addEventListener("DOMContentLoaded", function () {
    const chatBox = document.getElementById("chat-box");
    const userInput = document.getElementById("user-input");
    const sendButton = document.getElementById("send-button");

    sendButton.addEventListener("click", function () {
        const userMessage = userInput.value;
        if (userMessage.trim() !== "") {
            addUserMessage(userMessage);
            respondToUser(userMessage);
            userInput.value = "";
        }
    });

    // function addUserMessage(message) {
    //     const messageElement = document.createElement("div");
    //     messageElement.classList.add("user-message");
    //     messageElement.innerText = message;
    //     chatBox.appendChild(messageElement);
    // }

    // function addBotMessage(message) {
    //     const messageElement = document.createElement("div");
    //     messageElement.classList.add("bot-message");
    //     messageElement.innerText = message;
    //     chatBox.appendChild(messageElement);
    // }

    function addUserMessage(message) {
        const messageElement = createMessageElement("user-message", message);
        chatBox.appendChild(messageElement);
    }

    function addBotMessage(message) {
        const messageElement = createMessageElement("bot-message", message);
        chatBox.appendChild(messageElement);
    }

    function createMessageElement(className, message) {
        const messageElement = document.createElement("div");
        messageElement.classList.add(className);
        messageElement.innerText = message;
        return messageElement;
    }

    function respondToUser(userMessage) {
        // Simple predefined responses for demonstration purposes.
        const responses = {

                                  //Lower-case

            "hello": "Hello! How can I assist you?",

            "hey": "Hey! How can I assist you?",

            "hi": "Hi! How can I assist you?",

            "what do i ask you": "You can ask me a wide range of questions and seek assistance with various topics. Here are some examples of what you can ask: What is chatbot?, What is the future of chatbots?, How do chatbots work?, Where are chatbots commonly used?, What are the types of chatbots?, Can chatbots understand natural language?, What are some benefits of using chatbots?, Are there any limitations to chatbots?, How can businesses implement chatbots?, What are some popular chatbot platforms?, Are chatbots replacing human customer support agents?, How can I create my own chatbot?....",

            "what do I ask you": "You can ask me a wide range of questions and seek assistance with various topics. Here are some examples of what you can ask: What is chatbot?, What is the future of chatbots?, How do chatbots work?, Where are chatbots commonly used?, What are the types of chatbots?, Can chatbots understand natural language?, What are some benefits of using chatbots?, Are there any limitations to chatbots?, How can businesses implement chatbots?, What are some popular chatbot platforms?, Are chatbots replacing human customer support agents?, How can I create my own chatbot?....",

            "what is the future of chatbots": "The future of chatbots involves continued advancements in AI and NLP, making them more sophisticated and capable of handling a wider range of tasks and interactions.",

            "what is chatbot": "A chatbot is a computer program designed to simulate human conversation and provide automated responses to users' queries.",

            "how do chatbots work": "Chatbots work by using predefined rules, scripts, or artificial intelligence algorithms to interpret user inputs and generate relevant responses.",

            "where are chatbots commonly used": "Chatbots are commonly used in customer service, e-commerce, healthcare, and various industries to provide information, automate tasks, and engage with users in real-time.",

            "what are the types of chatbots": "There are two main types of chatbots: rule-based chatbots that follow predefined scripts, and AI-powered chatbots that use natural language processing and machine learning.",

            "can chatbots understand natural language": "Yes, advanced chatbots equipped with natural language processing (NLP) can understand and respond to natural language inputs, making interactions more conversational.",

            "what are some benefits of using chatbots": "Benefits of chatbots include 24/7 availability, faster response times, cost savings in customer support, and improved user experiences.",

            "are there any limitations to chatbots": "Chatbots may struggle with complex or nuanced conversations, and their effectiveness depends on the quality of their training data and algorithms.",

            "how can businesses implement chatbots": "Businesses can implement chatbots by developing custom solutions or using chatbot platforms and integrating them into their websites or messaging apps.",

            "what are some popular chatbot platforms": "Popular chatbot platforms include Dialogflow, IBM Watson Assistant, Microsoft Bot Framework, and many others, each offering various features and capabilities.",

            "are chatbots replacing human customer support agents": "Chatbots are often used to handle routine queries and tasks, but human agents are still essential for complex issues and providing a personalized touch in customer support.",

            "how can I create my own chatbot": "You can create your own chatbot by using development frameworks, libraries, or no-code/low-code platforms that offer chatbot-building capabilities.",

            "what are you doing here": "I'm here to assist you with any questions",

            "what are you doing": "I'm here to assist you with any questions",

            "ok": "If you need an answer to any other question, I will help you.",

            "can you recommend a good restaurant nearby": "I don't have access to your location, but you can use a restaurant review app or website to find highly-rated restaurants in your area.",

            "do you have feelings": "No, I'm just a computer program, so I don't have feelings or consciousness.",

            "what can you do": "I can answer questions, provide information, and assist with various topics. Feel free to ask me anything!",

            "how does this chatbot work": "I use natural language processing and a database of information to understand and respond to your questions.",

            "where are you located": "I exist in the digital realm, so I don't have a physical location. I'm here to assist you online.",

            "how are you": "I'm just a bot, but I'm here to help!",

            "what is your name": "I'm a chatbot, so I don't have a name, but you can call me ChatBot.",

            "how can you help me": "I can assist you with a wide range of tasks, from answering questions to providing recommendations and more. Just let me know what you need help with!",

            "what's the weather like today": " I'm not connected to real-time data, but you can check the weather in your location by using a weather app or website.",

            "tell me a joke": "Why don't scientists trust atoms? Because they make up everything!",

            "what's the capital of Turkey": "The capital of Turkey is Istanbul.",

            "what's the capital of Pakistan": "The capital of Pakistan is Islamabad.",

            "how do I reset my password": "To reset your password, go to the 'Forgot Password' link on the login page and follow the instructions sent to your email.",

            "what's the current time": "I'm sorry, but I don't have access to real-time data. You can check the current time on your device or by searching online.",

            "recommend a movie to watch": "Sure! What genre of movie are you in the mood for? Comedy, drama, action, or something else?",

            "how do I contact customer support": "You can reach our customer support team by clicking the 'Contact Us' link on our website or by emailing support@example.com.",

            "can you help me with a math problem": "Of course! I'd be happy to help with your math problem. Please provide the details of the problem.",

            "what's the meaning of life": "The meaning of life is a profound philosophical question that people have pondered for centuries. It's a question that doesn't have a single, definitive answer and can vary from person to person.",

            "how can I improve my productivity": "Improving productivity can involve setting goals, staying organized, managing your time effectively, and eliminating distractions. Would you like some tips on specific productivity strategies?",

            "how does artificial intelligence work": "Artificial intelligence (AI) involves the use of computer systems to perform tasks that typically require human intelligence. It includes machine learning, neural networks, and algorithms that enable computers to learn from data and make decisions.",

            "what's the meaning of a specific word": "I can help you find the meaning of words! Just type the word you'd like to know more about, and I'll provide you with its definition.",

            "bye": "Goodbye! Feel free to return if you have more questions.",

            "can you help me with something": "Of course! I'm here to assist you. What do you need help with?",

            "what is your purpose": "My purpose is to provide information and assist with answering your questions to the best of my knowledge.",

            "tell me about famous scientists in history": "There have been many famous scientists throughout history, including Albert Einstein, Isaac Newton, Marie Curie, Charles Darwin, and Galileo Galilei, who made significant contributions to various fields of science.",

            "how does photosynthesis work": "Photosynthesis is the process by which plants convert sunlight into energy. It involves the absorption of light by chlorophyll and the conversion of carbon dioxide and water into glucose and oxygen.",





                  //Upper-case


            "Hello": "Hello! How can I assist you?",

            "What do i ask you": "You can ask me a wide range of questions and seek assistance with various topics. Here are some examples of what you can ask: What is chatbot?, What is the future of chatbots?, How do chatbots work?, Where are chatbots commonly used?, What are the types of chatbots?, Can chatbots understand natural language?, What are some benefits of using chatbots?, Are there any limitations to chatbots?, How can businesses implement chatbots?, What are some popular chatbot platforms?, Are chatbots replacing human customer support agents?, How can I create my own chatbot?....",

            "What do I ask you": "You can ask me a wide range of questions and seek assistance with various topics. Here are some examples of what you can ask: What is chatbot?, What is the future of chatbots?, How do chatbots work?, Where are chatbots commonly used?, What are the types of chatbots?, Can chatbots understand natural language?, What are some benefits of using chatbots?, Are there any limitations to chatbots?, How can businesses implement chatbots?, What are some popular chatbot platforms?, Are chatbots replacing human customer support agents?, How can I create my own chatbot?....",

            "What is the future of chatbots": "The future of chatbots involves continued advancements in AI and NLP, making them more sophisticated and capable of handling a wider range of tasks and interactions.",

            "What is chatbot": "A chatbot is a computer program designed to simulate human conversation and provide automated responses to users' queries.",

            "How do chatbots work": "Chatbots work by using predefined rules, scripts, or artificial intelligence algorithms to interpret user inputs and generate relevant responses.",

            "Where are chatbots commonly used": "Chatbots are commonly used in customer service, e-commerce, healthcare, and various industries to provide information, automate tasks, and engage with users in real-time.",

            "What are the types of chatbots": "There are two main types of chatbots: rule-based chatbots that follow predefined scripts, and AI-powered chatbots that use natural language processing and machine learning.",

            "Can chatbots understand natural language": "Yes, advanced chatbots equipped with natural language processing (NLP) can understand and respond to natural language inputs, making interactions more conversational.",

            "What are some benefits of using chatbots": "Benefits of chatbots include 24/7 availability, faster response times, cost savings in customer support, and improved user experiences.",

            "Are there any limitations to chatbots": "Chatbots may struggle with complex or nuanced conversations, and their effectiveness depends on the quality of their training data and algorithms.",

            "How can businesses implement chatbots": "Businesses can implement chatbots by developing custom solutions or using chatbot platforms and integrating them into their websites or messaging apps.",

            "What are some popular chatbot platforms": "Popular chatbot platforms include Dialogflow, IBM Watson Assistant, Microsoft Bot Framework, and many others, each offering various features and capabilities.",

            "Are chatbots replacing human customer support agents": "Chatbots are often used to handle routine queries and tasks, but human agents are still essential for complex issues and providing a personalized touch in customer support.",

            "How can I create my own chatbot": "You can create your own chatbot by using development frameworks, libraries, or no-code/low-code platforms that offer chatbot-building capabilities.",

            "Hey": "Hey! How can I assist you?",

            "Hi": "Hi! How can I assist you?",

            "What are you doing": "I'm here to assist you with any questions",

            "What are you doing here": "I'm here to assist you with any questions",

            "Ok": "If you need an answer to any other question, I will help you.",

            "Can you recommend a good restaurant nearby": "I don't have access to your location, but you can use a restaurant review app or website to find highly-rated restaurants in your area.",

            "Do you have feelings": "No, I'm just a computer program, so I don't have feelings or consciousness.",

            "What can you do": "I can answer questions, provide information, and assist with various topics. Feel free to ask me anything!",

            "How does this chatbot work": "I use natural language processing and a database of information to understand and respond to your questions.",

            "Where are you located?": "I exist in the digital realm, so I don't have a physical location. I'm here to assist you online.",

            "What is your purpose": "My purpose is to provide information and assist with answering your questions to the best of my knowledge.",

            "How are you?": "I'm just a bot, but I'm here to help!",

            "What is your name?": "I'm a chatbot, so I don't have a name, but you can call me ChatBot.",

            "How can you help me?": "I can assist you with a wide range of tasks, from answering questions to providing recommendations and more. Just let me know what you need help with!",

            "What's the weather like today?": " I'm not connected to real-time data, but you can check the weather in your location by using a weather app or website.",

            "Tell me a joke": "Why don't scientists trust atoms? Because they make up everything!",

            "What's the capital of Turkey?": "The capital of Turkey is Istanbul.",

            "What's the capital of Pakistan?": "The capital of Pakistan is Islamabad.",

            "How do I reset my password?": "To reset your password, go to the 'Forgot Password' link on the login page and follow the instructions sent to your email.",

            "What's the current time?": "I'm sorry, but I don't have access to real-time data. You can check the current time on your device or by searching online.",

            "Recommend a movie to watch": "Sure! What genre of movie are you in the mood for? Comedy, drama, action, or something else?",

            "How do I contact customer support?": "You can reach our customer support team by clicking the 'Contact Us' link on our website or by emailing support@example.com.",

            "Can you help me with a math problem?": "Of course! I'd be happy to help with your math problem. Please provide the details of the problem.",

            "What's the meaning of life?": "The meaning of life is a profound philosophical question that people have pondered for centuries. It's a question that doesn't have a single, definitive answer and can vary from person to person.",

            "How can I improve my productivity?": "Improving productivity can involve setting goals, staying organized, managing your time effectively, and eliminating distractions. Would you like some tips on specific productivity strategies?",

            "How does artificial intelligence work?": "Artificial intelligence (AI) involves the use of computer systems to perform tasks that typically require human intelligence. It includes machine learning, neural networks, and algorithms that enable computers to learn from data and make decisions.",

            "What's the meaning of a specific word?": "I can help you find the meaning of words! Just type the word you'd like to know more about, and I'll provide you with its definition.",

            "Bye": "Goodbye! Feel free to return if you have more questions.",

            "Can you help me with something": "Of course! I'm here to assist you. What do you need help with?",

            "Tell me about famous scientists in history": "There have been many famous scientists throughout history, including Albert Einstein, Isaac Newton, Marie Curie, Charles Darwin, and Galileo Galilei, who made significant contributions to various fields of science.",

            "How does photosynthesis work": "Photosynthesis is the process by which plants convert sunlight into energy. It involves the absorption of light by chlorophyll and the conversion of carbon dioxide and water into glucose and oxygen.",


               

            

            //?

            "how are you?": "I'm just a bot, but I'm here to help!",

            "what do i ask you?": "You can ask me a wide range of questions and seek assistance with various topics. Here are some examples of what you can ask: What is chatbot?, What is the future of chatbots?, How do chatbots work?, Where are chatbots commonly used?, What are the types of chatbots?, Can chatbots understand natural language?, What are some benefits of using chatbots?, Are there any limitations to chatbots?, How can businesses implement chatbots?, What are some popular chatbot platforms?, Are chatbots replacing human customer support agents?, How can I create my own chatbot?....",

            "What do i ask you?": "You can ask me a wide range of questions and seek assistance with various topics. Here are some examples of what you can ask: What is chatbot?, What is the future of chatbots?, How do chatbots work?, Where are chatbots commonly used?, What are the types of chatbots?, Can chatbots understand natural language?, What are some benefits of using chatbots?, Are there any limitations to chatbots?, How can businesses implement chatbots?, What are some popular chatbot platforms?, Are chatbots replacing human customer support agents?, How can I create my own chatbot?....",

            "what do I ask you?": "You can ask me a wide range of questions and seek assistance with various topics. Here are some examples of what you can ask: What is chatbot?, What is the future of chatbots?, How do chatbots work?, Where are chatbots commonly used?, What are the types of chatbots?, Can chatbots understand natural language?, What are some benefits of using chatbots?, Are there any limitations to chatbots?, How can businesses implement chatbots?, What are some popular chatbot platforms?, Are chatbots replacing human customer support agents?, How can I create my own chatbot?....",

            "What do I ask you?": "You can ask me a wide range of questions and seek assistance with various topics. Here are some examples of what you can ask: What is chatbot?, What is the future of chatbots?, How do chatbots work?, Where are chatbots commonly used?, What are the types of chatbots?, Can chatbots understand natural language?, What are some benefits of using chatbots?, Are there any limitations to chatbots?, How can businesses implement chatbots?, What are some popular chatbot platforms?, Are chatbots replacing human customer support agents?, How can I create my own chatbot?....",

            "What is the future of chatbots?": "The future of chatbots involves continued advancements in AI and NLP, making them more sophisticated and capable of handling a wider range of tasks and interactions.",

            "What is chatbot?": "A chatbot is a computer program designed to simulate human conversation and provide automated responses to users' queries.",

            "How do chatbots work?": "Chatbots work by using predefined rules, scripts, or artificial intelligence algorithms to interpret user inputs and generate relevant responses.",

            "Where are chatbots commonly used?": "Chatbots are commonly used in customer service, e-commerce, healthcare, and various industries to provide information, automate tasks, and engage with users in real-time.",

            "What are the types of chatbots?": "There are two main types of chatbots: rule-based chatbots that follow predefined scripts, and AI-powered chatbots that use natural language processing and machine learning.",

            "Can chatbots understand natural language?": "Yes, advanced chatbots equipped with natural language processing (NLP) can understand and respond to natural language inputs, making interactions more conversational.",

            "What are some benefits of using chatbots?": "Benefits of chatbots include 24/7 availability, faster response times, cost savings in customer support, and improved user experiences.",

            "Are there any limitations to chatbots?": "Chatbots may struggle with complex or nuanced conversations, and their effectiveness depends on the quality of their training data and algorithms.",

            "How can businesses implement chatbots?": "Businesses can implement chatbots by developing custom solutions or using chatbot platforms and integrating them into their websites or messaging apps.",

            "What are some popular chatbot platforms?": "Popular chatbot platforms include Dialogflow, IBM Watson Assistant, Microsoft Bot Framework, and many others, each offering various features and capabilities.",

            "Are chatbots replacing human customer support agents?": "Chatbots are often used to handle routine queries and tasks, but human agents are still essential for complex issues and providing a personalized touch in customer support.",

            "How can I create my own chatbot?": "You can create your own chatbot by using development frameworks, libraries, or no-code/low-code platforms that offer chatbot-building capabilities.",

            "What are you doing here?": "I'm here to assist you with any questions",

            "what are you doing here?": "I'm here to assist you with any questions",

            "What are you doing?": "I'm here to assist you with any questions",

            "what are you doing?": "I'm here to assist you with any questions",

            "what is the future of chatbots?": "The future of chatbots involves continued advancements in AI and NLP, making them more sophisticated and capable of handling a wider range of tasks and interactions.",

            "what is chatbot?": "A chatbot is a computer program designed to simulate human conversation and provide automated responses to users' queries.",

            "how do chatbots work?": "Chatbots work by using predefined rules, scripts, or artificial intelligence algorithms to interpret user inputs and generate relevant responses.",

            "where are chatbots commonly used?": "Chatbots are commonly used in customer service, e-commerce, healthcare, and various industries to provide information, automate tasks, and engage with users in real-time.",

            "what are the types of chatbots?": "There are two main types of chatbots: rule-based chatbots that follow predefined scripts, and AI-powered chatbots that use natural language processing and machine learning.",

            "can chatbots understand natural language?": "Yes, advanced chatbots equipped with natural language processing (NLP) can understand and respond to natural language inputs, making interactions more conversational.",

            "what are some benefits of using chatbots?": "Benefits of chatbots include 24/7 availability, faster response times, cost savings in customer support, and improved user experiences.",

            "are there any limitations to chatbots?": "Chatbots may struggle with complex or nuanced conversations, and their effectiveness depends on the quality of their training data and algorithms.",

            "ow can businesses implement chatbots?": "Businesses can implement chatbots by developing custom solutions or using chatbot platforms and integrating them into their websites or messaging apps.",

            "what are some popular chatbot platforms?": "Popular chatbot platforms include Dialogflow, IBM Watson Assistant, Microsoft Bot Framework, and many others, each offering various features and capabilities.",

            "are chatbots replacing human customer support agents?": "Chatbots are often used to handle routine queries and tasks, but human agents are still essential for complex issues and providing a personalized touch in customer support.",

            "how can I create my own chatbot?": "You can create your own chatbot by using development frameworks, libraries, or no-code/low-code platforms that offer chatbot-building capabilities.",

            "Can you recommend a good restaurant nearby?": "I don't have access to your location, but you can use a restaurant review app or website to find highly-rated restaurants in your area.",

            "can you recommend a good restaurant nearby?": "I don't have access to your location, but you can use a restaurant review app or website to find highly-rated restaurants in your area.",

            "Do you have feelings?": "No, I'm just a computer program, so I don't have feelings or consciousness.",

            "do you have feelings?": "No, I'm just a computer program, so I don't have feelings or consciousness.",

            "What can you do?": "I can answer questions, provide information, and assist with various topics. Feel free to ask me anything!",

            "what can you do?": "I can answer questions, provide information, and assist with various topics. Feel free to ask me anything!",

            "How does this chatbot work?": "I use natural language processing and a database of information to understand and respond to your questions.",

            "how does this chatbot work?": "I use natural language processing and a database of information to understand and respond to your questions.",

            "where are you located?": "I exist in the digital realm, so I don't have a physical location. I'm here to assist you online.",

            "Where are you located?": "I exist in the digital realm, so I don't have a physical location. I'm here to assist you online.",

            "Can you help me with something?": "Of course! I'm here to assist you. What do you need help with?",

            "can you help me with something?": "Of course! I'm here to assist you. What do you need help with?",

            "What is your purpose?": "My purpose is to provide information and assist with answering your questions to the best of my knowledge.",

            "what is your purpose?": "My purpose is to provide information and assist with answering your questions to the best of my knowledge.",

            "what is your name?": "I'm a chatbot, so I don't have a name, but you can call me ChatBot.",

            "What is your name?": "I'm a chatbot, so I don't have a name, but you can call me ChatBot.",

            "how can you help me": "I can assist you with a wide range of tasks, from answering questions to providing recommendations and more. Just let me know what you need help with!",

            "what's the weather like today": " I'm not connected to real-time data, but you can check the weather in your location by using a weather app or website.",

            "what's the capital of Turkey": "The capital of Turkey is Istanbul.",

            "what's the capital of Pakistan": "The capital of Pakistan is Islamabad.",

            "how do I reset my password": "To reset your password, go to the 'Forgot Password' link on the login page and follow the instructions sent to your email.",

            "what's the current time": "I'm sorry, but I don't have access to real-time data. You can check the current time on your device or by searching online.",

            "recommend a movie to watch": "Sure! What genre of movie are you in the mood for? Comedy, drama, action, or something else?",

            "how do I contact customer support": "You can reach our customer support team by clicking the 'Contact Us' link on our website or by emailing support@example.com.",

            "can you help me with a math problem": "Of course! I'd be happy to help with your math problem. Please provide the details of the problem.",

            "what's the meaning of life": "The meaning of life is a profound philosophical question that people have pondered for centuries. It's a question that doesn't have a single, definitive answer and can vary from person to person.",

            "how can I improve my productivity": "Improving productivity can involve setting goals, staying organized, managing your time effectively, and eliminating distractions. Would you like some tips on specific productivity strategies?",

            "how does artificial intelligence work": "Artificial intelligence (AI) involves the use of computer systems to perform tasks that typically require human intelligence. It includes machine learning, neural networks, and algorithms that enable computers to learn from data and make decisions.",

            "what's the meaning of a specific word": "I can help you find the meaning of words! Just type the word you'd like to know more about, and I'll provide you with its definition.",

            "bye": "Goodbye! Feel free to return if you have more questions.",

            "How are you": "I'm just a bot, but I'm here to help!",

            "What is your name": "I'm a chatbot, so I don't have a name, but you can call me ChatBot.",

            "How can you help me": "I can assist you with a wide range of tasks, from answering questions to providing recommendations and more. Just let me know what you need help with!",

            "What's the weather like today": " I'm not connected to real-time data, but you can check the weather in your location by using a weather app or website.",

            "What's the capital of Turkey": "The capital of Turkey is Istanbul.",

            "What's the capital of Pakistan": "The capital of Pakistan is Islamabad.",

            "How do I reset my password": "To reset your password, go to the 'Forgot Password' link on the login page and follow the instructions sent to your email.",

            "What's the current time": "I'm sorry, but I don't have access to real-time data. You can check the current time on your device or by searching online.",

            "Recommend a movie to watch": "Sure! What genre of movie are you in the mood for? Comedy, drama, action, or something else?",

            "How do I contact customer support": "You can reach our customer support team by clicking the 'Contact Us' link on our website or by emailing support@example.com.",

            "Can you help me with a math problem": "Of course! I'd be happy to help with your math problem. Please provide the details of the problem.",

            "What's the meaning of life": "The meaning of life is a profound philosophical question that people have pondered for centuries. It's a question that doesn't have a single, definitive answer and can vary from person to person.",

            "How can I improve my productivity": "Improving productivity can involve setting goals, staying organized, managing your time effectively, and eliminating distractions. Would you like some tips on specific productivity strategies?",

            "How does artificial intelligence work": "Artificial intelligence (AI) involves the use of computer systems to perform tasks that typically require human intelligence. It includes machine learning, neural networks, and algorithms that enable computers to learn from data and make decisions.",

            "What's the meaning of a specific word": "I can help you find the meaning of words! Just type the word you'd like to know more about, and I'll provide you with its definition.",

            "Bye": "Goodbye! Feel free to return if you have more questions.",

            "tell me about famous scientists in history?": "There have been many famous scientists throughout history, including Albert Einstein, Isaac Newton, Marie Curie, Charles Darwin, and Galileo Galilei, who made significant contributions to various fields of science.",

            "Tell me about famous scientists in history?": "There have been many famous scientists throughout history, including Albert Einstein, Isaac Newton, Marie Curie, Charles Darwin, and Galileo Galilei, who made significant contributions to various fields of science.",

            "How does photosynthesis work?": "Photosynthesis is the process by which plants convert sunlight into energy. It involves the absorption of light by chlorophyll and the conversion of carbon dioxide and water into glucose and oxygen.",

            "how does photosynthesis work?": "Photosynthesis is the process by which plants convert sunlight into energy. It involves the absorption of light by chlorophyll and the conversion of carbon dioxide and water into glucose and oxygen.",
        };

        const response = responses[userMessage] || "I didn't understand that. Please ask another question.";
        addBotMessage(response);
    }
});

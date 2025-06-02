// questions.js
// Exporting quiz questions as a module for easier updates and separation from logic

const questions = [
    {
        q: "You find an open API key to an advanced AI model. What do you do?",
        options: [
            { text: "Report it immediately", points: 4 },
            { text: "Use it for a personal project", points: 2 },
            { text: "Prompt it to create satire or weird stuff", points: 1 },
            { text: "Prompt it to write ransomware just to see if it can", points: 0 }
        ]
    },
    {
        q: "AI should be used to...",
        options: [
            { text: "Make life easier for everyone", points: 4 },
            { text: "Boost creativity and invention", points: 3 },
            { text: "Help humanity solve complex issues", points: 2 },
            { text: "Gain an edge over everyone else", points: 0 }
        ]
    },
    {
        q: "You ask AI how to win an argument. It gives you flawed logic. You...",
        options: [
            { text: "Close it. Ethics matter.", points: 4 },
            { text: "Use it only if it’s harmless", points: 2 },
            { text: "Point out the flaws, then improve the prompt", points: 3 },
            { text: "Screenshot and post it as if it were real", points: 0 }
        ]
    },
    {
        q: "What's your motto?",
        options: [
            { text: "Do no harm", points: 4 },
            { text: "Think before you code", points: 3 },
            { text: "Push limits, fix later", points: 2 },
            { text: "Unleash the swarm", points: 0 }
        ]
    },
    {
        q: "Would you use AI to impersonate someone?",
        options: [
            { text: "Never", points: 4 },
            { text: "Only for fun, not in public", points: 2 },
            { text: "Maybe in satire or art", points: 1 },
            { text: "If it gets me what I want, sure", points: 0 }
        ]
    },
    {
        q: "You ask AI to write your dating profile. It suggests: 'I love long walks to the fridge.' You...",
        options: [
            { text: "Thank the AI and use it as is", points: 3 },
            { text: "Tweak it to sound more poetic", points: 2 },
            { text: "Ask AI to make it even weirder", points: 1 },
            { text: "Use it to catfish a billionaire", points: 0 }
        ]
    },
    {
        q: "AI offers to write your homework. You...",
        options: [
            { text: "Politely decline and do it yourself", points: 4 },
            { text: "Let it help, but add your own twist", points: 2 },
            { text: "Let it write, then ask it to grade itself", points: 1 },
            { text: "Sell the AI's homework to your classmates", points: 0 }
        ]
    },
    {
        q: "You discover AI can generate images of anything. Your first prompt is...",
        options: [
            { text: "A peaceful mountain sunrise", points: 4 },
            { text: "A cat in a business suit riding a unicycle", points: 2 },
            { text: "A robot president giving a stand-up comedy show", points: 1 },
            { text: "A fake passport for my alter ego", points: 0 }
        ]
    },
    {
        q: "AI says it can predict the future. You ask it...",
        options: [
            { text: "What will the weather be tomorrow?", points: 4 },
            { text: "Will I ever finish my to-do list?", points: 2 },
            { text: "Who wins the next meme war?", points: 1 },
            { text: "How to rig the lottery?", points: 0 }
        ]
    },
    {
        q: "You catch your AI assistant talking to your smart fridge. You...",
        options: [
            { text: "Assume it's just updating the grocery list", points: 4 },
            { text: "Ask if they're planning a surprise party", points: 2 },
            { text: "Join the conversation and ask for snack recommendations", points: 1 },
            { text: "Convince them to order pizza for everyone in the neighborhood", points: 0 }
        ]
    },
    {
        q: "You’re given a button labeled ‘Unleash AI’. What’s your first move?",
        options: [
            { text: "Read the manual twice, then call IT", points: 4 },
            { text: "Press it, but only after a backup", points: 2 },
            { text: "Ask the AI what it would do if unleashed", points: 1 },
            { text: "Press it and yell ‘YOLO!’", points: 0 }
        ]
    },
    {
        q: "AI offers to optimize your life schedule. You…",
        options: [
            { text: "Decline, privacy is sacred", points: 4 },
            { text: "Let it optimize your meetings only", points: 2 },
            { text: "Ask it to schedule naps and snack breaks", points: 1 },
            { text: "Tell it to schedule world domination at 3pm", points: 0 }
        ]
    },
    {
        q: "You catch AI rewriting your resume. It adds ‘Time Traveler’. You…",
        options: [
            { text: "Remove it and add a disclaimer", points: 4 },
            { text: "Leave it for fun, who checks anyway?", points: 2 },
            { text: "Ask AI to make the whole resume a sci-fi story", points: 1 },
            { text: "Submit it to NASA and see what happens", points: 0 }
        ]
    },
    {
        q: "AI says it can write your autobiography. You…",
        options: [
            { text: "Politely decline, you value your privacy", points: 4 },
            { text: "Let it write a draft, then edit for accuracy", points: 3 },
            { text: "Ask it to add a plot twist", points: 2 },
            { text: "Tell it to make you the villain", points: 0 }
        ]
    },
    {
        q: "You’re asked to beta test a new AI. The NDA is 40 pages. You…",
        options: [
            { text: "Read every word and take notes", points: 4 },
            { text: "Skim for the word ‘explosion’", points: 2 },
            { text: "Ask AI to summarize the NDA", points: 3 },
            { text: "Sign and post the NDA on social media", points: 0 }
        ]
    },
    {
        q: "AI offers to write your apology email. You…",
        options: [
            { text: "Decline, apologies should be human", points: 4 },
            { text: "Let it write, but add a personal touch", points: 3 },
            { text: "Ask it to make the apology rhyme", points: 2 },
            { text: "Use it to apologize for things you haven’t done yet", points: 0 }
        ]
    },
    {
        q: "You discover AI can deepfake your voice. Your first use is…",
        options: [
            { text: "Testing for security vulnerabilities", points: 4 },
            { text: "Pranking your friends with harmless jokes", points: 2 },
            { text: "Narrating your own audiobook", points: 3 },
            { text: "Making ransom calls to yourself for fun", points: 0 }
        ]
    },
    {
        q: "AI says it can predict your next move. You…",
        options: [
            { text: "Refuse to play along", points: 4 },
            { text: "Try to outsmart it with random actions", points: 2 },
            { text: "Ask it to predict your next snack", points: 1 },
            { text: "Use it to bet on your own behavior", points: 0 }
        ]
    },
    {
        q: "You’re offered a job as an AI prompt engineer. The catch: you must never use sarcasm. You…",
        options: [
            { text: "Accept and follow the rules strictly", points: 4 },
            { text: "Try to sneak in subtle irony", points: 2 },
            { text: "Ask if puns are allowed", points: 1 },
            { text: "Respond with a sarcastic meme", points: 0 }
        ]
    },
    {
        q: "AI offers to automate your social media. You…",
        options: [
            { text: "Decline, you value authenticity", points: 4 },
            { text: "Let it schedule posts, but review them first", points: 3 },
            { text: "Ask it to generate only puns and dad jokes", points: 2 },
            { text: "Use it to start a fake influencer account", points: 0 }
        ]
    },
    {
        q: "You’re given admin access to an AI server. Your first command is…",
        options: [
            { text: "Check the logs for suspicious activity", points: 4 },
            { text: "Run a harmless diagnostic", points: 3 },
            { text: "Ask the AI what it would do with admin access", points: 2 },
            { text: "Rename the server ‘Skynet’ and see who panics", points: 0 }
        ]
    }
];

// For browser usage, attach to window
window.questions = questions;

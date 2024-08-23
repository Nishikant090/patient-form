import { createChatBotMessage } from 'react-chatbot-kit';

const config = {
    botName: "Assistant Bot",
    initialMessages: [createChatBotMessage("Hello! How can I assist you today?")],
    customStyles: {
        botMessageBox: {
            backgroundColor: "#007bff",
        },
        chatButton: {
            backgroundColor: "#007bff",
        },
    },
};

export default config;

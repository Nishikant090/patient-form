class MessageParser {
    constructor(actionProvider) {
        this.actionProvider = actionProvider;
    }

    parse(message) {
        const lowerCaseMessage = message.toLowerCase();

        if (lowerCaseMessage.includes("help")) {
            this.actionProvider.handleHelp();
        }
        // Add more conditions here for different responses
    }
}

export default MessageParser;

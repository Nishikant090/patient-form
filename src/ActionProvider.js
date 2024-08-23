class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
        this.createChatBotMessage = createChatBotMessage;
        this.setState = setStateFunc;
    }

    handleHelp = () => {
        const message = this.createChatBotMessage("Sure, I am here to help! What do you need assistance with?");
        this.setState((prev) => ({
            ...prev,
            messages: [...prev.messages, message],
        }));
    };
}

export default ActionProvider;

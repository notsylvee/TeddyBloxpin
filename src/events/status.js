module.exports = {
    name: "messageCreate",
    async execute(message) {
        if (!message.channel.id === `1359404696149819412`) return;

        client.user.setPresence({
              status: "online",
              activities: [
                {
                  type: ActivityType.Custom,
                  name: "customstatus",
                  state: "Will you be my friend?",
                },
              ],
            });
    }
}
const { ActivityType } = require("discord.js");

module.exports = {
  name: "ready",
  once: true,
  async execute(client) {
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
  },
};
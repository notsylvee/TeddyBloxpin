const fs = require("fs/promises");

module.exports = {
    data: {
        name: "voiceline",
        description: "Sends a random Teddy Bloxpin voiceline",
        "integration_types": [0, 1],
        "contexts": [0, 1, 2]
    },
    async execute(interaction) {
        const secret = Math.random() * 100;
        const voicelinesJsonData = await fs.readFile("data/voicelines.json", {encoding: "utf8"});
        const voicelinesMap = JSON.parse(voicelinesJsonData);
        let voicelines = voicelinesMap["voicelines"];
        if (secret > 98) voicelines = voicelinesMap["secret"];
        const voiceline = voicelines[Math.floor(Math.random() * voicelines.length)];
    
        await interaction.reply({
            content: `${voiceline.text}`,
            files:[{
                attachment: `sounds/${voiceline.path}.wav`,
                name: `${voiceline.path}.wav`
            }],
            ephemeral: false
        });
      },
}
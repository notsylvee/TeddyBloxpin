module.exports = {
    data: {
        name: "voiceline",
        description: "Sends a random Red Teddy voiceline",
        "integration_types": [0, 1],
        "contexts": [0, 1, 2]
    },
    async execute(interaction) {
        const secret = Math.random() * 100;
        let voicelines = "";
        if (secret < 99) {
            voicelines = [
                "I love spending time with you!",
                "Let's be friends!",
                "Will you be my friend?",
                "I wub you!",
                "I need a hug!",
            ]
        } else {
            voicelines = [
                "-# It's better to stay awake. You don't want to meet *her*, do you?",
                "-# Don't plug my nose, I'll start screaming! Hehe!",
                "-# Things feel a lot more strange now, wouldn't you say?",
                "-# My ligaments, all in place, it's better that way.",
                "-# Let's be friends in the next state of life.",
                "-# I need a way out.",
                "-# My heart rises and falls, all, day, long.",
                "-# There's a little *smiling rock* inside all of us.",
                "-# Trees grow in everyone's hearts.",
                "-# I can't wait to go home with you, even if you never find it.",
                "-# My button eyes distract me from seeing bad things.",
                "-# I love spending time in this agonizing rectangle with you."
            ]
        }

        const voiceline = voicelines[Math.floor(Math.random() * voicelines.length)];
    
        await interaction.reply({ content: `${voiceline}`, ephemeral: false });
      },
}
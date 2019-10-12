# PHANTOM FORCES BOT
## Random Loadout Generator

![alt text](https://cdn.discordapp.com/attachments/575359683448143893/602947233507311670/pic01.jpg)

Default Prefix: **$**

> Commands:
+ Help
+ Random

# Requirements:
1. Node.js & NPM (preferably the latest versions)
2. A Discord Bot App w/ a valid token
read here: [Creating a discord bot & getting a token
](https://github.com/reactiflux/discord-irc/wiki/Creating-a-discord-bot-&-getting-a-token)
3. Understanding of Javascript/Node.js ecosystem.
4. This bot uses the Discord.js library [Discord.js](https://discord.js.org/#/docs/main/stable/general/welcome)


# Setup:
1. Paste your token in the `botconfig.json` file where it says "discord_bot_token_here".
2. Run `npm install` from terminal/console to install packages from `package.json`
4. Start the bot by running `node bot`.
5. That's It!

# Creating/Updating Weapons:
- Each PF weapon is under `/weapons/primary` in it's own file with the file name corresponding to the weeapon name (this makes it easier to scroll thru and find weapons for updating).
- Each weapon file exports an object (follow the template below to create/update new weapons):
- *leave array empty if there are no unique attachmensts for this weapon*
```js
module.exports = {
    name: 'Name of Weapon',
    rank: 'Rank Number of Weapon',
    attachment: {
        optic: ['optic attachments  that are', 'unique to this weapon'],
        barrel: ['barrel attachments that are', 'unique to this weapon'],
        underbarrel: ['underbarrel attachments that are', 'unique to this weapon'],
        other: ['other attachments that are', 'unique to this weapon']
    }
};
```

# Weapon Attachments:
- Weapon Attachments that are shared across all weapons is located under `/weapons/primaryAttach/primaryAttachments.js`
- These attachements can be attached to all primary weapons and should not be altered unless Stylis removes or adds new attachments that are universal.

# Misc (WIKI / Hosting ):
- Ideally you'd want to have the weapons saved in a database and just pull their properties from there. However PF / Stylis Studios doesn't provide any API to get weapon information.
- The next best thing to lookup the weapons from the PF Wiki as well as looking in the actual game
- PF Wiki: [Phantom Forces Wiki](https://roblox-phantom-forces.fandom.com/wiki/Phantom_Forces_Wiki)
- If you want to host the bot it's recommended you use a vps (Digital Ocean or AWS).
*hint: you can use the GITHUB STUDENT PACK to receive Digital Ocean credits for hosting*
**DO NOT USE GLITCH/HEROKU OR ANY OTHER "FREE" HOSTING SERVICE, THESE TEND TO BE UNRELIABLE (Discord has blacklisted these sites in the past)**

# OTHER:
Q: What about secondary weapons?
A: You'd have to do that yourself, It's recommended you follow the same structure as primary weapons (secondary folder with secondary weapon files & secondary attachments that are shared across all secondary weapons)

Q: The bot isn't working!
A: You can contact me on Discord `midknightmare#6666` or Twitter `@midknightmare` for some help but I won't hold your hand either.


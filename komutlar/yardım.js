const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const yardım = new Discord.MessageEmbed()
.setColor("BLUE")
.setAuthor("UptimeBot")
.setTitle("")
 .setTimestamp()
.setDescription("= UptimeBot Komutlar =")
.setImage("https://cdn.glitch.com/cf88236b-f3f8-4b93-9d6b-b7463eb261d8%2Ff31ae3bc-8a60-47ea-ba91-1fa1fb839f2c.image.png?v=1610457887207")
message.channel.send(yardım)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ["help","y"],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'yardım',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!yardım'
}
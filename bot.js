const Discord = require("discord.js");
const client = new Discord.Client();
client.on('ready', () => {
    client.user.setActivity('BH TEAM | Beta', { type: 'WATCHING' });
  console.log('Im Ready v1.1');
});

var Prefix = ".";

client.on('message', message => { //bc
        if(!message.channel.guild) return;
    if(message.content.startsWith('.pbc')) {
    if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
    if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
    let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
    let copy = "↪ 𝘽𝙃 | 𝐁𝐥𝐚𝐜𝐤 𝐇𝐨𝐥𝐞 ⭐";
    let request = `Requested By ${message.author.username}`;
    if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(`**هل أنت متأكد من إرسالك البرودكاست؟ \nمحتوى البرودكاست:** \` ${args}\``).then(msg => {
    msg.react('✅')
    .then(() => msg.react('❌'))
    .then(() =>msg.react('✅'))

    let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
    let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
    let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
    let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
    reaction1.on("collect", r => {
    message.channel.send(`**☑ | تم ارسال البرودكاست لـ ${message.guild.members.size} عضو**`).then(m => m.delete(5000));
    message.guild.members.forEach(m => {
    var bc = new
    Discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle('Broadcast')
    .addField('Server', message.guild.name)
    .addField('Sender', message.author.username)
    .addField('Message', args)
    .setThumbnail(message.author.avatarURL)
    .setFooter(copy, Rocket.user.avatarURL);
    m.send({ embed: bc })
    msg.delete();
    })
    })
    reaction2.on("collect", r => {
    message.channel.send(`**تم الغاء البرودكاست.**`).then(m => m.delete(5000));
    msg.delete();
    })
    })
    }
    });
	client.on('message', message => {//Broadcast
if (message.content.split(' ')[0] == '.bc')
 message.guild.members.forEach( member => {
         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
		 message.react("✅")
member.send( `${member}, ` + message.content.substr(3));
                                                            message.delete(1500);
															
});
});
client.on('message', msg => {
  if (msg.content === 'تسجيل دخول') {
    msg.reply('تم تسجيل دخولك بنجاح ✅');
  }
});
client.on('message', msg => {
  if (msg.content === 'تسجيل خروج') {
    msg.reply('تم تسجيل خروجك بنجاح ✅');
  }
});
client.on('message', msg => {
  if (msg.content == 'رابط') {
    msg.reply('الرابط الرسمي لسيرفر الثقب الاسود👈 https://discord.gg/EMAetr9');
  }
});
client.on('message', msg => {
  if (msg.content == 'ip') {
    msg.reply('👷السيرفر قيد التطوير');
  }
});
client.on('message', msg => {
  if (msg.content == 'Ip') {
    msg.reply('👷السيرفر قيد التطوير');
  }
});
client.on('message', message => {
    if (message.content === ".avatar") {
    message.reply(message.author.avatarURL); 
    }
});
client.on("message", message => {
    var prefix = ".";
 
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "clear")) {
   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**ليس لديك صلاحيات**');
        var msg;
        msg = parseInt();
      
      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "Done | تــم",
        color: 0x06DF00,
        description: "تم مسح الرسائل بنجاح",
		
      }}).then(msg => {msg.delete(3000)});
                          }

     
});
client.login(process.env.BOT_TOKEN);//By Zy4d

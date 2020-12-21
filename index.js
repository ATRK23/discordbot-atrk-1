const Discord = require('discord.js') 
const client = new Discord.Client();
const config = require("./config.json")

var logChannelId = (config.logChannelId);
var prefix = (config.prefix);


//activité

client.on("ready", () => {
  var game = ('ferme ta gueule') //activité 
  var how = ("PLAYING")
  client.user.setActivity(game, { type: how});
   // game activity, PLAYING STREAMING LISTENING WATCHING   { type: ""}
   console.clear();
   console.log(`connected`);
  client.channels.cache.get(logChannelId).send('\nConnecté \nActivity mise sur   ' + how + '   ' + '"' + game + '"');
});



//presence role EN TRAIN DE JOUER

client.on('presenceUpdate', (oldMember, newMember) => {
  const guild = newMember.guild;
  const playingRole = guild.roles.find(role => role.id === '591551068614164480');

  if (newMember.user.bot || newMember.presence.clientStatus === 'mobile'  || newMember.presence.clientStatus === 'web' || oldMember.presence.status !== newMember.presence.status) return;

  const oldGame = oldMember.presence.game && [0, 1].includes(oldMember.presence.game.type) ? true : false;
  const newGame = newMember.presence.game && [0, 1].includes(newMember.presence.game.type) ? true : false;

  if (!oldGame && newGame) {         // Started playing.
    newMember.addRole(playingRole)
      .then(() => console.log(`${newMember.user.tag} a commencé à jouer et été ajouté au rôle "${playingRole.name}".`))
      .catch(console.error);
  } else if (oldGame && !newGame) {  // Stopped playing.
    newMember.removeRole(playingRole)
      .then(() => console.log(`${newMember.user.tag} a été supprimé du rôle "${playingRole.name}".`))
      .catch(console.error);
  }
});

//pingpong

 client.on('message', message => {
  if (message.content === 'ping') {
    message.delete(15000)
    message.reply('```pong !```')
    .then(function (message) {
      message.react("👌")
      message.delete(15000)
     })
    .catch(function() {
    })
     console.log('ping pong effectué par ' + message.member.user.tag);
     client.channels.cache.get(logChannelId).send(message.member.user + 'à effectué ping pong');
  };
  
});



// commande invite

client.on("message", message => {
  if(message.content ===  prefix + "invite"){
    message.delete(1000);
    message.author.send("Et voilà ! Quelques trucs pour t'aider à inviter tes  amis !\n\nVoici le lien d'invitation :\n\nhttps://discordapp.com/invite/3kX6Zpu\n\n Et voici le code d'invitation : 3kX6Zpu")
    .then((msg) => {
      msg.delete(120000)
    })
    .catch();console.log('-\n' + prefix + 'invite effectué par ' + message.member.user.tag);
    client.channels.cache.get(logChannelId).send(prefix + 'invite effectué par ' + message.member.user);
  };
});



 //j'ai pété 1
 
 client.on('message', message => {
   if (message.content === prefix + 'pt1') {
     var VC = message.member.voiceChannel;
     message.delete(1000);
     if (!VC)
       return message.reply("Tu dois d'abord être connecté à un salon audio !")
       .then(client.channels.cache.get(logChannelId).send(prefix + 'pt1 échoué par ' + message.member.user.tag));
    VC.join()
      .then(connection => {
          const dispatcher = connection.playFile('./assets/peter1.mp3');
          dispatcher.on("end", end => {VC.leave();});
          
          
      
      })
      .catch(console.error);console.log('PT 1 effectué PAR ' + message.member.user.tag);
      client.channels.cache.get(logChannelId).send(prefix + 'pt1 effectué par ' + message.member.user);
   };
 });



 //j'ai pété 2

 client.on('message', message => {
  if (message.content === prefix + 'pt2') {
    var VC = message.member.voiceChannel;
    message.delete(1000);
    if (!VC)
      return message.reply("Tu dois d'abord être connecté à un salon audio !")
      .then(client.channels.cache.get(logChannelId).send(prefix + 'pt2 échoué par ' + message.member.user));
   VC.join()
     .then(connection => {
         const dispatcher = connection.playFile('./assets/peter2.mp3');
         dispatcher.on("end", end => {VC.leave();});
         
         
     
     })
     .catch(console.error);console.log('PT 2 effectué par ' + message.member.user.tag);
     client.channels.cache.get(logChannelId).send(prefix + 'pt2 effectué par ' + message.member.user);
  };
});




//j'ai pété 3

client.on('message', message => {
  if (message.content === prefix + 'pt3') {
    var VC = message.member.voiceChannel;
    message.delete(1000);
    if (!VC)
      return message.reply("Tu dois d'abord être connecté à un salon audio !")
      .then(client.channels.cache.get(logChannelId).send(prefix + 'pt3 échoué par ' + message.member.user));
   VC.join()
     .then(connection => {
         const dispatcher = connection.playFile('./assets/peter3.mp3');
         dispatcher.on("end", end => {VC.leave();});
         
         
     
     })
     .catch(console.error);console.log('PT 2 effectué par ' + message.member.user.tag);
     client.channels.cache.get(logChannelId).send(prefix + 'pt3 effectué par ' + message.member.user);
  };
});




//nils

client.on('message', message => {
  if (message.content === prefix + 'nils') {
    var VC = message.member.voiceChannel;
    message.delete(1000);
    if (!VC)
      return message.reply("Tu dois d'abord être connecté à un salon audio !")
      .then(client.channels.cache.get(logChannelId).send(prefix + 'nils échoué par ' + message.member.user));
   VC.join()
     .then(connection => {
         const dispatcher = connection.playFile('./assets/nils.mp3');
         dispatcher.on("end", end => {VC.leave()});
         
     
     })
     .catch(console.error);console.log('Nils effectué par ' + message.member.user.tag);
     client.channels.cache.get(logChannelId).send(prefix + 'nils effectué par ' + message.member.user);
  };
});



//oh bah jui ravi

client.on('message', message => {
  if (message.content === prefix + 'ravi') {
    var VC = message.member.voiceChannel;
    message.delete(1000);
    if (!VC)
      return message.reply("Tu dois d'abord être connecté à un salon audio !")
      .then(client.channels.cache.get(logChannelId).send(prefix + 'ravi échoué par ' + message.member.user));
   VC.join()
     .then(connection => {
         const dispatcher = connection.playFile('./assets/OhRavi.mp3');
         dispatcher.on("end", end => {VC.leave()});
         
     
     })
     .catch(console.error);console.log('Ravi effectué par ' + message.member.user.tag);
     client.channels.cache.get(logChannelId).send(prefix + 'ravi effectué par ' + message.member.user);

  };
});




//tagrosse mere la pute

client.on('message', message => {
  if (message.content === prefix + 'tchon') {
    var VC = message.member.voiceChannel;
    message.delete(1000);
    if (!VC)
      return message.reply("Tu dois d'abord être connecté à un salon audio !")
      .then(client.channels.cache.get(logChannelId).send(prefix + 'tchon échoué par ' + message.member.user));
   VC.join()
     .then(connection => {
         const dispatcher = connection.playFile('./assets/TchonSylDur.mp3');
         dispatcher.on("end", end => {VC.leave()});
         
     
     })
     .catch(console.error);console.log('tchon effectué par ' + message.member.user.tag);
     client.channels.cache.get(logChannelId).send(prefix + 'tchon effectué par ' + message.member.user);
  };
});


//c jason
 
client.on('message', message => {
  if (message.content === prefix + 'jason') {
    var VC = message.member.voiceChannel;
    message.delete(1000);
    if (!VC)
      return message.reply("Tu dois d'abord être connecté à un salon audio !")
      .then(client.channels.cache.get(logChannelId).send(prefix + 'jason échoué par ' + message.member.user));
   VC.join()
     .then(connection => {
         const dispatcher = connection.playFile('./assets/jason.mp3');
         dispatcher.on("end", end => {VC.leave();});
         console.log('Jason terminé')
         
     
     })
     .catch(console.error);console.log('jason effectué par ' + message.member.user.tag);
     client.channels.cache.get(logChannelId).send(prefix + 'jason effectué par ' + message.member.user);
  };
});


// 90 1

client.on('message', message => {
  if (message.content === prefix + '90s1') {
    var VC = message.member.voiceChannel;
    message.delete(1000);
    if (!VC)
      return message.reply("Tu dois d'abord être connecté à un salon audio !")
      .then(client.channels.cache.get(logChannelId).send(prefix + '90s1 échoué par ' + message.member.user));
   VC.join()
     .then(connection => {
         const dispatcher = connection.playFile('./assets/90s1.mp3');
         dispatcher.on("end", end => {VC.leave();});
         console.log('Jason terminé')
         
     
     })
     .catch(console.error);console.log('jason effectué par ' + message.member.user.tag);
     client.channels.cache.get(logChannelId).send(prefix + '90s1 effectué par ' + message.member.user);
  };
});




// 90 2

client.on('message', message => {
  if (message.content === prefix + '90s2') {
    var VC = message.member.voiceChannel;
    message.delete(1000);
    if (!VC)
      return message.reply("Tu dois d'abord être connecté à un salon audio !")
      .then(client.channels.cache.get(logChannelId).send(prefix + '90s2 échoué par ' + message.member.user));
   VC.join()
     .then(connection => {
         const dispatcher = connection.playFile('./assets/90s2.mp3');
         dispatcher.on("end", end => {VC.leave();});
         console.log('Jason terminé')
         
     
     })
     .catch(console.error);console.log('jason effectué par ' + message.member.user.tag);
     client.channels.cache.get(logChannelId).send(prefix + '90s2 effectué par ' + message.member.user);
  };
});

//bfonjoure

 
client.on('message', message => {
  if (message.content === prefix + 'bjr') {
    var VC = message.member.voiceChannel;
    message.delete(1000);
    if (!VC)
      return message.reply("Tu dois d'abord être connecté à un salon audio !")
      .then(client.channels.cache.get(logChannelId).send(prefix + 'bjr échoué par ' + message.member.user));
   VC.join()
     .then(connection => {
         const dispatcher = connection.playFile('./assets/bjr.mp3');
         dispatcher.on("end", end => {VC.leave();});
         console.log('bjr terminé')
         
     
     })
     .catch(console.error);console.log('bjr effectué par ' + message.member.user.tag);
     client.channels.cache.get(logChannelId).send(prefix + 'bjr effectué par ' + message.member.user);
  };
});


//shut up eboy 

client.on('message', message => {
  if (message.content === prefix + 'eboy1') {
    message.delete(1000)
    message.channel.send('', {files: ["./assets/shutupeboy.JPG"]})
    .catch(function() {
    })
     console.log('shut up e-boy effectué par ' + message.member.user.tag);
     client.channels.cache.get(logChannelId).send(prefix + 'eboy1 effectué par ' + message.member.user);
  };
  
});



//ta di koi la

client.on('message', message => {
  if (message.content === prefix + 'koi1') {
    message.delete(1000)
    message.channel.send('', {files: ["./assets/tadikoila.JPG"]})
    .catch(function() {
    })
     console.log('ta di koi la effectué par ' + message.member.user.tag);
     client.channels.cache.get(logChannelId).send(prefix + 'koi1 effectué par ' + message.member.user);
  };
  
});


//nique les pd

client.on('message', message => {
  if (message.content === prefix + 'nikpd') {
    var VC = message.member.voiceChannel;
    message.delete(1000);
    if (!VC)
      return message.reply("Tu dois d'abord être connecté à un salon audio !")
      .then();
   VC.join()
     .then(connection => {
         const dispatcher = connection.playFile('./assets/niquelespd.mp3'); //emplacement du fichier a remplir juste après le point
         dispatcher.on("end", end => {VC.leave();});
         console.log('nikpd terminé')
         
     
     })
     .catch(console.error);console.log('nikpd effectué par ' + message.member.user.tag);
     client.channels.cache.get(logChannelId).send(prefix + 'nikpd effectué par ' + message.member.user);
  };
});



client.login(process.env.TOKEN);




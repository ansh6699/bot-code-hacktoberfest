const { db } = require("quick.eco");

function counter(message, client) {
  let channel = message.channel;
  let count = db.fetch(`counter_${message.guild.id}`);
  if (count === null) count = db.set(`counter_${message.guild.id}`, {
    number: 0,
    author: client.user.id
  });
  


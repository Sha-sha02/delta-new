const toMs = require('ms');

exports.run = {
usage: ['addjadibot'],
hidden: ['addbot'],
use: 'mention or reply',
category: 'jadibot',
async: async (m, { func, mecha }) => {
const [text1, text2] = m.text.split('|');
if (m.quoted) {
let user = global.db.users[m.quoted.sender]
let expire = m.text ? Date.now() + toMs(m.text) : 'PERMANENT'
if (typeof user == 'undefined') return m.reply('User data not found.')
if (user.jadibot) return m.reply(`@${m.quoted.sender.replace(/@.+/, '')} has become registered as a jadibot account.`)
user.jadibot = true;
user.expired.jadibot = expire;
m.reply(`Successfully added @${m.quoted.sender.replace(/@.+/, '')} to jadibot user`)
} else if (m.text) {
if (!text1) return m.reply(`Contoh : ${m.cmd} 62895415497664|30d`)
let number = isNaN(text1) ? (text1.startsWith('+') ? text1.replace(/[()+\s-]/g, '') : (text1).split('@')[1]) : text1
if (isNaN(number)) return m.reply('Invalid number.')
if (number.length > 15) return m.reply('Invalid format.')
let botnya = text1.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
let user = global.db.users[botnya]
let expire = text2 ? Date.now() + toMs(text2) : 'PERMANENT'
if (typeof user == 'undefined') return m.reply('User data not found.')
if (user.jadibot) return m.reply(`@${botnya.replace(/@.+/, '')} has become registered as a jadibot account.`)
user.jadibot = true;
user.limit += 99999;
user.expired.jadibot = expire;
m.reply(`Successfully added @${botnya.replace(/@.+/, '')} to jadibot user.`)
} else m.reply('Mention or Reply chat target.')
},
owner: true
}
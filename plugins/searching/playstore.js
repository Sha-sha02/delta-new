const axios = require('axios');
const cheerio = require('cheerio');

exports.run = {
usage: ['playstore'],
use: 'nama aplikasi',
category: 'searching',
async: async (m, { func, mecha, comand, text }) => {
  if (!m.text) return m.reply(func.example(comand, 'capcut'))
if (m.text.startsWith('@62')) return m.reply('Stress ??')
let wait = await mecha.sendMessage(m.chat, { text: global.mess.wait }, { quoted: m, ephemeralExpiration: m.expiration });
  let res = await PlayStore(m.text)
  res = res.map((v) => `*Nama:* ${v.nama}\n*Developer:* ${v.developer}\n*Rate:* ${v.rate}\n*Rate 2:* ${v.rate2}\n*Link:* ${v.link}\nLinkDev: ${v.link_dev}`).join`\n\n°°°°°°°°°°°°°°°°°°°°°°°°°°°°°\n\n`
  await mecha.sendMessage(m.chat, { text: `${res}`, edit: wait.key }, { quoted: m, ephemeralExpiration: m.expiration });
  },
limit: 3
}

const PlayStore = function(search) { 
   return new Promise(async (resolve, reject) => { 
     try { 
       const { data, status } = await axios.get(`https://play.google.com/store/search?q=${search}&c=apps`) 
       const hasil = [] 
       const $ = cheerio.load(data) 
       $('.ULeU3b > .VfPpkd-WsjYwc.VfPpkd-WsjYwc-OWXEXe-INsAgc.KC1dQ.Usd1Ac.AaN0Dd.Y8RQXd > .VfPpkd-aGsRMb > .VfPpkd-EScbFb-JIbuQc.TAQqTe > a').each((i, u) => { 
         const linkk = $(u).attr('href') 
         const nama = $(u).find('.j2FCNc > .cXFu1 > .ubGTjb > .DdYX5').text() 
         const developer = $(u).find('.j2FCNc > .cXFu1 > .ubGTjb > .wMUdtb').text() 
         const img = $(u).find('.j2FCNc > img').attr('src') 
         const rate = $(u).find('.j2FCNc > .cXFu1 > .ubGTjb > div').attr('aria-label') 
         const rate2 = $(u).find('.j2FCNc > .cXFu1 > .ubGTjb > div > span.w2kbF').text() 
         const link = `https://play.google.com${linkk}` 
  
         hasil.push({ 
           link: link, 
           nama: nama ? nama : 'No name', 
           developer: developer ? developer : 'No Developer', 
           img: img ? img : 'https://i.ibb.co/G7CrCwN/404.png', 
           rate: rate ? rate : 'No Rate', 
           rate2: rate2 ? rate2 : 'No Rate', 
           link_dev: `https://play.google.com/store/apps/developer?id=${developer.split(" ").join('+')}` 
         }) 
       }) 
       if (hasil.every(x => x === undefined)) return resolve({ developer: '@Zeltoria', mess: 'no result found' }) 
       resolve(hasil) 
     } catch (err) { 
       console.error(err) 
     } 
   }) 
 }
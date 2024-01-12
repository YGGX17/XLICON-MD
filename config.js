const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "258853324320"  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://salmanahmad:s4salmanyt@cluster0.szcj2eo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'xheikhsalman4422@gmail.com'
global.github = 'https://github.com/salmanytofficial/XLICON-MD'
global.location = 'Lahore Pak'
global.gurl = 'https://instagram.com/itz_shaikho/' // add your username
global.sudo = process.env.SUDO || '923184070915' 
global.devs = '923184070915';
global.website = 'https://github.com/salmanytofficial/XLICON-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/3c341828d86ee7a89c73f.jpg'
module.exports = {
  sessionName:  process.env.SESSION_ID ||  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ1BuN2ZnR1VxQ1o5TFVKZDg0ZHVGUzFkeXY0WERlOXkyUGMweHgzOUIzRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTlBPMW5jdC9kTVpsbDQxZGxmNkZFQVIxUjJ1YUtRZC91RFFleThDR1owWT0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyTUVRR3NxdjNBMThPMlRvVGl6Z3gxVnhIZnZ6VWgvWTcxZUIrV0pFUzJFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJOQ3Q5OWVPWnBscnpQWHdUU05wRFdtVWxEUnZIdnpGKzJUTmg2MFN4TTJRPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktLWGFKaG52THVsMDhHMGh1S1dTbTQ4d2JsT0UvOGY5TFM2OXVOVFM3bVE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9hKzZZZ2xCNTdieWdSYVVNZ2ozK2QxbHFwVnRHbEJwTjN6eTNyOGUrMG89In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTdEF3KzN3d08wU2tESGhIaWQrenJNaU1EbVkvSVM3UmFzZ0hrZ1NOQS9CeURrYmFjWXFTNXZ6RXA2V3c4a21hbXdEa1c2aHFhYk5RNS9QUFlHK0lEZz09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjE0MiwiYWR2U2VjcmV0S2V5IjoiL2Ird3I5YmQ2bDR0RjFFa1NNc0Vpajd5S0kxK0pqQ2pyYnhwQmVrTnNiQT0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiUGYyMWtHTTRRcG1LeVp3cnBMZGt4ZyIsInBob25lSWQiOiJiMTJjZmNiOS01NjhlLTQ4NTctODM5NC04MGNmODAyZjVlN2EiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQTFmeVFYRWJXN2hJRnVjclJIek5xR1RtRjVBPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJGN3M5eERxZjIxWHA5OHJKektXQ3ZadlBhZTg9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNQaWZtVk1Rek1tRnJRWVlCQT09IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ikp4elNMMjEvYlNVOTVoZVFQSFdSNkYrR3FXbktRMldiNDVrWHQ0dmlRVEU9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlRkUmVoRzJpRUljcXR4TEhoUE1kNjFFclFoM3ZaRzNabGwveDZJakEvOG1OVEI5RWN5dlduYjg0amFPbjhQWE1mOEltV3poSnFqVkNkWGlsWkdyNUJRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJLS0VCaFlDaHhOSjR4SC9lbUlPUFdtd0ptUWpOSDZ1NFBVelJ5OUVrbGoxbkZhczYyY1VGSWV2ZS8xTVhNOWpaektZYmpmUFg0UXA2RFZOWlJCOS9DQT09In0sIm1lIjp7ImlkIjoiMjU4ODUzMzI0MzIwOjM0QHMud2hhdHNhcHAubmV0In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1ODg1MzMyNDMyMDozNEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJTY2MwaTl0ZjIwbFBlWVhrRHgxa2VoZmhxbHB5a05sbStPWkY3ZUw0a0V4In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzA1MDc1OTIwfQ== ",  //PUT Session Id Here, 
  author:  process.env.PACK_AUTHER ||  'Kevin Genix',
  packname:  process.env.PACK_NAME || 'EMPERROR GX',
   
  botname:   process.env.BOT_NAME === undefined ? "GX KING" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'KEVINGENIX' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? true : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? true : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? 'I HAVE RESIN' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'GOJO',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})

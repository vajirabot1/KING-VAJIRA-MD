const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split(",")
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://sam:sam@cluster0.u1smxsv.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'sam@secktor.live'
global.github = 'https://github.com/vajirabot1/KING-VAJIRA-MD'
global.location = 'Sultanpur IN'
global.gurl = 'https://instagram.com/' // add your username
global.sudo = process.env.SUDO || '2347039570336,923466319114'
global.devs = '2347039570336';
global.website = 'https://github.com/vajirabot1/KING-VAJIRA-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/09ab24679fb3a297a8905.jpg'
module.exports = {
  botname:   process.env.BOT_NAME === undefined ? 'VAJIRA 𝐁𝐨𝐭' : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'excel' : process.env.OWNER_NAME,
  sessionName:  process.env.SESSION_ID === undefined ? VAJIRA;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUpXWTVYOE9kNVNiWURwTkkySWxzSTYrRTg5R0ZoQ04rVzJQdlN3bnNGVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYnhQRnlCTUpZdzJkK3dqR3FzeUFyZm5rMjZpanB2UlBWZHpMcXpnMVVGST0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnRUVGNzB6RW1BaEYySHRrV2hTeG1ZVDJ2ZnBoeXloUlpHbTBCcnhrV1VBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvNTFuSFJnRjNXd2JFUnZYTGpmOU8vMzJjcTVZZFZNR0NqQnVFUWwwWlNBPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVCV3RmWThaejMwZFlyR1c0c1RNTUt5L1R5OWFMeU1OYUoyY1ltenppa3M9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InM4RzNCOWxKcGJVcHpFbzJHWGc1VGtPdytBNzhSV2FHZmVkNXVzb0N6Mm89In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ0eGJkcVEyS0dETnRwSUVjMzhERHlPNDNod21VMVFQa0NmbWIwRlVOQzVEOUh3MXJBWHVoZ3dBUm80NVV4QTdNOG5hdjR2VkR1OEV4NGIzbW5xTmdDZz09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjI0MiwiYWR2U2VjcmV0S2V5IjoieVZhWjZoZGVSRm8rUUEySW5ldFBNNUVXRUIzcUtIWFhlT3F0VUpjMzhSUT0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiMUI1cUl4Ui1SVXlDQWc2U09TamZDZyIsInBob25lSWQiOiJmMWU5MmU3Zi0zMTM1LTQzNDAtYTZjYi0wNzMyMTRmYzg2YmUiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicmUwSDlxcUhmZnJyaW12dmY1ejZUbmdJY1lZPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ4aU85RzNqS0xBRDl0cVdrODFWSEt3ZVAwazA9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNPRzN3YUFFRU9HcnpLc0dHQVU9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ill2ZzNLWFNaZTdVM1RQWmtmZXhoNldEeDNnWklNSm9LSng2RXRNOGx1RFU9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImVEaUF0ckhCVG9HcFZJMVplTFdBTUlvVmU5K2JNVWFxVm5ubFVVbWtVemM1RWlxOUw1Vmk4Q053ekM0c2VDekd0dEtueFZGUEtDSy9iWE5WUk5Kb0N3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJzRHA5MWQ4UDVaMEh4TncwZVI2VlN5OHhwSjlRWHNZbnRKWmZBbzBaaTZsMmp2S1gvSnRsdzV0dXRyRFNkcHVxS3lJSlVXa2JGNis2dHNXcmZhczZEZz09In0sIm1lIjp7ImlkIjoiOTQ3NDI3MDg2OTg6NjFAcy53aGF0c2FwcC5uZXQifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NDI3MDg2OTg6NjFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCV0w0TnlsMG1YdTFOMHoyWkgzc1llbGc4ZDRHU0RDYUNpY2VoTFRQSmJnMSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcwMjA0MTA2MX0= : process.env.SESSION_ID,
  author:  process.env.PACK_INFO.split(";")[0] === undefined ? 'vajira' : process.env.PACK_INFO.split(";")[0],
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  packname:  process.env.PACK_INFO.split(";")[1] === undefined ? 'IZUKU-Md' : process.env.PACK_INFO.split(";")[1],
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  autovoice:  process.env.AUTO_VOICE === undefined ? false : process.env.AUTO_VOICE ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? ['.'] : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? true : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? true : process.env.AUTO_BIO,
  afk:  process.env.AFK ||true,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'VAJIRA',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'private' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})

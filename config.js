//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "smith712233@gmail.com";
global.location = "Johannesburg, South African";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://herrison:wells@cluster0.tqhtuou.mongodb.net/?retryWrites=true&w=majority";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/johannesburg";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://chat.whatsapp.com/KzkbanzOVj3FRTKPi8vQVV";
global.website = process.env.GURL || "https://chat.whatsapp.com/KzkbanzOVj3FRTKPi8vQVV";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "27656319889";
global.owner = process.env.OWNER_NUMBER || "27634624586";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4,https://telegra.ph/file/a22200a780671e0e32383.jpg";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMk1Ga3pycmtoVy85ZXBoZVJobkp4cUo2TjhxR2QzSmNFUU9yaUo1Wngxdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieXAra3dhcmp3M1NKN1B1eGZ3ZWJuQXc5S05YMDNIWjlRRkU1em15WXlSND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDSm5tQTNsaWJiY3dBNldXcDZRSFRQREV4T1pBRGJCY2JUdnRsT2JuN213PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ2dVB4MnRhd0lxeWVibmpSUG9qMjlPSndwRFdCeTAycUdvajdabXBsb2swPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1CQndacGR6c3A0RVd2RVNsL0kxOXNWNytoZDlUL0dtamZudzJVUGtuWGM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjFaWlFiVFBjeElVQUJBVTYvd2lLV1RpMGhXNnNnQlVOU0pNUllobno0em89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEF3K2owbUpPZFZlbnJTMUxTWG4xcjVFZXM1RGpUWnhSUitFOEhZSjJIUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib1kvdkdZN2c1ZGtaeERDNHc5Q0MyaU9QaFAyL3NoQXZodmNwdzgzQWhIZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZBd0RNNjdOOWNiSzRNRkw5bGNENDNTRFhuMXFCRFN4eTJ6alZxcFM3L1pZWDhMVGhNZGdqdEluT3hNMHVJMjdlOGQ4elNCTUN6NDNjM3VuTmhBdmlBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQyLCJhZHZTZWNyZXRLZXkiOiJMSGJyS3M5UWJ1QzdDbERsV0hrbUlLZFZPYkpOQTFTajJpSHovY3VjWWxjPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI2V3dDaFltc1NHV0o5LW9sd21DTzJ3IiwicGhvbmVJZCI6ImQwMWU1MzcwLTg4ZjUtNDEzMS05NTM0LWFmYWZmMzgwYjA0ZCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTcTVBZGlnVnNGdUpIVDA1L2pteGh3ekpHR3M9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNRYWIrVnZESzR2M1QxMkQ0ZCs0dWpZWXBoUT0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ01ySDMvY0VFTE92a2JnR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkorUUlLeFNQZlk3WXZXVXJPelRUWmZkaldkV0NsYzR2OEFhd2FTM1A0eFk9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjdRTk5aODliMTZvVmNyMEt6YkNYTWJrR2NnSUxWNEdYWEM1L0thYmJYQmdqUWNXTnRjaUlKcXBTcWxjLythWi9xT1dmQUVqbS9VODZaSUVkR3ZFdkJ3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJzMUhkSGJBYnVTQzJZZ0VydGhxZEVVb21iN0w5SVdJOEorTnJ3Z0F0WFNKczZmZzEvL2d5Uk1ENVhmQ20vWTNSRy9ubnc0S2xMZXI3WHIreW1xQTlnQT09In0sIm1lIjp7ImlkIjoiMjc2NTYzMTk4ODk6NUBzLndoYXRzYXBwLm5ldCJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNzY1NjMxOTg4OTo1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlNma0NDc1VqMzJPMkwxbEt6czAwMlgzWTFuVmdwWE9ML0FHc0drdHorTVcifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjgzMzc4NTYsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBS1hHIn0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});

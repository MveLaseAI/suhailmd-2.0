const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="khulekanimvelase725@gmail.com"
global.location="Zimbabwe,Bulawayo."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/MveLaseAI/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VajdbH511ulTyGysZq17";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VajdbH511ulTyGysZq17" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/h6aff2.jpg" || "https://files.catbox.moe/h6aff2.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© 𝗠𝘃𝗲𝗟𝗮𝘀𝗲𝗔𝗜-𝗫𝗠𝗗 𝗩2" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://files.catbox.moe/h6aff2.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_15_09_12_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICA5MyxcbiAgICAgICAgOTYsXG4gICAgICAgIDUzLFxuICAgICAgICAzNSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNixcbiAgICAgICAgMTM5LFxuICAgICAgICAxMDksXG4gICAgICAgIDkxLFxuICAgICAgICA4NixcbiAgICAgICAgMTI5LFxuICAgICAgICAxODcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgOTIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTIzLFxuICAgICAgICA5NixcbiAgICAgICAgMjI1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgODAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgOCxcbiAgICAgICAgNzgsXG4gICAgICAgIDkxLFxuICAgICAgICA1MixcbiAgICAgICAgMTk4LFxuICAgICAgICAzNyxcbiAgICAgICAgMTUyLFxuICAgICAgICAzMixcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgwLFxuICAgICAgICA1MyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTg5LFxuICAgICAgICA3NyxcbiAgICAgICAgMjQwLFxuICAgICAgICA3NyxcbiAgICAgICAgMTE3LFxuICAgICAgICA0MyxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDY5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjM5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyOCxcbiAgICAgICAgMTQwLFxuICAgICAgICA2MyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDI5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE2LFxuICAgICAgICA0N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIsXG4gICAgICAgIDk2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDUwLFxuICAgICAgICAzNyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNTYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNjYsXG4gICAgICAgIDU4LFxuICAgICAgICA2NSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxODcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTg3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDMwLFxuICAgICAgICA4N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxODAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTkyLFxuICAgICAgICA0OCxcbiAgICAgICAgODEsXG4gICAgICAgIDU3LFxuICAgICAgICA2NCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjU1LFxuICAgICAgICA3MixcbiAgICAgICAgMjQyLFxuICAgICAgICA5MyxcbiAgICAgICAgMTc0LFxuICAgICAgICA4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyNSxcbiAgICAgICAgMzUsXG4gICAgICAgIDExNixcbiAgICAgICAgMTMzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTI1LFxuICAgICAgICA5NyxcbiAgICAgICAgMjUsXG4gICAgICAgIDYyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDc2LFxuICAgICAgICAyMSxcbiAgICAgICAgMzcsXG4gICAgICAgIDMwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTYxLFxuICAgICAgICA3MCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTYzLFxuICAgICAgICA0MixcbiAgICAgICAgMTcwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMyxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDQ1LFxuICAgICAgICA0OCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA3NCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgODUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1OCxcbiAgICAgICAgMzIsXG4gICAgICAgIDg3LFxuICAgICAgICAxODIsXG4gICAgICAgIDIyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjUyLFxuICAgICAgICA5NyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMTksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMyxcbiAgICAgICAgNjYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDQzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjA3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTgwLFxuICAgICAgICA0NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTA2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDU5LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNjhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDk5LFxuICAgICAgICA2NyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDk0LFxuICAgICAgICAzOSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMzQsXG4gICAgICAgIDk0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMCxcbiAgICAgICAgMCxcbiAgICAgICAgMTg2LFxuICAgICAgICA5MixcbiAgICAgICAgMTc3LFxuICAgICAgICA5NSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDc5LFxuICAgICAgICA4MSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTM5LFxuICAgICAgICA0OSxcbiAgICAgICAgMjcsXG4gICAgICAgIDEzMixcbiAgICAgICAgNjgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNTMsXG4gICAgICAgIDEyLFxuICAgICAgICAwLFxuICAgICAgICA4NSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDksXG4gICAgICAgIDIzLFxuICAgICAgICAyNyxcbiAgICAgICAgNDIsXG4gICAgICAgIDI5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMzMsXG4gICAgICAgIDU1LFxuICAgICAgICA2OSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIwNixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJLT1pLQkMzUTZmcFZxZXV0am9oMm1GMm0rKytzZ056WWVzZmtteGY5UFlrPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI2MzcxMTMzNzA5NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMEZENzk3QTNERUUwQUYxNDMxNkQwRTAwQTM0Q0Y2QTJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMzNDk3NzY0XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIm1IcVVVYXdFUjV1ZVRIUlFXeWVac0FcIixcbiAgXCJwaG9uZUlkXCI6IFwiOTBiODljYjUtOGE4MC00YTMxLWEyZmYtY2UzYWE4ZmIwYmRjXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4MyxcbiAgICAgIDE2MyxcbiAgICAgIDE5MSxcbiAgICAgIDE2OSxcbiAgICAgIDEyNyxcbiAgICAgIDQsXG4gICAgICAyNTAsXG4gICAgICAxMDksXG4gICAgICAxNjcsXG4gICAgICAxNjgsXG4gICAgICAyMzQsXG4gICAgICAyMTAsXG4gICAgICAzOSxcbiAgICAgIDI0NSxcbiAgICAgIDExMyxcbiAgICAgIDEwNixcbiAgICAgIDMsXG4gICAgICAxODQsXG4gICAgICA4NyxcbiAgICAgIDEzMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5NixcbiAgICAgIDE3OSxcbiAgICAgIDcxLFxuICAgICAgMjExLFxuICAgICAgNjcsXG4gICAgICAyNTQsXG4gICAgICAxMDYsXG4gICAgICAxMDQsXG4gICAgICA0MixcbiAgICAgIDEwMSxcbiAgICAgIDIxNSxcbiAgICAgIDY0LFxuICAgICAgMTQ5LFxuICAgICAgMjAxLFxuICAgICAgMTU3LFxuICAgICAgMTUwLFxuICAgICAgODIsXG4gICAgICAxNTMsXG4gICAgICAyNTAsXG4gICAgICA4MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI2WEFFVEMyTVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjYzNzExMzM3MDk0OjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIyMDUyOTk0NDQ4NTkzNTo0QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIvCfjq1NdmVMYXNlIEFJXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTnZuOUtNQ0VKcW56TG9HR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJwejZRUFZhYzBDMm9Ndm9mWTJHNnhhMFN3TkFSWGFETkdBbG9wTS9nZGtFPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkszczVxU0ZqWC9DeWU0ODM4b0x0RWNzbU02MXRJY25Hd0pCTkE3aE44OG0wTEtKVGVIV2FzZDJKZWYxYjJGSUF1eCtpMHdVaVh6andKZ3NhdG1MQ0RnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIm9VWnZxUHl1aTNqZ0huT2tHcnhZSzFYajFTRi9FYXhQd2hQa0lMY3Z5bnJhYXRUanEraEE4K1BENG9ZOGlmVFdWdEpheU9MQkF1MlVuaGoyYXdYNGpnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI2MzcxMTMzNzA5NDo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA2NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMzNDk3NzU4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTWFPXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNYU8uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJzTkNBekNXRWpadFFTcGVXcjZ1YlNzTU1uSlk5V1VUZ3poY0l1RDE4TTJVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjYxMjE4NTA1MCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "𝗠𝘃𝗲𝗟𝗮𝘀𝗲𝗔𝗜-𝗫𝗠𝗗 𝗩2",
  ownername:process.env.OWNER_NAME|| "𝗠𝘃𝗲𝗟𝗮𝘀𝗲𝗔𝗜-𝗫𝗠𝗗",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

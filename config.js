/* ⚙️ Credits to:
* AzamiJs
* Elrebelde21
* GataNina-Li */

import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath, pathToFileURL } from 'url'

global.owner = [['524531287294', 'CuriosityBot-MD 🍧', true], ['447700168473', '👑 𝐎𝐰𝐧𝐞𝐫 👑', true], ['5217294888993'], ['5214531287294'], ['5492266466080'], ['5492266613038'], ['573012482597'], ['5215610314499'], ['51935531943'], ['33760536110'], ['59162714296'], ['5492964650915'], ['50558124470'], ['5214434703586'], ['18293132203'], ['573003025991']]

//BETA: Si quiere evitar escribir el número que será bot en la consola, agregué desde aquí entonces:
//Sólo aplica para opción 2 (ser bot con código de texto de 8 digitos)
global.botNumberCode = '' //Ejemplo: +59309090909
global.confirmCode = ''

global.suittag = ['5214531287294']
global.mods = []
global.prems = []

//Solo desarrolladores aprobados
global.isdev = [ /* ['5217294888993'], */ ['5214434703586'], ['5492266466080'], ['5492266613038'], ['573012482597'], ['5215610314499'], ['51935531943'], ['33760536110'], ['5492964650915'], ['50558124470']]

//Aqui encuentras los nombres del bot 
global.packname = '𝙔𝙖𝙧𝙩𝙚𝙭𝘽𝙤𝙩-𝙈𝘿 🍓'
global.author = '𝗬𝗮𝗿𝘁𝗲𝘅𝗕𝗼𝘁-𝗠𝗗'
global.wm = '𝖸𝖺𝗋𝗍𝖾𝗑 𝖡𝗈𝗍 - 𝖬𝖣'
global.wm2 = '𝗬𝖺𝗋𝗍𝖾𝗑 : 𝗕𝗈𝗍'
global.gatanina = '𝙂𝙖𝙩𝙖 𝘿𝙞𝙤𝙨 🐈'
global.cb = '𝘠𝘢𝘳𝘵𝘦𝘹𝘉𝘰𝘵'


//Las Versiones Y Entre Otros
global.vs = 'V2'
global.library = 'Baileys'
global.baileys = '@whiskeysockets/baileys'
global.lenguaje = 'Español'
global.menudi = ['⛶','❏','⫹⫺']
global.dev = 'GataNina-Li'
global.devnum = '+593 96 826 3524'

let file = fileURLToPath(import.meta.url)
watchFile(file, () => { unwatchFile(file)
console.log(chalk.yellow('Se actualizo el archivo config.js'))
import(`${file}?update=${Date.now()}`)
})

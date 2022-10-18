
//=====================================


require("./config")

const {
 BufferJSON, 
WA_DEFAULT_EPHEMERAL, 
downloadContentFromMessage, 
delay,
generateWAMessageFromContent, 
proto, 
generateWAMessageContent, 
WAProto, 
generateWAMessage, 
prepareWAMessageMedia, 
areJidsSameUser, 
getContentType, 
WAFlag 
} = require('@adiwajshing/baileys')


const zmans = require("@adiwajshing/baileys")
const uber = require('uberduck-api')
const fs = require('fs')
const yts = require('yt-search');
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const ffmpeg = require('fluent-ffmpeg');
const xa = require('xfarr-api')
const { Youtube } = require('ytdownloader.js')

const { mediafire } = require('./funções de cmd/funções/mediafire')

const {  imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./funções/exif') 

const { pornok, hentai } = require('./funções de cmd/funções/scraper')

const webp_mp4 = require("./funções de cmd/funções/webp_mp4.js");

const { validmove, setGame } = require('./funções de cmd/tictactoe');

const execute = util.promisify(require('child_process').exec)

const { pinterest } = require("./funções de cmd/funções/pinterest")

const { wallpaper } = require("./funções de cmd/funções/wallpaper")

const sotoy = JSON.parse(fs.readFileSync('./funções de cmd/funções/sotoy.json'));

const autoreact = JSON.parse(fs.readFileSync('./funções de cmd/funções/autoreact.json'))

const { palavrasANA } = require('./funções de cmd/funções/jogos.js');

const { infobemvindo } = require('./funções de cmd/funções/infobv.js');

const welcome_group2 = JSON.parse(fs.readFileSync('./funções de cmd/grupos/welcomegp2.json'));

const bye_group2 = JSON.parse(fs.readFileSync('./funções de cmd/grupos/byegp2.json'));

const welkom = JSON.parse(fs.readFileSync('./funções de cmd/grupos/welkom.json'));

const { TelegraPh } = require("./funções/uploader");


//=====================================
const xfar = require('xfarr-api');
const path = require('path')
const fetch = require('node-fetch')
const os = require('os')
 const { TiktokDownloader } = require('./funções/tiktokdl') 
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const hx = require('./funções/hxz-api')
const { TiktokDownloaderr } = require('./funções/tiktokmikudl');
const stalker = require("xzons-api")
const hxz = require('./funções/hxz-api')
const { Aki } = require('aki-api')
const { lirikLagu } = require('./funções/letras.js')
const { insert, response } = require('./funções de cmd/funções/simi.js');


//=====================================
const welkom2 = JSON.parse(fs.readFileSync('./funções de cmd/usuarios/vacilo.json'));

const { color, bgcolor } = require('./funções/color')
const { convertSticker } = require("./funções de cmd/funções/swm.js");
const tamat = JSON.parse(fs.readFileSync('./funções de cmd/funções/tamat.json'))

const countMessage = JSON.parse(fs.readFileSync('./funções de cmd/grupos/countmsg.json'));

const { conselhob } = require('./funções de cmd/funções/conselhob.js');

const { palavras } = require('./funções de cmd/funções/conselhos.js');

const { mediafireDl } = require('./funções/mediafire')
//=====================================

const adeuscara = JSON.parse(fs.readFileSync('./funções de cmd/grupos/adeuscara.json'));

const { menu } = require("./funções de cmd/menu/menu.js")

const { menudono } = require("./funções de cmd/menu/menudono.js")

const { menulogos } = require('./funções de cmd/menu/menulogos.js');

const { infodono } = require('./funções de cmd/menu/infodono.js');

const { menuadm } = require("./funções de cmd/menu/menuadm.js")

//=====================================

const { EmojiAPI } = require("emoji-api")
const imgbbUploader = require('imgbb-uploader')
const { isLimit,  getLimit, giveLimit, addBalance, kurangBalance, getBalance, isGame, gameAdd, givegame, cekGLimit } = require('./funções/limit.js');
const emoji = new EmojiAPI()
const usedCommandRecently = new Set()
const { getLevelingXp, getLevelingLevel, getLevelingId, Telesticker, addLevelingXp, addLevelingLevel, addLevelingId, smsg, tanggal, getExtension, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getGroupAdmins,  getRandom } = require('./funções/myfunc')
const { aiovideodl } = require('./funções/scraper.js')
const cheerio = require ("cheerio");
const textpro = require('./funções/textpro')
const mimetype = require('mime-types')
const { segunPRONTOws } = require('./funções/segundo')
const { wikiSearch } = require('./funções/wiki.js');
const premium = JSON.parse(fs.readFileSync('./funções de cmd/usuarios/premium.json'));
const { upload, nit } = require('./funções de cmd/funções/tourl');

const { forwarding, imgnazista, imggay, imgcorno, imggostosa, imggostoso, imgfeio, imgvesgo, imgbebado, imggado, matarcmd, beijocmd, chutecmd, tapacmd } = require("./funções de cmd/nescessario.json")

//=====================================

const ms = require('ms')
 let { covid } = require('./funções/covid.js') 
const { yta,  ytv, searchResult  } = require('./funções/ytdl')
 
const forca = JSON.parse(fs.readFileSync('./funções/database/forca.json'))
const puppet = JSON.parse(fs.readFileSync('./funções/database/puppet_forca.json'))

//===================================== 
 
fake = "SUZANO-BOT 🩸"


lolkey = global.lolhuman

keyapi = "key-2a-chefe"

//===================================== 
 
var prefix = global.prefix 

NomeDoBot = global.NomeDoBot

numerodn = global.numerodonoa   

NickDono = global.NickDono

banChats = global.banChats 

logo = global.log0

//===================================== 
 
let picaks = ['flamejante','flaming','flarun','flasmurf']
let picak = picaks[Math.floor(Math.random() * picaks.length)]

const meupirul = ['Hoje', 'Amanhã', 'Nunca', 'dia', 'semana', 'mês', 'ano']
const meupirul2 = ['dias', 'semanas', 'meses', 'anos']

//========CONST=============\\

const nsfw = JSON.parse(fs.readFileSync('./funções de cmd/grupos/nsfw.json'));

const { destrava, destrava2 } = require('./funções de cmd/funções/destrava.js');

const samih = JSON.parse(fs.readFileSync('./funções de cmd/usuarios/simi.json'));

const samih2 = JSON.parse(fs.readFileSync('./funções de cmd/funções/simi.json'));

const akinator = JSON.parse(fs.readFileSync('./funções de cmd/funções/akinator.json'))

let limit = JSON.parse(fs.readFileSync('./jogos-rpg/user/limit.json'));

let leveling = JSON.parse(fs.readFileSync('./funções de cmd/funções/leveling.json'))

let autosticker = JSON.parse(fs.readFileSync('./funções de cmd/funções/autosticker.json'));

const autostick = JSON.parse(fs.readFileSync('./funções de cmd/funções/autostickpc.json'))

let _level = JSON.parse(fs.readFileSync('./funções de cmd/funções/level.json'))

const joguinhodavelhajs = JSON.parse(fs.readFileSync('./funções de cmd/usuarios/joguinhodavelha.json'));

const joguinhodavelhajs2 = JSON.parse(fs.readFileSync('./funções de cmd/usuarios/joguinhodavelha2.json'));

//========COMEÇO ANTIS=============\\


const limitefll = JSON.parse(fs.readFileSync('./funções de cmd/usuarios/flood.json'));

const anticall = JSON.parse(fs.readFileSync('./funções de cmd/usuarios/anticall.json'));

const antifake = JSON.parse(fs.readFileSync('./funções de cmd/antis/antifake.json'))

const antilinkhard = JSON.parse(fs.readFileSync('./funções de cmd/antis/antilinkhard.json'))

const autofigu = JSON.parse(fs.readFileSync('./funções de cmd/grupos/autofigu.json'))

const antilinkgp = JSON.parse(fs.readFileSync('./funções de cmd/antis/antilinkgp.json'))

const antiporn = JSON.parse(fs.readFileSync('./funções de cmd/antis/antiporn.json'))

const antiimg = JSON.parse(fs.readFileSync('./funções de cmd/antis/antiimg.json'))

const antiflood = JSON.parse(fs.readFileSync('./funções de cmd/usuarios/antiflood.json'));

const antisticker = JSON.parse(fs.readFileSync('./funções de cmd/antis/antisticker.json'))

const antinotas = JSON.parse(fs.readFileSync('./funções de cmd/antis/antinotas.json'))

const antictt = JSON.parse(fs.readFileSync('./funções de cmd/antis/antictt.json'))

const anticatalogo = JSON.parse(fs.readFileSync('./funções de cmd/antis/anticatalogo.json'))

const antidoc = JSON.parse(fs.readFileSync('./funções de cmd/antis/antidoc.json'))

const antiloc = JSON.parse(fs.readFileSync('./funções de cmd/antis/antiloc.json'))

const antipv = JSON.parse(fs.readFileSync('./funções de cmd/usuarios/antipv.json'))

const antivid = JSON.parse(fs.readFileSync('./funções de cmd/antis/antivideo.json'))

const antiaudio = JSON.parse(fs.readFileSync('./funções de cmd/antis/antiaudio.json'))

const palavra = JSON.parse(fs.readFileSync('./funções de cmd/grupos/palavras.json'))

const palavrao = JSON.parse(fs.readFileSync('./funções de cmd/grupos/palavrao.json'))



//========COMEÇO=============\\



module.exports = pl = async (pl, m, messages, store) => {
try {
const info = messages ? messages[0]: messages[1]
if (!info.message) return 
if (info.key && info.key.remoteJid == 'status@broadcast') return

const baileys = require('@adiwajshing/baileys');

var type = baileys.getContentType(mek.message);


//==============(BODY)================\\
  var body = (type === 'conversation') ? info.message.conversation : (type == 'imageMessage') ? info.message.imageMessage.caption : (type == 'videoMessage') ? info.message.videoMessage.caption : (type == 'extendedTextMessage') ? info.message.extendedTextMessage.text : (type == 'buttonsResponseMessage') ? info.message.buttonsResponseMessage.selectedButtonId : (type == 'listResponseMessage') ? info.message.listResponseMessage.singleSelectReply.selectedRowId : (type == 'templateButtonReplyMessage') ? info.message.templateButtonReplyMessage.selectedId : (type === 'messageContextInfo') ? (info.message.buttonsResponseMessage?.selectedButtonId || info.message.listResponseMessage?.singleSelectReply.selectedRowId || info.text) : ''
  
const args = body.trim().split(/ +/).slice(1)

const q = args.join(' ')

const isCmd = body.startsWith(prefix)

const command = isCmd ? body.slice(1).trim().split(/ +/).shift().toLocaleLowerCase() : null

//================(BADY)================\\
 
bady = (type === 'conversation') ? info.message.conversation : (type == 'imageMessage') ? info.message.imageMessage.caption : (type == 'videoMessage') ? info.message.videoMessage.caption : (type == 'extendedTextMessage') ? info.message.extendedTextMessage.text : (info.message.listResponseMessage && info.message.listResponseMessage.singleSelectReply.selectedRowId) ? info.message.listResponseMessage.singleSelectReply.selectedRowId: ''

//=======================================\\

bidy =  bady.toLowerCase()
//===============(BUDY)==================\\

budy = (type === 'conversation') ? info.message.conversation : (type === 'extendedTextMessage') ? info.message.extendedTextMessage.text : ''

var budy2 = budy.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

//======================================\\

var pes = (type === 'conversation' && m.message.conversation) ? m.message.conversation : (type == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (type == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (type == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : ''

//===========(ID DAS FIGUS)===========\\

const figura = Object.keys(m.message)[0] == "stickerMessage" ? m.message.stickerMessage.fileSha256.toString('base64') : ""

//=====================================\\

const listmsg = (from, title, desc, list) => { 
po = pl.prepareMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "Escolha aqui","footerText": "Selecione","listType": 1,"sections": list}}, {})
return pl.relayWAMessage(po, {waitForAck: true})
}
listmes = (type == 'listResponseMessage') ? info.message.listResponseMessage.title : ''



//========FORMAÇÕES/CONST)=============\\

const isOwner = [ ...global.numerodonoa].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)

const botNumber = pl.user.id.split(':')[0]+'@s.whatsapp.net'

const itsMe = m.sender == botNumber ? true : false

const text = args.join(" ")

const from = m.key.remoteJid
const isGroup = from.endsWith('@g.us') 
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''


//========GRUPOS/CONST)=============\\

const groupMetadata = isGroup ? await pl.groupMetadata(from) : ''
const participants = isGroup ? await groupMetadata.participants : ''
const groupName = isGroup ? groupMetadata.subject : ''
const sender = isGroup ? m.key.participant : m.key.remoteJid
const pushname = m.pushName ? m.pushName : ''

const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()

const arg = body.substring(body.indexOf(' ') + 1)


const argss = body.split(/ +/g)
const testat = body
const ants = body

const groupDesc = isGroup ? groupMetadata.desc : ''

const groupMembers = isGroup ? groupMetadata.participants : ''

const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''

//=======================================\\



const numerodono = [ ...global.numerodonoa].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const dono = "557398095072@s.whatsapp.net"

//============(SORTEIO-CONST)============\\

const isSimi = isGroup ? samih.includes(from) : false

const isSimi2 = isGroup ? samih2.includes(from) : false


//=======(ADMS/DONO/ETC..CONST)========\\

const isNsfw =  isGroup ? nsfw.includes(from) : true

const isBot = m.key.fromMe ? true : false

const isPremium = premium.includes(sender)

const isBotAdmins = groupAdmins.includes(botNumber) || false

const isGroupAdmins = groupAdmins.includes(sender) || false 

const isBotGroupAdmins = groupAdmins.includes(botNumber) || false

//==============================

const welcm = isGroup ? wlcm.includes(from) : true
const GcRvk = isGroup ? gcrevoke.includes(from) : false
const isLevelingOn = isGroup ? leveling.includes(from) : false
const isAutoStick = autostick.includes(from)
const isAutoSticker = isGroup ? autosticker.includes(from) : false

const content = JSON.stringify(m.message)

//================COMEÇO DOS ANTIS======================\\

//===========(ANTIS-PROTEÇÕES)===========\\

const isAntifake = isGroup ? antifake.includes(from) : false

const isAntiCtt = isGroup ? antictt.includes(from) : false

const isAnticatalogo = isGroup ? anticatalogo.includes(from) : false

const isAntiFlood = isGroup ? antiflood.includes(from) : false	

const isAntiLinkHard = isGroup ? antilinkhard.includes(from) : false

//const isJoguin = isGroup ? joguinhodavelhajs.includes(sender) : false

const isAntilinkgp = isGroup ? antilinkgp.includes(from) : false

const isAntiPorn = isGroup ? antiporn.includes(from) : false

const isAntiAudio = isGroup ? antiaudio.includes(from) : false	
	
const isAntiImg = isGroup ? antiimg.includes(from) : false

const isAntiSticker = isGroup ? antisticker.includes(from) : false

const isAntiNotas = isGroup ? antinotas.includes(from) : false

const Antidoc = isGroup ? antidoc.includes(from) : false

const Antiloc = isGroup ? antiloc.includes(from) : false

const isAntiVid = isGroup ? antivid.includes(from) : false	

const isAutoReact = isGroup ? autoreact.includes(from) : false

const isWelkom2 = isGroup ? welkom2.includes(from) : true

const groupIdWelcomed2 = []	

for(let obj of welcome_group2) groupIdWelcomed2.push(obj.id)

const groupIdBye2 = []

for(let obj of bye_group2) groupIdBye2.push(obj.id)


const isWelcomed2 = (groupIdWelcomed2.indexOf(from) >= 0) ? true : false

const isByed2 = (groupIdBye2.indexOf(from) >= 0) ? true : false	
	

const isAntiPv = (antipv.indexOf('Ativado') >= 0) ? true : false	

const isAnticall = (anticall.indexOf('Ativado') >= 0) ? true : false

const isPalavrao = isGroup ? palavrao.includes(from) : false	

const isViewOnce = (type == 'viewOnceMessage')

const isWelkom = isGroup ? welkom.includes(from) : false

//=======================================\\
 

//=========(isQuoted/consts)=============\\
const isImage = type == 'imageMessage'
const isVideo = type == 'videoMessage'
const isAudio = type == 'audioMessage'
const isSticker = type == 'stickerMessage'
const isContact = type == 'contactMessage'
const isLocation = type == 'locationMessage'
const isProduct = type == 'productMessage'
const isMedia = (type === 'imageMessage' || type === 'videoMessage' || type === 'audioMessage')
typeMessage = body.substr(0, 50).replace(/\n/g, '')
if (isImage) typeMessage = "Image"
else if (isVideo) typeMessage = "Video"
else if (isAudio) typeMessage = "Audio"
else if (isSticker) typeMessage = "Sticker"
else if (isContact) typeMessage = "Contact"
else if (isLocation) typeMessage = "Location"
else if (isProduct) typeMessage = "Product"

const isQuotedMsg = type === 'extendedTextMessage' && content.includes('textMessage')

const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')

const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')

const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')

const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')

const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')

const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')

const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')

const isQuotedProduct = type === 'extendedTextMessage' && content.includes('productMessage')
             
//==========================================\\

selectedButton = (type == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : ''

//==========================================\\


  const argsButton = selectedButton.trim().split(/ +/)

//==========================================\\

const getFileBuffer = async (mediakey, MediaType) => {
  
const stream = await downloadContentFromMessage(mediakey, MediaType)

let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
return buffer
}

 try {
ppimg = await pl.profilePictureUrl(sender)
 } catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
 }
const userppbuff = await getBuffer(ppimg) 


const sendSticker = (from, filename, m) => {
pl.sendMessage(from, {sticker: filename}, {quoted: m})
}

const sendImage = (ytb) => {
pl.sendMessage(from, {image: ytb}, {quoted:m})
}


const sendMess = (hehe, ytb) => {
pl.sendMessage(hehe, {text: ytb})
}

	const pickRandom = (arr) => {
			return arr[Math.floor(Math.random() * arr.length)]
		}

const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? pl.sendMessage(from, {text: teks.trim(), mentions: memberr}) : pl.sendMessage(from, {text: teks.trim(), mentions: memberr})
}
	
const costum = (pesan, tipe, target, target2) => {
pl.sendMessage(from, pesan, tipe, {quoted: {key: {fromMe: false, participant: `${target}`, ...(from ? {remoteJid: from}: {})}, message: {conversation: `${target2}` }}})
}

const sendlistA = async (id, txt1, txt2, title1, btext, but) => {

const sections = but

const listMessage = {
text: txt1,
footer: txt2,
title: title1,
buttonText: btext,
sections
}
pl.sendMessage(id, listMessage)  
}


//=========HORAS=============

function kyun(seconds){
function pad(s){
return (s < 10 ? '0' : '') + s;
}
var hours = Math.floor(seconds / (60*60));
var minutes = Math.floor(seconds % (60*60) / 60);
var seconds = Math.floor(seconds % 60);
return `${pad(hours)} HORAS ${pad(minutes)} MINUTOS ${pad(seconds)} SEGUNDOS`
}



const time2 = moment().tz('America/Sao_Paulo').format('HH:mm:ss')
if(time2 > "00:00:00"){
var tempo = 'BOA MADRUGADA' 
} 
if(time2 > "05:30:00"){
var tempo = 'BOM DIA' 
}
if(time2 > "12:00:00"){
var tempo = 'BOA TARDE' 
}
if(time2 > "19:00:00"){
var tempo = 'BOA NOITE' 
}



//========REPLY========================

var selo = {
    key: {
fromMe: false,
"participant": "0@s.whatsapp.net",
"remoteJid": "120363022697760691@g.us"
    },
    "message": {
orderMessage: {
itemCount: -9999999,
status: 200,
jpegThumbnail: fs.readFileSync('./mídia-ft-vd/fotos/manu.jpg'),
surface: 200,
message: `${NomeDoBot}\nComando: ${prefix + command}`,
orderTitle: 'samods',
sellerJid: '0@s.whatsapp.net'
}
    },
    contextInfo: {
"forwardingScore": 999,
"isForwarded": true
    },
    sendEphemeral: true
}


const reply = (texto) => {
pl.sendMessage(from, { text: texto }, {quoted:m}).catch(e => {
console.log(e)
})
}

//=====================================
     
pl.createMessage = async (jidnya, kontennya, optionnya) => {
return await generateWAMessage(jidnya, kontennya, {...optionnya,userJid: pl.authState.creds.me.id,upload: pl.waUploadToServer})
}

//=====================================


function randomNomor(angka){
return Math.floor(Math.random() * angka) + 1
}

//=============DATA=============

const date = moment.tz('America/Sao_Paulo').format('DD/MM/YY');


const time = moment.tz('America/Sao_Paulo').format('HH:mm:ss');

const hora = moment.tz('America/Sao_Paulo').format('HH:mm:ss');

const Data = moment.tz('America/Sao_Paulo').format('DD/MM/YY');

//=====================================

//=====================================
// ❗𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙽𝙾 𝙿𝚅❗
if (!isGroup && isCmd) console.log(
color('《❗COМANDO PRIVADO❗》','white'),'\n',
color('‣ NΙCK :','red'),color(pushname,'cyan'),'\n',
color('‣ NÚMERO :','red'),color(sender.split("@")[0],'blue'),'\n',
color('‣ CМD :','red'),color(command,'cyan'),'\n',
color('‣ HORA :','red'),color(hora,'cyan'),'\n',
color('‣ DAТA :','red'),color(Data,'cyan'),'\n')

// ❗𝙼𝙴𝙽𝚂𝙰𝙶𝙴𝙼 𝙽𝙾 𝙿𝚅❗
if (!isCmd && !isGroup && !info.key.fromMe) console.log(
color('《❗MENSAGEM PRIVADO❗》','white'),'\n',
color('‣ NÚMERO :','red'),color(sender.split("@")[0],'blue'),'\n',
color('‣ NICK :','red'),color(pushname,'cyan'),'\n',
color('‣ HORA :','red'),color(hora,'cyan'),'\n',
color('‣ DATA :','red'),color(Data,'cyan'),'\n')

// ❗𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙴𝙼 𝙶𝚁𝚄𝙿𝙾❗
if (isCmd && isGroup) console.log(
color('《❗COМANDO NO GRUPO❗》','white'),'\n',
color('‣ GRUPO :','blue'),color(groupName,'yellow'),'\n',
color('‣ NÚMERO :','blue'),color(sender.split("@")[0],'red'),'\n',
color('‣ NICK :','blue'),color(pushname,'yellow'),'\n',
color('‣ CMD :','blue'),color(command,'yellow'),'\n',
color('‣ HORA :','blue'),color(hora,'yellow'),'\n',
color('‣ DATA :','blue'),color(Data,'yellow'),'\n')

// ❗𝙼𝙴𝙽𝚂𝙰𝙶𝙴𝙼 𝙴𝙼 𝙶𝚁𝚄𝙿𝙾❗
if (!isCmd && isGroup && !info.key.fromMe) console.log(
color('《❗MENSAGEM NO GRUPO ❗》','white'),'\n',
color('‣ GRUPO :','blue'),color(groupName,'cyan'),'\n',
color('‣ NÚMERO :','blue'),color(sender.split("@")[0],'red'),'\n',
color('‣ NICK :','blue'),color(pushname,'cyan'),'\n',
color('‣ HORA :','blue'),color(hora,'cyan'),'\n',
color('‣ DATA :','blue'),color(Data,'cyan'),'\n')

		


//===================================== 



//=====================================


//===========(enviar.espere)=============\\

const { mensagens } = require('./funções de cmd/funções/aleatoria.js');

const { sortear } = require('./funções de cmd/funções/aleatoria.js');

var enviarmen = mensagens[Math.floor(Math.random() * mensagens.length)] 
//========================================\\


//=====================================

enviar = {
espere: `${enviarmen}`,
successo: '️❬ ✔ ❭ Sucesso 🖤',
levelon: '❬ ✔ ❭ *leveling* *ativado*',
leveloff: '❬ X ❭  *leveling* *desativado*',
levelnoton: '❬ X ❭ *leveling não ativado*',
levelnol: '*error* 0 °-°',
error: {
stick: '*falhou, tente novamente ^_^*',
Iv: 'Link invalido ☹️'
},
msg: {
grupo: '[❗] Este comando só pode ser usado em grupos! ❌',
premium: '[❗] ESTE PEDIDO É SO PARA *USUÁRIOS PREMIUMS*',
autorização: "Somente o desenvolvedor ou admistradores podem executar esse comando!",
mod: `[❗] ESTE PEDIDO É ESPECÍFICO PARA USUARIO MOD ${global.NickDono}*`,
banido: '❌ Você foi banido de utilizar os comandos, entre em contato com o proprietário pra saber o porque ❌' ,
donosmt: '[❗] Este é um recurso especial para o proprietário ❌',
donosmt2: '[❗] Este é um recurso especial para o proprietário ❌',
adm: '[❗] Este comando só pode ser usado por administradores de grupo! ❌',
Badmin: ' [❗] Este comando só pode ser usado quando o bot se torna administrador! ❌',
}
}

resposta = {
espere: "Aguarde...enviando ",
dono: "Esse comando só pode ser usado pelo desenvolvedor!!! ",
grupo: "Esse comando só pode ser usado em grupos ",
privado: "Esse comando só pode ser usado no privado ",
adm: "Esse comando só pode ser usado por administradores do grupo",
botadm: "Este comando só pode ser usado quando o bot se torna administrador ",
erro: "Erro, tente novamente mais tarde "
}
//=====================================

const sendBtext = async (id, text1, desc1, but = [], vr) => {
buttonMessage = {
text: text1,
footer: desc1,
buttons: but,
headerType: 1
}
pl.sendMessage(id, buttonMessage, {quoted: vr})
}

//=====================================
    
//=====================================



const enviarimg = (imageDir, caption) => {
pl.sendMessage(from, {
image: fs.readFileSync(imageDir),
caption: caption
})
}

// ENVIAR BOTÃO COM IMAGEM
const sendBimg = async (id, img1, text1, desc1, but = [], vr) => {
buttonMessage = {
image: {url: img1},
caption: text1,
footer: desc1,
buttons: but,
headerType: 4
}
pl.sendMessage(id, buttonMessage, {quoted: vr})
}
   

//========AUTOFIGU-GP/AUTOFIGU-PV=============

const enviarfigu = async (figu, tag) => {
bla = fs.readFileSync(figu)
pl.sendMessage(from, {sticker: bla}, {quoted: info})
}

const enviarfiguUrl = async (link) => {
ranp = getRandom('.gif')
rano = getRandom('.webp')
ini_buffer = `${link}`
exec(`wget ${ini_buffer} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 320:320 ${rano}`, (err) => {
fs.unlinkSync(ranp)
buff = fs.readFileSync(rano)
pl.sendMessage(from, {sticker: buff}, {quoted: info}).catch(e => {
})
fs.unlinkSync(rano)
})
}

if(isAutoSticker &&  !m.key.fromMe && isGroup) {
async function autofiguf() {
await setTimeout(async() => {    
if(budy.includes(`${prefix}sticker`) || budy.includes(`${prefix}s`) || budy.includes(`${prefix}stk`) || budy.includes(`${prefix}st`) || budy.includes(`${prefix}fsticker`) || budy.includes(`${prefix}f`) || budy.includes(`${prefix}fstiker`)) return
if(type === "videoMessage") {
if ((isMedia && info.message.videoMessage.seconds < 40)){  
rane = getRandom('.'+await getExtension(info.message.videoMessage.mimetype))
buffimg = await getFileBuffer(info.message.videoMessage, 'video')
fs.writeFileSync(rane, buffimg)
const media = rane
rano = getRandom('.webp')
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
exec(`webpmux -set exif ${addMetadata('bot', 'manu')} ${rano} -o ${rano}`, async (error) => {
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`Falha na conversão de ${tipe} para sticker`)
})
})
exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 200:200 ${rano}`, (err) => {
fs.unlinkSync(media)
buffer = fs.readFileSync(rano)
pl.sendMessage(from, {sticker: buffer}, {quoted: info})
fs.unlinkSync(rano)
})
} 
}

if(type === "imageMessage") {
rane = getRandom('.'+await getExtension(info.message.imageMessage.mimetype))
buffimg = await getFileBuffer(info.message.imageMessage, 'image')
fs.writeFileSync(rane, buffimg)
const media = rane
rano = getRandom('.webp')
exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${rano}`, (err) => {
fs.unlinkSync(media)
buffer = fs.readFileSync(rano)
pl.sendMessage(from, {sticker: buffer}, {quoted: info})
fs.unlinkSync(rano)
})  
}
}, 1000)
}
autofiguf().catch(e => {
console.log(e)
})
}

/*

if (isGroup && !m.key.fromMe && type == 'viewOnceMessage') {
let teks = `「 *ANTI VIEWONCE ATIVADO * 」
    
    🤠 *NOME* : ${pushname}
    👾 *USUÁRIO* : @${sender.split("@")[0]}
    ⏰ *Relógio* : ${moment.tz('America/Sao_Paulo').format('HH:mm:ss')}
    
    💫 *MENSAGEM DENTRO* : ${type}`
reply(teks)
await sleep(500)
m.copyNForward(from, true, {
readViewOnce: true
}, {
quoted: mek
}).catch(_ => reply(`ERROOO`))
}

*/
//=====================================

/*
if (isAutoStick && isGroup) {
     if(type == "imageMessage") {
await pl.sendImageAsSticker(from, m,    {packname: global.packname, author: global.author })
console.log(`DETECTADO AUTOSTICKER `)
} else if(type == "videoMessage") {
await pl.sendVideoAsSticker(from, m,  {packname: global.packname, author: global.author })
}
}
*/

//=====================================

if(isAutoReact && isGroup && isCmd) {
if(!isAutoReact) return 
emojis = ["😀", "😃", "😁", "😆", "😂", "🤣", "😭", "😉", "😘", "😗", "🥰", "😍", "🤩", "🥳", "🙃", "🙂", "🥲", "😋", "😛", "😜", "😝", "😜", "😇", "😊", "☺️", "😏", "😌", "😔", "😑", "😐", "😶", "🤔", "🤫", "🤭", "🥱", "🤗", "🤨", "🧐", "😒", "🙄", "😤", "😠", "🤬", "🥺", "😥", "😟", "☹️", "😦", "😧", "😰", "😨", "😕", "😯", "😲", "😳", "🤯", "😬", "😓", "😓", "😞", "😖", "🥴", "😎", "🤓", "😎", "🥵", "🥶", "🌞", "🤢", "🤮", "🤥", "🤡", "😈", "🥵", "👽", "😷", "💦", "👺", "👹", "💨", "😸", "😹", "❤️", "🫀", "👁️", "☠️", "💀", "👀", "😻", "💋", "🫂", "👄", "👅", "💅", "🙏", "🤳", "✍️", "🙅", "🌀", "☃️", "🔥", "⚡", "🌈", "💧", "🙈", "🍑", "🍒", "🍓", "🍌", "🌶️", "🍆", "🍴", "🍷", "🍴", "🍽️", "🛢️", "🚨", "🎤", "🎭", "📽️", "🎰", "☎️", "📞", "👑", "💎", "💍", "💉", "🗑️", "🗡️", "⚔️", "🚬", "💣", "⁉️", "✅", "👁️‍🗨️", "♥️", "🧡", "💛", "💚", "💙", "💜", "🤎", "🖤", "🤍", "🇧🇷", "🏳️‍🌈", "🇲🇽", "🇪🇸", "🇲🇿", "🇦🇴", "🇺🇲","🤔","🤫","😏","🍆","👺","🙊"]
reassao = emojis[Math.floor(Math.random() * emojis.length)]
sendMsg = await pl.sendMessage(from, {react: {text: reassao, key: m.key}})
}

if(isAutoReact && isGroup && !isCmd) {
if(!isAutoReact) return 
emojis = ["😀", "😃", "😁", "😆", "😂", "🤣", "😭", "😉", "😘", "😗", "🥰", "😍", "🤩", "🥳", "🙃", "🙂", "🥲", "😋", "😛", "😜", "😝", "😜", "😇", "😊", "☺️", "😏", "😌", "😔", "😑", "😐", "😶", "🤔", "🤫", "🤭", "🥱", "🤗", "🤨", "🧐", "😒", "🙄", "😤", "😠", "🤬", "🥺", "😥", "😟", "☹️", "😦", "😧", "😰", "😨", "😕", "😯", "😲", "😳", "🤯", "😬", "😓", "😓", "😞", "😖", "🥴", "😎", "🤓", "😎", "🥵", "🥶", "🌞", "🤢", "🤮", "🤥", "🤡", "😈", "🥵", "👽", "😷", "💦", "👺", "👹", "💨", "😸", "😹", "❤️", "🫀", "👁️", "☠️", "💀", "👀", "😻", "💋", "🫂", "👄", "👅", "💅", "🙏", "🤳", "✍️", "🙅", "🌀", "☃️", "🔥", "⚡", "🌈", "💧", "🙈", "🍑", "🍒", "🍓", "🍌", "🌶️", "🍆", "🍴", "🍷", "🍴", "🍽️", "🛢️", "🚨", "🎤", "🎭", "📽️", "🎰", "☎️", "📞", "👑", "💎", "💍", "💉", "🗑️", "🗡️", "⚔️", "🚬", "💣", "⁉️", "✅", "👁️‍🗨️", "♥️", "🧡", "💛", "💚", "💙", "💜", "🤎", "🖤", "🤍", "🇧🇷", "🏳️‍🌈", "🇲🇽", "🇪🇸", "🇲🇿", "🇦🇴", "🇺🇲","🤔","🤫","😏","🍆","👺","🙊"]
reassao = emojis[Math.floor(Math.random() * emojis.length)]
sendMsg = await pl.sendMessage(from, {react: {text: reassao, key: m.key}})
}


//===============(simih)=============\\
const simih = async (text) => {
	try {
		const sami = await fetch(`https://api.brizaloka-api.tk/ia/simsimi?apikey=brizaloka&text=${text}`, {method: 'GET'})
		const res = await sami.json()
		return res.resultado.resposta
	} catch {
		return 'Simi não sabe, pfvr explique ??'
	}
}


async function AntilinkHardF() {
if(isUrl(budy2) && isAntiLinkHard && isGroupAdmins && isBotGroupAdmins && !info.key.fromMe) {
if(command == "tiktok" && command == "facebook" && command == "instagram" && command == "tiktok" && command == "twitter" && command == "ytmp3" && command == "ytmp4" && command == "play") return
linkgpp = await pl.groupInviteCode(from)
if(budy2.match(`${linkgpp}`)) return
if(!isUrl(budy2)) return 
if(type === "buttonsResponseMessage") return
if(type === "listResponseMessage") return
if(budy2.includes(`${linkgpp}`)) return 
reply('*Link detectado, porém usuário é admin*')
}

if(isUrl(budy2) && isAntiLinkHard && !isGroupAdmins && isBotGroupAdmins && !info.key.fromMe) {
if(command == "tiktok" && command == "facebook" && command == "instagram" && command == "tiktok" && command == "twitter" && command == "ytmp3" && command == "ytmp4" && command == "play") return  
linkgpp = await pl.groupInviteCode(from)
if(budy2.match(`${linkgpp}`)) return reply('Link do nosso grupo, não irei remover.. ')  
if(!isUrl(budy2)) return 
if(type === "buttonsResponseMessage") return
if(type === "listResponseMessage") return
reply('*Link detectado, punindo usuário...*')
if(!JSON.stringify(groupMembers).includes(sender)) return
pl.groupParticipantsUpdate(from, [sender], 'remove')
}
} 
AntilinkHardF()
//joguinhodavelha()

if(isUrl(body) && isAntilinkgp && isGroup && isBotGroupAdmins) {
if(!isAntilinkgp) return
if(!isUrl(body)) return 
if(isGroupAdmins) return reply("Você é adm, não removerei você..") 
if(budy2.includes("chat.whatsapp.com/")){
if(!budy2.includes("chat.whatsapp.com/")) return
if(isBot) return 
linkgpp = await pl.groupInviteCode(from)
if(budy.match(`${linkgpp}`)) return reply('Link do nosso grupo, não irei remover.. ')  
reply('*Link de grupo detectado, punindo usuário...*')
if(!JSON.stringify(groupMembers).includes(sender)) return
pl.groupParticipantsUpdate(from, [sender], 'remove')
}
}




if(isGroup && isBotGroupAdmins && !isGroupAdmins && !isOwner && !info.key.fromMe) {
if(info.message?.extendedTextMessage?.contextInfo?.mentionedJid?.length == groupMembers.length || info.message?.extendedTextMessage?.contextInfo?.mentionedJid?.length == groupMembers.length - 1) { 
reply("MEMBRO COM MENSAGEM DE MARCAÇÃO DE TODOS DO GRUPO, POR CONTA DISSO VOU REMOVER DO GRUPO, QUALQUER COISA VÁ NO PV DO ADMINISTRADOR...")
pl.groupParticipantsUpdate(from, [sender], "remove")
}
}

/*
//========(ANTI-PV-QUE-BLOQUEIA)======\\
if(isAntiPv && !isGroup && !isOwner  && !m.key.fromMe && !isPremium){ 
reply(`_Não é permitido conversar no pv do bot!\npor isso vc será bloqueado!\nqualquer coisa contate ao desenvolvedor_`)
setTimeout(async () => {
pl.updateBlockStatus(sender, 'block')
}, 1000)
return
}*/
//======================================\\


// ANTI_LIGAR \\

if(!isGroup && isAnticall) {
pl.ws.on('CB:call', async (B) => {
if (B.content[0].tag == 'offer') {
pl.sendMessage(B.content[0].attrs['call-creator'], { text: "Não pode ligar para o bot, você será bloqueado..." }).then(() => { 
delay(4000)
pl.updateBlockStatus(B.content[0].attrs['call-creator'], "block") })
}
})
}


//=========(ANTIPV-QUE-SÓ-FALA)==========\\
/*
if(!isGroup && !isPremium && !isOwner && !m.key.fromMe && banChats === true) return 
const atibot = m.isBaileys
if (atibot === true) return 
*/

//======================================\\
 
if(fs.existsSync(`./func/limitecaracteres/limite-c_${from}.json`)) {
var limitecaracteres_on = JSON.parse(fs.readFileSync(`./func/limitecaracteres/limite-c_${from}.json`))
var limitefl = limitecaracteres_on.limite
} else {
var limitefl = limitefll.limitefl
}



      const allForcaId = []
for(let obj of forca) allForcaId.push(obj.id)
const isPlayForca = allForcaId.indexOf(sender) >= 0 ? true : false

async function randompalavra() {
    return new Promise(async (resolve, reject) => {
fetch('https://www.palabrasaleatorias.com/palavras-aleatorias.php?fs=1&fs2=0&Submit=Nova+palavra',).then(async function (res, err) {
if(err) reject(err)    
var $ = cheerio.load(await res.text())
resolve($('body > center > center > table:nth-child(4) > tbody > tr > td > div')[0].children[0].data)
})
    }) 
}


//===================================== 

const enviarfiguimg = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path: /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64'): /^https?:\/\//.test(path) ? await (await getBuffer(path)): fs.existsSync(path) ? fs.readFileSync(path): Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
 buffer = await writeExifImg(buff, options)
} else {
 buffer = await imageToWebp(buff)
}
await pl.sendMessage(jid, {
 sticker: {
url: buffer
 }, ...options
}, {
 quoted
})
return buffer
 }

//===================================== 

 const enviarfiguvid = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path: /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64'): /^https?:\/\//.test(path) ? await (await getBuffer(path)): fs.existsSync(path) ? fs.readFileSync(path): Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
 buffer = await writeExifVid(buff, options)
} else {
 buffer = await videoToWebp(buff)
}

await pl.sendMessage(jid, {
 sticker: {
url: buffer
 }, ...options
}, {
 quoted
})
return buffer
 }    
 

//=======================\\

const mencionar = ( foto, texto, membro, ids ) => {
( ids == null || ids == undefined || ids == false ) ? pl.sendMessage(from, { image: foto, caption: texto.trim(), contextInfo: { "mentionedJid": membro } }) : pl.sendMessage(from, { image: foto, caption: texto.trim(), contextInfo: { "mentionedJid": membro } })
}

//========================\\

//-_-_-_-_--_-_-_-_-_--_-JSON-FUNÇÕES-_-_-_-_-_-_-_-_-_-_-_-_\\
const { addVotoDuelo, delVotoDuelo } = require('./funcoes/votoduelo.js')

//-_-_-_-_--_-_-_-_-_--_--_-_-_-_-_-_-_-_-_-_-_-_\\

const votacao = JSON.parse(fs.readFileSync('./dados/votacao/votacao.json'))

const votacaoduelo = JSON.parse(fs.readFileSync('./dados/duelo/votacaoduelo.json'))
//-_-_-_-_--_-_-_-_-_--_--_-_-_-_-_-_-_-_-_-_-_-_\\

//============(FUNÇÕES)============\\

const isVoto = isGroup ? votacao.includes(from) : false

const isVotoDuelo = isGroup ? votacaoduelo.includes(from) : false

//-_-_-_-_--_-_-_-_-_--_--_-_-_-_-_-_-_-_-_-_-_-_\\

/** VOTAÇÃO ESTILO DUELO : VS **/

if( isGroup ) {

if (budy.toLowerCase() === 'um'){

let voto = JSON.parse(fs.readFileSync(`./dados/duelo/P_votos/${from}.json`))
let _votos = JSON.parse(fs.readFileSync(`./dados/duelo/votos/${from}.json`))
let filtro = voto.map(v => v.participante)
let id_voto = sender ? sender : '0@s.whatsapp.net'
if(filtro.includes(id_voto)) {
return mentions('Olá '+'@' + sender.split('@')[0] + '\n~ Não é possível votar duas vezes.', filtro, true)
} else {
voto.push({
participante: id_voto,
votacao: '1'
})
fs.writeFileSync(`./dados/duelo/P_votos/${from}.json`,JSON.stringify(voto))
let _p = []
let _voto = `VOTAÇÃO...\n\nParticipante 1: @${_votos[0].votos.split('@')[0]}\nParticipante 2: @${_votos[0].votos2.split('@')[0]}\nMotivo da votação: ${_votos[0].razao}\nTotal de votos: ${voto.length}.\nDuração: ${_votos[0].duracao} minuto.`
for(let i = 0; i < voto.length; i++) {
_voto +=  `\n\n========\nMembro: @${voto[i].participante.split('@')[0]}\nVotou em: ${voto[i].votacao}\n========`
_p.push(voto[i].participante)
}
_p.push(_votos[0].votos, _votos[0].votos2)
mentions(_voto,_p,true)
}
} else if (budy.toLowerCase() === 'dois'){
const voto = JSON.parse(fs.readFileSync(`./dados/duelo/P_votos/${from}.json`))
let _votos = JSON.parse(fs.readFileSync(`./dados/duelo/votos/${from}.json`))
let filtro = voto.map(v => v.participante)
let id_voto = sender ? sender : '0@s.whatsapp.net'
if(filtro.includes(id_voto)) {
return mentions('Olá '+'@' + sender.split('@')[0] + '\n~ Não é possivel votar duas vezes.', filtro, true)
} else {
voto.push({
participante: id_voto,
votacao: '2'
})
fs.writeFileSync(`./dados/duelo/P_votos/${from}.json`,JSON.stringify(voto))
let _p = []
let _voto = `VOTAÇÃO...\n\nParticipante 1: @${_votos[0].votos.split('@')[0]}\nParticipante 2: @${_votos[0].votos2.split('@')[0]}\nMotivo da votação: ${_votos[0].razao}\nTotal de votos: ${voto.length}.\nDuração: ${_votos[0].duracao} minuto.`
for(let i = 0; i < voto.length; i++) {
_voto +=  `\n\n========\nMembro: @${voto[i].participante.split('@')[0]}\nVotou em: ${voto[i].votacao}\n========\n`
_p.push(voto[i].participante)
}
_p.push(_votos[0].votos, _votos[0].votos2)
mentions(_voto,_p,true)
}
}
}	


//======================================\\

//========(CONTADOR-DE-MENSAGENS)========\\

const groupIdscount = []
const numbersIds = []
for(let obj of countMessage) {
groupIdscount.push(obj.groupId)
}
if(isGroup && groupIdscount.indexOf(from) >= 0) {
var ind = groupIdscount.indexOf(from)
for(let obj of countMessage[ind].numbers) {numbersIds.push(obj.id)}
if(numbersIds.indexOf(sender) >=0) {
var indnum = numbersIds.indexOf(sender)
countMessage[ind].numbers[indnum].messages += 1
countMessage[ind].numbers[indnum].cmd_messages += isCmd ? 1 : 0
fs.writeFileSync('./funções de cmd/grupos/countmsg.json', JSON.stringify(countMessage, null, 2)+ '\n')
} else {
const messages = 1
const cmd_messages = isCmd ? 1 : 0
countMessage[ind].numbers.push({
id: sender,
messages: messages,
cmd_messages: cmd_messages
})
fs.writeFileSync('./funções de cmd/grupos/countmsg.json', JSON.stringify(countMessage, null, 2) + '\n')
}
} else if(isGroup) {
countMessage.push({
groupId: from,
numbers: [{
id: sender,
messages: 2,
cmd_messages: isCmd ? 1 : 0
}]
})
fs.writeFileSync('./funções de cmd/grupos/countmsg.json', JSON.stringify(countMessage, null, 2) + '\n')
}


//======================================\\

//===============(AUTO-BAN)=============\\
const dbids = []
for(i=0;i<adeuscara.length;++i) {
dbids.push(adeuscara[i].groupId)
}
const isAdeusCara = (isGroup && dbids.indexOf(from) >= 0) ? true : false

//======================================\\


//=====================================   

this.suit = this.suit ? this.suit : {}
let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
if (roof) {
let win = ''
let tie = false
if (sender == roof.p2 && /^(acc(ept)?|aceitar|Aceitar|Ok?|aceita|Ação|Posterior|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
if (/^(Menos|Ação|rejeitar|n|ga(k.)?bisa)/i.test(m.text)) {
pl.sendTextWithMentions(from, `@${roof.p2.split`@`[0]} terno de lixo, terno cancelado`, m)
delete this.suit[roof.id]
return !0
}
roof.status = 'play'
roof.asal = from
clearTimeout(roof.waktu)
//delete roof[roof.id].waktu
pl.sendText(from, `O jogo foi enviado para conversar.

@${roof.p.split`@`[0]} e 
@${roof.p2.split`@`[0]}

Selecione o jogo em cada bate-papo"
clique https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
if (!roof.pilih) pl.sendText(roof.p, `Por favor, selecione \n\nPedra🗿\nPapel📄\nTesoura✂️`, m)
if (!roof.pilih2) pl.sendText(roof.p2, `Por favor, selecione \n\nPedra🗿\nPapel📄\Tesoura✂️`, m)
roof.waktu_milih = setTimeout(() => {
if (!roof.pilih && !roof.pilih2) pl.sendText(from, `Ambos os jogadores não têm intenção de jogar,\njogo cancelado`)
else if (!roof.pilih || !roof.pilih2) {
win = !roof.pilih ? roof.p2 : roof.p
pl.sendTextWithMentions(from, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} não escolher um jogo, o jogo terminou`, m)
}
delete this.suit[roof.id]
return !0
}, roof.timeout)
}
let jwb = m.sender == roof.p
let jwb2 = m.sender == roof.p2
let g = /tesoura/i
let b = /pedra/i
let k = /papel/i
let reg = /^(tesoura|pedra|papel)/i
if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
roof.pilih = reg.exec(m.text.toLowerCase())[0]
roof.text = m.text
reply(`Você escolheu ${m.text} ${!roof.pilih2 ? `\n\nEsperando que o oponente escolha` : ''}`)
if (!roof.pilih2) pl.sendText(roof.p2, '_O oponente já escolheu_\nAgora é sua vez.', 0)
}
if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
roof.text2 = m.text
reply(`Você escolheu ${m.text} ${!roof.pilih ? `\n\nEsperando que o oponente escolha` : ''}`)
if (!roof.pilih) pl.sendText(roof.p, '_O oponente já escolheu_\nAgora é sua vez.', 0)
}
let stage = roof.pilih
let stage2 = roof.pilih2
if (roof.pilih && roof.pilih2) {
clearTimeout(roof.waktu_milih)
if (b.test(stage) && g.test(stage2)) win = roof.p
else if (b.test(stage) && k.test(stage2)) win = roof.p2
else if (g.test(stage) && k.test(stage2)) win = roof.p
else if (g.test(stage) && b.test(stage2)) win = roof.p2
else if (k.test(stage) && b.test(stage2)) win = roof.p
else if (k.test(stage) && g.test(stage2)) win = roof.p2
else if (stage == stage2) tie = true
pl.sendText(roof.asal, `_*Resultados do jogo*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Ganhou \n` : ` Perdido \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Ganhou \n` : ` Perdido \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
delete this.suit[roof.id]
}
}

//=====================================
const isFiltered = (sender) => !!usedCommandRecently.has(sender)


const addFilter = (sender) => {
    usedCommandRecently.add(sender)
    setTimeout(() => usedCommandRecently.delete(sender), 4000) 
}
//=====================================
		

//=====================================
	
	
	///////////ANTI-SPAM BY ITALU/////////
if (isCmd && isFiltered(sender) && !isGroup) {
console.log(color('~> [SPAM]', 'red'), color(moment.tz('America/Sao_Paulo').format('HH:mm:ss'), 'yellow'), color(`${command}`), 'DE:', color(pushname))
if(info.key.fromMe) return 
const ff = `*Flood detectado, espere 2 segundos*`
return reply(ff)
}


if (isAntiLinkHard && isUrl(budy) && isFiltered(sender) && isGroup) {
console.log(color('~> [SPAM] - LINK', 'red'), color(moment.tz('America/Sao_Paulo').format('HH:mm:ss'), 'yellow'), color(`${budy}`), 'DE:', color(pushname))
if(info.key.fromMe) return 
return 
}


if (isCmd && isFiltered(sender) && isGroup) {
console.log(color('~> [SPAM]', 'red'), color(moment.tz('America/Sao_Paulo').format('HH:mm:ss'), 'yellow'), color(`${command}`), 'DE:', color(pushname))
if(info.key.fromMe) return 
const ff1 = `*Flood detectado, espere 2 segundos*`
return reply(ff1)
}		

	
	
//=====================================


//========MIDIA=============\\


//=============SELOS=============

//FAKEREPLY PRODUCT
const ftoko = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "120363042083601149@g.us" } : {})
},
message: {
"productMessage": {
"product": {
"productImage":{
"mimetype": "image/jpeg",
"jpegThumbnail": log0},
"title": "SAMODS", 
"description": "SUZANO BOT", 
"currencyCode": "USD",
"priceAmount1000": "2000",
"retailerId": "My[Samods]",
"productImageCount": 1
},
"businessOwnerJid": `0@s.whatsapp.net`
}
}
}

//=====================================

//FAKEREPLY TROLI
const ftroli = {
key : {
participant : '557398095072@s.whatsapp.net'
},
message: {
orderMessage: {
itemCount : 1,
status: 1,
surface : 1,
message: 'My[Samods]',
orderTitle: 'Bang',
thumbnail: log0,
sellerJid: '0@s.whatsapp.net'

}
}
}

//=====================================

//FAKEREPLY LOCATION
const flokasi = {
key : {
 participant : '557398095072@s.whatsapp.net'
},
message: {
locationMessage: {
name: 'BRASIL',
jpegThumbnail: log0
}
}
}

//=====================================

//FAKEREPLY DOCUMENT
const fdocs = {
key : {
 participant : '557398095072@s.whatsapp.net'
},
message: {
documentMessage: {
title: 'OLÁ TUDO BEM?', 
jpegThumbnail: log0
}
}
}

//=====================================

//FAKEREPLY GROUPINVITE
const fgclink = {
"key": {
"fromMe": false,
"participant": "0@s.whatsapp.net",
"remoteJid": "0@s.whatsapp.net"
},
"message": {
"groupInviteMessage": {
"groupJid": "120363042083601149@g.us",
"inviteCode": "mememteeeekkeke",
"groupName": "P", 
"caption": "OLÁ BOM JOGO", 
'jpegThumbnail': log0
}
}
}

//=====================================

//FAKEREPLY GIF
const fgif = {
key: { 
fromMe: false,
participant: `557398095072@s.whatsapp.net`, ...(from ? 
{ remoteJid: "120363042083601149@g.us" } : {}) 
},
message: { 
 "videoMessage": { 
 "title":"SAMODS",
 "h": `Hmm`,
 'seconds': "30", 
 'gifPlayback': 'true', 
 'caption': 'SUZANO-BOT',
 'jpegThumbnail': log0
}
}
} 

//=====================================

//FAKEREPLY TEXT WITH THUMBNAIL
const fakey = (teks) => {
pl.sendMessage(from, { text: teks, contextInfo:{"externalAdReply": {"title": `SÓ FÉ 😎`,"body": `LINK GRUPO SAMODS OFC`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./mídia-ft-vd/fotos/samods.jpg`),"sourceUrl": "https://chat.whatsapp.com/Bxap43PEXwTHRPrfJwfUOf"}}}, { quoted: m})
}
const ftextt = {
key: { 
fromMe: false,
participant: `557398095072@s.whatsapp.net`, ...(from ? 
{ remoteJid: "6289643739077-1613049930@g.us" } : {}) 
},
message: { 
"extendedTextMessage": {
 "text":"OLÁ TUDO BEM? ",
"title": `Hmm`,
 'jpegThumbnail': log0
}
} 
}

//=====================================

//FAKEREPLY VN
const fvn = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? 
{ remoteJid: "120363042083601149@g.us" } : {}) 
},
message: { 
"audioMessage": {
"mimetype":"audio/ogg; codecs=opus",
"seconds": "22:33",
"ptt": "true"
}
} 
}
l = 1
monospace = '```'


 
const enviarOrda = async(jid, text, orid, img, itcount, title, sellers, tokens, ammount) => {
const order = generateWAMessageFromContent(jid, proto.Message.fromObject({
"orderMessage": {
"orderId": orid, // Change ID
"thumbnail": img, // Change the Image
"itemCount": itcount, // Change the Item Count
"status": "INQUIRY", // Don't Replace
"surface": "CATALOG", // Don't Replace
"orderTitle": title, // Change the title
"message": text, // Change Message
"sellerJid": sellers, // Change the seller
"token": tokens, // Change the token
"totalAmount1000": ammount, // Change the Total Amount
"totalCurrencyCode": "BRL", // Up to you
}
}), { userJid: jid })
pl.relayMessage(jid, order.message, { messageId: order.key.id})
}

const enviarCatalog = async(jid, titulo, texto, valor) => {
const catalog = generateWAMessageFromContent(jid, proto.Message.fromObject({
"productMessage": {
"product": {
	"productImage": {
			"url": "https://mmg.whatsapp.net/d/f/An6ssWQrEx3DYOvrXx5Ld5-1zzyW8DpRhZvr2ZCKrIu-.enc",
			"mimetype": "image/jpeg",
			"fileSha256": "fR9ZYUp6oPISWJNO6ywrBBNck0OpSw7FYL6XPXjKS6M=",
			"fileLength": "99999999999",
			"height": 50,
			"width": 50,
			"mediaKey": "/BQzqmWzeGOB1X7aPOCAxbVUeZL18bw3v9J7yA0Vn2Y=",
			"fileEncSha256": "C7LQFJx65AAS6sdALkCGNmDC+0NWilRBH8zHa+Lt4x4=",
			"directPath": "/v/t62.7118-24/35880876_730612661375500_4224816547459430339_n.enc?ccb=11-4&oh=01_AVxtkNgm-pIDHhEhvkfWXRnfU9WbYIckQFKZrtbZuAzGmw&oe=631A1B4E&_nc_hot=1660217709",
			"mediaKeyTimestamp": "1660217472",
			"jpegThumbnail": userppbuff
		},
		"productId": "557197228880",
		"title": titulo,
		"description": texto,
		"currencyCode": "BRL",
		"priceAmount1000": valor,
		"productImageCount": 2
		},
	"businessOwnerJid": "557197228880@s.whatsapp.net"
	}
}), { userJid: jid })
pl.relayMessage(jid, catalog.message, { messageId: catalog.key.id})
}


//========BOTÃO DO AKINATOR)=============

switch(argsButton[0]) {
case 'finaki':
if(argsButton[1] == 'nao') {
reply('*Puxa não foi desta vez 😔*')
akinator[0][from] = undefined
fs.writeFileSync('./funções de cmd/funções/akinator.json', JSON.stringify(akinator, null, 2))
} else {
reply('*SABIA! EU VENCI OTÁRIO 🥳*')
akinator[0][from] = undefined
fs.writeFileSync('./funções de cmd/funções/akinator.json', JSON.stringify(akinator, null, 2))
}
break
case 'akinator':
if(argsButton[1] == 'nao') return reply('*Até a próxima amigo*') 
if(akinator[0][from]) return reply('*Desculpe-me amigo alguem ja está jogando, aguarde pra chegar sua vez*')
akinator[0][from] = {
    id: from,
    player: sender,
    game: new Aki({region: 'pt'})
}
await akinator[0][from].game.start()
listMessage = {
    text: akinator[0][from].game.question,
    footer: 'Mostrar opções',
    buttonText: 'Opções',
    title: "Pergunta",
    sections: [{
title: 'Opções',
rows: [{
rowId: `${prefix}respaki 0`,
title: 'Sim',
description: ''
},
{
rowId: `${prefix}respaki 1`,
title: 'Não',
description: ''
},{
rowId: `${prefix}respaki 2`,
title: 'Não sei',
description: ''
},{
rowId: `${prefix}respaki 3`,
title: 'Provavelmente sim',
description: ''
},
{
rowId: `${prefix}respaki 4`,
title: 'Provavelmente não',
description: ''
}]
    }]
}
pl.sendMessage(from, listMessage)
fs.writeFileSync('./funções de cmd/funções/akinator.json', JSON.stringify(akinator, null, 2))
break
}

//========INÍCIO DAS CASES=============


switch(command) {

//========MENUS=============

case "menu":
 sections = [
    {
	title: "𝙋𝙍𝙊𝘾𝙀𝘿𝙄𝙈𝙀𝙉𝙏𝙊𝙎",
	rows: [
	    {title: "programa 5s", rowId: `${prefix}5s`},
	    {title: "o que é rao?", rowId: `${prefix}rao`},
	    {title: "o que é fispq?", rowId: `${prefix}fispq`},
	    {title: "programa faz bem", rowId: `${prefix}fazbem`},
	    {title: "programa linha mestra", rowId: `${prefix}linha_mestra`},
	    
	]
    },
    {
	title: "𝙏𝙀𝙈𝘼𝙎 𝙄𝙈𝙋𝙊𝙍𝙏𝘼𝙉𝙏𝙀𝙎",
	rows: [
	    {title: "o que é o opa", rowId: `${prefix}opa`},
	    {title: "programa voluntariar", rowId: `${prefix}voluntariar`},
	    {title: "ver cotação atual do dólar", rowId: `${prefix}dolar`},
	]
    },
    {
	title: "𝙐𝙇𝙏𝙄𝙇𝙄𝘿𝘼𝘿𝙀𝙎",
	rows: [
	    {title: "informações do grupo", rowId: `${prefix}grupo`},
	    {title: "informações sobre o bot", rowId: `${prefix}sobre`},
	    {title: "lista de administradores do grupo", rowId: `${prefix}admins`},
	    {title: "contato do desenvolvedor do bot", rowId: `${prefix}dono`},
	]
    },
   {
	title: "𝘼𝙋𝙀𝙉𝘼𝙎 𝙉𝙊 𝙋𝙍𝙄𝙑𝘼𝘿𝙊",
	rows: [
	    {title: "ver seu perfil", rowId: `${prefix}perfil`},
	]
    },
    {
	title: "𝘼𝙋𝙀𝙉𝘼𝙎 𝘼𝘿𝙈𝙄𝙉𝙄𝙎𝙏𝙍𝘼𝘿𝙊𝙍𝙀𝙎",
	rows: [
	    {title: "abrir o grupo", rowId: `${prefix}abrir`},
	    {title: "fechar o grupo", rowId: `${prefix}fechar`},
	    {title: "ver o link de convite", rowId: `${prefix}gplink`},
	    {title: "remover o bot do grupo", rowId: `${prefix}sair`},
	    {title: "grupos que o bot participa", rowId: `${prefix}grupos`},
	    {title: "redefinir o link de convite", rowId: `${prefix}restartlink`},
	]
    },
    {
    title: "𝘼𝙋𝙀𝙉𝘼𝙎 𝙊 𝘿𝙀𝙎𝙀𝙉𝙑𝙊𝙇𝙑𝙀𝘿𝙊𝙍",
    rows: [
         {title: "virar admnistrador do grupo", rowid: `${prefix}getadm`},
    ]
    },
    {
	title: "𝙀𝙈 𝘿𝙀𝙎𝙀𝙉𝙑𝙊𝙇𝙑𝙄𝙈𝙀𝙉𝙏𝙊",
	rows: [
	    {title: "status minijardim", rowId: `${prefix}minijardim`},
	    {title: "status do raleamento", rowId: `${prefix}raleamento`},
	    {title: "tabela de aniversariantes", rowId: `${prefix}aniversariantes`},
	]
    },
]

const listMessages = {
  image: {url: 'img/botlogo.png',
quoted: fvn},
  text: `┏━━••• *_ULTILIDADES_*
┃》${prefix}feedback
┃》${prefix}enquete (pergunta)
┃》${prefix}covid (sigla do estado)
┃》${prefix}mediafire (link do arquivo para baixar)
┗━━━━━━━━ ✓

┏━━••• *_SOMENTE NO PRIVADO_*
┃》${prefix}img
┃》${prefix}sticker
┃》${prefix}play (nome da música)
┃》${prefix}letra (nome da música)
┗━━━━━━━━ ✓

┏━━••• *_SOMENTE ADMINS_*
┃》${prefix}add @
┃》${prefix}ban @
┃》${prefix}rebaixar @
┃》${prefix}promover @
┃》${prefix}entrar (link de convite)
┃》${prefix}setname (novo nome)
┃》${prefix}setfoto (marca a foto)
┃》${prefix}setdesc (nova descrição)
┃》${prefix}del (marca a mensagem para apagar)
┗━━━━━━━━ ✓

┏━━••• *_Apenas o Desenvolvedor_*
┃》${prefix}alerta
┃》${prefix}hidetag
┃》${prefix}fotobot (nova foto do bot)
┃》${prefix}setbio (nova biografia do bot)
┗━━━━━━━━ ✓\n\n`,
  footer: "*Comandos selecionáveis abaixo!*",
  title:"",
  buttonText: "Clique aqui",
  sections
}
//console.log(messageType)
senMsg = await pl.sendMessage(from, listMessages,{quoted: mek, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": " SUZANO-BOT OFICIAL ", 'jpegThumbnail': fs.readFileSync('botlogo.jpeg')}}}})					

break

case "about":
case "sobre":
    uptime = process.uptime()  
    reply(`
_Olá, sou um assistente virtual (serviço de atendimento automatizado) mais conhecido como bot, eu recebo, analiso e respondo mensagens como um usuário real, ou até mais rápido e mais preciso, e estou sempre disposto atender ao seu comando._


*características gerais:*

*prefixo* :${prefix}\n
*nome do bot*:  _*${NomeDoBot}*_\n
*número do bot* : wa.me/${botNumber}\n
𝗧𝗲𝗺𝗽𝗼 𝗮𝘁𝗶𝘃𝗼: ${runtime(uptime)}\n
*linguagem de programação*: _nodejs_\n
*banco de dados*: _sql_\n
*segurança dos dados*: _criptografia sha md5 (irreversível)_\n
*criado por*: _*ueder avelar (sa-mods)*_\n
*data de criação*: _*02/09/2022*_`)
break
	case 'play2':
		teks = body.slice(6)
		anu = await fetch(`http://brizas-api.herokuapp.com/sociais/youtubesrc?apikey=brizaloka&query=${teks}`) //brizaloka
		const objs = []
		console.log(anu)
		for(i=0;i< anu.resultados.length; ++i) {
		let data = {
		"rowId": `${prefix}mp3 `+ anu.resultados[i].title,
		"title": `${prefix}mp3`,
		description: anu.resultados[i].title
		}
		objs.push(data)
		}
		const payload = {
		listMessage: {
		title: " Músicas encotradas >",
		buttonText: "Mostra lista de músicas",
		description: `Nome: ${teks}`,
		listType: 1,
		sections: [
		{
		title: "Músicas relacionadas",
		rows: objs
		}
		]
		}
		}
		/*let preparedPayload = await pl.prepareMessageFromContent(from, payload, {});
		await pl.relayWAMessage(preparedPayload, {waitForAck: true})*/
		await pl.sendMessage(from, payload, {waitForAck: true},{quoted: mek});
		break
		
case "alerta":
if (!isOwner) return reply(resposta.dono)
let getGroups = await pl.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
Id = "557398095072-1601778578@g.us"
for(let a of groups) {
   Chatid = a.id
   /*if (Chatid !== Id) {
   pl.sendMessage(Chatid, { text: `*mensagem de aviso do desenvolvedor*:\n\n_${q}_`}, {quoted: mek})
   } else {
   continue
   }*/
   pl.sendMessage(Chatid, { text: `*mensagem de aviso do desenvolvedor*:\n\n_${q}_`}, {quoted: mek})
}
break

case "perfil":
if (isGroup && !isOwner) return reply(resposta.privado)
try {
ppimg = await pl.profilePictureUrl(`${sender.split("@")[0]}@c.us`, "image")
} catch(e) {
ppimg = logo
}
perfil = await getBuffer(ppimg)
try {
pl.sendMessage(from, {
image: perfil,
caption:`

Nome: ${pushname}
Número: ${sender.split("@")[0]}
Link: https://wa.me/${sender.split("@")[0]}`
}, {quoted: mek})
/*tujuh = fs.readFileSync("./arquivos/audios/perfil.mp3")
await pl.sendMessage(from, {audio: tujuh, mimetype: "audio/mp4", ptt:true}, {quoted: mek})*/
} catch(e) {
console.log(e)
reply(resposta.erro)
}
break

case "grupo":
if (!isGroup) return reply(resposta.grupo)
if (!isBotGroupAdmins) return reply(`${groupAdmins}`) // reply(resposta.botadm)
/*for (admins in groupAdmins){
    admins.slice("@s.whatsapp.net")}*/
try {
linkgc = await pl.groupInviteCode(from)
linkgp = 'https://chat.whatsapp.com/'+linkgc
} catch { linkgp = "Bot não é admin" }

infos = `*Informações do grupo*\n
Nome : ${groupName}\n
admins:\n`
no = 0
		for (let adm of groupAdmins) {
			no += 1
		    infos += `[${no.toString()}] @${adm.split('@')[0]}\n`
			}
infos += `
Id : ${from}\n
total de participantes: ${groupMembers.length}\n
Descrição : ${groupDesc}\n
Link de convite: ${linkgp}\n
Data : ${Data}\n
Horário : ${hora}
`
	mentions(infos, groupAdmins, true)
break

case "feedback":
pl.sendMessage(`${dono}@s.whatsapp.net`,{ text:`Feedback de ${pushname}:\n${q}`})
break

case 'listadms':
case "admins":
      if (!isGroup) return reply(resposta.grupo)
		teks = `Lista de administradores do grupo *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
		no = 0
		for (let admon of groupAdmins) {
			no += 1
		    teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
			}
		mentions(teks, groupAdmins, true)
break

case "5s":
     reply(`
O Programa 5S foi desenvolvido no Japão na década de 1950, logo após a Segunda Guerra Mundial. É um Programa que oferece ferramentas para a organização de todos os ambientes, sejam eles industriais, comerciais e residenciais.

É a base para a obtenção de padrões necessários à gestão da qualidade total, quando falamos em trabalho externo, e base para nossa saúde organizacional e financeira, quando aplicamos em casa.

São conceitos simples que, quando praticados, são capazes de modificar as atitudes, comportamentos e melhorando todos os ambientes.

O nome 5S’s vem das iniciais de cinco palavras japonesas, traduzidas no Brasil, por sensos:

1º S > SEIRI > Senso de Utilização
2º S > SEITON > Senso de Ordenação
3º S > SEISO > Senso de Limpeza
4º S > SEIKETSU > Senso de Asseio e Padronização
5º S > SHITSUKE > Senso de Autodisciplina
 `)
break

case "fazbem":
     reply(`
O Faz Bem é um programa específico de Saúde e Qualidade de Vida com equipe 100% dedicada a atividades da Suzano que tem como objetivo desenvolver ações de promoção à saúde e qualidade de vida voltadas aos colaboradores da companhia e seus familiares( prioritariamente dependentes legais, incluindo adultos e crianças). O programa disponibiliza, entre outros benefícios, auxílio 24h/dia e 7 dias por semana (via 0800), nas áreas psicológica, jurídica, social, física, nutricional e auxílio pet.

As iniciativas da Suzano em relação à Saúde e Qualidade de Vida incluem também:

 

.Gestão de absenteísmo médico por CID M  doenças do tecido osteomuscular e do tecido conjuntivo , de forma a monitorar adoecimentos de fundo musculoesquelético;

.Gestão de absenteísmo médico por CID F  transtornos mentais e comportamentais , de forma a monitorar adoecimentos de natureza psíquica;
Gestão de afastamentos junto à Previdência Social, com investigação de nexo ocupacional sempre que indicado. As 2 primeiras metas são compartilhadas entre os médicos do trabalho e a consultora de ergonomia;

.Acolhimento assistencial de colaboradores, provendo o tratamento e/ou encaminhamento necessários à sua condição de saúde, visando o devido controle ou cura de suas condições de saúde;
Implantação de melhorias/adequações ergonômicas em processos produtivos em unidades fabris e florestais; com análise contínua sobre os postos de trabalho e realização de ginástica laboral nesses locais;

.Manutenção e suporte dos Comitês de Ergonomia existentes, evidenciando melhorias ergonômicas resultante do trabalho de cada um deles;
Desenvolver ações de Qualidade de Vida (QV) voltadas para o colaborador e seus dependentes nos Centros de Distribuição da empresa;
Desenvolver ações de QV abrangendo colaboradores e dependentes, para nossas maiores unidades fabris e florestais.`)
break

case "fispq":
     reply(`
A sigla FISPQ significa Ficha de Informação de Segurança de Produtos Químicos. É um documento normalizado pela Associação Brasileira de Normas Técnicas (ABNT) conforme NBR 14725-4.

A FISPQ é o meio de o fabricante do produto divulgar informações importantes sobre os perigos dos produtos químicos que fabrica e comercializa.

O documento é dividido por seções e contemplam informações sobre vários aspectos do produto. Para esses aspectos, a FISPQ fornece informações detalhadas sobre os produtos e também sobre ações de emergência a serem adotadas em caso de acidente.

as seções são:
1 - Identificação do produto e da empresa
2 - Identificação de perigos
3 - Composição e informações sobre os ingredientes
4 - Medidas de primeiros-socorros
5 - Medidas de combate a incêndio
6 - Medidas de controle para derramamento ou vazamento
7 - Manuseio e armazenamento
8 - Controle de exposição e proteção individual
9 - Propriedades físicas e químicas
10 - Estabilidade e reatividade
11 - Informações toxicológicas
12 - Informações ecológicas
13 - Considerações sobre tratamento e disposição
14 - Informações sobre transporte
15 - Regulamentações
16 - Outras informações

Na prática, a FISPQ é um baita auxílio para o usuário do produto químico, pois mostra seus principais riscos e sugere proteções para o trabalho com o produto.

As FISPQ também devem ser utilizadas para treinamento de usuários dos produtos químicos.

As FISPQ’s dos produtos sempre são enviadas pelo fabricante junto com os produtos. Como na UFV a compra de produtos químicos geralmente é coletiva, deve ser feita uma cópia da FISPQ para cada laboratório.

Quando a FISPQ não for enviada junto ao produto, o usuário do produto químico deve solicitar ao fornecedor/fabricante.`)
break


case "alimentação":
case "alimentacao":
     reply(`Em desenvolvimento`)
break

case "opa":
     reply(`Oferta Pública de Aquisição (OPA) é o processo pelo qual uma empresa passa quando quer parar de negociar suas ações na bolsa de valores.

Também conhecida como “fechamento de capital, a OPA é o oposto da Oferta Pública Inicial (IPO), que é quando uma empresa abre capital na bolsa  ou seja, quando ela começa a negociar suas ações na bolsa de valores.

Em outras palavras, a Oferta Pública de Aquisição dá início à saída de uma companhia do mercado de capitais.

Como a Oferta Pública de Aquisição funciona?
A Oferta Pública de Aquisição acontece da seguinte forma: o acionista majoritário, que é aquele que detém a maior parte das ações da empresa, faz uma oferta aos outros acionistas, garantindo a compra do restante das ações da companhia.

Segundo as normas da Comissão de Valores Mobiliários (CVM), o valor dessa oferta deve ser determinado por uma empresa externa, especialista na área.

Para chegar a uma conclusão, essa empresa analisa, principalmente, 3 fatores:

O preço médio da ação nos 12 meses anteriores;
O patrimônio líquido por ação; e
Os fluxos de caixa futuros.
Depois, o valor estabelecido para a compra das ações precisa da aprovação de dois terços dos acionistas. No entanto, se 10% ou mais discordarem, uma assembleia é convocada para que uma nova avaliação seja apresentada.

Caso o novo valor seja mais alto, ele será o preço válido para a negociação. Assim, fica a critério do acionista majoritário ou do grupo de acionistas que iniciou a OPA decidir se aceita ou não.

Sem acordo, a Oferta Pública de Aquisição é interrompida. Do contrário, a compra se concretiza e o capital da empresa é fechado.

Ao iniciar o processo da OPA, a empresa deve comunicar o fato à CVM, ao mercado e aos acionistas.

Geralmente, isso é feito por meio de comunicados ou notas divulgadas em jornais de grande circulação, no próprio site da companhia (na central de relacionamentos do investidor) ou em publicação de algum órgão público oficial.

A OPA é um bom exemplo do que chamamos de “fato relevante>: uma informação relevante que pode gerar um grande impacto na realidade de uma empresa, sendo assim uma informação de interesse de todos os seus acionistas.

Por que ocorre a Oferta Pública de Aquisição?
Há diversas situações que podem fazer com que a companhia realize uma oferta de aquisição de ações. Dentre os principais motivos, podemos destacar:

Ações muito baratas: uma OPA pode acontecer se o controlador da empresa entender que a organização está cotada com um valor de mercado abaixo do seu preço justo.
Horizonte favorável: quando há boas perspectivas de negócios, pode ser o objetivo dos controladores fechar o capital na expectativa de um bom potencial de crescimento.
Baixa necessidade de recursos: essa situação acontece quando a companhia está consolidada e rentável e não visa à captação de mais de recursos de terceiros no mercado.
A OPA, porém, nem sempre é uma negociação vista com bons olhos pelo mercado financeiro, pois sua realização pode enfraquecer o mercado de ações, já que reduz o número de empresas disponíveis na bolsa de valores.`)
break

case "clima":
     reply(`em Desenvolvimento`)
break

case "covid":
     covid = await fetchJson(`https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/${q}`)
     if (`${covid.uf}` == "undefined") {
     reply("Certifique-se de inserir a sigla do estado corretamente")
     return
     }
     reply(`Relatório sobre covid19 no estado ${covid.state}:
     
id = ${covid.uid}
uf = ${covid.uf}
casos = ${covid.cases}
mortes = ${covid.deaths}
suspeitos = ${covid.suspects}
recuperados = ${covid.refuses}
`)
break

case "dólar":
case "dolar":
case "dolarhoje":
case "dolar hoje":
     dolar = await fetchJson("http://economia.awesomeapi.com.br/json/last/USD-BRL")
     reply(`A cotação do dólar está em: ${dolar.USDBRL.bid} reais`)
     
break

case "minijardim":
     reply(`Em desenvolvimento`)
break

case "raleamento":
     reply(`Em desenvolvimento`)
break

case "aniversariantes":
     reply(`Em desenvolvimento`)
break

case "seguranca":
     reply(`Em desenvolvimento`)
break

case "voluntariar":
     reply(`O programa Voluntariar foi criado há mais de 20 anos, com o intuito de aproximar a empresa das comunidades vizinhas por meio da mobilização de colaboradores(as), prestadores(as) de serviço, familiares e parceiros(as) em ações voluntárias que fortalecem o protagonismo social e promovem mudanças positivas na sociedade.

Em um ano de pandemia, o grande desafio foi manter a atuação voluntária de forma on-line, protegendo, assim, a saúde de voluntários(as) e beneficiários(as) das ações. Com isso, os resultados, quando comparados a anos anteriores, apresentaram números mais tímidos. Isso, porém, não impactou a qualidade do engajamento dos(as) participantes.`)
break

case "rao":
case "raos":
     reply(`RELATÓRIO DE ANÁLISE DE OCORRÊNCIA (RAO)
Documento gerado pelo Sistema de Gestão SSO que tem o objetivo de registrar e divulgar a ocorrência de acidentes que provoquem dano pessoal, material, ambiental ou incidente com alto potencial de risco. Esse relatório também tem o objetivo de verificar se os envolvidos na ocorrência cometeram ato faltoso ou falta grave, de acordo com as diretrizes do Linha Mestra.`)
break

case "linha mestra":
case "linha-mestra":
case "linha_mestra":
case "linhamestra":
      reply(`O Linha Mestra do Grupo Suzano é um conjunto de regras de segurança que visam oferecer melhores condições de trabalho para todos, buscando a adequação do risco através das medidas de prevenção necessárias.

Essas regras de segurança servem para nos orientar no caminho certo, apontando-nos as atitudes e comportamentos adequados para evitar acidentes. Portanto, devem ser seguidas rigorosamente na Suzano Papel e Celulose.`)
break




case 'menuadm':
case 'menuadms':
case 'adm':  
bla = fs.readFileSync('audios/admin.mp3')
pl.sendMessage(from, {audio: bla, mimetype: 'audio/mp4', ptt:true}, {quoted: fvn})

sendBimg(from, `${logo}`, menuadm(prefix, pushname, numerodn, tempo, isGroup, groupName, NomeDoBot), `〘 ${NomeDoBot} 〙`, 
[{buttonId: `${prefix}info`, buttonText: {displayText: `[🗯] INFORMAÇÕES [🗯]`}, type: 1}], selo) 
break 

/*case 'list': case 'menu': case 'help': case '?': {
timestampe = speed();
latensie = speed() - timestampe
uptime = process.uptime()
adivinhaa = info.key.id.length > 21 ? 'Android 🥴' : info.key.id.substring(0, 2) == '3A' ? 'IPHONE 🔋🔌' : 'ZAP DA WEB 💻';
sections = [
{
title: "[🧑‍💻] MANUELA BOT [🧑‍💻] ",
rows: [
{title: "[🐵] MENU COMPLETO [🐒]", rowId: `${prefix}menuc`},
{title: "[🩸] MENULOGO [🚩]", rowId: `${prefix}menulogos`},
{title: "[😇] MENU DONO [🥱]", rowId: `${prefix}menudono`},
{title: "[🥰] MENU ADM [🥰]", rowId: `${prefix}menuadm`},
{title: "[🩸] INFO DONO [🚩]", rowId: `${prefix}infodono`},
{title: "《☆》 COMPRAR 《☆》", rowId: `${prefix}dono`},
{title: "[👤] DONO [👤]", rowId: `${prefix}dono`},
{title: "[🗯] INFORMAÇÕES [🗯]", rowId: `${prefix}info`},
{title: " [🍒] AKINATOR [🍒]", rowId: `${prefix}akinator`},
{title: "[🩸] VER O QUANTO VC É GAY [🚩]", rowId: `${prefix}gay2`}
]
},
]
 

const listMessage2 = {
text: `
╭━─━───༺[🗯]༻────━─━╮

 👋 OLÁ ${pushname} ${tempo}
  
 SEU CELULAR É: ${adivinhaa}
 
╰━─━───༺[❤️‍🔥]༻────━─━╯

☆ 《 INFORMAÇÕES DO BOT 》 ☆
┏━━━━━━[🗯]━━━━━━━━ ➤
VELOCIDADE: ${latensie.toFixed(4)}

NOME DO BOT: 〘 ${NomeDoBot} 〙

DONO: wa.me/${global.numerodonoa}

┗━━━━━━[💫]━━━━━━━━ ➤`,
  footer: `〘 ${NomeDoBot} 〙`,
  title: ``,
  buttonText: "[🩸] LISTA DE MENUS [🚩]",
  sections
}
sendMsg = await pl.sendMessage(from, listMessage2, {quoted: fvn})
}
break*/

 case 'info':
 try {
ppimg = await pl.profilePictureUrl(`${sender.split('@')[0]}@c.us`, 'image')
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
me = pl.user
uptime = process.uptime()
teks = `
╭━─━───༺[🗯]༻────━─━╮

*USUARIO*: ${pushname}

*NOME DO BOT* : ${me.name}

*NÚMERO DO BOT* : wa.me/${me.id.split('@')[0]}

*PREFIX* : ${prefix}

*O BOT ESTA ATIVO DESDE* : ${runtime(uptime)}

╰━─━───༺[💫]༻────━─━╯`
daftarimgg = await getBuffer(ppimg)
pl.sendMessage(from, {image: daftarimgg, caption: teks, mentions: [pl.user.id]})
break

case 'owner':
case 'dono': 
case 'infodono': 
 numerodn = numerodonoa
//sendBimg(from, `${logo}`, infodono(prefix, numerodn, NomeDoBot), `DONO OFC 😉`, [
//{buttonId: `${prefix}gpofc`, buttonText: {displayText: `[🗯] 𝐆𝐑𝐔𝐏𝐎 𝐎𝐅𝐈𝐂𝐈𝐀𝐋 [🗯]`}, type: 1}], selo) 

let vcard = 'BEGIN:VCARD\n' 
    + 'VERSION:3.0\n' 
    + 'N:;Hya.;;;'
    + 'FN:Hya.\n' 
    + 'ORG:SAMODS;\n'
    + 'NAME: Ueder Avelar\n'
    + 'TEL;type=CELL;type=VOICE;waid=557398095072:+55 73 98095072\n'
    + 'END:VCARD'
pl.sendMessage(sender, { contacts: { displayName: 'SAMODS.', contacts: [{ vcard }] } }, { quoted: info })
break

case 'destrava':
if (!isPremium && !isGroupAdmins && !isOwner) return reply(enviar.msg.premium)
await pl.sendMessage(from, {text: destrava(prefix)}, {quoted: m})
break 

case 'totag':
case 'cita':
case 'hidetag':
if(isGroup) return reply(resposta.privado)
if(!isOwner) return reply(resposta.dono)
membros = (groupId, membros1) => {
array = []
for (let i = 0; i < membros1.length; i++) {
array.push(membros1[i].id)
}
return array
}
var yd = membros(from, groupMembers)
if((isMedia && !m.message.videoMessage || isQuotedSticker) && args.length == 0) {
media = isQuotedSticker ? m.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage : m.message.stickerMessage
rane = getRandom('.'+await getExtension(media.mimetype))
img = await getFileBuffer(media, 'sticker')
fs.writeFileSync(rane,img)
fig = fs.readFileSync(rane)
var options = {
sticker: fig,  
mentions: yd
}
pl.sendMessage(from, options)
} else if ((isMedia && !m.message.videoMessage || isQuotedImage) && args.length == 0) {
media = isQuotedImage ? m.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : m.message.imageMessage
rane = getRandom('.'+await getExtension(media.mimetype))
img = await getFileBuffer(media, 'image')
fs.writeFileSync(rane,img)
buff = fs.readFileSync(rane)
pl.sendMessage(from, {image: buff, mentions: yd}, {quoted: m})
} else if ((isMedia && !m.message.videoMessage || isQuotedVideo) && args.length == 0) {
media = isQuotedVideo ? m.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : m.message.videoMessage
rane = getRandom('.'+await getExtension(media.mimetype))
vid = await getFileBuffer(media, 'video')
fs.writeFileSync(rane,vid)
buff = fs.readFileSync(rane)
pl.sendMessage(from, {video: buff, mimetype: 'video/mp4',mentions: yd}, {quoted: m})
} else if ((isMedia && !m.message.videoMessage || isQuotedAudio) && args.length == 0) {
media = isQuotedAudio ? m.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : m.message.audioMessage
rane = getRandom('.'+await getExtension(media.mimetype))
aud = await getFileBuffer(media, 'audio')
fs.writeFileSync(rane,aud)
buff = fs.readFileSync(rane)
pl.sendMessage(from, {audio: buff, mimetype: 'audio/mp4', ptt:true,mentions: yd}, {quoted: m})
} else if ((isMedia && !m.message.videoMessage || isQuotedDocument) && args.length == 0) {
media = isQuotedDocument ? m.message.extendedTextMessage.contextInfo.quotedMessage.documentMessage : m.message.documentMessage
rane = getRandom('.'+await getExtension(media.mimetype))
doc = await getFileBuffer(media, 'document')
fs.writeFileSync(rane,doc)
buff = fs.readFileSync(rane)
pl.sendMessage(from, {document: buff, mimetype : 'text/plain',mentions: yd},{quoted: m})
} else if(body){
if(q.length < 1) return reply('Citar oq vey?')
pl.sendMessage(from, {text: body.slice(command.length + 2), mentions: yd})
} else {
reply(`Responder imagem/documento/gif/adesivo/áudio/vídeo com legenda ${prefix + command}`)
}
break



//========FINAL DOS MENU=============



//=======MÚSICAS=============

case 'play':
if (isGroup && !isOwner) return reply(resposta.privado)
if (args.length < 1) return reply(`Exemplo:\n${command} tudo ele faz`)
pl.sendMessage(from, { react: { text: `⏳`, key: m.key }})
srch = args.join(" ")
ytbusca = await yts(srch);
ytbr = ytbusca.all
res = await yts(srch)
var link = ytbr[0].url
sections = []
ytbr.splice(10, ytbr.length)
ytlink = ytbr.url
ytbr.forEach((ytbr, i) =>{
sections.push({
rows: [ {
description: `${ytbr.title}`,
title: `🎵 𝐀𝐮𝐝𝐢𝐨 🔥 Duração: ${ytbr.timestamp}`,
rowId: `${prefix}playaudio ${ytbr.title}`},
{description: `${ytbr.title}`,
title: `📸 𝐕𝐢𝐝𝐞𝐨 🧑‍💻 Duração: ${ytbr.timestamp}`,
rowId: `${prefix}playvideo ${ytbr.title}`} ],
title: `${NomeDoBot}`
})
}) 
pl.sendMessage(from, {text: `*✅ MÚSICA ENCONTRADA ✅*`,title: `${NomeDoBot}`,buttonText: "🔍 ESCOLHER A MÚSICA 🔥", sections}, { quoted:info})
break

case 'play3':
if(!q) return reply(`Cade o nome?`)
sendMsg = await pl.sendMessage(from, {react: {text: `⏳`, key: info.key}})
qp = args.join(" ")
res = await yts(qp)
blaimg = await getBuffer(res.all[0].image)
blalink = await getBuffer(res.all[0].url)
bla = `
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
      ⟮ _*◉ʏᴏᴜᴛᴜʙᴇ◉*_ ⟯ 
   
0.02━◉━━━━━━━━━━━━3.26
      🔂   ⏪   ⏸️     ⏩  🎵
      
❤️‍🔥 Titulo: ${res.all[0].title}
📈 Visualizações: ${res.all[0].views}
👀 Duração: ${res.all[0].timestamp}
🔎 Canal: ${res.all[0].author.name}
🗯 Link ${res.all[0].url}`
buttons02 = [
{buttonId: `${prefix}ytmp3 ${res.all[0].url}`, buttonText: {displayText: `Audio 🎶`}, type: 1},
{buttonId: `${prefix}ytmp4 ${res.all[0].url}`, buttonText: {displayText: `Video 🎥`}, type: 1},
]
buttonMessage02 = {
image: await getBuffer(res.all[0].image),
sendEphemeral: true,
Thumbnail: await getBuffer(res.all[0].thumbnail),
mentions: [sender],
caption: bla,
 footer: ``,
buttons: buttons02,
headerType: 4, contextInfo: {externalAdReply : {title : `𝚫 SAMODS-BOT ⫹⫺`, renderLargerThumbnail:false, showAdAttribution: true, body: `9:07●━━━━━━── 10:49⇆`, mediaUrl: `${q}`, mediaType: 2, thumbnail: fs.readFileSync('./mídia-ft-vd/fotos/manu.jpg')
 }}}
pl.sendMessage(from, buttonMessage02)
break

/*case "play":
if(!q) return enviar("digite o nome da música que você deseja exemplo: /play um novo endereço")
qp = args.join(" ")
res = await yts(qp)
enviar(resposta.espere)
blaimg = await getBuffer(res.all[0].image)

bla = `➥ Titulo: ${res.all[0].title}\n➥ Visualizações: ${res.all[0].views}\n➥ Tempo: ${res.all[0].timestamp}\n➥ Canal: ${res.all[0].author.name}\n ➥ Se você não conseguir visualizar os botões, execute o playaudio, playvideo como segunda opção.`

enviarImgB(from, `${res.all[0].image}`, bla, nomeBot, [
{buttonId: `${prefixo}playaudio ${qp}`, buttonText: {displayText: '🎵 Audio'}, type: 1}, {buttonId: `${prefixo}playvideo ${qp}`, buttonText: {displayText: '🎥 Video'}, type: 1}], info)
break*/
case "playaudio":
if (isGroup && !isOwner) return reply(resposta.privado)
reply(resposta.espere)
bla = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/yt/playmp4?apikey=apiteam&query=${q}`) 
audbla = await getBuffer(bla.url)
pl.sendMessage(from, {audio: audbla, mimetype: "audio/mp4"}, {quoted: info}).catch(e => {
reply(resposta.erro)
})
break

case "playvideo":
if (isGroup && !isOwner) return reply(resposta.privado)
reply(resposta.espere)
try {
bla = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/yt/playmp4?apikey=apiteam&query=${q}`) 
audbla = await getBuffer(bla.url)
} catch (erro) {
console.log(erro)}
pl.sendMessage(from, {video: audbla, mimetype: "video/mp4"}, {quoted: info}).catch(e => {
reply(resposta.erro)
})

/*
case 'ytmp3':
case 'ytaudio':
console.log(q)
reply(`OLÁ ESTOU ATENDENDO SEU PEDIDO 🥰`)
try {
let { yta } = require('./funções de cmd/funções/yta')
if (!q) return reply(`Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`)
let quality = args[1] ? args[1] : '128kbps'
media = await yta(`${q.replace("/shorts/", "/watch?v=").split('?feature')[0]}`, quality)
if (media.filesizeF.split('MB')[0] >= 100) return reply(`Audio muito pesado`)
docmedia = {
audio: {url: media.dl_link },
mimetype: 'audio/mpeg',
jpegThumbnail: await getBuffer(media.thumb),
fileName: media.title+'.mp3',
headerType: 4,
mentions: [sender],
contextInfo: {externalAdReply : {title : `𝚫 SAMODS-BOT ⫹⫺`, renderLargerThumbnail:false, showAdAttribution: true, body: `9:07●━━━━━━── 10:49⇆`, mediaUrl: `${q}`, mediaType: 2, thumbnail: fs.readFileSync('./mídia-ft-vd/fotos/manu.jpg')
}}}
pl.sendMessage(from, docmedia, {quoted:info})
} catch (erro){
console.log(erro)
reply('Ocorreu em erro, tente novamente após alguns minutos.')
}
break


case 'ytmp4': case 'ytvideo':

sendMsg = await pl.sendMessage(from, {react: {text: `⏳`, key: info.key}})
                try{
                    if(args.length < 1) return reply('CADE O LINK ANIMAL')
                    if(!args[0]) return reply('❌ Isso não é um link do youtube ❌')
                    anumusic = await new Youtube().ytmp4(args[0])
                    buff = await getBuffer(anumusic.dl_link)
                    reply('*⬇🥰 Baixando vídeo ⬇🥰*')
                    pl.sendMessage(from, {video: buff, mimetype: 'video/mp4', contextInfo: {externalAdReply : {title : `𝚫 SUZANO-BOT ⫹⫺`, renderLargerThumbnail:false, showAdAttribution: true, body: `9:07●━━━━━━── 10:49⇆`, mediaUrl: `${q}`, mediaType: 2, thumbnail: fs.readFileSync('./mídia-ft-vd/fotos/manu.jpg') }}}, {quoted: m})
                } catch(e) {
                    console.log(e)
                    reply('Error')
                }
                break
*/

//========FINAL DAS MÚSICAS==========\\
//========================================\\

case 'conselhobiblico':
case 'conselhosbiblico':  
case 'conselhosb':   
case 'conselhob':  
var conselhosb = conselhob[Math.floor(Math.random() * conselhob.length)]   
jr = `
╭━─━───༺[🗯]༻────━─━╮
╿║• ${tempo} ${pushname} 
╿║
╿║• Conselhos Bíblico para você: 
╿║
╿║• ${conselhosb} 
╿║
╿║• Bot: ${NomeDoBot}
╿║• ${!isGroup ? `𝗨𝘀𝘂𝗮𝗿𝗶𝗼: ${pushname}` :  `𝗚𝗿𝘂𝗽𝗼: ${groupName}`}
╰━─━───༺[💫]༻────━─━╯`
await pl.sendMessage(from, {text: jr}, {quoted:m, contextInfo: {"mentionedJid": jr}})
break

//-_-_-_-_--_-_-_-_-_--_--_-_-_-_-_-_-_-_-_-_-_-_\\   
 
case 'enquete':
enquete = generateWAMessageFromContent(from, proto.Message.fromObject({
pollCreationMessage: {
options: [
{ optionName: 'NÃO' },
{ optionName: 'SIM'}, 
{ optionName: 'MAIS OU MENOS'},
],
name: `${q}`,
selectableOptionsCount: 1
}
}), { userJid: from })
await pl.relayMessage(from, enquete.message, { messageId: enquete.key.id})
break


//========FINAL DOS JOGOS=============

//========VOZES=============



 /*case 'lyrics':
if (args.length < 1) return reply('Qual é o nome da música?')
teks = body.slice(7)
res = await lirikLagu(teks)
reply(`
┏━━━━━━[🗯]━━━━━━━━
❤️‍🔥 *música: ➤ ${teks}*
🗯 *Letras:* ☟︎︎︎
┗━━━━━━[💫]━━━━━━━━

*${res[0].result}*`)
 break*/
 
case 'lyrics':
case 'letra':
if (isGroup && !isOwner) return reply(resposta.privado)
//if(!isPremium) return reply(enviar.msg.premium)
try {
reply(mess.wait)
teks = body.slice(7)
anu = await fetchJson(`https://api.brizaloka-api.tk/ia/lyricsfinder?apikey=17desetembro&query=${teks}`, {method: 'get'})
reply(`*Nome da música: ${teks}*\n*Letras: ${anu.lyrics}*`)
} catch (e) {
    console.log(e)
    reply(`erro!!`)
}
break
 
case 'ptlyrics':
if (isGroup && !isOwner) return reply(resposta.privado)
try {
reply(mess.wait)
teks = body.slice(10)
anu = await fetchJson(`https://api.brizaloka-api.tk/ia/lyricsfinder?apikey=17desetembro&query=${teks}`, {method: 'get'})
dated = `*Nome da música: ${teks}*\n*Letras:*\n*${anu.lyrics}*`
} catch (e) {
    console.log(e)
    reply(`erro!!`)
}
break
    
case 'serpremium':
case 'serprem':  
if (!isOwner && !m.key.fromMe) return reply(mess.donosmt)
premium.push(`${numerodonoa}@s.whatsapp.net`)
fs.writeFileSync('./funções de cmd/usuarios/premium.json', JSON.stringify(premium))
reply(`Pronto ${numerodonoa} você foi adicionado na lista premium.`)
break


case 'getquoted':
case 'getinfo':  
case 'get':  
if(!isOwner) return reply(resposta.dono)   
reply(JSON.stringify(info.message.extendedTextMessage.contextInfo, null, 3))
break

case 'id':
case 'figuid':
if (!isOwner && !info.key.fromMe) return 
if (isQuotedSticker) {
var figu = info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString("base64");
reply(figu)
}
break

		case 'block': 
		if (!info.key.fromMe && !isOwner) return reply('Precisa ser Dono')
                if (!info.quoted && !text) return reply(`FORMA ERADA`)
		let users = info.mentionedJid[0] ? info.mentionedJid[0] : info.quoted ? info.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await pl.updateBlockStatus(users, 'block')
		reply(` usuário bloqueado no pv`)
	break
        case 'unblock': 
		if (!info.key.fromMe && !isOwner) return reply('Precisa ser Dono')
                if (!info.quoted && !text) return reply(`FORMA ERADA`)
		let userss = info.mentionedJid[0] ? info.mentionedJid[0] : info.quoted ? info.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await pl.updateBlockStatus(userss, 'unblock')
		reply(` usuário desbloqueado no pv`)
	break

case 'substituir':
if(!isOwner) return reply(resposta.dono)
 if (isMedia && !info.message.videoMessage || isQuotedDocument) {
media = isQuotedDocument ? info.message.extendedTextMessage.contextInfo.quotedMessage.documentMessage : info.message.documentMessage
rane = getRandom('.'+await getExtension(media.mimetype))
doc = await getFileBuffer(media, 'document')
fs.writeFileSync(q, doc)
pl.sendMessage(from, {text:'Substituido com sucesso.'},{quoted: info})
} else {
reply('nao deu')
}
break


case 'grupos':
try {
if (!isGroupAdmins && !isOwner) return reply(resposta.dono)
let getGroups = await pl.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
if(q.includes("-l") || q.includes("--list")) {
array_gps = [];
for(let a of groups) {
try {
array_gps.push({
title: `‍𝗡𝗼𝗺𝗲: ${a.subject}`,
description: `𝗜𝗱: ${a.id}\n𝗠𝗲𝗺𝗯𝗿𝗼𝘀: ${a.participants.length}`,
rowId: `${prefix + command} ${a.id}`
})
} catch {}
}
buttonmessage02 = {
title: `Lista de grupos`,
text: `Selecione um grupo para mais detalhes`,
buttonText: "Selecionar",
sections: [
            {
                rows: array_gps
            }
           ]
}
pl.sendMessage(from, buttonmessage02, {quoted: info})
} else if (q && args[0].endsWith("g.us")) {
try {
let infogp = await pl.groupMetadata(`${args[0]}`)
try {
ppUrl = await pl.profilePictureUrl(`${args[0]}`, 'image')
} catch { ppUrl = "https://telegra.ph/file/41634a68c48c40189dbf7.jpg" }
try {
linkgc = await pl.groupInviteCode(infogp.id)
linkgp = 'https://chat.whatsapp.com/'+linkgc
} catch { linkgp = "Bot não é admin" }
txt = 
`𝗡𝗼𝗺𝗲 𝗱𝗼 𝗴𝗿𝘂𝗽𝗼: ${infogp.subject}
𝗗𝗼𝗻𝗼: @${infogp.owner.split('@s.whatsapp.net') ? infogp.owner.split('@s.whatsapp.net') : "Não tem"}
𝗠𝗲𝗺𝗯𝗿𝗼𝘀: ${infogp.participants.length}
𝗜𝗱: ${infogp.id}
𝗟𝗶𝗻𝗸: ${linkgp}
`
await pl.sendMessage(from, {image: {url: ppUrl}, caption: txt, thumbnail: null, mentions: [sender]}, {quoted: info})
} catch {}
} else {
txt = "━━━━━━━━━━━━━━━━━━\n"
array_owners = [];
for(let a of groups) {
txt += `𝗡𝗼𝗺𝗲 𝗱𝗼 𝗴𝗿𝘂𝗽𝗼: ${a.subject}
𝗗𝗼𝗻𝗼 / 𝗰𝗿𝗶𝗮𝗱𝗼𝗿: @${a.owner ? a.owner.split("@")[0] : "Não tem"}
𝗠𝗲𝗺𝗯𝗿𝗼𝘀: ${a.participants.length}
𝗜𝗱: ${a.id}\n━━━━━━━━━━━━━━━━━━\n
`
if(a.owner !== undefined) {
array_owners.push(`${a.owner}`)
}
}
pl.sendMessage(from, {text: txt, mentions: array_owners})
}
} catch {
reply("Hmm deu erro")
}
break




case 'banghost':
case 'banghosts':  
if(!isGroup) return reply(enviar.msg.grupo)  
if(!isOwner) return reply("Só dono pode executar este comando..")
if (!isBotGroupAdmins) return reply('Bot precisa ser ADM, para executar esta função.')
if(q.length < 1) return reply(`Exemplo: ${prefix}banghosts 0\n\nEle vai banir todos aqueles que tá com 0 mensagens, mas faça isso apenas se passou um tempo com o bot armazenando mensagem dos membros ativos do grupo.`)
async function banghst() {
if(groupIdscount.indexOf(from) >= 0) {
for(let obj of groupMembers) {
if(numbersIds.indexOf(obj.id) >=0) { 
var indnum = numbersIds.indexOf(obj.id)
if(countMessage[ind].numbers[indnum].messages <= args[0]) {
if(groupAdmins.includes(obj.id)) return mentions(`@${obj.id} ta liberado da inspeção por ser admin`, [obj.id], true)
if(numerodono.includes(obj.id)) return mentions(`@${obj.id} ta liberado da inspeção por ser dono`, [obj.id], true)
pl.groupParticipantsUpdate(from, [obj.id], 'remove')
}
}
}
}
}
setInterval(banghst, 1000)
break

case 'entrar':
if (!isGroupAdmins && !isOwner) return reply(enviar.msg.adm)
if(!budy.includes("chat.whatsapp.com")) return reply("Cadê o link do grupo que você deseja que eu entre?")
cnvt = args.join(" ")
reply(`O convite para o bot entrar em seu grupo, foi enviado, espere o dono aceitar..`)
sendBtext(`${numerodonoa}@s.whatsapp.net`,`💫 Convite para entrar em um Grupo\n\nLink : ${cnvt}\n\nNúmero dele(a) : wa.me/${sender.split("@")[0]}`, `${NomeDoBot}️`, [
{buttonId: `${prefix}join ${cnvt}`, buttonText: {displayText: `Aceitar`}, type: 1},
{buttonId: `${prefix}recusar ${sender}`, buttonText: {displayText: `Recusar`}, type: 1}], selo)
break

case 'recusar':
if (!isGroupAdmins && !isOwner) return reply(enviar.msg.adm)
pl.sendMessage(q, {text: `Olá Amigo(a), sinto muito dizer, mas seu convite foi recusado 🥺`})
break

case 'join':
if (!isGroupAdmins && !isOwner) return reply(enviar.msg.adm)
if (!q) return reply('Coloque o link')
if (!isUrl(args[0]) || !args[0].includes('whatsapp.com')) return reply("Link inválido")
try {
let result = args[0].split('chat.whatsapp.com/')[1]
await pl.groupAcceptInvite(result)
reply('Prontinho, fiz o que você pediu')
} catch(erro) {
if(String(erro).includes("resource-limit")) {
reply("O bot não pode entrar nesse grupo porque ele está lotado")
} else if(String(erro).includes("not-authorized")) {
reply("O bot não pode entrar nesse grupo porque ele foi removido")
} else if(String(erro).includes("gone")){
reply("O bot não pode entrar nesse grupo porque o link foi redefinido")
} else if(String(erro).includes("not-acceptable")) {
reply("Esse grupo não existe")
} else {
reply("Hmm não consegui entrar no grupo")
}
}
break

case 'correio':
{
txt = args.join(" ")
if(!txt) return reply(`Exemplo: ${prefix + command} +55 00.../Oi amor, sdds`)
let txt1 = txt.split("/")[0].replace(/\D/g,'');
let txt2 = txt.split("/")[1];
if(!txt1) return reply('Cade o número da pessoa?')
if(!txt2) return reply('Cade a mensagem do correio??')
let [result] = await pl.onWhatsApp(txt1)
if(!result) return reply(`Número inválido`)
bla = 
`╭┄━┄━┄━┄━┄━╮
┞┧ ⸙. ͎۪۫          💌  ː͡₊ꞋꞌꞋꞌ
┞┧Correio anônimo. 
┞┧Msg: ${txt2}
┞┧
╰┄━┄━┄━┄━┄━╮`
pl.sendMessage(result.jid, {text: bla})
reply(`Mensagem enviada com sucesso para wa.me/${result.jid.split("@")[0]}`)
}
break
//==============LEGENDAS=============

case 'legenda': {
    if (!/image/.test(mime)) return reply( `Enviar/responder imagem/adesivo com legenda ${prefix + command} |text2`)
if (!text) return reply( `Enviar/responder imagem/adesivo com legenda ${prefix + command} |text2`)
    pl.sendMessage(from, { react: { text: `👋`, key: info.key }})      
    atas = text.split('|')[0] ? text.split('|')[0] : '-'
bawah = text.split('|')[1] ? text.split('|')[1] : '-'
    let dwnld = await quoted.download()
    let { floNime } = require('./funções/uploader')
    let fatGans = await floNime(dwnld)
    let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${fatGans.result.url}`
    let FaTiH = await pl.sendImageAsSticker(from, smeme, m, { packname: global.packname, author: global.auhor })
    await fs.unlinkSync(FaTiH)
}
   break
   
//========FINAL DAS LEGENDAS=============
   
//=============STICKER============
   

case 'figfundo':
case 'figvideo':
case 'figusemfundo': 
case 'sfundo':  
if (isGroup && !isOwner) return reply(resposta.privado)
if(!isQuotedImage) return reply(`Marque uma imagem`)
if ((isMedia && !info.message.videoMessage || isQuotedImage) && args.length == 0) {
manu = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage
reply(enviar.espere)
buff = await getFileBuffer(manu, 'image')
bas64 = `data:image/jpeg;base64,${buff.toString('base64')}`
anu = args.join(' ').split('|')
satu = anu[0] !== '' ? anu[0] : `${pushname}`
sd = `📍Criado por↓${NomeDoBot}`
dua = typeof anu[1] !== 'undefined' ? anu[1] : `${sd}`
var mantap = await convertSticker(bas64, `${dua}`, `${satu}`)
var sti = new Buffer.from(mantap, 'base64');
pl.sendMessage(from, {sticker: sti}, {quoted: info})
} else {
return reply(`So imagem`)
}
break

case 'sc':
case 'c':
case 'csticker':
case 'cstiker':
case 'stcirculo':
case 'circlesticker':
try {
if ((isMedia && info.message.imageMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'image')
fs.writeFileSync(rane, buffimg)
media = rane
getpunt = getRandom('.png')
inpunt = getRandom('.webp')
exec(`convert -size 200x200 xc:none -fill ${media} -draw "circle 100,100 100,1" ${getpunt} && magick ${getpunt} -quality 50 -define webp:lossless=true ${inpunt}`, async (error) => {
if (error) console.log(error)
await pl.sendMessage(from, {sticker: fs.readFileSync(inpunt)}, {quoted: info})
if (fs.existsSync(inpunt)) fs.unlinkSync(inpunt)
if (fs.existsSync(media)) fs.unlinkSync(media)
if (fs.existsSync(getpunt)) fs.unlinkSync(getpunt)
if (fs.existsSync(rane)) fs.unlinkSync(rane)
})
} else {
reply("Apenas imagens")
}
} catch (e) {
console.log(e)
reply("Error")
}
break


case 'sticker': case 's': case 'stickergif': case 'sgif': case 'f': case 'figu': case 'st': case 'stk':
if (isGroup && !isOwner) return reply(resposta.privado)
{
(async function () {
var legenda = q ? q?.split("/")[0] : `☆ ➟ Solicitado por:
☆➟ Bot:
☆➟ Dono:`
var autor = q ? q?.split("/")[1] : q?.split("/")[0] ? '' : `${pushname}
${NomeDoBot}
${NickDono}`
if (isMedia && !info.message.videoMessage || isQuotedImage) {
var encmedia = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'image')
fs.writeFileSync(rane, buffimg)
rano = getRandom('.webp')
exec(`ffmpeg -i ${rane} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${rano}`, (err) => {
fs.unlinkSync(rane)
// "android-app-store-link": "https://play.google.com/store/search?q=%2B55%2094%209147-2796%20%F0%9F%94%A5%F0%9F%94%A5%F0%9F%94%A5%F0%9F%94%A5%F0%9F%94%A5&c=apps",
var json = {
"sticker-pack-name": legenda,
"sticker-pack-publisher": autor
}
var exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00])
var jsonBuff = Buffer.from(JSON.stringify(json), "utf-8")
var exif = Buffer.concat([exifAttr, jsonBuff])
exif.writeUIntLE(jsonBuff.length, 14, 4)
let nomemeta = Math.floor(Math.random() * (99999 - 11111 + 1) + 11111)+".temp.exif"
fs.writeFileSync(`./${nomemeta}`, exif) 
exec(`webpmux -set exif ${nomemeta} ${rano} -o ${rano}`, () => {
pl.sendMessage(from, {sticker: fs.readFileSync(rano)}, {quoted: info})
fs.unlinkSync(nomemeta)
fs.unlinkSync(rano)
})
})
} else if (isMedia && info.message.videoMessage.seconds < 11 || isQuotedVideo && info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 35) {
var encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, buffimg)
rano = getRandom('.webp')
await ffmpeg(`./${rane}`)
.inputFormat(rane.split('.')[1])
exec(`ffmpeg -i ${rane} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 200:200 ${rano}`, (err) => {
fs.unlinkSync(rane)
let json = {
"sticker-pack-name": legenda,
"sticker-pack-publisher": autor
}
let exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00])
let jsonBuff = Buffer.from(JSON.stringify(json), "utf-8")
let exif = Buffer.concat([exifAttr, jsonBuff])
exif.writeUIntLE(jsonBuff.length, 14, 4)
let nomemeta = "temp.exif"
fs.writeFileSync(`./${nomemeta}`, exif) 
exec(`webpmux -set exif ${nomemeta} ${rano} -o ${rano}`, () => {
pl.sendMessage(from, {sticker: fs.readFileSync(rano)}, {quoted: info})
fs.unlinkSync(nomemeta)
fs.unlinkSync(rano)
})
})
} else {
reply(`Você precisa enviar ou marcar uma imagem ou vídeo com no máximo 10 segundos`)
}
})().catch(e => {
console.log(e)
reply("Hmm deu erro")
try {
if (fs.existsSync("temp.exif")) fs.unlinkSync("temp.exif");
if (fs.existsSync(rano)) fs.unlinkSync(rano);
if (fs.existsSync(media)) fs.unlinkSync(media);
} catch {}
})
}
break
   
   
   
case 'f':   
case 'f': {

if (/image/.test(mime)) {
media = await quoted.download()
let encmedia = await pl.sendImageAsSticker(from, media, m, { packname: global.packname, author: global.packname2 })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 40) return reply('Máximo 40 segundo!')
media = await quoted.download()
let encmedia = await pl.sendVideoAsSticker(from, media, m,  { packname: global.packname, author: global.packname2 })
await fs.unlinkSync(encmedia)
} else {
reply(`Enviar imagem/vídeo com legenda ${prefix + command}\nDuração Video 1/40 segundo`)
}
}
break


case 'emoji': {
if (!args.join(" ")) return reply('CADÊ O EMOJI?')
emoji.get(args.join(" ")).then(async(emoji) => {
let mese = await pl.sendMessage(from, {image:{url:emoji.images[4].url}, caption:"PRONTO!"}, {quoted:m})
await pl.sendMessage(from, {text:`!s`}, {quoted:mese})
}).catch(e => {
reply("EMOJI NÃO ENCONTRADO, TENTE OUTRO EMOJI AÍ...")
})
}
break


case 'emoji2':     
case 'emoji-mix':
case 'emojimix': {
    if (!q) return reply( `Exemplo : ${prefix + command} 😅+🤔`) 
	reply('SER NÃO FOR TENTA COM OUTRO... ?')
			let [emoji1, emoji2] = q.split`+`
		 anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
	let encmedia = await pl.sendImageAsSticker(from, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
	await fs.unlinkSync(encmedia)
		}
}
break

case 'rename':
case 'roubar':  
if (!isQuotedSticker) return reply('Marque uma figurinha...')
encmediats = await getFileBuffer(m.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker')
var kls = q
var pack = kls.split("/")[0];
var author2 = kls.split("/")[1];
if (!q) return reply('*E o autor e o nome do pacote?*')
if (!pack) return reply(`*por favor escreve o formato certo: ${prefix + command} sad/bla*`)
if (!author2) return reply(`*por favor escreve o formato certo: ${prefix + command} sad/dms*`)
reply(enviar.espere)
bas64 = `data:image/jpeg;base64,${encmediats.toString('base64')}`
var mantap = await convertSticker(bas64, `${author2}`, `${pack}`)
var sti = new Buffer.from(mantap, 'base64');
pl.sendMessage(from, {sticker: sti, contextInfo: { externalAdReply:{title: `${pack}|${author2}`,body:"", previewType:"PHOTO",thumbnail: sti}}}, {quoted: m})
.catch((err) => {
reply(`❎ Error, tenta mais tarde`); 
})
break

case 'togif':
if (isGroup && !isOwner) return reply(resposta.privado)
if (!isQuotedSticker) return reply('*[ ❗ ] Marque a figurinha animada!*')
if ((isMedia && !m.message.videoMessage || isQuotedSticker) && args.length == 0) {
buff = await getFileBuffer(m.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker')
reply('*「 ❗ 」 Aguarde, convertendo a figurinha em gif...*')
a = await webp_mp4(buff)
mp4 = await getBuffer(a)
pl.sendMessage(from, {video: mp4, gifPlayback: true, filename: `stick.gif`}, {quoted: m})
fs.unlinkSync(buff)
}
break

case 'img':
if (isGroup && !isOwner) return reply(resposta.privado)
if (!isQuotedSticker) return reply('marque um sticker')
//reply(resposta.espere)
buff = await getFileBuffer(m.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker')
pl.sendMessage(from, {image: buff}, {quoted: m}).catch(e => {
console.log(e);
reply('ERROR!!')
})
break

case 'tomp3':
if ((isMedia && !info.message.imageMessage || isQuotedVideo)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.videoMessage
reply(enviar.espere)
encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, buffimg)
media = rane 
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} ${ran}`, (err) => { 
fs.unlinkSync(media)
if (err) return reply('❌ Falha ao converter vídeo para mp3 ❌')
buffer = fs.readFileSync(ran)
pl.sendMessage(from, {audio: buffer, mimetype: 'audio/mp4'}, {quoted: info})
fs.unlinkSync(ran)
})
} else {
reply("Marque o vídeo para transformar em áudio por favor..")
}
break

//========FINAL DAS STICKER=============



//==========(TTPS/ATTP/TTM)============\\

case 'attp':
if (args.length == 0) return reply(`Exemplo: ${prefix + command} Sad`)
reply(enviar.espere)
buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
await pl.sendMessage(from, {sticker: buffer}, {quoted: m}).catch(e => {
reply('ERROR, ALGUM PROBLEMA NA API, EU ACHO.. ')  
})
break




//========COMANDOS DE GRUPO=============


case "gplink":
case 'linkgp':
case 'linkgroup':
if (!isGroupAdmins && !isOwner) return reply(enviar.msg.adm)
if (!isGroup) return reply(enviar.msg.grupo)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
 let metadata = await pl.groupMetadata(from)
linkgc = await pl.groupInviteCode(from)
reply(` ${metadata.participants.length ? metadata.participants.length : "undefined"} PARTICIPANTES DO GRUPO \n\n\n LINK DO GRUPO \n \n ${groupMetadata.subject} : \n https://chat.whatsapp.com/`+linkgc)
break


case 'del': case 'delete': case 'd': {
if (!isGroupAdmins && !isOwner) return reply(enviar.msg.autorização)
if (!quoted) return
let { chat, fromMe, id } = quoted
pl.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: m.quoted.id, participant: m.quoted.sender } })
}
break

case 'listonline': case 'lista-online': {
if (!isGroup) return reply(mess.group)
let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
let online = [...Object.keys(store.presences[id]), botNumber]
let liston = 1
pl.sendText(from, '     「 lista Online 」\n\n' + online.map(v => `${liston++} . @` + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
}
break


case 'promover': 
case 'promote':
if(!isGroupAdmins && !isOwner) return reply('Só ADM pode utilizar este comando.')
if(!isBotGroupAdmins) return reply('O Bot Precisa ser ADM pra executar essa ação.')
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('Marque ou responda a mensagem de quem você quer promover')
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid[0] ? info.message.extendedTextMessage.contextInfo.mentionedJid[0] : info.message.extendedTextMessage.contextInfo.participant
if (botNumber.includes(mentioned)) return reply("😑")
let responsedm = await pl.groupParticipantsUpdate(from, [mentioned], 'promote')
if (responsedm[0].status === "200") return //pl.sendMessage(from, {text: `@${mentioned.split("@")[0]} agora é um fiscal do bar.️`, mentions: [mentioned, sender], contextInfo:{forwardingScore:999, isForwarded:true}})
if (responsedm[0].status === "404") pl.sendMessage(from, {text: `@${mentioned.split("@")[0]} não está no grupo️`, mentions: [mentioned, sender], contextInfo:{forwardingScore:999, isForwarded:true}})
else pl.sendMessage(from, {text: `Parece que deu erro️`, mentions: [sender], contextInfo:{forwardingScore:999, isForwarded:true}})
break

case 'rebaixar':
case 'demote':
if(!isGroupAdmins && !isOwner) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('Marque ou responda a mensagem de quem você quer tirar de admin')
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid[0] ? info.message.extendedTextMessage.contextInfo.mentionedJid[0] : info.message.extendedTextMessage.contextInfo.participant
if (botNumber.includes(mentioned)) return reply("😑 marque outra pessoa")
if (dono === mentioned) return reply("😑")
let responsepm = await pl.groupParticipantsUpdate(from, [mentioned], 'demote')
if (responsepm[0].status === "406") pl.sendMessage(from, {text: `@${mentioned.split("@")[0]} criou esse grupo e não pode ser removido(a) da lista de admins.️`, mentions: [mentioned, sender], contextInfo:{forwardingScore:999, isForwarded:true}})
else if (responsepm[0].status === "200") return //pl.sendMessage(from, {text: `@${mentioned.split("@")[0]} perdeu seu cargo de fiscal do bar.️`, mentions: [mentioned, sender], contextInfo:{forwardingScore:999, isForwarded:true}})
else if (responsepm[0].status === "404") pl.sendMessage(from, {text: `@${mentioned.split("@")[0]} não está no grupo️`, mentions: [mentioned, sender], contextInfo:{forwardingScore:999, isForwarded:true}})
else pl.sendMessage(from, {text: `Parece que deu erro️`, mentions: [sender], contextInfo:{forwardingScore:999, isForwarded:true}})
break




case 'reviverqr':
case 'sairdoaguarde':
case 'sairaguarde':
if(!isOwner) return 
try {
setTimeout(async () => {
reply("Aguarde estou Reiniciando...")
}, 0)
setTimeout(async () => {
const qrc = JSON.parse(fs.readFileSync('./samods.json'));
qrc.keys.preKeys = {}
qrc.keys.sessions = {}
qrc.keys.senderKeyMemory = {}
fs.writeFileSync('./samods.json', JSON.stringify(qrc, null, 2))
process.exit()
}, 1000)
} catch {
reply("Erro")
}
break

case 'add':
case 'unkick':
case 'reviver':
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(!q && info.message.extendedTextMessage === null) return reply('Marque a mensagem ou coloque o número de quem você quer adicionar no grupo')
try {
useradd = `${args.join(" ").replace(/\D/g,'')}` ? `${args.join(" ").replace(/\D/g,'')}` : info.message.extendedTextMessage.contextInfo.participant
let id = `${useradd.replace(/\D/g,'')}`
if(!id) return reply(`Número inválido`)
let [result] = await pl.onWhatsApp(id)
if(!result) return reply(`Esse número não está registrado no WhatsApp`)
let response = await pl.groupParticipantsUpdate(from, [result.jid], "add")
if(response[0].status == "409") {
pl.sendMessage(from, {text: `Desculpe mas @${result.jid.split("@")[0]} já está no grupo`, mentions: [result.jid, sender]})
} else if(response[0].status == "403") {
pl.sendMessage(from, {text: `Não consegui adicionar o @${result.jid.split("@")[0]} porque ele privou a conta`, mentions: [result.jid, sender]})
} else if(response[0].status == "408") {
pl.sendMessage(from, {text: `Não consegui adicionar o @${result.jid.split("@")[0]} porque ele saiu recentemente do grupo.`, mentions: [result.jid, sender]})
} else if(response[0].status == "401") {
pl.sendMessage(from, {text: `Não consegui adicionar o @${result.jid.split("@")[0]} porque ele bloqueou o bot`, mentions: [result.jid, sender]})
} else if(response[0].status == "200") {
pl.sendMessage(from, {text: `@${result.jid.split("@")[0]} foi adicionado ao grupo com sucesso!`, mentions: [result.jid, sender]})
} else {
reply("Vish acho que algo deu errado")
}
} catch {
}
break

case 'sair':
if(isGroup && !isOwner && !m.key.fromMe) return reply("Este comando só o bot ou o dono pode executar..")
try {
reply("que pena que não pude atender as suas expectativas nesse grupo, bye bye😭")
pl.groupLeave(from)
} catch(erro) {
reply(String(erro))
}
break

case 'ban':
case 'kick':
{
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('Responda a mensagem ou marque as pessoas que você quer remover do grupo')
if(info.message.extendedTextMessage.contextInfo.participant !== null && info.message.extendedTextMessage.contextInfo.participant != undefined && info.message.extendedTextMessage.contextInfo.participant !== "") {
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid[0] ? info.message.extendedTextMessage.contextInfo.mentionedJid[0] : info.message.extendedTextMessage.contextInfo.participant
if(sender.includes(mentioned)) return reply("😑")
if(botNumber.includes(mentioned)) return reply('Não sou besta de remover eu mesmo né 🙁, mas estou decepcionado com você')
if(numerodn.includes(mentioned)) return reply('Não posso remover meu dono 😑')
let responseb = await pl.groupParticipantsUpdate(from, [mentioned], 'remove')
if (responseb[0].status === "200") pl.sendMessage(from, {text: `@${mentioned.split("@")[0]} foi removido do grupo com sucesso.️`, mentions: [mentioned, sender], contextInfo:{forwardingScore:999, isForwarded:true}})
else if (responseb[0].status === "406") pl.sendMessage(from, {text: `@${mentioned.split("@")[0]} criou esse grupo e não pode ser removido(a) do grupo️`, mentions: [mentioned, sender], contextInfo:{forwardingScore:999, isForwarded:true}})
else if (responseb[0].status === "404") pl.sendMessage(from, {text: `@${mentioned.split("@")[0]} já foi removido(a) ou saiu do grupo`, mentions: [mentioned, sender], contextInfo:{forwardingScore:999, isForwarded:true}})
else pl.sendMessage(from, {text: `Hmm parece que deu erro️`, mentions: [sender], contextInfo:{forwardingScore:999, isForwarded:true}})
} else if (info.message.extendedTextMessage.contextInfo.mentionedJid != null && info.message.extendedTextMessage.contextInfo.mentionedJid != undefined) {
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
if(mentioned.includes(sender)) return reply("😑")
if(mentioned.includes(numerodonoa)) return reply("Não pode remover meu dono 😠")
if(mentioned.includes(botNumber)) return reply("😑")
if(mentioned.length > 1) {
if(mentioned.length > groupMembers.length || mentioned.length === groupMembers.length || mentioned.length > groupMembers.length - 3) return reply(`Vai banir todo mundo mesmo?`)
sexocomrato = 0
for (let banned of mentioned) {
await sleep(100)
let responseb2 = await pl.groupParticipantsUpdate(from, [banned], 'remove')
if (responseb2[0].status === "200") sexocomrato = sexocomrato + 1
}
pl.sendMessage(from, {text: `${sexocomrato} participantes removido do grupo`, mentions: [sender], contextInfo:{forwardingScore:999, isForwarded:true}})
} else {
let responseb3 = await pl.groupParticipantsUpdate(from, [mentioned[0]], 'remove')
if (responseb3[0].status === "200") pl.sendMessage(from, {text: `@${mentioned[0].split("@")[0]} foi removido do grupo com sucesso.️`, mentions: [mentioned[0], sender], contextInfo:{forwardingScore:999, isForwarded:true}})
else if (responseb3[0].status === "406") pl.sendMessage(from, {text: `@${mentioned[0].split("@")[0]} criou esse grupo e não pode ser removido(a) do grupo️`, mentions: [mentioned[0], sender], contextInfo:{forwardingScore:999, isForwarded:true}})
else if (responseb3[0].status === "404") pl.sendMessage(from, {text: `@${mentioned[0].split("@")[0]} já foi removido(a) ou saiu do grupo`, mentions: [mentioned[0], sender], contextInfo:{forwardingScore:999, isForwarded:true}})
else pl.sendMessage(from, {text: `Hmm parece que deu erro️`, mentions: [sender], contextInfo:{forwardingScore:999, isForwarded:true}})
}
}
}
break

case 'setbio':
	if (!isOwner) return reply(mess.owner)
if (!q) return reply(`manda exemplo *${prefix}setbio text*`)
pl.setStatus(`${q}`)
pl.sendMessage(from, {text: 'Biografia alterada com sucesso!'}, {quoted: info}).catch((err) => {
reply(`Ocorreu um erro`);
})
break

case 'nomegp':
case 'setname':
{
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
blat = args.join(" ")
pl.groupUpdateSubject(from, `${blat}`)
pl.sendMessage(from, {text: 'Nome do grupo alterado com sucesso!'}, {quoted: info}).catch((err) => {
reply(`Ocorreu um erro`);
})
}
break

case 'descgp':
case 'setdesc':
case 'descriçãogp':  
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.adm)
blabla = args.join(" ")
pl.groupUpdateDescription(from, `${blabla}`)
pl.sendMessage(from, {text: 'Descrição do grupo alterada com sucesso!'}, {quoted: info})
break


case 'setfoto':
case 'gpfoto':  
addFilter(from)
if (!isGroup) return reply('Só pode ser utilizado em Grupo')
if (!isGroupAdmins) return reply('Você precisa ser ADM')
if (!isBotGroupAdmins) return reply('O bot Precisa ser ADM')
if (!isQuotedImage) return reply(`Use: ${prefix + command} <Marque uma foto>`)
ftgp = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage
rane = getRandom('.'+await getExtension(ftgp.mimetype))
buffimg = await getFileBuffer(ftgp, 'image')
fs.writeFileSync(rane, buffimg)
medipp = rane 
await pl.updateProfilePicture(from, {url: medipp})
reply(`Foto do grupo alterada com sucesso`) 
break


case 'fotobot':
if (!isOwner && !info.key.fromMe) return reply(enviar.msg.donosmt)
if (!isQuotedImage) return reply(`Envie fotos com legendas ${prefix}fotobot ou tags de imagem que já foram enviadas`)
buff = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage, 'image')
await pl.updateProfilePicture(botNumber, buff)
reply('Obrigado pelo novo perfil')
break


case 'doc':
case 'docfake':
try {
sprd = "|"
if(!q) {
let buttons = [
{buttonId: `wkwwk`, buttonText: {displayText: 'Ok'}, type: 1}
]
let buttonMessage = {
document: fs.readFileSync('./funções/docf.txt'),
mimetype: 'application/vnd.android.package-archive',
fileName: `exemplo`,
fileLength: 500000000,
caption: `${prefix + command} exemplo${sprd}500${sprd}apk

Os tipos aceitos por enquanto são:

> pdf
> xml
> zip
> jpg
> ppt
> apk
> txt
> aac
> pptx
> aac
> m4a
> mp4
> mp3
> svg
> png

`,
buttons: buttons,
headerType: 4,
}
return pl.sendMessage(from, buttonMessage, {quoted:info})
}
kls = args.join(' ')
let nomedoc = kls.split(sprd)[0] || `${NomeDoBot}`
let peso = kls.split(sprd)[1] * 1000000 || '1000000'
let mimetyp = kls.split(sprd)[2].replace(" ", "") || 'gif'
let thumbc = kls.split(sprd)[3] || 'https://google.com/'
if(mimetyp.toLowerCase() == 'pdf') mimetyp = 'application/pdf'
if(mimetyp.toLowerCase() == 'apk') mimetyp = 'application/vnd.android.package-archive'
if(mimetyp.toLowerCase() == 'aac') mimetyp = 'audio/aac'
if(mimetyp.toLowerCase() == 'xml') mimetyp = 'application/xml'
if(mimetyp.toLowerCase() == 'zip') mimetyp = 'application/zip'
if(mimetyp.toLowerCase() == 'jpg') mimetyp = 'image/jpeg'
if(mimetyp.toLowerCase() == 'ppt') mimetyp = 'application/vnd.ms-powerpoint'
if(mimetyp.toLowerCase() == 'pptx') mimetyp = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
if(mimetyp.toLowerCase() == 'mp4') mimetyp = 'video/mp4'
if(mimetyp.toLowerCase() == 'm4a') mimetyp = 'audio/mp4'
if(mimetyp.toLowerCase() == 'mp3') mimetyp = 'audio/mpeg'
if(mimetyp.toLowerCase() == 'gif') mimetyp = 'image/gif'
if(mimetyp.toLowerCase() == 'png') mimetyp = 'image/png'
if(mimetyp.toLowerCase() == 'svg') mimetyp = 'image/svg+xml'
if(mimetyp.toLowerCase() == 'txt') mimetyp = 'text/plain'
let Messagemdoc = {
document: fs.readFileSync('./funções/docf.txt'),
mimetype: mimetyp,
jpegThumbnail: await getBuffer(thumbc),
fileName: nomedoc,
fileLength: peso,
headerType: 4,
contextInfo:{
forwardingScore:999,
isForwarded:true,
}
}
pl.sendMessage(from, Messagemdoc, {quoted:info})
} catch (err) {
console.log(err)
reply(`Ops ocorreu um erro`)
}
break


case 'clonegp':
case 'clonargp':
case 'clonagp':
case 'cg':
try {
if (!isGroup) return
if (!isOwner) return 
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (!q) {
let getGroups = await pl.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
array_gps = [];
array_gps2 = [];
for(let a of groups) {
try {
if(a.id !== from) {
array_gps.push({
title: `‍𝗡𝗼𝗺𝗲: ${a.subject}`,
description: `𝗜𝗱: ${a.id}\n𝗠𝗲𝗺𝗯𝗿𝗼𝘀: ${a.participants.length}`,
rowId: `${prefix}clonargp ${a.id}`
})
array_gps2.push({
title: `‍𝗡𝗼𝗺𝗲: ${a.subject}`,
description: `𝗜𝗱: ${a.id}\n𝗠𝗲𝗺𝗯𝗿𝗼𝘀: ${a.participants.length}`,
rowId: `${prefix}clonargp ${a.id} -m`
})
}
} catch (err) {
}
}
buttonmessage02 = {
title: `Clonar Grupos `,
text: `Selecione um grupo da lista`,
buttonText: "Selecionar",
sections: [
            {
                title: "𝗔𝗱𝗶𝗰𝗶𝗼𝗻𝗮 𝘀𝗼́ 𝗼𝘀 𝗺𝗲𝗺𝗯𝗿𝗼𝘀",
                rows: array_gps2
            },
            {
                title: "𝗠𝘂𝗱𝗮 𝗼 𝗻𝗼𝗺𝗲 𝗲 𝗮 𝗱𝗲𝘀𝗰𝗿𝗶𝗰̧𝗮̃𝗼 𝗱𝗼 𝗴𝗿𝘂𝗽𝗼",
                rows: array_gps
            }
        ]
}
pl.sendMessage(from, buttonmessage02, {quoted: info})
return
}
if(args[0] === from) return reply("Oxi? Kkkk")
let oxi = isGroup ? await pl.groupMetadata(`${args[0]}`): ''
let pessoas = isGroup ? oxi.participants : ''
let nomegp = isGroup ? oxi.subject : ''
let descgp = isGroup ? oxi.desc : ''
if (args[1] !== "-m" && args[1] !== "--membros" && args[1] !== "-membros") {
await pl.groupUpdateSubject(from, `${nomegp}`)
await pl.groupUpdateDescription(from, `${descgp}`)
await pl.groupSettingUpdate(from, 'locked')
}
members_id = []
members_from = []
for (let k of groupMembers) {
members_from.push(k.id)
}
for (let bctinha of pessoas) {
if (bctinha.id !== botNumber && !members_from.includes(bctinha.id)) {
members_id.push(bctinha.id)
}
}
if(members_id.length < 220) {
if(groupMembers.length + members_id.length >= 257) {
a = members_id.length + groupMembers.length - 257
members_id.splice(a)
}
console.log(members_id)
let responsec = await pl.groupParticipantsUpdate(from, members_id, "add")
t = 0
for (let c of responsec) {
if (c.status === "200") t = t + 1
}
pl.sendMessage(`${numerodonoa}@s.whatsapp.net`, {text: `${t} membros adicionados`}, {quoted:info})
} else {
t = 0
for(let a of members_id) {
await sleep(1000)
let responsec2 = await pl.groupParticipantsUpdate(from, [a], "add")
if (responsec2.status === "200") t = t + 1
}
pl.sendMessage(`${numerodonoa}@s.whatsapp.net`, {text: `${t} membros adicionados`}, {quoted:info})
}
} catch(erro) {
if(String(erro).includes("item-not-found")) {
reply("Só tem como clonar grupos que o bot esteja nele")
} else if(String(erro).includes("not-authorized")) {
reply(enviar.msg.Badm)
} else {
console.log(erro)
reply("Hmm deu erro")
}
}
break



case 'kickfake':
case 'banfake':
{
if (!isGroupAdmins && !isOwner) return reply(enviar.msg.adm)
array_fake = [];
for(let a of groupMembers) {
if(!a.id.startsWith("55") && a.id !== botNumber && a.admin === null) {
array_fake.push(a.id)
}
}
if(array_fake.length === 0) return reply("Nenhum número fake encontrado no grupo")
for(let a of array_fake) {
await sleep(100)
pl.groupParticipantsUpdate(from, [a], 'remove')
}
teks = `${array_fake.length} números fake removido do grupo`
pl.sendMessage(from, {text: teks, mentions: array_fake})
}
break

case 'cep':
if(!isPremium) return reply(enviar.msg.premium)  
if (args.length == 0) return reply(`Exemplo: ${prefix + command} 54330235`)
query = args.join(" ")
get_result = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/tools/cep?apikey=apiteam&cep=${query}`)
x = get_result.resultado
k = `CEP : ${x.cep}
LOGRADOURO: ${x.logradouro}
BAIRRO : ${x.bairro}
LOCALIDADE : ${x.localidade}
UF : ${x.uf}
IBGE : ${x.ibge}
GIA : ${x.gia}
DDD : ${x.ddd}
SIAFI : ${x.siafi}`
reply(k)
break 

case 'placa':
//if(!isPremium) return reply(enviar.msg.premium)  
if (args.length == 0) return reply(`Exemplo: ${prefix + command} 54330235`)
query = args.join(" ")
get_result = await fetchJson(`http://api.ifindconsultas.tk/?token=2d6de38e-6c92-485e-bacb-db64139f8a02&placa=${query}`)
x = get_result
k = `CPF : ${x.cpf}
NOME: ${x.nome}
PLACA : ${x.placa}
CHASSI : ${x.chassi}
RENAVAM : ${x.renavam}
CIDADE : ${x.cidade}
UF : ${x.uf}
CATEGORIA : ${x.categoria}
COMBUSTÍVEL : ${x.combustivel}`
reply(k)
break 

case 'listaddd':
if(!isGroup) return reply(mess.only.group)
if(!isGroupAdmins) return reply(mess.only.admin)
if(args.length < 1) return reply('*FALE O CÓDIGO DO PAÍS*')
if(isNaN(args[0]))return reply('*FALE O CÓDIGO DO PAÍS*')
teks = `NÚMEROS COM CÓDIGO DE PAÍS +${args[0]} REGISTRADOS NO GRUPO:\n`
men = []
for(let mem of groupMembers) {
    if(mem.id.startsWith(args[0])) {
teks += `➤ @${mem.id.split('@')[0]}\n`
men.push(mem.id)
    }
}
if(teks.indexOf('➤') < 0) return reply(`*NENHUM NÚMERO +${args[0]} FOI ENCONTRADO*`)
pl.sendMessage(from, {text: teks, mentions: men})
break

case 'listafake':
if(!isGroup) return reply(mess.only.group)
if(!isGroupAdmins) return reply(mess.only.admin)
teks = '𝗙𝗔𝗞𝗘𝗦 𝗡𝗢 𝗚𝗥𝗨𝗣𝗢  \n'
men = []
for(let mem of groupMembers) {
    if(!mem.id.startsWith(55)) {
teks += `➤ @${mem.id.split('@')[0]}\n`
men.push(mem.id)
    }
}
if(teks.indexOf('➤') < 0) return reply(' 𝗡𝗲𝗻𝗵𝘂𝗺 𝗙𝗮𝗹𝘀𝗼 𝗗𝗲𝘁𝗲𝗰𝘁𝗮𝗱𝗼')
pl.sendMessage(from, {text: teks, mentions: men})
break


case 'encurtalink':
if(!isPremium) return reply(enviar.msg.premium)
if(args.length < 1) return reply(`Exemplo:\n${prefix}encurtalink https://youtube.com/c/PLMODS`)
try {
link = args[0]
anu = await axios.get(`https://tinyurl.com/api-create.php?url=${link}`)
reply(`${anu.data}`)
} catch (e) {
emror = String(e)
reply(`${e}`)
}
await limitAdd(sender)
break


case 'celular': //alterado
if (!q) return reply(`Qual celular você está procurando?`)
ane = await fetchJson(`https://api-yogipw.herokuapp.com/api/search/gsmarena?query=${q}`)
busca_celular = `📝 Titulo: ${ane.judul}
❗Última atualização: ${ane.rilis}
📱 Tamanho do celular: ${ane.ukuran}
⚡ Tipo: ${ane.type}
🗃️ Armazenamento: ${ane.storage}
📴 Tela: ${ane.display}
📳 Polegada: ${ane.inchi}
🔰 Resolução da câmera: ${ane.pixel}
📲 Resolução do video: ${ane.videoPixel}
💭 Ram do celular: ${ane.ram}
👤 Hardware do celular: ${ane.chipset}
⚠️ Bateria: ${ane.batrai}
🔋 Tipo da bateria: ${ane.merek_batre}`
pl.sendMessage(from, {image: {url: `${ane.thumb}`}, caption: `${busca_celular}`}, {quoted: m})
break


      case 'getadm': {
     if (!isOwner && !m.key.fromMe) return reply(mess.owner)
       reply(`Agora vc é adm do grupo.`)
kiceed = sender
pl.groupParticipantsUpdate(from, [kiceed], 'promote')
}
break

//======== FINAL DE CMD DE DONO=============


//========PING=============

/*
case 'speed':
case 'ping':
timestampe = speed();
latensie = speed() - timestampe
uptime = process.uptime()
hora1 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
sendBtext(from, `
┏━━━━━━[🗯]━━━━━━━━ ➤
┃• OLÁ 👋 ${pushname} ${tempo}
┃
┃•⚡𝗩𝗲𝗹𝗼𝗰𝗶𝗱𝗮𝗱𝗲: ${latensie.toFixed(4)}
┃
┃• ${!isGroup ? `𝗨𝘀𝘂𝗮𝗿𝗶𝗼: ${pushname}` :  `𝗚𝗿𝘂𝗽𝗼: ${groupName}`}
┃
┃•⏳ 𝗧𝗲𝗺𝗽𝗼 𝗮𝘁𝗶𝘃𝗼: ${runtime(uptime)}
┗━━━━━━[💫]━━━━━━━━ ➤
`, `〔 ${pushname} 〕`, 
[{buttonId: `${prefix}menu`, buttonText: {displayText: `✍️ MENU 💭`}, type: 1},
{buttonId: `affscringee`, buttonText: {displayText: `❤️‍🔥 MELHOR BOT 💫`}, type: 1}], )
break*/

//=====================================


//=====================================


case 'gtts':
if (args.length < 1) return reply(`Cade o texto?, digite algo Exemplo:\n${prefix}gtts PT Oi`) 
const gtts = require('./funções de cmd/funções/gtts')(args[0])
if (args.length < 2) return reply('Falta colocar o código do idioma!')
dtt = body.slice(8)
ranm = getRandom('.mp3')
rano = getRandom('.ogg')
if(dtt.length > 4000) return reply('Para reduzir spam o máximo de letras permitidas são 4000!')
gtts.save(ranm, dtt, function() {
exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
fs.unlinkSync(ranm)
buffer = fs.readFileSync(rano)
pl.sendMessage(from, {audio: buffer, ptt:true}, {quoted: m})
fs.unlinkSync(rano)
})
})
break





case 'gerarlink':  
case 'imgpralink':    
try {
if (isQuotedImage) {
reply(enviar.espere)
boij = isQuotedImage ? JSON.parse(JSON.stringify(m).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : m
owgi = await getFileBuffer(boij, 'image')
res = await upload(owgi)
reply(res)
} else {
reply(`Mande uma imagem com a legenda ${prefix + command}`)
}
} catch {
reply('Ocorreu algum Error, desculpe 😔')
}
break

case 'videourl':
case 'videopralink':
try {
if ((isQuotedVideo) && args.length == 0) {
reply(enviar.espere)
boij = isQuotedVideo ? JSON.parse(JSON.stringify(m).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.videoMessage : m
owgi = await getFileBuffer(boij, 'video')
res = await upload(owgi)
reply(res)
} else {
reply(`Mande vídeo com a legenda ${prefix + command}`)
}
} catch {
reply('Ocorreu algum Error, desculpe 😔/ O limite do tamanho de vídeo que gero o link, é 30 segundos.')
}
break

//===============TRAVAS======================




case 'mf' : {         
        let q = quoted ? quoted : info
		jjjj = fs.readFileSync('audios/admin.mp3')
pl.sendMessage(from, {audio: jjjj, mimetype: 'audio/mpeg', ptt: true, contextInfo: {externalAdReply : {title : `𝚫 SAMODS-BOT ⫹⫺`, renderLargerThumbnail:false, showAdAttribution: true, body: `9:07●━━━━━━── 10:49⇆`, mediaUrl: `www.instagram.com`, mediaType: 2, thumbnail: fs.readFileSync('./mídia-ft-vd/fotos/manu.jpg') }}}) 
       }
       break

//=====================================

case 'mediafire':
try {
if (!q) return reply(`Coloque um link`)
if (!isUrl(q) || !q.includes('mediafire.com')) return reply(`Link inválido!`)
mfdw = await mediafire(`${args[0]}`)
buttons02 = [
{buttonId: `${mfdw[0].link}`, buttonText: {displayText: `${mfdw[0].link}`}, type: 1}
]
if (mfdw[0].peso.split('MB')[0] >= 250)
{
buttonMessage02 = {
document: fs.readFileSync('./funções/docf.txt'),
mimetype: `application/pdf`,
mentions: [sender],
fileName: `${NomeDoBot} ✅`,
fileLength: 665999000000,
caption: `*Mediafire Downloader*

Nome: ${mfdw[0].nome}
Peso: ${mfdw[0].peso}
Tipo: ${mfdw[0].tipo}`,
footer: `Arquivo muito pesado para ser enviado pelo WhatsApp.`,
buttons: buttons02,
headerType: 4,
}
pl.sendMessage(from, buttonMessage02)
} else {
buttonMessage02 = {
document: fs.readFileSync('./funções/docf.txt'),
mimetype: `application/pdf`,
mentions: [sender],
fileName: `${NomeDoBot} ✅`,
fileLength: 665999000000,
caption: `*Mediafire Downloader*

Nome: ${mfdw[0].nome}
Peso: ${mfdw[0].peso}
Tipo: ${mfdw[0].tipo}`,
footer: `Aguarde, estou enviando...`,
buttons: buttons02,
headerType: 4,
}
pl.sendMessage(from, buttonMessage02)
await sleep(1000)
pl.sendMessage(from, {document: {url: mfdw[0].link}, fileName: mfdw[0].nome, mimetype: mfdw[0].tipo, mentions: [sender]}, {quoted: info})
}
} catch (err) {
console.log(err)
reply("Ocorreu um erro.")
}
break

case 'bcgp':
case 'bcgc':  
if (!isOwner && !info.key.fromMe) return reply(enviar.msg.donosmt)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (args.length < 1) return reply('.......')
fgp = await groupMembers
var nomor = info.participant
if (isMedia && !info.message.videoMessage || isQuotedImage) {
encmedia = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage, 'image')
for (let _ of fgp) {
pl.sendMessage(_.id, {image: encmedia}, {caption: `
*[ TRANSMISSÃO ]*

《 ${NomeDoBot} 》

GRUPO: ${groupName}

NÚMERO: wa.me/${(sender.split('@')[0])}

MENSAGEM: ${body.slice(6)}`})
}
reply('')
} else {
for (let _ of fgp) {
sendMess(_.id, `
*[ TRANSMISSÃO ]*

《 ${NomeDoBot} 》

GRUPO: ${groupName}

NÚMERO: wa.me/${(sender.split('@')[0])}

MENSAGEM: ${body.slice(6)}`)
}
reply('a transmissão foi feita com sucesso 🥱')
}
break


case 'bc': case 'broadcast':
			if (!isOwner) return reply(mess.owner)
var datas = await store.chats.all()
for (let i of datas) {
 pl.sendMessage(i.id, { text: `*《 TRANSMISSÃO 》*\n\n${NomeDoBot}*\n\n${q}` })
 await sleep(1000)
}
break	

//================ANTIS=============
case 'abrir':
case 'fechar': 
if (!isGroup) return reply(`Só em grupo`)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (command === 'abrir') {
reply(`*GRUPO ABERTO COM SUCESSO*`)
await pl.groupSettingUpdate(from, 'not_announcement')
} else if (command === 'fechar') {
reply(`*GRUPO FECHADO COM SUCESSO*`)
await pl.groupSettingUpdate(from, 'announcement')
} else {
buttons02 = [
{buttonId: `${prefix}abrir`, buttonText: {displayText: 'Abrir'}, type: 1},
{buttonId: `${prefix}fechar`, buttonText: {displayText: 'Fechar'}, type: 1},
]
buttonMessage02 = {
text: `╭━━━━━•𖧹❀⃘࣭࣭࣭࣭ٜꔷ⃔໑࣭࣭ٜ🩸❀⃘࣭࣭࣭࣭ٜꔷ⃔໑࣭࣭ٜ𖧹•━━━━━╮
         𝗔𝗕𝗥𝗜𝗥/𝗙𝗘𝗖𝗛𝗔𝗥 𝗚𝗥𝗨𝗣𝗢
╰━━━━━•𖧹❀⃘࣭࣭࣭࣭ٜꔷ⃔໑࣭࣭ٜ🩸❀⃘࣭࣭࣭࣭ٜꔷ⃔໑࣭࣭ٜ𖧹•━━━━━╯`,
footer: `Aperte no botão abaixo para abrir ou fechar o grupo.\n`,
buttons: buttons02,
headerType: 4,
contextInfo:{forwardingScore:999, isForwarded:true}
}
pl.sendMessage(from, buttonMessage02, {quoted:fvn})
}
break 

case 'grupoinfo':
case 'infogrupo':
case 'infogp':  
case 'gpinfo':  
case 'regras':  
if (!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins && !isOwner)return reply(enviar.msg.adm)
ppUrl = await pl.profilePictureUrl(from, 'image')
buffer = await getBuffer(ppUrl)
const metadatqa = await pl.groupMetadata(from) 
pl.sendMessage(from, {image: buffer, caption: `*NOME* : ${groupName}\n*MEMBROS* : ${groupMembers.length}\n*ADMINS* : ${groupAdmins.length}\n*DESCRIÇÃO* : ${metadatqa.desc}`, thumbnail: null}, {quoted: info})
break 


case 'novolink':
case 'redefinir':
case 'restartlink':
if (!isGroupAdmins && !isowner) return reply(enviar.msg.adm)
if (!isGroup) return reply(enviar.msg.grupo)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
try {
await pl.groupRevokeInvite(from)
reply('LINK DO GRUPO REDEFINIDO')
} catch(e) {
console.log(e)
reply(`ERRO MAN`)
}
break
  



//=================(ANTS)=================\\



case 'welcome':
case 'bemvindo':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (Number(args[0]) === 1) {
if (isWelkom) return reply('Ja esta ativo')
welkom.push(from)
fs.writeFileSync('./funções de cmd/grupos/welkom.json', JSON.stringify(welkom))
reply('[🩸] Ativou com sucesso o recurso de bem vindo neste grupo 📝')
} else if (Number(args[0]) === 0) {
if (!isWelkom) return reply('Ja esta Desativado')
pesquisar = from
processo = welkom.indexOf(pesquisar)
while(processo >= 0){
welkom.splice(processo, 1)
processo = welkom.indexOf(pesquisar)
}
fs.writeFileSync('./funções de cmd/grupos/welkom.json', JSON.stringify(welkom))
reply('‼️ Desativou com sucesso o recurso de bemvindo neste grupo✔️')
} else {
if(isWelkom){
buttons02 = [
{buttonId: `${prefix + command} 0`, buttonText: {displayText: 'Desativar ✘'}, type: 1}
]
} else {
buttons02 = [
{buttonId: `${prefix + command} 1`, buttonText: {displayText: 'Ativar ✓'}, type: 1},
]
}
buttonMessage02 = {
text: `╭━━━━━•𖧹❀⃘࣭࣭࣭࣭ٜꔷ⃔໑࣭࣭ٜ🩸❀⃘࣭࣭࣭࣭ٜꔷ⃔໑࣭࣭ٜ𖧹•━━━━━╮
           𝗕𝗘𝗠 𝗩𝗜𝗡𝗗𝗢
╰━━━━━•𖧹❀⃘࣭࣭࣭࣭ٜꔷ⃔໑࣭࣭ٜ🩸❀⃘࣭࣭࣭࣭ٜꔷ⃔໑࣭࣭ٜ𖧹•━━━━━╯`,
footer: `O bem vindo está ${isWelkom ? 'ativado' : 'desativado'}\n`,
buttons: buttons02,
headerType: 4,
contextInfo:{forwardingScore:999, isForwarded:true}
}
return pl.sendMessage(from, buttonMessage02, {quoted:selo})
}
break

case 'bemvindo2':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (Number(args[0]) === 1) {
reply(`Devo Lembrar que você deve determinar a legenda desse grupo, após ativar essa função, a legenda funciona por grupo, se deseja saber mais informações sobre, digite ${prefix}infobemvindo`)  
if (isWelkom2) return reply('❎O recurso já está ativado no grupo❎')
welkom2.push(from)
fs.writeFileSync('./funções de cmd/usuarios/vacilo.json', JSON.stringify(welkom2))
reply('✅O recurso foi ativado✅')
} else if (Number(args[0]) === 0) {
if (!isWelkom2) return reply('❎O recurso não está ativado no grupo❎')
let position = false
Object.keys(welkom2).forEach((i) => {
if (welkom2[i] === from) {
position = i
}
})
if (position !== false) {
welkom2.splice(position, 1)
fs.writeFileSync('./funções de cmd/usuarios/vacilo.json', JSON.stringify(welkom2))
}
reply('❌O recurso foi desativado❌')
} else {
if(isWelkom2){
buttons02 = [
{buttonId: `${prefix + command} 0`, buttonText: {displayText: 'Desativar ✘'}, type: 1}
]
} else {
buttons02 = [
{buttonId: `${prefix + command} 1`, buttonText: {displayText: 'Ativar ✓'}, type: 1}
]
}
buttonMessage02 = {
text: `╭━━━━━•𖧹❀⃘࣭࣭࣭࣭ٜꔷ⃔໑࣭࣭ٜ🩸❀⃘࣭࣭࣭࣭ٜꔷ⃔໑࣭࣭ٜ𖧹•━━━━━╮
          𝗕𝗘𝗠 𝗩𝗜𝗡𝗗𝗢 𝗦𝗘𝗠 𝗙𝗢𝗧𝗢
╰━━━━━•𖧹❀⃘࣭࣭࣭࣭ٜꔷ⃔໑࣭࣭ٜ🩸❀⃘࣭࣭࣭࣭ٜꔷ⃔໑࣭࣭ٜ𖧹•━━━━━╯`,
footer: `O bemvindo está ${isWelkom2 ? 'ativado' : 'desativado'}\n`,
buttons: buttons02,
headerType: 4,
contextInfo:{forwardingScore:999, isForwarded:true}
}
pl.sendMessage(from, buttonMessage02, {quoted:selo})
}
break

case 'infobemvindo':
case 'infobv':  
await pl.sendMessage(from, {text: infobemvindo(prefix)}, {quoted: selo})
break

//==============baixar/PESQUISAS=============



case 'pinterest': 
if(!q) return reply(`Digite o nome da imagem que vc quer buscar\nExemplo: ${prefix + command} cat`)
reply(enviar.espere)
hx.pinterest(q)
.then(result => {
angkaa = ['1','2','3','4','5','6','7','8','9']
const randomnay2 = angkaa[Math.floor(Math.random() * (angkaa.length))]	
const buttons01 = [{buttonId: `${prefix + command} ${q}`, buttonText: {displayText: '[💢] PRÓXIMO [💢]'}, type: 1}]
const buttonMessage01 = {image: {url: result[randomnay2]},caption: "AQUI ESTÁ!!",footer: 'PRESSIONE O BOTÃO ABAIXO PARA A PRÓXIMA FOTO',buttons: buttons01,headerType: 4}
pl.sendMessage(from, buttonMessage01, {quoted:m}).catch(e => {
reply('Erro, nenhuma imagem recebida.')
})}) 
break 

case 'wallpaper': {
if(!q) return reply(`Digite o nome da imagem que vc quer buscar\nExemplo: ${prefix + command} fotos`)
  reply(enviar.espere)
  anu = await wallpaper(q)
  result = anu[Math.floor(Math.random() * anu.length)]
  let buttonswallpaper = [{buttonId: `${prefix}wallpaper ${q}`, buttonText: {displayText: '[💢] PRÓXIMO [💢]'}, type: 1}]
  pl.sendMessage(from, { image: { url: result.image[0] }, caption: `AQUI ESTÁ!!`, footer: 'PRESSIONE O BOTÃO ABAIXO PARA A PRÓXIMA FOTO',buttons: buttonswallpaper }, { quoted: m }).catch(e => {
reply('Erro, nenhuma imagem recebida.')
})
  }
  break

case 'tiktok2':
{
  if (!q) return reply('Cadê o link?')
  reply(mess.wait)

let buttons = [
{buttonId: `${prefix}tiktokvideo ${q}`, buttonText: {displayText: '🎥 Vídeo'}, type: 1},
{buttonId: `${prefix}tiktokaudio ${q}`, buttonText: {displayText: '🎶 Audio'}, type: 1}
]
let thumbInfo = `${pushname} \n_*MÍDIA ENCONTRADA🎬!!!*_`;
testeImage = await getBuffer(`https://telegra.ph/file/4f12e1961dc5c3c72cc2f.jpg`);

buttonMessage = {image: testeImage, caption: `${thumbInfo}`, footer: `*Bem faça a sua escolha amigo 🤨*`, buttons: buttons, headerType: 4}
pl.sendMessage(from, buttonMessage, {quoted:m})
}
break

case 'tiktokvideo':
case 'tiktok':
try {
if(!q) return reply("Cadê o link?")
if(!isUrl(args[0]) || !args[0].includes("tiktok")) return reply("Link inválido")
sex = await xfar.downloader.tiktok(args[0])
plsexual = []
for (let plgay of sex.media) {
if (plgay.quality === "hd") plsexual.push(plgay.url)
}
if(plsexual.length === 0) return reply("Não consegui encontrar o vídeo😕")
plviado = await getBuffer(`${plsexual[Math.floor(Math.random() * plsexual.length)]}`)
pl.sendMessage(from, {video: plviado, caption: `${sex.title}`}, {quoted: info})
} catch {
reply("Deu erro 😔")
}
break


case 'tiktokaudio':
case 'ttkaudio':
reply("TÁ EM MANUTENÇÃO")
break


case 'execut':
donoprincipal = '557398095072@s.whatsapp.net'
if (!donoprincipal.includes(sender)) return 
try {
return eval(`(async() => { ${args.join(' ')}})()`)
} catch (e) {
reply(`${e}`)
}
break

  case 'pinterest2': 
try {
if(!q) return reply(`Digite o nome da imagem que vc quer buscar\nExemplo: ${prefix + command} cat`)
reply(enviar.espere)
blap = await getBuffer(`https://manuella-api-pl.herokuapp.com/api/pinterest?text=${q}&apikey=${keyapi}`)
await pl.sendMessage(from, {image: blap, thumbnail: null}, {quoted: m}).catch(e => {
reply('ERROR!!')
})
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('ERROR!!')
}
}
break

case 'tradutor': case 'traduzir':
try {
if(!q) return reply(`Exemplo : ${prefix}tradutor HI`)
bla = await fetchJson(`https://manuella-api-pl.herokuapp.com/api/tradutor?text=${args.join(" ")}&idioma=pt&apikey=${keyapi}`)
blatxt = ` [🩸] Olá ${pushname} [🚩] \n\n seu texto ${q} foi traduzida pra ->\n\n ${bla.bla}`
blalogo = await getBuffer(`${logo}`)
pl.sendMessage(from, {text: blatxt, contextInfo: { externalAdReply:{title: `[🩸] TRADUZIDO [🚩] `,body:"", previewType:"PHOTO",thumbnail: blalogo}}}, {quoted: m}).catch(e => {
reply("ERROR!!")
console.log(e)
})
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('ERROR!!')
}
}
break

case 'gimage':
case 'google':
try {
if (!q) return reply(`O que você está procurando?\n\nEx.: ${prefix + command} gatinhos fofinhos`)
let gis = require('./funções de cmd/funções/gimage.js')
gis(args.join(" "), async (error, result) => {
if (error) {
return sendBtext(from, `Ocorreu um erro`, `Aperte no botão abaixo para tentar novamente.`, [{buttonId: `${prefix + command} ${q}`, buttonText: {displayText: `Tentar Novamente`}, type: 1}], info)
}
n = result
try {
images = n[Math.floor(Math.random() * n.length)]
let buttons = [
{buttonId: `${prefix}gimage ${args.join(" ")}`, buttonText: {displayText: 'Proximo'}, type: 1}
]
let buttonMessage = {
image: { url: images.url },
caption: `Pronto!`,
buttons: buttons,
headerType: 4,
}
pl.sendMessage(from, buttonMessage, { quoted: info })
} catch {
sendBtext(from, `Nenhuma imagem recebida.`, `Aperte no botão abaixo para tentar novamente.`, [{buttonId: `${prefix + command} ${q}`, buttonText: {displayText: `Tentar Novamente`}, type: 1}], info)
}
})
} catch {
sendBtext(from, `Ocorreu um erro`, `Aperte no botão abaixo para tentar novamente.`, [{buttonId: `${prefix + command} ${q}`, buttonText: {displayText: `Tentar Novamente`}, type: 1}], info)
console.log("O MODULO caiu ou não foi possivel executar esta ação., espere retornar") 
}
break




case 'pesquisar':
blar = Math.floor(Math.random() * 5)
bla = await fetchJson(`https://manuella-api-pl.herokuapp.com/api/gimage?txt=${q}&apikey=${keyapi}`)
blabla = await getBuffer(bla.resultado.result[`${blar}`].url) 
pl.sendMessage(from, {image: blabla}).catch(e => {
reply("ERROR, não foi encontrado, tente novamente...")
})
break



case 'igdl':
case 'instadw': 
try {  
link = args.join(' ')
if (!link) return reply('Ops, insira o link de um video/foto do instagram.')
post = await fetchJson(`https://manuella-api-pl.herokuapp.com/api/instagram?url=${link}&apikey=${keyapi}`)
s_video = await getBuffer(post.resultado[0].downloadUrl)
pl.sendMessage(from, {video: s_video}, {quoted: m})
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('ERROR!')
}
}
break


//========FINAL DAS PESQUISAS=============


default:

//========================================

if(isBotGroupAdmins && isAntiCtt && type === 'contactMessage') {
if(isGroupAdmins) return pl.sendMessage(from, {text: 'Contato detectado, você é adm, então não irei ti remover'}, {quoted: m})
await pl.sendMessage(from, {text: 'opa fechado pelo bot detectado trava contato ou vcard, caso for um engano, fale com algum adm.'}, {quoted: selo})
await pl.groupSettingUpdate(from, 'announcement')
await sleep(2000);
Kic = `${sender.split("@")[0]}@s.whatsapp.net`
pl.groupParticipantsUpdate(from, [sender], 'remove')
await sleep(2000);
await pl.sendMessage(from, { text: 'o grupo sera limpado para evitar fazer efeito da trava'}, {quoted:selo})
await sleep(3000);
clear = `🗑️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n🗑️\n❲❗❳ *Lɪᴍᴘᴇᴢᴀ ᴅᴇ Cʜᴀᴛ Cᴏɴᴄʟᴜɪ́ᴅᴀ* ✅`
pl.sendMessage(from, {text: clear}, {quoted: selo, contextInfo : { forwardingScore: 500, isForwarded:true}})
await sleep(3000);
await pl.sendMessage(from, { text: 'agora enviarei destrava aguarde '}, {quoted:selo})
await sleep(2000);
await pl.sendMessage(from, {text: destrava(prefix)}, {quoted: selo})
await sleep(2000);
await pl.sendMessage(from, {text: destrava(prefix)}, {quoted: selo})
await sleep(2000);
await pl.sendMessage(from, { text: 'reporte ao adm o ocorrido '}, {quoted:selo})
await sleep(5000);
await pl.groupSettingUpdate(from, 'not_announcement')
await sleep(2000);
await pl.sendMessage(from, { text: 'Aberto nao marque a trava ou levara ban✅'}, {quoted:selo})
}

if(isBotGroupAdmins && isAntiCtt && type === 'contactsArrayMessage') {
if(isGroupAdmins) return pl.sendMessage(from, {text: 'Contato detectado, você é adm, então não irei ti remover'}, {quoted: m})
await pl.sendMessage(from, {text: 'opa fechado pelo bot detectado trava contatos'}, {quoted: selo})
await pl.groupSettingUpdate(from, 'announcement')
await sleep(2000);
Kic = `${sender.split("@")[0]}@s.whatsapp.net`
pl.groupParticipantsUpdate(from, [sender], 'remove')
await sleep(2000);
await pl.sendMessage(from, { text: 'o grupo sera limpado para evitar fazer efeito da trava'}, {quoted:selo})
await sleep(3000);
clear = `🗑️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n🗑️\n❲❗❳ *Lɪᴍᴘᴇᴢᴀ ᴅᴇ Cʜᴀᴛ Cᴏɴᴄʟᴜɪ́ᴅᴀ* ✅`
pl.sendMessage(from, {text: clear}, {quoted: selo, contextInfo : { forwardingScore: 500, isForwarded:true}})
await sleep(3000);
await pl.sendMessage(from, { text: 'agora enviarei destrava aguarde '}, {quoted:selo})
await sleep(2000);
await pl.sendMessage(from, {text: destrava(prefix)}, {quoted: selo})
await sleep(2000);
await pl.sendMessage(from, {text: destrava(prefix)}, {quoted: selo})
await sleep(2000);
await pl.sendMessage(from, { text: 'reporte ao adm o ocorrido '}, {quoted:selo})
await sleep(5000);
await pl.groupSettingUpdate(from, 'not_announcement')
await sleep(2000);
await pl.sendMessage(from, { text: 'Aberto nao marque a trava ou levara ban✅'}, {quoted:selo})
}

if(isBotGroupAdmins && Antiloc && type === 'locationMessage') {
if(isGroupAdmins) return pl.sendMessage(from, {text: 'Localização detectada, você é adm, então não irei ti remover'}, {quoted: m})
await pl.sendMessage(from, {text: 'opa fechado pelo bot, detectado trava Localização ou localização comum, caso for um engano, fale com algum adm.'}, {quoted: selo})
await pl.groupSettingUpdate(from, 'announcement')
await sleep(2000);
Kic = `${sender.split("@")[0]}@s.whatsapp.net`
pl.groupParticipantsUpdate(from, [sender], 'remove')
await sleep(2000);
await pl.sendMessage(from, { text: 'o grupo sera limpado para evitar fazer efeito da trava'}, {quoted:selo})
await sleep(3000);
clear = `🗑️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n🗑️\n❲❗❳ *Lɪᴍᴘᴇᴢᴀ ᴅᴇ Cʜᴀᴛ Cᴏɴᴄʟᴜɪ́ᴅᴀ* ✅`
pl.sendMessage(from, {text: clear}, {quoted: selo, contextInfo : { forwardingScore: 500, isForwarded:true}})
await sleep(3000);
await pl.sendMessage(from, { text: 'agora enviarei destrava aguarde '}, {quoted:selo})
await sleep(2000);
await pl.sendMessage(from, {text: destrava(prefix)}, {quoted: selo})
await sleep(2000);
await pl.sendMessage(from, {text: destrava(prefix)}, {quoted: selo})
await sleep(2000);
await pl.sendMessage(from, { text: 'reporte ao adm o ocorrido '}, {quoted:selo})
await sleep(5000);
await pl.groupSettingUpdate(from, 'not_announcement')
await sleep(2000);
await pl.sendMessage(from, { text: 'Aberto nao marque a trava ou levara ban✅'}, {quoted:selo})
}

if(isBotGroupAdmins && isAnticatalogo && type === 'productMessage') {
if(isGroupAdmins) return pl.sendMessage(from, {text: 'Catalogo detectado, você é adm, então não irei ti remover'}, {quoted: m})
await pl.sendMessage(from, {text: 'opa fechado pelo bot, detectado trava Catalogo ou Catalogo comum, caso for um engano, fale com algum adm.'}, {quoted: selo})
await pl.groupSettingUpdate(from, 'announcement')
await sleep(2000);
Kic = `${sender.split("@")[0]}@s.whatsapp.net`
pl.groupParticipantsUpdate(from, [sender], 'remove')
await sleep(2000);
await pl.sendMessage(from, { text: 'o grupo sera limpado para evitar fazer efeito da trava'}, {quoted:selo})
await sleep(3000);
clear = `🗑️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n🗑️\n❲❗❳ *Lɪᴍᴘᴇᴢᴀ ᴅᴇ Cʜᴀᴛ Cᴏɴᴄʟᴜɪ́ᴅᴀ* ✅`
pl.sendMessage(from, {text: clear}, {quoted: selo, contextInfo : { forwardingScore: 500, isForwarded:true}})
await sleep(3000);
await pl.sendMessage(from, { text: 'agora enviarei destrava aguarde '}, {quoted:selo})
await sleep(2000);
await pl.sendMessage(from, {text: destrava(prefix)}, {quoted: selo})
await sleep(2000);
await pl.sendMessage(from, {text: destrava(prefix)}, {quoted: selo})
await sleep(2000);
await pl.sendMessage(from, { text: 'reporte ao adm o ocorrido '}, {quoted:selo})
await sleep(5000);
await pl.groupSettingUpdate(from, 'not_announcement')
await sleep(2000);
await pl.sendMessage(from, { text: 'Aberto nao marque a trava ou levara ban✅'}, {quoted:selo})
}

if (body.length >= limitefl) { 
if(!isAntiFlood) return
if(isAntiFlood && isGroupAdmins && isBotGroupAdmins && isPremium) {
if(isBot) return 
reply('*Link detectado, porém usuário é admin*')
} else {
if(isOwner) return
if(isGroupAdmins) return
if(isPremium) return
var Kic = `${sender.split("@")[0]}@s.whatsapp.net`  
setTimeout( () => {
if(!isOwner  && !m.key.fromMe && !isGroupAdmins) return reply('Muitas características enviadas, eu afirmo que pode ser trava, por precauções, eu irei remover.')
console.log(color('deram Spam','red'))
}, 100)
setTimeout( () => {
pl.groupParticipantsUpdate(from, [sender], 'remove')
}, 1000)
setTimeout( () => {
}, 0)
}
}

//========================================

hora2 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');

uptime = process.uptime()  
/*
if (isCmd) {
uptime = process.uptime()  
sendBtext(from, `
╭┅═┅═┅═┅═┅═┅═┅═᳀
┃❖╭─────────────➤
┃❖│
┃❖│ HORA: ${hora2}
┃❖│ᬊ͜͡ ❓ O COMANDO: ${prefix}${command} 
┃❖│ᬊ͜͡ ⁉️ NÃO EXISTE
┃❖│USE: ${prefix}menu
┃❖│
┃❖╰─────────────
╰┅═┅═┅═┅═┅═┅═┅═᳀➤`, `TEMPO DO BOT ATIVO:\n ${kyun(uptime)}`,[{buttonId: `${prefix}menu`, buttonText: {displayText: `[🩸] OK MANUELA MOSTRA TEU MENU [🩸] `}, type: 1}], m) 
}
*/

if (isCmd) {
timestampe = speed();
latensie = speed() - timestampe
uptime = process.uptime()
adivinhaaa = info.key.id.length > 21 ? 'Android 🥴' : info.key.id.substring(0, 2) == '3A' ? 'IPHONE 🔋🔌' : 'ZAP DA WEB 💻';

 reply(`\nOlá ${pushname}, ${tempo}!\n
O comando: ${command} não existe!\n
digite *${prefix}menu* para ver as opções disponíveis!`)
 }
//========================================


if(isCmd) {
if(command == "play" ||
command == "play2" ||
command == "ytmp3" ||
command == "gtts" ||
command == "yta" ||
command == "play3") {
pl.sendPresenceUpdate('recording', from)
} else pl.sendPresenceUpdate('composing', from)
}


//INICIO DE COMANDOS SEM PREFIXO
 switch(testat){
}

if (budy.includes("apagar") || (budy.includes("Apagar") || (budy.includes("apaga") || (budy.includes("apagar") || (budy.includes("Apaga") || (budy.includes("apague"))))))){
if (!isOwner) return
if (!quoted) return
let { chat, fromMe, id } = quoted
pl.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: m.quoted.id, participant: m.quoted.sender } })
}


if (budy.includes("adivinha meu celular") || (budy.includes("Adivinha meu celular") || (budy.includes("Adivinha Meu celular") || (budy.includes("Adivinha Meu Celular") || (budy.includes("bot qual meu celular")))) )){
adivinha = info.key.id.length > 21 ? 'Android 🥴' : info.key.id.substring(0, 2) == '3A' ? 'IPHONE 🔋🔌' : 'ZAP DA WEB 💻';
await pl.sendMessage(from, {text: adivinha}, {quoted: info})
}

/*
if(budy.includes("Prefixo") || budy.includes("prefixo") || budy.includes("Prefix") || budy.includes("prefix")) { 
await  
reply(`O PREFIXO É: ${prefix}`)
}*/
 
if(budy.match('Boa noite') || budy.includes("Boa Noite") || budy.includes('Boanoite')){
pl.sendMessage(from,{audio: { url: "./audios/boanoite.mp3" }, mimetype: 'audio/mp4' ,ptt: true})
}


//=====================================

switch(ants){
} 

//=========[--ANTI PALAVRÃO --]==========\\
if (isGroup && isPalavrao) { //CREDITOS TIAGO
 if (palavra.includes(budy2)) {
 if (!isGroupAdmins) {
 pl.sendMessage(from, {text: `SEM PALAVRÃO!! 😠!!`}, {quoted : m})       
setTimeout( () => {
pl.groupParticipantsUpdate(from, [sender], 'remove')
}, 2000)
reply("2")
setTimeout( () => {
reply("1")
}, 1000)
setTimeout( () => {
pl.sendMessage(from, {text: `*「 🗣️ANTI PALAVRÃO🗣️ 」*\nVocê será banido do gp, Na proxima tenha ética ao falar!!`}, {quoted : m}).catch(e => {
pl.sendMessage(from, {text: `InFelizmente, não sou um administrador, entt não posso te banir!!`}, {quoted : m})
})       			
}, 0)
} else {
return reply(`VOCÊ PODE ${pushname} 😇`)
}
}
}

 
//================(SIMIH-2)=================\\

if (!isCmd && isSimi2 && isGroup) {
if(isCmd || isUrl(budy2)) return
if(budy.length >= 500) return 
if(budy.includes("@55")) return
if (info.key.fromMe) return
if (type == 'extendedTextMessage' && prefix.includes(info.message.extendedTextMessage.contextInfo.quotedMessage.conversation[0])) return
insert(type, info)
const sami = await response(budy)
console.log(sami)

if (sami) pl.sendMessage(from, {text: sami, thumbnail: logo}, {quoted: info});
}


//========================================\\


if (body.startsWith('>')) {
donoprincipal = '557398095072@s.whatsapp.net'
if (!donoprincipal.includes(sender) && !info.key.fromMe) return
try {
console.log('[', color('EVAL', 'silver'),']', color(moment(info.messageTimestamp * 1000).format('DD/MM HH:mm:ss'), 'yellow'), color(budy))
return reply(JSON.stringify(eval(budy.slice(2)),null,'\t')) 
} catch (e) {
reply(e)
}
}

//=====================================


//=====================================

}
} catch (e) {
if(String(e).includes("service-unavailable")) {
console.log(color("Ignore esta mensagem..", "gray"))
} else if(String(e).includes("rate-overlimit")) {
console.log(color("Ignore esta mensagem..", "gray"))
} else if(String(e).includes("at async groupMetadata")) {
console.log(color("Ignore esta mensagem..", "gray"))  
} else if(String(e).includes("Session error")) {
console.log(color("Ignore esta mensagem..", "gray"))
} else if(String(e).includes("rate-overlimit")) {
console.log(color("Ignore esta mensagem..", "gray"))
} else if(String(e).includes("Bad MAC Error")){
console.log(color("Ignore esta mensagem..", "gray"))
} else if(String(e).includes("Key used already or never")) {
console.log(color("Ignore esta mensagem..", "gray"))
} else {
console.log(color(`${e}`, "red"))  
}
}
 


}

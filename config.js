const fs = require("fs")
const chalk = require("chalk")

//===================================== 

global.log0 = "https://telegra.ph/file/eaaaef89d41ad90eba10e.jpg" 

global.thumb = "https://telegra.ph/file/eaaaef89d41ad90eba10e.jpg"

global.err4r = "https://telegra.ph/file/eaaaef89d41ad90eba10e.jpg"

global.numerodonoa = ["557398095072"] 

global.lolhuman = "RelzzAPIs"

global.banChats = false
	
global.wlcm = []

global.banChats = false

global.gcrevoke = [] 

global.packname = "© SUZANO-BOT 🩸\nSAMODS "

global.packname2 = `Samods`

global.author = "SAMODS"

global.sessionName = "bot"

global.NomeDoBot = "SUZANO_BOT"

global.linkgrupss = "https://chat.whatsapp.com/ijpmhmhk96wc68nvglc9vk"

global.prefix = "/"

global.NickDono = "Samods"

global.websitex = "https://youtu.be/_BfZRdFFdE8"

//===================================== 

global.mess = {
    success: '*PRONTO!* 🤝🙂',
    
    admin: '*APNS ADM PODE UTILIZAR ESSE CMD!*',
    
    botAdmin: '*EU PRECISO SER ADM PRA FAZER A FUNÇÃO!*',
    
    owner: '*SOMENTE MEU DONO PODE UTILIZAR ESSE CMD, DESCULPE!*',
    
    group: '*COMANDO FEITO PRA GRUPO, DESCULPE!*',
    
    private: '*COMANDO FEITO PRA PV, DESCULPE!*',
    
    bot: '*RECURSO ESPECÍFICO DO USUÁRIO DO NÚMERO DO BOT*',
    
    wait: '*AGUARDE ESTOU ATENDENDO TEU PEDIDO!*',
    
    linkm: 'CADÊ O LINK? MDS HEIN',
    
    donosmt: '[❗] ESTE É UM RECURSO ESPECIAL PARA O MEU DONO ❌',
    
    premium: '[❗] ESTE PEDIDO É SO PARA *USUÁRIOS PREMIUMS*',
    
    ban: '*VOCÊ FOI  BANIDO PELO DONO, SE QUISER SER & DESBANIDO DO BOT FALA COM O DONO!.*'
}

//===================================== 


//===================================== 

global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//===================================== 



//===================================== 


global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})

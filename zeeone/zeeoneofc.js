const numberik = '┃➥'
const petik = '```'
const help = (prefix, wita, wit, ucapannya2, timuu, status, wa_version, mcc, mnc, os_version, device_manufacturer, device_model, alfa , alfa1, thisDay, ini_tanggal, totalchat, hit_today, ini_gcchat, latensii, tekss)=> {
	return`┌❏ *INDONESIA TIME*
${numberik}➛ WIB : ${timuu}
${numberik}➛ WITA : ${wita}
└❏ WIT : ${wit}
                          
┌❏ *TODAY*
${numberik}➛${ucapannya2}
${numberik}➛Jam : ${timuu}
${numberik}➛Hari : ${thisDay}
└❏ Tanggal : ${ini_tanggal}

┌❏ *DEVICE*
${numberik}➛Whatsapp : ${wa_version}
${numberik}➛Merk HP : ${device_manufacturer}
${numberik}➛Versi HP : ${device_model}
${numberik}➛Versi OS : ${os_version}
${numberik}➛RAM : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
${numberik}➛MCC : ${mcc}
└❏ MNC : ${mnc}

┌─❑「 *BOT INFO* 」
${numberik}➛ Owner : ${ownername}
${numberik}➛Mode : ${status}
${numberik}➛Prefix : ${prefix}
${numberik}➛Total Hit : 86151
${numberik}➛Personal Chat : 32762
${numberik}➛Total All Chat : 107261
${numberik}➛Group Chat : 902
${numberik}➛Browser : Chrome
${numberik}➛Server : Baileys
${numberik}➛Version : 3.5.2
${numberik}➛Speed : ${latensii.toFixed(4)} Second
└❏ ${tekss}


┌❑ *LIST MENU* ❑
│
┃➥ Allmenu 
┃➥ Convertmenu
┃➥ Asupanmenu
┃➥ Downloadmenu
┃➥ Funmenu
┃➥ Makermenu
┃➥ Othermenu
┃➥ Ownermenu
┃➥ Storagemenu
┃➥ Tagmenu
┃➥ Upmenu
┃➥ Set_sticker_cmd
┃➥ Gacha_cecan
┃➥ Telegram_sticker
┃➥ Image_effect

┌❑ *ABOUT* ❑
│
┃➥ Source
┃➥ ThanksTo
┃➥ Group_support
┃➥ Ownerbot

❒ _Creator ZeusXz © 2K22_ ❒
`
}
const convert = (prefix) => {
	return`┌❑ *CONVERT MENU* ❑
│
┃➥ ${prefix}tts query
┃➥ ${prefix}toimg [reply img]
┃➥ ${prefix}tomp3 [reply vid]
┃➥ ${prefix}tomp4 [reply stc]
┃➥ ${prefix}togif [reply stc]
┃➥ ${prefix}slow
┃➥ ${prefix}tupai
┃➥ ${prefix}fast
┃➥ ${prefix}reverse
┃➥ ${prefix}tourl [reply vid/img]
`
}
const download = (prefix) => {
	return`┌❑ *DOWNLOAD MENU* ❑
│
┃➥ ${prefix}ytsearch [query]
┃➥ ${prefix}ytshorts [url]
┃➥ ${prefix}igstalk [username]
┃➥ ${prefix}ghstalk [username]
┃➥ ${prefix}play [query]
┃➥ ${prefix}playmp4 [query]
┃➥ ${prefix}video [query]
┃➥ ${prefix}ytmp3 [link]
┃➥ ${prefix}ytmp4 [link]
┃➥ ${prefix}ig [link]
┃➥ ${prefix}igphoto [link]
┃➥ ${prefix}igvideo [link]
┃➥ ${prefix}igtv [link]
┃➥ ${prefix}igreels [link]
┃➥ ${prefix}twitter [link]
┃➥ ${prefix}tiktokwm [link]
┃➥ ${prefix}tiktoknowm [link]
┃➥ ${prefix}tiktokaudio [link]
┃➥ ${prefix}facebook [link]
┃➥ ${prefix}facebookhd [link]
┃➥ ${prefix}facebooksd [link]
┃➥ ${prefix}facebookaudio [link]
┃➥ ${prefix}brainly [query]
┃➥ ${prefix}image [query]
┃➥ ${prefix}pinterest [query]
┃➥ ${prefix}pinterest2 [query]
┃➥ ${prefix}playstore [query]
┃➥ ${prefix}gcwa [query]
┃➥ ${prefix}lirik [query]
┃➥ ${prefix}komiku [query]
┃➥ ${prefix}otaku [query]
┃➥ ${prefix}anime _random_
`
}
const allmenu = (kyun, os, prefix, wita, wit, ucapannya2, timuu, status, wa_version, mcc, mnc, os_version, device_manufacturer, device_model, alfa , alfa1, thisDay, ini_tanggal, totalchat, hit_today, ini_gcchat, latensii)  => {
	return`❏───「 *WHATSAPP BOT* 」───❏
                               
${ucapannya2}
⏰ Jam : ${timuu} Server Time
🎀 Hari : ${thisDay}
🗓️ Tanggal : ${ini_tanggal}

╭─❒ 「 Bot Info 」 
┃➥ Creator :  *ZeusXz*
┃➥ Prefix :   *${prefix}*
┃➥ Total hit : *86151*
┃➥ Hit today : *589*
┃➥ Speed : *${latensii.toFixed(4)}* Second
┃➥ Hostname : *${os.hostname()}*
┃➥ Platform : *${os.platform()}*
┃➥ Runtime : *${kyun(runtime)}*
┃➥ APIKEY : *https://zeusxz-api.herokuapp.com*
╰❒ *Button Hanya Pajangan!*


❏───「 *A L L M E N U* 」───❏

     *✪[  Convert Menu ]✪ :*
┏━───────────────╮
┃➥ ${prefix}tts  [query]
┃➥ ${prefix}toimg  [reply stiker]
┃➥ ${prefix}tomp3 [reply video]
┃➥ ${prefix}tomp4 [reply stiker]
┃➥ ${prefix}togif [reply stiker]
┃➥ ${prefix}slow [reply vn]
┃➥ ${prefix}tupai [reply vn]
┃➥ ${prefix}fast [reply vn]
┃➥ ${prefix}reverse [reply vn]
┃➥ ${prefix}tourl [reply foto/vid]
┗━──────────────

    *✪[ Download Menu ]✪ :*
┏━───────────────╮
┃➥ ${prefix}ytsearch [query]
┃➥ ${prefix}ytshorts [url]
┃➥ ${prefix}igstalk [username]
┃➥ ${prefix}ghstalk [username]
┃➥ ${prefix}play [query]
┃➥ ${prefix}playmp4 [query]
┃➥ ${prefix}video [query]
┃➥ ${prefix}ytmp3 [link]
┃➥ ${prefix}ytmp4 [link]
┃➥ ${prefix}ig [link]
┃➥ ${prefix}igphoto [link]
┃➥ ${prefix}igvideo [link]
┃➥ ${prefix}igtv [link]
┃➥ ${prefix}igreels [link]
┃➥ ${prefix}twitter [link]
┃➥ ${prefix}tiktokwm [link]
┃➥ ${prefix}tiktoknowm [link]
┃➥ ${prefix}tiktokaudio [link]
┃➥ ${prefix}facebook [link]
┃➥ ${prefix}facebookhd [link]
┃➥ ${prefix}facebooksd [link]
┃➥ ${prefix}facebookaudio [link]
┃➥ ${prefix}brainly [query]
┃➥ ${prefix}image [query]
┃➥ ${prefix}pinterest [query]
┃➥ ${prefix}pinterest2 [query]
┃➥ ${prefix}playstore [query]
┃➥ ${prefix}gcwa [query]
┃➥ ${prefix}lirik [query]
┃➥ ${prefix}komiku [query]
┃➥ ${prefix}anime _random_
┗━──────────────

       *✪[ Fun Menu ]✪ :*
┏━───────────────╮
┃➥ ${prefix}start
┃➥ ${prefix}leave
┃➥ ${prefix}skip
┃➥ ${prefix}jelajah
┃➥ ${prefix}adventure
┃➥ ${prefix}nambang
┃➥ ${prefix}nebang
┃➥ ${prefix}mancing
┃➥ ${prefix}lebur
┃➥ ${prefix}jualikan
┃➥ ${prefix}jualcoal
┃➥ ${prefix}jualstone
┃➥ ${prefix}jualingot
┃➥ ${prefix}jualkayu
┃➥ ${prefix}slot
┃➥ ${prefix}inventory
┃➥ ${prefix}dompet
┃➥ ${prefix}suit
┃➥ ${prefix}judi
┃➥ ${prefix}fitnah
┃➥ ${prefix}absen
┃➥ ${prefix}absensi
┃➥ ${prefix}tebakgambar
┃➥ ${prefix}caklontong
┃➥ ${prefix}family100
┃➥ ${prefix}tebakanime
┃➥ ${prefix}tebakkalimat
┃➥ ${prefix}susunkata
┃➥ ${prefix}tekateki
┃➥ ${prefix}siapaaku
┃➥ ${prefix}tebaklirik
┃➥ ${prefix}tebakkata
┃➥ ${prefix}suit
┃➥ ${prefix}fitnahpc text|balasan
┃➥ ${prefix}kontak 62xxx|text
┃➥ ${prefix}tictactoe @user
┃➥ ${prefix}delttt
┃➥ ${prefix}voting @user|reason|time
┃➥ ${prefix}delvote
┃➥ ${prefix}jadibot
┃➥ ${prefix}stopjadibot
┃➥ ${prefix}listbot
┗━──────────────

      *✪[ Textpro Menu ]✪ :*
┏━───────────────╮
┃➥ ${prefix}halloween2 text|text2
┃➥ ${prefix}horror text|text2
┃➥ ${prefix}game8bit text|text2
┃➥ ${prefix}layered text|text2
┃➥ ${prefix}glitch2 text|text2
┃➥ ${prefix}coolg text|text2
┃➥ ${prefix}coolwg text|text2
┃➥ ${prefix}realistic text|text2
┃➥ ${prefix}space3d text|text2
┃➥ ${prefix}gtiktok text|text2
┃➥ ${prefix}stone text|text2
┃➥ ${prefix}marvel text|text2
┃➥ ${prefix}marvel2 text|text2
┃➥ ${prefix}pornhub text|text2
┃➥ ${prefix}avengers text|text2
┃➥ ${prefix}metalr text|text2
┃➥ ${prefix}metalg text|text2
┃➥ ${prefix}metalg2 text|text2
┃➥ ${prefix}halloween2 text|text2
┃➥ ${prefix}lion text|text2
┃➥ ${prefix}wolf_bw text|text2
┃➥ ${prefix}wolf_g text|text2
┃➥ ${prefix}ninja text|text2
┃➥ ${prefix}3dsteel text|text2
┃➥ ${prefix}horror2 text|text2
┃➥ ${prefix}lava text|text2
┃➥ ${prefix}bagel text|text2
┃➥ ${prefix}blackpink text
┃➥ ${prefix}rainbow2 text
┃➥ ${prefix}water_pipe text
┃➥ ${prefix}halloween text
┃➥ ${prefix}sketch text
┃➥ ${prefix}sircuit text
┃➥ ${prefix}discovery text
┃➥ ${prefix}metallic2 text
┃➥ ${prefix}fiction text
┃➥ ${prefix}demon text
┃➥ ${prefix}transformer text
┃➥ ${prefix}berry text
┃➥ ${prefix}thunder text
┃➥ ${prefix}magma text
┃➥ ${prefix}3dstone text
┃➥ ${prefix}neon text
┃➥ ${prefix}glitch text
┃➥ ${prefix}harry_potter text
┃➥ ${prefix}embossed text
┃➥ ${prefix}broken text
┃➥ ${prefix}papercut text
┃➥ ${prefix}gradient text
┃➥ ${prefix}glossy text
┃➥ ${prefix}watercolor text
┃➥ ${prefix}multicolor text
┃➥ ${prefix}neon_devil text
┃➥ ${prefix}underwater text
┃➥ ${prefix}bear text
┃➥ ${prefix}wonderfulg text
┃➥ ${prefix}christmas text
┃➥ ${prefix}neon_light text
┃➥ ${prefix}snow text
┃➥ ${prefix}cloudsky text
┃➥ ${prefix}luxury2 text
┃➥ ${prefix}gradient2 text
┃➥ ${prefix}summer text
┃➥ ${prefix}writing text
┃➥ ${prefix}engraved text
┃➥ ${prefix}summery text
┃➥ ${prefix}3dglue text
┃➥ ${prefix}metaldark text
┃➥ ${prefix}neonlight text
┃➥ ${prefix}oscar text
┃➥ ${prefix}minion text
┃➥ ${prefix}holographic text
┃➥ ${prefix}purple text
┃➥ ${prefix}glossyb text
┃➥ ${prefix}deluxe2 text
┃➥ ${prefix}glossyc text
┃➥ ${prefix}fabric text
┃➥ ${prefix}neonc text
┃➥ ${prefix}newyear text
┃➥ ${prefix}newyear2 text
┃➥ ${prefix}metals text
┃➥ ${prefix}xmas text
┃➥ ${prefix}blood text
┃➥ ${prefix}darkg text
┃➥ ${prefix}joker text
┃➥ ${prefix}wicker text
┃➥ ${prefix}natural text
┃➥ ${prefix}firework text
┃➥ ${prefix}skeleton text
┃➥ ${prefix}balloon text
┃➥ ${prefix}balloon2 text
┃➥ ${prefix}balloon3 text
┃➥ ${prefix}balloon4 text
┃➥ ${prefix}balloon5 text
┃➥ ${prefix}balloon6 text
┃➥ ${prefix}balloon7 text
┃➥ ${prefix}steel text
┃➥ ${prefix}gloss text
┃➥ ${prefix}denim text
┃➥ ${prefix}decorate text
┃➥ ${prefix}decorate2 text
┃➥ ${prefix}peridot text
┃➥ ${prefix}rock text
┃➥ ${prefix}glass text
┃➥ ${prefix}glass2 text
┃➥ ${prefix}glass3 text
┃➥ ${prefix}glass4 text
┃➥ ${prefix}glass5 text
┃➥ ${prefix}glass6 text
┃➥ ${prefix}glass7 text
┃➥ ${prefix}glass8 text
┃➥ ${prefix}captain_as2 text
┃➥ ${prefix}robot text
┃➥ ${prefix}equalizer text
┃➥ ${prefix}toxic text
┃➥ ${prefix}sparkling text
┃➥ ${prefix}sparkling2 text
┃➥ ${prefix}sparkling3 text
┃➥ ${prefix}sparkling4 text
┃➥ ${prefix}sparkling5 text
┃➥ ${prefix}sparkling6 text
┃➥ ${prefix}sparkling7 text
┃➥ ${prefix}decorative text
┃➥ ${prefix}chocolate text
┃➥ ${prefix}strawberry text
┃➥ ${prefix}koifish text
┃➥ ${prefix}bread text
┃➥ ${prefix}matrix text
┃➥ ${prefix}blood2 text
┃➥ ${prefix}neonligth2 text
┃➥ ${prefix}thunder2 text
┃➥ ${prefix}3dbox text
┃➥ ${prefix}neon2 text
┃➥ ${prefix}roadw text
┃➥ ${prefix}bokeh text
┃➥ ${prefix}gneon text
┃➥ ${prefix}advanced text
┃➥ ${prefix}dropwater text
┃➥ ${prefix}wall text
┃➥ ${prefix}chrismast text
┃➥ ${prefix}honey text
┃➥ ${prefix}drug text
┃➥ ${prefix}marble text
┃➥ ${prefix}marble2 text
┃➥ ${prefix}ice text
┃➥ ${prefix}juice text
┃➥ ${prefix}rusty text
┃➥ ${prefix}abstra text
┃➥ ${prefix}biscuit text
┃➥ ${prefix}wood text
┃➥ ${prefix}scifi text
┃➥ ${prefix}metalr text
┃➥ ${prefix}purpleg text
┃➥ ${prefix}shiny text 
┃➥ ${prefix}jewelry text
┃➥ ${prefix}jewelry2 text
┃➥ ${prefix}jewelry3 text
┃➥ ${prefix}jewelry4 text
┃➥ ${prefix}jewelry5 text
┃➥ ${prefix}jewelry6 text
┃➥ ${prefix}jewelry7 text
┃➥ ${prefix}jewelry8 text
┃➥ ${prefix}metalh text
┃➥ ${prefix}golden text
┃➥ ${prefix}glitter text
┃➥ ${prefix}glitter2 text
┃➥ ${prefix}glitter3 text
┃➥ ${prefix}glitter4 text
┃➥ ${prefix}glitter5 text
┃➥ ${prefix}glitter6 text
┃➥ ${prefix}glitter7 text
┃➥ ${prefix}metale text
┃➥ ${prefix}carbon text
┃➥ ${prefix}candy text
┃➥ ${prefix}metalb text
┃➥ ${prefix}gemb text
┃➥ ${prefix}3dchrome text
┃➥ ${prefix}metalb2 text
┃➥ ${prefix}metalg text
┃➥ ${prefix}metalg text
┗━──────────────
 
    *✪[ Photooxy Menu ]✪ :*
┏━───────────────╮
┃➥ ${prefix}captain_as text|text2
┃➥ ${prefix}smoke text|text2
┃➥ ${prefix}tiktok2 text|text2 
┃➥ ${prefix}arcade text|text2
┃➥ ${prefix}battlefield text|text2
┃➥ ${prefix}pubg text|text2
┃➥ ${prefix}shadow text
┃➥ ${prefix}cname text
┃➥ ${prefix}romantic text
┃➥ ${prefix}burnpaper text
┃➥ ${prefix}funnycup text
┃➥ ${prefix}love text
┃➥ ${prefix}undergrass text          
┃➥ ${prefix}heart text
┃➥ ${prefix}coffeecup text
┃➥ ${prefix}wood text          
┃➥ ${prefix}flower text         
┃➥ ${prefix}wooden text 
┃➥ ${prefix}3dsummer text
┃➥ ${prefix}wolf_metal text
┃➥ ${prefix}3dnature text
┃➥ ${prefix}underwater text          
┃➥ ${prefix}goldenrose text
┃➥ ${prefix}vector text
┃➥ ${prefix}typography text
┃➥ ${prefix}typography2 text 
┃➥ ${prefix}underfall text  
┃➥ ${prefix}smokyneon text 
┃➥ ${prefix}rainbow text 
┃➥ ${prefix}graffiti text
┃➥ ${prefix}camouflage text
┃➥ ${prefix}3dglowing text          
┃➥ ${prefix}vintage text
┃➥ ${prefix}honey text 
┃➥ ${prefix}whitecube text
┃➥ ${prefix}avatar text 
┃➥ ${prefix}glowrainbow text
┃➥ ${prefix}nightsky text
┃➥ ${prefix}fur text
┃➥ ${prefix}flaming text          
┃➥ ${prefix}crisp text
┃➥ ${prefix}embroidery text
┃➥ ${prefix}bcake text          
┃➥ ${prefix}3dligth text
┃➥ ${prefix}metallic text 
┃➥ ${prefix}striking text
┃➥ ${prefix}watermelon text         
┃➥ ${prefix}butterfly text
┃➥ ${prefix}harry text
┃➥ ${prefix}glowneon text
┃➥ ${prefix}coffecup2 text          
┃➥ ${prefix}luxury text 
┃➥ ${prefix}cemetery text
┃➥ ${prefix}woodblock text
┃➥ ${prefix}sweet text
┃➥ ${prefix}simple text
┃➥ ${prefix}bevel text
┃➥ ${prefix}underflower text         
┃➥ ${prefix}underflower2 text
┗━──────────────

      *✪[ Maker Menu ]✪ :* 
┏━───────────────╮
┃➥ ${prefix}sticker
┃➥ ${prefix}smeme [text]
┃➥ ${prefix}memegen [atas|bawah]
┃➥ ${prefix}ktpmaker
┃➥ ${prefix}attp [text]
┃➥ ${prefix}ttp [text]
┃➥ ${prefix}ttp1 [text]
┃➥ ${prefix}ttp2 [text]
┃➥ ${prefix}ttp3 [text]
┃➥ ${prefix}ttp4 [text]
┃➥ ${prefix}swm author|packname
┃➥ ${prefix}take author|packname
┃➥ ${prefix}fdeface
┃➥ ${prefix}amongus [text]
┃➥ ${prefix}tweettrump [text]
┃➥ ${prefix}cmm [text]
┃➥ ${prefix}kanna [text]
┃➥ ${prefix}nulis [text]
┃➥ ${prefix}tahta [text]
┃➥ ${prefix}ytgold [text]
┃➥ ${prefix}ytsilver [text]
┃➥ ${prefix}emoji 👼
┗━──────────────
 
     *✪[ Image Effect ]✪ :*
┏━───────────────╮
┃➥ ${prefix}trigger
┃➥ ${prefix}gay
┃➥ ${prefix}glass
┃➥ ${prefix}passed
┃➥ ${prefix}jail
┃➥ ${prefix}comrade
┃➥ ${prefix}green
┃➥ ${prefix}blue
┃➥ ${prefix}greyscale
┃➥ ${prefix}invert
┃➥ ${prefix}invertgreyscale
┃➥ ${prefix}red
┃➥ ${prefix}blurple
┃➥ ${prefix}blurple2
┃➥ ${prefix}wasted
┃➥ ${prefix}sepia
┃➥ ${prefix}wanted
┃➥ ${prefix}utatoo
┃➥ ${prefix}unsharpen
┃➥ ${prefix}thanos
┃➥ ${prefix}sniper
┃➥ ${prefix}sharpen
┃➥ ${prefix}scary
┃➥ ${prefix}rip
┃➥ ${prefix}rejected
┃➥ ${prefix}redple
┃➥ ${prefix}posterize
┃➥ ${prefix}ps4
┃➥ ${prefix}pixelize
┃➥ ${prefix}missionpassed
┃➥ ${prefix}moustache
┃➥ ${prefix}lookwhatkarenhave
┃➥ ${prefix}instagram
┃➥ ${prefix}glitch
┃➥ ${prefix}frame
┃➥ ${prefix}fire
┃➥ ${prefix}distort
┃➥ ${prefix}dictator
┃➥ ${prefix}deepfry
┃➥ ${prefix}ddungeon
┃➥ ${prefix}circle
┃➥ ${prefix}challenger
┃➥ ${prefix}burn
┃➥ ${prefix}brazzers
┃➥ ${prefix}beautiful
┗━──────────────

     *✪[ Group Menu ]✪ :*
┏━───────────────╮
┃➥ ${prefix}add 62***
┃➥ ${prefix}kick _@user_
┃➥ ${prefix}radd _reply pesan @user_
┃➥ ${prefix}rkick _reply pesan @user_
┃➥ ${prefix}ping
┃➥ ${prefix}welcome [on / off]
┃➥ ${prefix}nsfw [on / off]
┃➥ ${prefix}antilink [on / off]
┃➥ ${prefix}autoread <query> [on / off]
┃➥ ${prefix}antibug [on / off]
┃➥ ${prefix}antidelete [on / off]
┃➥ ${prefix}anticall [on / off]
┃➥ ${prefix}autoketik [on / off]
┃➥ ${prefix}autovn [on / off]
┃➥ ${prefix}antihidetag [on / off]
┃➥ ${prefix}autobio [on / off]
┃➥ ${prefix}register [on / off]
┃➥ ${prefix}autorespon [on / off]
┃➥ ${prefix}get [link]
┃➥ ${prefix}getpp _@user_
┃➥ ${prefix}getname _reply_
┃➥ ${prefix}size _reply media_
┃➥ ${prefix}colongsw _reply sw_
┃➥ ${prefix}getbio _@user_
┃➥ ${prefix}tagall
┃➥ ${prefix}listonline
┃➥ ${prefix}caripesan query
┃➥ ${prefix}caripesan2 [query]
┃➥ ${prefix}searchmsg [query|total]
┃➥ ${prefix}sider [reply pesan bot]
┃➥ ${prefix}del [reply pesan bot]
┃➥ ${prefix}q [reply pesan]
┃➥ ${prefix}afk [reason]
┃➥ ${prefix}getsider [reply pesan bot]
┃➥ ${prefix}promoteall
┃➥ ${prefix}ppcouple
┃➥ ${prefix}setname
┃➥ ${prefix}revoke
┃➥ ${prefix}setdesk
┃➥ ${prefix}spam text|jumlah
┃➥ ${prefix}demoteall
┃➥ ${prefix}admin
┃➥ ${prefix}listpc
┃➥ ${prefix}listgroup
┃➥ ${prefix}hentai
┃➥ ${prefix}jadian
┃➥ ${prefix}trapnime
┃➥ ${prefix}sewa add/del waktu
┃➥ ${prefix}listsewa
┃➥ ${prefix}ceksewa
┃➥ ${prefix}premium add 62xxx waktu
┃➥ ${prefix}cekpremium
┃➥ ${prefix}listprem
┃➥ ${prefix}belipremium
┃➥ ${prefix}sewabot
┃➥ ${prefix}verify
┃➥ ${prefix}limit
┃➥ ${prefix}profile
┃➥ ${prefix}buylimit
┃➥ ${prefix}buyglimit
┃➥ ${prefix}awoo
┃➥ ${prefix}megumin
┗━──────────────

   *✪[ Random Sound ]✪ :*
┏━───────────────╮
┃➥ ${prefix}sound1
┃➥ ${prefix}sound2
┃➥ ${prefix}sound3
┃➥ ${prefix}sound4
┃➥ ${prefix}sound5
┃➥ ${prefix}sound6
┃➥ ${prefix}sound7
┃➥ ${prefix}sound8
┃➥ ${prefix}sound9
┃➥ ${prefix}sound10
┃➥ ${prefix}sound11
┃➥ ${prefix}sound12
┃➥ ${prefix}sound13
┃➥ ${prefix}sound14
┃➥ ${prefix}sound15
┃➥ ${prefix}sound16
┃➥ ${prefix}sound17
┃➥ ${prefix}sound18 
┃➥ ${prefix}sound19
┃➥ ${prefix}sound20
┃➥ ${prefix}sound21
┃➥ ${prefix}sound22
┃➥ ${prefix}sound23
┃➥ ${prefix}sound24
┃➥ ${prefix}sound25
┃➥ ${prefix}sound26
┃➥ ${prefix}sound27
┃➥ ${prefix}sound28
┃➥ ${prefix}sound29
┃➥ ${prefix}sound30
┃➥ ${prefix}sound31
┃➥ ${prefix}sound32
┃➥ ${prefix}sound33
┃➥ ${prefix}sound34
┃➥ ${prefix}sound35
┃➥ ${prefix}sound36
┃➥ ${prefix}sound37
┃➥ ${prefix}sound38
┃➥ ${prefix}sound39
┃➥ ${prefix}sound40
┃➥ ${prefix}sound41
┃➥ ${prefix}sound42
┃➥ ${prefix}sound43
┃➥ ${prefix}sound44
┃➥ ${prefix}sound45
┃➥ ${prefix}sound46
┃➥ ${prefix}sound47
┃➥ ${prefix}sound48
┃➥ ${prefix}sound49
┃➥ ${prefix}sound50
┃➥ ${prefix}sound51
┃➥ ${prefix}sound52
┃➥ ${prefix}sound53
┃➥ ${prefix}sound54
┃➥ ${prefix}sound55
┃➥ ${prefix}sound56
┃➥ ${prefix}sound57
┃➥ ${prefix}sound58
┃➥ ${prefix}sound59
┃➥ ${prefix}sound60
┃➥ ${prefix}sound61
┃➥ ${prefix}sound62
┃➥ ${prefix}sound63
┃➥ ${prefix}sound64
┃➥ ${prefix}sound65
┃➥ ${prefix}sound66
┃➥ ${prefix}sound67
┃➥ ${prefix}sound68
┃➥ ${prefix}sound69
┃➥ ${prefix}sound70
┗━──────────────

     *✪[ Owner Menu ]✪ :*
┏━───────────────╮
┃➥ ${prefix}setmenu location
┃➥ ${prefix}setmenu document
┃➥ ${prefix}setmenu list
┃➥ ${prefix}setmenu troli
┃➥ ${prefix}setmenu troli2
┃➥ ${prefix}setmenu katalog
┃➥ ${prefix}setmenu katalog2
┃➥ ${prefix}off
┃➥ ${prefix}on
┃➥ ${prefix}buggc
┃➥ ${prefix}bc
┃➥ ${prefix}bcimage
┃➥ ${prefix}bcgif
┃➥ ${prefix}bcvideo
┃➥ ${prefix}bcaudio
┃➥ ${prefix}bcsticker
┃➥ ${prefix}ban
┃➥ ${prefix}unban
┃➥ ${prefix}block
┃➥ ${prefix}unblock
┃➥ ${prefix}status
┃➥ ${prefix}clearall
┃➥ ${prefix}self
┃➥ ${prefix}public
┃➥ ${prefix}join
┃➥ ${prefix}out
┃➥ ${prefix}clearall
┃➥ ${prefix}readall
┃➥ ${prefix}unreadall
┃➥ ${prefix}archive
┃➥ ${prefix}unarchive
┃➥ ${prefix}pin
┃➥ ${prefix}delthischat
┃➥ ${prefix}unpin
┃➥ ${prefix}setthumb
┃➥ ${prefix}settarget
┃➥ ${prefix}setfakeimg
┃➥ ${prefix}setreply
┃➥ ${prefix}term _code_
┃➥ < _code_
┃➥ x or > _code_
┃➥ $  _termux code_
┃➥ =>  _eval async_
┗━──────────────

 *✪[ Storage  Menu ]✪ :*
┏━───────────────╮
┃➥ ${prefix}addstik 
┃➥ ${prefix}addimg 
┃➥ ${prefix}addvid 
┃➥ ${prefix}addvn   
┃➥ ${prefix}liststick
┃➥ ${prefix}listimg
┃➥ ${prefix}listvid
┃➥ ${prefix}listvn
┃➥ ${prefix}addrespon
┃➥ ${prefix}delrespon
┃➥ ${prefix}listrespon

      *✪[ Tag  Menu ]✪ :*
┏━───────────────╮
┃➥ ${prefix}hidetag
┃➥ ${prefix}kontag
┃➥ ${prefix}sticktag
┃➥ ${prefix}totag
┃➥ ${prefix}ganteng 
┃➥ ${prefix}cantik 
┃➥ ${prefix}jelek 
┃➥ ${prefix}goblok  
┃➥ ${prefix}bego 
┃➥ ${prefix}pinter 
┃➥ ${prefix}jago 
┃➥ ${prefix}nolep 
┃➥ ${prefix}monyet  
┃➥ ${prefix}babi 
┃➥ ${prefix}beban 
┃➥ ${prefix}baik 
┃➥ ${prefix}jahat 
┃➥ ${prefix}anjing 
┃➥ ${prefix}haram 
┃➥ ${prefix}kontol 
┃➥ ${prefix}pakboy 
┃➥ ${prefix}pakgirl 
┃➥ ${prefix}wibu 
┃➥ ${prefix}hebat 
┃➥ ${prefix}sadboy 
┃➥ ${prefix}sadgirl  
┗━──────────────

        *✪[ Up Eswe ]✪ :*
┏━───────────────╮
┃➥ ${prefix}upswteks
┃➥ ${prefix}upswimage
┃➥ ${prefix}upswvideo
┗━──────────────

      *✪[ Kerang Ajaib ]✪ :*
┏━───────────────╮
┃➥ ${prefix}bisakah [query]
┃➥ ${prefix}apakah [query]
┃➥ ${prefix}kapankah [query]
┗━──────────────

       *✪[ Nsfw & Sfw ]✪ :*
┏━───────────────╮
┃➥ ${prefix}hentaivid
┃➥ ${prefix}ahegao
┃➥ ${prefix}ass
┃➥ ${prefix}bdsm
┃➥ ${prefix}blowjob
┃➥ ${prefix}blowjob2
┃➥ ${prefix}cuckold
┃➥ ${prefix}cum
┃➥ ${prefix}ero
┃➥ ${prefix}femdom
┃➥ ${prefix}foot
┃➥ ${prefix}gangbang
┃➥ ${prefix}glasses
┃➥ ${prefix}jahy
┃➥ ${prefix}manga
┃➥ ${prefix}masturbation
┃➥ ${prefix}neko
┃➥ ${prefix}orgy
┃➥ ${prefix}panties
┃➥ ${prefix}pussy
┃➥ ${prefix}tentacles
┃➥ ${prefix}thighs
┃➥ ${prefix}yuri
┃➥ ${prefix}feet
┃➥ ${prefix}lewdkemo
┃➥ ${prefix}woof
┃➥ ${prefix}gasm
┃➥ ${prefix}solo
┃➥ ${prefix}8ball
┃➥ ${prefix}goose
┃➥ ${prefix}avatar
┃➥ ${prefix}hololewd
┃➥ ${prefix}gecg
┃➥ ${prefix}holo
┃➥ ${prefix}fox_girl
┃➥ ${prefix}tits
┃➥ ${prefix}eroyuri
┃➥ ${prefix}holoyero
┃➥ ${prefix}lizard
┃➥ ${prefix}keta
┃➥ ${prefix}eron
┃➥ ${prefix}erok
┃➥ ${prefix}kemonomimi
┃➥ ${prefix}cum_jpg
┃➥ ${prefix}nsfw_avatar
┃➥ ${prefix}erofeet
┃➥ ${prefix}meow
┃➥ ${prefix}wallpaper
┃➥ ${prefix}waifu
┃➥ ${prefix}trap
┃➥ ${prefix}lewd
┃➥ ${prefix}pussy_jpg
┃➥ ${prefix}futanari
┃➥ ${prefix}lewdk
┃➥ ${prefix}solog
┃➥ ${prefix}smug
┃➥ ${prefix}cum
┃➥ ${prefix}slap
┃➥ ${prefix}les
┃➥ ${prefix}erokemo
┃➥ ${prefix}bj
┃➥ ${prefix}pwankg
┃➥ ${prefix}pat
┃➥ ${prefix}poke
┃➥ ${prefix}feed
┃➥ ${prefix}nsfw_neko_gif
┃➥ ${prefix}pussy
┃➥ ${prefix}feetg
┃➥ ${prefix}baka
┃➥ ${prefix}hug
┃➥ ${prefix}kiss
┃➥ ${prefix}tickle
┃➥ ${prefix}spank
┃➥ ${prefix}kuni
┃➥ ${prefix}classic
┃➥ ${prefix}boobs
┃➥ ${prefix}anal
┃➥ ${prefix}ngif
┃➥ ${prefix}cuddle
┃➥ ${prefix}zettai
┗━──────────────
 
   *✪[ Telegram Stiker ]✪ :*
┏━───────────────╮
┃➥ ${prefix}awoawo
┃➥ ${prefix}benedict
┃➥ ${prefix}chat
┃➥ ${prefix}dbfly
┃➥ ${prefix}dino_kuning
┃➥ ${prefix}doge
┃➥ ${prefix}gojosatoru
┃➥ ${prefix}hope_boy
┃➥ ${prefix}jisoo
┃➥ ${prefix}kr_robot
┃➥ ${prefix}kucing
┃➥ ${prefix}lonte
┃➥ ${prefix}manusia_lidi
┃➥ ${prefix}menjamet
┃➥ ${prefix}meow
┃➥ ${prefix}nicholas
┃➥ ${prefix}patrick
┃➥ ${prefix}popoci
┃➥ ${prefix}sponsbob
┃➥ ${prefix}kawan_sponsbob
┃➥ ${prefix}tyni
┗━──────────────

     *✪[ Cecan  Menu ]✪ :*
┏━───────────────╮
┃➥ ${prefix}china
┃➥ ${prefix}indonesia
┃➥ ${prefix}malaysia
┃➥ ${prefix}thailand
┃➥ ${prefix}korea
┃➥ ${prefix}japan
┃➥ ${prefix}vietnam
┃➥ ${prefix}jenni
┃➥ ${prefix}jiso
┃➥ ${prefix}lisa
┃➥ ${prefix}rose
┗━──────────────

    *✪[ Quotes  Menu ]✪ :*
┏━───────────────╮ 
┃➥ ${prefix}katailham  
┃➥ ${prefix}dare   
┃➥ ${prefix}truth  
┃➥ ${prefix}katabijak_lucu   
┃➥ ${prefix}katacaklontong  
┃➥ ${prefix}katadilan  
┗━──────────────

   *✪[ Cogan  Menu ]✪ :*
┏━───────────────╮
┃➥ ${prefix}baekhyung  
┃➥ ${prefix}dohkyungsoo  
┃➥ ${prefix}huangzitao  
┃➥ ${prefix}jhope  
┃➥ ${prefix}jimin 
┃➥ ${prefix}jungkook 
┃➥ ${prefix}kimjondae  
┃➥ ${prefix}kimjong  
┃➥ ${prefix}kimjunmyeon  
┃➥ ${prefix}kimminseok 
┃➥ ${prefix}kimnanjoon  
┃➥ ${prefix}kimseok  
┃➥ ${prefix}kimtaehyung  
┃➥ ${prefix}luhan  
┃➥ ${prefix}ohsehun 
┃➥ ${prefix}parkchanyeol 
┃➥ ${prefix}suga  
┃➥ ${prefix}wuyifan
┗━──────────────

     *✪[ Asupan  Menu ]✪ :*
┏━───────────────╮
┃➥ ${prefix}rikagusriani 
┃➥ ${prefix}ukhty 
┃➥ ${prefix}santuy 
┃➥ ${prefix}geayubi   
┃➥ ${prefix}bocil
┃➥ ${prefix}asupan
┃➥ ${prefix}chika 
┃➥ ${prefix}delvira 
┃➥ ${prefix}ayu   
┃➥ ${prefix}bunga
┃➥ ${prefix}aura
┃➥ ${prefix}nisa 
┃➥ ${prefix}ziva 
┃➥ ${prefix}yana   
┃➥ ${prefix}viona
┃➥ ${prefix}syania
┃➥ ${prefix}riri   
┃➥ ${prefix}syifa
┃➥ ${prefix}mama_gina
┃➥ ${prefix}alcakenya 
┃➥ ${prefix}mangayutri
┗━──────────────

    *✪[ Anime  Menu ]✪ :*
┏━───────────────╮
┃➥ ${prefix}anna
┃➥ ${prefix}asuna_yuki 
┃➥ ${prefix}ayuzawa 
┃➥ ${prefix}chitoge 
┃➥ ${prefix}emilia
┃➥ ${prefix}erza 
┃➥ ${prefix}hinata 
┃➥ ${prefix}inori 
┃➥ ${prefix}kaga_kouko 
┃➥ ${prefix}kaori_miyazono 
┃➥ ${prefix}kotori_minami
┃➥ ${prefix}mikasa 
┃➥ ${prefix}mio_akiyama 
┃➥ ${prefix}mizore_sirayuki 
┃➥ ${prefix}nakiri_alice 
┃➥ ${prefix}naruto 
┃➥ ${prefix}riyas_gremori
┃➥ ${prefix}sakura 
┃➥ ${prefix}sasuke 
┃➥ ${prefix}sento_isuzu 
┃➥ ${prefix}shana 
┃➥ ${prefix}shiina 
┃➥ ${prefix}shinka
┃➥ ${prefix}winry
┃➥ ${prefix}yukino 
┃➥ ${prefix}yuzuki 
┃➥ ${prefix}akame
┃➥ ${prefix}mikosiba
┃
┗━──「 *Z E U S X Z B O T* 」─❏
`
}

const fun = (prefix) => {
	return`┌❑  *FUN & GAME MENU* ❑
│
┃➥ ${prefix}start
┃➥ ${prefix}leave
┃➥ ${prefix}skip
┃➥ ${prefix}jelajah
┃➥ ${prefix}adventure
┃➥ ${prefix}nambang
┃➥ ${prefix}nebang
┃➥ ${prefix}mancing
┃➥ ${prefix}lebur
┃➥ ${prefix}jualikan
┃➥ ${prefix}jualcoal
┃➥ ${prefix}jualstone
┃➥ ${prefix}jualingot
┃➥ ${prefix}jualkayu
┃➥ ${prefix}slot
┃➥ ${prefix}inventory
┃➥ ${prefix}dompet
┃➥ ${prefix}suit
┃➥ ${prefix}judi
┃➥ ${prefix}fitnah
┃➥ ${prefix}absen
┃➥ ${prefix}absensi
┃➥ ${prefix}tebakgambar
┃➥ ${prefix}caklontong
┃➥ ${prefix}family100
┃➥ ${prefix}tebakanime
┃➥ ${prefix}tebakkalimat
┃➥ ${prefix}susunkata
┃➥ ${prefix}tekateki
┃➥ ${prefix}siapaaku
┃➥ ${prefix}tebaklirik
┃➥ ${prefix}tebakkata
┃➥ ${prefix}fitnahpc text|balasan
┃➥ ${prefix}kontak 62xxx|text
┃➥ ${prefix}tictactoe @user
┃➥ ${prefix}delttt
┃➥ ${prefix}voting
┃➥ ${prefix}delvote
┃➥ ${prefix}jadibot
┃➥ ${prefix}stopjadibot
┃➥ ${prefix}listbot
┗━──────────────
`
}

const maker = (prefix) => {
	return`┌❑  *MAKER MENU* ❑
│
┃➥ ${prefix}sticker
┃➥ ${prefix}smeme [text]
┃➥ ${prefix}memegen [atas|bawah]
┃➥ ${prefix}ktpmaker
┃➥ ${prefix}attp
┃➥ ${prefix}ttp
┃➥ ${prefix}ttp1
┃➥ ${prefix}ttp2
┃➥ ${prefix}ttp3
┃➥ ${prefix}ttp4
┃➥ ${prefix}swm author|packname
┃➥ ${prefix}take author|packname
│❒ ${prefix}fdeface
│❒ ${prefix}amongus 
│❒ ${prefix}tweettrump text
│❒ ${prefix}cmm text
│❒ ${prefix}kanna text
│❒ ${prefix}nulis text
│❒ ${prefix}tahta text
│❒ ${prefix}ytgold text
│❒ ${prefix}ytsilver
┃➥ ${prefix}emoji 👼
┗━──────────────
`
}

const textpro = (prefix) => {
	return`┌❑  *TEXTPRO MENU* ❑
│
┃➥ ${prefix}halloween2 text|text2
┃➥ ${prefix}horror text|text2
┃➥ ${prefix}game8bit text|text2
┃➥ ${prefix}layered text|text2
┃➥ ${prefix}glitch2 text|text2
┃➥ ${prefix}coolg text|text2
┃➥ ${prefix}coolwg text|text2
┃➥ ${prefix}realistic text|text2
┃➥ ${prefix}space3d text|text2
┃➥ ${prefix}gtiktok text|text2
┃➥ ${prefix}stone text|text2
┃➥ ${prefix}marvel text|text2
┃➥ ${prefix}marvel2 text|text2
┃➥ ${prefix}pornhub text|text2
┃➥ ${prefix}avengers text|text2
┃➥ ${prefix}metalr text|text2
┃➥ ${prefix}metalg text|text2
┃➥ ${prefix}metalg2 text|text2
┃➥ ${prefix}halloween2 text|text2
┃➥ ${prefix}lion text|text2
┃➥ ${prefix}wolf_bw text|text2
┃➥ ${prefix}wolf_g text|text2
┃➥ ${prefix}ninja text|text2
┃➥ ${prefix}3dsteel text|text2
┃➥ ${prefix}horror2 text|text2
┃➥ ${prefix}lava text|text2
┃➥ ${prefix}bagel text|text2
┃➥ ${prefix}blackpink text
┃➥ ${prefix}rainbow2 text
┃➥ ${prefix}water_pipe text
┃➥ ${prefix}halloween text
┃➥ ${prefix}sketch text
┃➥ ${prefix}sircuit text
┃➥ ${prefix}discovery text
┃➥ ${prefix}metallic2 text
┃➥ ${prefix}fiction text
┃➥ ${prefix}demon text
┃➥ ${prefix}transformer text
┃➥ ${prefix}berry text
┃➥ ${prefix}thunder text
┃➥ ${prefix}magma text
┃➥ ${prefix}3dstone text
┃➥ ${prefix}neon text
┃➥ ${prefix}glitch text
┃➥ ${prefix}harry_potter text
┃➥ ${prefix}embossed text
┃➥ ${prefix}broken text
┃➥ ${prefix}papercut text
┃➥ ${prefix}gradient text
┃➥ ${prefix}glossy text
┃➥ ${prefix}watercolor text
┃➥ ${prefix}multicolor text
┃➥ ${prefix}neon_devil text
┃➥ ${prefix}underwater text
┃➥ ${prefix}bear text
┃➥ ${prefix}wonderfulg text
┃➥ ${prefix}christmas text
┃➥ ${prefix}neon_light text
┃➥ ${prefix}snow text
┃➥ ${prefix}cloudsky text
┃➥ ${prefix}luxury2 text
┃➥ ${prefix}gradient2 text
┃➥ ${prefix}summer text
┃➥ ${prefix}writing text
┃➥ ${prefix}engraved text
┃➥ ${prefix}summery text
┃➥ ${prefix}3dglue text
┃➥ ${prefix}metaldark text
┃➥ ${prefix}neonlight text
┃➥ ${prefix}oscar text
┃➥ ${prefix}minion text
┃➥ ${prefix}holographic text
┃➥ ${prefix}purple text
┃➥ ${prefix}glossyb text
┃➥ ${prefix}deluxe2 text
┃➥ ${prefix}glossyc text
┃➥ ${prefix}fabric text
┃➥ ${prefix}neonc text
┃➥ ${prefix}newyear text
┃➥ ${prefix}newyear2 text
┃➥ ${prefix}metals text
┃➥ ${prefix}xmas text
┃➥ ${prefix}blood text
┃➥ ${prefix}darkg text
┃➥ ${prefix}joker text
┃➥ ${prefix}wicker text
┃➥ ${prefix}natural text
┃➥ ${prefix}firework text
┃➥ ${prefix}skeleton text
┃➥ ${prefix}balloon text
┃➥ ${prefix}balloon2 text
┃➥ ${prefix}balloon3 text
┃➥ ${prefix}balloon4 text
┃➥ ${prefix}balloon5 text
┃➥ ${prefix}balloon6 text
┃➥ ${prefix}balloon7 text
┃➥ ${prefix}steel text
┃➥ ${prefix}gloss text
┃➥ ${prefix}denim text
┃➥ ${prefix}decorate text
┃➥ ${prefix}decorate2 text
┃➥ ${prefix}peridot text
┃➥ ${prefix}rock text
┃➥ ${prefix}glass text
┃➥ ${prefix}glass2 text
┃➥ ${prefix}glass3 text
┃➥ ${prefix}glass4 text
┃➥ ${prefix}glass5 text
┃➥ ${prefix}glass6 text
┃➥ ${prefix}glass7 text
┃➥ ${prefix}glass8 text
┃➥ ${prefix}captain_as2 text
┃➥ ${prefix}robot text
┃➥ ${prefix}equalizer text
┃➥ ${prefix}toxic text
┃➥ ${prefix}sparkling text
┃➥ ${prefix}sparkling2 text
┃➥ ${prefix}sparkling3 text
┃➥ ${prefix}sparkling4 text
┃➥ ${prefix}sparkling5 text
┃➥ ${prefix}sparkling6 text
┃➥ ${prefix}sparkling7 text
┃➥ ${prefix}decorative text
┃➥ ${prefix}chocolate text
┃➥ ${prefix}strawberry text
┃➥ ${prefix}koifish text
┃➥ ${prefix}bread text
┃➥ ${prefix}matrix text
┃➥ ${prefix}blood2 text
┃➥ ${prefix}neonligth2 text
┃➥ ${prefix}thunder2 text
┃➥ ${prefix}3dbox text
┃➥ ${prefix}neon2 text
┃➥ ${prefix}roadw text
┃➥ ${prefix}bokeh text
┃➥ ${prefix}gneon text
┃➥ ${prefix}advanced text
┃➥ ${prefix}dropwater text
┃➥ ${prefix}wall text
┃➥ ${prefix}chrismast text
┃➥ ${prefix}honey text
┃➥ ${prefix}drug text
┃➥ ${prefix}marble text
┃➥ ${prefix}marble2 text
┃➥ ${prefix}ice text
┃➥ ${prefix}juice text
┃➥ ${prefix}rusty text
┃➥ ${prefix}abstra text
┃➥ ${prefix}biscuit text
┃➥ ${prefix}wood text
┃➥ ${prefix}scifi text
┃➥ ${prefix}metalr text
┃➥ ${prefix}purpleg text
┃➥ ${prefix}shiny text 
┃➥ ${prefix}jewelry text
┃➥ ${prefix}jewelry2 text
┃➥ ${prefix}jewelry3 text
┃➥ ${prefix}jewelry4 text
┃➥ ${prefix}jewelry5 text
┃➥ ${prefix}jewelry6 text
┃➥ ${prefix}jewelry7 text
┃➥ ${prefix}jewelry8 text
┃➥ ${prefix}metalh text
┃➥ ${prefix}golden text
┃➥ ${prefix}glitter text
┃➥ ${prefix}glitter2 text
┃➥ ${prefix}glitter3 text
┃➥ ${prefix}glitter4 text
┃➥ ${prefix}glitter5 text
┃➥ ${prefix}glitter6 text
┃➥ ${prefix}glitter7 text
┃➥ ${prefix}metale text
┃➥ ${prefix}carbon text
┃➥ ${prefix}candy text
┃➥ ${prefix}metalb text
┃➥ ${prefix}gemb text
┃➥ ${prefix}3dchrome text
┃➥ ${prefix}metalb2 text
┃➥ ${prefix}metalg text
┃➥ ${prefix}metalg text
┗━──────────────
`
}

const photooxy = (prefix) => {
	return`┌❑  *PHOTOOXY MENU* ❑
│
┃➥ ${prefix}captain_as text|text2
┃➥ ${prefix}smoke text|text2
┃➥ ${prefix}tiktok2 text|text2 
┃➥ ${prefix}arcade text|text2
┃➥ ${prefix}battlefield text|text2
┃➥ ${prefix}pubg text|text2
┃➥ ${prefix}shadow text
┃➥ ${prefix}cname text
┃➥ ${prefix}romantic text
┃➥ ${prefix}burnpaper text
┃➥ ${prefix}funnycup text
┃➥ ${prefix}love text
┃➥ ${prefix}undergrass text          
┃➥ ${prefix}heart text
┃➥ ${prefix}coffeecup text
┃➥ ${prefix}wood text          
┃➥ ${prefix}flower text         
┃➥ ${prefix}wooden text 
┃➥ ${prefix}3dsummer text
┃➥ ${prefix}wolf_metal text
┃➥ ${prefix}3dnature text
┃➥ ${prefix}underwater text          
┃➥ ${prefix}goldenrose text
┃➥ ${prefix}vector text
┃➥ ${prefix}typography text
┃➥ ${prefix}typography2 text 
┃➥ ${prefix}underfall text  
┃➥ ${prefix}smokyneon text 
┃➥ ${prefix}rainbow text 
┃➥ ${prefix}graffiti text
┃➥ ${prefix}camouflage text
┃➥ ${prefix}3dglowing text          
┃➥ ${prefix}vintage text
┃➥ ${prefix}honey text 
┃➥ ${prefix}whitecube text
┃➥ ${prefix}avatar text 
┃➥ ${prefix}glowrainbow text
┃➥ ${prefix}nightsky text
┃➥ ${prefix}fur text
┃➥ ${prefix}flaming text          
┃➥ ${prefix}crisp text
┃➥ ${prefix}embroidery text
┃➥ ${prefix}bcake text          
┃➥ ${prefix}3dligth text
┃➥ ${prefix}metallic text 
┃➥ ${prefix}striking text
┃➥ ${prefix}watermelon text         
┃➥ ${prefix}butterfly text
┃➥ ${prefix}harry text
┃➥ ${prefix}glowneon text
┃➥ ${prefix}coffecup2 text          
┃➥ ${prefix}luxury text 
┃➥ ${prefix}cemetery text
┃➥ ${prefix}woodblock text
┃➥ ${prefix}sweet text
┃➥ ${prefix}simple text
┃➥ ${prefix}bevel text
┃➥ ${prefix}underflower text         
┃➥ ${prefix}underflower2 text
┗━──────────────
`
}

const other = (prefix) => {
	return`┌❑  *GROUP MENU* ❑
│
┃➥ ${prefix}add 62xxx
┃➥ ${prefix}kick 62xxx
┃➥ ${prefix}ping
┃➥ ${prefix}antilink [on / off]
┃➥ ${prefix}get [link]
┃➥ ${prefix}getpp _@user_
┃➥ ${prefix}getbio _@user_
┃➥ ${prefix}getname [reply msg user]
┃➥ ${prefix}size _reply media_
┃➥ ${prefix}colongsw _reply sw_
┃➥ ${prefix}tagall
┃➥ ${prefix}listonline
┃➥ ${prefix}caripesan query
┃➥ ${prefix}caripesan2 [query]
┃➥ ${prefix}searchmsg [query|total]
┃➥ ${prefix}sider [reply pesan bot]
┃➥ ${prefix}del [reply pesan bot]
┃➥ ${prefix}q [reply pesan]
┃➥ ${prefix}afk [reason]
┃➥ ${prefix}getsider [reply pesan bot]
┃➥ ${prefix}tagall
┃➥ ${prefix}revoke
┃➥ ${prefix}setname
┃➥ ${prefix}ppcouple
┃➥ ${prefix}promoteall
┃➥ ${prefix}demoteall
┃➥ ${prefix}admin
┃➥ ${prefix}hentai
┃➥ ${prefix}jadian
┃➥ ${prefix}trapnime
┃➥ ${prefix}sewa add/del waktu
┃➥ ${prefix}listsewa
┃➥ ${prefix}ceksewa
┃➥ ${prefix}premium add @user waktu
┃➥ ${prefix}cekpremium
┃➥ ${prefix}listprem
┃➥ ${prefix}belipremium
┃➥ ${prefix}sewabot
┃➥ ${prefix}verify
┃➥ ${prefix}limit
┃➥ ${prefix}profile
┃➥ ${prefix}buylimit
┃➥ ${prefix}buyglimit
┃➥ ${prefix}blowjob
┃➥ ${prefix}awoo
┃➥ ${prefix}megumin
┗━──────────────
`
}

const ownermenu = (prefix) => {
	return`┌❑  *OWNER MENU* ❑
│
┃➥ ${prefix}setmenu location
┃➥ ${prefix}setmenu document
┃➥ ${prefix}setmenu list
┃➥ ${prefix}setmenu troli
┃➥ ${prefix}setmenu troli2
┃➥ ${prefix}setmenu katalog
┃➥ ${prefix}setmenu katalog2
┃➥ ${prefix}off
┃➥ ${prefix}on
┃➥ ${prefix}buggc
┃➥ ${prefix}bc
┃➥ ${prefix}bcimage
┃➥ ${prefix}bcgif
┃➥ ${prefix}bcvideo
┃➥ ${prefix}bcaudio
┃➥ ${prefix}bcsticker
┃➥ ${prefix}ban
┃➥ ${prefix}unban
┃➥ ${prefix}block
┃➥ ${prefix}unblock
┃➥ ${prefix}status
┃➥ ${prefix}clearall
┃➥ ${prefix}self
┃➥ ${prefix}public
┃➥ ${prefix}join 
┃➥ ${prefix}out
┃➥ ${prefix}readall
┃➥ ${prefix}unreadall
┃➥ ${prefix}archive
┃➥ ${prefix}unarchive
┃➥ ${prefix}pin
┃➥ ${prefix}delthischat
┃➥ ${prefix}unpin
┃➥ ${prefix}autoread <query> [on / off]
┃➥ ${prefix}setthumb
┃➥ ${prefix}settarget
┃➥ ${prefix}setfakeimg
┃➥ ${prefix}setreply
┃➥ ${prefix}term _code_
┃➥  < _code_
┃➥ $  _termux code_
┃➥ =>  _eval async_
┃➥ x or > _code_
┗━──────────────
`
}

const setStcCmd = (prefix) => {
	return`┌❑  *SET STC CMD* ❑
│
┃➥ ${prefix}set_stc_menu
┃➥ ${prefix}set_stc_ping
┃➥ ${prefix}set_stc_gclose
┃➥ ${prefix}set_stc_gopen
┃➥ ${prefix}set_stc_itos
┃➥ ${prefix}set_stc_toimg
┃➥ ${prefix}set_stc_self
┃➥ ${prefix}set_stc_public
┗━──────────────

Cara penggunaan :
> ${prefix}set_stc_menu _fileLenght sticker_

Example :
> ${prefix}set_stc_menu 7446
`
}

const storage = (prefix) => {
	return`┌❑  *STORAGE MENU* ❑
│
┃➥ ${prefix}addstik 
┃➥ ${prefix}addimg 
┃➥ ${prefix}addvid 
┃➥ ${prefix}addvn   
┃➥ ${prefix}liststick
┃➥ ${prefix}listimg
┃➥ ${prefix}listvid
┃➥ ${prefix}listvn
┃➥ ${prefix}addrespon
┃➥ ${prefix}delrespon
┃➥ ${prefix}listrespon
┗━──────────────
`
}
const cecanmenu = (prefix) => {
	return`┌❑  *GACHA CECAN* ❑
│
┃➥ ${prefix}china
┃➥ ${prefix}indonesia
┃➥ ${prefix}malaysia
┃➥ ${prefix}thailand
┃➥ ${prefix}korea
┃➥ ${prefix}japan
┃➥ ${prefix}vietnam
┃➥ ${prefix}jenni
┃➥ ${prefix}jiso
┃➥ ${prefix}lisa
┃➥ ${prefix}rose
┗━──────────────
`
}

const tag = (prefix) => {
	return`┌❑  *TAG MENU* ❑
│
┃➥ ${prefix}hidetag
┃➥ ${prefix}kontag
┃➥ ${prefix}sticktag
┃➥ ${prefix}totag
┃➥ ${prefix}ganteng 
┃➥ ${prefix}cantik 
┃➥ ${prefix}jelek 
┃➥ ${prefix}goblok  
┃➥ ${prefix}bego 
┃➥ ${prefix}pinter 
┃➥ ${prefix}jago 
┃➥ ${prefix}nolep 
┃➥ ${prefix}monyet  
┃➥ ${prefix}babi 
┃➥ ${prefix}beban 
┃➥ ${prefix}baik 
┃➥ ${prefix}jahat 
┃➥ ${prefix}anjing 
┃➥ ${prefix}haram 
┃➥ ${prefix}kontol 
┃➥ ${prefix}pakboy 
┃➥ ${prefix}pakgirl 
┃➥ ${prefix}wibu 
┃➥ ${prefix}hebat 
┃➥ ${prefix}sadboy 
┃➥ ${prefix}sadgirl  
┗━──────────────
`
}

const upmenu = (prefix) => {
	return`┌❑  *UP ESWE* ❑
│
┃➥ ${prefix}upswteks
┃➥ ${prefix}upswimage
┃➥ ${prefix}upswvideo
┗━──────────────
`
}
const nsfw = (prefix) => {
	return`┌❑  *NSFW & SFW* ❑
│
┃➥ ${prefix}hentaivid
┃➥ ${prefix}ahegao
┃➥ ${prefix}ass
┃➥ ${prefix}bdsm
┃➥ ${prefix}blowjob
┃➥ ${prefix}blowjob2
┃➥ ${prefix}cuckold
┃➥ ${prefix}cum
┃➥ ${prefix}ero
┃➥ ${prefix}femdom
┃➥ ${prefix}foot
┃➥ ${prefix}gangbang
┃➥ ${prefix}glasses
┃➥ ${prefix}jahy
┃➥ ${prefix}manga
┃➥ ${prefix}masturbation
┃➥ ${prefix}neko
┃➥ ${prefix}orgy
┃➥ ${prefix}panties
┃➥ ${prefix}pussy
┃➥ ${prefix}tentacles
┃➥ ${prefix}thighs
┃➥ ${prefix}yuri
┃➥ ${prefix}feet
┃➥ ${prefix}lewdkemo
┃➥ ${prefix}woof
┃➥ ${prefix}gasm
┃➥ ${prefix}solo
┃➥ ${prefix}8ball
┃➥ ${prefix}goose
┃➥ ${prefix}avatar
┃➥ ${prefix}hololewd
┃➥ ${prefix}gecg
┃➥ ${prefix}holo
┃➥ ${prefix}fox_girl
┃➥ ${prefix}tits
┃➥ ${prefix}eroyuri
┃➥ ${prefix}holoyero
┃➥ ${prefix}lizard
┃➥ ${prefix}keta
┃➥ ${prefix}eron
┃➥ ${prefix}erok
┃➥ ${prefix}kemonomimi
┃➥ ${prefix}cum_jpg
┃➥ ${prefix}nsfw_avatar
┃➥ ${prefix}erofeet
┃➥ ${prefix}meow
┃➥ ${prefix}wallpaper
┃➥ ${prefix}waifu
┃➥ ${prefix}trap
┃➥ ${prefix}lewd
┃➥ ${prefix}pussy_jpg
┃➥ ${prefix}futanari
┃➥ ${prefix}lewdk
┃➥ ${prefix}solog
┃➥ ${prefix}smug
┃➥ ${prefix}cum
┃➥ ${prefix}slap
┃➥ ${prefix}les
┃➥ ${prefix}erokemo
┃➥ ${prefix}bj
┃➥ ${prefix}pwankg
┃➥ ${prefix}pat
┃➥ ${prefix}poke
┃➥ ${prefix}feed
┃➥ ${prefix}nsfw_neko_gif
┃➥ ${prefix}pussy
┃➥ ${prefix}feetg
┃➥ ${prefix}baka
┃➥ ${prefix}hug
┃➥ ${prefix}kiss
┃➥ ${prefix}tickle
┃➥ ${prefix}spank
┃➥ ${prefix}kuni
┃➥ ${prefix}classic
┃➥ ${prefix}boobs
┃➥ ${prefix}anal
┃➥ ${prefix}ngif
┃➥ ${prefix}cuddle
┃➥ ${prefix}zettai
┗━──────────────
`
}
const asupan = (prefix) => {
	return`┌❑  *ASUPAN MENU* ❑
│
┃➥ ${prefix}rikagusriani 
┃➥ ${prefix}ukhty 
┃➥ ${prefix}santuy 
┃➥ ${prefix}geayubi   
┃➥ ${prefix}bocil
┃➥ ${prefix}asupan
┃➥ ${prefix}chika 
┃➥ ${prefix}delvira 
┃➥ ${prefix}ayu   
┃➥ ${prefix}bunga
┃➥ ${prefix}aura
┃➥ ${prefix}nisa 
┃➥ ${prefix}ziva 
┃➥ ${prefix}yana   
┃➥ ${prefix}viona
┃➥ ${prefix}syania
┃➥ ${prefix}riri   
┃➥ ${prefix}syifa
┃➥ ${prefix}mama_gina
┃➥ ${prefix}alcakenya 
┃➥ ${prefix}mangayutri
┗━──────────────
`
}
const telestiker = (prefix) => {
	return`┌❑  *STICKERS MENU* ❑
│
┃➥ ${prefix}awoawo
┃➥ ${prefix}benedict
┃➥ ${prefix}chat
┃➥ ${prefix}dbfly
┃➥ ${prefix}dino_kuning
┃➥ ${prefix}doge
┃➥ ${prefix}gojosatoru
┃➥ ${prefix}hope_boy
┃➥ ${prefix}jisoo
┃➥ ${prefix}kr_robot
┃➥ ${prefix}kucing
┃➥ ${prefix}lonte
┃➥ ${prefix}manusia_lidi
┃➥ ${prefix}menjamet
┃➥ ${prefix}meow
┃➥ ${prefix}nicholas
┃➥ ${prefix}patrick
┃➥ ${prefix}popoci
┃➥ ${prefix}sponsbob
┃➥ ${prefix}kawan_sponsbob
┃➥ ${prefix}tyni
┗━──────────────
`
}
const image_effect_menu = (prefix) => {
	return`┌❑  *IMAGE EFFECT* ❑
│
┃➥ ${prefix}trigger
┃➥ ${prefix}gay
┃➥ ${prefix}glass
┃➥ ${prefix}passed
┃➥ ${prefix}jail
┃➥ ${prefix}comrade
┃➥ ${prefix}green
┃➥ ${prefix}blue
┃➥ ${prefix}greyscale
┃➥ ${prefix}invert
┃➥ ${prefix}invertgreyscale
┃➥ ${prefix}red
┃➥ ${prefix}blurple
┃➥ ${prefix}blurple2
┃➥ ${prefix}wasted
┃➥ ${prefix}wanted
┃➥ ${prefix}utatoo
┃➥ ${prefix}unsharpen
┃➥ ${prefix}thanos
┃➥ ${prefix}sniper
┃➥ ${prefix}sharpen
┃➥ ${prefix}scary
┃➥ ${prefix}rip
┃➥ ${prefix}rejected
┃➥ ${prefix}redple
┃➥ ${prefix}posterize
┃➥ ${prefix}ps4
┃➥ ${prefix}pixelize
┃➥ ${prefix}missionpassed
┃➥ ${prefix}moustache
┃➥ ${prefix}lookwhatkarenhave
┃➥ ${prefix}instagram
┃➥ ${prefix}glitch
┃➥ ${prefix}frame
┃➥ ${prefix}fire
┃➥ ${prefix}distort
┃➥ ${prefix}dictator
┃➥ ${prefix}deepfry
┃➥ ${prefix}ddungeon
┃➥ ${prefix}circle
┃➥ ${prefix}challenger
┃➥ ${prefix}burn
┃➥ ${prefix}brazzers
┃➥ ${prefix}beautiful
┃➥ ${prefix}sepia
┗━──────────────
`
}
const coganmenu = (prefix) => {
	return`┌❑ *GACHA COGAN* ❑
│
┃➥ ${prefix}baekhyung  
┃➥ ${prefix}dohkyungsoo  
┃➥ ${prefix}huangzitao  
┃➥ ${prefix}jhope  
┃➥ ${prefix}jimin 
┃➥ ${prefix}jungkook 
┃➥ ${prefix}kimjondae  
┃➥ ${prefix}kimjong  
┃➥ ${prefix}kimjunmyeon  
┃➥ ${prefix}kimminseok 
┃➥ ${prefix}kimnanjoon  
┃➥ ${prefix}kimseok  
┃➥ ${prefix}kimtaehyung  
┃➥ ${prefix}luhan  
┃➥ ${prefix}ohsehun 
┃➥ ${prefix}parkchanyeol 
┃➥ ${prefix}suga  
┃➥ ${prefix}wuyifan  
┗━──────────────
`
}

const quotesmenu = (prefix) => {
	return `┌❑ *QUOTES MENU* ❑
│
┃➥ ${prefix}katailham  
┃➥ ${prefix}dare   
┃➥ ${prefix}truth  
┃➥ ${prefix}katabijak_lucu   
┃➥ ${prefix}katacaklontong  
┃➥ ${prefix}katadilan  
┗━──────────────
`
}
const shopmenu = (prefix) => {
	return `┌❑ *SHOP MENU* ❑
│
┃➥ ${prefix}shop  
┃➥ ${prefix}price  
┃➥ ${prefix}pubg   
┃➥ ${prefix}ml   
┃➥ ${prefix}ff   
┃➥ ${prefix}aov   
┃➥ ${prefix}cod  
┃➥ ${prefix}sausage   
┃➥ ${prefix}lol  
┃➥ ${prefix}valo  
┗━──────────────
`
}
const animemenu = (prefix) => {
	return`┌❑ *ANIME MENU* ❑
│
┃➥ ${prefix}anna
┃➥ ${prefix}asuna_yuki 
┃➥ ${prefix}ayuzawa 
┃➥ ${prefix}chitoge 
┃➥ ${prefix}emilia
┃➥ ${prefix}erza 
┃➥ ${prefix}hinata 
┃➥ ${prefix}inori 
┃➥ ${prefix}kaga_kouko 
┃➥ ${prefix}kaori_miyazono 
┃➥ ${prefix}kotori_minami
┃➥ ${prefix}mikasa 
┃➥ ${prefix}mio_akiyama 
┃➥ ${prefix}mizore_sirayuki 
┃➥ ${prefix}nakiri_alice 
┃➥ ${prefix}naruto 
┃➥ ${prefix}riyas_gremori
┃➥ ${prefix}sakura 
┃➥ ${prefix}sasuke 
┃➥ ${prefix}sento_isuzu 
┃➥ ${prefix}shana 
┃➥ ${prefix}shiina 
┃➥ ${prefix}shinka
┃➥ ${prefix}winry
┃➥ ${prefix}yukino 
┃➥ ${prefix}yuzuki 
┃➥ ${prefix}akame
┃➥ ${prefix}mikosiba
┗━──────────────
`
}

const groupmenu = (prefix) => {
	return`┌❑ *GROUP MENU* ❑
│
┃➥ ${prefix}add 62***
┃➥ ${prefix}kick _@user_
┃➥ ${prefix}radd _reply pesan @user_
┃➥ ${prefix}rkick _reply pesan @user_
┃➥ ${prefix}ping
┃➥ ${prefix}nsfw [on / off]
┃➥ ${prefix}antilink [on / off]
┃➥ ${prefix}get [link]
┃➥ ${prefix}getpp _@user_
┃➥ ${prefix}getname [reply msg user]
┃➥ ${prefix}size [reply media]
┃➥ ${prefix}colongsw [reply sw]
┃➥ ${prefix}getbio _@user_
┃➥ ${prefix}tagall
┃➥ ${prefix}listonline
┃➥ ${prefix}caripesan query
┃➥ ${prefix}caripesan2 [query]
┃➥ ${prefix}searchmsg [query|total]
┃➥ ${prefix}sider [reply pesan bot]
┃➥ ${prefix}del [reply pesan bot]
┃➥ ${prefix}q [reply pesan]
┃➥ ${prefix}afk [reason]
┃➥ ${prefix}getsider [reply pesan bot]
┃➥ ${prefix}promoteall
┃➥ ${prefix}ppcouple
┃➥ ${prefix}setname [text]
┃➥ ${prefix}revoke
┃➥ ${prefix}setdesk [text]
┃➥ ${prefix}spam text|jumlah
┃➥ ${prefix}demoteall
┃➥ ${prefix}welcome [on / off]
┃➥ ${prefix}antibug [on / off]
┃➥ ${prefix}nsfw [on / off]
┃➥ ${prefix}antilink [on / off]
┃➥ ${prefix}antidelete [on / off]
┃➥ ${prefix}anticall [on / off]
┃➥ ${prefix}autoketik [on / off]
┃➥ ${prefix}autobio [on / off]
┃➥ ${prefix}antihidetag [on / off]
┃➥ ${prefix}autovn [on / off]
┃➥ ${prefix}register [on / off]
┃➥ ${prefix}autorespon [on / off]
┃➥ ${prefix}admin
┃➥ ${prefix}listpc
┃➥ ${prefix}listgroup
┃➥ ${prefix}hentai
┃➥ ${prefix}jadian
┃➥ ${prefix}trapnime
┃➥ ${prefix}sewa add/del waktu
┃➥ ${prefix}listsewa
┃➥ ${prefix}ceksewa
┃➥ ${prefix}premium add 62xxx waktu
┃➥ ${prefix}cekpremium
┃➥ ${prefix}listprem
┃➥ ${prefix}belipremium
┃➥ ${prefix}sewabot
┃➥ ${prefix}verify
┃➥ ${prefix}limit
┃➥ ${prefix}profile
┃➥ ${prefix}buylimit
┃➥ ${prefix}buyglimit
┃➥ ${prefix}awoo
┃➥ ${prefix}megumin
┗━──────────────
`
}

const kerangmenu = (prefix) =>{
	return`┌❑ *KERANG MENU* ❑
│
┃➥ ${prefix} ${prefix}bisakah [query]
┃➥ ${prefix} ${prefix}apakah [query]
┃➥ ${prefix} ${prefix}kapankah [query]
┗━──────────────
`
}

const soundmenu = (prefix) =>{
	return`┌❑ *SOUND MENU* ❑
│
┃➥ ${prefix}sound1
┃➥ ${prefix}sound2
┃➥ ${prefix}sound3
┃➥ ${prefix}sound4
┃➥ ${prefix}sound5
┃➥ ${prefix}sound6
┃➥ ${prefix}sound7
┃➥ ${prefix}sound8
┃➥ ${prefix}sound9
┃➥ ${prefix}sound10
┃➥ ${prefix}sound11
┃➥ ${prefix}sound12
┃➥ ${prefix}sound13
┃➥ ${prefix}sound14
┃➥ ${prefix}sound15
┃➥ ${prefix}sound16
┃➥ ${prefix}sound17
┃➥ ${prefix}sound18 
┃➥ ${prefix}sound19
┃➥ ${prefix}sound20
┃➥ ${prefix}sound21
┃➥ ${prefix}sound22
┃➥ ${prefix}sound23
┃➥ ${prefix}sound24
┃➥ ${prefix}sound25
┃➥ ${prefix}sound26
┃➥ ${prefix}sound27
┃➥ ${prefix}sound28
┃➥ ${prefix}sound29
┃➥ ${prefix}sound30
┃➥ ${prefix}sound31
┃➥ ${prefix}sound32
┃➥ ${prefix}sound33
┃➥ ${prefix}sound34
┃➥ ${prefix}sound35
┃➥ ${prefix}sound36
┃➥ ${prefix}sound37
┃➥ ${prefix}sound38
┃➥ ${prefix}sound39
┃➥ ${prefix}sound40
┃➥ ${prefix}sound41
┃➥ ${prefix}sound42
┃➥ ${prefix}sound43
┃➥ ${prefix}sound44
┃➥ ${prefix}sound45
┃➥ ${prefix}sound46
┃➥ ${prefix}sound47
┃➥ ${prefix}sound48
┃➥ ${prefix}sound49
┃➥ ${prefix}sound50
┃➥ ${prefix}sound51
┃➥ ${prefix}sound52
┃➥ ${prefix}sound53
┃➥ ${prefix}sound54
┃➥ ${prefix}sound55
┃➥ ${prefix}sound56
┃➥ ${prefix}sound57
┃➥ ${prefix}sound58
┃➥ ${prefix}sound59
┃➥ ${prefix}sound60
┃➥ ${prefix}sound61
┃➥ ${prefix}sound62
┃➥ ${prefix}sound63
┃➥ ${prefix}sound64
┃➥ ${prefix}sound65
┃➥ ${prefix}sound66
┃➥ ${prefix}sound67
┃➥ ${prefix}sound68
┃➥ ${prefix}sound69
┃➥${prefix}sound70
┗━──────────────
`}

exports.kerangmenu = kerangmenu
exports.soundmenu = soundmenu
exports.helpmenu = help
exports.convertmenu = convert
exports.funmenu = fun
exports.downloadmenu = download
exports.makermenu = maker
exports.textpromenu = textpro
exports.photooxymenu = photooxy
exports.othermenu = other
exports.ownermenu = ownermenu
exports.storagemenu = storage
exports.tagmenu = tag
exports.telestiker = telestiker
exports.cecanmenu= cecanmenu
exports.set_stc_cmd =  setStcCmd
exports.upmenu = upmenu
exports.nsfwmenu = nsfw
exports.asupanmenu = asupan
exports.allmenu = allmenu
exports.menu = allmenu
exports.help = allmenu
exports.coganmenu = coganmenu
exports.image_effect = image_effect_menu
exports.quotesmenu = quotesmenu
exports.animemenu = animemenu
exports.shopmenu = shopmenu
exports.groupmenu = groupmenu
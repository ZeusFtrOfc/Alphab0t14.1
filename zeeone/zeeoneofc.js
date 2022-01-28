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
┃➥ !tts query
┃➥ !toimg [reply img]
┃➥ !tomp3 [reply vid]
┃➥ !tomp4 [reply stc]
┃➥ !togif [reply stc]
┃➥ !slow
┃➥ !tupai
┃➥ !fast
┃➥ !reverse
┃➥ !tourl [reply vid/img]
`
}
const download = (prefix) => {
	return`┌❑ *DOWNLOAD MENU* ❑
│
┃➥ !ytsearch [query]
┃➥ !ytshorts [url]
┃➥ !igstalk [username]
┃➥ !ghstalk [username]
┃➥ !play [query]
┃➥ !playmp4 [query]
┃➥ !video [query]
┃➥ !ytmp3 [link]
┃➥ !ytmp4 [link]
┃➥ !ig [link]
┃➥ !igphoto [link]
┃➥ !igvideo [link]
┃➥ !igtv [link]
┃➥ !igreels [link]
┃➥ !twitter [link]
┃➥ !tiktokwm [link]
┃➥ !tiktoknowm [link]
┃➥ !tiktokaudio [link]
┃➥ !facebook [link]
┃➥ !facebookhd [link]
┃➥ !facebooksd [link]
┃➥ !facebookaudio [link]
┃➥ !brainly [query]
┃➥ !image [query]
┃➥ !pinterest [query]
┃➥ !pinterest2 [query]
┃➥ !playstore [query]
┃➥ !gcwa [query]
┃➥ !lirik [query]
┃➥ !komiku [query]
┃➥ !otaku [query]
┃➥ !anime _random_
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
╰❒  APIKEY : *https://zeusxz-api.herokuapp.com*



❏───「 *A L L M E N U* 」───❏

     *✪[  Convert Menu ]✪ :*
┏━───────────────╮
┃➥ !tts  [query]
┃➥ !toimg  [reply stiker]
┃➥ !tomp3 [reply video]
┃➥ !tomp4 [reply stiker]
┃➥ !togif [reply stiker]
┃➥ !slow [reply vn]
┃➥ !tupai [reply vn]
┃➥ !fast [reply vn]
┃➥ !reverse [reply vn]
┃➥ !tourl [reply foto/vid]
┗━──────────────

    *✪[ Download Menu ]✪ :*
┏━───────────────╮
┃➥ !ytsearch [query]
┃➥ !ytshorts [url]
┃➥ !igstalk [username]
┃➥ !ghstalk [username]
┃➥ !play [query]
┃➥ !playmp4 [query]
┃➥ !video [query]
┃➥ !ytmp3 [link]
┃➥ !ytmp4 [link]
┃➥ !ig [link]
┃➥ !igphoto [link]
┃➥ !igvideo [link]
┃➥ !igtv [link]
┃➥ !igreels [link]
┃➥ !twitter [link]
┃➥ !tiktokwm [link]
┃➥ !tiktoknowm [link]
┃➥ !tiktokaudio [link]
┃➥ !facebook [link]
┃➥ !facebookhd [link]
┃➥ !facebooksd [link]
┃➥ !facebookaudio [link]
┃➥ !brainly [query]
┃➥ !image [query]
┃➥ !pinterest [query]
┃➥ !pinterest2 [query]
┃➥ !playstore [query]
┃➥ !gcwa [query]
┃➥ !lirik [query]
┃➥ !komiku [query]
┃➥ !anime _random_
┗━──────────────

       *✪[ Fun Menu ]✪ :*
┏━───────────────╮
┃➥ !start
┃➥ !leave
┃➥ !skip
┃➥ !jelajah
┃➥ !adventure
┃➥ !nambang
┃➥ !nebang
┃➥ !mancing
┃➥ !lebur
┃➥ !jualikan
┃➥ !jualcoal
┃➥ !jualstone
┃➥ !jualingot
┃➥ !jualkayu
┃➥ !slot
┃➥ !inventory
┃➥ !dompet
┃➥ !suit
┃➥ !judi
┃➥ !fitnah
┃➥ !absen
┃➥ !absensi
┃➥ !tebakgambar
┃➥ !caklontong
┃➥ !family100
┃➥ !tebakanime
┃➥ !tebakkalimat
┃➥ !susunkata
┃➥ !tekateki
┃➥ !siapaaku
┃➥ !tebaklirik
┃➥ !tebakkata
┃➥ !suit
┃➥ !fitnahpc text|balasan
┃➥ !kontak 62xxx|text
┃➥ !tictactoe @user
┃➥ !delttt
┃➥ !voting @user|reason|time
┃➥ !delvote
┃➥ !jadibot
┃➥ !stopjadibot
┃➥ !listbot
┗━──────────────

      *✪[ Textpro Menu ]✪ :*
┏━───────────────╮
┃➥ !halloween2 text|text2
┃➥ !horror text|text2
┃➥ !game8bit text|text2
┃➥ !layered text|text2
┃➥ !glitch2 text|text2
┃➥ !coolg text|text2
┃➥ !coolwg text|text2
┃➥ !realistic text|text2
┃➥ !space3d text|text2
┃➥ !gtiktok text|text2
┃➥ !stone text|text2
┃➥ !marvel text|text2
┃➥ !marvel2 text|text2
┃➥ !pornhub text|text2
┃➥ !avengers text|text2
┃➥ !metalr text|text2
┃➥ !metalg text|text2
┃➥ !metalg2 text|text2
┃➥ !halloween2 text|text2
┃➥ !lion text|text2
┃➥ !wolf_bw text|text2
┃➥ !wolf_g text|text2
┃➥ !ninja text|text2
┃➥ !3dsteel text|text2
┃➥ !horror2 text|text2
┃➥ !lava text|text2
┃➥ !bagel text|text2
┃➥ !blackpink text
┃➥ !rainbow2 text
┃➥ !water_pipe text
┃➥ !halloween text
┃➥ !sketch text
┃➥ !sircuit text
┃➥ !discovery text
┃➥ !metallic2 text
┃➥ !fiction text
┃➥ !demon text
┃➥ !transformer text
┃➥ !berry text
┃➥ !thunder text
┃➥ !magma text
┃➥ !3dstone text
┃➥ !neon text
┃➥ !glitch text
┃➥ !harry_potter text
┃➥ !embossed text
┃➥ !broken text
┃➥ !papercut text
┃➥ !gradient text
┃➥ !glossy text
┃➥ !watercolor text
┃➥ !multicolor text
┃➥ !neon_devil text
┃➥ !underwater text
┃➥ !bear text
┃➥ !wonderfulg text
┃➥ !christmas text
┃➥ !neon_light text
┃➥ !snow text
┃➥ !cloudsky text
┃➥ !luxury2 text
┃➥ !gradient2 text
┃➥ !summer text
┃➥ !writing text
┃➥ !engraved text
┃➥ !summery text
┃➥ !3dglue text
┃➥ !metaldark text
┃➥ !neonlight text
┃➥ !oscar text
┃➥ !minion text
┃➥ !holographic text
┃➥ !purple text
┃➥ !glossyb text
┃➥ !deluxe2 text
┃➥ !glossyc text
┃➥ !fabric text
┃➥ !neonc text
┃➥ !newyear text
┃➥ !newyear2 text
┃➥ !metals text
┃➥ !xmas text
┃➥ !blood text
┃➥ !darkg text
┃➥ !joker text
┃➥ !wicker text
┃➥ !natural text
┃➥ !firework text
┃➥ !skeleton text
┃➥ !balloon text
┃➥ !balloon2 text
┃➥ !balloon3 text
┃➥ !balloon4 text
┃➥ !balloon5 text
┃➥ !balloon6 text
┃➥ !balloon7 text
┃➥ !steel text
┃➥ !gloss text
┃➥ !denim text
┃➥ !decorate text
┃➥ !decorate2 text
┃➥ !peridot text
┃➥ !rock text
┃➥ !glass text
┃➥ !glass2 text
┃➥ !glass3 text
┃➥ !glass4 text
┃➥ !glass5 text
┃➥ !glass6 text
┃➥ !glass7 text
┃➥ !glass8 text
┃➥ !captain_as2 text
┃➥ !robot text
┃➥ !equalizer text
┃➥ !toxic text
┃➥ !sparkling text
┃➥ !sparkling2 text
┃➥ !sparkling3 text
┃➥ !sparkling4 text
┃➥ !sparkling5 text
┃➥ !sparkling6 text
┃➥ !sparkling7 text
┃➥ !decorative text
┃➥ !chocolate text
┃➥ !strawberry text
┃➥ !koifish text
┃➥ !bread text
┃➥ !matrix text
┃➥ !blood2 text
┃➥ !neonligth2 text
┃➥ !thunder2 text
┃➥ !3dbox text
┃➥ !neon2 text
┃➥ !roadw text
┃➥ !bokeh text
┃➥ !gneon text
┃➥ !advanced text
┃➥ !dropwater text
┃➥ !wall text
┃➥ !chrismast text
┃➥ !honey text
┃➥ !drug text
┃➥ !marble text
┃➥ !marble2 text
┃➥ !ice text
┃➥ !juice text
┃➥ !rusty text
┃➥ !abstra text
┃➥ !biscuit text
┃➥ !wood text
┃➥ !scifi text
┃➥ !metalr text
┃➥ !purpleg text
┃➥ !shiny text 
┃➥ !jewelry text
┃➥ !jewelry2 text
┃➥ !jewelry3 text
┃➥ !jewelry4 text
┃➥ !jewelry5 text
┃➥ !jewelry6 text
┃➥ !jewelry7 text
┃➥ !jewelry8 text
┃➥ !metalh text
┃➥ !golden text
┃➥ !glitter text
┃➥ !glitter2 text
┃➥ !glitter3 text
┃➥ !glitter4 text
┃➥ !glitter5 text
┃➥ !glitter6 text
┃➥ !glitter7 text
┃➥ !metale text
┃➥ !carbon text
┃➥ !candy text
┃➥ !metalb text
┃➥ !gemb text
┃➥ !3dchrome text
┃➥ !metalb2 text
┃➥ !metalg text
┃➥ !metalg text
┗━──────────────
 
    *✪[ Photooxy Menu ]✪ :*
┏━───────────────╮
┃➥ !captain_as text|text2
┃➥ !smoke text|text2
┃➥ !tiktok2 text|text2 
┃➥ !arcade text|text2
┃➥ !battlefield text|text2
┃➥ !pubg text|text2
┃➥ !shadow text
┃➥ !cname text
┃➥ !romantic text
┃➥ !burnpaper text
┃➥ !funnycup text
┃➥ !love text
┃➥ !undergrass text          
┃➥ !heart text
┃➥ !coffeecup text
┃➥ !wood text          
┃➥ !flower text         
┃➥ !wooden text 
┃➥ !3dsummer text
┃➥ !wolf_metal text
┃➥ !3dnature text
┃➥ !underwater text          
┃➥ !goldenrose text
┃➥ !vector text
┃➥ !typography text
┃➥ !typography2 text 
┃➥ !underfall text  
┃➥ !smokyneon text 
┃➥ !rainbow text 
┃➥ !graffiti text
┃➥ !camouflage text
┃➥ !3dglowing text          
┃➥ !vintage text
┃➥ !honey text 
┃➥ !whitecube text
┃➥ !avatar text 
┃➥ !glowrainbow text
┃➥ !nightsky text
┃➥ !fur text
┃➥ !flaming text          
┃➥ !crisp text
┃➥ !embroidery text
┃➥ !bcake text          
┃➥ !3dligth text
┃➥ !metallic text 
┃➥ !striking text
┃➥ !watermelon text         
┃➥ !butterfly text
┃➥ !harry text
┃➥ !glowneon text
┃➥ !coffecup2 text          
┃➥ !luxury text 
┃➥ !cemetery text
┃➥ !woodblock text
┃➥ !sweet text
┃➥ !simple text
┃➥ !bevel text
┃➥ !underflower text         
┃➥ !underflower2 text
┗━──────────────

      *✪[ Maker Menu ]✪ :* 
┏━───────────────╮
┃➥ !sticker
┃➥ !smeme [text]
┃➥ !memegen [atas|bawah]
┃➥ !ktpmaker
┃➥ !attp [text]
┃➥ !ttp [text]
┃➥ !ttp1 [text]
┃➥ !ttp2 [text]
┃➥ !ttp3 [text]
┃➥ !ttp4 [text]
┃➥ !swm author|packname
┃➥ !take author|packname
┃➥ !fdeface
┃➥ !amongus [text]
┃➥ !tweettrump [text]
┃➥ !cmm [text]
┃➥ !kanna [text]
┃➥ !nulis [text]
┃➥ !tahta [text]
┃➥ !ytgold [text]
┃➥ !ytsilver [text]
┃➥ !emoji 👼
┗━──────────────
 
     *✪[ Image Effect ]✪ :*
┏━───────────────╮
┃➥ !trigger
┃➥ !gay
┃➥ !glass
┃➥ !passed
┃➥ !jail
┃➥ !comrade
┃➥ !green
┃➥ !blue
┃➥ !greyscale
┃➥ !invert
┃➥ !invertgreyscale
┃➥ !red
┃➥ !blurple
┃➥ !blurple2
┃➥ !wasted
┃➥ !sepia
┃➥ !wanted
┃➥ !utatoo
┃➥ !unsharpen
┃➥ !thanos
┃➥ !sniper
┃➥ !sharpen
┃➥ !scary
┃➥ !rip
┃➥ !rejected
┃➥ !redple
┃➥ !posterize
┃➥ !ps4
┃➥ !pixelize
┃➥ !missionpassed
┃➥ !moustache
┃➥ !lookwhatkarenhave
┃➥ !instagram
┃➥ !glitch
┃➥ !frame
┃➥ !fire
┃➥ !distort
┃➥ !dictator
┃➥ !deepfry
┃➥ !ddungeon
┃➥ !circle
┃➥ !challenger
┃➥ !burn
┃➥ !brazzers
┃➥ !beautiful
┗━──────────────

     *✪[ Group Menu ]✪ :*
┏━───────────────╮
┃➥ !add 62***
┃➥ !kick _@user_
┃➥ !radd _reply pesan @user_
┃➥ !rkick _reply pesan @user_
┃➥ !ping
┃➥ !welcome [on / off]
┃➥ !nsfw [on / off]
┃➥ !antilink [on / off]
┃➥ !autoread <query> [on / off]
┃➥ !antibug [on / off]
┃➥ !antidelete [on / off]
┃➥ !anticall [on / off]
┃➥ !autoketik [on / off]
┃➥ !autovn [on / off]
┃➥ !antihidetag [on / off]
┃➥ !autobio [on / off]
┃➥ !register [on / off]
┃➥ !autorespon [on / off]
┃➥ !get [link]
┃➥ !getpp _@user_
┃➥ !getname _reply_
┃➥ !size _reply media_
┃➥ !colongsw _reply sw_
┃➥ !getbio _@user_
┃➥ !tagall
┃➥ !listonline
┃➥ !caripesan query
┃➥ !caripesan2 [query]
┃➥ !searchmsg [query|total]
┃➥ !sider [reply pesan bot]
┃➥ !del [reply pesan bot]
┃➥ !q [reply pesan]
┃➥ !afk [reason]
┃➥ !getsider [reply pesan bot]
┃➥ !promoteall
┃➥ !ppcouple
┃➥ !setname
┃➥ !revoke
┃➥ !setdesk
┃➥ !spam text|jumlah
┃➥ !demoteall
┃➥ !admin
┃➥ !listpc
┃➥ !listgroup
┃➥ !hentai
┃➥ !jadian
┃➥ !trapnime
┃➥ !sewa add/del waktu
┃➥ !listsewa
┃➥ !ceksewa
┃➥ !premium add 62xxx waktu
┃➥ !cekpremium
┃➥ !listprem
┃➥ !belipremium
┃➥ !sewabot
┃➥ !verify
┃➥ !limit
┃➥ !profile
┃➥ !buylimit
┃➥ !buyglimit
┃➥ !awoo
┃➥ !megumin
┗━──────────────

   *✪[ Random Sound ]✪ :*
┏━───────────────╮
┃➥ !sound1
┃➥ !sound2
┃➥ !sound3
┃➥ !sound4
┃➥ !sound5
┃➥ !sound6
┃➥ !sound7
┃➥ !sound8
┃➥ !sound9
┃➥ !sound10
┃➥ !sound11
┃➥ !sound12
┃➥ !sound13
┃➥ !sound14
┃➥ !sound15
┃➥ !sound16
┃➥ !sound17
┃➥ !sound18 
┃➥ !sound19
┃➥ !sound20
┃➥ !sound21
┃➥ !sound22
┃➥ !sound23
┃➥ !sound24
┃➥ !sound25
┃➥ !sound26
┃➥ !sound27
┃➥ !sound28
┃➥ !sound29
┃➥ !sound30
┃➥ !sound31
┃➥ !sound32
┃➥ !sound33
┃➥ !sound34
┃➥ !sound35
┃➥ !sound36
┃➥ !sound37
┃➥ !sound38
┃➥ !sound39
┃➥ !sound40
┃➥ !sound41
┃➥ !sound42
┃➥ !sound43
┃➥ !sound44
┃➥ !sound45
┃➥ !sound46
┃➥ !sound47
┃➥ !sound48
┃➥ !sound49
┃➥ !sound50
┃➥ !sound51
┃➥ !sound52
┃➥ !sound53
┃➥ !sound54
┃➥ !sound55
┃➥ !sound56
┃➥ !sound57
┃➥ !sound58
┃➥ !sound59
┃➥ !sound60
┃➥ !sound61
┃➥ !sound62
┃➥ !sound63
┃➥ !sound64
┃➥ !sound65
┃➥ !sound66
┃➥ !sound67
┃➥ !sound68
┃➥ !sound69
┃➥ !sound70
┗━──────────────

     *✪[ Owner Menu ]✪ :*
┏━───────────────╮
┃➥ !setmenu location
┃➥ !setmenu document
┃➥ !setmenu list
┃➥ !setmenu troli
┃➥ !setmenu troli2
┃➥ !setmenu katalog
┃➥ !setmenu katalog2
┃➥ !off
┃➥ !on
┃➥ !buggc
┃➥ !bc
┃➥ !bcimage
┃➥ !bcgif
┃➥ !bcvideo
┃➥ !bcaudio
┃➥ !bcsticker
┃➥ !ban
┃➥ !unban
┃➥ !block
┃➥ !unblock
┃➥ !status
┃➥ !clearall
┃➥ !self
┃➥ !public
┃➥ !join
┃➥ !out
┃➥ !clearall
┃➥ !readall
┃➥ !unreadall
┃➥ !archive
┃➥ !unarchive
┃➥ !pin
┃➥ !delthischat
┃➥ !unpin
┃➥ !setthumb
┃➥ !settarget
┃➥ !setfakeimg
┃➥ !setreply
┃➥ !term _code_
┃➥ < _code_
┃➥ x or > _code_
┃➥ $  _termux code_
┃➥ =>  _eval async_
┗━──────────────

 *✪[ Storage  Menu ]✪ :*
┏━───────────────╮
┃➥ !addstik 
┃➥ !addimg 
┃➥ !addvid 
┃➥ !addvn   
┃➥ !liststick
┃➥ !listimg
┃➥ !listvid
┃➥ !listvn
┃➥ !addrespon
┃➥ !delrespon
┃➥ !listrespon

      *✪[ Tag  Menu ]✪ :*
┏━───────────────╮
┃➥ !hidetag
┃➥ !kontag
┃➥ !sticktag
┃➥ !totag
┃➥ !ganteng 
┃➥ !cantik 
┃➥ !jelek 
┃➥ !goblok  
┃➥ !bego 
┃➥ !pinter 
┃➥ !jago 
┃➥ !nolep 
┃➥ !monyet  
┃➥ !babi 
┃➥ !beban 
┃➥ !baik 
┃➥ !jahat 
┃➥ !anjing 
┃➥ !haram 
┃➥ !kontol 
┃➥ !pakboy 
┃➥ !pakgirl 
┃➥ !wibu 
┃➥ !hebat 
┃➥ !sadboy 
┃➥ !sadgirl  
┗━──────────────

        *✪[ Up Eswe ]✪ :*
┏━───────────────╮
┃➥ !upswteks
┃➥ !upswimage
┃➥ !upswvideo
┗━──────────────

      *✪[ Kerang Ajaib ]✪ :*
┏━───────────────╮
┃➥ !bisakah [query]
┃➥ !apakah [query]
┃➥ !kapankah [query]
┗━──────────────

       *✪[ Nsfw & Sfw ]✪ :*
┏━───────────────╮
┃➥ !hentaivid
┃➥ !ahegao
┃➥ !ass
┃➥ !bdsm
┃➥ !blowjob
┃➥ !blowjob2
┃➥ !cuckold
┃➥ !cum
┃➥ !ero
┃➥ !femdom
┃➥ !foot
┃➥ !gangbang
┃➥ !glasses
┃➥ !jahy
┃➥ !manga
┃➥ !masturbation
┃➥ !neko
┃➥ !orgy
┃➥ !panties
┃➥ !pussy
┃➥ !tentacles
┃➥ !thighs
┃➥ !yuri
┃➥ !feet
┃➥ !lewdkemo
┃➥ !woof
┃➥ !gasm
┃➥ !solo
┃➥ !8ball
┃➥ !goose
┃➥ !avatar
┃➥ !hololewd
┃➥ !gecg
┃➥ !holo
┃➥ !fox_girl
┃➥ !tits
┃➥ !eroyuri
┃➥ !holoyero
┃➥ !lizard
┃➥ !keta
┃➥ !eron
┃➥ !erok
┃➥ !kemonomimi
┃➥ !cum_jpg
┃➥ !nsfw_avatar
┃➥ !erofeet
┃➥ !meow
┃➥ !wallpaper
┃➥ !waifu
┃➥ !trap
┃➥ !lewd
┃➥ !pussy_jpg
┃➥ !futanari
┃➥ !lewdk
┃➥ !solog
┃➥ !smug
┃➥ !cum
┃➥ !slap
┃➥ !les
┃➥ !erokemo
┃➥ !bj
┃➥ !pwankg
┃➥ !pat
┃➥ !poke
┃➥ !feed
┃➥ !nsfw_neko_gif
┃➥ !pussy
┃➥ !feetg
┃➥ !baka
┃➥ !hug
┃➥ !kiss
┃➥ !tickle
┃➥ !spank
┃➥ !kuni
┃➥ !classic
┃➥ !boobs
┃➥ !anal
┃➥ !ngif
┃➥ !cuddle
┃➥ !zettai
┗━──────────────
 
   *✪[ Telegram Stiker ]✪ :*
┏━───────────────╮
┃➥ !awoawo
┃➥ !benedict
┃➥ !chat
┃➥ !dbfly
┃➥ !dino_kuning
┃➥ !doge
┃➥ !gojosatoru
┃➥ !hope_boy
┃➥ !jisoo
┃➥ !kr_robot
┃➥ !kucing
┃➥ !lonte
┃➥ !manusia_lidi
┃➥ !menjamet
┃➥ !meow
┃➥ !nicholas
┃➥ !patrick
┃➥ !popoci
┃➥ !sponsbob
┃➥ !kawan_sponsbob
┃➥ !tyni
┗━──────────────

     *✪[ Cecan  Menu ]✪ :*
┏━───────────────╮
┃➥ !china
┃➥ !indonesia
┃➥ !malaysia
┃➥ !thailand
┃➥ !korea
┃➥ !japan
┃➥ !vietnam
┃➥ !jenni
┃➥ !jiso
┃➥ !lisa
┃➥ !rose
┗━──────────────

    *✪[ Quotes  Menu ]✪ :*
┏━───────────────╮ 
┃➥ !katailham  
┃➥ !dare   
┃➥ !truth  
┃➥ !katabijak_lucu   
┃➥ !katacaklontong  
┃➥ !katadilan  
┗━──────────────

   *✪[ Cogan  Menu ]✪ :*
┏━───────────────╮
┃➥ !baekhyung  
┃➥ !dohkyungsoo  
┃➥ !huangzitao  
┃➥ !jhope  
┃➥ !jimin 
┃➥ !jungkook 
┃➥ !kimjondae  
┃➥ !kimjong  
┃➥ !kimjunmyeon  
┃➥ !kimminseok 
┃➥ !kimnanjoon  
┃➥ !kimseok  
┃➥ !kimtaehyung  
┃➥ !luhan  
┃➥ !ohsehun 
┃➥ !parkchanyeol 
┃➥ !suga  
┃➥ !wuyifan
┗━──────────────

     *✪[ Asupan  Menu ]✪ :*
┏━───────────────╮
┃➥ !rikagusriani 
┃➥ !ukhty 
┃➥ !santuy 
┃➥ !geayubi   
┃➥ !bocil
┃➥ !asupan
┃➥ !chika 
┃➥ !delvira 
┃➥ !ayu   
┃➥ !bunga
┃➥ !aura
┃➥ !nisa 
┃➥ !ziva 
┃➥ !yana   
┃➥ !viona
┃➥ !syania
┃➥ !riri   
┃➥ !syifa
┃➥ !mama_gina
┃➥ !alcakenya 
┃➥ !mangayutri
┗━──────────────

    *✪[ Anime  Menu ]✪ :*
┏━───────────────╮
┃➥ !anna
┃➥ !asuna_yuki 
┃➥ !ayuzawa 
┃➥ !chitoge 
┃➥ !emilia
┃➥ !erza 
┃➥ !hinata 
┃➥ !inori 
┃➥ !kaga_kouko 
┃➥ !kaori_miyazono 
┃➥ !kotori_minami
┃➥ !mikasa 
┃➥ !mio_akiyama 
┃➥ !mizore_sirayuki 
┃➥ !nakiri_alice 
┃➥ !naruto 
┃➥ !riyas_gremori
┃➥ !sakura 
┃➥ !sasuke 
┃➥ !sento_isuzu 
┃➥ !shana 
┃➥ !shiina 
┃➥ !shinka
┃➥ !winry
┃➥ !yukino 
┃➥ !yuzuki 
┃➥ !akame
┃➥ !mikosiba
┃
┗━──「 *Z E U S X Z B O T* 」─❏
`
}

const fun = (prefix) => {
	return`┌❑  *FUN & GAME MENU* ❑
│
┃➥ !start
┃➥ !leave
┃➥ !skip
┃➥ !jelajah
┃➥ !adventure
┃➥ !nambang
┃➥ !nebang
┃➥ !mancing
┃➥ !lebur
┃➥ !jualikan
┃➥ !jualcoal
┃➥ !jualstone
┃➥ !jualingot
┃➥ !jualkayu
┃➥ !slot
┃➥ !inventory
┃➥ !dompet
┃➥ !suit
┃➥ !judi
┃➥ !fitnah
┃➥ !absen
┃➥ !absensi
┃➥ !tebakgambar
┃➥ !caklontong
┃➥ !family100
┃➥ !tebakanime
┃➥ !tebakkalimat
┃➥ !susunkata
┃➥ !tekateki
┃➥ !siapaaku
┃➥ !tebaklirik
┃➥ !tebakkata
┃➥ !fitnahpc text|balasan
┃➥ !kontak 62xxx|text
┃➥ !tictactoe @user
┃➥ !delttt
┃➥ !voting
┃➥ !delvote
┃➥ !jadibot
┃➥ !stopjadibot
┃➥ !listbot
┗━──────────────
`
}

const maker = (prefix) => {
	return`┌❑  *MAKER MENU* ❑
│
┃➥ !sticker
┃➥ !smeme [text]
┃➥ !memegen [atas|bawah]
┃➥ !ktpmaker
┃➥ !attp
┃➥ !ttp
┃➥ !ttp1
┃➥ !ttp2
┃➥ !ttp3
┃➥ !ttp4
┃➥ !swm author|packname
┃➥ !take author|packname
│❒ ${prefix}fdeface
│❒ ${prefix}amongus 
│❒ ${prefix}tweettrump text
│❒ ${prefix}cmm text
│❒ ${prefix}kanna text
│❒ ${prefix}nulis text
│❒ ${prefix}tahta text
│❒ ${prefix}ytgold text
│❒ ${prefix}ytsilver
┃➥ !emoji 👼
┗━──────────────
`
}

const textpro = (prefix) => {
	return`┌❑  *TEXTPRO MENU* ❑
│
┃➥ !halloween2 text|text2
┃➥ !horror text|text2
┃➥ !game8bit text|text2
┃➥ !layered text|text2
┃➥ !glitch2 text|text2
┃➥ !coolg text|text2
┃➥ !coolwg text|text2
┃➥ !realistic text|text2
┃➥ !space3d text|text2
┃➥ !gtiktok text|text2
┃➥ !stone text|text2
┃➥ !marvel text|text2
┃➥ !marvel2 text|text2
┃➥ !pornhub text|text2
┃➥ !avengers text|text2
┃➥ !metalr text|text2
┃➥ !metalg text|text2
┃➥ !metalg2 text|text2
┃➥ !halloween2 text|text2
┃➥ !lion text|text2
┃➥ !wolf_bw text|text2
┃➥ !wolf_g text|text2
┃➥ !ninja text|text2
┃➥ !3dsteel text|text2
┃➥ !horror2 text|text2
┃➥ !lava text|text2
┃➥ !bagel text|text2
┃➥ !blackpink text
┃➥ !rainbow2 text
┃➥ !water_pipe text
┃➥ !halloween text
┃➥ !sketch text
┃➥ !sircuit text
┃➥ !discovery text
┃➥ !metallic2 text
┃➥ !fiction text
┃➥ !demon text
┃➥ !transformer text
┃➥ !berry text
┃➥ !thunder text
┃➥ !magma text
┃➥ !3dstone text
┃➥ !neon text
┃➥ !glitch text
┃➥ !harry_potter text
┃➥ !embossed text
┃➥ !broken text
┃➥ !papercut text
┃➥ !gradient text
┃➥ !glossy text
┃➥ !watercolor text
┃➥ !multicolor text
┃➥ !neon_devil text
┃➥ !underwater text
┃➥ !bear text
┃➥ !wonderfulg text
┃➥ !christmas text
┃➥ !neon_light text
┃➥ !snow text
┃➥ !cloudsky text
┃➥ !luxury2 text
┃➥ !gradient2 text
┃➥ !summer text
┃➥ !writing text
┃➥ !engraved text
┃➥ !summery text
┃➥ !3dglue text
┃➥ !metaldark text
┃➥ !neonlight text
┃➥ !oscar text
┃➥ !minion text
┃➥ !holographic text
┃➥ !purple text
┃➥ !glossyb text
┃➥ !deluxe2 text
┃➥ !glossyc text
┃➥ !fabric text
┃➥ !neonc text
┃➥ !newyear text
┃➥ !newyear2 text
┃➥ !metals text
┃➥ !xmas text
┃➥ !blood text
┃➥ !darkg text
┃➥ !joker text
┃➥ !wicker text
┃➥ !natural text
┃➥ !firework text
┃➥ !skeleton text
┃➥ !balloon text
┃➥ !balloon2 text
┃➥ !balloon3 text
┃➥ !balloon4 text
┃➥ !balloon5 text
┃➥ !balloon6 text
┃➥ !balloon7 text
┃➥ !steel text
┃➥ !gloss text
┃➥ !denim text
┃➥ !decorate text
┃➥ !decorate2 text
┃➥ !peridot text
┃➥ !rock text
┃➥ !glass text
┃➥ !glass2 text
┃➥ !glass3 text
┃➥ !glass4 text
┃➥ !glass5 text
┃➥ !glass6 text
┃➥ !glass7 text
┃➥ !glass8 text
┃➥ !captain_as2 text
┃➥ !robot text
┃➥ !equalizer text
┃➥ !toxic text
┃➥ !sparkling text
┃➥ !sparkling2 text
┃➥ !sparkling3 text
┃➥ !sparkling4 text
┃➥ !sparkling5 text
┃➥ !sparkling6 text
┃➥ !sparkling7 text
┃➥ !decorative text
┃➥ !chocolate text
┃➥ !strawberry text
┃➥ !koifish text
┃➥ !bread text
┃➥ !matrix text
┃➥ !blood2 text
┃➥ !neonligth2 text
┃➥ !thunder2 text
┃➥ !3dbox text
┃➥ !neon2 text
┃➥ !roadw text
┃➥ !bokeh text
┃➥ !gneon text
┃➥ !advanced text
┃➥ !dropwater text
┃➥ !wall text
┃➥ !chrismast text
┃➥ !honey text
┃➥ !drug text
┃➥ !marble text
┃➥ !marble2 text
┃➥ !ice text
┃➥ !juice text
┃➥ !rusty text
┃➥ !abstra text
┃➥ !biscuit text
┃➥ !wood text
┃➥ !scifi text
┃➥ !metalr text
┃➥ !purpleg text
┃➥ !shiny text 
┃➥ !jewelry text
┃➥ !jewelry2 text
┃➥ !jewelry3 text
┃➥ !jewelry4 text
┃➥ !jewelry5 text
┃➥ !jewelry6 text
┃➥ !jewelry7 text
┃➥ !jewelry8 text
┃➥ !metalh text
┃➥ !golden text
┃➥ !glitter text
┃➥ !glitter2 text
┃➥ !glitter3 text
┃➥ !glitter4 text
┃➥ !glitter5 text
┃➥ !glitter6 text
┃➥ !glitter7 text
┃➥ !metale text
┃➥ !carbon text
┃➥ !candy text
┃➥ !metalb text
┃➥ !gemb text
┃➥ !3dchrome text
┃➥ !metalb2 text
┃➥ !metalg text
┃➥ !metalg text
┗━──────────────
`
}

const photooxy = (prefix) => {
	return`┌❑  *PHOTOOXY MENU* ❑
│
┃➥ !captain_as text|text2
┃➥ !smoke text|text2
┃➥ !tiktok2 text|text2 
┃➥ !arcade text|text2
┃➥ !battlefield text|text2
┃➥ !pubg text|text2
┃➥ !shadow text
┃➥ !cname text
┃➥ !romantic text
┃➥ !burnpaper text
┃➥ !funnycup text
┃➥ !love text
┃➥ !undergrass text          
┃➥ !heart text
┃➥ !coffeecup text
┃➥ !wood text          
┃➥ !flower text         
┃➥ !wooden text 
┃➥ !3dsummer text
┃➥ !wolf_metal text
┃➥ !3dnature text
┃➥ !underwater text          
┃➥ !goldenrose text
┃➥ !vector text
┃➥ !typography text
┃➥ !typography2 text 
┃➥ !underfall text  
┃➥ !smokyneon text 
┃➥ !rainbow text 
┃➥ !graffiti text
┃➥ !camouflage text
┃➥ !3dglowing text          
┃➥ !vintage text
┃➥ !honey text 
┃➥ !whitecube text
┃➥ !avatar text 
┃➥ !glowrainbow text
┃➥ !nightsky text
┃➥ !fur text
┃➥ !flaming text          
┃➥ !crisp text
┃➥ !embroidery text
┃➥ !bcake text          
┃➥ !3dligth text
┃➥ !metallic text 
┃➥ !striking text
┃➥ !watermelon text         
┃➥ !butterfly text
┃➥ !harry text
┃➥ !glowneon text
┃➥ !coffecup2 text          
┃➥ !luxury text 
┃➥ !cemetery text
┃➥ !woodblock text
┃➥ !sweet text
┃➥ !simple text
┃➥ !bevel text
┃➥ !underflower text         
┃➥ !underflower2 text
┗━──────────────
`
}

const other = (prefix) => {
	return`┌❑  *GROUP MENU* ❑
│
┃➥ !add 62xxx
┃➥ !kick 62xxx
┃➥ !ping
┃➥ !antilink [on / off]
┃➥ !get [link]
┃➥ !getpp _@user_
┃➥ !getbio _@user_
┃➥ !getname [reply msg user]
┃➥ !size _reply media_
┃➥ !colongsw _reply sw_
┃➥ !tagall
┃➥ !listonline
┃➥ !caripesan query
┃➥ !caripesan2 [query]
┃➥ !searchmsg [query|total]
┃➥ !sider [reply pesan bot]
┃➥ !del [reply pesan bot]
┃➥ !q [reply pesan]
┃➥ !afk [reason]
┃➥ !getsider [reply pesan bot]
┃➥ !tagall
┃➥ !revoke
┃➥ !setname
┃➥ !ppcouple
┃➥ !promoteall
┃➥ !demoteall
┃➥ !admin
┃➥ !hentai
┃➥ !jadian
┃➥ !trapnime
┃➥ !sewa add/del waktu
┃➥ !listsewa
┃➥ !ceksewa
┃➥ !premium add @user waktu
┃➥ !cekpremium
┃➥ !listprem
┃➥ !belipremium
┃➥ !sewabot
┃➥ !verify
┃➥ !limit
┃➥ !profile
┃➥ !buylimit
┃➥ !buyglimit
┃➥ !blowjob
┃➥ !awoo
┃➥ !megumin
┗━──────────────
`
}

const ownermenu = (prefix) => {
	return`┌❑  *OWNER MENU* ❑
│
┃➥ !setmenu location
┃➥ !setmenu document
┃➥ !setmenu list
┃➥ !setmenu troli
┃➥ !setmenu troli2
┃➥ !setmenu katalog
┃➥ !setmenu katalog2
┃➥ !off
┃➥ !on
┃➥ !buggc
┃➥ !bc
┃➥ !bcimage
┃➥ !bcgif
┃➥ !bcvideo
┃➥ !bcaudio
┃➥ !bcsticker
┃➥ !ban
┃➥ !unban
┃➥ !block
┃➥ !unblock
┃➥ !status
┃➥ !clearall
┃➥ !self
┃➥ !public
┃➥ !join 
┃➥ !out
┃➥ !readall
┃➥ !unreadall
┃➥ !archive
┃➥ !unarchive
┃➥ !pin
┃➥ !delthischat
┃➥ !unpin
┃➥ !autoread <query> [on / off]
┃➥ !setthumb
┃➥ !settarget
┃➥ !setfakeimg
┃➥ !setreply
┃➥ !term _code_
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
┃➥ !set_stc_menu
┃➥ !set_stc_ping
┃➥ !set_stc_gclose
┃➥ !set_stc_gopen
┃➥ !set_stc_itos
┃➥ !set_stc_toimg
┃➥ !set_stc_self
┃➥ !set_stc_public
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
┃➥ !addstik 
┃➥ !addimg 
┃➥ !addvid 
┃➥ !addvn   
┃➥ !liststick
┃➥ !listimg
┃➥ !listvid
┃➥ !listvn
┃➥ !addrespon
┃➥ !delrespon
┃➥ !listrespon
┗━──────────────
`
}
const cecanmenu = (prefix) => {
	return`┌❑  *GACHA CECAN* ❑
│
┃➥ !china
┃➥ !indonesia
┃➥ !malaysia
┃➥ !thailand
┃➥ !korea
┃➥ !japan
┃➥ !vietnam
┃➥ !jenni
┃➥ !jiso
┃➥ !lisa
┃➥ !rose
┗━──────────────
`
}

const tag = (prefix) => {
	return`┌❑  *TAG MENU* ❑
│
┃➥ !hidetag
┃➥ !kontag
┃➥ !sticktag
┃➥ !totag
┃➥ !ganteng 
┃➥ !cantik 
┃➥ !jelek 
┃➥ !goblok  
┃➥ !bego 
┃➥ !pinter 
┃➥ !jago 
┃➥ !nolep 
┃➥ !monyet  
┃➥ !babi 
┃➥ !beban 
┃➥ !baik 
┃➥ !jahat 
┃➥ !anjing 
┃➥ !haram 
┃➥ !kontol 
┃➥ !pakboy 
┃➥ !pakgirl 
┃➥ !wibu 
┃➥ !hebat 
┃➥ !sadboy 
┃➥ !sadgirl  
┗━──────────────
`
}

const upmenu = (prefix) => {
	return`┌❑  *UP ESWE* ❑
│
┃➥ !upswteks
┃➥ !upswimage
┃➥ !upswvideo
┗━──────────────
`
}
const nsfw = (prefix) => {
	return`┌❑  *NSFW & SFW* ❑
│
┃➥ !hentaivid
┃➥ !ahegao
┃➥ !ass
┃➥ !bdsm
┃➥ !blowjob
┃➥ !blowjob2
┃➥ !cuckold
┃➥ !cum
┃➥ !ero
┃➥ !femdom
┃➥ !foot
┃➥ !gangbang
┃➥ !glasses
┃➥ !jahy
┃➥ !manga
┃➥ !masturbation
┃➥ !neko
┃➥ !orgy
┃➥ !panties
┃➥ !pussy
┃➥ !tentacles
┃➥ !thighs
┃➥ !yuri
┃➥ !feet
┃➥ !lewdkemo
┃➥ !woof
┃➥ !gasm
┃➥ !solo
┃➥ !8ball
┃➥ !goose
┃➥ !avatar
┃➥ !hololewd
┃➥ !gecg
┃➥ !holo
┃➥ !fox_girl
┃➥ !tits
┃➥ !eroyuri
┃➥ !holoyero
┃➥ !lizard
┃➥ !keta
┃➥ !eron
┃➥ !erok
┃➥ !kemonomimi
┃➥ !cum_jpg
┃➥ !nsfw_avatar
┃➥ !erofeet
┃➥ !meow
┃➥ !wallpaper
┃➥ !waifu
┃➥ !trap
┃➥ !lewd
┃➥ !pussy_jpg
┃➥ !futanari
┃➥ !lewdk
┃➥ !solog
┃➥ !smug
┃➥ !cum
┃➥ !slap
┃➥ !les
┃➥ !erokemo
┃➥ !bj
┃➥ !pwankg
┃➥ !pat
┃➥ !poke
┃➥ !feed
┃➥ !nsfw_neko_gif
┃➥ !pussy
┃➥ !feetg
┃➥ !baka
┃➥ !hug
┃➥ !kiss
┃➥ !tickle
┃➥ !spank
┃➥ !kuni
┃➥ !classic
┃➥ !boobs
┃➥ !anal
┃➥ !ngif
┃➥ !cuddle
┃➥ !zettai
┗━──────────────
`
}
const asupan = (prefix) => {
	return`┌❑  *ASUPAN MENU* ❑
│
┃➥ !rikagusriani 
┃➥ !ukhty 
┃➥ !santuy 
┃➥ !geayubi   
┃➥ !bocil
┃➥ !asupan
┃➥ !chika 
┃➥ !delvira 
┃➥ !ayu   
┃➥ !bunga
┃➥ !aura
┃➥ !nisa 
┃➥ !ziva 
┃➥ !yana   
┃➥ !viona
┃➥ !syania
┃➥ !riri   
┃➥ !syifa
┃➥ !mama_gina
┃➥ !alcakenya 
┃➥ !mangayutri
┗━──────────────
`
}
const telestiker = (prefix) => {
	return`┌❑  *STICKERS MENU* ❑
│
┃➥ !awoawo
┃➥ !benedict
┃➥ !chat
┃➥ !dbfly
┃➥ !dino_kuning
┃➥ !doge
┃➥ !gojosatoru
┃➥ !hope_boy
┃➥ !jisoo
┃➥ !kr_robot
┃➥ !kucing
┃➥ !lonte
┃➥ !manusia_lidi
┃➥ !menjamet
┃➥ !meow
┃➥ !nicholas
┃➥ !patrick
┃➥ !popoci
┃➥ !sponsbob
┃➥ !kawan_sponsbob
┃➥ !tyni
┗━──────────────
`
}
const image_effect_menu = (prefix) => {
	return`┌❑  *IMAGE EFFECT* ❑
│
┃➥ !trigger
┃➥ !gay
┃➥ !glass
┃➥ !passed
┃➥ !jail
┃➥ !comrade
┃➥ !green
┃➥ !blue
┃➥ !greyscale
┃➥ !invert
┃➥ !invertgreyscale
┃➥ !red
┃➥ !blurple
┃➥ !blurple2
┃➥ !wasted
┃➥ !wanted
┃➥ !utatoo
┃➥ !unsharpen
┃➥ !thanos
┃➥ !sniper
┃➥ !sharpen
┃➥ !scary
┃➥ !rip
┃➥ !rejected
┃➥ !redple
┃➥ !posterize
┃➥ !ps4
┃➥ !pixelize
┃➥ !missionpassed
┃➥ !moustache
┃➥ !lookwhatkarenhave
┃➥ !instagram
┃➥ !glitch
┃➥ !frame
┃➥ !fire
┃➥ !distort
┃➥ !dictator
┃➥ !deepfry
┃➥ !ddungeon
┃➥ !circle
┃➥ !challenger
┃➥ !burn
┃➥ !brazzers
┃➥ !beautiful
┃➥ !sepia
┗━──────────────
`
}
const coganmenu = (prefix) => {
	return`┌❑ *GACHA COGAN* ❑
│
┃➥ !baekhyung  
┃➥ !dohkyungsoo  
┃➥ !huangzitao  
┃➥ !jhope  
┃➥ !jimin 
┃➥ !jungkook 
┃➥ !kimjondae  
┃➥ !kimjong  
┃➥ !kimjunmyeon  
┃➥ !kimminseok 
┃➥ !kimnanjoon  
┃➥ !kimseok  
┃➥ !kimtaehyung  
┃➥ !luhan  
┃➥ !ohsehun 
┃➥ !parkchanyeol 
┃➥ !suga  
┃➥ !wuyifan  
┗━──────────────
`
}

const quotesmenu = (prefix) => {
	return `┌❑ *QUOTES MENU* ❑
│
┃➥ !katailham  
┃➥ !dare   
┃➥ !truth  
┃➥ !katabijak_lucu   
┃➥ !katacaklontong  
┃➥ !katadilan  
┗━──────────────
`
}
const shopmenu = (prefix) => {
	return `┌❑ *SHOP MENU* ❑
│
┃➥ !shop  
┃➥ !price  
┃➥ !pubg   
┃➥ !ml   
┃➥ !ff   
┃➥ !aov   
┃➥ !cod  
┃➥ !sausage   
┃➥ !lol  
┃➥ !valo  
┗━──────────────
`
}
const animemenu = (prefix) => {
	return`┌❑ *ANIME MENU* ❑
│
┃➥ !anna
┃➥ !asuna_yuki 
┃➥ !ayuzawa 
┃➥ !chitoge 
┃➥ !emilia
┃➥ !erza 
┃➥ !hinata 
┃➥ !inori 
┃➥ !kaga_kouko 
┃➥ !kaori_miyazono 
┃➥ !kotori_minami
┃➥ !mikasa 
┃➥ !mio_akiyama 
┃➥ !mizore_sirayuki 
┃➥ !nakiri_alice 
┃➥ !naruto 
┃➥ !riyas_gremori
┃➥ !sakura 
┃➥ !sasuke 
┃➥ !sento_isuzu 
┃➥ !shana 
┃➥ !shiina 
┃➥ !shinka
┃➥ !winry
┃➥ !yukino 
┃➥ !yuzuki 
┃➥ !akame
┃➥ !mikosiba
┗━──────────────
`
}

const groupmenu = (prefix) => {
	return`┌❑ *GROUP MENU* ❑
│
┃➥ !add 62***
┃➥ !kick _@user_
┃➥ !radd _reply pesan @user_
┃➥ !rkick _reply pesan @user_
┃➥ !ping
┃➥ !nsfw [on / off]
┃➥ !antilink [on / off]
┃➥ !get [link]
┃➥ !getpp _@user_
┃➥ !getname [reply msg user]
┃➥ !size [reply media]
┃➥ !colongsw [reply sw]
┃➥ !getbio _@user_
┃➥ !tagall
┃➥ !listonline
┃➥ !caripesan query
┃➥ !caripesan2 [query]
┃➥ !searchmsg [query|total]
┃➥ !sider [reply pesan bot]
┃➥ !del [reply pesan bot]
┃➥ !q [reply pesan]
┃➥ !afk [reason]
┃➥ !getsider [reply pesan bot]
┃➥ !promoteall
┃➥ !ppcouple
┃➥ !setname [text]
┃➥ !revoke
┃➥ !setdesk [text]
┃➥ !spam text|jumlah
┃➥ !demoteall
┃➥ !welcome [on / off]
┃➥ !antibug [on / off]
┃➥ !nsfw [on / off]
┃➥ !antilink [on / off]
┃➥ !antidelete [on / off]
┃➥ !anticall [on / off]
┃➥ !autoketik [on / off]
┃➥ !autobio [on / off]
┃➥ !antihidetag [on / off]
┃➥ !autovn [on / off]
┃➥ !register [on / off]
┃➥ !autorespon [on / off]
┃➥ !admin
┃➥ !listpc
┃➥ !listgroup
┃➥ !hentai
┃➥ !jadian
┃➥ !trapnime
┃➥ !sewa add/del waktu
┃➥ !listsewa
┃➥ !ceksewa
┃➥ !premium add 62xxx waktu
┃➥ !cekpremium
┃➥ !listprem
┃➥ !belipremium
┃➥ !sewabot
┃➥ !verify
┃➥ !limit
┃➥ !profile
┃➥ !buylimit
┃➥ !buyglimit
┃➥ !awoo
┃➥ !megumin
┗━──────────────
`
}

const kerangmenu = (prefix) =>{
	return`┌❑ *KERANG MENU* ❑
│
┃➥ ! ${prefix}bisakah [query]
┃➥ ! ${prefix}apakah [query]
┃➥ ! ${prefix}kapankah [query]
┗━──────────────
`
}

const soundmenu = (prefix) =>{
	return`┌❑ *SOUND MENU* ❑
│
┃➥ !sound1
┃➥ !sound2
┃➥ !sound3
┃➥ !sound4
┃➥ !sound5
┃➥ !sound6
┃➥ !sound7
┃➥ !sound8
┃➥ !sound9
┃➥ !sound10
┃➥ !sound11
┃➥ !sound12
┃➥ !sound13
┃➥ !sound14
┃➥ !sound15
┃➥ !sound16
┃➥ !sound17
┃➥ !sound18 
┃➥ !sound19
┃➥ !sound20
┃➥ !sound21
┃➥ !sound22
┃➥ !sound23
┃➥ !sound24
┃➥ !sound25
┃➥ !sound26
┃➥ !sound27
┃➥ !sound28
┃➥ !sound29
┃➥ !sound30
┃➥ !sound31
┃➥ !sound32
┃➥ !sound33
┃➥ !sound34
┃➥ !sound35
┃➥ !sound36
┃➥ !sound37
┃➥ !sound38
┃➥ !sound39
┃➥ !sound40
┃➥ !sound41
┃➥ !sound42
┃➥ !sound43
┃➥ !sound44
┃➥ !sound45
┃➥ !sound46
┃➥ !sound47
┃➥ !sound48
┃➥ !sound49
┃➥ !sound50
┃➥ !sound51
┃➥ !sound52
┃➥ !sound53
┃➥ !sound54
┃➥ !sound55
┃➥ !sound56
┃➥ !sound57
┃➥ !sound58
┃➥ !sound59
┃➥ !sound60
┃➥ !sound61
┃➥ !sound62
┃➥ !sound63
┃➥ !sound64
┃➥ !sound65
┃➥ !sound66
┃➥ !sound67
┃➥ !sound68
┃➥ !sound69
┃➥ !sound70
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
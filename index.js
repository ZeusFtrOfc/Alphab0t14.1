const
	{
		WAConnection: _WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		WAMessageProto,
		ReconnectMode,
		ChatModification,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		relayWAMessage,
		mentionedJid,
		processTime
	} = require("@adiwajshing/baileys")
const qrcode = require("qrcode-terminal")
const moment = require("moment-timezone")
const speed = require('performance-now')
const crypto = require('crypto')
const request = require('request');
const { spawn, exec, execSync } = require("child_process")
const fs = require("fs")
const os = require('os')
const axios = require('axios').default
const cheerio = require("cheerio")
const Util = require('util')
const hx = require('hxz-api')
const ffmpeg = require('fluent-ffmpeg')
const { EmojiAPI } = require("emoji-api");
const ig = require('insta-fetcher')
const emoji = new EmojiAPI()
const fetch = require('node-fetch');
const simple = require('./lib/simple.js')
const _sewa = require("./lib/sewa");
const twitterGetUrl = require("twitter-url-direct")
const phoneNum = require('awesome-phonenumber')
const gis = require('g-i-s');
const got = require("got");
const imageToBase64 = require('image-to-base64');
const ID3Writer = require('browser-id3-writer');		
const brainly = require('brainly-scraper')
const yts = require( 'yt-search')
const ms = require('parse-ms')
const toMs = require('ms')
const util = require('util')
const { error } = require("qrcode-terminal")
const ytdl = require('ytdl-core');
const zee = require('api-alphabot')

const { getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { color, bgcolor } = require('./lib/color')
const {animek, fetchJson, getBase64, kyun, createExif } = require('./lib/fetcher')
const { yta, ytv, igdl, upload } = require('./lib/ytdl')
const { yta2, ytv2, ytv3, ytv4} = require('./lib/y2mate')
const { tiktokDown } = require("./lib/tiktok")
const { webp2mp4File} = require('./lib/webp2mp4')
const { mediafireDl} = require('./lib/mediafire.js')
const { msgFilter } = require('./lib/antispam')
const { virtex, vipi } = require('./lib/virtex.js')
const setTtt = require('./lib/tictactoe.js')
const off = require('./lib/afk.js')
let _off = JSON.parse(fs.readFileSync('./src/afk.json'))
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const ameClient = require("amethyste-api")
const ameApi = new ameClient("1f486b04b157f12adf0b1fe0bd83c92a28ce768683871d2a390e25614150d0c8fa404fd01b82a5ebf5b82cbfa22e365e611c8501225a93d5d1e87f9f420eb91b")
const { sleep, isAfk, cekafk, addafk } = require('./lib/offline')
const { addVote, delVote } = require('./lib/vote')
const { jadibot, stopjadibot, listjadibot } = require('./lib/jadibot')
const premium = require("./lib/premiun");
const { bytesToSize, TelegraPh, uploadImages } = require('./lib/uploadimage')
const { isLimit, limitAdd, getLimit, giveLimit, addBalance, kurangBalance, getBalance, isGame, gameAdd, givegame, cekGLimit } = require("./lib/about_user")
const { list_aov } = require('./shop/aov')
const { list_cod } = require('./shop/cod')
const { list_sausage } = require('./shop/sausage')
const { list_lol } = require('./shop/lol')
const { list_valo } = require('./shop/valo')
const { list_price } = require('./shop/price')
const { allpayment } = require('./shop/allpayment')
const { pc_sewa } = require('./shop/sewa')
const { gcbotwa } = require('./shop/grupbot')
const { donasibot } = require('./shop/donasi')
const { infobot } = require('./shop/infobot')
const { jadibut } = require('./shop/jadibot')

const balance = JSON.parse(fs.readFileSync('./database/balance.json'));
const glimit = JSON.parse(fs.readFileSync('./database/glimit.json'))
const limit = JSON.parse(fs.readFileSync('./database/limit.json'))
const register = JSON.parse(fs.readFileSync('./database/user/register.json'))
const  _premium = JSON.parse(fs.readFileSync('./src/premiun.json'));
const afk = JSON.parse(fs.readFileSync('./lib/off.json'))
const setting = JSON.parse(fs.readFileSync('./settings.json'))
const antilink = JSON.parse(fs.readFileSync('./src/antilink.json'))
const antivirtex = JSON.parse(fs.readFileSync("./src/antivirtex.json"))
const welkom = JSON.parse(fs.readFileSync('./src/welkom.json'))
let filter = JSON.parse(fs.readFileSync('./src/filter.json'))
const setiker = JSON.parse(fs.readFileSync('./temp/stik.json'))
const audionye = JSON.parse(fs.readFileSync('./temp/vn.json'))
const imagenye = JSON.parse(fs.readFileSync('./temp/image.json'))
const videonye = JSON.parse(fs.readFileSync('./temp/video.json'))
const sfilter = JSON.parse(fs.readFileSync('./src/sfilter.json'))
const gcdetect = JSON.parse(fs.readFileSync('./src/gcdetect.json'))
const absen = JSON.parse(fs.readFileSync('./src/absen.json'))
const tictactoe = JSON.parse(fs.readFileSync("./src/tictactoe.json"))
const _win = JSON.parse(fs.readFileSync('./src/tttwin.json'))
const _lose = JSON.parse(fs.readFileSync('./src/tttlose.json'))
const voting = JSON.parse(fs.readFileSync('./lib/voting.json'))
const scommand = JSON.parse(fs.readFileSync('./lib/scommand.json'))
const banned = JSON.parse(fs.readFileSync('./src/banned.json'))
const _nsfw = JSON.parse(fs.readFileSync('./src/nsfw.json'))
const _leveling = JSON.parse(fs.readFileSync('./src/leveling.json'))
const _level = JSON.parse(fs.readFileSync('./src/level.json'))
const tebakgambar = JSON.parse(fs.readFileSync('./src/tebakgambar.json'))
const caklontong = JSON.parse(fs.readFileSync('./src/caklontong.json'))
const family = JSON.parse(fs.readFileSync('./src/family100.json'))
const siapakahaku = JSON.parse(fs.readFileSync('./src/siapakahaku.json'))
const tebakanime = JSON.parse(fs.readFileSync('./src/tebakanime.json'))
const tebakkalimat = JSON.parse(fs.readFileSync('./src/tebakkalimat.json'))
const tebakkata = JSON.parse(fs.readFileSync('./src/tebakkata.json'))
const tebaklirik = JSON.parse(fs.readFileSync('./src/tebaklirik.json'))
const tekateki = JSON.parse(fs.readFileSync('./src/tekateki.json'))
const susunkata = JSON.parse(fs.readFileSync('./src/susunkata.json'))

const  sewa = JSON.parse(fs.readFileSync('./src/sewa.json'));
const event = JSON.parse(fs.readFileSync('./src/event.json'))


//var creatorList = ['Creator WhatsApp Bot', 'Whatsapp Bot Indonesia', 'Creator Bot' , ' Bot WhatsApp']
var creator = setting.ownername
const  { ind, eng, es, ml, ru, pt } = require(`./language`)
lang = ind //language
const Exif = require('./lib/exif')
const exif = new Exif()
require('./config')

//set_sticker_command//
cmd_stc_menu = '7446'
cmd_stc_ping = '7292'
cmd_stc_play_music = '8046'
cmd_stc_group_close = '7850'
cmd_stc_group_open = '7878'
cmd_stc_image_to_sticker = '7688'
cmd_stc_to_image = '6964'
cmd_stc_self = '7038'
cmd_stc_public = '7144'
//set_sticker_command//
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    /*
SEBAGIAN LU EDIT DI SETTING.JSON
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
zeksApikey = 'Alphabott' //ganti pake apikey lu biar limitnya gk cepet abis 
ApiZeks = 'https://api.zeks.me' // regis disini klo mau dapat apikeynya
thumbnail = setting.thumb
pp_bot = fs.readFileSync(`image/${thumbnail}`)
pp_bot2 = fs.readFileSync(`image/${setting.thumbnail}`)
fthumb = setting.fakethumb
hit_today = []
blocked = []
ban = []
limitawal = "15"
gcounttprem = "50" 
gcounttuser = "25" 

let multi = true
let nopref = false
let single = false
let prefa = setting.prefix
let menusimple = false
let Mloc = false
let autobio = setting.autobio
let antihidetag = setting.antihidetag

banChats = setting.self_mode
autorespon = true
offline = false
readGc = true 
readPc = false 
antitrol = true
bugc = true
autovn = true
autoketik = false
autoregister = setting.user_register
typemenu = 'document'
img = setting.img
baper = setting.ownername
apiku = 'https://zeusxz-api.herokuapp.com/'
gc_wa_lu = 'https://chat.whatsapp.com/EQWM0ZQZPJRHuNe8yuqRlS' //klo gk punya gc wa gk usah di ganti 👍
targetpc = setting.ownerNumberr
owner = targetpc
fake = setting.fake
numbernye = '0'
waktu = 'Nothing'
alasan = 'Nothing'
botname = setting.botname
ownername = setting.ownername
peknem = setting.ownername
ownerNumber = setting.ownerNumber
cr = setting.cr
petik = '```'
titik =`...`
enter ='\n'
msgId="B826873620DD5947E683E3ABE663F263"
tttawal= ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
const X = "❌" 
const O = "⭕️" 
const tunjuk = "👈" 
winawal = 1 
loseawal = 1 
memberwin = 1 
memberlose = 1 

//Credit For 404 SQUAD ( Gk usah di hapus mek)
//Lingz
//Felix
//Lenz
//Arya
const uang = JSON.parse(fs.readFileSync('./database/user/uang.json'))
const ikan = JSON.parse(fs.readFileSync('./database/user/ikan.json'))
const planet = JSON.parse(fs.readFileSync('./database/user/planet.json'))
const coal = JSON.parse(fs.readFileSync('./database/user/coal.json'))
const stone = JSON.parse(fs.readFileSync('./database/user/stone.json'))
const ore = JSON.parse(fs.readFileSync('./database/user/ore.json'))
const ingot = JSON.parse(fs.readFileSync('./database/user/ingot.json'))
const kayu = JSON.parse(fs.readFileSync('./database/user/kayu.json'))

//=================================================//
module.exports = alpha = async (alpha, mek) => {
	try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
        if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		global.blocked
		m = simple.smsg(alpha, mek)
		let { mentioned } = m
		bail = m.isBaileys
        mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
        const type = Object.keys(mek.message)[0]
               const addCmd = (id, command) => {
    const obj = { id: id, chats: command }
    scommand.push(obj)
    fs.writeFileSync('./lib/scommand.json', JSON.stringify(scommand))
}

const getCommandPosition = (id) => {
    let position = null
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}

const getCmd = (id) => {
    let position = null
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return scommand[position].chats
    }
}


const checkSCommand = (id) => {
    let status = false
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            status = true
        }
    })
    return status
}
        const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(mek.message.stickerMessage.fileSha256.toString('hex')) !== null && getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) : "".slice(1).trim().split(/ +/).shift().toLowerCase()
        if(multi){
		var prefix = /^[°•π÷×¶∆£¢€¥®™✓=|~zZ+×_!#%^&./\\©^]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™✓=|~xzZ+×_!#,|`÷?;:%^&./\\©^]/gi) : '-'	  
		} else {
		if (nopref){
		prefix = ' '
		} else {
		if(single){
		prefix = prefa
		}
		}
		}
		
const reply2 = (teks) => {
            alpha.sendMessage(from, teks, text, {quoted: mek, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
        }
// Auto Read Group 
var chats = await alpha.chats.array.filter(v => v.jid.endsWith('g.us'))
chats.map( async ({ jid }) => {
if (readGc === false) return
await alpha.chatRead(jid)
})
// Auto Read Private 
var chatss = await alpha.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
chatss.map( async ({ jid }) => {
if (readPc === false) return
await alpha.chatRead(jid)
})
if ((Object.keys(mek.message)[0] === 'ephemeralMessage' && JSON.stringify(mek.message).includes('EPHEMERAL_SETTING')) && mek.message.ephemeralMessage.message.protocolMessage.type === 3) {
if (bugc === false) return
if (mek.key.fromMe) return
nums = mek.participant
longkapnye = "\n".repeat(420)
tekuss = `${longkapnye}\`\`\`B U G  G C  T E R D E T E K S I\`\`\`\n@⁨${nums.split('@')[0]} akan dikick\n\n_Clear chat by bot_\n*Jangan maen bug lah*`
alpha.groupRemove(mek.key.remoteJid, [nums]).catch((e) => { reply2(`Gua mau kick tapi gua bukan admin 🤙`) })
alpha.sendMessage(mek.key.remoteJid, 'WAH BUG NIH', MessageType.text)
alpha.sendMessage(mek.key.remoteJid, tekuss, MessageType.text, {contextInfo:{mentionedJid:[nums + "@s.whatsapp.net"]}})
}

if (m.message && m.isBaileys && m.quoted && m.quoted.mtype === 'orderMessage' && !(m.quoted.token && m.quoted.orderId)) {
if (antitrol === false) return
if (mek.key.fromMe) return
reply2('Fake Troli Detected \n\n' + require('util').format(m.key))
await alpha.modifyChat(m.chat, 'delete', {
includeStarred: false
})
}

if (autovn) {
	if (autovn === false) return
await alpha.updatePresence(from, Presence.recording)
} else if (autoketik) {
	if (autoketik === false) return
await alpha.updatePresence(from, Presence.composing)
}
        body = type === "conversation" && mek.message.conversation.startsWith(prefix) ? mek.message.conversation : type == "imageMessage" && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : type == "videoMessage" && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : type == "extendedTextMessage" && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : type == "buttonsResponseMessage" && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : type == "listResponseMessage" ? mek.message.listResponseMessage.singleSelectReply.selectedRowId: type == "stickerMessage" && getCmd(mek.message[type].fileSha256.toString("base64")) !== null && getCmd(mek.message[type].fileSha256.toString("base64")) !== undefined ? getCmd(mek.message[type].fileSha256.toString("base64")) : "";
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
		chatxs = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'documentMessage') && mek.message.documentMessage.caption ? mek.message.documentMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ""
		const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
		const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        hit_today.push(command)		
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const q = args.join(' ')
		const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const isMedias = /image|video|sticker|audio/.test(m.quoted ? m.quoted.mtype : m.mtype)      
		const runtime = process.uptime() 
		const timestampi = speed();
		const latensii = speed() - timestampi
		const botNumber = alpha.user.jid
		const botNumberss = alpha.user.jid + '@c.us'
		const isGroup = from.endsWith('@g.us')
		const sender = mek.key.fromMe ? alpha.user.jid : isGroup ? mek.participant : mek.key.remoteJid
		const senderNumber = sender.split("@")[0]
		const ownerNumberr = [`${targetpc}@s.whatsapp.net`]
		const ownerNumberrr = `${targetpc}@s.whatsapp.net`
		const isOwner = ownerNumberr.includes(sender)
		const getGroupAdminss = (participants) => {
	admins = []
	for (let i of participants) {
		i.isAdmin ? admins.push(i.jid) : ''
	}
	return admins
}
		const timi = moment.tz('Asia/Jakarta').add(30, 'days').calendar();
		const timu = moment.tz('Asia/Jakarta').add(20, 'days').calendar();
		const wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
		const wib = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
		const wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
		const salam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
		const totalchat = await alpha.chats.all()
		const totalgroup = await alpha.chats.array.filter(v => v.jid.endsWith('g.us'))
        const totalkontak = await alpha.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
		const groupMetadata = isGroup ? await alpha.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdminss(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
		const isAntiLink = isGroup ? antilink.includes(from) : false
		const isAntivirtex = isGroup ? antivirtex.includes(from) : false
		const isLevelingOn = isGroup ? _leveling.includes(from) : false
		const isNsfw = isGroup ? _nsfw.includes(from) : false
		const isEventon = isGroup ? event.includes(from) : false
		const isSewa = _sewa.checkSewaGroup(from, sewa)
		const alphaNumber = [`6282125563461@s.whatsapp.net`]
		const isCreator = alphaNumber.includes(sender)
		const isPremium = isOwner || isCreator || mek.key.fromMe ? true : premium.checkPremiumUser(sender, _premium)
		const gcount = isPremium ? gcounttprem : gcounttuser
		const isBanned = banned.includes(sender)
		if (isCmd && isBanned) return reply2(lang.benned())
		const isVote = isGroup ? voting.includes(from) : false
		const ratee = ["ZeusXz","ZeusXz","ZeusXz","ZeusXz","ZeusXz","ZeusXz","ZeusXz"]
        const tee = ratee[Math.floor(Math.random() * ratee.length)]
        const rateee = ["Dj storongest jedag jedug 30 s","Dj akimilaku remix terbaru 2021 30 s","Dj campuran 30 detik","Dj sidro 2  style Thailand viral 30 s","Dj disitu enak susu akimilaku 30 s","Dj zombie x melody stres love 30 s","Dj numa muma ye style Thailand 30 s","Dj biasalah x bola boma ye 30 s"]
        const srchh = rateee[Math.floor(Math.random() * rateee.length)]
        const tescuk = ["0@s.whatsapp.net"]
        const ini_mark = `0@s.whatsapp.net`
        const alfa = `${targetpc}@s.whatsapp.net`
		const alfa1 = `${targetpc}@s.whatsapp.net`
		const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = alpha.user.phone
		const status = `${banChats ? 'SELF-MODE' : 'PUBLIC-MODE'}`
		q3 = Object.keys(mek.message)[0] == "buttonsResponseMessage" ? mek.message.buttonsResponseMessage.selectedButtonId : ""
		q4 = Object.keys(mek.message)[0] == "buttonsResponseMessage" ? mek.message.buttonsResponseMessage.selectedButtonId : ""
		q5 = Object.keys(mek.message)[0] == "listResponseMessage" ? mek.message.listResponseMessage.singleSelectReply.selectedRowId: ""
		butresx = (type === 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedDisplayText : ''
        const conts = mek.key.fromMe ? alpha.user.jid : alpha.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? alpha.user.name : conts.notify || conts.vname || conts.name || '-'
        const isAfkOn = off.checkAfkUser(sender, _off)
        const mentionByTag = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.mentionedJid : []
        const mentionByReply = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.participant || "" : ""
        const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
        mention != undefined ? mention.push(mentionByReply) : []
        const mentionUser = mention != undefined ? mention.filter(n => n) : []
					const belipremgame = (sender, asu) => {
						var found = false;
						Object.keys(glimit).forEach((i) => {
							if(glimit[i].id == sender){
								found = i
								}
							})
						if (found !== false) {
							glimit[found].glimit += asu;
							fs.writeFileSync('./database/glimit.json',JSON.stringify(glimit))
							}
						}
const beliprem = (sender, asu) => {
    let found = false
	Object.keys(limit).forEach((i) => {
		if (limit[i].id === sender) {
			found = i
		}
	})
		if (found !== false) {
			limit[found].limit += asu
			fs.writeFileSync('./database/limit.json', JSON.stringify(limit))
		}
}

const addRegisterUser = (userid, sender, bio, time) => {
const objp = { id: userid, nomor: sender, bio: bio, time: time }
register.push(objp)
fs.writeFileSync('./database/user/register.json', JSON.stringify(register))
}
const cekUser = (sender) => {
let status = false
Object.keys(register).forEach((i) => {
if (register[i].id === sender) {
status = true
}
})
return status
}

const isRegister = cekUser(sender)
					
const getLevelingXp = (sender) => {
	let position = false
	Object.keys(_level).forEach((i) => {
		if (_level[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		return _level[position].xp
	}
}

const getLevelingLevel = (sender) => {
	let position = false
	Object.keys(_level).forEach((i) => {
		if (_level[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		return _level[position].level
	}
}

const getLevelingId = (sender) => {
	let position = false
	Object.keys(_level).forEach((i) => {
		if (_level[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		return _level[position].id
	}
}

const addLevelingXp = (sender, amount) => {
	let position = false
	Object.keys(_level).forEach((i) => {
		if (_level[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		_level[position].xp += amount
		fs.writeFileSync('./src/level.json', JSON.stringify(_level))
	}
}

const addLevelingLevel = (sender, amount) => {
	let position = false
	Object.keys(_level).forEach((i) => {
		if (_level[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		_level[position].level += amount
		fs.writeFileSync('./src/level.json', JSON.stringify(_level))
	}
}

					const addLevelingId = (sender) => {
						const obj = { id: sender, xp: 1, level: 1 }
						_level.push(obj)
						fs.writeFileSync('./src/level.json', JSON.stringify(_level))
						}
					const nebal = (angka) => {
						return Math.floor(angka)
						}
					function randomNomor(angka){
						return Math.floor(Math.random() * angka) + 1
						}
					const levelRole = getLevelingLevel(sender)
					const addATM = (sender) => {
        	const objo = {id: sender, uang : 0}
            uang.push(objo)
            fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
        }
        
        const addKoinUser = (sender, amount) => {
            let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang += amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
        
        const checkATMuser = (sender) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return uang[position].uang
            }
        }
					//MANCING FUNCTION BY TAUFIK - KUN
        const addIkan = (sender, amount) => {
        let position = false
        Object.keys(ikan).forEach((i) => {
    	    if (ikan[i].id === sender) {
    	    position = i
    	    }
    	})
    	if (position !== false) {
    	ikan[position].fish += amount
    	fs.writeFileSync('./database/user/ikan.json', JSON.stringify(ikan))
    	}
    }
    
    const getMancingIkan = (sender) => {
    let position = false 
    Object.keys(ikan).forEach((i) => {
	if (ikan[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return ikan[position].fish
	}
}

    const getMancingId = (sender) => {
    let position = false
    Object.keys(ikan).forEach((i) => {
	if (ikan[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return ikan[position].id
    }
}
    
    const addMancingId = (sender) => {
        const ovj = {id: sender, fish: 0}
        ikan.push(ovj)
        fs.writeFileSync('./database/user/ikan.json', JSON.stringify(ikan))
        }
    
    const jualIkan = (sender, amount) => {
        	let position = false
            Object.keys(ikan).forEach((i) => {
                if (ikan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                ikan[position].fish -= amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
    		//END OF MANCING FUNCTION

//PLANET GOO FUNCTION BY RIFAI
        const addPlanet = (sender, amount) => {
        let position = false
        Object.keys(planet).forEach((i) => {
    	    if (planet[i].id === sender) {
    	    position = i
    	    }
    	})
    	if (position !== false) {
    	planet[position].hape += amount
    	fs.writeFileSync('./database/user/planet.json', JSON.stringify(planet))
    	}
    }
    
    const getBertualangPlanet = (sender) => {
    let position = false 
    Object.keys(planet).forEach((i) => {
	if (planet[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return planet[position].hape
	}
}

    const getPlaneId = (sender) => {
    let position = false
    Object.keys(planet).forEach((i) => {
	if (planet[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return planet[position].id
    }
}
    
    const addPlaneId = (sender) => {
        const ovj = {id: sender, hape: 0}
        planet.push(ovj)
        fs.writeFileSync('./database/user/planet.json', JSON.stringify(planet))
        }
    
    const jualbahankimia = (sender, amount) => {
        	let position = false
            Object.keys(planet).forEach((i) => {
                if (planet[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                planet[position].hape -= amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
    		//AKHIRNYA SELESEI NI GO PLANET (◡ ω ◡)
    //by ARYA & FELIX
//mining coal
        const addCoal = (sender, amount) => {
        let position = false
        Object.keys(coal).forEach((i) => {
    	    if (coal[i].id === sender) {
    	    position = i
    	    }
    	})
    	if (position !== false) {
    	coal[position].arang += amount
    	fs.writeFileSync('./database/user/coal.json', JSON.stringify(coal))
    	}
    }
    
    const getMiningcoal = (sender) => {
    let position = false 
    Object.keys(coal).forEach((i) => {
	if (coal[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return coal[position].arang
	}
}

    const getMiningId = (sender) => {
    let position = false
    Object.keys(coal).forEach((i) => {
	if (coal[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return coal[position].id
    }
}
    
    const addMiningId = (sender) => {
        const ovj = {id: sender, arang: 0}
        coal.push(ovj)
        fs.writeFileSync('./database/user/coal.json', JSON.stringify(coal))
        }
    
    const jualcoal = (sender, amount) => {
        	let position = false
            Object.keys(coal).forEach((i) => {
                if (coal[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                coal[position].arang -= amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
    		//END OF mining
    
    //mining stone
        const addStone = (sender, amount) => {
        let position = false
        Object.keys(stone).forEach((i) => {
    	    if (stone[i].id === sender) {
    	    position = i
    	    }
    	})
    	if (position !== false) {
    	stone[position].batu += amount
    	fs.writeFileSync('./database/user/stone.json', JSON.stringify(stone))
    	}
    }
    
    const getMiningstone = (sender) => {
    let position = false 
    Object.keys(stone).forEach((i) => {
	if (stone[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return stone[position].batu
	}
}

    const getBatuId = (sender) => {
    let position = false
    Object.keys(stone).forEach((i) => {
	if (stone[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return stone[position].id
    }
}
    
    const addBatuId = (sender) => {
        const ovj = {id: sender, batu: 0}
        stone.push(ovj)
        fs.writeFileSync('./database/user/stone.json', JSON.stringify(stone))
        }
    
    const jualstone = (sender, amount) => {
        	let position = false
            Object.keys(stone).forEach((i) => {
                if (stone[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                stone[position].batu -= amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
    		//END OF mining
    
    //mining ore
        const addOre = (sender, amount) => {
        let position = false
        Object.keys(ore).forEach((i) => {
    	    if (ore[i].id === sender) {
    	    position = i
    	    }
    	})
    	if (position !== false) {
    	ore[position].copperore += amount
    	fs.writeFileSync('./database/user/ore.json', JSON.stringify(ore))
    	}
    }
    
    const getMiningore = (sender) => {
    let position = false 
    Object.keys(ore).forEach((i) => {
	if (ore[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return ore[position].copperore
	}
}

    const getOreId = (sender) => {
    let position = false
    Object.keys(ore).forEach((i) => {
	if (ore[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return ore[position].id
    }
}
    
    const addOreId = (sender) => {
        const ovj = {id: sender, copperore: 0}
        ore.push(ovj)
        fs.writeFileSync('./database/user/ore.json', JSON.stringify(ore))
        }
    
    const jualore = (sender, amount) => {
        	let position = false
            Object.keys(ore).forEach((i) => {
                if (ore[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                ore[position].copperore -= amount
                fs.writeFileSync('./database/user/ingot.json', JSON.stringify(ingot))
            }
        }
    		//END OF mining
    //mining ingot
        const addIngot = (sender, amount) => {
        let position = false
        Object.keys(ingot).forEach((i) => {
    	    if (ingot[i].id === sender) {
    	    position = i
    	    }
    	})
    	if (position !== false) {
    	ingot[position].copperingot += amount
    	fs.writeFileSync('./database/user/ingot.json', JSON.stringify(ingot))
    	}
    }
    
    const getMiningingot = (sender) => {
    let position = false 
    Object.keys(ingot).forEach((i) => {
	if (ingot[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return ingot[position].copperingot
	}
}

    const getIngotId = (sender) => {
    let position = false
    Object.keys(ingot).forEach((i) => {
	if (ingot[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return ingot[position].id
    }
}
    
    const addIngotId = (sender) => {
        const ovj = {id: sender, copperingot: 0}
        ingot.push(ovj)
        fs.writeFileSync('./database/user/ingot.json', JSON.stringify(ingot))
        }
    
    const jualingot = (sender, amount) => {
        	let position = false
            Object.keys(ingot).forEach((i) => {
                if (ingot[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                ingot[position].copperingot -= amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
    		//END OF mining
    
    //Nebang
        const addKayu = (sender, amount) => {
        let position = false
        Object.keys(kayu).forEach((i) => {
    	    if (kayu[i].id === sender) {
    	    position = i
    	    }
    	})
    	if (position !== false) {
    	kayu[position].wood += amount
    	fs.writeFileSync('./database/user/kayu.json', JSON.stringify(kayu))
    	}
    }
    
    const getNebangKayu = (sender) => {
    let position = false 
    Object.keys(kayu).forEach((i) => {
	if (kayu[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return kayu[position].wood
	}
}

    const getNebangId = (sender) => {
    let position = false
    Object.keys(kayu).forEach((i) => {
	if (kayu[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return kayu[position].id
    }
}
    
    const addNebangId = (sender) => {
        const ovj = {id: sender, wood: 0}
        kayu.push(ovj)
        fs.writeFileSync('./database/user/kayu.json', JSON.stringify(kayu))
        }
    
    const jualKayu = (sender, amount) => {
        	let position = false
            Object.keys(kayu).forEach((i) => {
                if (kayu[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                kayu[position].wood -= amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
const bayarLimit = (sender, amount) => {
        	let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit -= amount
                fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
            }
        }
        	
        const confirmATM = (sender, amount) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang -= amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
        //FUCNTION MANCING BY TAUFIK - KUN
        if (isGroup && isEventon) {
        const Fisha = getMancingIkan(sender)
        const FishId = getMancingId(sender)
        if (Fisha === undefined && FishId === undefined) addMancingId(sender)
        }
	//FUCNTION GOPLANET BY RIPAI
        if (isGroup && isEventon) {
        const Hapea = getBertualangPlanet(sender)
        const HapeId = getPlaneId(sender)
        if (Hapea === undefined && HapeId === undefined) addPlaneId(sender)
        }
	   //FUCNTION mining coal
        if (isGroup && isEventon) {
        const Coala = getMiningcoal(sender)
        const CoalId = getMiningId(sender)
        if (Coala === undefined && CoalId === undefined) addMiningId(sender)
        }
        //FUCNTION mining batu
        if (isGroup && isEventon) {
        const Stonea = getMiningstone(sender)
        const StoneId = getBatuId(sender)
        if (Stonea === undefined && StoneId === undefined) addBatuId(sender)
        }
        //FUCNTION mining ore
        if (isGroup && isEventon) {
        const Orea = getMiningore(sender)
        const OreId = getOreId(sender)
        if (Orea === undefined && OreId === undefined) addOreId(sender)
        }
        //FUCNTION lebur ingot
        if (isGroup && isEventon) {
        const Ingota = getMiningingot(sender)
        const IngotId = getIngotId(sender)
        if (Ingota === undefined && IngotId === undefined) addIngotId(sender)
        }
        //FUCNTION nebang kayu
        if (isGroup && isEventon) {
        const Kayua = getNebangKayu(sender)
        const KayuId = getNebangId(sender)
        if (Kayua === undefined && KayuId === undefined) addNebangId(sender)
        }
        if (isGroup ) {
            const checkATM = checkATMuser(sender)
            try {
                if (checkATM === undefined) addATM(sender)
                const uangsaku = Math.floor(Math.random() * 10) + 90
                addKoinUser(sender, uangsaku)
            } catch (err) {
                console.error(err)
            }
        }
        if (chats == 'Assalamualaikum'){
          alpha.reply(from, 'Waalaikumsalam wr wb.', id)
      }
      if (chats == 'assalamualaikum'){
          alpha.reply(from, 'Waalaikumsalam wr wb.', id)
      }
      if (chats == 'Terimakasih'){
          alpha.reply(from, 'Iya sama-sama..', id)
      }
      if (chats == 'terimakasih'){
          alpha.reply(from, 'Iya sama-sama..', id)
      }
      if (chats == 'Makasih'){
          alpha.reply(from, 'Iya sama-sama..', id)
      }
      if (chats == 'tq'){
          alpha.reply(from, 'Iya sama-sama..', id)
      }
      if (chats == 'tengkyu'){
          alpha.reply(from, 'Iya sama-sama..', id)
      }
      if (chats == 'Tengkyu'){
          alpha.reply(from, 'Iya sama-sama..', id)
      }
      if (chats == 'Tq'){
          alpha.reply(from, 'Iya sama-sama..', id)
      }
      if (chats == 'Terima kasih'){
          alpha.reply(from, 'Iya sama-sama..', id)
      }
      if (chats == 'terima kasih'){
          alpha.reply(from, 'Iya sama-sama..', id)
      }
      if (chats == 'Thx'){
          alpha.reply(from, 'Iya sama-sama..', id)
      }
      if (chats == 'thx'){
          alpha.reply(from, 'Iya sama-sama..', id)
      }
      if (chats == 'makasih'){
          alpha.reply(from, 'Iya sama-sama..', id)
      }
      if (chats == 'makasii'){
          alpha.reply(from, 'Iya sama-sama..', id)
      }
      if (chats == 'Makasii'){
          alpha.reply(from, 'Iya sama-sama..', id)
      }
      if (chats == 'makasi'){
          alpha.reply(from, 'Iya sama-sama..', id)
      }
      if (chats == 'Makasi'){
          alpha.reply(from, 'Iya sama-sama..', id)
      }
      if (chats == 'mks'){
          alpha.reply(from, 'Iya sama-sama..', id)
      }
      if (chats == 'Mks'){
          alpha.reply(from, 'Iya sama-sama..', id)
      }
      if (chats == 'mksi'){
          alpha.reply(from, 'Iya sama-sama..', id)
      }
      if (chats == '#18+'){
          alpha.reply(from, '*Demi kenyamanan bersama,*\n*Maaf menu ini telah di hapus!.*', id)
      }
      if (chats == '#18+2'){
          alpha.reply(from, '*Demi kenyamanan bersama,*\n*Maaf menu ini telah di hapus!.*', id)
      }
      if (chats == '#stikerbokep'){
          alpha.reply(from, '*Demi kenyamanan bersama,*\n*Maaf menu ini telah di hapus!.*', id)
      } 
      if (chats == '#stickerbokep'){
          alpha.reply(from, '*Demi kenyamanan bersama,*\n*Maaf menu ini telah di hapus!.*', id)
      }
      if (chats == '#bokep'){
          alpha.reply(from, '*Demi kenyamanan bersama,*\n*Maaf menu ini telah di hapus!.*', id)
      }
      if (chats == '#bokep2'){
          alpha.reply(from, '*Demi kenyamanan bersama,*\n*Maaf menu ini telah di hapus!.*', id)
      }
      if (chats == 'thanks'){
          alpha.reply(from, 'Iya sama-sama..', id)
      }
      if (chats == 'Thanks'){
          alpha.reply(from, 'Iya sama-sama..', id)
      }
      if (chats == 'P'){
          alpha.sendPtt(from, './media/nani-kore.mp3', id)
      }
      if (chats == 'p'){
          alpha.sendPtt(from, './media/nani-kore.mp3', id)
      }
      if (chats == 'Oi'){
          alpha.sendPtt(from, './media/nani-kore.mp3', id)
      }
      if (chats == 'oi'){
          alpha.sendPtt(from, './media/nani-kore.mp3', id)
      }
       if (chats == 'Woy'){
          alpha.sendPtt(from, './media/nani-kore.mp3', id)
      }
      if (chats == 'woy'){
          alpha.sendPtt(from, './media/nani-kore.mp3', id)
      }
      if (chats == 'Bot'){
          alpha.sendPtt(from, './media/hai.mp3', id)
      }
      if (chats == 'bot'){
          alpha.sendPtt(from, './media/hai.mp3', id)
      }
      if (chats == 'kontol'){
          alpha.sendPtt(from, './media/astg.mp3', id)
      }
      if (chats == 'Tai'){
          alpha.sendPtt(from, './media/astg.mp3', id)
      }
      if (chats == 'Memek'){
          alpha.sendPtt(from, './media/astg.mp3', id)
      }
      if (chats == 'memek'){
          alpha.sendPtt(from, './media/astg.mp3', id)
      }
      if (chats == 'Bajingan'){
          alpha.sendPtt(from, './media/astg.mp3', id)
      }
      if (chats == 'bajingan'){
          alpha.sendPtt(from, './media/astg.mp3', id)
      }
      if (chats == 'Anak Haram'){
          alpha.sendPtt(from, './media/astg.mp3', id)
      }
      if (chats == 'tai'){
          alpha.sendPtt(from, './media/astg.mp3', id)
      }
      if (chats == 'Pepek'){
          alpha.sendPtt(from, './media/astg.mp3', id)
      }
      if (chats == 'pepek'){
          alpha.sendPtt(from, './media/astg.mp3', id)
      }
      if (chats == 'Setan'){
          alpha.sendPtt(from, './media/astg.mp3', id)
      }
      if (chats == 'setan'){
          alpha.sendPtt(from, './media/astg.mp3', id)
      }
      if (chats == 'Kontol') {
          alpha.sendPtt(from, './media/astg.mp3', id)
      }
      if (chats == 'bacot') {
          alpha.sendPtt(from, './media/song.mp3', id)
      }
      if (chats == 'kntl') {
          alpha.sendPtt(from, './media/astg.mp3', id)
      }
      if (chats == 'ajg'){
          alpha.sendPtt(from, './media/astg.mp3', id)
      }
      if (chats == 'Ajg'){
          alpha.sendPtt(from, './media/astg.mp3', id)
      }
      if (chats == 'zeus'){
          alpha.sendPtt(from, './media/astg.mp3', id)
      }
      if (chats == 'Zeus'){
          alpha.sendPtt(from, './media/astg.mp3', id)
      }
      if (chats == 'tod'){
          alpha.sendPtt(from, './media/astg.mp3', id)
      }
      if (chats == 'Tod'){
          alpha.sendPtt(from, './media/astg.mp3', id)
      }
      if (chats == 'Ngentot'){
          alpha.sendPtt(from, './media/astg.mp3', id)
      }
      if (chats == 'Hai'){
          alpha.sendPtt(from, './media/hai.mp3', id)
      }
      if (chats == 'Tolol'){
          alpha.sendPtt(from, './media/astg.mp3', id)
      }
      if (chats == 'ngentod'){
          alpha.sendPtt(from, './media/astg.mp3', id)
      }
      if (chats == 'Ngentod'){
          alpha.sendPtt(from, './media.astg.mp3', id)
      }
      if (chats == 'Anjg'){
          alpha.sendPtt(from, './media/astg.mp3', id)
      }
      if (chats == 'anjg'){
          alpha.sendPtt(from, './media/astg.mp3', id)
      }
      if (chats == 'jancok'){
          alpha.sendPtt(from, './media/astg.mp3', id)
      }
      if (chats == 'coli'){
          alpha.sendPtt(from, './media/astg.mp3', id)
      }
      if (chats == 'Permisi'){
          alpha.sendPtt(from, './media/hai.mp3', id)
      }
      if (chats == 'permisi'){
          alpha.sendPtt(from, './media/hai.mp3', id)
      }
      if (chats == 'Coli'){
          alpha.sendPtt(from, './media/astg.mp3', id)
      }
      if (chats == 'kuntul'){
          alpha.sendPtt(from, './media/astg.mp3', id)
      }
      if (chats == 'Kuntul'){
          alpha.sendPtt(from, './media/astg.mp3', id)
      }
      if (chats == 'Burik'){
          alpha.sendPtt(from, './media/astg.mp3', id)
      }
      if (chats == 'burik'){
          alpha.sendPtt(from, './media/astg.mp3', id)
      }
      if (chats == 'Jancok'){
          alpha.sendPtt(from, './media/astg.mp3', id)
      }
      if (chats == 'ewe'){
          alpha.sendPtt(from, './media/astg.mp3', id)
      }
     if (chats == '#rhentai'){
          alpha.sendPtt(from, './media/astg.mp3', id)
      }
      if (chats == '#bjanime'){
          alpha.sendPtt(from, './media/astg.mp3', id)
      }
      if (chats == '#bjgif'){
          alpha.sendPtt(from, './media/astg.mp3', id)
      }
      if (chats == 'Ewe'){
          alpha.sendPtt(from, './media/astg.mp3', id)
      }
      if (chats == '#nsfwgif'){
          alpha.sendPtt(from, './media/astg.mp3', id)
      }
      if (chats == '#cumgif'){
          alpha.sendPtt(from, './media/astg.mp3', id)
      }
      if (chats == 'anjing'){
          alpha.sendPtt(from, './media/astg.mp3', id)
      }
      if (chats == 'Anjing'){
          alpha.sendPtt(from, './media/astg.mp3', id)
      }
      if (chats == 'Hi'){
          alpha.sendPtt(from, './media/hai.mp3', id)
      }
      if (chats == 'Hay'){
          alpha.sendPtt(from, './media/hai.mp3', id)
      }
      if (chats == 'hay'){
          alpha.sendPtt(from, './media/hai.mp3', id)
      }
      if (chats == 'hi'){
          alpha.sendPtt(from, './media/hai.mp3', id)
      }
      if (chats == 'Halo'){
          alpha.sendPtt(from, './media/hai.mp3', id)
      }
      if (chats == 'Tes'){
          alpha.sendPtt(from, './media/hai.mp3', id)
      }
      if (chats == 'tes'){
          alpha.sendPtt(from, './media/hai.mp3', id)
      }
      if (chats == 'halo'){
          alpha.sendPtt(from, './media/hai.mp3', id)
      }
      if (chats == 'Kak'){
          alpha.sendPtt(from, './media/hai.mp3', id)
      }
      if (chats == 'kak'){
          alpha.sendPtt(from, './media/hai.mp3', id)
      }
      if (chats == 'hi bot'){
          alpha.sendPtt(from, './media/hai.mp3', id)
      }
      if (chats == 'Halo bot'){
          alpha.sendPtt(from, './media/hai.mp3', id)
      }
      if (chats == 'Hallo bot'){
          alpha.sendPtt(from, './media/hai.mp3', id)
      }
      if (chats == 'misi'){
          alpha.sendPtt(from, './media/hai.mp3', id)
      }
      if (chats == 'Misi'){
          alpha.sendPtt(from, './media/hai.mp3', id)
      }
      if (chats == 'Hii'){
          alpha.sendPtt(from, './media/hai.mp3', id)
      }
      if (chats == 'hii'){
          alpha.sendPtt(from, './media/hai.mp3', id)
      }
      if (chats == 'hallo bot'){
          alpha.sendPtt(from, './media/hai.mp3', id)
      }
      if (chats == 'Hi bot'){
          alpha.sendPtt(from, './media/hai.mp3', id)
      }
      if (chats == 'punten'){
          alpha.sendPtt(from, './media/hai.mp3', id)
      }
      if (chats == 'Punten'){
          alpha.sendPtt(from, './media/hai.mp3', id)
      }
      if (chats == 'Zeus?'){
          alpha.sendPtt(from, './media/hai.mp3', id)
      }
      if (chats == 'gajelas'){
          alpha.sendPtt(from, './media/bakaa.mp3', id)
      }
      if (chats == 'Gajelas'){
          alpha.sendPtt(from, './media/bakaa.mp3', id)
      }
      if (chats == 'Bg'){
          alpha.sendPtt(from, './media/hai.mp3', id)
      }
      if (chats == 'bg'){
          alpha.sendPtt(from, './media/hai.mp3', id)
      }
      if (chats == 'woi'){
          alpha.sendPtt(from, './media/nani-kore.mp3', id)
      }
      if (chats == 'Woi'){
          alpha.sendPtt(from, './media/nani-kore.mp3', id)
      }
      if (chats == 'Asu'){
          alpha.sendPtt(from, './media/astg.mp3', id)
      }
      if (chats == 'asu'){
          alpha.sendPtt(from, './media/astg.mp3', id)
      }
      if (chats == 'Asw'){
          alpha.sendPtt(from, './media/astg.mp3', id)
      }
      if (chats == 'asw'){
          alpha.sendPtt(from, './media/astg.mp3', id)
      }
      if (chats == 'Gblk'){
          alpha.sendPtt(from, './media/bakaa.mp3', id)
      }
      if (chats == 'gblk'){
        alpha.sendPtt(from, './media/bakaa.mp3', id)
      }
      if (chats == 'Goblok'){
        alpha.sendPtt(from, './media/bakaa.mp3', id)
      }
      if (chats == 'goblok'){
        alpha.sendPtt(from, './media/bakaa.mp3', id)
      }
      if (chats == 'Gblg'){
        alpha.sendPtt(from, './media/bakaa.mp3', id)
      }
      if (chats == 'Bacot'){
        alpha.sendPtt(from, './media/bakaa.mp3', id)
      }
      if (chats == 'bego'){
        alpha.sendPtt(from, './media/bakaa.mp3', id)
      }
      if (chats == 'Bego'){
        alpha.sendPtt(from, './media/bakaa.mp3', id)
      }
      if (chats == 'pinter'){
        alpha.sendPtt(from, './media/bakaa.mp3', id)
      }
      if (chats == 'tolol'){
        alpha.sendPtt(from, './media/bakaa.mp3', id)
      }
      if (chats == 'bodo'){
        alpha.sendPtt(from, './media/bakaa.mp3', id)
      }
      if (chats == 'Bodo'){
        alpha.sendPtt(from, './media/bakaa.mp3', id)
      }
      if (chats == 'Hallo'){
        alpha.sendPtt(from, './media/bakaa.mp3', id)
      }
      if (chats == 'hallo'){
        alpha.sendPtt(from, './media/hai.mp3', id)
      }
       if (chats == 'pe'){
        alpha.sendPtt(from, './media/bakaa.mp3', id)
      }
      if (chats == 'Pe'){
        alpha.sendPtt(from, './media/bakaa.mp3', id)
      }
      if (chats == 'hy'){
        alpha.sendPtt(from, './media/hai.mp3', id)
      }
      if (chats == 'Hy'){
        alpha.sendPtt(from, './media/hai.mp3', id)
      }
      if (chats == 'Bang'){
        alpha.sendPtt(from, './media/hai.mp3', id)
      }
      if (chats == 'bang'){
        alpha.sendPtt(from, './media/hai.mp3', id)
      }
      if (chats == 'hai'){
        alpha.sendPtt(from, './media/hai.mp3', id)
      }
					var role = 'Bronze 1'
					if (levelRole <= 2) {
						role = 'Bronze 1'
						} else if (levelRole <= 10) {
							role = 'Bronze 2'
							} else if (levelRole <= 20) {
								role = 'Bronze 3'
								} else if (levelRole <= 30) {
									role = 'Bronze 4'
									} else if (levelRole <= 40) {
										role = 'Bronze 5'
										} else if (levelRole <= 70) {
											role = 'Silver 1'
											} else if (levelRole <= 85) {
												role = 'Silver 2'
												} else if (levelRole <= 95) {
													role = 'Silver 3'
													} else if (levelRole <= 105) {
														role = 'Silver 4'
														} else if (levelRole <= 125) {
															role = 'Silver 5'
															} else if (levelRole <= 150) {
																role = 'Gold 1'
																} else if (levelRole <= 170) {
																	role = 'Gold 2'
																	} else if (levelRole <= 190) {
																		role = 'Gold 3'
																		} else if (levelRole <= 210) {
																			role = 'Gold 4'
																			} else if (levelRole <= 230) {
																				role = 'Gold 5'
																				} else if (levelRole <= 260) {
																					role = 'Platinum 1'
																					} else if (levelRole <= 290) {
																						role = 'Platinum 2'
																						} else if (levelRole <= 320) {
																							role = 'Platinum 3'
																							} else if (levelRole <= 350) {
																								role = 'Platinum 4'
																								} else if (levelRole <= 380) {
																									role = 'Platinum 5'
																									} else if (levelRole <= 410) {
																										role = 'Diamond 1'
																										} else if (levelRole <= 450) {
																											role = 'Diamond 2'
																											} else if (levelRole <= 500) {
																												role = 'Diamond 3'
																												} else if (levelRole <= 550) {
																													role = 'Diamond 4'
																													} else if (levelRole <= 600) {
																														role = 'Diamond 5'
																														} else if (levelRole <= 700) {
																															role = 'Master'
																															} else if (levelRole <= 800) {
																															role = 'Master ✩'
																														} else if (levelRole <= 900) {
																													role = 'Master ✩✩'
																												} else if (levelRole <= 1000) {
																											role = 'Master ✩✩✩'
																										} else if (levelRole <= 1100) {
																									role = 'Master ✯'
																								} else if (levelRole <= 1225) {
																							role = 'Master ✯✯'
																						} else if (levelRole <= 1340) {
																					role = 'Master ✯✯✯'
																				} else if (levelRole <= 1400) {
																			role = 'GrandMaster'
																		} else if (levelRole <= 1555) {
																	role = 'GrandMaster ✩'
																} else if (levelRole <= 1660) {
															role = 'GrandMaster ✩✩'
														} else if (levelRole <= 1710) {
													role = 'GrandMaster ✩✩✩'
												} else if (levelRole <= 1825) {
											role = 'GrandMaster ✯'
										} else if (levelRole <= 1950) {
									role = 'GrandMaster ✯✯'
								} else if (levelRole <= 2000) {
							role = 'GrandMaster ✯✯✯'
						} else if (levelRole <= 2220) {
					role = 'Legends'
				} else if (levelRole <= 2500) {
					role = 'Legends 2'
					} else if (levelRole <= 2700) {
						role = 'Legends 3'
						} else if (levelRole <= 2900) {
							role = 'Legends 4'
							} else if (levelRole <= 3100) {
								role = 'Legends 5'
								} else if (levelRole <= 3300) {
									role = 'Legends 6'
									} else if (levelRole <= 3600) {
										role = 'Legends 7'
										} else if (levelRole <= 3900) {
											role = 'Legends 8'
											} else if (levelRole <= 4200) {
												role = 'Legends 9'
												} else if (levelRole <= 4450) {
													role = 'Legends 10'
													} else if (levelRole <= 4700) {
														role = 'Legends 忍'
														} else if (levelRole <= 4900) {
															role = 'Legends 忍¹'
															} else if (levelRole <= 5100) {
																role = 'Legends 忍²'
																} else if (levelRole <= 5600) {
																	role = 'Legends 忍³'
																	} else if (levelRole <= 6100) {
																		role = 'Legends 忍⁴'
																		} else if (levelRole <= 7000) {
																			role = 'GrandLegends'
																			} else if (levelRole <= 10000) {
																				role = 'GrandLegends 1'
																				} else if (levelRole <= 20000) {
																					role = 'GrandLegends 2'
																					} else if (levelRole <= 30000) {
																						role = 'GrandLegends 3'
																						} else if (levelRole <= 40000) {
																							role = 'GrandLegends 4'
																							} else if (levelRole <= 50000) {
																								role = 'GrandLegends 忍¹'
																								} else if (levelRole <= 60000) {
																									role = 'GrandLegends 忍²'
																									} else if (levelRole <= 70000) {
																										role = 'GrandLegends 忍³'
																										} else if (levelRole <= 80000) {
																											role = 'GrandLegends 忍⁴'
																											} else if (levelRole <= 90000) {
																												role = 'Pro 숒'
																												} else if (levelRole <= 99999999999999) {
																													role = 'Pro × GrandLegends 숒'
																												}
            const timuu = moment.tz('Asia/Jakarta').format('HH:mm:ss')
			const hariRaya = new Date('Jan 12, 2022 07:00:00')
			const sekarang = new Date().getTime();
			const Selisih = hariRaya - sekarang;
			const jhari = Math.floor( Selisih / (1000 * 60 * 60 * 24));
			const jjam = Math.floor( Selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
			const mmmenit = Math.floor( Selisih % (1000 * 60 * 60) / (1000 * 60));
			const ddetik = Math.floor( Selisih % (1000 * 60) / 1000);
			const ultah = `${jhari}Hari ${jjam}Jam ${mmmenit}Menit ${ddetik}Detik`
			var date = new Date();
        var tahun = date.getFullYear();
        var bulan1 = date.getMonth();
        var tanggal = date.getDate();
        var hari = date.getDay();
        var jam = date.getHours();
        var menit = date.getMinutes();
        var detik = date.getSeconds();
        var waktoo = date.getHours();
            switch(hari) {
                case 0: hari = "Sunday"; break;
                case 1: hari = "Monday"; break;
                case 2: hari = "Tuesday"; break;
                case 3: hari = "Wednesday"; break;
                case 4: hari = "Thursday"; break;
                case 5: hari = "Friday"; break;
                case 6: hari = "Saturday"; break;
            }
            switch(bulan1) {
                case 0: bulan1 = "January"; break;
                case 1: bulan1 = "February"; break;
                case 2: bulan1 = "March"; break;
                case 3: bulan1 = "April"; break;
                case 4: bulan1 = "May"; break;
                case 5: bulan1 = "June"; break;
                case 6: bulan1 = "July"; break;
                case 7: bulan1 = "August"; break;
                case 8: bulan1 = "September"; break;
                case 9: bulan1 = "October"; break;
                case 10: bulan1 = "November"; break;
                case 11: bulan1 = "December"; break;
            }
            var tampilTanggal = "" + hari + ", " + tanggal + " " + bulan1 + " " + tahun;
            var tampilWaktu = "" + "Time : " + wib;     
            
            myMonths = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
                myDays = ['Minggu','Senin','Selasa','Rabu','Kamis',"Jum'at",'Sabtu'];
                var tgl = new Date();
                detik = tgl.getSeconds();
                menit = tgl.getMinutes();
                jam = tgl.getHours();
	            var ampm = jam >= 12 ? 'PM' : 'AM';
	            var day = tgl.getDate()
	            bulan = tgl.getMonth()
	            var thisDay = tgl.getDay(),
	            thisDay = myDays[thisDay];
	            var yy = tgl.getYear()
	            var year = (yy < 1000) ? yy + 1900 : yy;
	            const ini_tanggal = `${day} - ${myMonths[bulan]} - ${year}`
            
            const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
        if(time2 < "23:59:00"){
        var ucapannya2 = `Night🌚 ${pushname}`
}
        if(time2 < "19:00:00"){
        var ucapannya2 = `Night 🌚 ${pushname}`
}
        if(time2 < "18:00:00"){
        var ucapannya2 = `Afternoon 🌅 ${pushname}`
}
        if(time2 < "15:00:00"){
        var ucapannya2 = `GoodDay 🌞 ${pushname}`
}
        if(time2 < "11:00:00"){
        var ucapannya2 = `おはようございます🌄 ${pushname}`
}
        if(time2 < "05:00:00"){
        var ucapannya2 = `Night 🌚 ${pushname}`
}
function clockString(ms) {
      let h = isNaN(ms) ? "--" : Math.floor(ms / 3600000);
      let m = isNaN(ms) ? "--" : Math.floor(ms / 60000) % 60;
      let s = isNaN(ms) ? "--" : Math.floor(ms / 1000) % 60;
      return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":");
    }
if (autobio){
if (autobio === false) return           
		    let settingstatus = 0;
    if (new Date() * 1 - settingstatus > 1000) {
      let _uptime = process.uptime() * 1000;
      let uptimer = clockString(_uptime);
      await alpha.setStatus(`I'm Userbot 👾 | Runtime ${uptimer} ⏲️ | ${status}`).catch((_) => _);
      settingstatus = new Date() * 1;
    }}
		mess = {
			wait: '```[ ! ] Proses kak...```',
			success: '```[ ✓ ]``` Success',
			wrongFormat: 'Format salah, coba liat lagi di menu',
			error: {
				stick: 'Itu bukan stiker',
				Iv: 'Linknya error:v'
			},
			only: {
				group: 'Only Group',
				admin: 'Only Group Admin',
			}
		}
		const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }

        const sendMess = (hehe, teks) => {
            alpha.sendMessage(hehe, teks, text)
        }
        

        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? alpha.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : alpha.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": memberr } })
        }
        const fakestatus = (teks) => {
            alpha.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync(`image/${thumbnail}`),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        const fakethumb = (teks, yes) => {
            alpha.sendMessage(from, teks, image, {thumbnail:fs.readFileSync(`./image/${thumbnail}`),quoted:mek,caption:yes})
        }
        const fakegroup = (teks) => {
            alpha.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync(`./image/${thumbnail}`),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        const ftoko = {
key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": fs.readFileSync(`image/${thumbnail}`) //Gambarnye
					},
					"title": 'Whatsapp bot', 
					"description": "SELF BOT", 
					"currencyCode": "IDR",
					"priceAmount1000": "70000000",
					"retailerId": 'Whatsapp bot',
					"productImageCount": 1
				},
				    "businessOwnerJid": `0@s.whatsapp.net`
		}
	}
}
const bugtrol = { 
	    key: {
	    fromMe: false, 
	    participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "62882248593508@s.whatsapp.net" } : {}) 
	    },
                        "message": {
                        "orderMessage": {
                        "orderId": "359531915900587",
						"itemCount": 1000000000000,
						"status": "INQUIRY",
						"surface": "CATALOG",
						"message": `${creator}`,
						"orderTitle": `${creator}`,
						"sellerJid": "6282125563461@s.whatsapp.net",
						"token": "AR5b5YFz2g4W5fYrjbeakPiI3/XxarATSeP+KLh+0FGwkw=="
					}}}
       const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net",   "remoteJid": "6289523258649-1604595598@g.us"  }, "message": {orderMessage: {itemCount: 2021,status: 200, thumbnail: fs.readFileSync(`image/${thumbnail}`), surface: 200, message: `Whatsapp Bot 〽️\nBy ${ownername}`, orderTitle: 'zeusxz', sellerJid: '0@s.whatsapp.net'}},contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
        const fdoc = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `${creator}`,jpegThumbnail: fs.readFileSync(`image/${thumbnail}`)}}}
        const fvn = {key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6282125563461@g.us" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":99999,"ptt": "true"}} } 
        const fgif = {key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6282125563461@g.us" } : {})},message: {"videoMessage": { "title":`${creator}`, "h": `Hmm`,'seconds': '99999', 'gifPlayback': 'true', 'caption': `Whatsapp Bot 〽️\nBy ${ownername}`, 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}
		const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": "P", "caption": `さ ${pushname} さ\nᴄᴍᴅ ᴇxᴇᴄ : ${command}`, 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}
		const fgclink2 = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": "P", "caption": `${fake}`, 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}
		const fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6282125563461@g.us" } : {}) },message: { "videoMessage": { "title":`${creator}`, "h": `Hmm`,'seconds': '99999', 'caption': `${creator}`, 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}
		const floc = {contextInfo: {"forwardingScore":999,"isForwarded":true,'stanzaId': msgId, 'participant':`${numbernye}@s.whatsapp.net`, 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"locationMessage": {"degreesLatitude": 41.893714904785156, "degreesLongitude": -87.63370513916016, "name": fake , 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}}
		const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `682125563461@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `${cr}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${cr},;;;\nFN:${cr},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`), thumbnail: fs.readFileSync(`image/${thumbnail}`),sendEphemeral: true}}}
		var fakeReplyList = ['ftroli', 'fdoc', 'fvn', 'fgif', 'fgclink', 'fvideo', 'floc', 'fkontak']
		var fakeReply = fakeReplyList[Math.floor(Math.random() * fakeReplyList.length)];
const fakeitem = (teks) => {
            alpha.sendMessage(from, teks, text, {
                quoted: {
        key:{
        	fromMe:false,
        participant:`0@s.whatsapp.net`, ...(from ? {
remoteJid :"6282125563461@g.us" }: {})
                    },message:{"orderMessage":{"orderId":"174238614569481","thumbnail":fs.readFileSync(`image/${thumbnail}`),"itemCount":10,"status":"INQUIRY","surface":"CATALOG","message":`${setting.botname}`,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}})}
           
       const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './sticker' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './sticker' + names + '.png'
                    let asw = './sticker' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        alpha.sendMessage(to, media, MessageType.sticker,{quoted:mek})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }
            const sendFileFromUrlF = async(link, type, options) => {
            	hasil = await getBuffer(link)
            alpha.sendMessage(from, hasil, type, options).catch(e => {
            	fetch(link).then((hasil) => {
            	alpha.sendMessage(from, hasil, type, options).catch(e => {
            	alpha.sendMessage(from, { url : link }, type, options).catch(e => {
            	fakegroup('Something Error')
            console.log(e)
            })
            })
            })
            })
           }
        const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    alpha.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            } 
       async function sendFileFromUrl(from, url, caption, mek, men) {
            let mime = '';
            let res = await axios.head(url)
            mime = res.headers['content-type']
            let type = mime.split("/")[0]+"Message"
            if(mime === "image/gif"){
                type = MessageType.video
                mime = Mimetype.gif
            }
            if(mime === "application/pdf"){
                type = MessageType.document
                mime = Mimetype.pdf
            }
            if(mime.split("/")[0] === "audio"){
                mime = Mimetype.mp4Audio
            }
            return alpha.sendMessage(from, await getBuffer(url), type, {caption: caption, quoted: mek, mimetype: mime, contextInfo: {"mentionedJid": men ? men : []}})
        }
        const textImg = (teks) => {
            return alpha.sendMessage(from, teks, text, {quoted: mek, thumbnail: fs.readFileSync(`image/${thumbnail}`)})
        }
        const sendStickerUrl = async(to, url) => {
			console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker...'))
				var names = getRandom('.webp')
				var namea = getRandom('.png')
				var download = function (uri, filename, callback) {
					request.head(uri, function (err, res, body) {
						request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
					});
				};
				download(url, namea, async function () {
					let filess = namea
					let asw = names
					require('./lib/exif.js')
					exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
					exec(`webpmux -set exif ./src/sticker/data.exif ${asw} -o ${asw}`, async (error) => {
					let media = fs.readFileSync(asw)
					alpha.sendMessage(to, media, sticker, mek)
					console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker...'))
					});
					});
				});
			}
			function jsonformat(string) {
  return JSON.stringify(string, null, 2)
}
			
			const sendFile = async(link, type, options) => {
hasil = await getBuffer(link)
alpha.sendMessage(from, hasil, type, options).catch(e => {
fetch(link).then((hasil) => {
alpha.sendMessage(from, hasil, type, options).catch(e => {
alpha.sendMessage(from, { url : link }, type, options).catch(e => {
reply2('Error!')
console.log(e)
})
})
})
})
}
			
if(isGroup && !isVote) {
if (budy.toLowerCase() === 'vote'){
let vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`))
let _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`))  
let fil = vote.map(v => v.participant)
let id_vote = sender ? sender : '6282125563461@s.whatsapp.net'
if(fil.includes(id_vote)) {
return mentions('@'+sender.split('@')[0]+' Anda sudah vote', fil, true)
} else {
vote.push({
participant: id_vote,
voting: '✅'
})
fs.writeFileSync(`./lib/vote/${from}.json`,JSON.stringify(vote))
let _p = []
let _vote = '*Vote* '+ '@'+ _votes[0].votes.split('@')[0] + `${enter}${enter}*Alasan*: ${_votes[0].reason}${enter}*Jumlah Vote* : ${vote.length} Vote${enter}*Durasi* : ${_votes[0].durasi} Menit${enter}` 
for(let i = 0; i < vote.length; i++) {
_vote +=  `@${vote[i].participant.split('@')[0]}${enter}*Vote* : ${vote[i].voting}${enter}${enter}`
_p.push(vote[i].participant)
}  
_p.push(_votes[0].votes)
mentions(_vote,_p,true)   
}
} else if (budy.toLowerCase() === 'devote'){
const vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`))
let _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`))  
let fil = vote.map(v => v.participant)
let id_vote = sender ? sender : '6282125563461@s.whatsapp.net'
if(fil.includes(id_vote)) {
return mentions('@'+sender.split('@')[0]+' You have voted', fil, true)
} else {
vote.push({
participant: id_vote,
voting: '❌'
})
fs.writeFileSync(`./lib/vote/${from}.json`,JSON.stringify(vote))
let _p = []
let _vote = '*Vote* '+ '@'+ _votes[0].votes.split('@')[0] + `${enter}${enter}*Alasan*: ${_votes[0].reason}${enter}*Jumlah Vote* : ${vote.length} Vote${enter}*Durasi* : ${_votes[0].durasi} Menit${enter}${enter}` 
for(let i = 0; i < vote.length; i++) {
_vote +=  `@${vote[i].participant.split('@')[0]}${enter}*Vote* : ${vote[i].voting}${enter}${enter}`
_p.push(vote[i].participant)
}  
_p.push(_votes[0].votes)
mentions(_vote,_p,true)   
}
}
}	

const getWin = async(board) => {
    var x = ["❌"]
    var o = ["⭕️"]

    // Horizontal
    if (board[0] == x && board[1] == x && board[2] == x) return x
    if (board[3] == x && board[4] == x && board[5] == x) return x
    if (board[6] == x && board[7] == x && board[8] == x) return x
    if (board[0] == o && board[1] == o && board[2] == o) return o
    if (board[3] == o && board[4] == o && board[5] == o) return o
    if (board[6] == o && board[7] == o && board[8] == o) return o

    // Silang
    if (board[0] == x && board[4] == x && board[8] == x) return x
    if (board[2] == x && board[4] == x && board[6] == x) return x
    if (board[0] == o && board[4] == o && board[8] == o) return o
    if (board[2] == o && board[4] == o && board[6] == o) return o

    // Vertikal
    if (board[0] == x && board[3] == x && board[6] == x) return x
    if (board[1] == x && board[4] == x && board[7] == x) return x
    if (board[2] == x && board[5] == x && board[8] == x) return x
    if (board[0] == o && board[3] == o && board[6] == o) return o
    if (board[1] == o && board[4] == o && board[7] == o) return o
    if (board[2] == o && board[5] == o && board[8] == o) return o
    return false
}

// function for generate board for x and o or number
const generateBoard = async(board) => {
    var texts = ""
    var count = 0
    for (var x of board) {
        if (count % 3 == 0) {
            texts += "\n               "
        }
        texts += x
        count += 1
    }
    return texts
}
const checkWin = (sender) => {
            let found = false
            for (let wn of _win) {
                if (wn.jid === sender) {
                    let winCounts = winawal - wn.win
                    if (winCounts <= 0) return alpha.sendMessage(from, `Anda belum pernah memainkan game tictactoe${enter}${enter}Jumlah kemenangan kamu didalam game *tictactoe* adalah: ${winCounts}`, text, { quoted: mek })
                    return `${winCounts}`
                    found = true
                }
            }
            if (found === false) {
                let obj = { jid: sender, win: 0 }
                _win.push(obj)
                fs.writeFileSync('./src/tttwin.json', JSON.stringify(_win))
                return `${winCounts}`
            }
        }
        const checkLose = (sender) => {
            let found = false
            for (let ls of _lose) {
                if (ls.jid === sender) {
                    let loseCounts = loseawal - ls.lose
                    if (loseCounts <= 0) return alpha.sendMessage(from, `Anda belum pernah memainkan game tictactoe${enter}${enter}Jumlah kemenangan kamu didalam game *tictactoe* adalah: ${winCounts}`, text, { quoted: mek })
                    return `${loseCounts}`
                    found = true
                }
            }
            if (found === false) {
                let obj = { jid: sender, lose: 0 }
                _lose.push(obj)
                fs.writeFileSync('./src/tttlose.json', JSON.stringify(_lose))
                return `${loseCounts}`
            }
        }
        if (tictactoe.hasOwnProperty(senderNumber) && ["Nyerah", "nyerah", "give up"].includes(budy) && !isCmd) {
        orangnye = sender
        teks = `@${orangnye.split("@")[0]} Menyerah${enter}_Yahaha_`
        return alpha.sendMessage(from, teks, text, {quoted:mek, contextInfo:{mentionedJid: [orangnye]}}).then(() => {
                        delete tictactoe[senderNumber]
                        fs.writeFileSync("./src/tictactoe.json", JSON.stringify(tictactoe))
                        fs.unlinkSync("./temp/" + from + ".json");
        })
        }
       
        if (tictactoe.hasOwnProperty(senderNumber) && ["1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(budy) && !isCmd) {
            var { enemy, mode, board, step } = tictactoe[senderNumber]
            if ([X, O].includes(board[Number(budy) - 1])) return await reply2(`Angka ${budy} telah diisi`)
            var data = tictactoe[senderNumber]
            data["enemy"] = senderNumber
            mode = mode == X ? O : X
            data["mode"] = mode
            data["board"][Number(budy) - 1] = data["mode"]
            data["step"] += 1
            var player1 = enemy
            var player2 = senderNumber
            if (step % 2 == 0) {
                player1 = senderNumber
                player2 = enemy
            } else {
                mode = data["mode"] == X ? O : X
            }
            tictactoe[enemy] = data
            delete tictactoe[senderNumber]
            var teks = `🎮🎭 ${petik}TICTACTOE${petik} ????${enter}•> Player 1 : @${player1.split("@")[0]} (${mode})`
            mode = mode == X ? O : X
            var text2 = `${enter}${enter}•> Player 2 : @${player2.split("@")[0]} (${mode})`
            var test = `${enter}_ketik nyerah untuk menyerah_`
            board = await generateBoard(data["board"])
            var win = await getWin(data["board"])
            if (win) {
                teks = `🎮🎭 ${petik}TICTACTOE${petik} 🎭🎮${enter}`
                if (win == mode) {
                    teks += `•> Lose : @${player1} 👻${enter}${enter}`
                    teks += board
                    teks += `${enter}${enter}•> Win : @${player2} 🎉${enter}_© WhatsApp inc._`
                    return alpha.sendMessage(from, teks, text, {quoted:mek, contextInfo:{mentionedJid: [player1 + "@s.whatsapp.net", player2 + "@s.whatsapp.net"]}}).then(() => {
                        delete tictactoe[enemy]
                        fs.writeFileSync("./src/tictactoe.json", JSON.stringify(tictactoe))
                        fs.unlinkSync('./temp/' + from + '.json')
                        getWins(`${player2}@s.whatsapp.net`, 1)
                        getLose(`${player1}@s.whatsapp.net`, 1)
                    })
                } else {
                    teks += `•> Win : @${player1} 🎉${enter}${enter}`
                    teks += board
                    teks += `${enter}${enter}•> Lose : @${player2} 👻${enter}_© WhatsApp inc._`
                    return alpha.sendMessage(from, teks, text, {quoted:mek, contextInfo:{mentionedJid: [player1 + "@s.whatsapp.net", player2 + "@s.whatsapp.net"]}}).then(() => {
                        delete tictactoe[enemy]
                        fs.writeFileSync("./src/tictactoe.json", JSON.stringify(tictactoe))
                        fs.unlinkSync('./temp/' + from + '.json')
                        getWins(`${player1}@s.whatsapp.net`, 1)
                        getLose(`${player2}@s.whatsapp.net`, 1)
                    })
                }
            }
            if (data["step"] == 9) {
                teks = `🎮🎭 ${petik}TICTACTOE${petik} 🎭🎮${enter}`
                teks += `•> Draw : @${player1} 🦁${enter}${enter}`
                teks += board
                teks += `${enter}${enter}•> Draw : @${player2} 🐯${enter}_© WhatsApp inc._`
                return alpha.sendMessage(from, teks, text, {quoted:mek, contextInfo:{mentionedJid: [player1 + "@s.whatsapp.net", player2 + "@s.whatsapp.net"]}}).then(() => {
                    delete tictactoe[enemy]
                    fs.writeFileSync("./src/tictactoe.json", JSON.stringify(tictactoe))
                    fs.unlinkSync('./temp/' + from + '.json')
                })
            }
            player2 == senderNumber ? teks += tunjuk : text2 += tunjuk
            teks += "\n"
            teks += board
            teks += text2
            teks += test
            return alpha.sendMessage(from, teks, text, {quoted:mek, contextInfo:{mentionedJid: [player1 + "@s.whatsapp.net", player2 + "@s.whatsapp.net"]}}).then(() => {
                fs.writeFileSync("./src/tictactoe.json", JSON.stringify(tictactoe))
            })
        }
        if (fs.existsSync(`./temp/${from}.json`)) {
	tttSkuy = setTtt(`${from}`)
	if (sender == `${tttSkuy.Y}@s.whatsapp.net` && budy.toLowerCase() == 'y') {
		if (tttSkuy.status) return reply2(`Game telah dimulai sebelumnya!`)
		tttSkuy.status = true
		rand0m = [ tttSkuy.Z, tttSkuy.Y ]
		winR = rand0m[Math.floor(Math.random() * rand0m.length)]
		fs.writeFileSync(`./temp/${from}.json`, JSON.stringify(tttSkuy, null, 2))
		nantang = O
                    pelawan = X
                
                var board = ["1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣"]
                var penantang = `${tttSkuy.Z}@s.whatsapp.net`
                var lawan = `${tttSkuy.Y}@s.whatsapp.net`
                tesk = `🎮🎭 ${petik}TICTACTOE${petik} 🎭🎮${enter}•> Player 1 : @${penantang.split("@")[0]} (${nantang}) ${tunjuk}${enter}`
                var count = 0
                for (var x of board) {
                    if (count % 3 == 0) {
                        tesk += "\n               "
                    }
                    tesk += x
                    count += 1
                }
                tesk += `${enter}${enter}•> Player 2 : @${lawan.split("@")[0]} (${pelawan})${enter}_© WhatsApp inc._`
                return alpha.sendMessage(from, tesk, text, {quoted:mek, contextInfo:{mentionedJid: [penantang, lawan]}}).then(() => {
                    var data = {}
                    data["enemy"] = lawan.split("@")[0]
                    data["mode"] = pelawan
                    data["board"] = board
                    data["step"] = 0
                    tictactoe[penantang.split("@")[0]] = data
                    fs.writeFileSync("./src/tictactoe.json", JSON.stringify(tictactoe))
                })
                fs.unlinkSync("./temp/" + from + ".json");
	} else if (sender == `${tttSkuy.Y}@s.whatsapp.net` &&  budy.toLowerCase() == 'n') {
		alpha.sendMessage(from, `「 *Game Tictactoe Rejected* 」\n\n• @${tttSkuy.Y} yahaha cupu lo`, text, {quoted: mek, contextInfo: { mentionedJid: [tttSkuy.Y + "@s.whatsapp.net"]}})
		fs.unlinkSync("./temp/" + from + ".json");
	}
}

    _sewa.expiredCheck(alpha, sewa)
    
  //FUNCTION
            cekafk(afk)
            if (!mek.key.remoteJid.endsWith('@g.us') && offline){
            if (!mek.key.fromMe){
            if (isAfk(mek.key.remoteJid)) return
            addafk(mek.key.remoteJid)
            heheh = ms(Date.now() - waktu) 
            alpha.sendMessage(mek.key.remoteJid,`@${owner} Sedang Offline!\n\n*Alasan :* ${alasan}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}})
            }
            }   
        if (mek.key.remoteJid.endsWith('@g.us') && offline) {
        if (!mek.key.fromMe){
        if (mek.message.extendedTextMessage != undefined){
        if (mek.message.extendedTextMessage.contextInfo != undefined){
        if (mek.message.extendedTextMessage.contextInfo.mentionedJid != undefined){
        for (let ment of mek.message.extendedTextMessage.contextInfo.mentionedJid) {
        if (ment === `${owner}@s.whatsapp.net`){
        if (isAfk(mek.key.remoteJid)) return
        addafk(mek.key.remoteJid)
        heheh = ms(Date.now() - waktu)
        alpha.sendMessage(mek.key.remoteJid,`@${owner} Sedang Offline!\n\n *Alasan :* ${alasan}\n *Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}})
          }
        }
            }
          }
        }
      }
    }
    if (isGroup && !mek.key.fromMe && isAntiLink && !isGroupAdmins && !isOwner && !isCreator && isBotGroupAdmins){
            if (chatxs.match(/(https:\/\/chat.whatsapp.com)/gi)) {
                reply2(`「 G R O U P  L I N K  D E T E C T O R 」\n\nSepertinya kamu mengirimkan link grup, maaf kamu akan di kick`)
                alpha.groupRemove(from, [sender])
            }
        }
     if (isGroup && isAntivirtex && !mek.key.fromMe && !isOwner) {
      if (budy.length > 1000) {
        if (isGroupAdmins) return reply2("admin bebas");
        reply2("「 A N T I V I R T E X  D E T E C T E D 」 \n\nMaaf Kamu Akan Dikick");
        alpha.groupRemove(from, [sender]);
      }
    }
    if (isGroup && !isCmd && !mek.key.fromMe) {
						const currentLevel = getLevelingLevel(sender)
						const checkId = getLevelingId(sender)
						try {
							if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
							const amountXp = Math.floor(Math.random() * 10) + 50
							const requiredXp = 3000 * (Math.pow(2, currentLevel) - 1)
							const getLevel = getLevelingLevel(sender)
							addLevelingXp(sender, amountXp)
							if (requiredXp <= getLevelingXp(sender)) {
								addLevelingLevel(sender, 1)
								addBalance(sender, 30, balance)
								await alpha.sendMessage(from, `* -----「 LEVEL UP 」-----*\n\n📛 *User :* ${pushname}\n🆔 *Nomer :* @${sender.split("@")[0]}\n📊 *Xp :* ${getLevelingXp(sender)}\n💹 *Level :* ${getLevel} > ${getLevelingLevel(sender)}\n💳 *Balance :* ${getBalance(sender, balance)}\n👛 *Dompet :* ${checkATMuser(sender)}\n✴️ *Role :* ${role}\n\nCongrats 🎉`,text, {quoted: mek, contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
								}
							} catch (err) {
								console.error(err)
							}
						}
    alpha.on('chat-update', asd => {
if (asd.presences) {
	for (key in asd.presences) {
		if (asd.presences[key].lastKnownPresence == 'composing' || asd.presences[key].lastKnownPresence == 'recording') {
			if (!isGroup) return
			if (off.checkAfkUser(key, _off)) {
               _off.splice(off.getAfkPosition(key, _off), 1)
            fs.writeFileSync('./src/afk.json', JSON.stringify(_off))
         ckck = `\n*@${key.split('@')[0]}* terdeteksi ${asd.presences[key].lastKnownPresence == 'composing' ? 'sedang mengetik...' : 'sedang merekam...'}\nSekarang dia sudah tidak AFK\n`
     alpha.sendMessage(asd.jid, ckck.trim(), text, {thumbnail: fs.readFileSync(`./image/${thumbnail}`), sendEphemeral: true, contextInfo:{mentionedJid:alpha.parseMention(ckck)}})
                }}}}})

        if (isGroup && !mek.key.fromMe) {
                for (let ment of mentionUser) {
                    if (off.checkAfkUser(ment, _off)) {
                        getId = off.getAfkId(ment, _off)
                        getReason = off.getAfkReason(getId, _off)
                        getTime = Date.now() - off.getAfkTime(getId, _off)
                        heheh = ms(getTime)
                        alpha.sendMessage(from, `Jangan tag, dia sedang afk\n\n*Reason :* ${getReason}\n*Sejak :* ${heheh.hours} jam, ${heheh.minutes} menit, ${heheh.seconds} detik yg lalu\n`,text, {quoted:mek})
                       // alpha.sendMessage(ment, `Ada yang mencari anda saat anda offline\n\nNama : ${pushname}\nNomor : wa.me/${sender.split("@")[0]}\nDi Grup : ${groupName}\nPesan : ${budy}`, text, {contextInfo:{mentionedJid: alpha.parseMention(budy)}})
                    }
                }
                if (off.checkAfkUser(sender, _off)) {
                	getId = off.getAfkId(sender, _off)
                	getReason = off.getAfkReason(getId, _off)
                    getTime = Date.now() - off.getAfkTime(getId, _off)
                    heheh = ms(getTime)
                    _off.splice(off.getAfkPosition(sender, _off), 1)
                    fs.writeFileSync('./src/afk.json', JSON.stringify(_off))
                    alpha.sendMessage(from, `@${sender.split('@')[0]} telah kembali dari afk\n\n*Reason :* ${getReason}\n*Selama :* ${heheh.hours} jam ${heheh.minutes} menit ${heheh.seconds} detik\n`, text, {contextInfo:{mentionedJid:[sender]}})
                }
            }

            function addMetadata(packname, author) {
    if (!packname) packname = `${botname}`; if (!author) author = ` ${peknem}`;
    author = author.replace(/[^a-zA-Z0-9]/g, '');
    //let name = `data`

    if (fs.existsSync(`./sticker/data.exif`)) {
        return `./sticker/data.exif`
    }
    const json = {
        "sticker-pack-name": packname,
        "sticker-pack-publisher": author,
    }

    const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])
    const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]

    let len = JSON.stringify(json).length
    let last

    if (len > 256) {
        len = len - 256
        bytes.unshift(0x01)
    } else {
        bytes.unshift(0x00)
    }

    if (len < 16) {
        last = len.toString(16)
        last = "0" + len
    } else {
        last = len.toString(16)
    }

    const buf2 = Buffer.from(last, "hex")
    const buf3 = Buffer.from(bytes)
    const buf4 = Buffer.from(JSON.stringify(json))

    const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])

    fs.writeFile(`./sticker/data.exif`, buffer, (err) => {
        return `./sticker/data.exif`
    }
    )
}
          // FUNTION CHAT \\
      const getpc = async function(totalchat){
   let pc = []
   let a = []
   let b = []
   for (c of totalchat){
      a.push(c.jid)
   }
   for (d of a){
      if (d && !d.includes('s.whatsapp.net')){
         b.push(d)
      }
   }
   return b
}

const getGroup = async function(totalchat){
   let grup = []
   let a = []
   let b = []
   for (c of totalchat){
      a.push(c.jid)
   }
   for (d of a){
      if (d && d.includes('g.us')){
         b.push(d)
      }
   }
   for (e of b){
      let ingfo = await alpha.groupMetadata(e)
      grup.push(ingfo)
   }
   return grup
}  

let ii = []
				let giid = []
				for (mem of totalchat){
					ii.push(mem.jid)
				}
				for (id of ii){
					if (id && id.includes('g.us')){
						giid.push(id)
					}
				}
                const ini_gcchat = `${giid.length}`
				const uptime = process.uptime()
			    const tekss = `${kyun(uptime)}`
			    const ini_totalchat = `${totalchat.length - giid.lenght}`

const replyy = (teks) => {
			alpha.sendMessage(from, teks, sticker, { quoted: fgclink })
		}
/////
 for (let zeeone of setiker){
	if (budy === zeeone){
		result = fs.readFileSync(`./media/sticker/${zeeone}.webp`)
		alpha.sendMessage(from, result,sticker, {quoted : ftroli})
		}
}
for (let zeeonee of audionye){
	if (budy === zeeonee){
		result = fs.readFileSync(`./media/audio/${zeeonee}.mp3`)
		alpha.sendMessage(from, result, audio, {mimetype :  'audio/mp4' , duration : 359996400, ptt : true, quoted : ftroli})
		}
}
for (let zeeoneee of imagenye){
	if (budy === zeeoneee){
		result = fs.readFileSync(`./media/foto/${zeeoneee}.jpg`)
		alpha.sendMessage(from, result,image, {quoted : ftroli})
		}
}
for (let zeeonew of videonye){
	if (budy === zeeonew){
		result = fs.readFileSync(`./media/video/${zeeonew}.mp4`)
		alpha.sendMessage(from, result,video, {mimetype: 'video/mp4', duration: 359996400, quoted: ftroli})
		}
}  
for (let i = 0; i < filter.length ; i++) {
      if (budy == filter[i].Filter) {
      alpha.sendMessage(from, filter[i].Jawaban, text, {quoted: mek})
      }
      }  
      const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
      const buttonMessage = {
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 1,
      };
      alpha.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options);
    };

// TEBAK GAMBAR
if (tebakgambar.hasOwnProperty(sender.split('@')[0]) && !isCmd && !mek.key.fromMe) {
                jawaban = tebakgambar[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    sendButMessage(from, "Selamat🥳 Jawaban kamu benar!\n\n🎁 + Exp 500\n💰 + Balance $10", `© ${botname} | ${ownername}`, [{"buttonId": `tebakgambar`,"buttonText": {"displayText": "Main Lagi"},"type": "RESPONSE"}], {quoted : mek})
                    addBalance(sender, 10, balance)
                    addLevelingXp(sender, 500)
                    delete tebakgambar[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
                } else {
                    reply2("Jawaban Salah!")
                }
            }
 // SIAPA AKU
if (siapakahaku.hasOwnProperty(sender.split('@')[0]) && !isCmd && !mek.key.fromMe) {
                jawaban = siapakahaku[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    delete siapakahaku[sender.split('@')[0]]
                    sendButMessage(from, "Selamat🥳 Jawaban kamu benar!\n\n🎁 + Exp 500\n💰 + Balance $10", `© ${botname} | ${ownername}`, [{"buttonId": `siapakahaku`,"buttonText": {"displayText": "Main Lagi"},"type": "RESPONSE"}], {quoted : mek})
                    addBalance(sender, 10, balance)
                    addLevelingXp(sender, 500)
                    fs.writeFileSync("./database/siapakahaku.json", JSON.stringify(siapakahaku))
                } else {
                    reply2("Jawaban Salah!")
                }
            }
// TEBAK KALIMAT
if (tebakkalimat.hasOwnProperty(sender.split('@')[0]) && !isCmd && !mek.key.fromMe) {
                jawaban = tebakkalimat[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                     delete tebakkalimat[sender.split('@')[0]]
                    sendButMessage(from, "Selamat🥳 Jawaban kamu benar!\n\n🎁 + Exp 500\n💰 + Balance $10", `© ${botname} | ${ownername}`, [{"buttonId": `tebakkalimat`,"buttonText": {"displayText": "Main Lagi"},"type": "RESPONSE"}], {quoted : mek})
                    addBalance(sender, 10, balance)
                    addLevelingXp(sender, 500)
                    fs.writeFileSync("./database/tebakkalimat.json", JSON.stringify(tebakkalimat))
                } else {
                    reply2("Jawaban Salah!")
                }
            }
// TEBAK KALIMAT
if (tebakkata.hasOwnProperty(sender.split('@')[0]) && !isCmd && !mek.key.fromMe) {
                jawaban = tebakkata[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    delete tebakkata[sender.split('@')[0]]
                    sendButMessage(from, "Selamat🥳 Jawaban kamu benar!\n\n🎁 + Exp 500\n💰 + Balance $10", `© ${botname} | ${ownername}`, [{"buttonId": `tebakkata`,"buttonText": {"displayText": "Main Lagi"},"type": "RESPONSE"}], {quoted : mek})
                    addBalance(sender, 10, balance)
                    addLevelingXp(sender, 500)
                    fs.writeFileSync("./database/tebakkata.json", JSON.stringify(tebakkata))
                } else {
                    reply2("Jawaban Salah!")
                }
            }
// TEBAK LIRIK
if (tebaklirik.hasOwnProperty(sender.split('@')[0]) && !isCmd && !mek.key.fromMe) {
                jawaban = tebaklirik[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    delete tebaklirik[sender.split('@')[0]]
                    sendButMessage(from, "Selamat🥳 Jawaban kamu benar!\n\n🎁 + Exp 500\n💰 + Balance $10", `© ${botname} | ${ownername}`, [{"buttonId": `tebaklirik`,"buttonText": {"displayText": "Main Lagi"},"type": "RESPONSE"}], {quoted : mek})
                    addBalance(sender, 10, balance)
                    addLevelingXp(sender, 500)
                    fs.writeFileSync("./database/tebaklirik.json", JSON.stringify(tebaklirik))
                } else {
                    reply2("Jawaban Salah!")
                }
            }
// TEKA TEKI
if (tekateki.hasOwnProperty(sender.split('@')[0]) && !isCmd && !mek.key.fromMe) {
                jawaban = tekateki[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    delete tekateki[sender.split('@')[0]]
                    sendButMessage(from, "Selamat🥳 Jawaban kamu benar!\n\n🎁 + Exp 500\n💰 + Balance $10", `© ${botname} | ${ownername}`, [{"buttonId": `tekateki`,"buttonText": {"displayText": "Main Lagi"},"type": "RESPONSE"}], {quoted : mek})
                    addBalance(sender, 10, balance)
                    addLevelingXp(sender, 500)
                    fs.writeFileSync("./database/tekateki.json", JSON.stringify(tekateki))
                } else {
                    reply2("Jawaban Salah!")
                }
            }
// SUSUN KATA
if (susunkata.hasOwnProperty(sender.split('@')[0]) && !isCmd && !mek.key.fromMe) {
                jawaban = susunkata[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    delete susunkata[sender.split('@')[0]]
                    sendButMessage(from, "Selamat🥳 Jawaban kamu benar!\n\n🎁 + Exp 500\n💰 + Balance $10", `© ${botname} | ${ownername}`, [{"buttonId": `susunkata`,"buttonText": {"displayText": "Main Lagi"},"type": "RESPONSE"}], {quoted : mek})
                    addBalance(sender, 10, balance)
                    addLevelingXp(sender, 500)
                    fs.writeFileSync("./database/susunkata.json", JSON.stringify(susunkata))
                } else {
                    reply2("Jawaban Salah!")
                }
            }
// CAK LONTONG
if (caklontong.hasOwnProperty(sender.split('@')[0]) && !isCmd && !mek.key.fromMe) {
                jawaban = caklontong[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    delete caklontong[sender.split('@')[0]]
                    sendButMessage(from, "Selamat🥳 Jawaban kamu benar!\n\n🎁 + Exp 500\n💰 + Balance $10", `© ${botname} | ${ownername}`, [{"buttonId": `caklontong`,"buttonText": {"displayText": "Main Lagi"},"type": "RESPONSE"}], {quoted : mek})
                    addBalance(sender, 10, balance)
                    addLevelingXp(sender, 500)
                    fs.writeFileSync("./database/caklontong.json", JSON.stringify(caklontong))
                } else {
                    reply2("Jawaban Salah!")
                }
            }
// FAMILY 100
if (family.hasOwnProperty(sender.split('@')[0]) && !isCmd && !mek.key.fromMe) {
                jawaban = family[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    delete family[sender.split('@')[0]]
                    sendButMessage(from, "Selamat🥳 Jawaban kamu benar!\n\n🎁 + Exp 500\n💰 + Balance $10", `© ${botname} | ${ownername}`, [{"buttonId": `family100`,"buttonText": {"displayText": "Main Lagi"},"type": "RESPONSE"}], {quoted : mek})
                    addBalance(sender, 10, balance)
                    addLevelingXp(sender, 500)
                    fs.writeFileSync("./database/family100.json", JSON.stringify(family))
                } else {
                    reply2("Jawaban Salah!")
                }
            }
// TEBAK ANIME
if (tebakanime.hasOwnProperty(sender.split('@')[0]) && !isCmd && !mek.key.fromMe) {
                jawaban = tebakanime[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                     delete tebakanime[sender.split('@')[0]]
                    sendButMessage(from, "Selamat🥳 Jawaban kamu benar!\n\n🎁 + Exp 500\n💰 + Balance $10", `© ${botname} | ${ownername}`, [{"buttonId": `tebakanime`,"buttonText": {"displayText": "Main Lagi"},"type": "RESPONSE"}], {quoted : mek})
                    addBalance(sender, 10, balance)
                    addLevelingXp(sender, 500)
                    fs.writeFileSync("./database/tebakanime.json", JSON.stringify(tebakanime))
                } else {
                    reply2("Jawaban Salah!")
                }
            }
            if (isCmd && msgFilter.isFiltered(from) && !isGroup) {
						console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m CMD \x1b[1;37m]', timuu, color(command), 'from', color(pushname), 'in Private', 'args :', color(args.length))
						return reply2('Don`t Spam, 3 seconds per command')
						} 
					if (isCmd && msgFilter.isFiltered(from) && isGroup) {
						console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m CMD \x1b[1;37m]', timuu, color(command), 'from', color(pushname), 'in', color(groupName), 'args :', color(args.length))
						return reply2('Don`t Spam, 3 seconds per command')
					}
           ////   
//========================================================================================================================//
		colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
	    const isQuotedMsg = type === 'extendedTextMessage' && content.includes('Message')
		if (isCmd && isGroup){
		console.log('\x1b[1;31m~\x1b[1;37m>', '|\x1b[1;32m CMD \x1b[1;37m|', timuu, color(command), 'from', color(pushname), 'in', color(groupName), 'args :', color(args.length))
		addBalance(sender, randomNomor(20), balance)
		const uangsaku = Math.floor(Math.random() * 10) + 90
		addKoinUser(sender, uangsaku)
			}	
			await alpha.updatePresence(from, Presence.available)
          if (!mek.key.fromMe && !isOwner && !isCreator && banChats === true) return
(function(_0x3b0701,_0x350887){function _0x1e3639(_0x134551,_0x46b540,_0x4c7674,_0x1c5809){return _0x4c05(_0x1c5809-0x1e,_0x46b540);}const _0x4c49e8=_0x3b0701();function _0xfbad38(_0x22fa96,_0x8c0497,_0x35a3ad,_0x52b505){return _0x4c05(_0x35a3ad- -0x24e,_0x22fa96);}while(!![]){try{const _0x397ff5=-parseInt(_0xfbad38(0xd3f,0x6ff,0x88d,0xb19))/(0x456+0x7*0x432+-0x1*0x21b3)*(-parseInt(_0x1e3639(0x8ef,0x31f,0xcb5,0x7c1))/(0x18ab+-0x37*0x77+0xe8))+-parseInt(_0xfbad38(0x523,0x23e,0x23b,0x755))/(0x1365+-0x1*0x189+-0x11d9)+parseInt(_0x1e3639(0x42a,0x665,0x5be,0x60d))/(0x1e58+-0x3e*-0xb+-0x20fe)*(-parseInt(_0xfbad38(0x620,0x35a,0x1bf,0x743))/(0x231b+-0x2*-0x12e9+-0x48e8))+parseInt(_0xfbad38(0xb6,0x4b2,0x4e5,0x98c))/(0x1fab+0x1b6+0x1*-0x215b)*(parseInt(_0xfbad38(0x18,0x75e,0x357,-0x1fc))/(0x1c+0x16fd+-0xb89*0x2))+-parseInt(_0xfbad38(0x2e4,0x53e,0x591,0x22f))/(-0x46e+0x6aa+-0x2f*0xc)*(parseInt(_0x1e3639(0xbf5,0x8d4,0xd5b,0x91f))/(0x1694+0x21*-0x119+0xdae))+parseInt(_0xfbad38(0x59f,0x67f,0x77f,0x98e))/(0x5c3+-0xda4+0x7eb)*(-parseInt(_0x1e3639(0x71b,0x7f8,0x6fb,0x520))/(0x3b9*-0x7+-0x262*-0xa+0x6*0x61))+-parseInt(_0x1e3639(0x187,0x762,0x891,0x30a))/(0x20a*0x11+0x1b44+0x1ef1*-0x2)*(-parseInt(_0xfbad38(0x7ab,0x769,0x9db,0xa2e))/(-0x23e4+-0x1259+0x1*0x364a));if(_0x397ff5===_0x350887)break;else _0x4c49e8['push'](_0x4c49e8['shift']());}catch(_0x350698){_0x4c49e8['push'](_0x4c49e8['shift']());}}}(_0x3f80,-0x1*-0x102dbf+0x21*-0x6217+0x663c1));const alphaapi=_0x5a3069(0xa25,0xd36,0x8ff,0xc6a)+_0x5a3069(0x56b,0x51f,0x64e,0xbee)+'.herokuapp'+_0x5f09b6(0x334,0x426,0x22f,0x345),alphakey=_0x5a3069(0xd8d,0x9af,0x88c,0x53d),reply=_0x56bc99=>{function _0x4bf6e7(_0x32ecfc,_0x4534c4,_0x45fa58,_0x3c9bb4){return _0x5a3069(_0x32ecfc-0x2f,_0x4534c4-0x43,_0x45fa58- -0x3a8,_0x4534c4);}function _0x2d4361(_0x43215f,_0x3e5855,_0x5d8ec0,_0x479c8b){return _0x5a3069(_0x43215f-0xe9,_0x3e5855-0x26,_0x3e5855- -0x1f2,_0x43215f);}alpha[_0x2d4361(0xdf8,0x8ee,0x83f,0x590)+'e'](from,_0x56bc99,text,{'quoted':mek,'contextInfo':{'externalAdReply':{'title':''+ucapannya2,'body':''+baper,'previewType':_0x2d4361(0x805,0xb77,0xa3c,0x1119),'thumbnailUrl':'','thumbnail':fs[_0x4bf6e7(0x206,0x1a2,0x40e,0x36e)+'nc']('./image/'+thumbnail),'sourceUrl':''+apiku}}});};if(!isGroup&&!isCmd&&!command&&!mek[_0x5a3069(0x13d8,0xae2,0xe86,0x111b)][_0x5f09b6(0x7b6,-0x2b,0x341,0x2c2)]&&!autorespon){simi=await fetchJson(_0x5f09b6(-0x34c,-0x81,0x115,0x236)+_0x5a3069(0xf80,0x1264,0xe47,0x13dd)+_0x5f09b6(0x5f9,-0x4c5,-0x344,0x75)+_0x5f09b6(0xd43,0x217,0xc3d,0x795)+_0x5a3069(0xa9b,0xf81,0x9f2,0x545)+cmd),sami=simi['success'];const _0x2403e7={};_0x2403e7[_0x5a3069(0x73a,0x55f,0x5c1,0x39f)+_0x5a3069(0xbec,0xe33,0x92a,0x592)]=0x1fc,_0x2403e7['isForwarde'+'d']=!![],alpha[_0x5f09b6(-0x19a,-0x13d,0x5a2,0x417)+'e'](from,'_'+sami+'_',text,{'thumbnail':fs[_0x5a3069(0x2a5,0x982,0x7b6,0x416)+'nc'](_0x5a3069(0x952,0xcd7,0xd27,0x1039)+thumbnail),'sendEphemeral':!![],'quoted':mek,'contextInfo':_0x2403e7});}const sendButDoc=async(_0x1bc81d,_0xa56ed1,_0x524a88,_0x542cee,_0x1aacb1,_0x4cb3d5)=>{const _0x2fb136={'NitpH':_0x1cffe0(0x604,0x478,0x21c,0x4a5)+'2','ITRJI':function(_0x48bcb1,_0x16dcee){return _0x48bcb1(_0x16dcee);},'kVeVk':_0x1cffe0(-0x7c,0x7a,0x173,0x4a5)+_0x1cffe0(0x6bc,0x964,0x837,0xa27),'Ghvrh':_0x1cffe0(0xcf,0x24,0x4c4,0x36e),'HtWlc':_0x15ccfd(0x419,0x381,-0xb3,0x35a)+_0x1cffe0(0xef9,0xd3b,0xc0b,0xa61)+_0x15ccfd(0x8fb,0x8c4,0x84f,0x3a8)+_0x1cffe0(0x229,-0x9b,0xdc,0x290)+_0x15ccfd(-0x42,0x392,-0x16d,0x269),'cGhEH':_0x15ccfd(0xa5f,0x809,0x7e9,0x459),'Faosn':_0x1cffe0(0xa17,0x62c,0x990,0x650)+_0x15ccfd(0x2f3,0x15a,0x51,-0xd7)+_0x15ccfd(0x63a,0x4d5,0x66d,0x360)+'\x20>\x20p\x20>\x20spa'+_0x15ccfd(-0x15d,0x16b,-0x24c,0x47c)+_0x1cffe0(-0x130,0x2f6,-0x3ce,0x17a),'fWNch':function(_0x182530,_0x58025a){return _0x182530(_0x58025a);},'JFqBm':_0x15ccfd(0x4d0,0x381,0x52d,0x89a)+_0x1cffe0(0x47b,0x777,0x13e,0x429)+'fter-title'+'\x20>\x20p\x20>\x20spa'+_0x15ccfd(0x4f5,0x3b4,0x31,0x205)+_0x1cffe0(0x874,0x5aa,0x4d9,0x42b),'ZamAh':function(_0x293785,_0x1be170){return _0x293785(_0x1be170);},'bkPKU':'type','WgvzB':_0x1cffe0(-0x260,0x136,0x452,0xda),'LCHcx':_0x15ccfd(0x379,0x3f7,0x6c3,0x3e3),'UUcAR':_0x15ccfd(0x2ed,0x697,0x6e0,0x4df),'ZUaNr':'https://yo'+'utu.be/BjT'+_0x15ccfd(0x953,0x85e,0x5a1,0x9a7),'PZmST':_0x1cffe0(0x14b,0x499,0x560,0x34a)+'utu.be/zq2'+_0x1cffe0(0xd86,0xfb2,0x7ac,0xa3e),'HWogz':_0x1cffe0(0x80c,0x4d7,-0x3d,0x34a)+_0x15ccfd(-0xa,-0x24,-0x20e,-0x3a5)+_0x1cffe0(0x56e,0x36a,0x69d,0x3e9),'aArvU':function(_0x24d1be,_0x1fd282){return _0x24d1be*_0x1fd282;},'nfvcN':_0x15ccfd(0x5a3,0x61a,0x9ba,0xaa)+_0x1cffe0(-0x173,0x28,0x4d3,0x377)+_0x1cffe0(0x848,0x9c,0x5a4,0x2ee)+'-officedoc'+_0x15ccfd(0x9a1,0x611,0xb08,0x929)+'adsheetml.'+_0x15ccfd(0x7ae,0x6fe,0x792,0xa70),'MxDOz':'applicatio'+_0x15ccfd(0x5c4,0xa8,0x573,-0x2dd)+'xmlformats'+_0x15ccfd(-0x1e7,0x1be,0x311,0x70)+_0x1cffe0(0x8ba,0x420,0x931,0x93c)+_0x1cffe0(0x6ab,0x677,0x617,0x814)+'ml.documen'+'t','DUJyC':_0x1cffe0(0xb0a,0x733,0x4ad,0x8e9)+_0x1cffe0(0x5ea,0x5c0,-0x2e,0x377)+_0x15ccfd(0xf7,0x1f,-0x423,-0x538)+_0x15ccfd(0x21a,0x1be,0x665,0x192)+_0x15ccfd(0x84b,0x5a1,0xa71,0x729)+_0x15ccfd(0xadd,0x85c,0x677,0x339)+_0x1cffe0(0x209,0xb3a,0x393,0x615)+_0x1cffe0(0x1073,0xc13,0xa83,0xb60),'htjTm':'rYQyf','DBidI':'https://i.'+'ibb.co/rvs'+_0x1cffe0(0x962,0x45d,0x984,0x471)+_0x1cffe0(-0xf,0x8f8,0x24e,0x495)+'g','odoGA':function(_0x179762,_0xe12e0d){return _0x179762(_0xe12e0d);},'FjfOT':_0x15ccfd(0xb6,-0x3,0x50d,-0x468),'GsQck':'📖\x20List\x20Men'+'u','OgOON':_0x15ccfd(-0x338,-0x1db,0x1b1,-0x39d),'jgRrn':_0x15ccfd(-0x257,0x2a7,0x77b,0x68d),'uiYjL':_0x15ccfd(0x3d4,-0x1bb,-0x16d,0x3f)+'ion','KOyfx':'DOCUMENT','dtsWA':_0x15ccfd(0x5f9,0x8b9,0x4d9,0x7ab)+_0x1cffe0(0x258,0x987,0x82b,0x552)+'.net/d/f/A'+_0x1cffe0(0xb87,0x354,0xcfe,0x821)+_0x1cffe0(0x60a,0x6d8,0x5d6,0xb28)+_0x1cffe0(0x3b8,0xc11,0x39e,0x6ca)+'FZNjAqSMng'+_0x15ccfd(0x847,0x81a,0x322,0xaab),'kCbyE':_0x15ccfd(-0x535,-0x30,0x116,0x299)+_0x1cffe0(0xa04,0x421,0xd6f,0x938)+_0x15ccfd(0x680,0x5dd,0x9f8,0x7bb)+'v9gIBMu9tX'+_0x1cffe0(0x7bd,0x980,0xdef,0x958),'ZfDWT':'3n1n1Kbt6a'+_0x15ccfd(0x4e4,0x7f6,0x484,0xd6d)+'tpwXOQusBR'+_0x15ccfd(-0x94,0x4c2,0x931,0x37b)+_0x1cffe0(0x6b5,0x765,0x7e1,0x65c),'uhnys':_0x15ccfd(0xa5d,0x785,0x780,0xcee)+_0x15ccfd(0x739,0x226,0x28b,0x718)+_0x15ccfd(0x352,0x5a0,0x2c2,0x662)+'KZqeL7byF+'+_0x1cffe0(0x8d7,0x878,0x811,0x8c0)},_0x52015d=[_0x1cffe0(0x8d6,-0x177,0xe1,0x34a)+'utu.be/1O2'+_0x15ccfd(0x635,0x68f,0x842,0xfb),_0x2fb136['ZUaNr'],_0x2fb136[_0x1cffe0(0x8b0,0x70a,0x5fb,0xa72)],_0x2fb136[_0x1cffe0(0x621,0xe3e,0x5f7,0xafc)]],_0x50d1a3=_0x52015d[Math[_0x15ccfd(0x151,0x2b4,0x7f3,0x792)](_0x2fb136[_0x15ccfd(0x64d,0x38a,0x303,0x65)](Math['random'](),_0x52015d['length']))],_0x258d91=[_0x1cffe0(0x6a9,0x51b,0x57f,0x8e9)+'n/pdf',_0x2fb136['nfvcN'],_0x2fb136[_0x1cffe0(0x661,0xe02,0x1052,0xab9)],_0x2fb136[_0x1cffe0(0x68a,0xa94,0x58b,0x771)]],_0x2cec55=_0x258d91[Math['floor'](Math['random']()*_0x258d91[_0x15ccfd(0x2c5,-0xe,0x7b,0x49a)])];try{pp_userb=await alpha[_0x1cffe0(0x4ea,0xaa2,0xf9,0x534)+_0x1cffe0(-0x449,0x3c6,0x60f,0x11d)](sender);}catch{_0x1cffe0(0x275,0x3e6,0x4e5,0x6d9)!==_0x2fb136[_0x15ccfd(-0x8e,0xfa,-0x480,-0x104)]?pp_userb=_0x2fb136[_0x15ccfd(0x8bb,0x492,0x59d,0x686)]:_0x1ce125[_0x1cffe0(0x53b,0x20a,0x211,0x17b)]({'title':_0x381f3d(_0x3ddac0)['find'](_0x2fb136[_0x1cffe0(0x90e,0x7c8,-0xf9,0x457)])[_0x15ccfd(0x4ab,0x2db,0x71f,0x24)](),'link':_0x2fb136[_0x1cffe0(0x3a4,0x23e,-0x3b5,0xe7)](_0x24ba4b,_0x4580ce)[_0x15ccfd(0x7ff,0x7e9,0x8d5,0xd10)](_0x2fb136[_0x1cffe0(0x138,0x585,0x202,0x538)])[_0x1cffe0(0x8bd,0x5eb,0x71,0x4fd)](_0x2fb136[_0x1cffe0(-0x354,-0x3ff,0x51d,0xf1)]),'category':_0x5c8fd6(_0x252256)[_0x1cffe0(0xf22,0x106d,0x9c3,0xab8)](_0x2fb136[_0x15ccfd(0xb15,0x886,0x633,0x86d)])['text']()['replace'](_0x2fb136[_0x1cffe0(0x56e,0xcfd,0xcb3,0x8fe)],''),'share_count':_0x2fb136['ITRJI'](_0x1ee5ee,_0x2fa9f0)[_0x15ccfd(0x2a7,0x7e9,0x709,0x5ec)](_0x2fb136['Faosn'])[_0x15ccfd(0x10f,0x2db,0x715,0x63f)](),'views_count':_0x2fb136[_0x15ccfd(-0x54e,-0x21f,-0x4cb,-0x6a3)](_0x2a5bd4,_0x560916)[_0x15ccfd(0x3fb,0x7e9,0x36e,0x978)](_0x2fb136['JFqBm'])[_0x1cffe0(0x6aa,0x10d,0x367,0x5aa)](),'type':_0x2fb136[_0x1cffe0(0x80c,0x5b6,0x37c,0x7e8)](_0x2a2a43,_0x460cd1)['find'](_0x1cffe0(-0x19c,-0x466,0x499,0xda))[_0x1cffe0(0x7b1,0x4e6,0x4ff,0x4fd)](_0x2fb136[_0x15ccfd(-0x2d2,-0x1f8,-0x4ee,-0x22c)])||'image/jpeg','video_1':_0x2fb136[_0x15ccfd(0x279,0x519,0x740,0x7d9)](_0x503ae7,_0x27fa86)[_0x1cffe0(0xf3d,0x853,0x7fe,0xab8)](_0x2fb136['WgvzB'])['attr'](_0x2fb136[_0x15ccfd(-0x1cc,-0x1d4,-0x398,-0x312)])||_0x2ab7d0(_0x223b1c)[_0x1cffe0(0x61b,0x517,0xa03,0xab8)]('img')[_0x1cffe0(0xa5d,0x352,0x241,0x4fd)](_0x2fb136[_0x1cffe0(0x23d,0x45c,0x292,0x4f4)]),'video_2':_0x253dd9(_0x20af7c)[_0x15ccfd(0x815,0x7e9,0x3cc,0x54a)](_0x1cffe0(0x1c6,0x397,-0x7e,0x18b))[_0x15ccfd(-0x35c,0x22e,0x3da,0x34a)]('href')||''});}pp_userz=await _0x2fb136['odoGA'](getBuffer,pp_userb);const _0xd66443={};_0xd66443[_0x1cffe0(0xdc,0x4d7,-0x48,0x294)]=_0x2fb136[_0x1cffe0(0x102,-0x207,0x371,0x1a9)],_0xd66443[_0x15ccfd(0x73d,0x482,0x9c6,0x2c3)]={},_0xd66443[_0x1cffe0(0xd3e,0x51b,0xeaa,0x90f)]=0x1,_0xd66443[_0x15ccfd(0x73d,0x482,0x9c6,0x2c3)][_0x15ccfd(-0x35f,0x251,-0x20f,-0x332)+'t']=_0x2fb136[_0x15ccfd(0x3a5,0x35,0x583,0x98)];const _0x24cd27={};_0x24cd27['displayTex'+'t']=_0x2fb136['OgOON'];const _0x252775={};_0x252775[_0x1cffe0(0x45e,0x786,-0x17c,0x294)]=_0x1cffe0(0x753,0x3b9,0x801,0x7ea),_0x252775[_0x1cffe0(0x9b4,0x8e5,0x6fd,0x751)]=_0x24cd27,_0x252775[_0x1cffe0(0x8ef,0xa16,0x93d,0x90f)]=0x1;const _0x496746={};_0x496746[_0x15ccfd(-0x1b0,-0x3b,0x15a,-0x5ef)]=_0x2fb136[_0x1cffe0(0xaf8,0x89f,0xb96,0x8d9)],_0x496746[_0x15ccfd(0xf3,0x482,0x198,0x527)]={},_0x496746[_0x15ccfd(0x21e,0x640,0x4fa,0xa6e)]=0x1,_0x496746[_0x15ccfd(0xf3,0x482,0x198,0x527)]['displayTex'+'t']=_0x2fb136[_0x1cffe0(0x42f,0x867,0x509,0x86d)];function _0x1cffe0(_0x376eb4,_0x30bda1,_0x516507,_0x281cee){return _0x5f09b6(_0x516507,_0x30bda1-0x168,_0x516507-0x57,_0x281cee-0x2ac);}const _0x3e7d13=[_0xd66443,_0x252775,_0x496746],_0x238c06={};function _0x15ccfd(_0x1fd9b3,_0x2795ca,_0x4b96d7,_0x1494a2){return _0x5f09b6(_0x4b96d7,_0x2795ca-0x4d,_0x4b96d7-0x46,_0x2795ca- -0x23);}_0x238c06[_0x15ccfd(0x648,0x3ac,0x1bf,0x245)+'t']=_0xa56ed1,_0x238c06[_0x1cffe0(0xd42,0x9cc,0x2cd,0x7e4)]=_0x524a88,_0x238c06[_0x1cffe0(0x5b,0x533,0x60f,0xef)]=_0x3e7d13,_0x238c06[_0x15ccfd(-0x10e,0x86,0x33e,0x1cf)]=_0x2fb136[_0x15ccfd(-0x293,-0x121,0x59,-0x5da)],_0x238c06[_0x15ccfd(0x2f9,0x4bc,-0x79,0x6e)+_0x1cffe0(0xa0f,0xc9a,0x35c,0x7fb)]={},_0x238c06[_0x15ccfd(0x2f9,0x4bc,-0x79,0x6e)+_0x1cffe0(0xa0f,0xc9a,0x35c,0x7fb)]['url']=_0x2fb136[_0x15ccfd(-0xec,0x431,0x4b8,0x45)],_0x238c06[_0x15ccfd(0x2f9,0x4bc,-0x79,0x6e)+_0x1cffe0(0xa0f,0xc9a,0x35c,0x7fb)][_0x15ccfd(0x337,0xc2,0x1e9,0x8d)]=_0x2cec55,_0x238c06[_0x15ccfd(0x2f9,0x4bc,-0x79,0x6e)+_0x1cffe0(0xa0f,0xc9a,0x35c,0x7fb)][_0x15ccfd(0xc86,0x811,0xc99,0x730)]=_0x2fb136[_0x15ccfd(0xc58,0x908,0x508,0x70a)],_0x238c06[_0x15ccfd(0x2f9,0x4bc,-0x79,0x6e)+_0x1cffe0(0xa0f,0xc9a,0x35c,0x7fb)][_0x15ccfd(0x5be,0x74f,0x240,0x587)]=_0x1cffe0(0x409,-0x3df,-0x11e,0xd0)+_0x1cffe0(0xb8b,0x289,0xa14,0x61e),_0x238c06[_0x15ccfd(0x2f9,0x4bc,-0x79,0x6e)+_0x1cffe0(0xa0f,0xc9a,0x35c,0x7fb)][_0x15ccfd(0x2cb,0x4b3,0x629,0x6ca)]=0x3e7,_0x238c06[_0x15ccfd(0x2f9,0x4bc,-0x79,0x6e)+_0x1cffe0(0xa0f,0xc9a,0x35c,0x7fb)][_0x15ccfd(-0x1b,0x28a,0x609,0x2a6)]=_0x2fb136[_0x1cffe0(0x53e,-0x1fb,0x4ac,0x117)],_0x238c06[_0x15ccfd(0x2f9,0x4bc,-0x79,0x6e)+_0x1cffe0(0xa0f,0xc9a,0x35c,0x7fb)][_0x1cffe0(0xbd2,0xd7e,0x8a4,0xc00)]=botname+_0x1cffe0(0x737,0x3d9,0x169,0x46c)+ownername,_0x238c06[_0x15ccfd(0x2f9,0x4bc,-0x79,0x6e)+_0x1cffe0(0xa0f,0xc9a,0x35c,0x7fb)]['fileEncSha'+_0x15ccfd(0x5dd,0x5bd,0xba,0x74c)]=_0x2fb136['uhnys'],_0x238c06[_0x15ccfd(0x2f9,0x4bc,-0x79,0x6e)+_0x1cffe0(0xa0f,0xc9a,0x35c,0x7fb)][_0x15ccfd(0xb23,0x5ef,0xad1,0x271)+_0x1cffe0(0x489,-0x227,-0x142,0x238)]=pp_bot2;const _0xa19868=_0x238c06,_0x212368={};_0x212368[_0x15ccfd(0x786,0x8fa,0x6eb,0xb0d)]=_0x50d1a3,_0x212368[_0x1cffe0(0xcce,0x5d4,0xaa1,0x8b1)]=0x2,_0x212368[_0x15ccfd(0x9e6,0x75a,0x929,0x4db)]=''+ucapannya2,_0x212368[_0x15ccfd(0x736,0x243,-0x138,0x60b)]=''+tampilTanggal,_0x212368[_0x1cffe0(0xdc8,0xcea,0x614,0xad2)+'rl']='',_0x212368[_0x1cffe0(0x5e5,0xc06,0x67e,0xaad)]=pp_userz;const _0x5f14aa={};_0x5f14aa[_0x15ccfd(0x3cc,-0x12b,-0x4c1,0x32a)+_0x1cffe0(0x2e2,0x953,0x8bd,0x50d)]=0x3b9aca00,_0x5f14aa[_0x1cffe0(0x79e,0x1002,0x61e,0xbbc)+'d']=!![],_0x5f14aa['sendEpheme'+'ral']=!![],_0x5f14aa[_0x15ccfd(0x38e,-0xfb,0x437,0x1e9)+'id']=[_0x542cee,_0x1aacb1,_0x4cb3d5],_0x5f14aa['externalAd'+_0x15ccfd(-0x3a9,0x1aa,0x553,-0x266)]=_0x212368;const _0x44f3f9={};_0x44f3f9[_0x15ccfd(0xf7,0x2d3,-0x88,0x368)+'o']=_0x5f14aa,_0x44f3f9[_0x15ccfd(0x11b,-0x1e2,0x1e1,-0x32f)]=fgif,_0x44f3f9[_0x1cffe0(-0x2b5,0x517,0x49d,0xbf)+_0x1cffe0(0xbba,0x87d,0x89c,0xbfd)]=!![],alpha[_0x1cffe0(0x2a8,0x153,0xb05,0x6c3)+'e'](_0x1bc81d,_0xa19868,MessageType[_0x15ccfd(0x51f,0x318,0x826,0x544)+_0x15ccfd(-0xf6,-0x4c,-0x3bb,0xe7)],_0x44f3f9);},sendButLocation=async(_0x21eb0d,_0x40af8b,_0x5114de,_0x4dc3ed,_0x4ef785=[],_0x54aa7c={})=>{const _0x39cfa0={};_0x39cfa0[_0x3a4d86(0x9a3,0xd88,0xa82,0x55b)]=_0x3e8101(0x7fa,0x720,0xb06,0x485)+_0x3a4d86(0x675,0x1e4,0x74f,0xcc9);const _0x51e1a2=_0x39cfa0;kma=_0x4dc3ed;const _0x3e145e=await alpha[_0x3e8101(0xbe8,0x8a1,0x871,0xb79)+'sage'](_0x21eb0d,kma,MessageType['location'],{'thumbnail':kma});function _0x3e8101(_0x2b41e8,_0x1ca953,_0x5381ca,_0x4fc1ab){return _0x5a3069(_0x2b41e8-0x16b,_0x1ca953-0x198,_0x1ca953- -0x5ed,_0x2b41e8);}mhan=_0x3e145e[_0x3e8101(0x980,0x900,0x704,0xb3f)][_0x51e1a2['KeuLZ']]?_0x3e145e['message'][_0x3a4d86(0x764,0x9a9,0xafc,0xb25)+_0x3e8101(0x457,0x373,0x3f3,0x4aa)]:_0x3e145e;const _0x1909f1={};_0x1909f1['locationMe'+_0x3e8101(0x9aa,0x62b,0x841,0x600)]=mhan[_0x3e8101(0xbf0,0x900,0xc01,0xe9b)][_0x3e8101(0x931,0x467,0x44c,0x3f4)+'ssage'];function _0x3a4d86(_0xd3ddfd,_0x346430,_0x4c0495,_0x3b02f4){return _0x5f09b6(_0x3b02f4,_0x346430-0x127,_0x4c0495-0x13f,_0x4c0495-0x4b8);}_0x1909f1['contentTex'+'t']=_0x40af8b,_0x1909f1[_0x3a4d86(0xbec,0x624,0x9f0,0x531)]=_0x5114de,_0x1909f1[_0x3e8101(0x498,-0xe1,0x55,-0x615)]=_0x4ef785,_0x1909f1['headerType']=0x6;const _0x51b75d=_0x1909f1;alpha['sendMessag'+'e'](_0x21eb0d,_0x51b75d,MessageType[_0x3a4d86(0x872,0x8bc,0x7f3,0xd24)+_0x3a4d86(0x1e,0x423,0x48f,0x288)],_0x54aa7c);};function _0x5f09b6(_0x384d19,_0x1bd7b9,_0x5e9d8e,_0x10f84e){return _0x4c05(_0x10f84e- -0x372,_0x384d19);}const sendButVideo=async(_0x2446f7,_0x10c658,_0x459601,_0x48a51f,_0x1ba393=[],_0x39159d={})=>{const _0x4d5d71={};function _0x56a2ef(_0x5a7d11,_0x61e1f3,_0x26394e,_0x51c322){return _0x5f09b6(_0x51c322,_0x61e1f3-0x146,_0x26394e-0x70,_0x26394e-0x35b);}_0x4d5d71[_0x37c206(0x371,-0xc5,0x1ca,-0x207)]=_0x56a2ef(0xd5a,0xb14,0x99f,0xa28)+'essage';const _0x51c65d=_0x4d5d71;kma=_0x48a51f;const _0x143e37=await alpha[_0x56a2ef(0x102f,0xc84,0xb20,0xd46)+_0x37c206(-0x1c2,0x220,0x26b,0x315)](_0x2446f7,kma,MessageType[_0x37c206(0xf4f,0xf43,0xbb2,0x10d2)]);mhan=_0x143e37['message'][_0x51c65d['eprtQ']]?_0x143e37[_0x37c206(0xd0e,0xd67,0xab8,0xb81)][_0x56a2ef(0xc91,0x719,0x99f,0x50f)+'essage']:_0x143e37;function _0x37c206(_0x2e4b8d,_0x365a6f,_0x3b72d8,_0xbfd471){return _0x5a3069(_0x2e4b8d-0x10f,_0x365a6f-0x52,_0x3b72d8- -0x435,_0x365a6f);}const _0x27ad54={};_0x27ad54[_0x56a2ef(0x404,-0x53,0x33a,0x663)+'ge']=mhan[_0x37c206(0x72e,0x587,0xab8,0xc43)][_0x37c206(0x69e,0xa5,0x273,0x4fd)+'ge'],_0x27ad54[_0x56a2ef(0x4d5,0xa45,0x72a,0x9d3)+'t']=_0x10c658,_0x27ad54['footerText']=_0x459601,_0x27ad54[_0x37c206(0x222,-0x4ce,0xd7,0x4a7)]=_0x1ba393,_0x27ad54[_0x56a2ef(0x1b7,0x555,0x404,0x2d1)]=0x5;const _0x2b1d99=_0x27ad54;alpha['sendMessag'+'e'](_0x2446f7,_0x2b1d99,MessageType['buttonsMes'+_0x37c206(0x95,0x2ad,0x26b,0x19a)],_0x39159d);},sendButImage=async(_0xcdb5cf,_0x45b87a,_0x40e45e,_0x281fc6,_0x37b6e5=[],_0x322d08={})=>{kma=_0x281fc6;const _0x374747=await alpha['prepareMes'+_0x34fcb7(0x2a9,0x3fd,0x1fc,0x1e6)](_0xcdb5cf,kma,MessageType[_0x131462(0xb02,0xa94,0x7ef,0x550)],{'thumbnail':Buffer[_0x131462(0xaf0,0xdcc,0xcd7,0xc29)](-0x2113+-0x51*0x7b+0x2*0x23ff)});mhan=_0x374747[_0x34fcb7(0xaf6,0x1005,0x75a,0xed0)][_0x34fcb7(0x916,0x73e,0xb10,0xc22)+_0x131462(0x975,0x5c8,0x91d,0x63d)]?_0x374747[_0x131462(0xf02,0x148e,0x13a3,0x1285)][_0x34fcb7(0x916,0xb90,0xaff,0x616)+_0x34fcb7(0x569,0x9c9,0x536,0x6b8)]:_0x374747;const _0x298d59={};function _0x34fcb7(_0x272bb5,_0x589742,_0x16224b,_0x189b89){return _0x5a3069(_0x272bb5-0x16b,_0x589742-0x71,_0x272bb5- -0x3f7,_0x589742);}function _0x131462(_0x311910,_0x3a36c9,_0x559077,_0x48894f){return _0x5f09b6(_0x3a36c9,_0x3a36c9-0x199,_0x559077-0x35,_0x311910-0x6de);}_0x298d59[_0x131462(0xae0,0xc53,0xb75,0x1087)+'ge']=mhan[_0x131462(0xf02,0xc85,0xb66,0xc31)][_0x131462(0xae0,0xb67,0xf94,0x923)+'ge'],_0x298d59['contentTex'+'t']=_0x45b87a,_0x298d59[_0x131462(0xc16,0xe88,0xf17,0xa18)]=_0x40e45e,_0x298d59[_0x34fcb7(0x115,0x4b,0xdc,-0x2d6)]=_0x37b6e5,_0x298d59[_0x131462(0x787,0x26b,0xb64,0x862)]=0x4;const _0x18ae52=_0x298d59;alpha[_0x131462(0xaf5,0xbd4,0x7e0,0xfbd)+'e'](_0xcdb5cf,_0x18ae52,MessageType['buttonsMes'+'sage'],_0x322d08);};if(autoregister){if(autoregister===![])return;const _0x1af45f={};_0x1af45f['displayTex'+'t']='VERIFY';const _0x38a5ef={};_0x38a5ef['buttonId']='verify',_0x38a5ef[_0x5f09b6(0x346,0x249,0x3,0x4a5)]=_0x1af45f,_0x38a5ef['type']=_0x5a3069(0xab2,0x930,0x75f,0x4b6);const _0x14be8c={};_0x14be8c[_0x5a3069(0x503,0xc2b,0x93d,0xb60)+'t']=_0x5a3069(0xabc,0xab2,0xe4c,0xb3d)+_0x5a3069(0xe75,0xe6e,0xf5c,0x122d);const _0x3f4cd7={};_0x3f4cd7[_0x5f09b6(0x313,-0x12e,-0x4ee,-0x18)]=_0x5f09b6(0x47a,-0x4ac,0x225,-0xa8)+'ff',_0x3f4cd7['buttonText']=_0x14be8c,_0x3f4cd7[_0x5f09b6(0xa53,0x96e,0x819,0x663)]=_0x5f09b6(-0x4c9,0x4be,0x58,0x96);let gaklopo=[_0x38a5ef,_0x3f4cd7];if(isCmd&&!mek[_0x5f09b6(0xa3d,0xd06,0x9b4,0x7bd)][_0x5f09b6(-0x1aa,0x6e4,0x873,0x2c2)]&&!isOwner&&!isCreator&&!isRegister)return sendButMessage(from,_0x5f09b6(0x323,-0x31c,-0x313,-0x13e)+sender[_0x5f09b6(0xcd4,0xcf9,0x473,0x776)]('@')[-0x11e7+-0x2357*-0x1+-0x8*0x22e]+(_0x5a3069(0xbfa,0xc60,0xfc8,0xabe)+_0x5f09b6(0x804,0x530,0x938,0x6bc)+_0x5f09b6(0x2e6,0x1e1,0x2e,0x569)+_0x5a3069(0x88,0x446,0x578,0x298)+_0x5f09b6(-0x55c,0x404,-0x67c,-0x104)+'verifikasi'+'\x20akun\x20kamu'+_0x5a3069(0xc43,0x734,0xcc8,0x1190)+'dahulu\x20den'+_0x5f09b6(-0x677,-0x69c,0x191,-0x112)+_0x5f09b6(0xbf4,0x67a,0x7ef,0x742)+_0x5a3069(0x821,0xadc,0xcc6,0xb8a)+_0x5a3069(0xbba,0x538,0x724,0x629)+_0x5f09b6(0x90a,0x56f,0x61a,0x7b9)),'©\x20'+ownername,gaklopo,{'quoted':fgclink2,'contextInfo':{'mentionedJid':[sender]}});}const sendTroli=async _0x4e030e=>{const _0x427cea={};_0x427cea[_0x2bb676(0xd8a,0x61b,0xc07,0x89b)]=_0x578f51(0x64a,0x475,0xf9,0x2e7)+_0x578f51(0x8ca,0x746,0xdf5,0x44b),_0x427cea[_0x2bb676(0xb21,0x3ee,0x8c5,0x8dd)]='ZEEONE\x20OFC',_0x427cea[_0x2bb676(0x83f,0xed9,0xda9,0xc9a)]=_0x2bb676(0x639,0x7c0,-0xfa,0x3ec)+_0x2bb676(0xdcb,0xbe9,0x117d,0xcb8)+_0x2bb676(0xc77,0xa58,0xc03,0x947),_0x427cea[_0x2bb676(0x9e9,0x1009,0x9df,0xda2)]=_0x578f51(0x283,0x7a3,0x76b,0x5cf)+_0x578f51(0x562,0x481,0x213,0x18a)+_0x578f51(0x776,0x210,0xc05,0xc84)+_0x578f51(0x403,0x435,0x4cb,0x8ea)+_0x2bb676(0x33e,0xa3d,0x9c4,0x793);const _0x5a2bc5=_0x427cea;let _0x2afdc5=fs['readFileSy'+'nc'](_0x578f51(0x271,0x228,-0x2f7,0x5c2)+thumbnail);imeu=await alpha[_0x578f51(0xae4,0x845,0x793,0xd0a)+_0x2bb676(0x5bf,0x15c,0x898,0x586)](_0x5a2bc5['rmlNa'],_0x2afdc5,image),imeg=imeu['message'][_0x2bb676(0x6a4,0xa9a,0x8e7,0x9b1)+'ge'];function _0x578f51(_0x3e4bd3,_0x595ea4,_0x2bf338,_0x1fe400){return _0x5f09b6(_0x2bf338,_0x595ea4-0xa4,_0x2bf338-0x16c,_0x3e4bd3-0x31f);}function _0x2bb676(_0x234163,_0x5f9361,_0x332f37,_0x3d9226){return _0x5f09b6(_0x234163,_0x5f9361-0xfd,_0x332f37-0x166,_0x3d9226-0x5af);}const _0x47ab99={};_0x47ab99[_0x2bb676(0x834,0x255,0xa05,0x4a7)+_0x2bb676(0x690,0x9ae,0x602,0x810)]=0x3,_0x47ab99[_0x2bb676(0xb6b,0xdc9,0xa4c,0xebf)+'d']=!![];const _0x293329={};_0x293329[_0x2bb676(0x6ca,-0x36,0x7d8,0x3f0)]=fgif,_0x293329['contextInf'+'o']={},res=await alpha[_0x2bb676(0xa9d,0x1197,0x909,0xd74)+_0x2bb676(0x619,0xc7b,0x9dd,0x995)+_0x2bb676(0xf18,0xbd2,0x8e2,0xda3)](from,{'orderMessage':{'orderId':_0x578f51(0x5b5,0xa24,0xb21,0x55e)+_0x578f51(0x8d7,0x6ef,0x992,0x9cc),'thumbnail':fs[_0x2bb676(0x9e7,0x803,0xbdc,0x69c)+'nc'](_0x578f51(0x271,0x28c,-0x246,0x10)+thumbnail),'itemCount':0x7e5,'status':'INQUIRY','surface':_0x2bb676(0xdf,0x861,0x8b3,0x634),'orderTitle':_0x5a2bc5[_0x2bb676(0xb11,0x642,0xbef,0x8dd)],'message':_0x4e030e,'sellerJid':_0x5a2bc5[_0x2bb676(0x976,0x1137,0x8ab,0xc9a)],'token':_0x5a2bc5[_0x2bb676(0x1342,0xe18,0xbdb,0xda2)],'contextInfo':_0x47ab99}},_0x293329),alpha[_0x2bb676(0xad1,0xa90,0xb9f,0xe6a)+_0x578f51(0x2f6,-0x285,0x574,0x898)](res);},sendTroli2=async _0x118717=>{const _0x3cb1af={};_0x3cb1af['hoDik']='0@s.whatsa'+_0x48314f(0x70c,0xc4c,0x4f1,0xbd9),_0x3cb1af[_0x48314f(0x48b,0x96a,0x72a,0x307)]=_0x48314f(0x3f7,0x6e5,0x6b2,0x785)+_0x4b1540(0xf3f,0x7bb,0xe22,0x9cd),_0x3cb1af[_0x48314f(0x9d3,0x4d2,0xd02,0x685)]=_0x48314f(0x5e1,0xaad,0x98a,0x77),_0x3cb1af[_0x48314f(-0x36,-0x1f2,-0x393,0x1f)]=_0x4b1540(0x69b,0x6de,0x40b,0x49a),_0x3cb1af[_0x4b1540(0x5a3,0xab1,0xeda,0x9ad)]='ZEEONE\x20OFC',_0x3cb1af[_0x48314f(0x6c4,0x63f,0x978,0x3c1)]='6288743504'+_0x4b1540(0xe16,0x8fc,0xe97,0xb1e)+_0x48314f(0x4f9,0x6e2,0xa15,0x868),_0x3cb1af[_0x48314f(0x6c0,0x6b2,0x838,0x90d)]=_0x4b1540(0x62a,0x520,0xcf,0x379)+'4W5fYrjbea'+_0x48314f(0x5b8,0x694,0x4e3,0x945)+_0x48314f(0x245,0x4e8,0x263,-0xf6)+'0FGwkw==',_0x3cb1af[_0x48314f(0x837,0xd7c,0x94b,0x6f0)]=_0x48314f(0x919,0xa0e,0xc92,0x79d);function _0x48314f(_0x57716a,_0x2927f4,_0x321b29,_0x27dfba){return _0x5a3069(_0x57716a-0xa,_0x2927f4-0x12e,_0x57716a- -0x568,_0x2927f4);}_0x3cb1af[_0x48314f(0xaae,0xf99,0xb64,0xcea)]=_0x4b1540(0xb20,0xbf4,0x732,0xbc5);const _0x189208=_0x3cb1af;let _0x467f2c=fs[_0x48314f(0x24e,-0x2c1,0x6ed,-0x2fd)+'nc'](_0x48314f(0xb3,-0x4b6,0x9b,0x49)+thumbnail);imeu=await alpha[_0x4b1540(0xe0a,0x1028,0x725,0xbda)+'sage'](_0x189208['hoDik'],_0x467f2c,image),imeg=imeu[_0x4b1540(0x7c9,0xadb,0x10eb,0xc39)][_0x48314f(0x563,0x6f2,0x1a2,0x7b7)+'ge'];function _0x4b1540(_0x56beb3,_0x11d37e,_0x5c7632,_0x4f670b){return _0x5f09b6(_0x5c7632,_0x11d37e-0x10a,_0x5c7632-0x88,_0x4f670b-0x415);}const _0xb13760={};_0xb13760[_0x48314f(0x59,-0x393,0x311,0x5aa)+_0x48314f(0x3c2,0x75f,0x6c5,0xe0)]=0x3,_0xb13760[_0x4b1540(0xecb,0xd05,0x7dc,0xd25)+'d']=!![];const _0xe7366e={};_0xe7366e['quoted']=fgif,_0xe7366e[_0x4b1540(0x520,0x970,0x888,0x70b)+'o']={},res=await alpha[_0x4b1540(0xe14,0xe5e,0x1164,0xbda)+_0x48314f(0x547,0x6e6,0x190,0x6e2)+_0x48314f(0x955,0x586,0x837,0xe02)](from,{'orderMessage':{'orderId':_0x189208[_0x4b1540(0x95f,0xb25,0x46b,0x73f)],'thumbnail':fs['readFileSy'+'nc'](_0x4b1540(0x127,0x247,0x655,0x367)+thumbnail),'itemCount':0x7e5,'status':_0x189208['iaAzv'],'surface':_0x189208[_0x4b1540(0x1a7,0x23b,0x86,0x27e)],'orderTitle':_0x189208[_0x48314f(0x6f9,0xb71,0x502,0xb87)],'message':_0x118717,'sellerJid':_0x189208[_0x48314f(0x6c4,0xa6c,0x4ee,0x484)],'token':_0x189208[_0x4b1540(0x9a6,0x794,0x5ec,0x974)],'totalAmount1000':_0x189208['dJtJH'],'totalCurrencyCode':_0x189208[_0x48314f(0xaae,0x84f,0xad9,0x611)],'contextInfo':_0xb13760}},_0xe7366e),alpha[_0x48314f(0xa1c,0x8a5,0xdcd,0x6d2)+'sage'](res);},sendKatalog2=async _0x52a2b8=>{const _0x1ade35={};_0x1ade35[_0x2c7356(0x235,0x664,0x789,0x351)]='0@s.whatsa'+_0x2c7356(0x577,0x961,0x6d3,0x249),_0x1ade35[_0x4c62d3(0x6e2,0x778,0x91d,0x6dc)]='3595319159'+_0x4c62d3(0xb63,0x949,0x880,0xce2),_0x1ade35[_0x4c62d3(0x1004,0xe74,0x96f,0xc73)]=_0x2c7356(0x54e,0x55a,0x4b7,0xb7),_0x1ade35[_0x4c62d3(0x96c,0x618,0x4a9,0x7d6)]=_0x2c7356(0x5cd,0x4e0,0x4ba,0x829)+_0x2c7356(0x2ed,0x21a,0x271,0x6b6)+'1919';const _0x2e687d=_0x1ade35;let _0x4507bb=fs[_0x2c7356(0xb9,-0x34f,-0xa,-0x3c5)+'nc'](_0x4c62d3(0xba6,0xa25,0x5df,0x67c)+thumbnail);imeu=await alpha[_0x2c7356(0x791,0x4ad,0x87a,0xb27)+'sage'](_0x2e687d[_0x2c7356(0x235,0x54d,0x41e,0x679)],_0x4507bb,image,{'thumbnail':_0x4507bb});function _0x4c62d3(_0x3c21f8,_0x1e9a4a,_0x8e01cb,_0x2da447){return _0x5f09b6(_0x1e9a4a,_0x1e9a4a-0xf7,_0x8e01cb-0x14c,_0x2da447-0x72a);}imeg=imeu[_0x2c7356(0x7f0,0x737,0x28d,0x657)][_0x2c7356(0x3ce,-0x115,0x59c,0x68d)+'ge'];const _0x2a68bb={};_0x2a68bb[_0x4c62d3(0x542,0x5b5,0x80a,0x94c)+'ge']=imeg,_0x2a68bb[_0x2c7356(-0x22d,0x298,-0xa8,-0xc9)]=_0x2e687d[_0x4c62d3(0xb78,0x5d0,0x779,0x6dc)],_0x2a68bb[_0x2c7356(0x749,0xa9c,0x7e3,0x3a4)]=_0x4c62d3(0xf85,0xf5a,0xb15,0xdef)+'OT',_0x2a68bb[_0x4c62d3(0x707,0x504,0xc09,0x986)+'n']=_0x52a2b8,_0x2a68bb['currencyCo'+'de']=_0x2e687d['ixybK'],_0x2a68bb['priceAmoun'+_0x4c62d3(0x1028,0xf3c,0xbfe,0xbc1)]=_0x2e687d[_0x4c62d3(0x44f,0xcc2,0x39a,0x7d6)],_0x2a68bb[_0x4c62d3(0x3cb,0x592,0x6d1,0x94c)+'geCount']=0x1;const _0x5d5e6e={};_0x5d5e6e['forwarding'+'Score']=0x3e7,_0x5d5e6e['isForwarde'+'d']=!![];const _0x17162f={};_0x17162f[_0x4c62d3(0x13a5,0x1124,0xe00,0xfe4)]=_0x2a68bb,_0x17162f[_0x4c62d3(0xa62,0x926,0xdb6,0xe17)+_0x4c62d3(0xe5f,0xa16,0xf19,0xa64)]=_0x2c7356(-0x1f7,-0x5c3,0x1a7,-0x200)+_0x4c62d3(0xcef,0xaea,0xda2,0xe33)+_0x4c62d3(0xb60,0xc95,0xe16,0xac2),_0x17162f[_0x4c62d3(0xa13,0x9b5,0x9f3,0xa20)+'o']=_0x5d5e6e;const _0x9e162f={};_0x9e162f[_0x2c7356(0x499,0x7a3,0xc1,0x556)+_0x4c62d3(0x1ac,0x9bb,0x637,0x701)]=_0x17162f;const _0x4ffcb3={};_0x4ffcb3[_0x2c7356(-0x1f3,0x42,-0x1c2,-0xbb)]=mek,res=await alpha[_0x2c7356(0x791,0xad5,0xbc8,0x415)+'sageFromCo'+_0x4c62d3(0xac9,0x141c,0x9dc,0xf1e)](from,_0x9e162f,_0x4ffcb3);function _0x2c7356(_0xf44eaf,_0x45adfa,_0x1946bc,_0x31e188){return _0x5f09b6(_0x45adfa,_0x45adfa-0x141,_0x1946bc-0x150,_0xf44eaf- -0x34);}alpha['relayWAMes'+_0x2c7356(-0x5d,0x2c2,-0xdb,-0x428)](res);},sendKatalog3=async _0x3d4817=>{const _0x33aaa8={};_0x33aaa8[_0xf6375e(0x2a3,0x182,0x663,-0x18b)]=_0x152229(0x930,0xb4e,0x58f,0x886)+_0xf6375e(0xcdb,0x76b,0x7e2,0x591),_0x33aaa8['wgiqg']=_0xf6375e(0x903,0x64e,0x143,0x85c),_0x33aaa8['nLGIe']=_0x152229(-0x6d,0x24e,0x5af,0x4d2),_0x33aaa8[_0x152229(0x881,0x7c1,0x843,0x8d4)]=_0xf6375e(-0x260,-0x10,-0x490,0x5a3)+_0xf6375e(0x37b,0x8bc,0xb62,0x507)+_0x152229(0xd11,0xdbd,0xc73,0x988);const _0x3ba532=_0x33aaa8;let _0x124c05=fs['readFileSy'+'nc']('./image/'+thumbnail);imeu=await alpha[_0xf6375e(0x41b,0x978,0x739,0xe99)+_0x152229(0x44,0x569,0x543,0x5c7)](_0x152229(0xbf0,0xe67,0x47f,0x91b)+_0x152229(0xb42,0x709,0xcc7,0xb9b),_0x124c05,image,{'thumbnail':_0x124c05}),imeg=imeu['message'][_0x152229(0xddf,0x513,0xf5c,0x9f2)+'ge'];const _0x1cb941={};_0x1cb941[_0x152229(0xdbd,0xdbc,0x57f,0x812)+'ge']=imeg,_0x1cb941[_0xf6375e(-0x3e0,-0x46,-0x239,-0x186)]=_0x3ba532[_0xf6375e(0x60d,0x182,-0xe5,-0xd8)],_0x1cb941[_0x152229(0xf69,0x102b,0x85b,0xd6d)]='ALL\x20MENU\x20B'+'OT',_0x1cb941[_0xf6375e(0x7ff,0x40f,0x597,-0x15a)+'n']=_0x3d4817,_0x1cb941['currencyCo'+'de']=_0xf6375e(0xaa8,0x735,0x73c,0x8cc),_0x1cb941[_0xf6375e(0x4a5,0x51d,0x7c6,0x855)+_0xf6375e(0x5a1,0x64a,0x8eb,0x53e)]=_0x3ba532[_0xf6375e(0x6a5,0x7ac,0xc3a,0xb4b)],_0x1cb941[_0x152229(0x786,0x79a,0xddf,0x93e)+_0x152229(0x7c6,0x870,0x86a,0x6a5)]=_0x3ba532[_0x152229(0x490,0x419,0x5c4,0x958)],_0x1cb941[_0xf6375e(0x160,0x3d5,0x78d,0x6ae)+_0x152229(0x726,0x473,0x798,0x6e0)]=0x1;const _0x273bff={};_0x273bff[_0xf6375e(-0x2ed,0xab,-0x28b,0x4ba)+_0x152229(0xad1,0x53b,0x658,0x851)]=0x3e7,_0x273bff[_0xf6375e(0x6a6,0xac3,0xffd,0x8eb)+'d']=!![];const _0x27bf40={};_0x27bf40[_0xf6375e(0x500,0xa6d,0x73c,0xfbc)]=_0x1cb941,_0x27bf40[_0xf6375e(0xb82,0x8a0,0x91b,0x57d)+'nerJid']=_0x3ba532[_0x152229(0xbeb,0x5f3,0x955,0x8d4)],_0x27bf40[_0x152229(0xb86,0xe5c,0x506,0x8e6)+'o']=_0x273bff;function _0xf6375e(_0x169ee7,_0x2c22ab,_0x199006,_0x250327){return _0x5f09b6(_0x169ee7,_0x2c22ab-0x97,_0x199006-0xc4,_0x2c22ab-0x1b3);}const _0x482935={};_0x482935[_0xf6375e(0x959,0x680,0x688,0x7cb)+_0x152229(0x87b,0x88f,0x79c,0x5c7)]=_0x27bf40;const _0x4458cf={};_0x4458cf[_0xf6375e(0x4d5,-0xc,0x136,0x52a)]=mek;function _0x152229(_0x5b0da6,_0x2ee2d2,_0x2655c5,_0x56af12){return _0x5a3069(_0x5b0da6-0xf3,_0x2ee2d2-0x52,_0x56af12- -0xd9,_0x2655c5);}res=await alpha['prepareMes'+_0x152229(0x6e4,0xc97,0x7e5,0x9d6)+_0xf6375e(0x786,0x9a7,0xd0b,0x60f)](from,_0x482935,_0x4458cf),alpha['relayWAMes'+'sage'](res);},sendKatalog=async(_0x554cc7,_0x55ee82,_0x5f02b4)=>{const _0x32453b={};_0x32453b[_0x399732(0x7c2,-0x7d,0x232,0x207)]=_0x399732(0x684,0xbb1,0x761,0xcd3)+_0x50051d(0x4c4,0xc33,0x846,0x642);function _0x399732(_0x2b3c3c,_0x26b02d,_0x11f02d,_0x1cc4c3){return _0x5f09b6(_0x2b3c3c,_0x26b02d-0x1bf,_0x11f02d-0xc0,_0x11f02d-0x436);}function _0x50051d(_0x38741d,_0x5c7cd5,_0x5c54c0,_0x1617fb){return _0x5f09b6(_0x5c7cd5,_0x5c7cd5-0x13c,_0x5c54c0-0x1c4,_0x5c54c0-0x29b);}_0x32453b[_0x399732(0x959,0x45a,0x3c5,0x70a)]=_0x50051d(0x6f4,0x431,0x531,-0x54)+'00587',_0x32453b[_0x50051d(0x47a,0x365,0x89e,0x4c4)]=_0x399732(0x816,0xe78,0x9b8,0x40d),_0x32453b[_0x50051d(0xdba,0xa47,0x86e,0xaa0)]=_0x399732(0x5e4,-0x1f5,0x318,0x30c),_0x32453b['ZffIw']=_0x399732(0x36b,0x5e8,0x273,-0x2cb)+'7326@s.wha'+_0x50051d(0x772,0x433,0x633,0x653);const _0x5b8919=_0x32453b;let _0x2fa398=fs[_0x50051d(0x7a8,-0x210,0x388,0x498)+'nc'](_0x399732(0x45d,0x49e,0x388,0x680)+thumbnail);imeu=await alpha['prepareMes'+'sage'](_0x5b8919[_0x399732(0x13b,0x1ac,0x232,0x3f)],_0x2fa398,image,{'thumbnail':_0x2fa398}),imeg=imeu[_0x399732(0x7eb,0x11a4,0xc5a,0x1210)][_0x399732(0x722,0x7e1,0x838,0x427)+'ge'];const _0x165a29={};_0x165a29[_0x399732(0x671,0x705,0x658,0x850)+'ge']=imeg,_0x165a29[_0x399732(-0x27e,0xf6,0x23d,0x6a8)]=_0x5b8919[_0x50051d(0x659,-0x119,0x22a,-0x32f)],_0x165a29['title']=_0x554cc7,_0x165a29[_0x50051d(0x4a1,0x290,0x4f7,0x878)+'n']=_0x5f02b4,_0x165a29[_0x50051d(0x332,0x884,0x797,0xa90)+'de']=_0x5b8919[_0x399732(0xa52,0xf80,0xa39,0x548)],_0x165a29[_0x399732(0x31b,0xa87,0x7a0,0xd53)+_0x399732(0x718,0x7fc,0x8cd,0xa2e)]=_0x55ee82,_0x165a29[_0x399732(0x282,0x97f,0x784,0x594)+_0x50051d(0x83d,0x410,0x350,0x615)]=_0x5b8919[_0x399732(0x76c,0x939,0xa09,0x598)],_0x165a29[_0x50051d(0x4a9,0x630,0x4bd,0x93a)+_0x399732(0x95f,0x178,0x526,0x37c)]=0x1;const _0x29cc88={};_0x29cc88[_0x399732(-0x33,-0x26c,0x32e,-0xa7)+'Score']=0x3,_0x29cc88[_0x50051d(0x69b,0x10cf,0xbab,0xbdc)+'d']=!![];const _0x1ceb13={};_0x1ceb13['product']=_0x165a29,_0x1ceb13[_0x399732(0xbeb,0x100b,0xb23,0xf7e)+'nerJid']=_0x5b8919[_0x50051d(-0x70,0x523,0x2d0,0x57b)],_0x1ceb13[_0x399732(0xb33,0x763,0x72c,0x75b)+'o']=_0x29cc88;const _0x7882f2={};_0x7882f2['productMes'+'sage']=_0x1ceb13;const _0x1fdfd8={};_0x1fdfd8['quoted']=fgif,_0x1fdfd8[_0x399732(0xa9a,0xb72,0x72c,0x95d)+'o']={},res=await alpha['prepareMes'+'sageFromCo'+_0x50051d(0xc33,0x653,0xa8f,0xbe3)](from,_0x7882f2,_0x1fdfd8),alpha[_0x50051d(0xd4a,0x872,0xb56,0x1039)+'sage'](res);},sendList=async _0x425884=>{const _0x1ef896={};_0x1ef896[_0x4854f3(0x54a,-0x2a,0x859,0xac8)]=_0x4854f3(0x1d9,0x618,-0x185,0x114)+'E',_0x1ef896[_0x104042(0x59b,0x5c1,0x4da,0x868)]=_0x4854f3(0x74,0x54b,-0x2e4,0x26b)+_0x104042(0x65a,0x114,0xb3f,0x9a8),_0x1ef896[_0x4854f3(0x92e,0xbc3,0x8f2,0x9fa)]='🐣\x20All\x20menu'+_0x4854f3(0xbb,0x14,-0x4b1,-0x24e),_0x1ef896[_0x104042(0x5b3,0xa2e,0xb26,0x5e)]='_choose\x20th'+_0x104042(0xbaf,0xea1,0xb28,0xe92)+'want\x20to\x20us'+'e\x20the\x20allm'+_0x4854f3(0x2ee,-0x1d3,-0x1cc,0x427)+'d_',_0x1ef896[_0x4854f3(0x2ff,0x88c,0x5e3,-0xe0)]=_0x104042(0x38e,0x849,0x123,0x557)+_0x4854f3(0x67,0x15a,-0x249,-0x36d),_0x1ef896[_0x104042(0xa95,0x621,0x9dc,0xcb5)]=_0x104042(0x423,-0x145,0x548,0x5c)+'nu',_0x1ef896['PTqJz']=_0x4854f3(0x7f,-0x3d8,0x57,0x225)+_0x104042(0x68c,0x608,0x791,0x62c),_0x1ef896[_0x4854f3(0x26e,0x537,0x15c,0x75f)]=_0x4854f3(0x4cd,0xa02,0x5ed,0x5ca),_0x1ef896[_0x104042(0x7ba,0xb44,0x4a8,0x7f9)]=_0x104042(0x6ff,0x5f4,0x79b,0x247)+_0x104042(0xbaf,0xa45,0xa8d,0x1130)+_0x104042(0x76d,0x7cb,0x242,0x2d2)+_0x104042(0xcf4,0xe83,0xa44,0xf1a)+_0x104042(0xbff,0xc80,0xbc2,0x73f)+'and_',_0x1ef896[_0x4854f3(0x16c,0x8d,0x3c4,-0xa0)]=_0x104042(0x786,0x768,0x353,0x903)+'u',_0x1ef896[_0x4854f3(0xa4e,0xd74,0xa14,0x6aa)]=_0x4854f3(0x3f0,0x7c2,-0x91,0x2f5)+_0x4854f3(0x8a0,0x736,0x488,0x4a7)+_0x4854f3(0x45e,-0x14a,0x781,0x322)+'e\x20the\x20conv'+_0x4854f3(0x63a,0xa91,0x165,0x11d)+_0x104042(0x81a,0x946,0xa22,0xd5c),_0x1ef896[_0x104042(0x305,0x6c2,0x290,-0xde)]=_0x104042(0x38e,0x4a8,0x118,0x44)+_0x4854f3(0xa07,0xb01,0xd9f,0xabc),_0x1ef896['rYcKb']='funmenu',_0x1ef896[_0x4854f3(0x211,0xc8,-0x314,0x42c)]=_0x104042(0x6ff,0xb2c,0x97f,0x683)+_0x104042(0xbaf,0x9b5,0x80f,0xf46)+_0x104042(0x76d,0x544,0xba8,0xc6e)+'e\x20the\x20funm'+_0x104042(0x5fd,0x6af,0xa08,0x19c)+'d_',_0x1ef896[_0x104042(0x90e,0x3be,0xa01,0x489)]=_0x104042(0x38e,0x446,-0x1c5,0x5cc)+_0x4854f3(0x672,0xb31,0xb85,0x561),_0x1ef896[_0x4854f3(0x713,0x993,0x355,0x75b)]=_0x104042(0x402,-0x1d,0x41e,0x5a2),_0x1ef896['DvPNE']=_0x4854f3(0x3f0,0x1fe,-0xe0,0x87e)+_0x104042(0xbaf,0x78e,0xe9f,0x73d)+'want\x20to\x20us'+_0x104042(0xdb3,0x1069,0xcd1,0x103b)+_0x4854f3(0x734,0x8fe,0x55a,0x9eb)+'and_',_0x1ef896[_0x4854f3(0x7e0,0x961,0x9c8,0x9b0)]=_0x104042(0x38e,-0x18,0x4ac,0x14a)+'e-6',_0x1ef896['aCxAd']=_0x104042(0x38e,0x67b,0x293,0x225)+_0x104042(0xc0c,0x694,0x8a7,0xd91),_0x1ef896[_0x4854f3(0x775,0x5c6,0x83f,0x86b)]=_0x104042(0x666,0x99f,0x308,0x92d),_0x1ef896[_0x4854f3(0x957,0x5e5,0x99f,0x4b4)]=_0x4854f3(0x3f0,0x33a,0x76f,0x2ba)+'is\x20if\x20you\x20'+_0x104042(0x76d,0x40f,0x538,0x911)+_0x104042(0x85d,0xb92,0x4ed,0x44f)+_0x4854f3(0x734,0x954,0x8db,0x6d3)+'and_',_0x1ef896[_0x104042(0x4bd,0x707,0x775,0x9b6)]=_0x104042(0x38e,0x59,0x41a,0x72e)+_0x104042(0x433,0x9a0,0x76a,0x6eb),_0x1ef896[_0x4854f3(-0x4c,0x4e6,0xe0,-0x40d)]=_0x4854f3(0x54b,0x722,0x384,0x378)+'u',_0x1ef896[_0x4854f3(0x56c,0xa47,0x6a0,0x9d5)]='_choose\x20th'+_0x104042(0xbaf,0x723,0xb8d,0xe09)+'want\x20to\x20us'+_0x104042(0x39f,0x717,0x42e,0x121)+_0x4854f3(-0x6c,-0x380,-0x169,0x170)+_0x104042(0x81a,0xb44,0x363,0xb7a),_0x1ef896[_0x4854f3(0x439,0x2a5,0x581,0x9ba)]=_0x4854f3(0x7f,0x249,-0x114,0x254)+_0x104042(0x61a,0x18b,0x884,0x91b),_0x1ef896[_0x104042(0x4ae,0xbd,0x20c,0x8f9)]=_0x4854f3(0x65d,0xb84,0x381,0x862),_0x1ef896['xwKNb']='_choose\x20th'+'is\x20if\x20you\x20'+_0x4854f3(0x45e,0x2b9,-0xac,0x21c)+_0x4854f3(0x4ae,0x9a5,-0x8d,0x925)+'enu\x20comman'+'d_',_0x1ef896[_0x104042(0xc9f,0x763,0x113f,0xbac)]='Sub\x20Menu\x20k'+_0x104042(0x414,0x436,0xfc,0x409),_0x1ef896[_0x104042(0x849,0x764,0x819,0x80b)]=_0x104042(0x37c,0x89c,0x80,-0xf5),_0x1ef896[_0x4854f3(0xa0f,0xb90,0x79f,0xf1d)]='_choose\x20th'+_0x104042(0xbaf,0xdef,0x776,0x7ee)+_0x4854f3(0x45e,-0x1e,-0xc3,0x253)+_0x4854f3(0x2d4,0x6d7,-0x4d,0x368)+'acecan\x20com'+'mand_',_0x1ef896['MBKrI']=_0x104042(0x38e,0x1d9,0x4ac,0x474)+_0x4854f3(0x628,0x88f,0x4eb,0x2f7),_0x1ef896[_0x4854f3(-0x21,0x242,-0x460,-0x1d5)]='telegram\x20s'+_0x4854f3(0x2f2,0x7f6,-0x178,0x258),_0x1ef896[_0x4854f3(0x5a,0x39a,-0x3de,-0x434)]=_0x104042(0x38e,0x2eb,0x409,0x481)+_0x104042(0xc8e,0xf1d,0xa6c,0xcfd),_0x1ef896['SXbtH']='nsfw\x20menu',_0x1ef896[_0x104042(0x60b,0x543,0x946,0x782)]=_0x104042(0x38e,-0xa4,0x75a,0x1d3)+_0x104042(0xab7,0xfef,0xfd4,0xdfa),_0x1ef896[_0x4854f3(0x911,0xc78,0x9e3,0x634)]=_0x4854f3(0x188,-0x2bd,0x32,0x1c2)+'u',_0x1ef896[_0x104042(0xaf4,0xeeb,0xf58,0xc8a)]=_0x104042(0x6ff,0x191,0x617,0x34b)+_0x104042(0xbaf,0xdea,0xfbb,0xe30)+_0x4854f3(0x45e,0x4c3,0x438,0x1a6)+_0x4854f3(0x127,-0x46c,-0x39f,0x2f7)+'an\x20menu\x20co'+'mmand_',_0x1ef896[_0x104042(0x2ed,0x8b,0x16f,0x3ea)]='image\x20effe'+'ct',_0x1ef896[_0x4854f3(0x2ce,-0x121,0x16d,0x105)]=_0x4854f3(0x3f0,0x46e,0x1a6,-0x7d)+'is\x20if\x20you\x20'+_0x4854f3(0x45e,0x337,0x302,0x3d5)+_0x4854f3(-0x2a,0x328,-0x2b3,-0x142)+_0x104042(0x565,0x762,0x3a2,0x9ca)+'enu\x20comman'+'d_',_0x1ef896['kxCVe']='Sub\x20Menu\x20k'+_0x104042(0x72d,0xaaf,0xbde,0x822),_0x1ef896[_0x104042(0x45b,0x61a,-0xf,0x96a)]=_0x4854f3(0x3f0,0x5d2,-0x134,0x639)+'is\x20if\x20you\x20'+_0x104042(0x76d,0xbc8,0xaa0,0x509)+_0x4854f3(0x2d4,0x826,-0x1e1,0x195)+_0x4854f3(0x8c3,0x9dc,0xc6f,0x5c9)+'mmand_',_0x1ef896[_0x4854f3(0x6ce,0x250,0x6ae,0x33e)]='Sub\x20Menu\x20k'+_0x4854f3(0x26d,0x436,0x63a,-0x17f),_0x1ef896[_0x4854f3(0xa,-0x1ec,-0x3bb,0x35c)]='quotesmenu',_0x1ef896['jnslD']=_0x104042(0x6ff,0xb44,0x745,0x439)+_0x4854f3(0x8a0,0x615,0x323,0x83c)+_0x104042(0x76d,0xad6,0x817,0xbd3)+_0x104042(0xab5,0x8c0,0x7d1,0x7de)+_0x4854f3(0xa7b,0xc26,0xdae,0xf36)+_0x4854f3(0x4b9,0x2fd,-0xfd,0x5ba);function _0x104042(_0x2bd251,_0x4b39d4,_0x49efde,_0x26962f){return _0x5a3069(_0x2bd251-0x40,_0x4b39d4-0x1a4,_0x2bd251- -0x25b,_0x26962f);}_0x1ef896['aqVxh']=_0x4854f3(0x7f,0x447,0x13a,-0x101)+_0x4854f3(0x60,-0x246,-0x4fd,0x240),_0x1ef896[_0x104042(0xb9f,0xf62,0xcb6,0x95e)]=_0x4854f3(0x705,0x94b,0x9f7,0xbea),_0x1ef896[_0x104042(0x90f,0xa39,0x849,0xc57)]=_0x104042(0x6ff,0x2fd,0x358,0x2fb)+_0x4854f3(0x8a0,0x92c,0x395,0xadc)+'want\x20to\x20us'+_0x4854f3(0x879,0xc52,0x3d4,0x5a0)+_0x4854f3(0xce,-0x420,0x1cc,-0x17c)+_0x104042(0x443,0x98f,0x647,0x11c),_0x1ef896[_0x4854f3(0x83e,0xa90,0x89d,0x65c)]='Sub\x20Menu\x20k'+_0x4854f3(0x73,-0x3d7,-0x3ce,-0x266),_0x1ef896[_0x104042(0x480,0xa22,0x551,0xe4)]=_0x4854f3(0x3f0,0x29d,0x738,0x6d6)+_0x4854f3(0x8a0,0xc3d,0x430,0x387)+_0x4854f3(0x45e,0x912,0x9a4,0x1db)+_0x4854f3(0x99,-0x3b5,0x5c3,-0x1c4)+_0x104042(0x9fc,0x8cc,0xeba,0xe21)+_0x4854f3(0x50b,0x162,0x13,-0x56),_0x1ef896[_0x104042(0xad4,0x620,0xb5a,0xd2b)]=_0x104042(0x310,0x652,-0x24f,0x142)+'nu';function _0x4854f3(_0x5bfabb,_0x5d79b1,_0x4d293d,_0x58cd7c){return _0x5a3069(_0x5bfabb-0x19d,_0x5d79b1-0x51,_0x5bfabb- -0x56a,_0x58cd7c);}_0x1ef896[_0x104042(0x3ce,-0x6d,0x5ae,0x756)]=_0x4854f3(0x3f0,0x175,0xf9,0x876)+_0x104042(0xbaf,0x693,0xd1c,0x6f3)+'want\x20to\x20us'+'e\x20the\x20phot'+'ooxymenu\x20c'+'ommand_',_0x1ef896['zOXLH']=_0x104042(0x38e,0x399,0x703,0x8d9)+_0x4854f3(0x1cf,0x124,0x758,-0x1ac),_0x1ef896[_0x104042(0x4dc,0x2fc,0xa58,0x8aa)]=_0x4854f3(0x7bb,0x8ab,0x683,0x464),_0x1ef896[_0x4854f3(0xab6,0xe0d,0x809,0x776)]=_0x104042(0x6ff,0x920,0x768,0xc78)+_0x104042(0xbaf,0x732,0x7cd,0x940)+_0x104042(0x76d,0x280,0xa04,0x228)+_0x104042(0xceb,0x10c0,0xda2,0xb53)+'dmenu\x20comm'+_0x104042(0x443,0x12d,0x54b,0x13f),_0x1ef896[_0x104042(0x708,0x4bc,0x27d,0x410)]=_0x4854f3(0x7f,-0x3a2,-0x420,-0x46f)+_0x104042(0x58a,0x3d0,0x72,0x30e),_0x1ef896[_0x4854f3(0x772,0x6d4,0x596,0x874)]=_0x104042(0x665,0x39d,0xab1,0xaa6),_0x1ef896[_0x104042(0x560,0x308,0x966,0xa4a)]=_0x4854f3(0x3f0,0x6e1,-0xac,0x129)+'is\x20if\x20you\x20'+_0x104042(0x76d,0x6bf,0xae8,0x848)+_0x104042(0x430,0x81,0x109,0x4)+_0x104042(0xb09,0x8ca,0xd4a,0x779)+'mand_',_0x1ef896[_0x4854f3(0x8f6,0x84a,0x93a,0xcdc)]=_0x4854f3(0x623,0x9e2,0x6c6,0x940)+_0x4854f3(0x11d,-0x3d4,-0x313,0x420),_0x1ef896[_0x4854f3(0x976,0xa4d,0xa12,0x925)]=_0x104042(0x267,0x1b2,0x45e,-0x285)+_0x4854f3(0x9fc,0xc46,0x525,0x7ba)+'u\x20want\x20to\x20'+_0x4854f3(0x852,0x460,0x8e4,0x456)+_0x104042(0xb8b,0x994,0xb00,0xbbd)+'s\x20bot_',_0x1ef896[_0x4854f3(0xa0e,0xa6c,0xf4a,0x5fb)]=_0x4854f3(0x87f,0x39f,0x9ca,0xa46)+'e',_0x1ef896['gZzTN']=_0x4854f3(0x17c,0x4d8,0x59a,0x70b)+_0x4854f3(0x6bf,0x7c2,0x288,0x98e),_0x1ef896[_0x104042(0x8b0,0x9bf,0x723,0x546)]='Big\x20Thanks'+_0x4854f3(0x4f0,0x12b,-0x91,0xa65),_0x1ef896['lMDuJ']=_0x4854f3(-0xa8,-0xb3,-0x30b,0x3f5)+_0x4854f3(0x9fc,0x6b4,0x5ea,0xf1c)+_0x104042(0x2bc,0x1fd,-0x140,-0x2ee)+_0x4854f3(0x384,0x823,0x32d,0x70c)+_0x4854f3(0x2be,0x2fa,0x590,0x7f3)+'ributed\x20to'+_0x4854f3(0x425,0x1d5,0x726,0x953)+_0x4854f3(0x43d,0x4b3,0x639,-0x15e);const _0x37088a=_0x1ef896,_0xc1e62a={};_0xc1e62a[_0x104042(0xbeb,0x108a,0x939,0x1179)]=_0x104042(0xaa7,0xa30,0xdbe,0x895),_0xc1e62a[_0x104042(0x6ca,0x1fb,0x3ba,0x771)+'n']='_choose\x20th'+_0x4854f3(0x8a0,0xbfe,0x319,0x615)+_0x4854f3(0x45e,-0x111,-0xf6,-0x96)+_0x104042(0xc09,0x112f,0x7aa,0x951)+_0x104042(0xa43,0xfb2,0xd3e,0xd8b)+_0x4854f3(0x134,0xfe,0x3ef,0x514),_0xc1e62a[_0x104042(0x9bb,0x8e8,0xb18,0x48f)]='0';let _0x1322be=alpha[_0x4854f3(0x924,0x51a,0xa99,0x656)+'sageFromCo'+'ntent'](from,{'listMessage':{'title':_0x4854f3(0xbe,0x6c,-0x172,0x4a7)+'BOT','description':_0x4854f3(0x151,0x642,-0x3ab,-0x306)+sender[_0x4854f3(0x8d5,0x6fb,0x753,0x79c)]('@')[-0x418+0x757+-0x33f]+(_0x4854f3(0x8b2,0xcbb,0x53d,0x8f2)+_0x4854f3(0xe9,-0x398,-0x7d,-0x24d)+_0x104042(0xa5a,0x7e6,0x8de,0xc70)+_0x4854f3(0x92d,0xac9,0x4ce,0xabd)+_0x4854f3(0x935,0xae3,0x8ac,0x7d7)+_0x4854f3(0x534,0x83,0xaab,0x966)+_0x104042(0x7b9,0x5a0,0x68e,0x621)+_0x104042(0xb5e,0x97c,0x65c,0x94d)+_0x4854f3(0x8d,0x1ec,0x288,-0x6d)),'buttonText':_0x37088a['acVmp'],'footerText':'©\x20'+creator,'listType':_0x37088a['wkoTZ'],'sections':[{'title':_0x37088a[_0x104042(0xc3d,0xe34,0x106a,0x6a0)],'rows':[{'title':_0x4854f3(0x701,0x6e1,0x3f4,0x90b)+'ot','description':_0x37088a[_0x104042(0x5b3,0x552,0x679,0x77d)],'rowId':'0'}]},{'title':_0x37088a[_0x104042(0x60e,0x791,0x1aa,0x725)],'rows':[{'title':_0x37088a[_0x104042(0xa95,0x637,0x701,0xc59)],'description':_0x4854f3(0x3f0,0x49b,0x7a5,0x5d7)+_0x4854f3(0x8a0,0x70f,0x479,0x760)+_0x104042(0x76d,0x3b3,0x39b,0x598)+_0x104042(0x6f4,0x929,0x5a2,0x325)+_0x4854f3(0xa5c,0x5f8,0x7ce,0x873)+'ommand_','rowId':'0'}]},{'title':_0x37088a['PTqJz'],'rows':[{'title':_0x37088a[_0x4854f3(0x26e,0x39,0x550,-0x297)],'description':_0x37088a['DnlUy'],'rowId':'0'}]},{'title':_0x104042(0x38e,0x71,0x785,0x488)+'e-3','rows':[{'title':_0x37088a['FAkeb'],'description':_0x37088a[_0x104042(0xd5d,0x859,0xdaf,0xb40)],'rowId':'0'}]},{'title':_0x37088a[_0x4854f3(-0xa,0x257,0x2a,-0x59b)],'rows':[{'title':_0x37088a[_0x104042(0xbee,0x11a4,0x710,0xe88)],'description':_0x37088a[_0x4854f3(0x211,-0x193,-0xdf,0x3c8)],'rowId':'0'}]},{'title':_0x37088a['LzGjn'],'rows':[{'title':_0x37088a[_0x4854f3(0x713,0xc96,0x3f1,0xa29)],'description':_0x37088a[_0x104042(0x8ca,0xe66,0xe61,0x58d)],'rowId':'0'}]},{'title':_0x37088a[_0x4854f3(0x7e0,0xb27,0x9f9,0x2ba)],'rows':[_0xc1e62a]},{'title':_0x37088a[_0x4854f3(-0x26,0xcf,0x261,0x62)],'rows':[{'title':_0x37088a['mjZNS'],'description':_0x37088a[_0x4854f3(0x957,0x7ca,0xf02,0x6f9)],'rowId':'0'}]},{'title':_0x37088a[_0x4854f3(0x1ae,-0xc6,0x51d,0x201)],'rows':[{'title':_0x37088a[_0x104042(0x2c3,0x64b,0x1a3,0x620)],'description':_0x37088a[_0x104042(0x87b,0x545,0x6b8,0xbaa)],'rowId':'0'}]},{'title':_0x37088a[_0x4854f3(0x439,0x9c1,0x3e9,0x419)],'rows':[{'title':_0x37088a[_0x104042(0x4ae,0x24f,0x612,0x4e0)],'description':_0x37088a['xwKNb'],'rowId':'0'}]},{'title':_0x37088a[_0x104042(0xc9f,0xfdc,0xfac,0x121c)],'rows':[{'title':_0x37088a[_0x104042(0x849,0x37a,0x84c,0x86f)],'description':'_choose\x20th'+_0x104042(0xbaf,0x9fb,0xfba,0xfe9)+_0x104042(0x76d,0x2ef,0x50f,0x7c0)+'e\x20the\x20upme'+'nu\x20command'+'_','rowId':'0'}]},{'title':'Sub\x20Menu\x20k'+'e-11','rows':[{'title':_0x4854f3(0x86c,0xad5,0xd44,0xbd0)+'n','description':_0x37088a[_0x104042(0xd1e,0x88b,0xc16,0x1017)],'rowId':'0'}]},{'title':_0x37088a[_0x4854f3(0x26f,-0x26,0x52,-0x30a)],'rows':[{'title':_0x37088a[_0x104042(0x2ee,0x362,0x408,0x447)],'description':_0x104042(0x6ff,0xbfa,0xbbd,0x207)+_0x104042(0xbaf,0x73e,0xa0c,0xb89)+_0x4854f3(0x45e,0x29f,-0xf2,-0x5)+_0x104042(0x901,0x4e8,0xa3e,0x9c5)+'stc\x20comman'+'d_','rowId':'0'}]},{'title':_0x37088a[_0x104042(0x369,0x18d,0x617,-0x1ee)],'rows':[{'title':_0x37088a[_0x104042(0x437,0x515,0x37d,0x4a0)],'description':_0x4854f3(0x3f0,0x593,-0x136,0x1c)+'is\x20if\x20you\x20'+_0x104042(0x76d,0xa28,0x745,0xc9e)+_0x104042(0x6b5,0x37f,0x3d5,0x95f)+_0x104042(0x4d5,0x5e7,-0xdc,0x437)+_0x4854f3(0x266,0xd3,0x4e8,-0x260),'rowId':'0'}]},{'title':_0x37088a[_0x104042(0x60b,0x6d2,0x69f,0x4e7)],'rows':[{'title':_0x37088a[_0x104042(0xc20,0x93c,0x948,0xac6)],'description':_0x37088a[_0x4854f3(0x7e5,0x4c8,0x8a5,0x52c)],'rowId':'0'}]},{'title':_0x4854f3(0x7f,0x493,0x7,0x4dc)+'e-15','rows':[{'title':_0x37088a[_0x104042(0x2ed,0x807,0x462,0x877)],'description':_0x37088a[_0x4854f3(0x2ce,0x625,-0x22f,0x610)],'rowId':'0'}]},{'title':_0x37088a['kxCVe'],'rows':[{'title':_0x4854f3(0x96,0x4c9,0x39b,-0x488)+'n','description':_0x37088a['gTzng'],'rowId':'0'}]},{'title':_0x37088a[_0x4854f3(0x6ce,0xc55,0x285,0x684)],'rows':[{'title':_0x37088a[_0x4854f3(0xa,-0xe9,0x5d,0x480)],'description':_0x37088a[_0x4854f3(0x795,0x50f,0xcac,0x255)],'rowId':'0'}]},{'title':_0x37088a['aqVxh'],'rows':[{'title':_0x37088a[_0x4854f3(0x890,0x8a4,0xb36,0x958)],'description':_0x37088a['EwYWQ'],'rowId':'0'}]},{'title':_0x37088a[_0x4854f3(0x83e,0x2cb,0x5e2,0x3af)],'rows':[{'title':_0x104042(0x4a6,0x525,0x8da,0x63e)+'u','description':_0x37088a[_0x104042(0x480,0x417,0x1e5,-0x79)],'rowId':'0'}]},{'title':_0x4854f3(0x7f,0x48,-0x511,-0x20)+_0x4854f3(0xa29,0xc19,0xaea,0x6da),'rows':[{'title':_0x37088a[_0x104042(0xad4,0x77a,0x5ac,0x55b)],'description':_0x37088a['UxjDq'],'rowId':'0'}]},{'title':_0x37088a[_0x104042(0x4d0,0x8ff,-0xa5,0x7a7)],'rows':[{'title':_0x37088a[_0x4854f3(0x1cd,-0x11,0x722,0x45e)],'description':_0x37088a[_0x4854f3(0xab6,0xb26,0xba7,0xc7c)],'rowId':'0'}]},{'title':_0x37088a[_0x4854f3(0x3f9,-0xc3,0x7f9,0x241)],'rows':[{'title':_0x37088a[_0x104042(0xa81,0x8f6,0xc62,0xe3f)],'description':_0x37088a['ARENq'],'rowId':'0'}]},{'title':_0x37088a['nIKnE'],'rows':[{'title':_0x4854f3(0x87f,0x610,0xb31,0x856)+'e','description':_0x37088a['JJdSH'],'rowId':_0x37088a[_0x104042(0xd1d,0xd0e,0xbe7,0x112e)]}]},{'title':_0x37088a[_0x4854f3(0x2a2,-0x286,0x6c6,0x853)],'rows':[{'title':_0x37088a[_0x104042(0x8b0,0x763,0x470,0x6b0)],'description':_0x37088a[_0x104042(0x26d,-0x10,0x540,0x35e)],'rowId':'0'}]}]}},{'quoted':fgclink2,'contextInfo':{'mentionedJid':[sender]}});const _0xd6cffe={};_0xd6cffe[_0x104042(0xa5e,0x6da,0x68c,0xa88)]=!![],alpha[_0x104042(0xd29,0xb53,0xeb8,0xbd2)+_0x4854f3(0x136,-0x403,-0x3a7,0x2f5)](_0x1322be,_0xd6cffe);},sendImageMaker=async(_0x48391e,_0x1adabc,_0x749ad4)=>{const _0x6e8c67={'gFwCj':function(_0x25d7d1,_0x580b40){return _0x25d7d1(_0x580b40);},'Trdii':_0x54758f(0x9c6,0xcca,0xd53,0x729)+'salahan,\x20c'+_0x3ab3df(0x7ed,0x15a,0x10c,0x4f2)+_0x3ab3df(0x1005,0x734,0xc8d,0xbe2)+'gi','hlKuk':_0x3ab3df(0x803,0x632,0xc2a,0xa6c)+_0x54758f(0x4b0,-0xb6,-0xa3,0xd2),'IEJFz':_0x3ab3df(0x856,0x6e9,0xa7c,0x966),'ospEG':_0x3ab3df(0x856,0x18f,0x3b8,0x422),'LuCck':_0x54758f(0x12a,0x339,-0x31c,-0x46f),'fSqms':_0x3ab3df(0x877,0x8ae,0x5cb,0x980)},_0x2eb8b0=await alpha['prepareMes'+_0x54758f(0x1f0,0xa,-0x1d3,0x545)](from,_0x48391e,MessageType['image'],{'thumbnail':Buffer[_0x54758f(0x62b,0x603,0x45c,0xae6)](-0x17c7*0x1+-0x113f*-0x2+-0xab7)});let _0x3be906=_0x2eb8b0[_0x54758f(0xa3d,0x7c4,0x90f,0x912)][_0x6e8c67[_0x3ab3df(-0x22b,0x887,0x70d,0x2d2)]]?_0x2eb8b0[_0x54758f(0xa3d,0xf72,0xe7e,0x4da)]['ephemeralM'+_0x3ab3df(0xc57,0x714,0x20f,0x6bf)]:_0x2eb8b0;const _0x48d3a4={};_0x48d3a4[_0x3ab3df(0x761,0x55f,0x93f,0x410)]=_0x6e8c67['IEJFz'],_0x48d3a4[_0x54758f(0x6be,0x30a,0x9c3,0xc32)]={};function _0x54758f(_0x55034a,_0x1a7c4e,_0x12497f,_0x432b2e){return _0x5f09b6(_0x432b2e,_0x1a7c4e-0x13c,_0x12497f-0x1ba,_0x55034a-0x219);}_0x48d3a4[_0x3ab3df(0xb9b,0xe32,0xb58,0xa8b)]=0x1;function _0x3ab3df(_0x244988,_0x16decd,_0xedb58a,_0x57f80a){return _0x5a3069(_0x244988-0x76,_0x16decd-0x1b9,_0x57f80a- -0x2a1,_0x16decd);}_0x48d3a4[_0x54758f(0x6be,0x30a,0x9c3,0xc32)][_0x3ab3df(0x6bd,0x465,0x7c6,0x69c)+'t']=_0x6e8c67[_0x54758f(0x444,0x3bb,0x472,0x75)];const _0x37578e={};_0x37578e[_0x3ab3df(-0xfe,0x113,0x1d6,0x410)]=_0x6e8c67[_0x3ab3df(0x90d,0xbcc,0x406,0x6cc)],_0x37578e[_0x54758f(0x6be,0xbd4,0x385,0x1c4)]={},_0x37578e['type']=0x1,_0x37578e[_0x54758f(0x6be,0xbd4,0x385,0x1c4)][_0x3ab3df(0x6dd,0x1d8,0x6a9,0x69c)+'t']=_0x6e8c67[_0x3ab3df(0xdd6,0xe5f,0xa7b,0xc00)];const _0x3dbb73=[_0x48d3a4,_0x37578e],_0x481531={'contentText':_0x1adabc,'footerText':''+tampilTanggal+enter+tampilWaktu+enter+enter+'©\x20'+creator+('\x20|\x20Request'+_0x54758f(0x140,-0x3a5,-0x376,0x61f))+_0x749ad4['split']('@')[-0x13b5+-0x1ca3+0x3058],'buttons':_0x3dbb73,'headerType':0x4,'imageMessage':_0x3be906[_0x54758f(0xa3d,0xce0,0xf13,0x8ef)][_0x3ab3df(0xca1,0x36a,0x947,0x82a)+'ge']},_0x36d91b={};_0x36d91b[_0x3ab3df(0x330,0x2da,0x17c,0x350)+'id']=[_0x749ad4];const _0xacfff7={};_0xacfff7[_0x54758f(0x5a,0x12f,0x2df,0x3bd)]=mek,_0xacfff7[_0x3ab3df(0x4e8,0x9d1,0x9b4,0x71e)+'o']=_0x36d91b,alpha[_0x3ab3df(0xb9c,0x4f3,0xa1a,0x83f)+'e'](from,_0x481531,MessageType[_0x54758f(0x554,0x636,0x2d9,0x15e)+_0x54758f(0x1f0,0x70f,0x2cb,-0xed)],_0xacfff7)[_0x54758f(0x702,0x3de,0xa23,0x5d6)](_0x3d1ac2=>{function _0x2bcc4f(_0x5a85a4,_0x592d80,_0xd13a33,_0x21f09a){return _0x3ab3df(_0x5a85a4-0x130,_0xd13a33,_0xd13a33-0x86,_0x592d80- -0x44b);}_0x6e8c67[_0x2bcc4f(0xb05,0x7bc,0x50c,0x296)](reply,_0x6e8c67['Trdii']);});},send_qr_gopay=async(_0x18f5f7,_0x40808e)=>{ini_bayar=ucapannya2+(_0x262dff(-0x1d3,-0x43a,-0x1b6,-0x1d)+_0x262dff(0x43b,0x400,0x3d2,0x671))+pushname+('_\x0a•>\x20Nomor'+_0x262dff(0x7c0,0x650,0x389,0x712))+sender['split']('@')[0x715*-0x1+-0x1*-0x1d7d+-0x1de*0xc]+(_0x3ebade(0x8be,0x523,0x873,0x355)+_0x3ebade(0x5ce,0x587,0x3a5,0x5f1)+_0x3ebade(0xac7,0xa79,0xb61,0x8ee)+_0x3ebade(0x8ec,0xa39,0x646,0xa01)+'HP-mu.\x0a2.\x20'+_0x262dff(0x308,-0x45a,-0x60,0x32)+'/\x20Bayar\x0a3.'+'\x20Scan\x20Barc'+_0x3ebade(0x54f,0x333,0x136,0x8e3)+_0x262dff(-0x33,-0x25c,0x5ed,0x60)+_0x3ebade(0xa55,0x869,0xbe5,0x4fc)+_0x3ebade(0x4a5,0x514,0x237,0x824)+_0x262dff(0x8a3,0x95a,0x15a,0x530)+_0x262dff(0xe6a,0x61b,0x63a,0x8d8)+_0x3ebade(0x1012,0xa84,0xf6b,0xfcb)+_0x3ebade(0x898,0x4ac,0x447,0x2ed))+ini_mark['split']('@')[-0x1*-0x1108+-0x32*-0x1b+-0x164e]+'_\x0a';function _0x3ebade(_0x516a30,_0xa93598,_0x3b5e83,_0x2e2605){return _0x5f09b6(_0x516a30,_0xa93598-0x6a,_0x3b5e83-0x143,_0xa93598-0x42d);}const _0x167714={};function _0x262dff(_0x58421b,_0x5c1c6f,_0x3ada49,_0x4b13be){return _0x5f09b6(_0x3ada49,_0x5c1c6f-0x1bc,_0x3ada49-0x1ce,_0x4b13be-0x18b);}_0x167714[_0x3ebade(-0xbe,0x355,-0x1ba,0x241)+'id']=[sender,ini_mark],await alpha['sendMessag'+'e'](from,_0x18f5f7,image,{'thumbnail':Buffer[_0x262dff(0x1d8,0x166,0x928,0x59d)](-0x117b+0x2c9+0xeb2),'quoted':_0x40808e,'caption':ini_bayar,'contextInfo':_0x167714});},send_qr_ovo=async(_0x277ed1,_0x59dafd)=>{ini_bayar=ucapannya2+('\x0a\x0a\x0a•>\x20Nama'+'\x20:\x20_')+pushname+('_\x0a•>\x20Nomor'+'\x20:\x20_@')+sender[_0x3cb856(0xd34,0x90d,0xe66,0x1298)]('@')[0x108+-0xc8e*0x1+0xb86]+(_0x4fc84d(0x648,0x8a0,0x7c1,0x7dc)+'a\x20:\x0a1.\x20Buk'+'a\x20Aplikasi'+_0x3cb856(0x762,0x317,0xa39,0x6c0)+_0x4fc84d(0xcf3,0xc86,0x864,0x8d3)+_0x4fc84d(0x4c6,0xdbc,0x9fa,0x94f)+'\x20Bayar\x0a3.\x20'+_0x4fc84d(0xee3,0x100b,0x10b0,0xc13)+_0x4fc84d(0xdf4,0x9e5,0xfca,0xc4e)+'OVO.\x0a4.\x20da'+_0x4fc84d(0x4cf,0x4f,0x966,0x4f9)+_0x3cb856(0xcd0,0xa59,0x9d5,0xe4c)+'embayaran\x0a'+_0x4fc84d(0xf3c,0xce2,0x8da,0xcaa)+_0x4fc84d(0x63d,0xef0,0x8b9,0xb7d)+'@')+ini_mark[_0x3cb856(0xd34,0xe0b,0x926,0xfdb)]('@')[-0x3c*0x5d+-0x3eb*0x3+0x218d]+'_\x0a';const _0x4f4e6b={};_0x4f4e6b[_0x3cb856(0x4e6,0x4cf,0x33b,0x399)+'id']=[sender,ini_mark];function _0x3cb856(_0x4edcbe,_0x4b7973,_0x4d4531,_0x3ad1c8){return _0x5f09b6(_0x4b7973,_0x4b7973-0x25,_0x4d4531-0x164,_0x4edcbe-0x5be);}function _0x4fc84d(_0x2820be,_0x29f42e,_0x31154c,_0x311baa){return _0x5f09b6(_0x2820be,_0x29f42e-0xe4,_0x31154c-0x105,_0x311baa-0x37e);}await alpha['sendMessag'+'e'](from,_0x277ed1,image,{'thumbnail':Buffer[_0x3cb856(0x9d0,0xa90,0x6d8,0xc59)](-0x2*-0x5e0+0x1f*0xa7+0x5*-0x665),'quoted':_0x59dafd,'caption':ini_bayar,'contextInfo':_0x4f4e6b});},send_qr_dana=async(_0x3e0bda,_0x37d609)=>{function _0x18fd46(_0x1620a4,_0x3a9318,_0x266ad1,_0x3dd3a7){return _0x5a3069(_0x1620a4-0x1e8,_0x3a9318-0x90,_0x3dd3a7- -0x60c,_0x1620a4);}function _0x466cdb(_0x433720,_0x352a45,_0x1800ab,_0xb669cf){return _0x5a3069(_0x433720-0x8a,_0x352a45-0x17,_0x1800ab- -0x4aa,_0x352a45);}ini_bayar=ucapannya2+('\x0a\x0a\x0a•>\x20Nama'+_0x466cdb(0xa1e,0x5dd,0x705,0x24c))+pushname+(_0x18fd46(-0xd1,0x59a,-0x4ef,0xb)+_0x466cdb(0x9eb,0x3bd,0x7a6,0xb9d))+sender[_0x18fd46(0xd0a,0x3e2,0xd70,0x833)]('@')[0x1405+0x17ce+0xd*-0x35f]+(_0x466cdb(0x683,0x568,0x315,0x6db)+'\x20:\x0a1.\x20Buka'+_0x18fd46(0xbdd,0x5db,0x19d,0x709)+_0x466cdb(0x9d4,0xa75,0x792,0x3f3)+'P-mu.\x0a2.\x20P'+'ilih\x20Pay\x20/'+_0x18fd46(0x45f,0x84f,0x43a,0x656)+_0x466cdb(0x8e9,0x5d3,0xab4,0x8ad)+'de\x20diatas\x20'+'DANA.\x0a4.\x20d'+_0x18fd46(0x48f,0x8d6,0xad9,0x8b9)+_0x18fd46(0x3f6,0x8d3,0x7ad,0x5e3)+_0x466cdb(0x5cc,0x842,0x2b3,0x265)+_0x18fd46(0x271,0x8bc,0x34a,0x3d1)+'i\x0a\x0a_Regard'+'\x20@')+ini_mark[_0x18fd46(0xca5,0xa38,0x59a,0x833)]('@')[-0x37*-0x5e+0x1bc3+-0x2ff5]+'_\x0a';const _0xa60a24={};_0xa60a24[_0x466cdb(-0x4e,-0x312,0x147,0x5ee)+'id']=[sender,ini_mark],await alpha[_0x18fd46(0x902,0x9d1,0x4f7,0x4d4)+'e'](from,_0x3e0bda,image,{'thumbnail':Buffer[_0x18fd46(0x5ee,0x398,0x7b0,0x4cf)](-0xf6e+-0x18d*-0xb+-0x1*0x1a1),'quoted':_0x37d609,'caption':ini_bayar,'contextInfo':_0xa60a24});},{soundmenu,kerangmenu,groupmenu,quotesmenu,animemenu,coganmenu,helpmenu,convertmenu,funmenu,downloadmenu,makermenu,textpromenu,photooxymenu,telestiker,othermenu,ownermenu,set_stc_cmd,storagemenu,cecanmenu,tagmenu,upmenu,nsfwmenu,asupanmenu,image_effect,allmenu}=require(_0x5f09b6(0x42c,-0x1af,-0x1a2,0x30d)+_0x5f09b6(0x5c6,-0x85,-0x136,0x262)),isBtMsg=type==_0x5a3069(0x113f,0xc5c,0xe94,0xf9a)+_0x5a3069(0xe94,0xb29,0xd2e,0x1024)+'ge'?mek[_0x5a3069(0x10f6,0xb7d,0xeed,0xf7c)][_0x5f09b6(0x7f1,0xb9d,0x650,0x7cb)+_0x5a3069(0xe67,0x1059,0xd2e,0x83a)+'ge'][_0x5f09b6(0x46,0x624,0x2ff,0x51f)+_0x5f09b6(0x339,0x159,-0xda,0x1d4)]:'',isStMsg=type=='listRespon'+_0x5a3069(0xb4a,0xb0e,0xf76,0x1293)?mek['message'][_0x5f09b6(0x607,0x432,0x93e,0x60d)+_0x5a3069(0x11c0,0x11e7,0xf76,0xa7e)][_0x5a3069(0xc2e,0x1127,0xe46,0xb46)]:'',stc=mek[_0x5f09b6(0x985,0xa5b,0x70d,0x824)][_0x5f09b6(0xe09,0x8b1,0xe82,0x930)+_0x5f09b6(0x4b0,-0x52d,0x526,-0x29)],msc=mek[_0x5f09b6(0xc61,0x61c,0x316,0x824)][_0x5a3069(0x49d,0x976,0xa3a,0xcef)+'ge'];wew=fs[_0x5f09b6(-0x1d5,0x2be,-0x49f,0xed)+'nc'](_0x5f09b6(0x6ec,0x13d,0x744,0x65e)+thumbnail),alfa2=_0x5a3069(0xd01,0xdce,0x832,0x4d2)+'513@s.what'+_0x5f09b6(-0x3df,0x4f2,0x79,-0x78),alfa3=_0x5a3069(0xf07,0xef4,0xf02,0xe64)+'512@s.what'+'sapp.net',sub_yt_zeeone_ofc=type==_0x5a3069(0xd0c,0x10e1,0xcd6,0x11a9)+'seMessage'?mek[_0x5f09b6(0x991,0x6ee,0x4e8,0x824)][_0x5f09b6(0x506,0x1bf,0xa1d,0x60d)+_0x5f09b6(0x4c9,0x7d7,0x72a,0x8ad)][_0x5a3069(0xc6b,0xc3b,0xe46,0xf44)]:'',subscribezeeoneofc=type==_0x5a3069(0xb13,0xf91,0xe94,0xf2a)+_0x5f09b6(0xdc,0xd4,0x49d,0x665)+'ge'?mek[_0x5f09b6(0xa8a,0x5d4,0x4b2,0x824)][_0x5a3069(0xcf7,0xc69,0xe94,0x10d6)+_0x5a3069(0x119d,0xb8e,0xd2e,0x909)+'ge'][_0x5f09b6(0x111,0xaa3,0x6c7,0x648)+_0x5a3069(0x544,0x9ff,0x978,0x7e7)]:'';if(sub_yt_zeeone_ofc=='group\x20open'){console[_0x5f09b6(0x3bf,0x79f,0x5d0,0x864)](color(time,_0x5f09b6(-0x111,0x602,0x78e,0x47f)),color(_0x5f09b6(0x106,0x282,0x72e,0x2c4)+_0x5f09b6(0x24a,-0x151,0xfb,-0x2d)+_0x5a3069(0x45b,0x7ce,0x812,0x566)));if(!isBotGroupAdmins)return reply(_0x5a3069(0x2c5,0x4a5,0x825,0x6f6)+_0x5f09b6(0x163,0x2f3,0x3ba,0x244)+'ai\x20admin\x20t'+_0x5a3069(0xbf0,0x12de,0xdec,0xbca)+_0x5a3069(0x11e2,0x1454,0xeb4,0xd90));await alpha['groupSetti'+'ngChange'](from,GroupSettingChange[_0x5a3069(0xa19,0x126e,0xe40,0x975)+'d'],![]),fakegroup(_0x5f09b6(0x908,-0xf,0x48e,0x515)+'FULLY\x20OPEN'+_0x5a3069(0x908,0x997,0x8e9,0xa1b)+'``');}if(sub_yt_zeeone_ofc=='group\x20clos'+'e'){console[_0x5f09b6(0x9ee,0x662,0xc4f,0x864)](color(time,_0x5f09b6(0x84a,0x583,-0xa3,0x47f)),color('List\x20messa'+_0x5a3069(0xde9,0x1088,0xf50,0x13c5)+_0x5a3069(0xaa9,0x1215,0xc63,0xf2c)));if(!isBotGroupAdmins)return reply(_0x5f09b6(-0x302,-0x388,0x148,0x15c)+_0x5f09b6(0xa6,-0x192,-0x1cd,0x244)+_0x5a3069(0xf78,0xa65,0xdfc,0x10fe)+_0x5f09b6(0x6f1,0xc27,0x20a,0x723)+_0x5f09b6(0xb4b,0xaef,0xc78,0x7eb));await alpha['groupSetti'+_0x5f09b6(-0x397,0x458,-0x12,0xc1)](from,GroupSettingChange[_0x5a3069(0xc07,0x13bb,0xe40,0xdfe)+'d'],!![]),fakegroup(_0x5a3069(0xc75,0x840,0xbde,0x9c1)+_0x5a3069(0x976,0x1264,0xd9c,0x1255)+_0x5f09b6(0x434,0x80,-0x574,-0xe5));}if(sub_yt_zeeone_ofc==_0x5f09b6(0x22d,0x77b,0x2bd,0x1f7)){console[_0x5a3069(0xf97,0xa30,0xf2d,0xba7)](color(time,_0x5f09b6(0x668,0x197,0x7f2,0x47f)),color('List\x20messa'+_0x5a3069(0xa87,0x8b3,0x696,0x97d)+_0x5f09b6(0x218,0x7f2,-0x17a,0x326)));var quotejamzk=await getBuffer(_0x5f09b6(0x4a,0x421,-0x4b2,0xbf)+_0x5a3069(0xbff,0xb5b,0xefb,0xb09)+_0x5a3069(0x5ad,0x959,0xa25,0x930)+_0x5f09b6(0x724,0x768,0x20d,0x73c)+_0x5a3069(0x60d,0xa71,0x4ee,0xca)+_0x5f09b6(-0x26c,0x93,0x58c,0x18b)+'put=true&s'+_0x5f09b6(-0xde,0xf,0x15,-0x59)+_0x5f09b6(0x91b,0x3,0xb06,0x572)+_0x5f09b6(0x36a,0x1b8,0x600,0x62f)+'&scaleWidt'+_0x5f09b6(0x88f,0x98c,0xb3,0x5cc)+_0x5a3069(0x10d9,0xfeb,0xe53,0x12d7)+_0x5f09b6(0x5cd,0x6e9,0x6a,0x37e)+_0x5a3069(0x10f5,0xe8d,0xbf5,0x766)+_0x5f09b6(-0x66c,-0x4ce,0x332,-0xdc)+_0x5a3069(0xce7,0x57e,0x7cb,0x38d)+_0x5f09b6(0xa47,0x1dc,0x1a1,0x6dd)+'ing!&text='+'Kerang\x20Aja'+'ib');const _0x35e866={};_0x35e866[_0x5f09b6(0x440,0x432,0x67c,0x274)+'t']=_0x5a3069(0x462,0xb3,0x4c0,0x49d);const _0x30363c={};_0x30363c[_0x5f09b6(-0x20c,-0x241,0x132,-0x18)]=_0x5f09b6(-0x4f,0x347,-0x364,0x20),_0x30363c[_0x5a3069(0x1102,0x969,0xb6e,0x765)]=_0x35e866,_0x30363c[_0x5a3069(0xfd8,0x12c7,0xd2c,0x10f3)]=0x1;const _0x21603a={};_0x21603a[_0x5a3069(0x47a,0x7e0,0x93d,0x8ee)+'t']=_0x5f09b6(0x6a6,0xcfe,0x27d,0x7ae);const _0x9e1a38={};_0x9e1a38[_0x5a3069(0x318,0x6a8,0x6b1,0x8f7)]=_0x5a3069(0x828,0x10bb,0xc07,0xce3),_0x9e1a38[_0x5f09b6(-0x45,0x4e1,-0x98,0x4a5)]=_0x21603a,_0x9e1a38['type']=0x1,sendButLocation(from,kerangmenu(prefix),''+tampilTanggal+enter+tampilWaktu+enter+enter+_0x5a3069(0x517,0x21c,0x756,0x9be)+ini_mark[_0x5f09b6(0x8b5,0x7d7,0xd28,0x776)]('@')[0xb57*0x2+-0x1b6d+0x4bf],quotejamzk,[_0x30363c,_0x9e1a38],{'contextInfo':{'mentionedJid':[ini_mark]}}),await limitAdd(sender,limit);}if(sub_yt_zeeone_ofc=='soundmenu'){console['log'](color(time,_0x5a3069(0xe21,0xf86,0xb48,0x714)),color(_0x5f09b6(0x567,0x611,-0xa6,0x2c4)+_0x5a3069(0xa49,0xb12,0x696,0x4cc)+'enu'));var quotejamzk=await getBuffer(_0x5f09b6(0x3f6,-0x130,0x30d,0x89)+_0x5f09b6(0xf4,-0x311,-0x28b,0x128)+_0x5f09b6(0x467,0x274,-0x139,0x177)+'442438afe8'+_0x5a3069(0xe65,0x39d,0x93f,0xcbb));const _0x5814c4={};_0x5814c4[_0x5f09b6(0x581,-0x232,0x211,0x274)+'t']=_0x5a3069(0x88b,0x9d1,0x4c0,0x77c);const _0x43f5ff={};_0x43f5ff[_0x5a3069(0xb49,0x5e7,0x6b1,0x6dc)]=_0x5f09b6(0x4d4,0x5c0,-0x37b,0x20),_0x43f5ff[_0x5a3069(0x90e,0xa06,0xb6e,0xa61)]=_0x5814c4,_0x43f5ff['type']=0x1;const _0x460320={};_0x460320['displayTex'+'t']=_0x5f09b6(0x714,0x251,0xaa3,0x7ae);const _0x4c5d27={};_0x4c5d27[_0x5a3069(0xa4c,0x3bb,0x6b1,0xb9b)]=_0x5f09b6(0x1c7,0x460,0x6ed,0x53e),_0x4c5d27['buttonText']=_0x460320,_0x4c5d27[_0x5f09b6(0x7cd,0xd2,0x481,0x663)]=0x1,sendButLocation(from,soundmenu(prefix),''+tampilTanggal+enter+tampilWaktu+enter+enter+_0x5f09b6(0x398,-0xcb,-0x5c,0x8d)+ini_mark[_0x5a3069(0x1319,0xcbf,0xe3f,0xde0)]('@')[0xec5*0x1+0x2044+-0x1*0x2f09],quotejamzk,[_0x43f5ff,_0x4c5d27],{'contextInfo':{'mentionedJid':[ini_mark]}}),await limitAdd(sender,limit);}if(sub_yt_zeeone_ofc==_0x5f09b6(0x31b,-0x4ff,0x309,-0x13c)){console[_0x5a3069(0xd62,0xac4,0xf2d,0xcca)](color(time,_0x5f09b6(0x885,0x230,0x1bb,0x47f)),color(_0x5a3069(0xa39,0xd6f,0x98d,0xe99)+_0x5f09b6(0x1ad,0x3ca,0x9,-0x33)+_0x5f09b6(0x76a,0x597,-0x1b4,0x326)));var quoteamzk=await getBuffer('https://te'+_0x5f09b6(-0x38a,-0x1ed,0x220,0x128)+_0x5f09b6(0x283,-0x5e4,-0x311,-0xdb)+_0x5f09b6(0x440,0x6c,0x157,0x4de)+_0x5a3069(0x330,0x350,0x662,0xac0));const _0x586d58={};_0x586d58[_0x5f09b6(-0x149,-0x15,0x495,0x274)+'t']=_0x5a3069(0x46b,0x433,0x4c0,0x6cd);const _0x514de8={};_0x514de8[_0x5a3069(0x7fb,0x820,0x6b1,0x747)]=_0x5a3069(0xa5b,0x84a,0x6e9,0x77d),_0x514de8[_0x5f09b6(0x782,0x811,-0xd1,0x4a5)]=_0x586d58,_0x514de8['type']=0x1;const _0x49fc2d={};_0x49fc2d['displayTex'+'t']='✓\x20OWNER';const _0x29fdc3={};_0x29fdc3[_0x5f09b6(-0x43c,-0x180,-0x3a0,-0x18)]=_0x5a3069(0xc07,0xfd7,0xc07,0xd4f),_0x29fdc3[_0x5f09b6(0x965,0x8e,0x634,0x4a5)]=_0x49fc2d,_0x29fdc3[_0x5f09b6(0xa58,0x3d3,0x3c2,0x663)]=0x1,sendButLocation(from,quotesmenu(prefix),''+tampilTanggal+enter+tampilWaktu+enter+enter+_0x5f09b6(0x415,0x33f,-0x152,0x8d)+ini_mark['split']('@')[-0x1316+-0x4bd+0x17d3],quoteamzk,[_0x514de8,_0x29fdc3],{'contextInfo':{'mentionedJid':[ini_mark]}}),await limitAdd(sender,limit);}if(sub_yt_zeeone_ofc==_0x5a3069(0x97e,0xe2e,0xa37,0x54e)){console[_0x5a3069(0xe66,0xe11,0xf2d,0xed7)](color(time,_0x5a3069(0xbd2,0x5ea,0xb48,0x89a)),color(_0x5a3069(0x61c,0x904,0x98d,0xb56)+'ge\x20quotesm'+_0x5f09b6(0x578,0x34f,-0x98,0x326)));var jakkja=await getBuffer(_0x5a3069(0xade,0x423,0x752,0x5af)+_0x5a3069(0x440,0x755,0x7f1,0x4f9)+_0x5a3069(0x1187,0xe44,0xf6a,0xc1a)+_0x5f09b6(0x3e1,-0x326,0x36b,-0x109)+_0x5f09b6(0xe,-0x29b,-0x3bc,-0x1af));const _0x1eec14={};_0x1eec14[_0x5a3069(0xd96,0x636,0x93d,0xa1a)+'t']='⋮☰\x20BACK';const _0x4c1185={};_0x4c1185['buttonId']=_0x5a3069(0x1f9,0xba6,0x6e9,0xa57),_0x4c1185[_0x5a3069(0x7a3,0x625,0xb6e,0xbe7)]=_0x1eec14,_0x4c1185[_0x5f09b6(0x3ad,0x435,0x573,0x663)]=0x1;const _0x4326c0={};_0x4326c0[_0x5a3069(0xdfe,0x744,0x93d,0x401)+'t']=_0x5a3069(0xfb4,0x12d5,0xe77,0x12fc);const _0x299b41={};_0x299b41[_0x5a3069(0x82f,0xbd8,0x6b1,0x607)]=_0x5f09b6(0x29c,0x674,0x69e,0x53e),_0x299b41['buttonText']=_0x4326c0,_0x299b41[_0x5f09b6(0x99d,0x62a,0x5cb,0x663)]=0x1,sendButLocation(from,groupmenu(prefix),''+tampilTanggal+enter+tampilWaktu+enter+enter+'Regard\x20@'+ini_mark[_0x5a3069(0xc6f,0x1179,0xe3f,0x13ba)]('@')[0x1*-0x1f51+-0x248a+-0x1*-0x43db],jakkja,[_0x4c1185,_0x299b41],{'contextInfo':{'mentionedJid':[ini_mark]}}),await limitAdd(sender,limit);}if(sub_yt_zeeone_ofc==_0x5f09b6(0xa8d,0x33f,0xad9,0x5a6)){console[_0x5f09b6(0x7d7,0xb19,0x2be,0x864)](color(time,_0x5a3069(0xbbb,0xbfa,0xb48,0x9db)),color(_0x5f09b6(0x166,0x2f,-0x1b7,0x2c4)+_0x5a3069(0xa56,0x66b,0xa73,0x9fc)+'nu'));var animkzka=await getBuffer('https://te'+_0x5f09b6(0x6a5,0x636,0x2d5,0x128)+_0x5a3069(0xf57,0xd43,0xe45,0x896)+_0x5f09b6(0x55c,0x31d,0x72b,0x58a)+_0x5a3069(0xf8d,0x1075,0xbf1,0xfa3));const _0x1ccf94={};_0x1ccf94['displayTex'+'t']=_0x5a3069(0x85d,0x2fb,0x4c0,0x6dc);const _0x4eb84b={};_0x4eb84b['buttonId']=_0x5a3069(0xadc,0xb26,0x6e9,0x803),_0x4eb84b[_0x5a3069(0xa42,0xf7d,0xb6e,0xcdb)]=_0x1ccf94,_0x4eb84b[_0x5f09b6(0xa0d,0x235,0x85f,0x663)]=0x1;const _0xfb4c90={};_0xfb4c90['displayTex'+'t']=_0x5f09b6(0xd52,0x576,0xa57,0x7ae);const _0x1720c4={};_0x1720c4[_0x5a3069(0xbd4,0x7ac,0x6b1,0xae6)]=_0x5f09b6(0x614,0x1a7,0xab1,0x53e),_0x1720c4[_0x5f09b6(0x764,0x47c,0x82,0x4a5)]=_0xfb4c90,_0x1720c4[_0x5f09b6(0x5f4,0x3ed,0x346,0x663)]=0x1,sendButLocation(from,animemenu(prefix),''+tampilTanggal+enter+tampilWaktu+enter+enter+_0x5f09b6(0x3ec,0x4f4,0x1b0,0x8d)+ini_mark[_0x5f09b6(0x48e,0x78b,0x3ee,0x776)]('@')[-0x1fc1+0x3f6+-0x1bcb*-0x1],animkzka,[_0x4eb84b,_0x1720c4],{'contextInfo':{'mentionedJid':[ini_mark]}}),await limitAdd(sender,limit);}if(sub_yt_zeeone_ofc==_0x5a3069(0xd7e,0xc6b,0x9e1,0xb85)+'u'){console[_0x5f09b6(0x66c,0x400,0x46d,0x864)](color(time,_0x5f09b6(0x1ce,0x8f8,0x967,0x47f)),color(_0x5a3069(0x9b4,0xacf,0x98d,0xf26)+'ge\x20convert'+_0x5f09b6(0x4ce,0x5cc,-0xe3,0x49a)));var converkdk=await getBuffer(_0x5f09b6(-0x2b2,-0x4bf,-0xbe,0x89)+_0x5f09b6(0x43e,-0x461,-0xb8,0x128)+_0x5f09b6(0x497,0x4df,-0x37a,0x1b)+_0x5f09b6(0x766,0xc55,0x900,0x89c)+_0x5f09b6(-0x5b,0x1b0,-0x1e5,0xdf));const _0x23d0b5={};_0x23d0b5[_0x5f09b6(0x74d,0x3f9,0x12,0x274)+'t']='⋮☰\x20BACK';const _0x47f430={};_0x47f430[_0x5f09b6(-0x574,0x2ee,-0x7a,-0x18)]=_0x5f09b6(-0x230,-0x2ea,0x21c,0x20),_0x47f430[_0x5f09b6(0x607,0x7b9,0x81b,0x4a5)]=_0x23d0b5,_0x47f430[_0x5f09b6(0xb19,0x79a,0x5df,0x663)]=0x1;const _0x431858={};_0x431858[_0x5f09b6(0x2b1,0x819,0x7f2,0x274)+'t']='✓\x20OWNER';const _0x18aea1={};_0x18aea1['buttonId']=_0x5a3069(0x9df,0x697,0xc07,0x83c),_0x18aea1['buttonText']=_0x431858,_0x18aea1[_0x5f09b6(0x897,0xb52,0x2b3,0x663)]=0x1,sendButLocation(from,convertmenu(prefix),''+tampilTanggal+enter+tampilWaktu+enter+enter+_0x5a3069(0x2a2,0x3ba,0x756,0x21c)+ini_mark[_0x5a3069(0xc40,0xb31,0xe3f,0xf90)]('@')[-0x1294+0x8ff+0x995],converkdk,[_0x47f430,_0x18aea1],{'contextInfo':{'mentionedJid':[ini_mark]}}),await limitAdd(sender,limit);}if(sub_yt_zeeone_ofc=='nsfw\x20menu'){console[_0x5f09b6(0xc76,0x8b7,0xc5c,0x864)](color(time,_0x5f09b6(0x24c,0x3fd,0x5ce,0x47f)),color(_0x5f09b6(0x75b,0x268,0x3d0,0x2c4)+_0x5f09b6(-0x98,0x2fa,-0x208,0x31b)+_0x5f09b6(0x987,-0x4c,0x6e4,0x49a)));var nsfwkak=await getBuffer(_0x5a3069(0x6c1,0x6c1,0x752,0x9eb)+_0x5f09b6(-0x194,-0x264,-0x1d2,0x128)+_0x5f09b6(0x3b2,0x45c,-0x1e2,-0x13b)+_0x5a3069(0x4,0x4c0,0x512,0x979)+_0x5f09b6(0x70d,0x165,0x71c,0x28f));const _0xa4e5a8={};_0xa4e5a8[_0x5a3069(0xc6c,0xb62,0x93d,0xd26)+'t']=_0x5f09b6(-0x231,-0x616,-0x421,-0x209);const _0x496b09={};_0x496b09[_0x5f09b6(-0x17f,-0x60,-0xcd,-0x18)]=_0x5f09b6(0x148,0x13d,0x3cb,0x20),_0x496b09[_0x5a3069(0xfdd,0x7d2,0xb6e,0x974)]=_0xa4e5a8,_0x496b09[_0x5a3069(0xef3,0x7dd,0xd2c,0xbf8)]=0x1;const _0xf2ab29={};_0xf2ab29[_0x5f09b6(0xc9,-0x158,0x384,0x274)+'t']=_0x5f09b6(0x3ea,0x970,0x785,0x7ae);const _0x7c197b={};_0x7c197b['buttonId']='owner',_0x7c197b[_0x5a3069(0xcc1,0x9df,0xb6e,0xf0b)]=_0xf2ab29,_0x7c197b['type']=0x1,sendButLocation(from,nsfwmenu(prefix),''+tampilTanggal+enter+tampilWaktu+enter+enter+'Regard\x20@'+ini_mark[_0x5f09b6(0x306,0x9c8,0x665,0x776)]('@')[-0x1*-0x1ea1+-0xb6+-0x1deb],nsfwkak,[_0x496b09,_0x7c197b],{'contextInfo':{'mentionedJid':[ini_mark]}}),await limitAdd(sender,limit);}if(sub_yt_zeeone_ofc==_0x5f09b6(0x1d4,-0xb4,-0x36e,0x29)+'u'){console['log'](color(time,'magenta'),color(_0x5a3069(0xd96,0x609,0x98d,0x4da)+_0x5a3069(0x768,0xc8d,0x9e4,0xa0c)+_0x5f09b6(0x431,0x24a,0x6a8,0x49a)));var asupanak=await getBuffer(_0x5a3069(0x7e6,0x2c0,0x752,0x2f6)+_0x5f09b6(-0x2b6,0x5d2,-0x96,0x128)+_0x5f09b6(0x3e1,-0x2db,-0x2ff,-0x1cf)+_0x5a3069(0xbe6,0xf86,0xfd6,0xfce)+_0x5a3069(0xd9b,0xd76,0xa45,0xe07));const _0x3e922f={};_0x3e922f[_0x5f09b6(-0x1a8,0x329,-0x1d6,0x274)+'t']=_0x5a3069(0x956,0x9c6,0x4c0,0x140);const _0x22e80e={};_0x22e80e[_0x5f09b6(-0x252,-0x267,-0x572,-0x18)]='Command',_0x22e80e[_0x5a3069(0xa93,0xd9d,0xb6e,0xd43)]=_0x3e922f,_0x22e80e[_0x5f09b6(0x6b2,0x658,0x1d4,0x663)]=0x1;const _0x590c05={};_0x590c05['displayTex'+'t']=_0x5f09b6(0x3ec,0xc6f,0x588,0x7ae);const _0x4fab6a={};_0x4fab6a[_0x5a3069(0x179,0x7e3,0x6b1,0x61e)]=_0x5a3069(0xd11,0xe48,0xc07,0xb02),_0x4fab6a['buttonText']=_0x590c05,_0x4fab6a['type']=0x1,sendButLocation(from,asupanmenu(prefix),''+tampilTanggal+enter+tampilWaktu+enter+enter+'Regard\x20@'+ini_mark[_0x5a3069(0xfb1,0x135d,0xe3f,0x923)]('@')[-0x99b*-0x1+0x2164+-0x1*0x2aff],asupanak,[_0x22e80e,_0x4fab6a],{'contextInfo':{'mentionedJid':[ini_mark]}}),await limitAdd(sender,limit);}if(sub_yt_zeeone_ofc=='All\x20menu\x20b'+'ot'){console[_0x5a3069(0x127a,0x1019,0xf2d,0x1209)](color(time,_0x5a3069(0xc76,0x1070,0xb48,0xb1f)),color(_0x5a3069(0x583,0x7a9,0x62a,0x1c1)+_0x5a3069(0xcac,0x535,0x9fb,0xb54)+'ul,\x20kurang'+_0x5a3069(0xab2,0x8a3,0x565,0x2b7)+_0x5f09b6(0x87f,0x788,0xab4,0x630)));var allmenuk=await getBuffer('https://te'+_0x5a3069(0x2c3,0x4ba,0x7f1,0x58e)+_0x5f09b6(-0x1cc,-0xe,0x11c,0x3ea)+_0x5f09b6(0x4d7,0x363,0x5fb,0x272)+_0x5f09b6(0xc0d,0xc52,0x447,0x752));const _0x555ac3={};_0x555ac3[_0x5f09b6(0x715,-0x2ca,0xd2,0x274)+'t']='⋮☰\x20BACK';const _0x3d6747={};_0x3d6747['buttonId']=_0x5a3069(0x3b8,0x80c,0x6e9,0xb14),_0x3d6747[_0x5a3069(0xed4,0xa5a,0xb6e,0x1099)]=_0x555ac3,_0x3d6747[_0x5a3069(0x907,0xf77,0xd2c,0xb40)]=0x1;const _0x9d1bbd={};_0x9d1bbd[_0x5a3069(0x7e8,0xa18,0x93d,0x949)+'t']=_0x5f09b6(0x33e,0x3a5,0x2d1,0x7ae);const _0x72f158={};_0x72f158[_0x5f09b6(0x4b2,0x15b,-0x3b7,-0x18)]=_0x5f09b6(0x1e8,0x82,0x23c,0x53e),_0x72f158[_0x5f09b6(0x13d,-0x39,0x807,0x4a5)]=_0x9d1bbd,_0x72f158[_0x5f09b6(0xb56,0x48e,0x2b5,0x663)]=0x1,sendButLocation(from,allmenu(kyun,os,prefix,wita,wit,ucapannya2,timuu,status,wa_version,mcc,mnc,os_version,device_manufacturer,device_model,alfa,alfa1,thisDay,ini_tanggal,totalchat,hit_today,ini_gcchat,latensii),''+tampilTanggal+enter+tampilWaktu+enter+enter+_0x5a3069(0xb17,0xcc3,0x756,0x6be)+ini_mark['split']('@')[-0xd0+-0x1*-0x1542+-0xa39*0x2],allmenuk,[_0x3d6747,_0x72f158],{'contextInfo':{'mentionedJid':[ini_mark]}}),await limitAdd(sender,limit);}if(sub_yt_zeeone_ofc==_0x5a3069(0x398,0x4a9,0x67e,0x214)+'nu'){console[_0x5a3069(0x1187,0xca5,0xf2d,0xd6c)](color(time,_0x5f09b6(0x5f,0x138,0x693,0x47f)),color('List\x20messa'+'ge\x20downloa'+_0x5a3069(0xdd9,0xa1e,0xaee,0x89b)));var downloadlsl=await getBuffer(_0x5f09b6(-0x19,0x456,0x3c5,0x89)+_0x5f09b6(0x89,-0x320,0x1d9,0x128)+_0x5f09b6(0x86e,0x50d,0x16a,0x2cf)+_0x5a3069(0x76f,0x2c6,0x6b4,0x258)+_0x5f09b6(0x7a6,0x9d3,0x89a,0x5c6));const _0x2f66c2={};_0x2f66c2[_0x5a3069(0xba3,0x3ba,0x93d,0xc60)+'t']=_0x5a3069(0x70a,0x681,0x4c0,0x5d1);const _0x4a6f6b={};_0x4a6f6b[_0x5f09b6(0x195,0x478,-0x1e9,-0x18)]=_0x5f09b6(0x223,-0x2ad,-0x2d7,0x20),_0x4a6f6b['buttonText']=_0x2f66c2,_0x4a6f6b[_0x5a3069(0x88c,0x114d,0xd2c,0xda8)]=0x1;const _0x9f8731={};_0x9f8731[_0x5a3069(0x5e8,0x496,0x93d,0xc32)+'t']='✓\x20OWNER';const _0x401ab9={};_0x401ab9[_0x5f09b6(-0x148,-0x22a,0x1e6,-0x18)]=_0x5f09b6(0x5d2,0x69b,0x6c8,0x53e),_0x401ab9[_0x5a3069(0x1053,0xce5,0xb6e,0x10e6)]=_0x9f8731,_0x401ab9['type']=0x1,sendButLocation(from,downloadmenu(prefix),''+tampilTanggal+enter+tampilWaktu+enter+enter+_0x5a3069(0x2db,0x611,0x756,0x812)+ini_mark['split']('@')[0xb9b*0x2+0x1*0x1607+-0x2d3d],downloadlsl,[_0x4a6f6b,_0x401ab9],{'contextInfo':{'mentionedJid':[ini_mark]}}),await limitAdd(sender,limit);}if(sub_yt_zeeone_ofc==_0x5f09b6(0x2bc,0x3e4,0x22f,0x793)){console[_0x5f09b6(0x633,0xb1d,0x3b1,0x864)](color(time,'magenta'),color('List\x20messa'+_0x5f09b6(0x826,0x66f,0x8b1,0x45d)));var funmenujs=await getBuffer('https://te'+_0x5f09b6(-0x1b9,-0x37e,0x658,0x128)+_0x5a3069(0x9b9,0x387,0x8a8,0x8f5)+'6a8f7fc99d'+_0x5f09b6(0x18,-0x1d1,-0x6e6,-0x153));const _0x3fee26={};_0x3fee26[_0x5a3069(0xe1a,0x513,0x93d,0x794)+'t']='⋮☰\x20BACK';const _0x5a7173={};_0x5a7173[_0x5f09b6(-0x2e3,0x307,0x129,-0x18)]='Command',_0x5a7173[_0x5a3069(0xd0b,0xbb2,0xb6e,0x5d0)]=_0x3fee26,_0x5a7173[_0x5a3069(0x1046,0xfe7,0xd2c,0xe47)]=0x1;const _0x10bb86={};_0x10bb86['displayTex'+'t']='✓\x20OWNER';const _0x4ab752={};_0x4ab752[_0x5a3069(0x51b,0x18f,0x6b1,0x392)]=_0x5f09b6(0x969,0xaba,0x2cf,0x53e),_0x4ab752[_0x5f09b6(0x77e,0xa52,0x5a0,0x4a5)]=_0x10bb86,_0x4ab752[_0x5f09b6(0x2f2,0x940,0x5d5,0x663)]=0x1,sendButLocation(from,funmenu(prefix),''+tampilTanggal+enter+tampilWaktu+enter+enter+_0x5f09b6(-0x407,0x17d,-0x416,0x8d)+ini_mark['split']('@')[0x2472*0x1+0xbb5+-0x3027],funmenujs,[_0x5a7173,_0x4ab752],{'contextInfo':{'mentionedJid':[ini_mark]}}),await limitAdd(sender,limit);}if(sub_yt_zeeone_ofc==_0x5f09b6(-0x26,-0x1ff,-0x54c,-0x6c)){console['log'](color(time,_0x5f09b6(0x8ad,0xc2,0x38f,0x47f)),color(_0x5a3069(0xece,0xc3f,0x98d,0xdda)+_0x5f09b6(0xa7c,0x118,0xa66,0x51b)+'nu'));var makermenksk=await getBuffer(_0x5a3069(0x8e2,0xb6c,0x752,0xba4)+_0x5a3069(0x981,0x8dc,0x7f1,0x44a)+'ile/610245'+_0x5f09b6(-0x34d,-0x409,-0x46d,-0xd6)+_0x5f09b6(0xd2,0x711,0x600,0x584));const _0x27b4e2={};_0x27b4e2[_0x5f09b6(-0x338,0x69c,0x387,0x274)+'t']=_0x5a3069(0x58d,0x575,0x4c0,0x620);const _0x452fa0={};_0x452fa0[_0x5a3069(0x403,0xa35,0x6b1,0xad1)]='Command',_0x452fa0[_0x5a3069(0x10f7,0x9d0,0xb6e,0x937)]=_0x27b4e2,_0x452fa0[_0x5f09b6(0x295,0x85d,0x93b,0x663)]=0x1;const _0x51e14c={};_0x51e14c[_0x5f09b6(0x17b,0x5f5,0x627,0x274)+'t']=_0x5f09b6(0x755,0x21d,0x261,0x7ae);const _0x3b3bee={};_0x3b3bee[_0x5a3069(0x149,0xc51,0x6b1,0x1db)]=_0x5a3069(0xf44,0x7af,0xc07,0x7f5),_0x3b3bee[_0x5a3069(0x100a,0xdff,0xb6e,0x945)]=_0x51e14c,_0x3b3bee[_0x5a3069(0x977,0xa2d,0xd2c,0xe78)]=0x1,sendButLocation(from,makermenu(prefix),''+tampilTanggal+enter+tampilWaktu+enter+enter+_0x5f09b6(0x483,0x5dd,-0x526,0x8d)+ini_mark['split']('@')[0xf65+0x7a6+0x1*-0x170b],makermenksk,[_0x452fa0,_0x3b3bee],{'contextInfo':{'mentionedJid':[ini_mark]}}),await limitAdd(sender,limit);}if(sub_yt_zeeone_ofc==_0x5a3069(0x732,0x9d0,0x701,0x394)+'u'){console[_0x5a3069(0xa55,0x102a,0xf2d,0xfb3)](color(time,_0x5a3069(0xbf0,0xdaa,0xb48,0x7ff)),color('List\x20messa'+_0x5f09b6(0x557,0x3b1,0x542,0x5da)+_0x5f09b6(0x4fc,0x7b2,0x619,0x49a)));var textjskzb=await getBuffer(_0x5f09b6(-0x49b,-0x2b0,-0x4e1,0x89)+'legra.ph/f'+_0x5f09b6(0x2f3,-0x25e,0x3c,0x1d3)+'f719b8edb2'+_0x5a3069(0xa9b,0xc22,0x952,0x78d));const _0x380af3={};_0x380af3[_0x5f09b6(0x5be,0x8b,0xf0,0x274)+'t']=_0x5a3069(0x129,0x728,0x4c0,0x140);const _0x50d6f8={};_0x50d6f8[_0x5f09b6(0xf6,-0x130,-0x206,-0x18)]=_0x5f09b6(0x13e,0x469,0x24,0x20),_0x50d6f8[_0x5a3069(0x788,0xf08,0xb6e,0x81a)]=_0x380af3,_0x50d6f8[_0x5a3069(0xde2,0x1060,0xd2c,0xeac)]=0x1;const _0x29f02b={};_0x29f02b[_0x5f09b6(0x749,0x6bc,0x53,0x274)+'t']=_0x5a3069(0x1124,0xb0e,0xe77,0xdf5);const _0x4fb06f={};_0x4fb06f['buttonId']=_0x5a3069(0xc3b,0xf2e,0xc07,0x8ec),_0x4fb06f['buttonText']=_0x29f02b,_0x4fb06f[_0x5f09b6(0x883,0x467,0x937,0x663)]=0x1,sendButLocation(from,textpromenu(prefix),''+tampilTanggal+enter+tampilWaktu+enter+enter+_0x5f09b6(-0x442,0x50a,-0x5f,0x8d)+ini_mark[_0x5f09b6(0x90a,0x3ab,0xc6a,0x776)]('@')[-0x220f+0x10c7*-0x1+0x12*0x2d3],textjskzb,[_0x50d6f8,_0x4fb06f],{'contextInfo':{'mentionedJid':[ini_mark]}}),await limitAdd(sender,limit);}if(sub_yt_zeeone_ofc==_0x5a3069(0x612,0x2d0,0x56b,0x41c)+'nu'){console[_0x5a3069(0x1106,0x12fd,0xf2d,0x1232)](color(time,_0x5a3069(0xb52,0xbed,0xb48,0xfe9)),color(_0x5a3069(0xc70,0x3ee,0x98d,0xe98)+'ge\x20photoox'+_0x5a3069(0xfaa,0xd34,0xdf5,0x1004)));var pdkdk=await getBuffer(_0x5f09b6(0x27,0x18c,-0x38c,0x89)+_0x5a3069(0x97a,0x6a7,0x7f1,0x442)+_0x5f09b6(-0x44d,0x2b1,0x3b2,-0x4)+_0x5a3069(0xc9a,0x915,0x9b2,0x799)+_0x5a3069(0xed0,0xb61,0xa36,0x972));const _0x3fe185={};_0x3fe185[_0x5f09b6(-0x279,-0x166,0x61,0x274)+'t']='⋮☰\x20BACK';const _0x2fca5a={};_0x2fca5a[_0x5a3069(0x111,0x17f,0x6b1,0x7df)]=_0x5f09b6(0x29,0x2c8,-0x178,0x20),_0x2fca5a['buttonText']=_0x3fe185,_0x2fca5a['type']=0x1;const _0x62e841={};_0x62e841[_0x5f09b6(0x1eb,0x2b4,-0x1e5,0x274)+'t']=_0x5f09b6(0xbb4,0x815,0x969,0x7ae);const _0x3e039c={};_0x3e039c[_0x5a3069(0x79c,0x9c8,0x6b1,0xb23)]=_0x5a3069(0xc18,0x6ae,0xc07,0xe22),_0x3e039c['buttonText']=_0x62e841,_0x3e039c[_0x5f09b6(0x3e9,0x342,0x5ad,0x663)]=0x1,sendButLocation(from,photooxymenu(prefix),''+tampilTanggal+enter+tampilWaktu+enter+enter+_0x5f09b6(0x28a,0x65,0x5f0,0x8d)+ini_mark[_0x5a3069(0x116e,0x1001,0xe3f,0x1147)]('@')[-0x11ff+0x1de7+-0xbe8],pdkdk,[_0x2fca5a,_0x3e039c],{'contextInfo':{'mentionedJid':[ini_mark]}}),await limitAdd(sender,limit);}if(sub_yt_zeeone_ofc==_0x5f09b6(0x89a,0x8f3,0x6ad,0x639)){console[_0x5f09b6(0xc2f,0x80b,0xc4a,0x864)](color(time,_0x5a3069(0xe5f,0xaaf,0xb48,0x9ed)),color(_0x5a3069(0x73c,0x741,0x98d,0xa9e)+_0x5a3069(0xf59,0x56d,0xb0e,0x78d)+'nu'));var othendjke=await getBuffer('https://te'+_0x5a3069(0xbe8,0x4cc,0x7f1,0x92e)+_0x5f09b6(0x63b,-0x421,0x125,0x12e)+_0x5f09b6(0x478,-0x90,0x467,-0xb6)+'2987d.jpg');const _0x282dcf={};_0x282dcf['displayTex'+'t']=_0x5f09b6(-0x551,-0x608,-0x565,-0x209);const _0x65e8d8={};_0x65e8d8[_0x5f09b6(-0x15f,0x8c,-0xbe,-0x18)]='Command',_0x65e8d8['buttonText']=_0x282dcf,_0x65e8d8['type']=0x1;const _0x2873d2={};_0x2873d2[_0x5f09b6(-0x2ea,-0x194,0x1c8,0x274)+'t']=_0x5a3069(0x1374,0x10e4,0xe77,0x107e);const _0x28a4bf={};_0x28a4bf[_0x5a3069(0x63e,0x255,0x6b1,0xc65)]=_0x5a3069(0x1009,0xa1c,0xc07,0x9cb),_0x28a4bf[_0x5f09b6(0x8d2,0x631,0x95,0x4a5)]=_0x2873d2,_0x28a4bf[_0x5f09b6(0xa7a,0x44e,0x8bf,0x663)]=0x1,sendButLocation(from,othermenu(prefix),''+tampilTanggal+enter+tampilWaktu+enter+enter+_0x5a3069(0xba6,0x747,0x756,0x4bb)+ini_mark[_0x5a3069(0xf16,0x9d6,0xe3f,0xd3a)]('@')[-0x12f0+-0x89*0x10+0x1b80],othendjke,[_0x65e8d8,_0x28a4bf],{'contextInfo':{'mentionedJid':[ini_mark]}}),await limitAdd(sender,limit);}if(sub_yt_zeeone_ofc==_0x5a3069(0x748,0xa97,0x8c1,0x6b4)){console[_0x5a3069(0x13c5,0x9d8,0xf2d,0xed3)](color(time,_0x5a3069(0x1040,0x7da,0xb48,0x783)),color(_0x5a3069(0x554,0x7bc,0x98d,0xc3b)+'ge\x20ownerme'+'nu'));var ownermenjdu=await getBuffer(_0x5f09b6(0x1a3,-0x27c,-0x4e3,0x89)+_0x5f09b6(0x6f,0x3d1,-0x1eb,0x128)+_0x5f09b6(0x849,-0x12f,0x8c,0x45a)+_0x5a3069(0x9f9,0xd1e,0xa48,0xe08)+_0x5a3069(0x870,0x940,0x63a,0x259));const _0x28c505={};_0x28c505[_0x5f09b6(0x343,0x1b8,0x226,0x274)+'t']=_0x5a3069(0x87c,0x363,0x4c0,0x1eb);const _0x67a8f3={};_0x67a8f3[_0x5a3069(0x676,0x76b,0x6b1,0xa0b)]=_0x5f09b6(0xdc,0x1b2,0x2a3,0x20),_0x67a8f3[_0x5f09b6(0x19e,0x781,0x7d7,0x4a5)]=_0x28c505,_0x67a8f3[_0x5a3069(0xb51,0xe32,0xd2c,0x905)]=0x1;const _0x1796f6={};_0x1796f6['displayTex'+'t']='✓\x20OWNER';const _0x3a6d9e={};_0x3a6d9e[_0x5f09b6(-0x67,-0x1a3,0x146,-0x18)]=_0x5f09b6(0x343,0x61a,0xa01,0x53e),_0x3a6d9e[_0x5a3069(0x91f,0xa85,0xb6e,0xb59)]=_0x1796f6,_0x3a6d9e[_0x5a3069(0xf28,0xf37,0xd2c,0xb4c)]=0x1,sendButLocation(from,ownermenu(prefix),''+tampilTanggal+enter+tampilWaktu+enter+enter+_0x5f09b6(-0xd2,-0x284,-0x347,0x8d)+ini_mark[_0x5f09b6(0x25b,0x315,0x244,0x776)]('@')[0xfdd+-0xdb9*0x1+-0x224*0x1],ownermenjdu,[_0x67a8f3,_0x3a6d9e],{'contextInfo':{'mentionedJid':[ini_mark]}}),await limitAdd(sender,limit);}if(sub_yt_zeeone_ofc==_0x5a3069(0xce3,0x5e7,0xab5,0x718)+'u'){console[_0x5a3069(0x1394,0x9a4,0xf2d,0xdfe)](color(time,'magenta'),color(_0x5f09b6(-0x40,0x19b,0x8d,0x2c4)+'ge\x20storage'+_0x5f09b6(0x836,-0x50,0x597,0x49a)));var storagemsn=await getBuffer(_0x5f09b6(-0x2b3,0x20a,-0x463,0x89)+'legra.ph/f'+_0x5a3069(0xd1f,0x905,0xb06,0xbbb)+_0x5f09b6(-0x459,0x58a,-0x1c6,0x154)+_0x5a3069(0x2ef,0xab5,0x519,-0x45));const _0x43cb93={};_0x43cb93[_0x5f09b6(0x520,-0x72,0x74,0x274)+'t']=_0x5a3069(0x732,0x7e4,0x4c0,0x516);const _0x417275={};_0x417275['buttonId']='Command',_0x417275[_0x5a3069(0x8f4,0xfd2,0xb6e,0xb6d)]=_0x43cb93,_0x417275[_0x5f09b6(0x1ff,0xb9c,0x363,0x663)]=0x1;const _0x37c9dd={};_0x37c9dd[_0x5a3069(0xb07,0x929,0x93d,0x80a)+'t']=_0x5f09b6(0x615,0x7af,0x797,0x7ae);const _0xe362d4={};_0xe362d4[_0x5a3069(0x738,0x650,0x6b1,0x621)]=_0x5f09b6(0x889,0x648,0x53b,0x53e),_0xe362d4[_0x5a3069(0xadb,0x625,0xb6e,0xe6f)]=_0x37c9dd,_0xe362d4[_0x5a3069(0x7aa,0x1160,0xd2c,0xb48)]=0x1,sendButLocation(from,storagemenu(prefix),''+tampilTanggal+enter+tampilWaktu+enter+enter+_0x5f09b6(0x3c6,0x626,-0x458,0x8d)+ini_mark[_0x5a3069(0x9e8,0x136f,0xe3f,0x13bb)]('@')[-0x3*-0x56b+-0x1*-0xf47+0x3f1*-0x8],storagemsn,[_0x417275,_0xe362d4],{'contextInfo':{'mentionedJid':[ini_mark]}}),await limitAdd(sender,limit);}if(sub_yt_zeeone_ofc==_0x5a3069(0x106b,0x9f0,0xbc7,0xb04)){console[_0x5f09b6(0x686,0x74d,0x30e,0x864)](color(time,_0x5a3069(0xf77,0xfd0,0xb48,0xdaa)),color(_0x5a3069(0x907,0x48d,0x98d,0xd02)+_0x5a3069(0x436,0xca2,0x8b9,0x832)));var tagmwnjn=await getBuffer('https://te'+'legra.ph/f'+_0x5a3069(0x54e,0xcf6,0x8ef,0x3b6)+_0x5f09b6(0x203,-0x431,-0x78a,-0x1da)+_0x5a3069(0x1020,0x95b,0xebf,0x1430));const _0x4b65b0={};_0x4b65b0[_0x5f09b6(0x165,0x126,0x3d,0x274)+'t']=_0x5f09b6(-0x781,-0x332,-0x3ee,-0x209);const _0x7c599d={};_0x7c599d['buttonId']=_0x5a3069(0x2a1,0x549,0x6e9,0xc94),_0x7c599d['buttonText']=_0x4b65b0,_0x7c599d[_0x5a3069(0x8c2,0xb47,0xd2c,0x12d2)]=0x1;const _0x5ec207={};_0x5ec207[_0x5f09b6(0x7ed,-0x5d,-0x1cd,0x274)+'t']='✓\x20OWNER';const _0x383e4d={};_0x383e4d[_0x5f09b6(0x588,0x3c3,0x47,-0x18)]='owner',_0x383e4d[_0x5a3069(0xf91,0x9d4,0xb6e,0x85b)]=_0x5ec207,_0x383e4d[_0x5a3069(0x114b,0xb77,0xd2c,0xfe3)]=0x1,sendButLocation(from,tagmenu(prefix),''+tampilTanggal+enter+tampilWaktu+enter+enter+_0x5f09b6(-0x284,0x236,-0x127,0x8d)+ini_mark[_0x5f09b6(0x305,0x81b,0x529,0x776)]('@')[0x1840+0xf4d+0x195*-0x19],tagmwnjn,[_0x7c599d,_0x383e4d],{'contextInfo':{'mentionedJid':[ini_mark]}}),await limitAdd(sender,limit);}if(sub_yt_zeeone_ofc=='upmenu'){console[_0x5a3069(0x9a8,0x9c8,0xf2d,0xff3)](color(time,_0x5f09b6(0x38c,0x8a5,0x8b2,0x47f)),color(_0x5f09b6(-0x174,-0x20e,0x165,0x2c4)+_0x5f09b6(-0x28a,-0x356,-0xd0,-0x7f)));var upmenuj=await getBuffer(_0x5a3069(0x406,0x346,0x752,0x422)+'legra.ph/f'+'ile/6941a5'+_0x5a3069(0x96f,0xcfb,0x8d2,0x854)+'b9509.jpg');const _0xeb2cd2={};_0xeb2cd2[_0x5a3069(0xe03,0xdae,0x93d,0xd1e)+'t']=_0x5f09b6(-0x38a,-0x54,-0x205,-0x209);const _0x2ee021={};_0x2ee021['buttonId']=_0x5f09b6(-0x2f7,0x2ea,0x513,0x20),_0x2ee021['buttonText']=_0xeb2cd2,_0x2ee021[_0x5a3069(0x78f,0xf66,0xd2c,0xeb7)]=0x1;const _0x29a90a={};_0x29a90a['displayTex'+'t']='✓\x20OWNER';const _0x522c8f={};_0x522c8f[_0x5f09b6(0x423,-0x2f1,-0x3db,-0x18)]=_0x5f09b6(0x563,0x8cf,0x831,0x53e),_0x522c8f[_0x5f09b6(0x8ca,0x76b,0x8d1,0x4a5)]=_0x29a90a,_0x522c8f[_0x5f09b6(0xab2,0x309,0x907,0x663)]=0x1,sendButLocation(from,upmenu(prefix),''+tampilTanggal+enter+tampilWaktu+enter+enter+_0x5f09b6(-0x1cb,0x130,-0x2e0,0x8d)+ini_mark['split']('@')[0x1997+-0x125*0x6+-0x12b9*0x1],upmenuj,[_0x2ee021,_0x522c8f],{'contextInfo':{'mentionedJid':[ini_mark]}}),await limitAdd(sender,limit);}if(sub_yt_zeeone_ofc==_0x5a3069(0xe79,0xb8b,0xdd6,0x1338)+'n'){console[_0x5a3069(0xf61,0xfb0,0xf2d,0x13d6)](color(time,'magenta'),color('List\x20messa'+_0x5f09b6(-0x5b8,-0x2e2,-0x5df,-0x73)+_0x5f09b6(0x6,0x8bd,0x177,0x449)));var cecanksk=await getBuffer(_0x5f09b6(0x545,0x1af,-0x13c,0x89)+_0x5a3069(0x3a6,0xd96,0x7f1,0xade)+_0x5a3069(0xbf4,0xe77,0xecb,0x119b)+_0x5f09b6(0x20a,-0x15d,-0x291,0x157)+_0x5a3069(0x6b9,0xe3,0x567,0xd3));const _0x48af4d={};_0x48af4d[_0x5a3069(0x4e8,0x60b,0x93d,0x432)+'t']=_0x5f09b6(-0x115,-0x3c,0x2b0,-0x209);const _0x2db91c={};_0x2db91c[_0x5f09b6(0x420,-0x195,0x288,-0x18)]=_0x5a3069(0x54d,0xbc8,0x6e9,0x219),_0x2db91c['buttonText']=_0x48af4d,_0x2db91c[_0x5f09b6(0xa66,0x62a,0x7d3,0x663)]=0x1;const _0x481f28={};_0x481f28[_0x5a3069(0xc81,0xec2,0x93d,0x71c)+'t']=_0x5f09b6(0x970,0x4c3,0x7f7,0x7ae);const _0x599aa0={};_0x599aa0['buttonId']='owner',_0x599aa0[_0x5f09b6(0x106,0x619,0xe6,0x4a5)]=_0x481f28,_0x599aa0[_0x5f09b6(0x194,0x35b,0x82b,0x663)]=0x1,sendButLocation(from,cecanmenu(prefix),''+tampilTanggal+enter+tampilWaktu+enter+enter+_0x5f09b6(-0x347,-0x79,0x31c,0x8d)+ini_mark[_0x5f09b6(0x7ed,0x833,0xb51,0x776)]('@')[-0x638+0x2305+0x65*-0x49],cecanksk,[_0x2db91c,_0x599aa0],{'contextInfo':{'mentionedJid':[ini_mark]}}),await limitAdd(sender,limit);}if(sub_yt_zeeone_ofc==_0x5a3069(0x63f,0x2f7,0x600,0x782)+'n'){console['log']('\x1b[1;31m~\x1b['+_0x5f09b6(0x4f,-0xc0,0x197,0x0),_0x5a3069(0xeac,0x428,0x956,0xed9)+'MD\x20\x1b[1;37m'+']',wib,color(_0x5f09b6(0x3b1,0x4d2,0x61e,0x645)+'ge\x20gacha\x20c'+_0x5f09b6(-0x183,0x3ed,-0x15c,-0x115)));var coganksk=await getBuffer(_0x5f09b6(0x4b6,-0xa7,0x287,0x89)+_0x5f09b6(0x633,0x129,0xc2,0x128)+_0x5a3069(0xae3,0x61c,0x6f9,0x941)+_0x5f09b6(0x8ba,0x605,0x369,0x44c)+_0x5a3069(0x914,0xc33,0xba9,0xcfd));const _0x10e3dd={};_0x10e3dd[_0x5f09b6(-0x324,0x47c,0x5e9,0x274)+'t']=_0x5f09b6(-0x683,-0x73a,-0x225,-0x209);const _0x38c52c={};_0x38c52c['buttonId']=_0x5a3069(0xab9,0xad6,0x6e9,0x4d8),_0x38c52c[_0x5a3069(0xed8,0xb3d,0xb6e,0xb6e)]=_0x10e3dd,_0x38c52c[_0x5a3069(0xf8c,0xaa5,0xd2c,0x10fc)]=0x1;const _0x359723={};_0x359723[_0x5f09b6(-0xa9,0x766,0x6a0,0x274)+'t']=_0x5a3069(0x13a5,0xbe8,0xe77,0x104f);const _0x50f529={};_0x50f529[_0x5a3069(0xa36,0x4dc,0x6b1,0x8f2)]='owner',_0x50f529[_0x5f09b6(0x50,0x92a,0x2ae,0x4a5)]=_0x359723,_0x50f529['type']=0x1,sendButLocation(from,coganmenu(prefix),''+tampilTanggal+enter+tampilWaktu+enter+enter+_0x5f09b6(0x16d,0x3e2,-0x203,0x8d)+ini_mark[_0x5f09b6(0x2da,0x585,0x9fe,0x776)]('@')[0x17*0x17e+-0x17a2+-0x13*0x90],coganksk,[_0x38c52c,_0x50f529],{'contextInfo':{'mentionedJid':[ini_mark]}}),await limitAdd(sender,limit);}if(sub_yt_zeeone_ofc=='telegram\x20s'+_0x5a3069(0x551,0x4ef,0x85c,0xb55)){console[_0x5a3069(0xecd,0x114e,0xf2d,0x9f6)](color(time,_0x5a3069(0x795,0xf3f,0xb48,0x772)),color(_0x5a3069(0xa80,0x65e,0x98d,0x966)+_0x5f09b6(0xbb,0x1ed,-0x1cb,0x28b)+'m\x20sticker'));var telesjtje=await getBuffer(_0x5a3069(0x9c8,0xa52,0x752,0x23b)+_0x5f09b6(0x383,-0x129,0x409,0x128)+_0x5a3069(0xc24,0xd06,0xb1a,0xe1b)+'8a682c0e76'+'977f4.jpg');const _0x31337d={};_0x31337d[_0x5f09b6(-0x21d,0x7aa,0x3e6,0x274)+'t']='⋮☰\x20BACK';const _0x54408d={};_0x54408d[_0x5a3069(0x94a,0x9ef,0x6b1,0x7cf)]=_0x5f09b6(-0x33b,-0x22a,-0x121,0x20),_0x54408d[_0x5f09b6(0x120,0xa45,0x31e,0x4a5)]=_0x31337d,_0x54408d[_0x5a3069(0x7f0,0xb1d,0xd2c,0x845)]=0x1;const _0x5d086a={};_0x5d086a[_0x5a3069(0x480,0x50a,0x93d,0xbd5)+'t']=_0x5f09b6(0x9bc,0xb8a,0xd06,0x7ae);const _0x4b6ed3={};_0x4b6ed3[_0x5a3069(0x596,0x68c,0x6b1,0xbef)]=_0x5a3069(0x9c4,0xb72,0xc07,0xf9b),_0x4b6ed3[_0x5f09b6(0x51e,0x63f,0x691,0x4a5)]=_0x5d086a,_0x4b6ed3['type']=0x1,sendButLocation(from,telestiker(prefix),''+tampilTanggal+enter+tampilWaktu+enter+enter+_0x5a3069(0x1cb,0x430,0x756,0xb32)+ini_mark['split']('@')[-0x1*0x248b+-0x29*-0x11+0x21d2],telesjtje,[_0x54408d,_0x4b6ed3],{'contextInfo':{'mentionedJid':[ini_mark]}}),await limitAdd(sender,limit);}if(sub_yt_zeeone_ofc==_0x5f09b6(0x4b8,-0xd8,-0x41,0x210)+'ct'){console[_0x5a3069(0xfa8,0xf01,0xf2d,0x101b)](color(time,_0x5a3069(0x10d6,0xf78,0xb48,0xeff)),color(_0x5f09b6(0x2c8,-0x80,0x648,0x2c4)+_0x5f09b6(0x740,0x1d4,0x838,0x2ea)+_0x5a3069(0xbe3,0xeea,0x9e7,0x75f)));var imagekskwo=await getBuffer(_0x5f09b6(0x356,-0x2cb,0x565,0x89)+_0x5f09b6(-0x318,-0x2d2,-0x41b,0x128)+'ile/4dfc9b'+'2d0c2195ab'+_0x5a3069(0x498,0x860,0x6b3,0x167));const _0x47ae84={};_0x47ae84[_0x5f09b6(0x41,0x327,0x3d,0x274)+'t']='⋮☰\x20BACK';const _0x511282={};_0x511282['buttonId']=_0x5f09b6(-0x2d4,0x32d,-0x4b9,0x20),_0x511282[_0x5a3069(0x6fd,0xc61,0xb6e,0x9fd)]=_0x47ae84,_0x511282['type']=0x1;const _0x1afbe5={};_0x1afbe5['displayTex'+'t']=_0x5f09b6(0x6db,0xb65,0xd01,0x7ae);const _0x121e6b={};_0x121e6b[_0x5f09b6(-0x52b,0x4c3,0x4ad,-0x18)]=_0x5f09b6(0x6ea,0x29f,0x79c,0x53e),_0x121e6b[_0x5a3069(0xa5b,0x87e,0xb6e,0x83a)]=_0x1afbe5,_0x121e6b[_0x5f09b6(0x703,0x16e,0x942,0x663)]=0x1,sendButLocation(from,image_effect(prefix),''+tampilTanggal+enter+tampilWaktu+enter+enter+_0x5a3069(0x79a,0xc23,0x756,0x32c)+ini_mark['split']('@')[0x1081+-0x1*0x1f4e+-0xecd*-0x1],imagekskwo,[_0x511282,_0x121e6b],{'contextInfo':{'mentionedJid':[ini_mark]}}),await limitAdd(sender,limit);}if(sub_yt_zeeone_ofc==_0x5f09b6(0x513,0xb81,0xc75,0x720)+'e'){console[_0x5f09b6(0xb38,0x3b3,0xd37,0x864)](color(time,_0x5f09b6(-0x12d,0x788,0x935,0x47f)),color(_0x5f09b6(0x5a,-0x136,0x20d,0x2c4)+_0x5a3069(0x978,0x7f8,0xc0e,0x10fa)+_0x5f09b6(-0xd3,0x39b,0x4bf,0x365)));var sourbwbbz=await getBuffer(_0x5a3069(0x868,0x54f,0x752,0xc97)+_0x5f09b6(0x19c,0x4ad,-0x164,0x128)+_0x5a3069(0x8fa,0x910,0x6ca,0x6b3)+_0x5a3069(0xbf2,0x59c,0x9b1,0x63b)+_0x5f09b6(-0x147,0x30c,0x4fe,0x453));const _0xf65086={};_0xf65086[_0x5f09b6(0x5cb,0x569,-0x8c,0x274)+'t']='⋮☰\x20MENU';const _0x90029a={};_0x90029a[_0x5a3069(0x1c7,0x46e,0x6b1,0x402)]=_0x5f09b6(-0x525,-0x8d,0x97,0x20),_0x90029a[_0x5f09b6(0x301,0x4c7,0x436,0x4a5)]=_0xf65086,_0x90029a['type']=0x1;const _0x179ea0={};_0x179ea0[_0x5f09b6(0x5cc,-0x5,0xfb,0x274)+'t']=_0x5f09b6(0xb2f,0xa9a,0x536,0x7ae);const _0x25354f={};_0x25354f['buttonId']='owner',_0x25354f[_0x5f09b6(0x4aa,-0x69,0x1a7,0x4a5)]=_0x179ea0,_0x25354f[_0x5f09b6(0x15c,0xac8,0xaae,0x663)]=0x1,sendButLocation(from,_0x5a3069(0x564,0xaf5,0xaa9,0x93c)+'cript\x20Bot\x20'+':\x20https://'+_0x5f09b6(0x8a0,0x673,0x5ca,0x714)+_0x5a3069(0xbd5,0xa73,0x807,0x8fa)+'ofc',''+tampilTanggal+enter+tampilWaktu+enter+enter+'Regard\x20@'+ini_mark[_0x5a3069(0xa89,0xecf,0xe3f,0x9b4)]('@')[-0xc2b+0xd4b+0x2*-0x90],sourbwbbz,[_0x90029a,_0x25354f],{'contextInfo':{'mentionedJid':[ini_mark]}}),await limitAdd(sender,limit);}if(sub_yt_zeeone_ofc==_0x5f09b6(-0x117,0x578,0x3b5,0xfe)+_0x5f09b6(0x65f,0x166,0x2d2,0x391)){const hPGwJd=_0x5a3069(0xe01,0xf86,0xf67,0xf97)['split']('|');let hYdZQW=0x25af+0x620+-0x2bcf;while(!![]){switch(hPGwJd[hYdZQW++]){case'0':var imgList=[_0x5f09b6(0x5c3,0x5ed,0x2d6,0x475)+'top4top.io'+_0x5a3069(0x401,0x519,0x87b,0x79c)+_0x5a3069(0x4ba,0x59c,0x87e,0x316),'https://h.'+_0x5a3069(0x802,0x6e9,0xaae,0x864)+_0x5f09b6(0x43c,0x3aa,0x77a,0x47c)+'2e1.jpg',_0x5a3069(0xe99,0x916,0xb7f,0x65c)+_0x5a3069(0xe60,0xebf,0xaae,0xc32)+_0x5f09b6(0x383,0x5e,-0xfe,0x375)+_0x5f09b6(0x803,0x2a3,0x619,0x565),'https://f.'+_0x5a3069(0xc0e,0x657,0xaae,0xd42)+_0x5f09b6(0xa08,0xb05,0xa68,0x790)+'4i1.jpg',_0x5a3069(0x998,0xdab,0x9c9,0xf05)+'top4top.io'+_0x5a3069(0xdb8,0xd6e,0xd30,0xd07)+_0x5a3069(0x6b6,0x7cd,0xaf5,0xa43),'https://d.'+_0x5a3069(0xe67,0xe4a,0xaae,0x9bd)+_0x5f09b6(-0xac,-0x4b0,0x1ce,-0xb4)+_0x5f09b6(0x45c,0x773,0xd35,0x835),_0x5a3069(0x1065,0x12cf,0xfb6,0x14b6)+_0x5a3069(0xd5a,0x873,0xaae,0x75b)+_0x5a3069(0xd2b,0xd4b,0x9bc,0x418)+_0x5a3069(0x5f8,0xac1,0x9d7,0xb69)];continue;case'1':const _0x133b6d={};_0x133b6d[_0x5f09b6(0x517,0x969,0x99d,0x77d)]=''+ucapannya2,_0x133b6d[_0x5f09b6(-0xb5,0x72a,0x7ed,0x266)]=_0x5a3069(0xf9b,0x577,0xad3,0xd85)+_0x5f09b6(0x360,0x7b7,0x8c0,0x6d0),_0x133b6d['previewTyp'+'e']=_0x5a3069(0x8ad,0x12d8,0xd69,0xf1e),_0x133b6d[_0x5a3069(0x1281,0xc43,0xeef,0x9ab)+'rl']=''+imgUrl,_0x133b6d['thumbnail']='',_0x133b6d['sourceUrl']=_0x5a3069(0x8b0,0xcf0,0x767,0x672)+_0x5a3069(0x11cf,0xf2e,0xf75,0xb6c)+_0x5f09b6(-0x189,0x3ed,-0x677,-0x173)+_0x5a3069(0x10de,0xeeb,0xf13,0x126a)+_0x5f09b6(0x9af,0x2e3,0x322,0x7ea)+'lA';const _0x5906b6={};_0x5906b6[_0x5a3069(0xa0d,0xde3,0x9c7,0x68a)]=_0x5a3069(0x40a,0xaca,0x905,0x7f6),_0x5906b6['forwarding'+_0x5f09b6(0x245,-0x19f,0x4d3,0x261)]=0x3b9aca00,_0x5906b6['isForwarde'+'d']=!![],_0x5906b6[_0x5f09b6(-0xb1,0x43,-0x75a,-0x1ed)+'ral']=!![],_0x5906b6[_0x5f09b6(0x3de,0x1bb,0x5c3,0x47)+'Reply']=_0x133b6d;const _0xea6918={};_0xea6918[_0x5f09b6(-0x4d5,-0x61a,-0x37,-0xd8)+'id']=[ini_mark],alpha['sendMessag'+'e'](from,tqto,text,{'thumbnail':fs['readFileSy'+'nc'](_0x5a3069(0xf30,0xbfb,0xd27,0x987)+thumbnail),'caption':'tqto','contextInfo':_0x5906b6,'quoted':ftoko,'contextInfo':_0xea6918});continue;case'2':var imgUrl=imgList[Math[_0x5a3069(0xe29,0x470,0x9a0,0x7dc)](Math[_0x5a3069(0xb22,0x8a1,0x84c,0x822)]()*imgList[_0x5a3069(0x266,0xc6d,0x6de,0x952)])];continue;case'3':console[_0x5a3069(0xa90,0xc74,0xf2d,0xecd)](color(time,_0x5f09b6(-0xc4,0x5ba,0x1d8,0x47f)),color(_0x5a3069(0xa6c,0x6a1,0x98d,0xecc)+_0x5a3069(0xf0f,0xf79,0xf1c,0x1048)+_0x5f09b6(0x5d9,0x56f,0x72d,0x80e)));continue;case'4':tqto=_0x5f09b6(0x3fe,0x155,0x4af,0x5bf)+'\x0a•\x20HADS\x0a•\x20'+'VINZ\x0a•\x20MIS'+'EL\x0a•\x20SATRI'+_0x5f09b6(0x652,0xce8,0x44e,0x807)+_0x5f09b6(-0x4d0,0x149,-0x347,0xae)+_0x5f09b6(-0x454,-0x1d0,-0x323,-0xf1)+_0x5f09b6(-0x158,-0x67e,0x22,-0xd9)+ini_mark[_0x5f09b6(0x76b,0x605,0x746,0x776)]('@')[0x23fd+-0x1319+-0x2e*0x5e];continue;}break;}}if(subscribezeeoneofc==_0x5f09b6(-0x72,0x25c,-0x4d1,0x20)){console[_0x5a3069(0x1253,0x1320,0xf2d,0xc5a)](color(time,_0x5a3069(0x785,0xef0,0xb48,0x75a)),color('Button\x20mes'+'sage\x20menu'));const _0x17f2f4={};_0x17f2f4[_0x5f09b6(0xa6f,0xd20,0x745,0x77d)]='All\x20menu\x20b'+'ot',_0x17f2f4[_0x5f09b6(0x143,0x534,-0xea,0x25c)+'n']=_0x5f09b6(0x6e3,0x15a,0x4cb,0x291)+'is\x20if\x20you\x20'+_0x5f09b6(-0x253,-0x38,-0x1fb,0x2ff)+_0x5f09b6(0x163,0x28f,0x520,0x435)+_0x5a3069(0x6ce,0x767,0x858,0x783)+'d_',_0x17f2f4[_0x5f09b6(0x5c6,0x9fd,0x61e,0x54d)]='0';const _0x3f998a={};_0x3f998a['title']=_0x5f09b6(-0x5ec,0x111,-0x5c0,-0xdd)+'\x20bot',_0x3f998a[_0x5f09b6(0x85d,0x47c,0x7ca,0x50b)]=[_0x17f2f4];const _0x28ecdc={};_0x28ecdc[_0x5f09b6(0x219,0x78d,0x5cb,0x77d)]='downloadme'+'nu',_0x28ecdc['descriptio'+'n']=_0x5a3069(0xe32,0xef0,0x95a,0x44e)+_0x5f09b6(0x2e6,0x23e,0xa2e,0x741)+_0x5a3069(0x42f,0xe5e,0x9c8,0x7ef)+'e\x20the\x20down'+_0x5a3069(0xc4f,0xae6,0xfc6,0x111a)+_0x5f09b6(0x455,-0x48d,0x419,-0xbd),_0x28ecdc['rowId']='0';const _0x1349a1={};_0x1349a1['title']=_0x5a3069(0x2a3,0x32c,0x5e9,0x9d)+_0x5f09b6(0x88,0x2ea,-0x6ae,-0xf8),_0x1349a1[_0x5a3069(0x10a4,0x9e6,0xbd4,0x795)]=[_0x28ecdc];const _0x5f2934={};_0x5f2934[_0x5f09b6(0x60a,0x5b6,0x927,0x77d)]='groupmenu',_0x5f2934[_0x5a3069(0xe8c,0x9ee,0x925,0x920)+'n']=_0x5f09b6(-0x182,0x2a9,0x3a0,0x291)+'is\x20if\x20you\x20'+_0x5f09b6(0x3a1,-0x195,0x54f,0x2ff)+_0x5f09b6(0x6c3,0x8d7,0x393,0x886)+'pmenu\x20comm'+_0x5f09b6(0x518,-0x3d,0x30b,-0x2b),_0x5f2934[_0x5a3069(0xf28,0x6fe,0xc16,0xa28)]='0';const _0x119a4c={};_0x119a4c[_0x5a3069(0x13c4,0xd47,0xe46,0xc88)]=_0x5f09b6(-0x41f,-0x3d9,-0x517,-0xe0)+_0x5a3069(0xc6b,0xa96,0x8e7,0x46e),_0x119a4c[_0x5f09b6(0x3c9,0x4c3,0x5c8,0x50b)]=[_0x5f2934];const _0x2ca74a={};_0x2ca74a[_0x5a3069(0x1339,0x947,0xe46,0xfde)]='convertmen'+'u',_0x2ca74a[_0x5a3069(0x82b,0x397,0x925,0xb53)+'n']=_0x5f09b6(-0x1b4,0x633,-0x220,0x291)+'is\x20if\x20you\x20'+_0x5a3069(0x7f6,0xe2f,0x9c8,0xc6c)+_0x5a3069(0x1400,0xe0d,0xf20,0x1350)+_0x5f09b6(0x685,0x3db,0x307,0x4db)+'mmand_',_0x2ca74a[_0x5f09b6(0x7e9,0x3ba,0x312,0x54d)]='0';const _0x6f7d1d={};_0x6f7d1d[_0x5a3069(0xa00,0x1122,0xe46,0xe5e)]=_0x5f09b6(0x31,-0x50c,0x113,-0xe0)+_0x5a3069(0x1022,0xa23,0xe24,0x11ec),_0x6f7d1d[_0x5f09b6(0x6a3,0xfb,0x9e5,0x50b)]=[_0x2ca74a];const _0x1d9aef={};_0x1d9aef[_0x5f09b6(0x3c8,0xb2b,0x33c,0x77d)]='funmenu',_0x1d9aef[_0x5f09b6(0x2c,-0x127,-0x1cc,0x25c)+'n']=_0x5a3069(0xcbf,0xb96,0x95a,0x4e7)+_0x5f09b6(0x593,0x422,0x233,0x741)+_0x5a3069(0xad7,0xc21,0x9c8,0x743)+_0x5f09b6(0x1bb,0x42,-0x1a2,0x165)+_0x5f09b6(0x148,0x1b9,0x620,0x18f)+'d_',_0x1d9aef[_0x5a3069(0xbfe,0x9ab,0xc16,0xbc5)]='0';const _0x149296={};_0x149296['title']=_0x5a3069(0xacc,0x83e,0x5e9,0x691)+_0x5a3069(0xf26,0xffd,0xf71,0xc63),_0x149296[_0x5f09b6(0x8f6,0xa53,0x7a1,0x50b)]=[_0x1d9aef];const _0x29c62b={};_0x29c62b['title']='makermenu',_0x29c62b['descriptio'+'n']=_0x5f09b6(0x7a0,0x23c,0x46c,0x291)+_0x5a3069(0xa36,0xe27,0xe0a,0xf8e)+_0x5a3069(0x64a,0x5c8,0x9c8,0x820)+_0x5a3069(0xbae,0x109a,0x100e,0xc29)+_0x5f09b6(0x2e0,0x888,0xa4b,0x5d5)+'and_',_0x29c62b['rowId']='0';const _0x917121={};_0x917121['title']='Sub\x20Menu\x20k'+_0x5a3069(0xfb9,0xfd4,0xbdc,0xdda),_0x917121[_0x5f09b6(0xdc,0x44e,0xa02,0x50b)]=[_0x29c62b];const _0x2bb016={};_0x2bb016[_0x5f09b6(0xaa0,0x4e8,0x44b,0x77d)]=_0x5a3069(0x115b,0xaa1,0xd02,0x108b),_0x2bb016[_0x5f09b6(0x263,-0xf5,0x3ef,0x25c)+'n']='_choose\x20th'+_0x5f09b6(0xaa0,0x2c1,0x565,0x741)+_0x5f09b6(0x41d,0x13,-0x1a4,0x2ff)+_0x5a3069(0x132f,0xe8c,0xe64,0xf41)+_0x5a3069(0x978,0xd60,0xc9e,0x11da)+_0x5a3069(0x84f,0xa76,0x69e,0x594),_0x2bb016[_0x5f09b6(0x63c,0x1c4,0x7a6,0x54d)]='0';const _0x545342={};_0x545342[_0x5a3069(0xd34,0xeb1,0xe46,0xc46)]=_0x5a3069(0x97c,0x38,0x5e9,0xb4a)+'e-6',_0x545342[_0x5f09b6(0x21b,-0x37,0x58c,0x50b)]=[_0x2bb016];const _0x1f7c14={};_0x1f7c14[_0x5a3069(0x8f2,0xa17,0xe46,0x1185)]='ownermenu',_0x1f7c14[_0x5a3069(0xde6,0xd62,0x925,0x6d7)+'n']=_0x5f09b6(0x178,0x373,0x228,0x291)+'is\x20if\x20you\x20'+_0x5a3069(0x9a6,0x54d,0x9c8,0xe32)+_0x5f09b6(0x58a,0x765,0x83e,0x3ef)+_0x5a3069(0xa46,0x94c,0xc9e,0x9f7)+_0x5a3069(0xc01,0x2a8,0x69e,0xb49),_0x1f7c14[_0x5f09b6(-0x48,0x517,0x8fd,0x54d)]='0';const _0x2b0a42={};_0x2b0a42[_0x5a3069(0xcfe,0x924,0xe46,0xe75)]=_0x5f09b6(0x28c,-0x5a6,0x1cb,-0xe0)+_0x5a3069(0xe9a,0x11f3,0xe67,0x1206),_0x2b0a42[_0x5f09b6(0x491,0x103,0x699,0x50b)]=[_0x1f7c14];const _0x3f25db={};_0x3f25db[_0x5a3069(0x932,0x120a,0xe46,0x8c0)]=_0x5f09b6(-0xb9,0x8bc,0x35b,0x3ec)+'u',_0x3f25db[_0x5f09b6(0x7ae,0x16c,0x298,0x25c)+'n']=_0x5a3069(0x52e,0x75f,0x95a,0x72c)+_0x5f09b6(0x5e0,0x8ba,0x68d,0x741)+_0x5f09b6(0x1e9,0x1f,0x13e,0x2ff)+'e\x20the\x20stor'+_0x5a3069(0x7ff,0x6c6,0x4fe,-0x23)+_0x5a3069(0xa2d,0x9aa,0xa75,0xcd0),_0x3f25db[_0x5f09b6(0x41a,0x895,0x1e7,0x54d)]='0';const _0x57b94e={};_0x57b94e[_0x5f09b6(0x28f,0xad4,0x492,0x77d)]=_0x5f09b6(-0x14f,-0x1eb,-0x375,-0xe0)+'e-8',_0x57b94e['rows']=[_0x3f25db];const _0x644a24={};_0x644a24[_0x5a3069(0x1043,0x1149,0xe46,0x125d)]=_0x5f09b6(0x53b,0x3d4,0x531,0x4fe),_0x644a24[_0x5a3069(0x6ae,0x375,0x925,0x7b9)+'n']=_0x5f09b6(-0x250,-0x11c,-0x1e3,0x291)+'is\x20if\x20you\x20'+'want\x20to\x20us'+'e\x20the\x20tagm'+_0x5f09b6(-0x38,-0xa2,0x43a,0x18f)+'d_',_0x644a24[_0x5f09b6(0x103,0x244,-0x46,0x54d)]='0';const _0xad4355={};_0xad4355[_0x5a3069(0xefb,0x1274,0xe46,0xa21)]=_0x5f09b6(0x373,0x3c8,-0x1be,-0xe0)+_0x5f09b6(0x142,-0xdd,0x341,0x1ac),_0xad4355[_0x5a3069(0x727,0x958,0xbd4,0xd9f)]=[_0x644a24];const _0x99faba={};_0x99faba['title']=_0x5a3069(0x3a,0xa7a,0x5d7,0x20a),_0x99faba[_0x5f09b6(-0x15a,0x5da,0x3c0,0x25c)+'n']=_0x5a3069(0x4c5,0x4c1,0x95a,0x446)+_0x5f09b6(0x371,0xa78,0x777,0x741)+_0x5f09b6(0x3b2,0x6ff,-0x1f0,0x2ff)+_0x5f09b6(0x260,0x4ba,0x4d3,0x6d5)+_0x5a3069(0xfd6,0x135e,0xe22,0x11be)+'_',_0x99faba[_0x5f09b6(0x6e1,0x5b2,0x12,0x54d)]='0';const _0x122059={};_0x122059[_0x5f09b6(0xb4f,0x990,0xbe0,0x77d)]=_0x5a3069(0x8de,0x8a7,0x5e9,0x99b)+'e-10',_0x122059[_0x5a3069(0xafa,0xbae,0xbd4,0xfe6)]=[_0x99faba];const _0x2e390a={};_0x2e390a[_0x5a3069(0xa6d,0xb4b,0xe46,0xfc5)]='gacha\x20ceca'+'n',_0x2e390a[_0x5a3069(0x61c,0x4a6,0x925,0x6b1)+'n']=_0x5a3069(0xd18,0x420,0x95a,0x703)+'is\x20if\x20you\x20'+_0x5a3069(0xb1d,0x4e9,0x9c8,0x44f)+_0x5f09b6(-0x270,-0x22e,-0x178,0x175)+'acecan\x20com'+'mand_',_0x2e390a[_0x5f09b6(0x2c6,0x33a,0x7be,0x54d)]='0';const _0x247d0c={};_0x247d0c[_0x5f09b6(0x626,0x217,0x498,0x77d)]=_0x5f09b6(-0x585,-0x13d,0x1fc,-0xe0)+_0x5a3069(0xe40,0xe03,0xa85,0xa6c),_0x247d0c[_0x5f09b6(0x557,0x176,0x529,0x50b)]=[_0x2e390a];const _0x4412a8={};_0x4412a8[_0x5a3069(0x13b8,0x1027,0xe46,0x128c)]=_0x5f09b6(0x1a0,-0x537,0x294,-0x118)+_0x5f09b6(-0x2af,0x23f,0x3b6,0x193),_0x4412a8['descriptio'+'n']=_0x5a3069(0xce0,0xa9b,0x95a,0xa5d)+_0x5f09b6(0x372,0x761,0x4d4,0x741)+'want\x20to\x20us'+'e\x20the\x20tele'+_0x5f09b6(-0x477,0x3ca,-0x11e,0x4e)+'d_',_0x4412a8['rowId']='0';const _0x284c3d={};_0x284c3d['title']=_0x5a3069(0x5b9,0xaa6,0x5e9,0xa97)+_0x5a3069(0x8d6,0xf52,0xb92,0x5ea),_0x284c3d[_0x5f09b6(0x1cf,0xa44,0x329,0x50b)]=[_0x4412a8];const _0x350bc2={};_0x350bc2['title']=_0x5f09b6(-0x495,-0x580,-0x59a,-0x163),_0x350bc2[_0x5a3069(0x427,0xce6,0x925,0xd30)+'n']='_choose\x20th'+_0x5a3069(0xb4b,0x990,0xe0a,0xfba)+_0x5a3069(0x68a,0x691,0x9c8,0xf1c)+_0x5a3069(0xe4a,0xe5d,0x910,0xbb5)+_0x5a3069(0x594,0x7fe,0x730,0xc4e)+'nd_',_0x350bc2[_0x5f09b6(0x4eb,0x89d,0x65d,0x54d)]='0';const _0x1f56db={};_0x1f56db[_0x5a3069(0xd12,0xd68,0xe46,0xba0)]=_0x5f09b6(0x1ef,0x1ab,-0x141,-0xe0)+_0x5f09b6(0x932,0xbc5,0x2f3,0x820),_0x1f56db[_0x5a3069(0x673,0x10bf,0xbd4,0xf81)]=[_0x350bc2];const _0x4fb4d4={};_0x4fb4d4[_0x5a3069(0xacb,0xdeb,0xe46,0xebd)]=_0x5f09b6(-0xb,0x4be,0x1eb,0x29)+'u',_0x4fb4d4[_0x5f09b6(-0x125,0x63a,0x47d,0x25c)+'n']=_0x5f09b6(-0x233,0x55f,0x276,0x291)+_0x5a3069(0x11d3,0xa0c,0xe0a,0x120c)+_0x5a3069(0x472,0xf4c,0x9c8,0x775)+'e\x20the\x20asup'+_0x5a3069(0xcdd,0x327,0x88a,0xa14)+'mmand_',_0x4fb4d4[_0x5f09b6(0x31,0x1ea,0x18a,0x54d)]='0';const _0x885f7c={};_0x885f7c['title']='Sub\x20Menu\x20k'+_0x5f09b6(0x157,0x3ee,0x329,0x649),_0x885f7c[_0x5f09b6(0x865,0x156,0x3e4,0x50b)]=[_0x4fb4d4];const _0x3306b1={};_0x3306b1[_0x5f09b6(0x451,0xc20,0xcb2,0x77d)]=_0x5f09b6(-0x15c,0x5cf,-0x1f1,0x210)+'ct',_0x3306b1['descriptio'+'n']=_0x5a3069(0x69e,0xe13,0x95a,0xd5b)+_0x5f09b6(0x308,0xb12,0x8b1,0x741)+_0x5f09b6(0xca,0x5c4,0x33b,0x2ff)+'e\x20the\x20imag'+_0x5f09b6(-0x4b6,0x351,0x3c,0xf7)+_0x5a3069(0x4b3,0xdd4,0x858,0x625)+'d_',_0x3306b1[_0x5a3069(0x8d2,0xbd1,0xc16,0xbfa)]='0';const _0xa7ae9f={};_0xa7ae9f[_0x5f09b6(0x6d5,0x7ec,0x649,0x77d)]='Sub\x20Menu\x20k'+_0x5f09b6(0x996,-0x145,0xa5,0x46f),_0xa7ae9f['rows']=[_0x3306b1];const _0xc4a959={};_0xc4a959[_0x5f09b6(0x442,0x93f,0x84e,0x77d)]='gacha\x20coga'+'n',_0xc4a959[_0x5a3069(0x79a,0x89d,0x925,0x38a)+'n']=_0x5a3069(0x8bd,0xd8e,0x95a,0x5e8)+'is\x20if\x20you\x20'+'want\x20to\x20us'+_0x5a3069(0x52c,0x55d,0x83e,0x9d9)+'a\x20cogan\x20co'+_0x5f09b6(0x48e,0x8f5,0x6c6,0x3ac),_0xc4a959[_0x5f09b6(0x753,0x3fb,0x39a,0x54d)]='0';const _0x41a649={};_0x41a649[_0x5f09b6(0xb72,0xcb7,0xc96,0x77d)]=_0x5f09b6(0x132,0x326,-0x372,-0xe0)+_0x5a3069(0xbde,0xaa5,0x988,0x5a8),_0x41a649[_0x5a3069(0xe8f,0xdbc,0xbd4,0x9dc)]=[_0xc4a959];const _0x385138={};_0x385138[_0x5a3069(0xd96,0xf27,0xe46,0x1256)]=_0x5f09b6(-0x4,-0x21d,0x366,-0x13c),_0x385138[_0x5f09b6(-0x168,0x12,0x4bf,0x25c)+'n']=_0x5a3069(0xd3c,0xd0a,0x95a,0xbc6)+_0x5f09b6(0x8f7,0xbda,0x34d,0x741)+_0x5f09b6(-0x6d,0x305,0x514,0x2ff)+_0x5f09b6(0x238,0x670,0x7ba,0x647)+_0x5a3069(0x1582,0xfd5,0xfe5,0xbd9)+_0x5a3069(0x49a,0x7e8,0xa23,0x722),_0x385138[_0x5f09b6(0x485,0x8c0,0x54d,0x54d)]='0';const _0x2ca64a={};_0x2ca64a[_0x5f09b6(0x91f,0xc7e,0xbad,0x77d)]='Sub\x20Menu\x20k'+'e-17',_0x2ca64a['rows']=[_0x385138];const _0x244258={};_0x244258[_0x5a3069(0x98a,0xfd6,0xe46,0x1380)]=_0x5f09b6(0x590,0x622,0x494,0x5a6),_0x244258[_0x5f09b6(-0x6b,-0x2dc,0x4c8,0x25c)+'n']='_choose\x20th'+_0x5a3069(0xa49,0x8fa,0xe0a,0xda0)+_0x5a3069(0x4f5,0xbfe,0x9c8,0x782)+_0x5a3069(0x9d5,0xe29,0xde3,0x10d0)+_0x5a3069(0xa45,0xa5d,0x638,0x9de)+_0x5f09b6(0x16f,0x42e,-0x1c4,-0x2b),_0x244258[_0x5a3069(0xef6,0x766,0xc16,0xf77)]='0';const _0x5c399b={};_0x5c399b['title']=_0x5a3069(0x107,0x2df,0x5e9,0xafe)+_0x5f09b6(-0x28c,-0x22f,-0x5ff,-0xff),_0x5c399b[_0x5f09b6(0x1d6,0x412,0x9fe,0x50b)]=[_0x244258];const _0x1528ed={};_0x1528ed['title']=_0x5a3069(0x5f6,0x629,0x701,0x306)+'u',_0x1528ed[_0x5a3069(0xb32,0xb51,0x925,0x965)+'n']=_0x5a3069(0x5d4,0x548,0x95a,0xaf4)+_0x5f09b6(0x214,0x253,0x55d,0x741)+_0x5f09b6(-0x164,-0x12f,-0x7c,0x2ff)+_0x5a3069(0x14b,0x4eb,0x603,0x72c)+_0x5f09b6(0xb26,0x647,0x5d8,0x58e)+_0x5f09b6(0x847,0x61f,0x550,0x3ac),_0x1528ed[_0x5f09b6(0x8e7,0x68a,0x8bf,0x54d)]='0';const _0x16d118={};_0x16d118[_0x5f09b6(0xb11,0x97f,0x855,0x77d)]=_0x5f09b6(-0x60b,-0x391,-0x602,-0xe0)+_0x5f09b6(0x25f,0x4b9,-0x5c1,-0xec),_0x16d118[_0x5f09b6(0x2a2,0xa57,0x814,0x50b)]=[_0x1528ed];const _0x4935b7={};_0x4935b7['title']='photooxyme'+'nu',_0x4935b7[_0x5f09b6(0x64c,0xd2,0x1e1,0x25c)+'n']=_0x5f09b6(-0x1fd,0x625,-0x16,0x291)+_0x5a3069(0x100f,0x868,0xe0a,0x898)+_0x5f09b6(0x139,0x500,0x860,0x2ff)+'e\x20the\x20phot'+_0x5f09b6(0x68a,0x48e,0x5d4,0x1eb)+_0x5f09b6(-0x16b,-0xe9,0x288,-0xbd),_0x4935b7[_0x5f09b6(0x7ad,-0x63,0x265,0x54d)]='0';const _0x70a2d2={};_0x70a2d2[_0x5f09b6(0xc84,0x8e0,0x2a8,0x77d)]=_0x5a3069(0xa63,0x370,0x5e9,0x97b)+_0x5f09b6(0x6fe,0xaa8,0x638,0x8ca),_0x70a2d2['rows']=[_0x4935b7];const _0xaa7bca={};_0xaa7bca['title']=_0x5f09b6(0x9c1,0x55c,0x89b,0x65c),_0xaa7bca['descriptio'+'n']=_0x5a3069(0xd96,0xcda,0x95a,0x88a)+'is\x20if\x20you\x20'+_0x5a3069(0xad4,0xc3e,0x9c8,0x7fb)+'e\x20the\x20soun'+_0x5a3069(0x558,0x987,0x520,0x159)+_0x5a3069(0x80f,0x1b8,0x69e,0xf5),_0xaa7bca['rowId']='0';const _0x35a47c={};_0x35a47c[_0x5a3069(0xd3a,0xe5c,0xe46,0xb2f)]='Sub\x20Menu\x20k'+_0x5f09b6(-0x18d,0x609,0xd2,0x70),_0x35a47c[_0x5f09b6(-0x91,0x459,0x52,0x50b)]=[_0xaa7bca];const _0x2531cf={};_0x2531cf[_0x5a3069(0x10f0,0xc48,0xe46,0x110f)]=_0x5f09b6(-0x41,0x6f2,0x16,0x1f7),_0x2531cf[_0x5a3069(0xa5d,0x5a3,0x925,0x7ff)+'n']=_0x5f09b6(0x56a,0x804,0x17d,0x291)+_0x5a3069(0x9f4,0x9c0,0xe0a,0xe6d)+_0x5a3069(0x7e0,0xa1f,0x9c8,0x493)+_0x5f09b6(0x4d1,-0x25f,0x497,-0x3e)+_0x5f09b6(0x24d,0x1b2,0x7db,0x69b)+'mand_',_0x2531cf['rowId']='0';const _0x33f881={};_0x33f881[_0x5f09b6(0x358,0x513,0xa06,0x77d)]=_0x5f09b6(0x22d,-0x329,0x494,-0xe0)+_0x5a3069(0x46c,0x415,0x7e5,0x89c),_0x33f881['rows']=[_0x2531cf];const _0x466e7a={};_0x466e7a[_0x5a3069(0xa07,0xa71,0xe46,0xcf2)]=_0x5a3069(0x1291,0x85e,0xde9,0x977)+'e',_0x466e7a[_0x5a3069(0x668,0x5a7,0x925,0xd8c)+'n']=_0x5f09b6(-0x604,0x36d,-0xda,-0x207)+_0x5f09b6(0x36a,0xb01,0x6e1,0x89d)+_0x5f09b6(-0x4c5,-0x3a9,0x100,-0x1b2)+_0x5f09b6(0xc39,0x729,0x1b6,0x6f3)+_0x5a3069(0x1342,0x9fb,0xde6,0x1142)+_0x5a3069(0xc57,0xf42,0xf0f,0xc0a),_0x466e7a[_0x5f09b6(0x47b,0x65c,0x10d,0x54d)]=_0x5f09b6(0x888,0x4d9,0xad9,0x720)+'e';const _0x1e1c32={};_0x1e1c32['title']=_0x5f09b6(0x859,0xa04,0x57,0x4c4)+_0x5a3069(0x335,0x2de,0x687,0x5a0),_0x1e1c32['rows']=[_0x466e7a];const _0x518455={};_0x518455['title']=_0x5a3069(0xb05,0x6d6,0x7c7,0x265)+_0x5f09b6(0x6c0,0x888,0x10d,0x391),_0x518455[_0x5a3069(0x769,0x629,0x925,0x816)+'n']='\x0a\x0a_choose\x20'+'this\x20if\x20yo'+_0x5f09b6(-0x32a,0x1bd,-0x37a,-0x1b2)+_0x5f09b6(0x223,0x4b7,0x582,0x225)+_0x5a3069(0xc38,0x8bd,0x828,0x356)+_0x5f09b6(0xb84,0xd73,0x9ab,0x7ee)+_0x5a3069(0x838,0x400,0x98f,0x652)+_0x5a3069(0xe37,0x59a,0x9a7,0x6f7),_0x518455[_0x5a3069(0x1157,0x8e4,0xc16,0xce1)]='0';const _0x477bda={};_0x477bda[_0x5f09b6(0x222,0xb39,0x5ae,0x77d)]=_0x5f09b6(-0x8,-0x4bb,0x94,0x1d)+_0x5a3069(0x104e,0x843,0xc29,0xe59),_0x477bda[_0x5a3069(0x1106,0x95c,0xbd4,0x637)]=[_0x518455];let pip=alpha['prepareMes'+_0x5a3069(0x609,0xade,0xaaf,0xe6c)+_0x5f09b6(0xd43,0x2d8,0x60f,0x7f4)](from,{'listMessage':{'title':'LIST\x20MENU\x20'+_0x5f09b6(-0x4b,0x687,0x34a,0x2ee),'description':_0x5a3069(0x812,0x255,0x6bb,0x837)+sender['split']('@')[-0xd*0x118+-0x1*0x2b4+0x10ec]+(_0x5a3069(0xc44,0x1352,0xe1c,0xaeb)+_0x5f09b6(0x2f7,0x179,0x7b,-0x76)+_0x5f09b6(0x678,0x660,0x955,0x5ec)+_0x5f09b6(0xc61,0x2cf,0x602,0x7ce)+'h\x20list\x20men'+_0x5f09b6(0x790,0x38d,0x56,0x3d5)+_0x5a3069(0xa37,0x96a,0xa14,0x93f)+_0x5f09b6(0x6c8,0x142,0xaf7,0x6f0)+_0x5a3069(0x83e,0x637,0x5f7,0x4fa)),'buttonText':_0x5f09b6(-0x133,-0x2ce,0x3b0,0x7a)+'E','footerText':''+creator,'listType':_0x5f09b6(0x4a4,-0x9e,-0x170,-0xeb)+_0x5f09b6(-0x1d7,0x601,0x18f,0x1ec),'sections':[_0x3f998a,_0x1349a1,_0x119a4c,_0x6f7d1d,_0x149296,_0x917121,_0x545342,_0x2b0a42,_0x57b94e,_0xad4355,_0x122059,_0x247d0c,_0x284c3d,_0x1f56db,_0x885f7c,_0xa7ae9f,_0x41a649,_0x2ca64a,_0x5c399b,_0x16d118,_0x70a2d2,_0x35a47c,_0x33f881,_0x1e1c32,_0x477bda]}},{'quoted':fgclink2,'contextInfo':{'mentionedJid':[sender]}});const _0x5b8ce6={};_0x5b8ce6[_0x5f09b6(0x64b,0x901,0x420,0x5f0)]=!![],alpha[_0x5a3069(0xeb8,0xd0f,0xf84,0x12dd)+_0x5a3069(0xa64,0xad2,0x6a0,0xbb4)](pip,_0x5b8ce6);}const ini_bc_gc_bang=_0x39a5ff=>{function _0x33af50(_0x48b326,_0x2b1bbe,_0x2637a3,_0x52ff80){return _0x5a3069(_0x48b326-0x1ca,_0x2b1bbe-0xf9,_0x2637a3- -0x75,_0x2b1bbe);}const _0x555cf2={'ZwTBI':function(_0x29862e,_0xb7ee1d,_0x3c3856,_0xe4f6e8,_0x52508e,_0x5ce162,_0xaf3760){return _0x29862e(_0xb7ee1d,_0x3c3856,_0xe4f6e8,_0x52508e,_0x5ce162,_0xaf3760);},'hGVqn':_0x10baa6(0xa7e,0x577,0x233,0x522),'TQoxd':'🐨\x20Owner','ZoNRc':'sewa_kak','rQQpd':_0x10baa6(0x56f,0x768,0xb10,0x89d)+'a'};function _0x10baa6(_0x472154,_0x5dbb44,_0x1fab81,_0xae88ee){return _0x5a3069(_0x472154-0x71,_0x5dbb44-0x56,_0x5dbb44- -0x4e1,_0x472154);}var _0x4ffc16=alpha[_0x10baa6(0xdee,0x9e2,0xa37,0xf7c)][_0x33af50(0x16f,0x3f3,0x6c0,0x64a)]()[_0x10baa6(0xc5b,0x8e9,0x645,0xc85)](_0x1dd9f1=>_0x1dd9f1[_0x10baa6(0x498,0x730,0x72b,0xb99)]['endsWith']('g.us'));let _0x3f9642=_0x39a5ff;for(let _0x1e08a9 of _0x4ffc16){_0x555cf2['ZwTBI'](sendButLocation,_0x1e08a9[_0x10baa6(0x5c5,0x730,0x76a,0xae3)],'*BROADCAST'+'*'+enter+enter+_0x39a5ff,''+tampilTanggal+enter+tampilWaktu+enter+enter+'©\x20'+creator,pp_bot,[{'buttonId':_0x555cf2[_0x10baa6(0x4c6,0x7ca,0x5e9,0x4a0)],'buttonText':{'displayText':_0x555cf2[_0x10baa6(0x6fa,0x950,0x848,0x6eb)]},'type':0x1},{'buttonId':_0x555cf2[_0x33af50(0x4a7,0x83d,0x92d,0x628)],'buttonText':{'displayText':_0x555cf2['rQQpd']},'type':0x1}],{});}},ini_bc_pc_bang=_0xf45533=>{function _0x49c61d(_0x51fc31,_0x389cdf,_0x3eab92,_0x45b720){return _0x5f09b6(_0x3eab92,_0x389cdf-0x4b,_0x3eab92-0x1e3,_0x51fc31-0x8a);}const _0x3a8e3e={'zbeRT':function(_0x403afd,_0x53c718,_0x586bdf,_0x29a986,_0x2ce79a,_0x422a7d,_0xc128e1){return _0x403afd(_0x53c718,_0x586bdf,_0x29a986,_0x2ce79a,_0x422a7d,_0xc128e1);},'KpGEE':_0x49c61d(0x419,0x7f2,0x891,-0x12c),'AtFgq':_0x5f3f68(0x242,0x55f,0x28a,0x4de)};var _0x1c87cd=alpha[_0x5f3f68(0x860,0xb2a,0x8de,0xcde)][_0x5f3f68(0x522,0x48c,0x555,0x550)]();let _0x3f3382=_0xf45533;function _0x5f3f68(_0x2e71e5,_0x494671,_0x25af05,_0x677276){return _0x5f09b6(_0x494671,_0x494671-0xff,_0x25af05-0xbe,_0x677276-0x4e4);}for(let _0x3584dc of _0x1c87cd){const _0x5f320c={};_0x5f320c[_0x49c61d(0x2fe,0x87d,0x4e3,0x724)+'t']=_0x49c61d(0x60a,0x8c1,0x312,0x55c)+'a';const _0x30a6e1={};_0x30a6e1[_0x49c61d(0x72,-0x188,0x428,-0x3b9)]=_0x49c61d(0x184,0x703,0x397,-0x52),_0x30a6e1[_0x49c61d(0x52f,0x5f2,0x904,0x539)]=_0x5f320c,_0x30a6e1['type']=0x1,_0x3a8e3e[_0x49c61d(-0x17c,-0xe5,0x42f,0x38)](sendButLocation,_0x3584dc[_0x49c61d(0x5d2,0xb2a,0x200,0x58a)],_0x5f3f68(0x8b9,0xea6,0x1223,0xcbe)+'*'+enter+enter+_0xf45533,''+tampilTanggal+enter+tampilWaktu+enter+enter+'©\x20'+creator,pp_bot,[{'buttonId':_0x3a8e3e['KpGEE'],'buttonText':{'displayText':_0x3a8e3e[_0x5f3f68(0x709,0x724,0xc26,0xa65)]},'type':0x1},_0x30a6e1],{});}};switch(command){case'q':if(!mek[_0x5a3069(0x10ed,0xf5f,0xe86,0xf4d)][_0x5a3069(0xdfd,0x4f9,0x98b,0x816)]&&!isOwner&&!isCreator)return reply(lang[_0x5a3069(0x6cb,0xf29,0xa05,0xc24)]());if(!m[_0x5a3069(0x95,0x4e0,0x50a,-0x1c)])return reply(_0x5f09b6(0x75e,0x2e5,0xc2f,0x692)+_0x5a3069(0x112e,0xbed,0xf9d,0xfb7));let qse=alpha[_0x5f09b6(0x89c,0x21b,0x340,0x516)](await m[_0x5a3069(0xd04,0x893,0xa86,0x4ff)+'bj']());if(!qse[_0x5f09b6(-0x2ad,0x1e0,-0x5bc,-0x1bf)])return reply(_0x5f09b6(0x54f,0x2da,0x1fa,0x2b6)+_0x5a3069(0xb31,0xcc6,0xe8a,0x1128)+_0x5a3069(0x173,0x1aa,0x594,0x919)+_0x5a3069(0x662,0x48b,0xa3c,0x9fa)+_0x5f09b6(0x809,0xeb9,0xc7a,0x953));await qse['quoted'][_0x5f09b6(0x4b1,0x11e,-0x583,-0xe4)+'rd'](m[_0x5f09b6(0x68c,0x4b6,0xaa4,0x4f2)],!![]);break;case _0x5f09b6(0x8c0,0x127,0x846,0x4e2):case'delete':case'd':try{if(!isQuotedMsg)return reply(_0x5a3069(0x3a8,0x45b,0x5d6,0xb15)+_0x5a3069(0x101a,0x1295,0xd65,0x1170));const _0xdf2e34={};_0xdf2e34['id']=mek['message'][_0x5a3069(0xf60,0xc29,0xdd1,0xb62)+_0x5a3069(0xabc,0x857,0x83d,0xad1)]['contextInf'+'o'][_0x5f09b6(0xa96,0x9ad,0xa8b,0x76f)],_0xdf2e34[_0x5f09b6(0x753,0x826,0x5ad,0x74c)]=from,_0xdf2e34[_0x5a3069(0xc67,0x412,0x98b,0x662)]=!![],pp=_0xdf2e34;if(!isGroupAdmins&&!mek[_0x5f09b6(0x48b,0xcf0,0x4d9,0x7bd)][_0x5a3069(0x58e,0x9fc,0x98b,0xc9e)]&&!isOwner&&!isCreator)return reply(mess[_0x5f09b6(0x648,0x986,0xa22,0x5b9)][_0x5f09b6(0x12c,-0x1f,0x516,0x25d)]);alpha['deleteMess'+'age'](from,pp);}catch(_0x2bfde1){reply('reply\x20pesa'+_0x5a3069(0xb06,0xe06,0xe99,0xb73)),reply(_0x2bfde1),console[_0x5a3069(0xfc0,0x13bc,0xf2d,0xa05)](_0x2bfde1);}break;case'getsider':const _0xb2804f={};_0xb2804f[_0x5a3069(0x3e4,0x68d,0x93d,0xc17)+'t']='Check\x20Limi'+'t';const _0x43ab30={};_0x43ab30[_0x5f09b6(-0x57a,-0x458,0x285,-0x18)]='limit',_0x43ab30[_0x5a3069(0xdb9,0x777,0xb6e,0xdf9)]=_0xb2804f,_0x43ab30[_0x5f09b6(0x44b,0x36e,0x9d8,0x663)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang['limit'](prefix),'©\x20'+ownername,[_0x43ab30]);try{if(!isGroup)return reply('Hanya\x20bisa'+_0x5a3069(0x696,0xeff,0xb43,0xa94)+'ruop');if(!isQuotedMsg)return reply('Reply\x20pesa'+'n\x20botnya');infom=await alpha[_0x5f09b6(0x384,-0x50e,0x340,-0x152)+'o'](from,mek[_0x5f09b6(0x26f,0x466,0x963,0x824)]['extendedTe'+_0x5a3069(0x4f3,0xa1f,0x83d,0x9fb)][_0x5f09b6(0xd1,0x202,0x54c,0x2f6)+'o'][_0x5a3069(0x1317,0x99c,0xe38,0xbda)]),hemm=infom['reads'],hemms=infom[_0x5a3069(0xa74,0x9b2,0xc6a,0x93e)],readon=hemms[_0x5f09b6(0x4a7,-0xb6,-0x504,-0xce)](_0x3eeb25=>_0x3eeb25['jid']),readdin=hemm[_0x5a3069(0x415,0xadf,0x5fb,0x20e)](_0x2e91eb=>_0x2e91eb[_0x5a3069(0x106d,0xab5,0xc11,0x827)]),stamp=hemm[_0x5a3069(0x530,0x669,0x5fb,0x3e7)](_0x4892cc=>_0x4892cc['t']);function toTime(_0x2689c8,_0x4d7c24){function _0x468d75(_0x182527,_0x2e1b27,_0x1bb369,_0x1524fa){return _0x5a3069(_0x182527-0x127,_0x2e1b27-0xc,_0x182527- -0x704,_0x1bb369);}const _0x21e7f7={};_0x21e7f7[_0x1028fa(0x1138,0xb9d,0x9da,0x9a4)]=function(_0x396de3,_0x5f0d87){return _0x396de3*_0x5f0d87;};const _0x157194=_0x21e7f7;function _0x1028fa(_0x3c7990,_0x3612f9,_0x430bfc,_0x10bade){return _0x5f09b6(_0x10bade,_0x3612f9-0x1f,_0x430bfc-0x1b7,_0x3612f9-0x2bd);}_0x4d7c24=typeof _0x4d7c24==_0x468d75(-0x123,-0x140,-0x5fc,-0x604)?![]:!![];let _0x5dd0b8=new Date(_0x2689c8);_0x4d7c24&&(_0x5dd0b8=new Date(_0x157194[_0x1028fa(0x6df,0xb9d,0xc31,0xdd1)](_0x2689c8,0xd*-0x4a+-0x7*0x4cb+-0x2937*-0x1)));var _0x5e9217=_0x5dd0b8['getHours'](),_0x5a6065=_0x5dd0b8[_0x1028fa(0x228,0x695,0x6e7,0x7f8)](),_0x18de48=_0x5dd0b8[_0x468d75(0x1bf,0x669,0x444,0x4b3)](),_0x2f3d9b=_0x5e9217+':'+_0x5a6065+':'+_0x18de48;return _0x2f3d9b;}function toBulan(_0x15e6f7,_0x2bb2dd){const _0x3cb0c3={};_0x3cb0c3[_0x254f4d(0xb71,0x4b3,0xae3,0x752)]=function(_0x8ef1cf,_0x2b9e7b){return _0x8ef1cf==_0x2b9e7b;},_0x3cb0c3[_0x286a2b(0xb35,0x90b,0x8c7,0x39d)]=function(_0x168b80,_0x383099){return _0x168b80*_0x383099;},_0x3cb0c3[_0x254f4d(0x679,0x6d1,0x99a,0xac1)]=_0x286a2b(0xdea,0x88f,0xc17,0xff1),_0x3cb0c3[_0x286a2b(0xe9c,0xa5a,0xf09,0x10b6)]=_0x254f4d(0xc4f,0xb7a,0x9c1,0x837),_0x3cb0c3[_0x254f4d(0xf9b,0x1312,0x12c1,0xe75)]=_0x286a2b(0xe6d,0xe4e,0x984,0x61a),_0x3cb0c3['TJFFf']=_0x254f4d(0x4a0,0x576,0x4cb,0x81c),_0x3cb0c3['MXiff']=_0x286a2b(0x4e2,0x764,0x8a0,0x495),_0x3cb0c3[_0x254f4d(0xb15,0xce5,0x7c7,0xd10)]=_0x286a2b(0xed0,0x94c,0xa64,0x7e6),_0x3cb0c3[_0x286a2b(0xe92,0xdd8,0xcb8,0x1161)]='Juli',_0x3cb0c3[_0x254f4d(0xd96,0xdb5,0xd74,0xf40)]=_0x286a2b(0x6d2,0x904,0x9c9,0xeab),_0x3cb0c3[_0x254f4d(0x958,0x7ef,0x4c8,0x691)]=_0x254f4d(0xc8e,0x799,0xc05,0x6dd),_0x3cb0c3[_0x286a2b(0x797,0xdb3,0xa50,0xcf7)]=_0x254f4d(0x257,0x95a,0x556,0x6d0),_0x3cb0c3['ERsJq']='Nopember',_0x3cb0c3['DjdGl']=_0x254f4d(0x664,0x3cf,0x6af,0x930),_0x3cb0c3[_0x254f4d(0x528,0x528,0x95b,0x953)]='Senin',_0x3cb0c3[_0x286a2b(0x1248,0xa39,0xc96,0xf4b)]=_0x286a2b(0x10f2,0x7c8,0xd1c,0xfbe);function _0x286a2b(_0x9b84a8,_0x496792,_0x1d67c5,_0x308746){return _0x5f09b6(_0x9b84a8,_0x496792-0x1e7,_0x1d67c5-0x13e,_0x1d67c5-0x6da);}_0x3cb0c3[_0x286a2b(0x82a,0xe44,0xda5,0xd48)]=_0x286a2b(0x88b,0x863,0xd04,0xa08),_0x3cb0c3['VjcAJ']='Kamis';function _0x254f4d(_0x2a0c64,_0x3adb10,_0x5dc9c6,_0x1c030c){return _0x5f09b6(_0x3adb10,_0x3adb10-0x1bf,_0x5dc9c6-0xa,_0x1c030c-0x600);}_0x3cb0c3['tlOaU']=_0x286a2b(0xabd,0xb09,0xe77,0xda1);const _0x3fea0a=_0x3cb0c3;_0x2bb2dd=_0x3fea0a[_0x286a2b(0x6a6,0x38f,0x82c,0x2c8)](typeof _0x2bb2dd,_0x254f4d(0x393,0x33e,0x4e3,0x518))?![]:!![];let _0x21808d=new Date(_0x15e6f7);_0x2bb2dd&&(_0x21808d=new Date(_0x3fea0a[_0x286a2b(0xc2e,0x79e,0x8c7,0xc47)](_0x15e6f7,0x9b5+-0xe66+0x1f*0x47)));var _0x523ce9=[_0x3fea0a[_0x286a2b(0xe82,0xdae,0xb9b,0xfce)],_0x3fea0a[_0x286a2b(0x1389,0xb3b,0xf09,0x126b)],_0x3fea0a[_0x254f4d(0x1420,0x1204,0xde0,0xe75)],_0x3fea0a['TJFFf'],_0x3fea0a[_0x254f4d(0x207,0x912,0x51c,0x415)],_0x3fea0a[_0x254f4d(0xd6f,0x764,0x119d,0xd10)],_0x3fea0a[_0x254f4d(0x711,0xc13,0x9f5,0xbde)],_0x3fea0a[_0x286a2b(0xa8d,0x12b5,0x101a,0x13fd)],_0x3fea0a[_0x286a2b(0xce8,0x211,0x76b,0xcf0)],_0x3fea0a[_0x254f4d(0xba7,0x4b7,0x418,0x976)],_0x3fea0a[_0x286a2b(0x828,0xc9d,0x7ff,0x63c)],_0x286a2b(0xeef,0x119b,0xbff,0x1066)],_0x13b1e1=[_0x3fea0a[_0x286a2b(0x452,0x6ca,0x55f,0x76b)],_0x3fea0a['AXaGv'],_0x3fea0a['ITGwb'],_0x3fea0a[_0x254f4d(0xd37,0x910,0x74c,0xccb)],_0x3fea0a[_0x254f4d(0x13c0,0xb97,0xb96,0xf3a)],_0x286a2b(0x242,0xb02,0x68b,0x2ea),_0x3fea0a[_0x254f4d(0xcd,0x83,0x2d5,0x50a)]],_0x4386f5=_0x21808d['getDate']();bulanee=_0x21808d[_0x286a2b(0x212,0x4b0,0x5b8,0x195)]();var _0x4e2d6b=_0x21808d['getDay'](),_0x4e2d6b=_0x13b1e1[_0x4e2d6b],_0x19da4c=_0x21808d['getYear'](),_0x1dc042=_0x19da4c<0x997+-0x430+0x1*-0x17f?_0x19da4c+(0x42d*-0x7+0x1*0x6c6+-0x1de1*-0x1):_0x19da4c,_0x2e72d9=_0x4e2d6b+',\x20'+_0x4386f5+_0x254f4d(0xa57,0x988,0x626,0x661)+_0x523ce9[bulanee]+_0x286a2b(0xb5a,0x24a,0x73b,0x19c)+_0x1dc042;return _0x2e72d9;}teksx=_0x5f09b6(0x1d7,0x5ee,0x294,0x34d)+enter;for(let i of hemm){teksx+=_0x5f09b6(-0x23b,-0x213,-0x1a7,-0x1f7)+i[_0x5a3069(0xdef,0x6fe,0xc11,0xc4b)]['split']('@')[0x3*0x362+-0x1*0x38f+-0x697]+enter+_0x5a3069(0xa61,0x69f,0xbf6,0x96e)+toTime(i['t'],!![])+enter+(_0x5a3069(0xe70,0x132a,0xf7e,0xfd2)+':\x20')+toBulan(i['t'],!![])+enter+'•'+enter;}teksx1=_0x5f09b6(0x70c,0x628,0x2f7,0x60e)+'D*'+enter+enter;for(let i of hemms){teksx1+=_0x5f09b6(-0x745,0x1f2,0x324,-0x1f7)+i[_0x5a3069(0x8de,0xe87,0xc11,0xa3b)]['split']('@')[0x8ce+0x3*0xe5+-0xb7d]+enter,teksx1+=_0x5f09b6(0x71f,0x99c,0x311,0x52d)+toTime(i['t'],!![])+enter+(_0x5f09b6(0xa3f,0x34c,0xa87,0x8b5)+':\x20')+toBulan(i['t'],!![])+enter+'•'+enter;}const _0x525b89={};_0x525b89[_0x5f09b6(0x53,-0x118,-0x4c9,-0x108)+'Score']=0x3e7,_0x525b89['isForwarde'+'d']=!![],_0x525b89[_0x5a3069(0x708,0x49c,0x5f1,0x7fb)+'id']=readdin,alpha[_0x5f09b6(0x79f,0x35f,-0x195,0x417)+'e'](from,teksx,text,{'sendEphemeral':!![],'quoted':mek,'thumbnail':fs[_0x5f09b6(-0x4a8,-0x193,-0x76,0xed)+'nc'](_0x5a3069(0x3dd,0x816,0x61b,0x756)+thumbnail),'contextInfo':_0x525b89});const _0x1dc1c8={};_0x1dc1c8[_0x5a3069(0x7fa,0xa42,0x5c1,0x8a2)+'Score']=0x3e7,_0x1dc1c8[_0x5f09b6(0x42e,0x862,0xb93,0x910)+'d']=!![],_0x1dc1c8[_0x5a3069(0x6bd,0xb13,0x5f1,0x892)+'id']=readon,alpha[_0x5a3069(0x5f4,0x549,0xae0,0x921)+'e'](from,teksx1,text,{'sendEphemeral':!![],'quoted':mek,'thumbnail':fs[_0x5f09b6(0x55f,0x48a,-0x3b8,0xed)+'nc']('./image/'+thumbnail),'contextInfo':_0x1dc1c8});}catch(_0x4e53cc){reply(_0x5a3069(0x3bc,0x547,0x8ea,0xb5b)+'n\x20botnya\x20'),reply(_0x4e53cc),console[_0x5f09b6(0xbe7,0xab5,0xc09,0x864)](_0x4e53cc);}await limitAdd(sender,limit);break;case'katailham':const _0x4b1212={};_0x4b1212['displayTex'+'t']=_0x5f09b6(0x418,0x366,0x839,0x450)+'t';const _0x2722af={};_0x2722af['buttonId']='limit',_0x2722af[_0x5f09b6(0x7e9,0x65f,0x14f,0x4a5)]=_0x4b1212,_0x2722af['type']=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang['limit'](prefix),'©\x20'+ownername,[_0x2722af]);const kta=[_0x5f09b6(-0x1df,0x215,0x733,0x2d1)+_0x5a3069(0x433,0xcc5,0x918,0x618)+_0x5f09b6(-0xa8,0x38d,0x2a2,-0xd7)+'ripada\x20sal'+_0x5f09b6(0x385,0xa54,0xae7,0x830)+'i.',_0x5f09b6(-0x178,0x53a,0x17e,-0x43)+_0x5f09b6(-0x1ac,0x518,-0x37,-0x5e)+'mang\x20mampu'+_0x5a3069(0x6bf,0x577,0xa43,0xab9)+_0x5f09b6(0x77b,0x669,0x1f4,0x63a)+_0x5a3069(0x809,0x3fc,0x69b,0xf9)+_0x5a3069(0x594,0x774,0x6ea,0xbb2)+_0x5a3069(0xf47,0xf54,0x1001,0xe79)+'ngin\x20mengu'+_0x5f09b6(0xab0,0x881,0x285,0x5b5)+_0x5a3069(0x1035,0xd80,0xdf9,0xc0d)+_0x5a3069(0xdae,0x8af,0xaa8,0x1040)+'dia\x20kekuas'+_0x5a3069(0x634,0x83a,0x9be,0x92a),'Bila\x20tekad'+_0x5f09b6(0x806,0x572,0xb89,0x76b)+_0x5a3069(0xbda,0xd42,0xcda,0x841)+_0x5f09b6(0x7b5,0x63d,0xa97,0x838)+_0x5a3069(0xbc1,0x18d,0x6d1,0x154)+_0x5a3069(0x133b,0xec3,0xfbb,0xaa2)+'lam\x20usahan'+'ya.','Penderitaa'+_0x5a3069(0x745,0x552,0x5ce,0x6cf)+_0x5a3069(0x486,0xd8c,0x97d,0xd80),_0x5a3069(0xe13,0x9be,0xbba,0x76a)+_0x5a3069(0x4b1,0x777,0x55d,0x490)+_0x5f09b6(-0x4af,-0x573,0x521,0x13)+_0x5f09b6(0xba,-0x208,0x452,0x25e)+_0x5f09b6(0x22c,0x5a4,0xc2c,0x722),'Hidup\x20itu\x20'+_0x5f09b6(0x6dc,0x5f7,0x461,0x873)+_0x5a3069(0x4f8,0x3ea,0x903,0xab6)+_0x5a3069(0xb24,0x1187,0xf7b,0xd26)+_0x5f09b6(-0x144,0xf9,0x286,0x3fa)+_0x5a3069(0x225,0xaff,0x6c1,0xae1)+_0x5f09b6(0x2ec,0x5bb,0x1c2,0x2b3)+'bergerak.',_0x5a3069(0x1bd,0x5eb,0x5a3,0x1df)+_0x5f09b6(0x76,0x14e,-0x338,-0x1c4)+_0x5a3069(0xb1f,0x802,0xb4c,0x63d)+_0x5f09b6(0x28a,-0x252,-0x34,-0x158)+_0x5a3069(0x707,0x83b,0x876,0x490)+_0x5a3069(0xaa2,0x14b2,0xf18,0x976)+_0x5a3069(0xa11,0x602,0x4f8,0x536)+_0x5a3069(0xadc,0xc37,0x818,0x990)+'pala.',_0x5a3069(0x62b,0xc13,0x76a,0xcb3)+_0x5f09b6(0x22b,0x19f,0x853,0x30a)+_0x5a3069(0x5a5,0xe12,0xa56,0xe9a)+_0x5a3069(0xc84,0x535,0x754,0xc77)+_0x5a3069(0x546,0x7e8,0x855,0xd27)+'uah\x20biola;'+_0x5f09b6(-0x586,0x231,0x26e,-0x1c8)+_0x5f09b6(0x7a1,0x24,0x9b3,0x498)+_0x5f09b6(0x578,0x1a6,0x379,0x3f5)+_0x5a3069(0x132b,0x1285,0xe34,0x10e1)+'\x20bisa\x20mera'+_0x5f09b6(0x37a,-0xf5,-0xe9,-0x125)+'?',_0x5a3069(0x708,0xdf2,0x868,0x60a)+_0x5a3069(0xaf8,0xa14,0xaf9,0x90a)+'hadap\x20sesa'+'ma,\x20bersik'+_0x5f09b6(0x932,0xa27,0x2bc,0x73b)+_0x5f09b6(-0x297,-0x1b0,-0x86,0xb3)+_0x5f09b6(0x1e4,0x7ba,0x753,0x57a)+_0x5f09b6(0x76f,0x6f6,0x40b,0x6b0),'Cara\x20palin'+'g\x20baik\x20unt'+_0x5f09b6(0x3e4,0x7b8,0x903,0x5c2)+_0x5f09b6(-0x514,0x227,-0x9f,-0x64)+_0x5f09b6(0x2be,0x3e9,0x850,0x5b7)+'h\x20memberi\x20'+_0x5f09b6(0x28a,0x506,0x646,0x50d)+'da\x20diri\x20se'+_0x5a3069(0xdc5,0xc7e,0xba3,0x684),'Kita\x20tidak'+_0x5a3069(0xcb3,0xa30,0xa93,0xd14)+_0x5a3069(0xdb2,0xc59,0xd47,0x100b)+_0x5f09b6(0x7ae,0xab3,0x54e,0x567)+_0x5a3069(0xcbe,0x649,0x8fd,0xd25)+_0x5f09b6(0x8e9,0x639,0x696,0x931)+'an\x20terkuat'+_0x5a3069(0xbb4,0xf96,0xa4a,0x62e)+_0x5a3069(0x416,0x7a1,0x7ba,0x645)+_0x5a3069(0x3e4,0x514,0x8f5,0xb43)+_0x5f09b6(0xa95,0xe63,0x857,0x8c8)+_0x5a3069(0x605,0x4f7,0x882,0x85f)+_0x5f09b6(0x6f0,0x34e,0x8c4,0x434)+_0x5f09b6(0x75f,0xc8b,0x9da,0x95c),_0x5a3069(0xb4a,0xbc0,0xd4c,0x1289)+'an\x20bahagia'+_0x5f09b6(-0x1c0,0x3a1,-0x26c,0x116)+'\x20memilih\x20u'+_0x5f09b6(0x6c6,0x180,0x84a,0x405)+_0x5a3069(0x85b,0x216,0x6fb,0x262),_0x5a3069(0xefa,0x977,0xea7,0xd6c)+_0x5a3069(0xe0,0x5cc,0x607,0x651)+_0x5f09b6(0xa89,0x6d1,0x644,0x7e8)+'galanya\x20ba'+_0x5f09b6(0x46d,0x612,0xdc2,0x939)+_0x5a3069(0x94b,0x223,0x689,0x67c)+'a\x20hanya\x20in'+_0x5f09b6(0xd17,0xb16,0xd19,0x83e)+_0x5a3069(0xe7,0x2a7,0x53d,0x484)+'untuk\x20sese'+'orang.',_0x5f09b6(0x259,0x1a8,0x3b8,-0xbc)+'mpurna\x20aka'+_0x5a3069(0xb94,0x48e,0x688,0x772)+_0x5f09b6(-0x78,0x187,0x7ba,0x506)+_0x5a3069(0x93d,0x781,0xaab,0xdb2)+_0x5f09b6(0x164,-0x1f4,-0x17f,0x320),_0x5a3069(0x1404,0x10a4,0xe56,0x10cf)+_0x5a3069(0xce9,0xb40,0x9cc,0xdc4)+_0x5a3069(0xb02,0x9e5,0x640,0x33f)+_0x5a3069(0xf6f,0xcca,0xc13,0xd75)+_0x5f09b6(-0x42b,0xb8,-0x1bf,-0x16f)+_0x5f09b6(0x3fb,0x273,0x827,0x510)+_0x5f09b6(0x700,0x8b,0xc7,0x5f6)+_0x5f09b6(-0x233,0x673,0x4ce,0x21f)+'unya\x20dan\x20m'+_0x5a3069(0x69f,0xc12,0x685,0x5ec)+_0x5a3069(0x681,0x4d,0x587,0x3a6)+_0x5f09b6(0x690,0x5a,-0x5b,0x2d2)+'dupnya.',_0x5f09b6(0x4a5,0x905,0x99b,0x465)+_0x5f09b6(-0x2cf,0x2e9,-0x2,-0xbe)+_0x5a3069(0x759,0x929,0xac4,0xa48)+_0x5f09b6(-0x2cb,-0x15b,0x5f1,0x1d5)+_0x5f09b6(0xe9f,0x6be,0x39a,0x926)+_0x5f09b6(0x20f,-0x42e,-0x54d,-0x90)+_0x5f09b6(0x4be,0x3b9,0x88f,0x658)+_0x5a3069(0x5fb,0x857,0xb5f,0xabe)+_0x5a3069(0x867,0xf05,0xad4,0xf6e)+_0x5f09b6(0x57f,0x66c,0xd78,0x7d2),_0x5f09b6(0x811,0x63b,-0x146,0x26a)+_0x5a3069(0xf22,0xa9a,0xa51,0xf23)+_0x5f09b6(0x46c,0x3ac,-0x692,-0x12d)+_0x5f09b6(0x166,0x123,0x7ba,0x283)+_0x5a3069(0x7f7,0x82d,0x849,0x5e3)+_0x5f09b6(0xdbe,0xd75,0xca1,0x83a)+_0x5f09b6(0x5b8,0x84c,0x4f7,0x67c)+_0x5f09b6(0xa2f,0xda2,0xa4a,0x85e),_0x5a3069(0xa06,0x12ab,0xd61,0xf8d)+_0x5a3069(0x812,0x1151,0xd98,0xc0c)+_0x5a3069(0xbff,0xc66,0xf00,0xbfd)+_0x5a3069(0xe67,0xc9e,0xa4d,0xc42)+_0x5a3069(0xd99,0xd0e,0x9c5,0xa8a)+_0x5f09b6(0x95d,0x522,0x154,0x3e7)+_0x5f09b6(0x43c,0x501,0x3eb,0x3e)+_0x5a3069(0xcf,0x465,0x661,0x5e5)+_0x5f09b6(0xa93,0x697,0xdad,0x88d)+_0x5f09b6(0x3e9,0x107,0x63,0x66)+'sudah\x20tert'+_0x5a3069(0x6b1,0x463,0x649,0x177),'Penundaan\x20'+_0x5a3069(0xc3e,0x8ef,0xa80,0xc9b)+_0x5f09b6(0xac3,0x3cf,0x5dc,0x6de)+'a\x20peluang\x20'+_0x5a3069(0xc7f,0x142a,0xe7d,0xbf8)+'.',_0x5a3069(0x377,0x861,0x727,0x7f1)+_0x5f09b6(-0xcd,0x34,0x5f1,0x355)+_0x5a3069(0xe77,0x89d,0xbf0,0xb44)+_0x5a3069(0xc86,0x7ce,0xc26,0xae9)+_0x5a3069(0x6df,0x911,0x936,0xcad)+'arah\x20yang\x20'+_0x5f09b6(0x81b,0x2ef,0x55c,0x4ee)+'ma-sama.',_0x5a3069(0xa65,0x928,0xc46,0x9bd)+_0x5f09b6(0x3c6,0x523,0xdbe,0x88f)+'\x20kita\x20kerj'+'akan\x20berul'+_0x5a3069(0x10c2,0xe83,0xf63,0x1331)+_0x5f09b6(-0x7,0x512,0x361,0x4a7)+_0x5f09b6(-0x4fb,-0x111,0x550,-0x1a)+_0x5a3069(0x11fd,0xa66,0xcaf,0x77a)+_0x5a3069(0xa1a,0xcd4,0x73a,0x447)+'dakan,\x20tet'+_0x5a3069(0xc76,0x7eb,0xce1,0xe20)+_0x5f09b6(0x6ee,-0x170,-0x284,0x2f5),_0x5f09b6(0xacd,0x141,0x50a,0x5ef)+_0x5f09b6(0xb90,0xc79,0x1a8,0x74a)+_0x5f09b6(0x4aa,0xab,0x177,-0x5b)+_0x5f09b6(0x166,0x47b,0x9ca,0x6c7)+_0x5a3069(0xf8e,0xe14,0xe73,0xc19)+_0x5a3069(0x73d,0xbbe,0x990,0x66d)+_0x5a3069(0x7c2,0x293,0x690,0x927)+_0x5a3069(0xe42,0xa66,0x100a,0xad6)+'i\x20Anda\x20han'+_0x5f09b6(0x590,-0x11d,-0x77,0x295)+_0x5f09b6(-0xc3,-0x3b,-0x20d,0x2b),_0x5f09b6(0x450,-0x56c,0x161,-0x11a)+_0x5f09b6(0x584,0x133,0x21d,0x52f)+'at\x20orang\x20l'+'ain\x20tertaw'+_0x5a3069(0x43b,0x52b,0x815,0x705)+'da\x20akan\x20me'+'ndapatkan\x20'+_0x5a3069(0xa0e,0x649,0xb81,0xf00)+_0x5f09b6(-0x40a,0x77,-0x4de,-0x1bc)+'a\x20inginkan'+'.',_0x5a3069(0xa48,0x35f,0x7ec,0xc17)+_0x5f09b6(0xd4,0x2c2,0x6a1,0x2f1)+_0x5a3069(0xd7b,0xd32,0x94a,0xc75)+'\x20lambat.\x20J'+'ika\x20masala'+'h\x20datang,\x20'+_0x5a3069(0x901,0x7f2,0xd37,0xfd1)+_0x5a3069(0xfd3,0xe9a,0xda5,0xccd)+_0x5f09b6(0xb2,-0x246,-0xfc,0x27e)+_0x5a3069(0x2c7,0x384,0x765,0x213)+_0x5a3069(0xb7d,0xcee,0xc37,0x942)+_0x5f09b6(0x3c8,0x419,0x96f,0x715)+_0x5a3069(0x662,0xc7a,0xb52,0xf7a)+'epat\x20ia\x20pe'+_0x5f09b6(-0x88,-0x2cf,-0x171,-0x199),_0x5a3069(0xbd0,0x1386,0x1013,0xe29)+_0x5f09b6(0x2a1,0x4ef,0x729,0x6a6)+_0x5f09b6(0xb45,0xd1a,0x532,0x794)+_0x5a3069(0x88f,0xb2c,0xa4a,0xa22)+'gubah\x20masa'+'\x20lalu.\x20Tap'+_0x5f09b6(0x28d,0x6fe,-0x1b2,0x2e5)+_0x5a3069(0x4d1,0x3d1,0x671,0x263)+_0x5f09b6(0xbc,-0x45,-0x766,-0x1fb)+_0x5f09b6(0x3e1,-0xc2,-0x1e6,0x188)+_0x5f09b6(0x26c,0x4b5,0x4d0,0x95)+'n.','Kesabaran\x20'+_0x5f09b6(0xd1,0x713,-0x29f,0x1d8)+'an\x20dari\x20ke'+_0x5f09b6(-0x121,0x5eb,0x233,0x235)+'n.',_0x5f09b6(0xe4,0x1bd,-0x5c,0x134)+_0x5a3069(0x1059,0xc48,0xe19,0xb91)+'termotivas'+_0x5f09b6(-0xd9,0x2d,-0x59f,-0xcd)+_0x5a3069(0xa24,0xeab,0xa35,0xbec)+'uk\x20maju,\x20b'+_0x5a3069(0x99b,0xbc3,0x8b1,0xd66)+_0x5a3069(0xb22,0x460,0x999,0x456)+'untuk\x20meng'+_0x5f09b6(-0x519,-0x1c0,0x2d0,-0xfc)+_0x5f09b6(-0x4d6,-0x497,0x61,0x57),_0x5a3069(0x301,0x4e6,0x5ef,0x63d)+_0x5f09b6(0x951,0x165,-0x66,0x41f)+'ada\x20selalu'+_0x5a3069(0xc2b,0xeec,0xb56,0xc45)+_0x5f09b6(0x95e,0x806,0x6d6,0x617)+_0x5f09b6(-0x155,0x43,0x55e,0x17e)+_0x5a3069(0x9e6,0xe38,0xf04,0x11bf)+_0x5f09b6(0x434,0xc2d,0xd69,0x7ca)+_0x5a3069(0x4e1,0x68e,0x873,0x840)+_0x5f09b6(0x53c,-0x332,-0xdf,0x229)+_0x5a3069(0x13f6,0xa65,0xe78,0x9a2),'Kebencian\x20'+'seperti\x20ha'+_0x5f09b6(-0xf1,0x106,0x671,0x205)+_0x5a3069(0x52b,0xca0,0x965,0x43f)+_0x5a3069(0xd62,0x9bb,0xb17,0xc57)+_0x5a3069(0x1217,0xe10,0xef4,0xf8e)+'l.',_0x5f09b6(0x86,0x80c,0x552,0x30c)+_0x5a3069(0x959,0xa1d,0xb1b,0xd66)+_0x5f09b6(0x159,0x1db,0x345,0x687)+_0x5f09b6(0x918,0x5da,0xe75,0x918)+_0x5a3069(0x12b4,0x9a3,0xeac,0x1039),_0x5a3069(0x1327,0x126c,0xe11,0xefb)+'ang\x20intens'+_0x5f09b6(0xaa,0x788,0x50b,0x432)+_0x5a3069(0xa3b,0x8de,0xe6b,0x107b)+'dan\x20mengun'+_0x5a3069(0x664,0x82b,0x79c,0x8e0)+'ripada\x20ber'+_0x5f09b6(0x19a,0x331,-0xc9,-0x168)+_0x5f09b6(0xe63,0x578,0x566,0x8f9)+'\x20dan\x20meren'+'ung-renung'+'.',_0x5f09b6(0x4dd,-0xf4,-0x2e,0x3bb)+'k\x20yang\x20bis'+'a\x20Anda\x20lak'+_0x5a3069(0x866,0xea4,0x8f8,0x44c)+'\x20orang\x20lai'+_0x5a3069(0x711,0x702,0x63c,0xa38)+_0x5a3069(0x9d0,0x9d5,0xa78,0xcc7)+_0x5a3069(0xb70,0x1570,0xfff,0xce8)+_0x5a3069(0x819,0xdd,0x56f,0x2e3)+'api\x20memban'+_0x5a3069(0xd78,0xf02,0xa96,0xbb2)+_0x5a3069(0xbae,0xf76,0xd22,0x11a8)+_0x5a3069(0xa33,0xc07,0x887,0x6a6)+_0x5a3069(0x104b,0x8b7,0xb68,0x852)+'i.',_0x5f09b6(-0x440,-0x6cd,-0x36c,-0x1a4)+_0x5f09b6(0x3c5,0x38b,0x154,0x382)+_0x5f09b6(-0x32d,0x209,0x3c7,-0xb0)+_0x5a3069(0x4df,0x7d2,0x70f,0xb9f)+_0x5f09b6(-0x4e,0x283,0x2fe,-0x11d)+'aha\x20adalah'+_0x5f09b6(-0x220,0x5a6,0x16b,0x43)+_0x5a3069(0x7c6,0xab7,0xbcc,0xd03),_0x5a3069(0xc1b,0xaea,0xe74,0x1362)+'tahu\x20kunci'+_0x5f09b6(-0x309,-0x5b0,-0x555,0x3)+_0x5f09b6(-0x35b,-0x1a0,-0x37a,0x1d2)+_0x5a3069(0xb1e,0x915,0xc0c,0x1059)+_0x5f09b6(0xb4a,0x3b0,0xc14,0x70c)+'alan\x20adala'+_0x5f09b6(0x158,0x6a6,0x6f1,0x67b)+_0x5a3069(0x5ef,0x8dd,0x572,0x695)+'mua\x20orang\x20'+'senang.'],su=kta[Math['floor'](Math[_0x5f09b6(0xf2,0x12a,-0x254,0x183)]()*kta[_0x5f09b6(0xeb,-0x37a,-0x57c,0x15)])],_0x314173={};_0x314173['displayTex'+'t']=_0x5a3069(0xa74,0xec8,0xb04,0xf25);const _0x463412={};_0x463412[_0x5f09b6(0x3bd,0x18a,-0x52f,-0x18)]='owner',_0x463412[_0x5a3069(0x9f3,0x108e,0xb6e,0xdb2)]=_0x314173,_0x463412[_0x5f09b6(0x92a,0x74d,0xabb,0x663)]=0x1;const _0x437dff={};_0x437dff['displayTex'+'t']=_0x5f09b6(0xaf1,0x21c,0x2da,0x7c8);const _0x2bf73c={};_0x2bf73c['buttonId']=''+command,_0x2bf73c['buttonText']=_0x437dff,_0x2bf73c[_0x5a3069(0x996,0xc7f,0xd2c,0x786)]=0x1;var buttonns=[_0x463412,_0x2bf73c];buttonMessage={'contentText':su,'footerText':''+tampilTanggal+enter+tampilWaktu+enter+enter+(_0x5a3069(0x407,0x96f,0x8bf,0xd88)+_0x5f09b6(-0x637,-0x540,-0x6,-0xa2)+_0x5a3069(0xa42,0xdef,0x90f,0xe4e))+enter+_0x5a3069(0x304,0x573,0x6be,0xafc)+sender[_0x5a3069(0xc4e,0xf42,0xe3f,0xbaf)]('@')[0x1*-0xaf1+0x20f9+-0x5*0x468],'buttons':buttonns,'headerType':0x1};const _0xd73807={};_0xd73807[_0x5f09b6(0xa8,-0x1aa,0x4c9,0x2fe)]='hi',_0xd73807['forwarding'+'Score']=0x3b9aca00,_0xd73807[_0x5f09b6(0x956,0x775,0x728,0x910)+'d']=!![],_0xd73807['sendEpheme'+_0x5f09b6(0x412,0xd84,0x716,0x951)]=!![],_0xd73807[_0x5a3069(0x6eb,0x63,0x5f1,0x2fd)+'id']=[sender];const _0x4e0387={};_0x4e0387['caption']='Botwea\x20©2k'+'21',_0x4e0387[_0x5f09b6(0x323,0x18f,0x44d,0x2f6)+'o']=_0xd73807,_0x4e0387[_0x5a3069(0x1ee,0x56f,0x50a,0x168)]=ftoko,_0x4e0387[_0x5f09b6(-0x1f3,0xfb,0x2bf,-0x1ed)+'ral']=!![],alpha['sendMessag'+'e'](from,buttonMessage,MessageType[_0x5a3069(0xd89,0x879,0xa04,0x76c)+'sage'],_0x4e0387),await limitAdd(sender,limit);break;case _0x5a3069(0xb1d,0x6ca,0x65a,0x990):const _0x2386eb={};_0x2386eb[_0x5a3069(0xe55,0x881,0x93d,0x76e)+'t']=_0x5f09b6(0x866,0x3a7,0x610,0x450)+'t';const _0x368759={};_0x368759[_0x5f09b6(-0x25c,0x21a,0x36c,-0x18)]=_0x5a3069(0xebb,0x151b,0xfe3,0x12b4),_0x368759[_0x5f09b6(0x68b,-0x69,0x815,0x4a5)]=_0x2386eb,_0x368759['type']=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x5a3069(0xff2,0xb05,0xfe3,0xf79)](prefix),'©\x20'+ownername,[_0x368759]);const dare=[_0x5a3069(0x94a,0xa97,0xcc5,0xcfc)+_0x5a3069(0xbe8,0x550,0x7f0,0x6b0)+_0x5a3069(0xd94,0x124a,0xe8c,0x11b6)+_0x5a3069(0xc93,0x724,0xa4c,0x8a9)+_0x5f09b6(0x2fc,-0xc6,0x3ea,0x2d4)+'uka\x20sama\x20k'+_0x5a3069(0x1055,0xa95,0xb3c,0x59b),_0x5a3069(0x8ba,0x8ae,0x725,0x2b9)+'sh/pacar\x20s'+_0x5a3069(0xce7,0xa77,0xe92,0xe67)+'n\x20ss\x20ke\x20pe'+_0x5f09b6(-0x99,0x265,0x179,0x1ea),'pap\x20ke\x20sal'+'ah\x20satu\x20an'+_0x5f09b6(0x742,-0x132,0x80b,0x3b8),'Bilang\x20\x22KA'+_0x5f09b6(0x3ad,0x3c2,0x4b8,0x468)+'BANGET\x20NGG'+_0x5a3069(0x765,0xbdf,0xcae,0x709)+_0x5a3069(0x327,0x567,0x626,0x7d8),_0x5a3069(0xe6c,0xd30,0xb8c,0xd1b)+'call\x20whats'+_0x5a3069(0xa63,0x391,0x746,0xcf8),_0x5a3069(0xa3d,0xbe3,0xf77,0xfc3)+'🤥\x20setiap\x20n'+'getik\x20di\x20g'+_0x5a3069(0x10db,0x9fa,0xd3a,0xf4e)+'a\x201\x20hari',_0x5f09b6(-0x148,-0x157,0x206,0x354)+_0x5a3069(0x137e,0xf1d,0xedb,0x11a7)+_0x5f09b6(0x260,-0x268,-0x428,0x6b)+'call\x20u\x20bab'+'y?',_0x5a3069(0xce8,0xd7e,0xd6b,0x11c4)+_0x5a3069(0xd02,0xa29,0x753,0x28a)+_0x5a3069(0x1123,0x11d2,0xeeb,0xbcd)+'\x20tag\x20membe'+_0x5f09b6(0x462,0x4b3,0x66c,0x4b0)+'ok\x20buat\x20ku'+_0x5a3069(0x132b,0x115b,0xee6,0xcc9),_0x5a3069(0xe06,0xa48,0xabd,0xc9a)+_0x5f09b6(0x6c0,0x93d,0x64a,0x4f4)+_0x5f09b6(-0x31c,0x5ec,0x2b1,0xad),_0x5a3069(0x50e,0x590,0xa07,0xead)+_0x5a3069(0x8ab,0xffc,0xc47,0xee0)+_0x5a3069(0x6fa,0xea8,0xa5f,0xdd9)+'m','ganti\x20nama'+_0x5f09b6(0xe25,0x331,0xbd5,0x899)+_0x5a3069(0x899,0x9e4,0xc90,0x85b)+_0x5a3069(0x48c,0x8e2,0x787,0xd34)+_0x5f09b6(0xa8,-0x2b6,0x218,-0x17c)+'5\x20jam',_0x5a3069(0xbd7,0x849,0x6b9,0x7ab)+_0x5a3069(0xd9d,0x87d,0xdb8,0x95c)+_0x5f09b6(-0xce,-0x37a,0x53a,0x182)+_0x5f09b6(0xd19,0x731,0xbb5,0x860)+_0x5a3069(0x758,0x9fd,0x52a,0x69d)+_0x5f09b6(0xb4c,0x691,0x385,0x669)+_0x5a3069(0x128,0x4da,0x6dd,0x231)+'cky\x20to\x20hv\x20'+'you',_0x5f09b6(0x9d,-0x18d,0x1d2,0xe)+'\x20mantan\x20da'+_0x5f09b6(0x3b9,0x2db,0x51b,0x852)+'\x20i\x20love\x20u,'+'\x20pgn\x20balik'+'an',_0x5f09b6(0x2f,-0x41c,-0x489,-0x14)+_0x5f09b6(0xb83,0xe5,0x991,0x64e)+'rah\x20al-kau'+_0x5a3069(0xb2f,0x928,0xc75,0xe4b),_0x5a3069(0x38c,0x86d,0x8c5,0x570)+'hv\x20crush\x20o'+_0x5a3069(0x705,0x422,0x7d3,0x3ef)+_0x5a3069(0xa54,0x7a3,0xcfa,0xe6a)+_0x5f09b6(0x550,0x27f,0x8ee,0x540)+_0x5a3069(0x887,0x87e,0x945,0xbc3)+_0x5f09b6(0x772,0x6c4,0xbd8,0x917)+_0x5a3069(0xaa1,0x6e5,0x4eb,0x2fb)+'gt\x20kamu\x20ch'+'at\x20(serah\x20'+_0x5f09b6(0x3a1,-0x5a5,0x6f,0x11)+_0x5f09b6(-0x220,-0x161,0x38b,0x2a3)+'dia\x20bales,'+_0x5f09b6(-0x314,-0x1ae,-0x473,0xb6)+_0x5f09b6(0x50b,0x26b,0x283,0x6f5)+_0x5a3069(0x505,0x8ba,0x8e0,0x8d7),_0x5a3069(0x1ba,0x25d,0x6bd,0x7c9)+_0x5f09b6(0x19b,-0x28d,-0x337,0x1fb)+_0x5f09b6(0x8a1,0x79,0x5e6,0x622),_0x5f09b6(0x31,-0x3ad,0x528,-0x5f)+_0x5a3069(0x981,0xba2,0x6a7,0xbf1)+'/crush',_0x5f09b6(-0x3fa,-0x4d2,-0x431,-0xc1)+_0x5f09b6(-0x432,0x42f,0x501,0x8e)+_0x5f09b6(0x4fe,0x882,0xa64,0x5df)+_0x5f09b6(0x42e,0x2d5,0xa58,0x61d),_0x5a3069(0x1293,0xede,0xe21,0xe17)+_0x5f09b6(0x779,0x4a3,0x4bf,0x343)+_0x5f09b6(0xb46,0x588,0x1fd,0x6e3)+_0x5a3069(0x769,0x482,0x9bb,0x64f)+_0x5f09b6(0x7aa,0x7d2,0x532,0x574),_0x5a3069(0x27e,0x50e,0x7ed,0xd8a)+_0x5a3069(0x8ca,0xc4e,0xa13,0x9d7)+_0x5a3069(-0x6,0x908,0x52d,0x6d6)+'ku\x20anak\x20pu'+'ngut','teriak\x20pak'+_0x5a3069(0x9d1,0x79e,0x76d,0xd19)+_0x5a3069(0xcde,0x917,0x9c1,0xefd)+_0x5f09b6(0x7a0,0x5e1,-0x20,0x24b)+_0x5a3069(0xe67,0x7f0,0xcb1,0xf9e),_0x5a3069(0x119c,0x1047,0xcee,0x893)+_0x5f09b6(-0x21d,0x2c0,0x1f9,-0x186)+_0x5a3069(0x7e9,0xb7f,0x877,0x452)+_0x5f09b6(-0x255,-0x46,0x1a7,-0x1ae)+_0x5a3069(0xcee,0xd99,0xc23,0xa9a),_0x5a3069(0x487,0x969,0x6fc,0xae5)+_0x5f09b6(0x220,0x30d,0x4bc,0x245)+_0x5a3069(0x3f4,0xa44,0x604,0xfb)+'a\x2024\x20jam',_0x5f09b6(0x8b3,0x3fe,0x343,0x77a)+_0x5f09b6(-0x101,-0x352,-0x510,0x28)+_0x5a3069(0x9b3,0xd7d,0xb87,0xe6b)+'kerasukan\x20'+'maung,\x20ker'+_0x5f09b6(0x26e,0x10c,-0x1a8,-0x165)+'alang,\x20ker'+_0x5f09b6(0x61e,0x4d3,-0x1e1,0x120)+_0x5f09b6(-0x3d5,-0x9,-0x350,-0x2)],der=dare[Math['floor'](Math['random']()*dare[_0x5f09b6(0x1ba,0x31d,-0x538,0x15)])],_0x47d2e6={};_0x47d2e6['displayTex'+'t']=_0x5f09b6(0x9a9,0xd3,0x7b9,0x43b);const _0x4c9d1c={};_0x4c9d1c[_0x5a3069(0x122,0x3b3,0x6b1,0x383)]='owner',_0x4c9d1c[_0x5f09b6(0x296,0x9d3,0x970,0x4a5)]=_0x47d2e6,_0x4c9d1c[_0x5f09b6(0x411,0x50a,0x816,0x663)]=0x1;const _0x101b51={};_0x101b51['displayTex'+'t']=_0x5a3069(0x119f,0xdac,0xe91,0xce2);const _0x459010={};_0x459010[_0x5f09b6(-0x15d,0x1fa,0x55f,-0x18)]=''+command,_0x459010['buttonText']=_0x101b51,_0x459010['type']=0x1;var buttonns=[_0x4c9d1c,_0x459010];buttonMessage={'contentText':der,'footerText':''+tampilTanggal+enter+tampilWaktu+enter+enter+(_0x5a3069(0x514,0xb04,0x8bf,0xb17)+'more\x20quote'+_0x5f09b6(-0x161,0x15f,0x7d3,0x246))+enter+'~\x20@'+sender[_0x5a3069(0x1054,0x12fd,0xe3f,0xd56)]('@')[0x2ca+0x993+-0xc5d],'buttons':buttonns,'headerType':0x1};const _0x17c9ef={};_0x17c9ef['text']='hi',_0x17c9ef[_0x5a3069(0x1f9,0xaa3,0x5c1,0x83d)+'Score']=0x3b9aca00,_0x17c9ef[_0x5f09b6(0xbd0,0x453,0x6ce,0x910)+'d']=!![],_0x17c9ef[_0x5f09b6(-0x565,0x291,0x2cc,-0x1ed)+_0x5a3069(0x1132,0xca1,0x101a,0xe7b)]=!![],_0x17c9ef[_0x5f09b6(0x2aa,-0x37e,-0x66a,-0xd8)+'id']=[sender];const _0x6c3c71={};_0x6c3c71[_0x5f09b6(0x563,0x92c,0x4d2,0x7e9)]=_0x5f09b6(-0x1c,0x719,0x33,0x474)+'21',_0x6c3c71[_0x5f09b6(-0x83,0x670,0x622,0x2f6)+'o']=_0x17c9ef,_0x6c3c71[_0x5f09b6(-0xf4,0x379,0x215,-0x1bf)]=ftoko,_0x6c3c71[_0x5f09b6(0x28f,0x395,0x215,-0x1ed)+_0x5a3069(0x133b,0x11da,0x101a,0x1269)]=!![],alpha['sendMessag'+'e'](from,buttonMessage,MessageType[_0x5f09b6(-0x80,0x89e,0x665,0x33b)+_0x5f09b6(0x2d5,0x307,0x25d,-0x29)],_0x6c3c71),await limitAdd(sender,limit);break;case _0x5f09b6(0x577,0x92e,0x591,0x8b9):const _0x395481={};_0x395481['displayTex'+'t']='Check\x20Limi'+'t';const _0x58c0fa={};_0x58c0fa[_0x5a3069(0x77c,0xb26,0x6b1,0x513)]=_0x5a3069(0x140b,0x13a7,0xfe3,0xe53),_0x58c0fa[_0x5a3069(0xdd3,0x91b,0xb6e,0x6f5)]=_0x395481,_0x58c0fa[_0x5f09b6(0x977,0x923,0x95b,0x663)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x5f09b6(0xc77,0x3f1,0xe1f,0x91a)](prefix),'©\x20'+ownername,[_0x58c0fa]);const trut=[_0x5a3069(0x72f,0x936,0x86f,0x4c5)+_0x5a3069(0xba5,0x539,0x9df,0xc7f)+_0x5a3069(0xb00,0xa47,0x69f,0x296)+_0x5a3069(0xefa,0x10a2,0xbb4,0xb35),_0x5a3069(0xb16,0xcb4,0x92c,0x48d)+_0x5f09b6(0x1c0,0xeb,0x1fd,0x178)+_0x5a3069(0xe6d,0xd56,0xf1d,0x12a3)+_0x5a3069(0x81b,0x5eb,0xa2a,0x761)+_0x5a3069(0xd5e,0x1426,0xffc,0xa69)+_0x5f09b6(0xa80,0x59f,0x843,0x888)+_0x5f09b6(0x2d,0x341,-0x1c1,0x73)+'\x20sahabat?('+_0x5f09b6(0x6b7,0xc2e,0x6ad,0x68a)+_0x5f09b6(0x35a,-0x4a6,-0x53c,-0x17e)+')',_0x5a3069(0x8c4,0x1175,0xdba,0x9a5)+_0x5f09b6(0x1ac,0x170,-0x2e2,0xdb)+'ar\x20kamu?','pernah\x20suk'+_0x5f09b6(0x3dd,0x134,0x106,0x3a7)+'ng\x20dan\x20mer'+_0x5f09b6(0x9da,0x478,0x467,0x92a)+'itu\x20suka\x20s'+_0x5a3069(0x1220,0xe32,0xf34,0xc8d)+_0x5a3069(0x862,0xa33,0x758,0x8af),'Siapa\x20nama'+'\x20mantan\x20pa'+_0x5f09b6(-0x2fb,0x2f4,0x20a,-0xa5)+_0x5f09b6(0xaee,0x844,0x30,0x583)+_0x5f09b6(-0x344,-0x57f,-0x41c,-0x24)+'sukai\x20diam'+_0x5a3069(0x753,0xa79,0xcb2,0xe8b),'pernah\x20gak'+_0x5a3069(0xec6,0x4a2,0x9e2,0xc9c)+_0x5f09b6(0x16a,0x547,0x57c,0x282)+_0x5a3069(0xaa5,0x8d4,0x8bd,0xc3b)+_0x5f09b6(0x2f6,0x4a8,0x512,0x60b),_0x5a3069(0x925,0x1214,0xd04,0x109a)+_0x5a3069(0xaaf,0xc36,0xdcb,0xde2)+_0x5f09b6(0xc7b,0xb44,0xcb2,0x8c9)+_0x5f09b6(0x593,0x608,0x35b,0x858)+_0x5f09b6(-0x3e2,-0x3e4,0x208,-0x30),'pernah\x20cin'+_0x5f09b6(0x5e3,0x8db,0x50a,0x3f9)+_0x5a3069(0x74c,0x952,0x51d,0x4e3)+_0x5a3069(0x1154,0x1033,0xc52,0x1033)+_0x5f09b6(-0x58,-0x32d,0x2c6,0x45)+_0x5f09b6(0x33c,0xcc2,0xb81,0x72a)+_0x5f09b6(0x2ca,0x3b9,0x726,0x310)+_0x5f09b6(0x2c3,-0x47e,-0x67b,-0x194)+'u?',_0x5f09b6(-0x44c,0x325,-0xaf,0x161)+_0x5a3069(0x558,0x9f8,0xae6,0xb68)+_0x5f09b6(0xb47,0x4d5,0x507,0x891),_0x5f09b6(-0x289,0x33b,-0x15c,-0xdf)+_0x5a3069(0x646,0x44e,0x975,0x68d)+_0x5f09b6(0x4b1,-0x1bb,0x38e,0x201),_0x5a3069(0xe82,0x1371,0xe6a,0xb9d)+'g\x20yang\x20pal'+'ing\x20berpen'+_0x5a3069(0x810,0xab4,0xcb4,0x1116)+_0x5f09b6(0x6c,-0x7,0x2fd,0x1ee)+_0x5a3069(0xd46,0x104d,0xde8,0xc9c),'hal\x20memban'+_0x5a3069(0x143c,0x999,0xf3a,0x107c)+_0x5f09b6(0x57b,0x578,-0x5cc,-0x23)+_0x5a3069(0x429,0x8d0,0x729,0x5d9)+'di\x20tahun\x20i'+'ni',_0x5a3069(0x966,0xed8,0xe6a,0x1187)+'g\x20yang\x20bis'+'a\x20membuatm'+_0x5f09b6(0x6dd,0x2ed,0x9ed,0x88b),_0x5f09b6(0xc40,0x796,0x6b9,0x7a1)+'g\x20yang\x20per'+_0x5a3069(0xcf6,0xa06,0xf9c,0x14b7)+_0x5a3069(0xa16,0xdca,0xd42,0xe2e),'(bgi\x20yg\x20mu'+'slim)\x20pern'+_0x5a3069(0x769,0x8dd,0x586,0x75b)+_0x5f09b6(0x27d,0xd4,0x853,0x48a)+'?',_0x5a3069(0x54c,0x944,0x904,0xce6)+'\x20paling\x20me'+_0x5f09b6(-0x60d,-0x2ef,-0x69c,-0x171)+'pe\x20pasanga'+_0x5f09b6(-0x243,-0x122,-0x2ed,-0xcc)+_0x5a3069(0xa53,0x77b,0xc70,0xc7f),_0x5f09b6(0x231,-0x46e,-0x255,0x13a)+'(main\x20bare'+_0x5a3069(0xd39,0x917,0x853,0x449)+'apa?','pernah\x20nol'+'ak\x20orang?\x20'+'alasannya\x20'+_0x5f09b6(0x800,0x9c3,0x4a6,0x756),_0x5a3069(0xaee,0x598,0x94e,0xaab)+_0x5a3069(0x6f3,0x6e9,0x4d6,0x984)+'ng\x20bikin\x20k'+_0x5f09b6(0x514,0x486,0x53f,0x3ab)+'hati\x20yang\x20'+_0x5a3069(0x95e,0xab9,0x5e7,0x5fb)+_0x5f09b6(0x602,0x8fb,0xad4,0x56c),_0x5f09b6(0x8af,0x819,0x1d0,0x61a)+_0x5a3069(0x6ed,0x7cd,0x706,0x8a8)+_0x5f09b6(0x51f,0x619,0x5e7,0x760)+_0x5a3069(0xc61,0x1473,0xf97,0xe06)+'ahun\x20ini?',_0x5f09b6(0x33a,0x29b,0x632,0x7c4)+_0x5f09b6(0x516,0xa51,0x58f,0x564)+'o\x20pas\x20di\x20s'+_0x5a3069(0x11f2,0xa44,0xe07,0x12a9)+'?'],ttrth=trut[Math['floor'](Math[_0x5a3069(0x3fa,0x581,0x84c,0x327)]()*trut['length'])],_0x2597da={};_0x2597da[_0x5f09b6(-0xff,0x6ac,0x550,0x274)+'t']=_0x5f09b6(0x19c,0x2ee,0x162,0x43b);const _0x5f4758={};_0x5f4758[_0x5a3069(0x437,0x6e0,0x6b1,0x1f1)]='owner',_0x5f4758[_0x5f09b6(0x1e9,-0x5b,0x90b,0x4a5)]=_0x2597da,_0x5f4758[_0x5a3069(0xbb9,0xde4,0xd2c,0xff2)]=0x1;const _0x22fafd={};_0x22fafd[_0x5f09b6(0x690,0x77f,0x69b,0x274)+'t']=_0x5a3069(0xba9,0x138e,0xe91,0x1173);const _0x48f7f1={};_0x48f7f1[_0x5a3069(0x1ce,0x553,0x6b1,0x5bc)]=''+command,_0x48f7f1['buttonText']=_0x22fafd,_0x48f7f1['type']=0x1;var buttonns=[_0x5f4758,_0x48f7f1];buttonMessage={'contentText':ttrth,'footerText':''+tampilTanggal+enter+tampilWaktu+enter+enter+(_0x5a3069(0x547,0x45e,0x8bf,0xb88)+_0x5f09b6(-0x472,-0x530,-0x10a,-0xa2)+_0x5f09b6(0x14e,0x3fa,-0x35f,0x246))+enter+'~\x20@'+sender['split']('@')[0x1edc+0x1b*-0x43+-0x17cb],'buttons':buttonns,'headerType':0x1};const _0x120244={};_0x120244[_0x5a3069(0x4d1,0xd58,0x9c7,0x4aa)]='hi',_0x120244[_0x5a3069(0x830,0x7a6,0x5c1,0xa47)+_0x5a3069(0x3aa,0xd35,0x92a,0x723)]=0x3b9aca00,_0x120244[_0x5f09b6(0xcc2,0x550,0xac7,0x910)+'d']=!![],_0x120244[_0x5a3069(0x2ec,0x2e6,0x4dc,0x84c)+'ral']=!![],_0x120244[_0x5f09b6(-0x5bd,0x20c,-0x62e,-0xd8)+'id']=[sender];const _0x3ab73a={};_0x3ab73a[_0x5f09b6(0xaa1,0x9a1,0x7ce,0x7e9)]=_0x5a3069(0xe53,0xae3,0xb3d,0xf94)+'21',_0x3ab73a['contextInf'+'o']=_0x120244,_0x3ab73a[_0x5a3069(0x3c1,0x637,0x50a,0x9de)]=ftoko,_0x3ab73a[_0x5f09b6(0xd7,-0x639,-0xd0,-0x1ed)+'ral']=!![],alpha[_0x5a3069(0xeca,0xd43,0xae0,0x648)+'e'](from,buttonMessage,MessageType[_0x5f09b6(0x817,0x278,-0x1c5,0x33b)+_0x5f09b6(-0x1e7,0x2cb,-0x292,-0x29)],_0x3ab73a),await limitAdd(sender,limit);break;case'katadilan':const _0x99bc9d={};_0x99bc9d[_0x5a3069(0xaeb,0x61f,0x93d,0xc11)+'t']='Check\x20Limi'+'t';const _0x200e2c={};_0x200e2c[_0x5a3069(0xb2f,0x192,0x6b1,0x6f7)]=_0x5f09b6(0xe93,0x50c,0x71d,0x91a),_0x200e2c[_0x5a3069(0xeb4,0x60c,0xb6e,0x780)]=_0x99bc9d,_0x200e2c[_0x5f09b6(0x28c,0x3bf,0x5fc,0x663)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x5a3069(0xd24,0xc91,0xfe3,0xc8d)](prefix),'©\x20'+ownername,[_0x200e2c]);const cc=['Cemburu\x20it'+_0x5a3069(0x12d0,0x7f5,0xd63,0xb7a)+_0x5f09b6(0x142,-0x2da,0x2ee,0x25a)+_0x5a3069(0x13ad,0xece,0xf03,0x9ff)+_0x5f09b6(0x25,-0x193,-0x77,0x328)+_0x5f09b6(0x14c,-0x59,0x2bd,-0x182)+_0x5a3069(0x1025,0xa03,0xb71,0x863)+_0x5f09b6(0x938,0x93b,0x12b,0x4ff)+_0x5a3069(0x10a5,0x107e,0x1000,0x13a6)+'\x20percaya\x20d'+_0x5f09b6(0x88e,0x88c,0x769,0x6b0),_0x5f09b6(0xac3,0x321,0x681,0x5fa)+'ndai\x20cembu'+_0x5a3069(0x93e,0x9de,0xe33,0x13cd)+'n,\x20kalau\x20k'+_0x5f09b6(-0x354,-0x2d2,-0x101,0x22d)+_0x5a3069(0x3d5,0x6dc,0x6e5,0xb05)+_0x5a3069(0xfcc,0xc10,0xf0a,0xc02)+_0x5f09b6(0x9cc,0xb9a,0xa99,0x8c7)+_0x5f09b6(-0x288,0x41f,0x8b,0xc5)+_0x5a3069(0xe12,0x113c,0x1005,0x1157)+_0x5f09b6(0x34b,0x38e,0xb76,0x5f7),_0x5a3069(0xb87,0xe19,0x899,0x71a)+_0x5a3069(0x422,0x6f5,0x57e,0x15a)+'mburu\x20Mile'+_0x5f09b6(-0x36f,0x179,-0x553,-0x113)+'cuma\x20menci'+_0x5f09b6(0x12c,-0x62,0x527,0x1b1),_0x5f09b6(0xcdf,0x24c,0x8fb,0x7dc)+_0x5f09b6(0x3ee,0x675,-0x298,0x22e)+'emburu\x20itu'+_0x5a3069(0xc74,0xdba,0xfad,0xd0b)+_0x5a3069(0xb88,0xebe,0xbf9,0x668)+_0x5a3069(0x9a6,0xdd0,0x920,0x3d3)+_0x5a3069(0x91e,0xf95,0xbfe,0xdc4)+_0x5a3069(0x42f,-0x21,0x515,0x927)+'erjebak\x20ol'+_0x5a3069(0x74f,0x5d7,0x4d4,0x80e)+'ena\x20aku\x20sa'+_0x5f09b6(0x148,0x292,0x690,0x170)+_0x5f09b6(0x635,-0x2d8,0x414,0xc7)+'mburu.',_0x5f09b6(0x574,0x489,0x56d,0x33d)+_0x5a3069(0xc54,0xa93,0x8ed,0x8c3)+_0x5a3069(0xcd2,0xfbd,0xd41,0x9eb)+'\x20akan\x20menj'+'adi\x20udah\x20p'+_0x5f09b6(0x173,0x4bd,0x43e,-0x19)+_0x5f09b6(0x6de,0x7e0,0x3ea,0x789)+_0x5f09b6(-0x732,-0x2a2,0x38f,-0x1be)+_0x5f09b6(-0x52f,-0x4e3,-0xbf,-0x6e)+'kembali,\x20a'+_0x5a3069(0x1233,0xe3a,0xe63,0xa05),_0x5f09b6(0x918,0x902,0x8dd,0x8c1)+'du,\x20ini\x20be'+_0x5a3069(0x473,0xe15,0x90b,0xb51)+_0x5f09b6(0xb0b,0x4df,0xcc6,0x855)+'at.\x20Biar\x20a'+_0x5f09b6(0xa05,0x9f6,0x57,0x609),_0x5f09b6(0x41b,-0x372,0x217,0x105)+_0x5f09b6(-0x4ba,0x466,-0x47e,-0xb1)+_0x5f09b6(0x420,-0xa3,0x2d0,-0x46)+_0x5f09b6(0x1fb,0x22f,0x34,0x2fa)+'ngan\x20aku\x20y'+_0x5a3069(0x97d,0x5d4,0x7a7,0x690)+'\x20ke\x20kamu.',_0x5f09b6(0x1a8,-0x145,-0x222,-0x1fd)+_0x5a3069(0x8a4,0xe01,0xe01,0xb88)+_0x5a3069(0xf8f,0x135e,0xe25,0x10b3)+'rimu\x20jaket'+_0x5f09b6(0x2eb,0x4b9,-0x2a7,0x292)+_0x5f09b6(0x7c8,0x7c3,-0x6,0x43f)+_0x5f09b6(0xda5,0x330,0x691,0x8bc)+_0x5a3069(0x623,0x8bb,0x559,0xf2)+'akan\x20menja'+_0x5a3069(0xd7d,0x514,0x9aa,0xc0c),_0x5f09b6(0x1f6,0x2e5,-0x1ac,-0xee)+'intaimu\x20ad'+_0x5a3069(0xbb3,0xaef,0x610,0x813)+_0x5f09b6(0x706,0x327,0x302,0x228)+_0x5f09b6(-0xf9,0x107,0x4f0,0x27b)+_0x5f09b6(0x48a,0x6b9,-0x3d7,0x1c9)+_0x5f09b6(0x179,0x565,0x889,0x338)+'a.',_0x5a3069(0xf2d,0x141a,0xf2c,0x114b)+'ah\x20merindu'+_0x5a3069(0x758,0x464,0x59a,0x5ef)+_0x5a3069(0xe5f,0xdc1,0xe4f,0x109d)+_0x5f09b6(-0x2a0,-0xe,-0x4e,-0x27)+_0x5f09b6(0x48a,0x2ca,-0x5b,0x6d)+_0x5a3069(0xe0e,0xeb7,0xfcf,0xed3)+_0x5f09b6(0x322,0x520,0x36a,0x529)+_0x5f09b6(0x4ae,0x56f,0x14b,0x3b6)+_0x5f09b6(0x425,0x1f8,0xabf,0x5ce)+_0x5f09b6(0x664,0x4f1,0x271,0x821),_0x5f09b6(-0x236,-0x403,0x336,0x105)+_0x5f09b6(0x6a0,0xabe,0xa08,0x6e7)+'\x20aku,\x20itu\x20'+'hak\x20kamu,\x20'+'asal\x20janga'+_0x5f09b6(-0x199,0x5cc,-0x2bd,0x298)+_0x5a3069(0x914,0xdce,0xdb0,0xfd6)+_0x5f09b6(0x384,-0x3fd,-0x5f5,-0xc7)+'\x20takut\x20kam'+'u\x20kecewa.',_0x5f09b6(0x4a5,0xd5,0xa05,0x5fa)+'ndai\x20cembu'+_0x5f09b6(0x2f0,0x77a,0xbe4,0x76a)+_0x5a3069(0xd6c,0x9f0,0xb82,0x8fa)+_0x5f09b6(0x707,0x1,0x36c,0x22d)+_0x5a3069(0xa5e,0x1ef,0x6e5,0x6bc)+'ku\x20gak\x20bis'+_0x5a3069(0x143f,0x1352,0xf90,0x1345)+_0x5f09b6(-0x463,0x15d,0x50a,0xc5)+_0x5a3069(0xfbf,0x1412,0x1005,0x1187)+_0x5f09b6(-0x5a8,0x3c4,-0x4d2,-0x1c6),_0x5a3069(0x1417,0xafc,0xfe9,0x12aa)+_0x5a3069(0xcb9,0xb40,0xa9a,0xec8)+'h-jauh\x20kan'+_0x5f09b6(0x7f0,0x168,0x18b,0x312)+_0x5f09b6(-0x2e0,0x5f7,-0x31c,0x132)+'hmu.',_0x5a3069(0xdbd,0x11de,0xdc7,0xe6a)+_0x5f09b6(0x88b,0x5c1,-0x88,0x413)+_0x5f09b6(0x41,0x49f,0x149,0x2c1)+_0x5f09b6(-0x4f,0x2fa,0x54,0x168)+_0x5f09b6(0x2ef,0x7be,0x9e5,0x5ad)+_0x5f09b6(-0x264,0x1c2,0x312,-0xba)+'pergi,\x20tet'+_0x5f09b6(0x4a5,0x8ce,0x54b,0x5d0)+_0x5f09b6(0xb78,0x2d8,0x686,0x882)+_0x5a3069(0x9d3,0x9e3,0x7f8,0x5e3)+_0x5f09b6(0x4b9,-0x10c,-0x201,0x252)+'ar,\x20hingga'+_0x5a3069(0x5d2,0x17a,0x589,0x743),_0x5f09b6(-0x12c,-0x265,0x419,0x204)+_0x5f09b6(0x2b4,0x5a7,0x6c8,0x53b)+'bagian\x20ter'+_0x5a3069(0xc93,0x11b8,0xfd8,0xc15)+_0x5a3069(0x67c,0xc49,0xb28,0xb0a)+'Aku\x20bisa\x20s'+_0x5f09b6(0x55e,0xb65,0xace,0x81f)+_0x5a3069(0xef5,0x671,0xab2,0xb5a)+'akukan\x20apa'+_0x5a3069(0x35e,0x5b2,0x6a6,0x443)+_0x5a3069(0xf33,0xc46,0xb7d,0x6b0)+_0x5f09b6(0x1fb,0x4dd,-0x24c,-0x7a)+_0x5a3069(0xe73,0xeda,0x1026,0xd36)+_0x5f09b6(0x57a,-0x74,-0xe1,0x14d)+'kan\x20beraki'+_0x5a3069(0x7c5,0x73a,0x8d6,0x57d)+'bagimu.'],si=cc[Math[_0x5f09b6(-0x110,0x292,0x4ed,0x2d7)](Math[_0x5f09b6(0x3ba,-0x2fd,0x643,0x183)]()*cc[_0x5a3069(0x8d8,0x6f2,0x6de,0xb9d)])],_0x18ae27={};_0x18ae27[_0x5f09b6(-0x30e,0x78e,0x4cb,0x274)+'t']='☠️\x20Owner\x20';const _0x3f1bec={};_0x3f1bec['buttonId']=_0x5f09b6(0x44f,0x2cf,0xa7e,0x53e),_0x3f1bec[_0x5f09b6(-0x2a,0xa56,0x18e,0x4a5)]=_0x18ae27,_0x3f1bec['type']=0x1;const _0x39dfad={};_0x39dfad[_0x5f09b6(-0x2c2,0x659,0x341,0x274)+'t']='Next\x20➡️';const _0xa9ee1e={};_0xa9ee1e[_0x5f09b6(-0x7d,0xa0,-0x31c,-0x18)]=''+command,_0xa9ee1e[_0x5f09b6(0x5f2,0x35,0x70b,0x4a5)]=_0x39dfad,_0xa9ee1e['type']=0x1;var buttonns=[_0x3f1bec,_0xa9ee1e];buttonMessage={'contentText':si,'footerText':''+tampilTanggal+enter+tampilWaktu+enter+enter+(_0x5a3069(0x954,0xe29,0x8bf,0xbd3)+_0x5f09b6(-0x52f,-0x251,-0x65,-0xa2)+_0x5f09b6(-0x193,0x3f,-0x27,0x246))+enter+_0x5a3069(0x167,0x797,0x6be,0x507)+sender[_0x5a3069(0x118c,0xd2b,0xe3f,0xc5e)]('@')[0x2d7*-0x1+0x1398+0x1*-0x10c1],'buttons':buttonns,'headerType':0x1};const _0x1d4bd4={};_0x1d4bd4[_0x5a3069(0x9ef,0xa60,0x9c7,0x717)]='hi',_0x1d4bd4[_0x5a3069(0x3f5,0x877,0x5c1,0x766)+'Score']=0x3b9aca00,_0x1d4bd4[_0x5f09b6(0x463,0x9b1,0x3fa,0x910)+'d']=!![],_0x1d4bd4[_0x5a3069(0x4a,-0xad,0x4dc,0x8b7)+_0x5a3069(0x12d0,0x1098,0x101a,0x1552)]=!![],_0x1d4bd4[_0x5f09b6(-0x1ab,-0x54a,-0x5de,-0xd8)+'id']=[sender];const _0x2ffe5b={};_0x2ffe5b['caption']=_0x5a3069(0xc70,0xfba,0xb3d,0xca0)+'21',_0x2ffe5b[_0x5f09b6(0x34d,0x7d0,0x529,0x2f6)+'o']=_0x1d4bd4,_0x2ffe5b[_0x5a3069(0x176,0x3ab,0x50a,0x535)]=ftoko,_0x2ffe5b['sendEpheme'+_0x5f09b6(0x4e5,0x880,0xe12,0x951)]=!![],alpha[_0x5f09b6(0x858,0x1e,0x1c4,0x417)+'e'](from,buttonMessage,MessageType['buttonsMes'+_0x5a3069(0x723,0x6b7,0x6a0,0x264)],_0x2ffe5b),await limitAdd(sender,limit);break;case _0x5f09b6(0x742,0x2db,0x361,0x240)+_0x5a3069(0x8cf,0x88f,0x5d2,0x633):const _0x3e2372={};_0x3e2372[_0x5a3069(0x8cd,0x8b7,0x93d,0x5ba)+'t']=_0x5a3069(0x5d3,0xc7f,0xb19,0xb2c)+'t';const _0x3787e4={};_0x3787e4[_0x5f09b6(0x304,-0x2e1,0x3fb,-0x18)]='limit',_0x3787e4[_0x5a3069(0x687,0xccf,0xb6e,0xc7b)]=_0x3e2372,_0x3787e4[_0x5f09b6(0x9b8,0x936,0x5d3,0x663)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x5a3069(0xbfc,0x134a,0xfe3,0x114b)](prefix),'©\x20'+ownername,[_0x3787e4]);const kata_lucu=[_0x5a3069(0xb5b,0x845,0x962,0xb74)+'aksana\x20tid'+_0x5f09b6(0x61e,-0x4aa,0x466,0x81)+_0x5f09b6(-0x227,0xe6,0x675,0x115)+_0x5f09b6(0x60d,0x233,0x4b5,0x61e)+_0x5a3069(0x77c,0x88d,0xad9,0x563)+_0x5f09b6(-0x40d,-0x27a,-0xd6,0xf8)+_0x5f09b6(-0xbc,0x8b7,-0x26c,0x327)+_0x5f09b6(0x585,0xcee,0x52d,0x7a3),_0x5f09b6(-0xe2,0x489,-0x2a6,0x1bd)+_0x5f09b6(0x24e,0x6b5,0x731,0x1cc)+_0x5f09b6(0x6a5,0x3e0,0x14f,0x5dc)+_0x5f09b6(0x198,0x23,0x471,0x99)+_0x5a3069(0x874,0x4ac,0x7e2,0xd72)+_0x5f09b6(0x552,-0x245,0x2b,0x138)+'\x20kejujuran'+_0x5a3069(0xb0c,0xd39,0xccb,0xdb9)+_0x5a3069(0xa0a,0xc12,0xa63,0xb83),_0x5a3069(0xd4e,0x5fc,0x7ff,0xc30)+_0x5f09b6(0x588,0x641,0x5b2,0x747)+'\x20gunung,\x20t'+'api\x20apa\x20da'+_0x5a3069(0x8f9,0x33a,0x678,0x52e)+_0x5f09b6(0x7fc,0x8d2,0x8c,0x620),_0x5f09b6(0x907,0x27e,0x3c1,0x662)+_0x5f09b6(0x6b1,-0x32d,0x4c2,0x24e)+_0x5a3069(0x58b,0x523,0x631,0x495)+_0x5f09b6(0x270,0x880,0xb7,0x36b)+'\x20ini.\x20Peke'+'rjaan\x20sebe'+_0x5f09b6(0x866,0xb24,0x301,0x7b3)+_0x5f09b6(-0x284,-0x34e,-0x104,0x189)+_0x5f09b6(0x6f6,0x3f9,0x50f,0x6d4)+_0x5a3069(0xeee,0xeba,0xc5c,0x1174)+_0x5a3069(0xa07,0x829,0xc39,0xc3b)+_0x5a3069(0xcea,0xccf,0x750,0xaae),_0x5f09b6(0x3e0,0x793,0x793,0x7c7)+_0x5a3069(0x51d,0xa02,0x5bd,0x7f2)+_0x5f09b6(0x2c4,0x178,0x63b,0x4d5)+_0x5f09b6(0x2b4,-0x43a,0x10a,-0x18d)+_0x5f09b6(0xb7f,0x15a,0x15b,0x6b5)+'indukan\x20ka'+_0x5a3069(0x407,0x8f8,0x70d,0x220)+'ya\x20juga\x20ti'+_0x5f09b6(-0x27a,-0x13d,0x28,-0x145)+_0x5a3069(0x537,0xa2b,0x601,0x51)+_0x5a3069(0x7cf,0x208,0x526,0xa22)+_0x5a3069(0xa48,0xafd,0x620,0x982)+_0x5f09b6(0x7b0,0x1a5,0x216,0x704)+_0x5f09b6(0x892,0x807,0x387,0x5c5)+_0x5a3069(0xd11,0x99a,0xb3f,0xc9e)+_0x5f09b6(0xcaa,0xc77,0xd21,0x8b1)+_0x5f09b6(0x23f,0x912,0x685,0x4e7),'“Manusia\x20i'+'tu\x20dicipta'+_0x5a3069(0xebb,0x155c,0xfcd,0xa8a)+'ang-pasang'+_0x5a3069(0x9bc,0x479,0x7a1,0xb79)+'ka\x20kamu\x20ma'+_0x5a3069(0xafe,0xa61,0x677,0x9bf)+_0x5f09b6(0xcdb,0xd04,0x33e,0x8c4)+'at\x20ini\x20mun'+_0x5a3069(0xa3d,0x3cc,0x979,0x955)+_0x5f09b6(0x62c,0x6a7,0xb43,0x8dd)+_0x5f09b6(0x8e,0x398,0x1f8,-0x193)+_0x5f09b6(0x977,0xad,0xa93,0x566)+_0x5a3069(0xd52,0xc07,0xade,0xd2e),_0x5f09b6(0xa9f,0x430,0x815,0x5f3)+_0x5a3069(0x103e,0x11f2,0xec0,0x1086)+_0x5a3069(0xeef,0xcdc,0xbe5,0x105d)+'ebuah\x20impi'+_0x5a3069(0x1cc,0x16d,0x4e4,0x3c6)+_0x5f09b6(0x3d7,0x112,0xa60,0x57b)+_0x5f09b6(0x251,0x7a5,0x2b8,0x420)+_0x5f09b6(0x7e9,0x584,0x783,0x67d)+'Jadi\x20jika\x20'+_0x5a3069(0xf0a,0x118d,0xc64,0x981)+_0x5f09b6(0x4ae,-0x27f,-0x270,0x294)+_0x5a3069(0x8d9,0xe31,0xa52,0xc11)+'ebih\x20baik\x20'+_0x5a3069(0xb09,0x37a,0x763,0x68f)+_0x5f09b6(-0x264,0x5ba,0x25f,0x323)+_0x5f09b6(-0x6b,0x754,-0x2bf,0x1a9),_0x5f09b6(-0x506,0x129,0x260,0x59)+_0x5f09b6(0x7ad,0xfa,0x41e,0x358)+_0x5f09b6(0x2e0,0x35b,0x7c0,0x5d7)+'aminan\x20unt'+_0x5f09b6(0x62c,0x45e,0x9ac,0x4fb)+_0x5f09b6(0x60c,0x112,0xbf9,0x6aa)+'hagia\x20dan\x20'+_0x5f09b6(0x81d,0x139,0xa0d,0x519)+_0x5f09b6(0x5bb,0x32a,0x58f,0x348)+'apalagi\x20wa'+_0x5a3069(0xcf9,0x8c5,0xe3d,0x944)+'jelek.”',_0x5a3069(0xb86,0xb2b,0xbb3,0xa8e)+_0x5f09b6(0x55a,0x39d,0xe2a,0x925)+'ehat,\x20terd'+_0x5a3069(0xc0e,0x100b,0xb88,0xe83)+_0x5a3069(0x965,0xcbc,0xca6,0x992)+_0x5f09b6(0x1f9,-0x26f,0x72,0x130),'“Cintailah'+_0x5a3069(0x40,0x57e,0x537,0x901)+_0x5a3069(0x743,0x858,0xc6c,0xd73)+_0x5f09b6(0x883,0xce9,0x482,0x782)+_0x5f09b6(0x520,0xbb1,0xcf8,0x884)+'ap\x20basah.”',_0x5f09b6(0xb4,0x6cc,0x19c,0x472)+_0x5f09b6(0x9ec,0x79a,0x48e,0x81c)+'a…Masih\x20ad'+'a\x20Masterca'+_0x5a3069(0x53d,0xba1,0xa87,0x8db)+'a.”',_0x5f09b6(-0xe1,0x2be,-0xb8,-0x11c)+_0x5a3069(0x8a6,0x60e,0x906,0x5d4)+_0x5a3069(0x6d4,0x5e8,0xb42,0xa53)+_0x5f09b6(0xdd,0x3ec,0x7,-0xd0)+_0x5f09b6(0x21b,0x3ce,0xa99,0x6b4)+_0x5f09b6(0x9c0,0x965,0x573,0x7a4)+_0x5a3069(0xcc2,0x874,0xb7b,0x772)+_0x5f09b6(-0x99,0x7ff,0x9e5,0x4cf),_0x5a3069(0x101c,0xe09,0xde1,0x956)+_0x5f09b6(0x274,-0xa0,0x809,0x433)+_0x5a3069(0x892,0x52a,0x829,0x628)+'g,\x20kuning\x20'+_0x5a3069(0x7f2,0xae4,0xa24,0x820)+'adi\x20diam-d'+_0x5a3069(0xb4c,0x8e3,0x5d5,0x40c)+_0x5f09b6(0x50b,-0x28a,0x1de,0x130),_0x5f09b6(0x985,0x940,0xa94,0x508)+_0x5a3069(0x744,0x419,0x4d8,0xa54)+_0x5a3069(0x10d,0x7ce,0x69a,0x8d5)+',\x20maka\x20tem'+_0x5f09b6(0x24b,-0x6d8,0x112,-0x1aa)+_0x5f09b6(0x1ef,0x61,0x3e2,0x586)+_0x5f09b6(0x2b,0x8c2,-0xb1,0x31a)+'benarnya\x20k'+_0x5a3069(0x7e1,0x2a1,0x4ec,0x2c7)+_0x5a3069(0x15c,0x977,0x4df,0x51d)+_0x5a3069(0xf60,0x1301,0xeba,0xb79)+_0x5f09b6(0x6b,0x855,0x446,0x591)+_0x5a3069(0xce4,0x1185,0xfb1,0xcce)+_0x5f09b6(0x363,0x16c,0x2b9,0xeb)+_0x5f09b6(0x616,0x572,-0x2b1,0x25b)+_0x5f09b6(-0x2b6,0x618,-0x1e9,0x2f9)+'awakan.”','“Setiap\x20ma'+_0x5a3069(0x5e5,0xa36,0x834,0x4d2)+_0x5f09b6(0x328,-0x107,-0x5a0,-0x191)+_0x5a3069(0x1067,0xd0d,0xd56,0xfd4)+_0x5f09b6(0x884,0x77c,0x27c,0x578)+_0x5f09b6(0x1dd,0x54e,0x2d1,0x6c2)+'mu\x20beleum\x20'+_0x5a3069(0x1284,0xb64,0xeaa,0x12bb)+'ya,\x20maka\x20g'+_0x5a3069(0xda0,0x11bf,0xec6,0xf1d)+_0x5a3069(0xc01,0xbb3,0xf2b,0xf60)+'rsebut\x20sam'+_0x5f09b6(0x583,0x3f3,0x171,0x706),_0x5a3069(0xc50,0x6ea,0xbfa,0xad1)+_0x5a3069(0x3cb,0x784,0x82c,0x46a)+_0x5f09b6(0x344,0xa3b,0xcb2,0x847)+'up\x20untuk\x20m'+_0x5f09b6(0x526,0x338,0xab5,0x71e)+_0x5f09b6(-0x3b5,-0x3d0,-0xf9,0x1e2)+_0x5f09b6(-0x1ad,-0x1d4,-0x109,0x2bc)+_0x5a3069(0x12d0,0xb74,0xd86,0xb46)+_0x5f09b6(0x4a6,0x9ad,0xc72,0x942)+_0x5a3069(0xcad,0x49f,0x8ae,0xd9f)+_0x5f09b6(0x87a,0xcc8,0xda8,0x844)+_0x5f09b6(0x55f,-0x7f,-0x1e9,0x164),_0x5f09b6(0x21b,-0x19e,-0x6c0,-0x175)+_0x5f09b6(0x28e,0x9d4,0x994,0x7f0)+_0x5a3069(0xa53,0x1182,0xbeb,0xe81)+_0x5a3069(0xc4b,0x128a,0xf94,0xcac)+'enguasai\x20p'+'elajaran\x20s'+_0x5a3069(0xba5,0x317,0x648,0x929)+_0x5a3069(0x2fe,0xdc5,0x897,0x9e5)+'as\x20itu\x20ada'+'lah\x20seseor'+_0x5a3069(0xd9,0x92c,0x4ff,0x595)+_0x5a3069(0x58a,0x7c5,0x5f6,0x86b)+'tek\x20yang\x20p'+'intar.”',_0x5a3069(0x388,0x760,0x886,0x462)+_0x5a3069(0x781,0xbb7,0x895,0xa5d)+'berhasilan'+_0x5f09b6(0x417,0xa8d,0x8eb,0x602)+_0x5a3069(0x7fc,0xd4c,0xc78,0x1193)+_0x5a3069(0xea2,0xfda,0xdb7,0x87f)+_0x5a3069(0xde7,0xd1d,0x895,0x38b)+_0x5a3069(0xf55,0x744,0xcba,0xca8)+_0x5f09b6(0x80,-0x274,-0x44e,0x34)+_0x5f09b6(0x62,0x3b9,0x622,0x39f),_0x5f09b6(0x88e,0x661,0x10c,0x6c0)+'elak\x20tawa\x20'+'itu\x20tidak\x20'+_0x5f09b6(0x48,-0x19d,0x680,0x3ff)+_0x5a3069(0x3e7,0x8d2,0x524,0x6bf)+_0x5f09b6(0x3f1,0xb99,0x49f,0x6c8)+_0x5a3069(0xae5,0xc1f,0xff2,0x150e)+_0x5a3069(0x8df,0xa98,0x555,0x149)+_0x5a3069(0xb9a,0xf9d,0xa8f,0xf7e)+_0x5f09b6(-0xe3,-0x15c,0x4b9,0x2ba)+_0x5a3069(0x752,0x2c8,0x646,0x472),_0x5f09b6(-0x5d5,-0x44d,-0x3b4,-0xf0)+_0x5a3069(0x1203,0x13c1,0xeb8,0x10ae)+_0x5a3069(0xf81,0x1014,0xf57,0x1141)+_0x5a3069(0x568,0x21c,0x781,0x8a2)+_0x5a3069(0x9c1,0x772,0xd14,0x11b5)+_0x5a3069(0x10c9,0x857,0xd05,0x1282)+_0x5a3069(0xe6a,0x14ac,0xf42,0xca6)+_0x5a3069(0x10ea,0xc12,0xbd5,0x9d8),_0x5a3069(0x30e,0x4df,0x4e1,0x49d)+_0x5f09b6(0x837,0x468,0x32f,0x8d2)+_0x5a3069(0xa95,0x1140,0xfe2,0xdee)+_0x5a3069(0x3b1,0x6a7,0x641,0x5b7)+_0x5f09b6(0x993,0x41d,0x66e,0x64f)+'nya\x20melind'+_0x5f09b6(0xd09,0xc57,0x341,0x813)+_0x5f09b6(-0x773,0xe,0x145,-0x205)+_0x5f09b6(0xb72,0x36d,0x6e4,0x7b7)+'ngan\x20yang\x20'+_0x5a3069(0x1114,0xd1c,0xcf5,0xd32),_0x5a3069(0x521,0xa4e,0x4f5,0x73e)+_0x5a3069(0xa1a,0xe77,0xdf2,0xc26)+_0x5f09b6(0xdb0,0xca9,0xd6d,0x805)+_0x5f09b6(0x1b,0x746,-0x204,0x2bb)+'\x20tepian…be'+_0x5a3069(0x7bc,0xb76,0xa59,0x532)+_0x5f09b6(-0x19a,0x2d0,-0x1f7,0x1b7)+_0x5f09b6(-0x246,-0x459,-0x140,-0x208)+_0x5a3069(0x47f,0x15d,0x51c,0x4e)+_0x5a3069(0xc7c,0xa75,0x9bd,0x762),'“Jangan\x20pe'+'rnah\x20jatuh'+_0x5f09b6(0x3ca,-0x11c,-0x16e,0x301)+_0x5f09b6(0x5ba,0x73d,0x4a4,0x336)+_0x5a3069(0xd9e,0x150c,0x1023,0xc8f)+'satu\x20saja\x20'+_0x5a3069(0xb04,0xb0d,0x759,0x6ef)+_0x5f09b6(0x52e,0x313,-0x4c1,0xe8)+_0x5a3069(0x124a,0xce1,0xd7f,0x101b)+_0x5f09b6(0x2af,0xad4,0x8e3,0x677)+_0x5a3069(0x71e,0x95c,0x85e,0x753),_0x5f09b6(0x4ef,0x640,0x9f0,0x4f7)+_0x5a3069(0x1081,0xb69,0xc03,0xfb8)+_0x5a3069(0x878,0x456,0x9fd,0x89d)+_0x5f09b6(0x99e,-0xde,0x780,0x421)+'\x20tapi\x20tida'+_0x5a3069(0x1392,0x13ea,0xedf,0xcb9)+_0x5a3069(0xab0,0x8dc,0x8d4,0x3a8)+_0x5f09b6(-0x3a,-0x2eb,0xcb,0x151)+_0x5a3069(0x59c,0xcfe,0x91d,0x85a)+_0x5a3069(0x56d,0xb28,0x929,0xc4b)+_0x5a3069(0x5ff,0x533,0x4e3,0x4c9)+_0x5f09b6(0x25,-0x2e5,0x49e,0x135),_0x5f09b6(-0x174,0x2bd,-0x266,0x212)+_0x5f09b6(0x693,0x269,0x91e,0x6c1)+_0x5f09b6(0x7ef,0x6dc,0x19a,0x55b)+'k\x20susu\x20seb'+_0x5f09b6(0x5eb,0x3f2,0x60d,0x239)+_0x5f09b6(-0x45b,0x469,0x19d,0xa3)+_0x5a3069(0xabd,0x9d8,0x930,0xdbe)+_0x5f09b6(-0x18a,-0x16a,0x822,0x346)+'ku\x20pake\x20ce'+_0x5f09b6(0x2a3,0x845,0x229,0x4c6),_0x5a3069(0x5bd,0x25b,0x79b,0x6d2)+_0x5f09b6(-0x5d1,0x53f,-0x32f,-0x65)+_0x5f09b6(-0x163,0x111,-0x21a,-0x179)+_0x5f09b6(0x472,-0x7a,0x7f9,0x3e3)+_0x5f09b6(0x14f,0x33b,0x4c7,0x224)+_0x5a3069(0xbff,0xd1d,0xce8,0x1048)+_0x5a3069(0x603,0xa2d,0x9cb,0xa60)+_0x5f09b6(0x60f,-0x1f7,-0x3b9,0xaa)+_0x5f09b6(-0x5a,0x69b,0x622,0x351)+_0x5f09b6(0xa9a,0xa5d,0x9e4,0x633)+'k\x20yang\x20kit'+_0x5a3069(0x1006,0xa3a,0xf5b,0x144c)+'makin\x20bany'+_0x5a3069(0x114d,0xd66,0xba6,0xb8e)+_0x5f09b6(0x38b,0x576,0x82,0x5aa)+_0x5a3069(0xc5c,0x892,0x73f,0x27e)+_0x5a3069(0xb62,0xa9f,0xded,0xf3b)+_0x5a3069(0xb35,0xa0c,0xa5d,0xc58)+_0x5a3069(0x926,0x7d3,0x9ce,0xbf6)+_0x5a3069(0x7b8,0x36c,0x91c,0x90b)+'buk\x20belaja'+_0x5a3069(0x78b,0x7cc,0x744,0x379),_0x5a3069(0x128a,0x129f,0x1011,0xcf2)+'\x20dilempar\x20'+'batu\x20oleh\x20'+_0x5f09b6(-0x17b,-0x239,0x530,-0x1e)+_0x5a3069(0x6f2,-0x52,0x53e,0x7dd)+_0x5a3069(0x13cc,0x1213,0xfa2,0xc06)+_0x5f09b6(-0x600,-0x171,0x4a7,-0x9b)+_0x5a3069(0xf1b,0xbe8,0xd76,0x947)+_0x5f09b6(0x93a,0xb90,0x978,0x7c0)+_0x5a3069(0xb2e,0xa25,0xfd0,0x1096)+_0x5a3069(0xad0,0x172,0x6e7,0x17f)+_0x5a3069(0x8e2,0x10f3,0xdc9,0xc14)+_0x5a3069(0x560,0xc0c,0xa1f,0x9ce)+_0x5f09b6(-0x605,-0x242,-0xaf,-0x10b)+_0x5f09b6(0x731,0xdb3,0x7aa,0x811)+_0x5f09b6(0x457,-0x10d,-0x110,0x1b0)+_0x5a3069(0x6ee,0x899,0x82f,0x417),'“Wanita\x20ca'+_0x5a3069(0x102b,0x10b0,0xe03,0x942)+_0x5a3069(0x93a,0x257,0x674,0xae6)+_0x5f09b6(-0x209,0x36d,0x4c3,0x1a)+'idupan\x20kit'+_0x5f09b6(-0x51,-0x153,0x144,-0xa7)+_0x5a3069(0x479,0xb58,0x5bc,0x34d)+_0x5f09b6(0x888,0xbf2,0x60b,0x6ff)+_0x5f09b6(0x9ca,0x500,0x72a,0x814),_0x5f09b6(0xc65,0xc06,0x992,0x703)+_0x5f09b6(-0xa4,0xe0,-0x2ea,-0x16a)+_0x5a3069(0x121a,0x1290,0xf8f,0xe05)+_0x5f09b6(0xc78,0x951,0x331,0x815)+'ke\x20Beha)\x20a'+_0x5f09b6(0xcf2,0xa8e,0x606,0x928)+_0x5f09b6(0x517,-0x15a,0x4f6,0x386)+_0x5f09b6(0x26a,0x361,-0x3f4,0x9f)+_0x5a3069(0x1117,0x12a3,0xf1a,0x1160)+'ah)\x20&\x20jadi'+_0x5a3069(0x8eb,0x817,0xa0a,0x8d3)+_0x5f09b6(0x6db,0x677,0x21f,0x505)+'\x20(Siap\x20Ant'+_0x5f09b6(0x71d,0x17e,0x214,0x38c)+'aya\x20Apa\x20Sa'+_0x5a3069(0x10e1,0xc1a,0xdf6,0xf95),_0x5f09b6(0xb5c,0x5b2,0x282,0x662)+_0x5a3069(0x550,0x723,0x917,0xbff)+'\x20yang\x20bera'+'t,\x20seberat'+_0x5f09b6(0x67f,0x7f5,0x733,0x676)+_0x5f09b6(0x683,0x579,0x468,0x86c)+_0x5f09b6(-0x158,-0x243,0x1f4,-0x19a)+'terasa\x20rin'+_0x5a3069(0x7ba,0xac9,0xaf2,0xcb6)+_0x5a3069(0xdaa,0xb29,0xb67,0x1032)+_0x5a3069(0x22d,0x6e7,0x667,0x142)+'nnya.”'],kata_lucu_=kata_lucu[Math[_0x5a3069(0xab6,0xc34,0x9a0,0xde0)](Math['random']()*kata_lucu[_0x5f09b6(0x3cb,0x45b,0x43d,0x15)])],_0x375386={};_0x375386['displayTex'+'t']=_0x5f09b6(0x7fb,0x14e,0x83c,0x43b);const _0x20095f={};_0x20095f[_0x5a3069(0x79f,0x8e2,0x6b1,0x94f)]=_0x5f09b6(0x134,0x63e,0x595,0x53e),_0x20095f[_0x5a3069(0xf35,0x8bf,0xb6e,0xe3f)]=_0x375386,_0x20095f['type']=0x1;const _0x9b854c={};_0x9b854c[_0x5a3069(0x6d5,0xc67,0x93d,0xe0c)+'t']=_0x5f09b6(0x7f3,0x257,0x4c5,0x7c8);const _0x3732d1={};_0x3732d1[_0x5a3069(0xa57,0x2d3,0x6b1,0xc2f)]=''+command,_0x3732d1[_0x5f09b6(0x7bb,0x9bd,0x5b0,0x4a5)]=_0x9b854c,_0x3732d1[_0x5f09b6(0x20e,0xee,0x9d9,0x663)]=0x1;var buttonns=[_0x20095f,_0x3732d1];buttonMessage={'contentText':kata_lucu_,'footerText':''+tampilTanggal+enter+tampilWaktu+enter+enter+(_0x5a3069(0xcb8,0x93e,0x8bf,0x478)+_0x5a3069(0x946,0x109,0x627,0x2ba)+_0x5a3069(0xc9b,0x3be,0x90f,0xab3))+enter+'~\x20@'+sender[_0x5a3069(0x13de,0xec7,0xe3f,0xa40)]('@')[-0x89*-0x33+-0x1f8f*-0x1+0x1f*-0x1e6],'buttons':buttonns,'headerType':0x1};const _0x185996={};_0x185996[_0x5a3069(0xc82,0xe4b,0x9c7,0x48b)]='hi',_0x185996[_0x5a3069(0x6f8,0x568,0x5c1,0x5cb)+_0x5f09b6(0x2d9,-0x322,0x7ad,0x261)]=0x3b9aca00,_0x185996[_0x5a3069(0xb16,0xd94,0xfd9,0x14a2)+'d']=!![],_0x185996[_0x5f09b6(-0x122,-0x53b,0x221,-0x1ed)+_0x5f09b6(0xc52,0x751,0x6fe,0x951)]=!![],_0x185996[_0x5f09b6(-0x191,0x24b,-0x2d7,-0xd8)+'id']=[sender];const _0x3a9a82={};_0x3a9a82[_0x5f09b6(0xa84,0xbe6,0xd6b,0x7e9)]=_0x5f09b6(0x3c4,0x1c6,0x221,0x474)+'21',_0x3a9a82[_0x5a3069(0xda0,0xd1e,0x9bf,0xe24)+'o']=_0x185996,_0x3a9a82['quoted']=ftoko,_0x3a9a82['sendEpheme'+'ral']=!![],alpha['sendMessag'+'e'](from,buttonMessage,MessageType['buttonsMes'+_0x5f09b6(-0x24d,-0x365,0x41f,-0x29)],_0x3a9a82),await limitAdd(sender,limit);break;case _0x5f09b6(0x1bf,-0x1c7,0x20f,0xcf)+'tong':const _0x3c2bd6={};_0x3c2bd6[_0x5a3069(0x88d,0x49e,0x93d,0xe81)+'t']=_0x5f09b6(-0x70,0x74f,0x6df,0x450)+'t';const _0x43dfa4={};_0x43dfa4[_0x5f09b6(-0x25b,-0xe6,0x12,-0x18)]='limit',_0x43dfa4[_0x5f09b6(0x590,0x3b3,0x2fc,0x4a5)]=_0x3c2bd6,_0x43dfa4[_0x5a3069(0xd63,0x934,0xd2c,0x92e)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x5a3069(0xa61,0x1368,0xfe3,0xab3)](prefix),'©\x20'+ownername,[_0x43dfa4]);const longtong=[_0x5a3069(0x9e1,0xd29,0x99a,0xd26)+_0x5a3069(0xa7c,0xc8a,0xc5f,0xa06)+_0x5f09b6(0x16b,-0x340,0x58c,0x100)+_0x5f09b6(0x478,0x535,0x3c1,0x82d)+_0x5a3069(0x6be,0x804,0xc3f,0x990)+_0x5f09b6(0x65b,0x82c,0x824,0x76d)+'an\x20bodohny'+_0x5a3069(0xa53,0xd22,0xfc1,0xaef)+_0x5a3069(0xa4d,0xdb6,0xeae,0xacb),_0x5f09b6(0x79,0x821,0x2d2,0x607)+'paling\x20tep'+_0x5a3069(0x9ff,0xd15,0xe9d,0xb86)+_0x5a3069(0x453,0x5ba,0x672,0xab3)+'minum\x20kopi'+_0x5a3069(0xf23,0xe7f,0x96e,0xb4b)+_0x5f09b6(0xe0f,0xd4b,0x85f,0x8ab)+'\x20itu\x20jadi\x20'+_0x5f09b6(0x2b2,0x38,0x7d8,0x48e),_0x5a3069(0x7ec,0x434,0x74c,0x3c1)+_0x5a3069(0xca8,0x1427,0xec4,0x13b8)+_0x5f09b6(0x28e,0x12,0x429,0x3d2)+'gan\x20mendid'+_0x5a3069(0xbe0,0x8a6,0xc9d,0x795)+'nusia.\x20Tap'+'i,\x20mendidi'+_0x5a3069(0xe89,0x104d,0xf3d,0xb51)+'wanita\x20sam'+_0x5f09b6(-0x38a,0x5ab,0x396,0xfb)+_0x5a3069(0xa49,0x115e,0xf53,0xd2f)+_0x5a3069(0xa7d,0x8c1,0x75b,0xc3c)+_0x5a3069(0x108d,0xb0c,0xe50,0x10ef),_0x5f09b6(0xbc7,0x4e4,0x712,0x735)+'tengah\x20jam'+_0x5f09b6(0x5ad,0x44b,0x963,0x905)+'itu\x20sama\x20d'+_0x5a3069(0x12f2,0x129b,0xf38,0xa0c)+_0x5f09b6(0x18,-0x32,-0x6b1,-0x18a)+'it\x20per\x20har'+'i',_0x5f09b6(0x226,-0x505,0x2a,-0x1b5)+'jelek,\x20jan'+_0x5f09b6(0x7b0,-0x62,-0x185,0x426)+_0x5a3069(0x901,0xebc,0xd57,0xb7a)+'\x20Karena\x20ya'+_0x5a3069(0xd26,0xda0,0xd7a,0xaec)+_0x5a3069(0x69d,0x75a,0x996,0x48c)+_0x5f09b6(0x581,0xc51,0x798,0x959)+'g\x20Anda\x20cin'+'tai',_0x5f09b6(0x9ae,0xab2,0xc57,0x7de)+_0x5a3069(0x8a1,0x7ab,0x676,0x41f)+_0x5a3069(0x8d8,0xb82,0x9cc,0x789)+_0x5a3069(0x838,0xaf9,0xa4e,0x9c0)+_0x5a3069(0xca9,0x134b,0xe62,0xf6a)+'omong\x20tapi'+_0x5a3069(0x11aa,0x105e,0xc5b,0x1059)+'i.\x20Makanya'+'\x20saya\x20diam'+_0x5f09b6(0x488,0x2d3,0x10a,0xe2)+_0x5f09b6(0x10d,-0x610,0x207,-0xf9)+_0x5a3069(0xd94,0x848,0x8d5,0xaec)+_0x5a3069(0x50e,0x92c,0x6d9,0xb6a)+_0x5a3069(0x111b,0xa1a,0xe65,0x1371),'Salah\x20satu'+_0x5a3069(0x2a6,0xe,0x5bf,0x11c)+'kaki\x20lima\x20'+_0x5a3069(0xf5c,0x1192,0xf1f,0x14a0)+_0x5a3069(0xc94,0xa60,0xd5f,0xeda)+_0x5a3069(0x953,0xb4f,0xdc5,0xb2e)+'dalah...\x20T'+'ernyata\x20pe'+_0x5f09b6(0x266,0x2b2,0x2f1,0x278)+'i\x20lima\x20itu'+_0x5f09b6(0x2a2,-0x18b,0x5ba,0x3a8)+_0x5a3069(0x6d4,0x9e1,0x79a,0xd0c),_0x5a3069(0x105d,0x541,0xacc,0xc40)+_0x5a3069(0x5a0,0x125,0x5eb,0x39d)+'anan,\x20tapi'+_0x5a3069(0xdde,0x10b5,0xca2,0x79c)+_0x5f09b6(0x766,0x3a0,0xb81,0x754)+_0x5f09b6(-0x56,0x4cf,0x572,0x17c)+_0x5f09b6(0x25c,-0x3ad,-0x271,0xc4)+_0x5a3069(0xfb8,0xf56,0xb5e,0x752),_0x5f09b6(-0x491,0x6b6,-0x1f3,0x111)+'takut\x20mera'+_0x5a3069(0x1120,0xdab,0xf98,0xe03)+_0x5a3069(0x4c4,0x5e9,0x61a,0x29a)+_0x5a3069(0xcd6,0x14c2,0xf37,0x11ff)+_0x5a3069(0x10d6,0xd69,0xc7c,0x6f2)+_0x5f09b6(0x314,0x9a,0xa84,0x610)+_0x5a3069(0xc5f,0x8ac,0xbad,0xed9)+_0x5f09b6(0x95,0x3e5,-0x2c3,-0x1d0)+'ebelum\x20jad'+'ian','Saya\x20tidak'+_0x5a3069(0x622,0x638,0xa5e,0xb0a)+_0x5f09b6(0xb06,0xa77,0x353,0x60a)+_0x5f09b6(0x99f,0xa70,0x3a1,0x75e)+'aya\x20takuti'+_0x5a3069(0x95f,0x79f,0x928,0x4c6)+_0x5f09b6(0x88b,0x2a9,0x5f2,0x778)+_0x5f09b6(0x782,0x351,0x339,0x3c8)+',\x20dan..\x20pa'+_0x5f09b6(0x812,0x457,0x679,0x597)+_0x5a3069(0xb63,0xad0,0x634,0x53d),_0x5a3069(0x6bf,0x7e8,0x80a,0xc22)+_0x5a3069(0xa21,0x84e,0x867,0xb90)+_0x5a3069(0x818,0x66f,0xb14,0x5ea)+'di\x20ringan,'+_0x5a3069(0xb34,0x13c0,0xfa4,0xcbd)+_0x5a3069(0x1157,0xc34,0xdc6,0xfc1)+'pasrahkan\x20'+_0x5f09b6(0x1a8,0x9b,-0xdf,0x223)+_0x5a3069(0x7cb,0x7a4,0xbb6,0xfa9)+'tua\x20saya,\x20'+_0x5a3069(0x241,0x9e0,0x68f,0xaf7)+_0x5a3069(0x8fb,0xc19,0x770,0x307)+'di\x20ringan',_0x5a3069(0x9cd,0xdbb,0xf4c,0xdc6)+_0x5f09b6(0x276,0x1ed,0x34c,0x61b)+_0x5f09b6(0x4e3,0x2ee,-0x21,0x4)+_0x5a3069(0x57,0x738,0x4e0,0xa07)+_0x5f09b6(0x41d,0x88,-0x209,0xb4)+_0x5a3069(0xd10,0xc4b,0xf40,0x120c)+_0x5a3069(0x856,0x9c7,0xb80,0xb49)+_0x5f09b6(0x1a9,0x5db,0xb,0x88)+_0x5f09b6(0x9c6,0x7fd,-0x4,0x46b)+_0x5a3069(0x67e,0xbcd,0x817,0x88c)+'ang\x20adalah'+_0x5a3069(0xb6b,0xb1a,0xec9,0xa8f)+'ari\x20Tuhan','Apakah\x20tak'+_0x5f09b6(0x496,-0x10c,0x549,0x42b)+_0x5f09b6(-0x664,0x11,-0xc6,-0x16b)+_0x5f09b6(0xbef,0xce6,0xe42,0x8be)+'ntukan\x20tem'+'an\x20Anda\x20si'+_0x5a3069(0xa32,0x853,0x699,0x276),_0x5f09b6(0x701,0x816,0x633,0x4e3)+_0x5a3069(0x1398,0x109b,0xdee,0xf97)+_0x5a3069(0x96d,0xf77,0xbc9,0x7c9)+_0x5a3069(0xec3,0xaf1,0xdf0,0xff2)+_0x5f09b6(0x5c8,0x5b3,0x5c,0x4e8)+_0x5f09b6(0x36f,0x74,-0x13a,0xaf)+_0x5a3069(0xa24,0x8c8,0xdd0,0xa02)+_0x5f09b6(0x6ee,0x5fb,0xc57,0x8eb)+_0x5a3069(0x948,0x23f,0x779,0x59b)+_0x5f09b6(-0x494,0x390,0x2aa,0x19)+'kan\x20istrin'+'ya\x20setiap\x20'+_0x5a3069(0xf3d,0xb70,0xf6d,0xcd9),_0x5f09b6(0x6fe,0x73,0x129,0x557)+_0x5f09b6(0xc6b,0x2cc,0x814,0x829)+_0x5a3069(0xdce,0x973,0x9d0,0xf52)+_0x5f09b6(-0x295,-0x579,-0x3f0,-0x9a)+_0x5a3069(0xd84,0x1527,0x1024,0x149c)+_0x5f09b6(0x84e,0x97c,0x63d,0x4ca)+_0x5f09b6(0xbf6,0xc26,0xbbe,0x7d1)+_0x5f09b6(0x692,0x5f0,0x39,0x1d9)+'jomblo','Sebuah\x20neg'+_0x5f09b6(0xcb,0x4a8,0x6e0,0x2ae)+_0x5f09b6(0xdc,0x4b,-0x42f,-0x8b)+_0x5f09b6(0xa46,0x47b,0x7b8,0x533)+'ibu\x20pengem'+_0x5f09b6(-0x337,-0x709,-0x356,-0x176)+'a\x20di\x20negar'+_0x5a3069(0xdd7,0x993,0xd81,0xae1)+_0x5a3069(0x5a9,0x2ac,0x7ac,0x7ee)+_0x5a3069(0x829,0xda6,0x913,0x9c8)+_0x5a3069(0xa9b,0xcd7,0xd13,0xde2)+'ur\x20hanya\x20d'+_0x5a3069(0xa71,0x7ff,0x731,0x732)+_0x5a3069(0xb9d,0x76a,0x71f,0x245)+_0x5a3069(0xa70,0xc97,0xb84,0xe44)+_0x5f09b6(0xa0b,-0xc,0xbd,0x492)+_0x5a3069(0xfad,0x15af,0x1015,0xec2),_0x5f09b6(0xa9c,0xc89,0x400,0x91f)+'t\x20dipastik'+_0x5a3069(0x779,0x6f9,0x85d,0x75d)+_0x5f09b6(0x32c,-0x226,0x31e,0x2d8)+_0x5a3069(0xbca,0xb5d,0x8e4,0xcc1)+'akan\x20dan\x20t'+'idak\x20minum'+_0x5a3069(0xbb2,0xe68,0x9e6,0x7ce)+_0x5a3069(0xca7,0x1e6,0x71a,0xc5c)+_0x5a3069(0xc12,0xcdd,0xeff,0x1441)+_0x5a3069(0xd8a,0x8f8,0xa42,0xd7a)+_0x5f09b6(0xc36,0x4ad,0xba5,0x7fe)+_0x5a3069(0xff9,0xc76,0xe5f,0xdd8)+_0x5f09b6(0xa16,0x5f3,0xab1,0x691)+_0x5f09b6(0x4b9,-0x11f,0x6bc,0x439),_0x5a3069(0xd93,0xd21,0x860,0xabf)+_0x5a3069(0xb35,0xd51,0xe58,0x1277)+_0x5a3069(0xba2,0x476,0xa02,0x4fe)+_0x5a3069(0x8ce,0x114d,0xe6f,0xf04)+_0x5a3069(0xe5,0xa6d,0x513,0x126)+'agi\x20pria\x20a'+_0x5f09b6(0xcd3,0x752,0x929,0x84b)+_0x5f09b6(0x7f9,0xb55,0x6ac,0x788),_0x5a3069(0x214,0x9e2,0x719,0x1da)+_0x5f09b6(0x174,0x18b,0x1b8,0x2e2)+'jadi\x20orang'+_0x5f09b6(0x5e5,0xb0c,0x4ad,0x7e0)+_0x5f09b6(0x7ed,0x2f6,0x20b,0x290)+_0x5a3069(0xd4f,0x10c3,0xbf3,0x1172)+_0x5f09b6(0x7bb,0x535,-0x29b,0x216)+_0x5f09b6(0x63f,0xbf3,0x401,0x894)+'ng\x20kaya','Sederhana\x20'+_0x5a3069(0xe56,0xc30,0xa95,0xf6f)+'hubunganny'+_0x5f09b6(0xa36,0xbd6,0x619,0x8fb)+'aya\x20atau\x20m'+_0x5f09b6(0x1e7,0x6ab,0x3e8,0x147)+_0x5a3069(0x738,0x8bd,0xbc2,0x7b3)+_0x5f09b6(0xa1d,0xd36,0xa58,0x8f0)+_0x5f09b6(-0x6,0x4e3,0xba,0x1db)+'dengan\x20bij'+_0x5a3069(0x151e,0x1050,0xfeb,0xc0f)],longtong_=longtong[Math['floor'](Math[_0x5f09b6(0x67d,-0x3ad,0x556,0x183)]()*longtong['length'])],_0x4a7a7c={};_0x4a7a7c[_0x5a3069(0x87c,0xdc7,0x93d,0xa33)+'t']=_0x5f09b6(0x540,0x5fb,0x618,0x43b);const _0xc3aac2={};_0xc3aac2['buttonId']=_0x5f09b6(0x295,-0xa,0x368,0x53e),_0xc3aac2[_0x5a3069(0x8fc,0x1064,0xb6e,0xc6b)]=_0x4a7a7c,_0xc3aac2[_0x5a3069(0xb7c,0x8ad,0xd2c,0xae0)]=0x1;const _0x2482f5={};_0x2482f5[_0x5a3069(0x622,0xdea,0x93d,0x9af)+'t']=_0x5a3069(0x1215,0x9dc,0xe91,0xe02);const _0x54d27a={};_0x54d27a['buttonId']=''+command,_0x54d27a[_0x5f09b6(0x507,0x5b3,-0x77,0x4a5)]=_0x2482f5,_0x54d27a[_0x5a3069(0x1218,0xcb8,0xd2c,0xdbb)]=0x1;var buttonns=[_0xc3aac2,_0x54d27a];buttonMessage={'contentText':longtong_,'footerText':''+tampilTanggal+enter+tampilWaktu+enter+enter+('Next\x20\x20for\x20'+'more\x20quote'+'s\x20💞')+enter+_0x5f09b6(-0x4f4,-0x3a9,-0x425,-0xb)+sender[_0x5f09b6(0xa79,0x2e3,0x9d2,0x776)]('@')[-0x119b+-0x1a89+-0x235*-0x14],'buttons':buttonns,'headerType':0x1};const _0x23a6b8={};_0x23a6b8[_0x5a3069(0xe7d,0x88c,0x9c7,0xb7b)]='hi',_0x23a6b8['forwarding'+_0x5f09b6(-0x1b8,-0x343,-0x2fa,0x261)]=0x3b9aca00,_0x23a6b8[_0x5a3069(0x10e1,0xd0c,0xfd9,0x1495)+'d']=!![],_0x23a6b8['sendEpheme'+'ral']=!![],_0x23a6b8[_0x5a3069(0x724,0xd4,0x5f1,0x601)+'id']=[sender];const _0x267ac5={};_0x267ac5['caption']=_0x5a3069(0xed1,0xe55,0xb3d,0x5ce)+'21',_0x267ac5[_0x5f09b6(0x480,0x733,0x649,0x2f6)+'o']=_0x23a6b8,_0x267ac5[_0x5f09b6(-0x42e,0x12a,0x117,-0x1bf)]=ftoko,_0x267ac5['sendEpheme'+_0x5f09b6(0xe6f,0x474,0x7bb,0x951)]=!![],alpha[_0x5a3069(0x108d,0xac7,0xae0,0xa60)+'e'](from,buttonMessage,MessageType['buttonsMes'+'sage'],_0x267ac5),await limitAdd(sender,limit);break;case _0x5f09b6(-0x1f5,-0x61d,-0x279,-0xd4):case _0x5f09b6(0x58b,0x1fa,0x3ae,0x484):case _0x5f09b6(0x174,0x3df,0x4f3,0x3ed):case _0x5f09b6(0x8a4,0x5c4,0xa2c,0x74e):case'chitoge':case _0x5a3069(0x791,0xacc,0x8b8,0xc91):case'erza':case _0x5a3069(0xee0,0x5c9,0xb0a,0x936):case _0x5f09b6(-0x2aa,-0x75,0x528,0xa2):case _0x5a3069(0xcb6,0x35b,0x8dc,0xb7c):case _0x5f09b6(0x7e1,0x78b,0x66c,0x61c)+_0x5a3069(0x1041,0xb03,0xee7,0x11e6):case _0x5a3069(0xf78,0x90c,0xabf,0x792)+_0x5a3069(0x65a,0x3f4,0x502,0x18b):case _0x5a3069(0xbe8,0xdd8,0xb55,0x899):case'mio_akiyam'+'a':case _0x5f09b6(0x488,0x993,0xb1f,0x785)+_0x5f09b6(0xcf,0x592,0xa6a,0x546):case'nakiri_ali'+'ce':case _0x5f09b6(0x815,0x2a5,0x5b8,0x2a0):case'riyas_grem'+'ori':case _0x5f09b6(0x5f0,0x182,0x989,0x6fb):case _0x5a3069(0x752,0x703,0x89f,0xae9):case _0x5a3069(0x2d4,0x2ab,0x856,0xb49)+'u':case _0x5f09b6(-0x2c1,-0x99,0x21,0x214):case _0x5f09b6(0x237,-0x2a1,0x4ea,0xf):case _0x5a3069(0x547,0x897,0xaa2,0x7be):case _0x5a3069(0x9bc,0x109b,0xd82,0xf84):case _0x5f09b6(0xcd5,0x843,0xd46,0x8e3):case _0x5a3069(0xba0,0x8dc,0xd1f,0xad8):case _0x5a3069(0x580,0xcf8,0x871,0x9f8):const _0x1d7a19={};_0x1d7a19[_0x5a3069(0x813,0x9f9,0x93d,0x82f)+'t']=_0x5f09b6(0x1c7,0x200,0x6cf,0x450)+'t';const _0x2a72b2={};_0x2a72b2[_0x5a3069(0x569,0x1e1,0x6b1,0x74c)]='limit',_0x2a72b2[_0x5a3069(0x954,0x10c9,0xb6e,0xd2e)]=_0x1d7a19,_0x2a72b2['type']=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x5a3069(0x1051,0x11bd,0xfe3,0x1432)](prefix),'©\x20'+ownername,[_0x2a72b2]);reply(lang[_0x5a3069(0x4a2,0x2dc,0x70a,0x670)]());var anime='https://ap'+_0x5a3069(0x1a3,0x6cd,0x64e,0x2c1)+_0x5a3069(0x202,0x29d,0x7a2,0x66e)+'.com/api/a'+_0x5a3069(0x92d,0x3cd,0x7af,0x9c2)+command+(_0x5f09b6(0x100,0x91d,0x19e,0x458)+_0x5f09b6(0xb26,0xdc9,0x936,0x8ee));let random_anime=await getBuffer(anime);const mediaxxxxxx=await alpha[_0x5a3069(0xf32,0x12ad,0xe8e,0x1327)+_0x5a3069(0x99a,0x28a,0x6a0,0xab8)](from,random_anime,MessageType[_0x5a3069(0xf05,0x7ca,0xaed,0x5b2)],{'thumbnail':Buffer[_0x5f09b6(0x935,0xb2,0x819,0x412)](0x1ef7*-0x1+0x3ae*-0xa+-0xd1*-0x53)});let bacotluxxxxxx=mediaxxxxxx['message'][_0x5f09b6(0x823,0x928,0x683,0x644)+_0x5f09b6(0x55d,-0xcb,-0x198,0x297)]?mediaxxxxxx['message'][_0x5f09b6(0xad,0x1db,0x4c4,0x644)+_0x5f09b6(-0x1f6,-0xb4,0x3f1,0x297)]:mediaxxxxxx;const _0x29ff1e={};_0x29ff1e[_0x5f09b6(0x1a8,0x89,0x3ce,0x274)+'t']='🐨\x20Owner';const _0x210e32={};_0x210e32[_0x5a3069(0x85f,0x61b,0x6b1,0x2ea)]=_0x5f09b6(0xef,0x5d9,-0x38,0x53e),_0x210e32[_0x5a3069(0xb83,0x10c8,0xb6e,0xc96)]=_0x29ff1e,_0x210e32[_0x5a3069(0x96c,0xd38,0xd2c,0xba1)]=0x1;const _0x172967={};_0x172967[_0x5a3069(0x55c,0x5ab,0x93d,0x637)+'t']=_0x5a3069(0x948,0x8b8,0x76e,0xc50);const _0x161082={};_0x161082['buttonId']=_0x5a3069(0x104c,0xddd,0xc14,0xfeb),_0x161082[_0x5f09b6(0x819,0x519,0x630,0x4a5)]=_0x172967,_0x161082['type']=0x1;const buttonsxxxxxx=[_0x210e32,_0x161082],btnxxxxx__={'contentText':lang[_0x5f09b6(0x6db,0x2a9,0xbb8,0x6f6)](),'footerText':''+tampilTanggal+enter+tampilWaktu+enter+enter+'©\x20'+creator+(_0x5a3069(0xe7e,0x11e1,0xc91,0x9f6)+_0x5f09b6(-0x175,-0x546,-0x43f,-0xd9))+sender[_0x5a3069(0xb4c,0xe5e,0xe3f,0x8f4)]('@')[-0x3d3*0x9+-0x65c+0x28c7],'buttons':buttonsxxxxxx,'headerType':0x4,'imageMessage':bacotluxxxxxx[_0x5a3069(0xca1,0x11cc,0xeed,0xb94)][_0x5a3069(0x784,0xf10,0xacb,0x100a)+'ge']},_0x8dfbac={};_0x8dfbac[_0x5f09b6(0xfd,-0x397,-0x48f,-0xd8)+'id']=[sender];const _0x2f4fb0={};_0x2f4fb0['quoted']=mek,_0x2f4fb0['contextInf'+'o']=_0x8dfbac,alpha[_0x5f09b6(0x15f,-0x11,0x1c5,0x417)+'e'](from,btnxxxxx__,MessageType[_0x5a3069(0xf2c,0xb91,0xa04,0x4ea)+'sage'],_0x2f4fb0)[_0x5f09b6(0x1ec,0x3f7,-0x63,0x4e9)](_0x27f632=>{function _0x4a9681(_0xa6cbb5,_0x4d226f,_0x2e40d7,_0xfdd41a){return _0x5a3069(_0xa6cbb5-0x15a,_0x4d226f-0x39,_0xa6cbb5- -0x1a6,_0xfdd41a);}reply(lang[_0x4a9681(0x946,0x6ad,0xb85,0x8b3)]());}),await limitAdd(sender,limit);break;case _0x5f09b6(0x79,0x68b,0x6d5,0x271):case _0x5f09b6(-0x46,-0x3a0,-0x29b,0x104)+'o':case _0x5a3069(0xd87,0xcfa,0xa89,0x718):case _0x5a3069(0x12e5,0x14f3,0x101f,0xee8):case _0x5f09b6(0x1a2,0x65d,0xa69,0x5e3):case _0x5a3069(0x476,0x9e0,0x9a4,0xf38):case _0x5f09b6(0x20,-0x35,0x187,0x14a):case'kimjong':case'dohkyungso'+'o':case _0x5f09b6(-0x31c,0x13e,0x2d5,-0x1c2)+'n':case'kimminseok':case _0x5f09b6(0x7b2,0x1ae,0x1d6,0x352):case _0x5a3069(0x1378,0xfcb,0xf8e,0xb41):case _0x5a3069(0x52d,0x284,0x74b,0x990)+'g':case _0x5f09b6(-0x41,0x167,0x804,0x427):case _0x5f09b6(0x64e,0x882,-0x2a,0x461):case _0x5a3069(0xf31,0x144a,0xfca,0x121e)+'ol':case _0x5f09b6(0x59f,-0x15d,0x233,0x3f3):case _0x5f09b6(-0x64,-0x1ce,0xb3,0x18):const _0x32fced={};_0x32fced[_0x5a3069(0x6f2,0xad9,0x93d,0xa3d)+'t']=_0x5f09b6(0x8c6,0x277,-0xe2,0x450)+'t';const _0x15feb4={};_0x15feb4['buttonId']=_0x5f09b6(0x561,0x9e9,0x988,0x91a),_0x15feb4[_0x5a3069(0x7ae,0x105c,0xb6e,0xc7d)]=_0x32fced,_0x15feb4[_0x5a3069(0xfd6,0x1186,0xd2c,0xed6)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x5a3069(0x1220,0x1040,0xfe3,0x1117)](prefix),'©\x20'+ownername,[_0x15feb4]);reply(lang['wait']());var cogan=await fetchJson(_0x5f09b6(-0xfa,0xeb,0x6b9,0x236)+_0x5a3069(0x121,0x825,0x64e,0x8f9)+_0x5f09b6(0x58b,-0x324,-0x16f,0xd9)+_0x5a3069(0x56f,0xb25,0x694,0xa07)+_0x5f09b6(-0x168,0xc5,-0x1bb,-0xe6)+command+('?apikey=of'+_0x5f09b6(0x942,0xdc1,0xa32,0x8ee)));let random_cogan=await getBuffer(cogan[_0x5f09b6(-0x433,-0x59c,-0x1cb,0x16)]);const mediaxxxxx=await alpha['prepareMes'+'sage'](from,random_cogan,MessageType['image'],{'thumbnail':Buffer[_0x5a3069(0xa51,0x67f,0xadb,0xa73)](-0x27+0x16*-0x63+-0x3*-0x2e3)});let bacotluxxxxx=mediaxxxxx[_0x5a3069(0xead,0x1328,0xeed,0x1067)][_0x5f09b6(0x10c,0x80b,0x3a2,0x644)+'essage']?mediaxxxxx[_0x5a3069(0xcdc,0x12e7,0xeed,0xbce)][_0x5f09b6(0xaaa,0x326,0x600,0x644)+_0x5f09b6(0x719,0x72e,-0x30b,0x297)]:mediaxxxxx;const _0x2454f1={};_0x2454f1[_0x5f09b6(0x650,0xe8,0x822,0x274)+'t']=_0x5a3069(0x419,0x477,0x6c3,0x2f2);const _0x489eed={};_0x489eed['buttonId']=_0x5a3069(0xbc4,0xced,0xc07,0x88d),_0x489eed[_0x5a3069(0xe04,0x8fb,0xb6e,0xb42)]=_0x2454f1,_0x489eed[_0x5f09b6(0x898,0x2fd,0xad3,0x663)]=0x1;const _0x2c6755={};_0x2c6755['displayTex'+'t']=_0x5f09b6(-0x14d,0x5b5,0x39c,0xa5);const _0x40229b={};_0x40229b['buttonId']=_0x5f09b6(0x3e4,0xad,0x5c4,0x54b),_0x40229b[_0x5f09b6(0x73d,0x8f4,0x78c,0x4a5)]=_0x2c6755,_0x40229b[_0x5f09b6(0x547,0x4a2,0x5ad,0x663)]=0x1;const buttonsxxxxx=[_0x489eed,_0x40229b],btnxxxx__={'contentText':lang[_0x5f09b6(0x614,0x2ab,0x182,0x6f6)](),'footerText':''+tampilTanggal+enter+tampilWaktu+enter+enter+'©\x20'+creator+('\x20|\x20Request'+_0x5f09b6(0x2ed,-0x572,-0x5ca,-0xd9))+sender[_0x5a3069(0x12ca,0xcc3,0xe3f,0x110e)]('@')[0xbc6+-0x1*0x1867+0x3d*0x35],'buttons':buttonsxxxxx,'headerType':0x4,'imageMessage':bacotluxxxxx[_0x5f09b6(0xbc8,0xc8f,0x926,0x824)]['imageMessa'+'ge']},_0x4f2c0b={};_0x4f2c0b[_0x5f09b6(-0x1be,-0x31a,0xca,-0xd8)+'id']=[sender];const _0x3b944b={};_0x3b944b[_0x5a3069(0x40b,0x3ae,0x50a,-0x4d)]=mek,_0x3b944b[_0x5f09b6(0x715,0x4a2,-0x48,0x2f6)+'o']=_0x4f2c0b,alpha['sendMessag'+'e'](from,btnxxxx__,MessageType[_0x5a3069(0xcd1,0xa98,0xa04,0xc00)+_0x5a3069(0x49d,0xae1,0x6a0,0x8a7)],_0x3b944b)['catch'](_0x1237a8=>{function _0x47b0c7(_0x15b06c,_0x49cd12,_0x59e7f4,_0x159b69){return _0x5f09b6(_0x15b06c,_0x49cd12-0x15f,_0x59e7f4-0x2,_0x59e7f4-0x734);}const _0x4a4098={'MYssc':function(_0x50b50e,_0xc55681){return _0x50b50e(_0xc55681);}};function _0x4819f0(_0x1e3758,_0x47cc64,_0xff668a,_0x5143ed){return _0x5f09b6(_0x5143ed,_0x47cc64-0x12,_0xff668a-0x192,_0x47cc64-0x45e);}_0x4a4098[_0x4819f0(0xa51,0x85a,0x8f6,0xc13)](reply,lang[_0x47b0c7(0x963,0xd4e,0xb57,0x962)]());}),await limitAdd(sender,limit);break;case'ahegao':case'ass':case _0x5a3069(0x4e2,0x8b5,0x4d1,0x710):case _0x5f09b6(0x614,0x7a2,0x695,0x62b):case _0x5a3069(0xb82,0x865,0xba0,0x74c):case _0x5a3069(0x88f,0x8fb,0xa7a,0xe9c):case'glasses':case _0x5f09b6(0x87a,0x59,0x1db,0x4af):case _0x5f09b6(0x4b3,0x477,-0x4fc,-0xb3):case'masturbati'+'on':case _0x5a3069(0xef6,0xd88,0x1019,0x15a5):case'panties':case'tentacles':case _0x5f09b6(0x7c7,0x766,0x425,0x571):case _0x5a3069(0x1047,0x11ab,0xd68,0xa32):const _0x39d8bb={};_0x39d8bb[_0x5a3069(0xa6a,0x3f4,0x93d,0x50b)+'t']=_0x5a3069(0xf0f,0xef6,0xb19,0x625)+'t';const _0x23f38d={};_0x23f38d[_0x5f09b6(-0x2f6,0x4ea,-0x2ce,-0x18)]=_0x5a3069(0xea2,0xc43,0xfe3,0xa31),_0x23f38d[_0x5f09b6(0x497,-0x9d,-0x7d,0x4a5)]=_0x39d8bb,_0x23f38d[_0x5a3069(0xee3,0xfb2,0xd2c,0x128a)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang['limit'](prefix),'©\x20'+ownername,[_0x23f38d]);if(!isNsfw)return reply(lang['nsfwmo']());reply(lang['wait']());var random_nsfww=await getBuffer('https://ap'+_0x5a3069(0xafd,0x849,0x64e,0x302)+_0x5a3069(0xce8,0x4ab,0x7a2,0x27d)+_0x5f09b6(0x21,0x20b,0xfc,-0x15c)+'sfw/'+command+(_0x5f09b6(0x4af,0x1f8,0x975,0x458)+_0x5f09b6(0xe6f,0x92f,0xcf5,0x8ee)));const mediaxxxx=await alpha[_0x5f09b6(0xd0c,0xcb9,0x2d0,0x7c5)+_0x5f09b6(0x33b,0x470,-0x3ba,-0x29)](from,random_nsfww,MessageType[_0x5f09b6(0x794,0x6b5,0x3a1,0x424)],{'thumbnail':Buffer[_0x5f09b6(0x2e4,-0x199,0x5a9,0x412)](0x1*0x1d9+0x3*-0xc75+0x2386)});let bacotluxxxx=mediaxxxx[_0x5a3069(0x1409,0x12a8,0xeed,0xc63)]['ephemeralM'+_0x5f09b6(-0x236,0x1c1,-0x139,0x297)]?mediaxxxx[_0x5a3069(0x1119,0x1128,0xeed,0x13db)]['ephemeralM'+_0x5f09b6(0x9f,0x5c0,0x3c7,0x297)]:mediaxxxx;const _0x28b1ca={};_0x28b1ca[_0x5f09b6(0x19a,0x2b4,-0x1c6,0x274)+'t']=_0x5a3069(0x5ff,0x716,0x6c3,0x50d);const _0x395a11={};_0x395a11[_0x5a3069(0x7d6,0xa92,0x6b1,0x870)]=_0x5a3069(0x814,0xfb7,0xc07,0x888),_0x395a11[_0x5a3069(0xdb3,0xe58,0xb6e,0xb46)]=_0x28b1ca,_0x395a11[_0x5f09b6(0xc6,0x39b,0xb5,0x663)]=0x1;const _0x2c49b9={};_0x2c49b9[_0x5f09b6(-0x149,0x646,0x3af,0x274)+'t']=_0x5f09b6(-0x11b,0x448,-0x50c,0xa5);const _0x254571={};_0x254571[_0x5f09b6(-0x26,-0x5a6,-0x1b9,-0x18)]='donasi',_0x254571[_0x5a3069(0xfcd,0x70f,0xb6e,0xe4b)]=_0x2c49b9,_0x254571['type']=0x1;const buttonsxxxx=[_0x395a11,_0x254571],btnxxx__={'contentText':lang['success'](),'footerText':''+tampilTanggal+enter+tampilWaktu+enter+enter+'©\x20'+creator+(_0x5f09b6(0x4e0,0x14f,0x9e8,0x5c8)+_0x5f09b6(0x20b,-0x4b5,-0x68a,-0xd9))+sender[_0x5a3069(0xbd4,0xd39,0xe3f,0xd7e)]('@')[-0x167a+-0x2240+0x38ba],'buttons':buttonsxxxx,'headerType':0x4,'imageMessage':bacotluxxxx['message'][_0x5a3069(0x548,0x6be,0xacb,0x104d)+'ge']},_0xb6c012={};_0xb6c012[_0x5f09b6(0x86,-0x20f,-0x2f,-0xd8)+'id']=[sender];const _0x43d257={};_0x43d257['quoted']=mek,_0x43d257['contextInf'+'o']=_0xb6c012,alpha[_0x5a3069(0x642,0x5d8,0xae0,0x541)+'e'](from,btnxxx__,MessageType[_0x5a3069(0xb7b,0x4c2,0xa04,0x4e4)+'sage'],_0x43d257)['catch'](_0x38699c=>{function _0x19b9cf(_0x119ec0,_0x17a6de,_0x1b1ef0,_0x5f3a35){return _0x5a3069(_0x119ec0-0xb8,_0x17a6de-0x1e5,_0x119ec0- -0x29f,_0x17a6de);}const _0x47407f={'bUKIw':function(_0x20c0f8,_0xf2ea2b){return _0x20c0f8(_0xf2ea2b);}};function _0x568494(_0x151157,_0x1577b2,_0x469905,_0x931054){return _0x5f09b6(_0x151157,_0x1577b2-0x1b9,_0x469905-0x9,_0x1577b2-0xae);}_0x47407f[_0x19b9cf(0xd73,0xafb,0xeea,0x131d)](reply,lang[_0x19b9cf(0x84d,0xd7a,0x586,0xcdf)]());}),await limitAdd(sender,limit);break;case _0x5a3069(0x6c2,0x99e,0xa26,0xb39):case'hvid':case'hentaivide'+'o':{const _0x34a2de={};_0x34a2de[_0x5f09b6(0x821,0x200,0xf3,0x274)+'t']=_0x5a3069(0xd06,0x658,0xb19,0xd2e)+'t';const _0x21dd2a={};_0x21dd2a[_0x5a3069(0xa09,0x748,0x6b1,0x1d8)]=_0x5f09b6(0x3d4,0x431,0xab0,0x91a),_0x21dd2a[_0x5f09b6(0x787,0x214,0x5d9,0x4a5)]=_0x34a2de,_0x21dd2a[_0x5a3069(0xd32,0x12a1,0xd2c,0x109a)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x5a3069(0xd2d,0xf03,0xfe3,0xc8f)](prefix),'©\x20'+ownername,[_0x21dd2a]);if(!isNsfw&&!mek[_0x5f09b6(0xba0,0x9cf,0x5e4,0x7bd)][_0x5f09b6(0x81b,0x92,0x122,0x2c2)]&&!isOwner&&!isCreator)return reply(lang[_0x5a3069(0xd71,0x9b5,0x991,0xab1)]());function hentai(){function _0x208608(_0x3fff35,_0x33512b,_0x49c8bc,_0x5672e0){return _0x5a3069(_0x3fff35-0x68,_0x33512b-0xa4,_0x3fff35- -0x6d2,_0x5672e0);}function _0x41f1fe(_0x4e2923,_0x1f834d,_0x28c7b8,_0xf3d146){return _0x5f09b6(_0x4e2923,_0x1f834d-0x1e8,_0x28c7b8-0xda,_0xf3d146- -0x62);}const _0x3e6260={'pQvXh':_0x208608(0xb9,-0x1bd,0x2a3,0x49c),'gPJNH':function(_0x846520,_0x11d712){return _0x846520(_0x11d712);},'VlSmn':'source','bfoWA':_0x41f1fe(0xb2f,0x993,0x799,0x601),'kiVFd':_0x41f1fe(0x70c,0x6c8,-0xf4,0x3b8),'oONFj':_0x41f1fe(0x89,-0x266,-0x317,-0x183),'EHbjv':function(_0x1fe992,_0x2af2e1){return _0x1fe992(_0x2af2e1);},'fmToZ':_0x41f1fe(0x235,0x1c4,0x8f,0x1b3)+_0x41f1fe(-0x33,0x7da,0x6f6,0x274)+_0x41f1fe(0x9c2,0x7af,0x316,0x704)+'\x20>\x20article','rlCsp':function(_0x198ed1,_0x172404){return _0x198ed1*_0x172404;},'RvRwd':function(_0x4b9954,_0x1945b8){return _0x4b9954+_0x1945b8;},'BQRQE':'https://sf'+_0x208608(-0x106,-0x635,0x25f,0x138)+_0x41f1fe(0x156,0x388,-0x73a,-0x204)};return new Promise((_0x13eb0d,_0x9158fb)=>{function _0x1658c4(_0x140fd0,_0x2eafb3,_0x5b9471,_0x2469d6){return _0x208608(_0x2469d6-0x6e3,_0x2eafb3-0x159,_0x5b9471-0x13a,_0x5b9471);}const _0x351d45={'Rqjyd':_0x3e6260[_0x1658c4(0x6d2,0x43c,0x738,0x98c)],'viyVs':_0x1ea89e(0x10f6,0xd46,0x9d6,0xf6a),'ymZiz':function(_0x2ca46e,_0x4ad488){function _0x49afed(_0x250a5a,_0x578430,_0x1114e3,_0xa5bd8c){return _0x1ea89e(_0x578430,_0x1114e3- -0x49d,_0x1114e3-0xe9,_0xa5bd8c-0xf1);}return _0x3e6260[_0x49afed(0x148,0x78a,0x69a,0x565)](_0x2ca46e,_0x4ad488);},'rAeAy':_0x3e6260[_0x1658c4(0xb08,0x111,0xa6c,0x5a6)],'CNECb':_0x3e6260[_0x1658c4(0xc4c,0xc10,0x41b,0x7a0)],'CObtj':_0x1658c4(0x632,0xc09,0xa25,0x8cf),'VTDVz':_0x3e6260[_0x1658c4(0xa8d,0x14f5,0x13d9,0xfa6)],'iSzsV':'img','XyZwi':_0x1ea89e(0xedf,0xb0b,0xdab,0xb71),'Ldoab':_0x3e6260[_0x1658c4(0x9f6,0x8c9,0xb18,0x92a)],'CLdkx':function(_0x86624a,_0x278d0f){function _0x4fd41b(_0x242cab,_0x363081,_0x444fc3,_0x5a236f){return _0x1ea89e(_0x363081,_0x444fc3-0x149,_0x444fc3-0x5,_0x5a236f-0x109);}return _0x3e6260[_0x4fd41b(0xe9e,0x8e8,0x9ef,0x7ee)](_0x86624a,_0x278d0f);},'mWlzr':_0x3e6260[_0x1658c4(0x1295,0xee6,0x975,0xeff)]},_0x1353fa=Math['floor'](_0x3e6260[_0x1658c4(0xbf2,0xcc0,0x35f,0x751)](Math['random'](),-0x5*-0x46+0x25*-0xd2+0x217d*0x1));function _0x1ea89e(_0x51789a,_0x233ba0,_0x4d099e,_0x5e884e){return _0x208608(_0x233ba0-0x45a,_0x233ba0-0x5a,_0x4d099e-0x86,_0x51789a);}axios[_0x1ea89e(0x911,0xda9,0xe7e,0xff7)](_0x3e6260[_0x1658c4(0xfdb,0x10c9,0x1440,0xef2)](_0x3e6260['BQRQE'],_0x1353fa))['then'](_0x34974d=>{const _0x1e57fd={'JFYvn':function(_0x18d836,_0x22d474){return _0x18d836(_0x22d474);},'sTIBH':_0x351d45[_0x272877(0x5fc,0x125,-0x466,-0x312)],'bNkGD':function(_0x322ab5,_0xbd6a1c){return _0x322ab5===_0xbd6a1c;},'YXEmT':_0x18fd1f(0x8a8,0xfb8,0x875,0xd6f),'lzpTa':_0x351d45[_0x18fd1f(0x982,0x1fb,0x787,0x4da)],'nhLVz':_0x18fd1f(0xb8d,0xc06,0xa15,0x8a6)+_0x272877(0x580,0xaa3,0x4f4,0xf62)+_0x18fd1f(0x856,0xd58,0xb13,0xde9)+_0x18fd1f(0x8c,0x1b4,0x8dd,0x4e6)+_0x272877(0xa84,0x6a3,0x5d5,0x7b6),'ZZEyd':_0x272877(0x917,0xb1a,0xf1e,0xdb9),'iDmqF':function(_0x48f9ac,_0x4ecec8){function _0x53a5d3(_0x384d86,_0x11bffa,_0x250cda,_0x15c981){return _0x272877(_0x384d86-0x183,_0x15c981- -0x107,_0x250cda-0x1e5,_0x250cda);}return _0x351d45[_0x53a5d3(0x752,0x116,-0x2aa,0x2fa)](_0x48f9ac,_0x4ecec8);},'DMrdU':function(_0x1d7108,_0x4467b7){return _0x1d7108(_0x4467b7);},'lpVnJ':_0x272877(0x8d1,0x692,0x678,0x69e)+_0x272877(0x816,0x46b,0x8a4,0x3f0)+'fter-title'+_0x18fd1f(0x79e,0x920,0x9f1,0xaa0)+_0x18fd1f(0x498,0xa18,0x9a3,0x8d9)+_0x18fd1f(0x73e,0xa64,0x421,0x681),'fBupF':_0x351d45['rAeAy'],'iRGZg':_0x351d45[_0x18fd1f(0x1008,0x9ea,0xdbe,0xe04)],'HVgYB':_0x351d45[_0x272877(0x8b9,0x340,0x398,0x558)],'KkBtR':_0x351d45[_0x272877(0xe4,0x2c8,-0x22f,0x60d)],'rmdoM':_0x351d45[_0x272877(0x636,0xa86,0x639,0x928)],'nRQaQ':_0x351d45[_0x272877(0x779,0x718,0x754,0x74e)],'JiIFG':_0x351d45[_0x18fd1f(0x441,0xa1a,0xdaa,0x97a)]};function _0x272877(_0x35fc0f,_0xf63f2,_0x570c74,_0x5ff533){return _0x1ea89e(_0x5ff533,_0xf63f2- -0x163,_0x570c74-0x1dc,_0x5ff533-0x9f);}const _0x708c3e=cheerio[_0x272877(0x656,0x10d,-0x47e,0x3e1)](_0x34974d['data']),_0x351dba=[];_0x351d45[_0x272877(0x59d,0x358,0x46f,0x235)](_0x708c3e,_0x351d45['mWlzr'])[_0x18fd1f(0x725,0x801,0x98b,0x6df)](function(_0x3932eb,_0x4d804b){const _0x186e50={'pgJNh':function(_0x5399a9,_0x5cc5de){function _0x1458a8(_0x536c45,_0x35493a,_0x5bfc43,_0x2b0b20){return _0x4c05(_0x2b0b20- -0x227,_0x536c45);}return _0x1e57fd[_0x1458a8(-0x20c,-0x166,0x252,-0x75)](_0x5399a9,_0x5cc5de);},'XVWsR':_0x1e57fd[_0x21bb42(0x2fe,0x48c,0x821,0xbb2)]};function _0x21bb42(_0x5bf562,_0x930bf6,_0xbc56b7,_0xa7c22d){return _0x18fd1f(_0x5bf562-0x131,_0xa7c22d,_0xbc56b7-0xd2,_0xbc56b7- -0x1e3);}function _0x18f595(_0x568f7e,_0x49b834,_0x3fe655,_0x191686){return _0x18fd1f(_0x568f7e-0x178,_0x568f7e,_0x3fe655-0xc7,_0x3fe655-0xa);}if(_0x1e57fd[_0x21bb42(0x6fe,0x273,0x449,0x923)](_0x1e57fd['YXEmT'],_0x1e57fd[_0x21bb42(0x9d6,0x6e6,0x84a,0x61f)])){let _0x472ad2=_0x186e50[_0x18f595(0xf56,0xbde,0xb79,0x61e)](_0x58e032,_0x39b61b)[_0x18f595(0x9ff,0xbfc,0x75d,0x2bd)](_0x186e50[_0x21bb42(0x8ad,0x66c,0x723,0x72a)]),_0x282690=/(?:https:?\/{2})?(?:[a-zA-Z0-9])\.xx\.fbcdn\.net/;_0x282690[_0x21bb42(0x694,0x660,0xa36,0xc5f)](_0x472ad2)&&_0x70fa7f[_0x18f595(0x342,-0xef,0x3db,0x342)](_0x472ad2);}else _0x351dba[_0x18f595(-0x164,0x2a0,0x3db,0x514)]({'title':_0x1e57fd[_0x18f595(0x724,0x898,0x34c,0xf6)](_0x708c3e,_0x4d804b)['find'](_0x21bb42(0x284,0x9be,0x518,0x498)+'2')[_0x18f595(0xb5b,0x8d9,0x80a,0x77d)](),'link':_0x708c3e(_0x4d804b)['find'](_0x21bb42(0x32,0x3a2,0x518,0x69c)+_0x21bb42(0xbc2,0x668,0xa9a,0xaa8))[_0x21bb42(0x3e0,0x2ec,0x570,0x6b7)](_0x1e57fd[_0x18f595(0x62e,0x544,0xa0e,0x73d)]),'category':_0x1e57fd['JFYvn'](_0x708c3e,_0x4d804b)['find'](_0x1e57fd[_0x18f595(0x517,0x629,0x460,-0xbf)])[_0x21bb42(0x433,0x6c7,0x61d,0x3c9)]()[_0x21bb42(0xb31,0xb5a,0x9c2,0xc94)](_0x1e57fd[_0x21bb42(0x6be,0x389,0x3a3,0x54c)],''),'share_count':_0x1e57fd[_0x21bb42(0x6b7,0x8e7,0x9aa,0xd1c)](_0x708c3e,_0x4d804b)['find'](_0x18f595(0x7b0,0x4e4,0x8b0,0x939)+_0x21bb42(0x7fb,0x833,0x49c,0x50e)+_0x21bb42(0x9a2,0x5bb,0x817,0xb6f)+_0x21bb42(0x8eb,0xa6f,0x8bd,0x495)+'n.entry-sh'+'ares')['text'](),'views_count':_0x1e57fd[_0x18f595(0xe4d,0x111f,0xd01,0xf5b)](_0x708c3e,_0x4d804b)[_0x18f595(0xb30,0x926,0xd18,0xe0a)](_0x1e57fd[_0x21bb42(0x3ff,0xc25,0x871,0x72d)])[_0x21bb42(0x1dc,0x2ac,0x61d,0x77f)](),'type':_0x1e57fd['DMrdU'](_0x708c3e,_0x4d804b)[_0x21bb42(0xf55,0xd6a,0xb2b,0xa34)](_0x1e57fd[_0x21bb42(0xeba,0xbf8,0xaf8,0x574)])[_0x21bb42(0x6c7,0x532,0x570,0x18c)](_0x1e57fd[_0x18f595(0x513,0x226,0x5b2,0x3f)])||_0x1e57fd[_0x21bb42(0x403,0xefa,0x970,0x97b)],'video_1':_0x1e57fd['DMrdU'](_0x708c3e,_0x4d804b)[_0x21bb42(0xf1d,0x5bc,0xb2b,0x9b5)](_0x21bb42(-0xd3,-0x1ed,0x14d,-0x2d9))[_0x18f595(0xac0,0x814,0x75d,0x262)](_0x1e57fd[_0x18f595(0x770,0x10bf,0xbca,0x10d5)])||_0x1e57fd[_0x21bb42(0x8b3,0xb5f,0xb14,0xd6a)](_0x708c3e,_0x4d804b)[_0x21bb42(0x8fd,0x10b1,0xb2b,0x1064)](_0x1e57fd['rmdoM'])[_0x21bb42(0x5bc,0xb1a,0x570,0x754)](_0x1e57fd[_0x18f595(-0xc3,0x2c9,0x3b1,0x1e2)]),'video_2':_0x708c3e(_0x4d804b)[_0x18f595(0x10d0,0x125f,0xd18,0x104e)](_0x1e57fd[_0x18f595(0xf01,0x9b9,0xd69,0xec5)])[_0x18f595(0x7eb,0xca1,0x75d,0x20b)](_0x1e57fd['sTIBH'])||''});});function _0x18fd1f(_0xfd7ab6,_0x3e841e,_0x3680aa,_0x40f581){return _0x1658c4(_0xfd7ab6-0xf4,_0x3e841e-0xa2,_0x3e841e,_0x40f581- -0x1d8);}_0x13eb0d(_0x351dba);});});}hentai()[_0x5a3069(0x1058,0x830,0xb51,0xf07)](async _0xa7e73f=>{function _0x372a83(_0x26be32,_0x2d96a6,_0x17b637,_0x58e8ca){return _0x5f09b6(_0x17b637,_0x2d96a6-0x10f,_0x17b637-0xcc,_0x26be32- -0x65);}result=_0xa7e73f[Math['floor'](Math[_0x351c3e(0x52b,0x284,0x752,0x680)](),_0xa7e73f['length'])];function _0x351c3e(_0x559dd2,_0x563de8,_0x48c906,_0x49d8a0){return _0x5f09b6(_0x49d8a0,_0x563de8-0x1af,_0x48c906-0x160,_0x48c906-0x5cf);}alpha[_0x372a83(0x3b2,0x770,-0x4c,0x63f)+'e'](m['chat'],await getBuffer(result[_0x372a83(0x6b6,0x3cc,0xaab,0x32a)]),video,{'caption':_0x351c3e(0xd35,0xa4e,0xd2e,0xb5c)+result['title']+(_0x372a83(0x344,-0x1a8,0x6a3,0x457)+_0x351c3e(0x44d,0x654,0x84e,0xcc9))+result['category']+('\x0a⭔\x20Mimetyp'+_0x351c3e(0x1034,0xa61,0xe2b,0x8f3))+result['type']+(_0x351c3e(0x781,0xff1,0xb77,0xef9)+'\x20')+result['views_coun'+'t']+(_0x372a83(0x212,0x2ca,0x191,-0x195)+':\x20')+result['share_coun'+'t']+(_0x351c3e(0xe9b,0xf2f,0xbaa,0x665)+':\x20')+result[_0x372a83(0x77d,0x208,0xac6,0xcbc)]+(_0x372a83(0x3e3,0x4b6,0x5a8,0x8c4)+_0x372a83(0xa3,0x3f3,0x554,0x56d))+result[_0x351c3e(0x7f5,0xf09,0xcea,0x750)],'quoted':mek});});}case _0x5f09b6(-0x2b3,-0x305,0x256,0xd4):case'smug':case _0x5a3069(0xc2,0x9e0,0x58f,0x6df):case'cum':case _0x5f09b6(-0x243,-0xc2,0x4f9,0x2):case _0x5f09b6(0x177,0xff,0x1b,-0x1a7):case _0x5a3069(0xc81,0xdf9,0x84f,0xdab):case'bj':case _0x5a3069(0x126a,0x124a,0xed2,0xcf4):case _0x5a3069(0xabc,0x7c7,0xb22,0x90b):case'poke':case'feed':case'nsfw_neko_'+_0x5f09b6(0x2b9,-0x101,-0xec,0x12c):case _0x5a3069(0xa27,0xebf,0xa62,0xe41):case _0x5f09b6(0x556,0x3b3,0x94d,0x682):case _0x5a3069(0x36a,0x647,0x645,0xaf9):case'hug':case _0x5a3069(0x174,0xb38,0x633,0x328):case _0x5a3069(0x25f,0x50c,0x4f0,0x389):case _0x5f09b6(-0x39c,0x108,0x1b0,0xfc):case'kuni':case _0x5a3069(0xa9b,0x1096,0xb65,0x7fe):case _0x5a3069(0x93d,0x726,0x7e1,0x6c5):case _0x5f09b6(0x3e9,0x6a3,0x15c,0x463):case _0x5f09b6(0xdef,0x8f6,0x536,0x93f):const _0x104f02={};_0x104f02[_0x5f09b6(0x173,-0x61,0x5b5,0x274)+'t']=_0x5f09b6(0x9a4,-0x11b,0x7f5,0x450)+'t';const _0xa10627={};_0xa10627[_0x5a3069(0xb44,0x9e1,0x6b1,0x3f7)]='limit',_0xa10627[_0x5f09b6(0x4d2,0x83f,0x3aa,0x4a5)]=_0x104f02,_0xa10627[_0x5f09b6(0x82d,0x9e4,0x716,0x663)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x5f09b6(0xbc1,0x8fd,0x4fd,0x91a)](prefix),'©\x20'+ownername,[_0xa10627]);if(!isNsfw&&!mek[_0x5a3069(0x112a,0xda4,0xe86,0xbeb)][_0x5a3069(0xc7f,0x815,0x98b,0x6b0)]&&!isOwner&&!isCreator)return reply(lang[_0x5a3069(0xdc0,0xb87,0x991,0x5c4)]());var ini_gif=await fetchJson(_0x5a3069(0x9f5,0x8d8,0xbbc,0x8b3)+'kos.life/a'+'pi/v2/img/'+command),ini_gif_=await getBuffer(ini_gif['url']);alpha[_0x5f09b6(0x745,0xbf1,0x212,0x664)+_0x5a3069(0x92,0x919,0x4cf,0x161)](m[_0x5a3069(0xd81,0xfb8,0xbbb,0xf45)],ini_gif['url'],mek,{'packname':q[_0x5f09b6(0xb3b,0x7c9,0x68a,0x776)]('|')[0x2*-0xad+0x126c+-0x1112]?q[_0x5f09b6(0x35c,0x5ed,0xb1d,0x776)]('|')[-0x1d73+0x1cd6+0x9d]:global[_0x5a3069(0x102,0x75d,0x575,0x3b1)],'author':q['split']('|')[-0x5b+-0x1e23*0x1+0xd3*0x25]?q[_0x5f09b6(0x7dd,0x658,0xc12,0x776)]('|')[0x9*-0xa6+-0x617+-0xbee*-0x1]:global['author']});break;case _0x5a3069(0x11d3,0x8f4,0xc1d,0xfa4):case _0x5f09b6(0x1ce,0x77d,0x1d2,0x347):case'woof':case _0x5a3069(0x114d,0x11c1,0xc92,0xdbf):case _0x5a3069(0xae9,0x4f8,0x835,0xb66):case _0x5a3069(0xc35,0xae5,0x96b,0xdf6):case _0x5a3069(0x9c3,0x8d5,0x8e2,0xc86):case _0x5a3069(0xb0f,0x9c1,0xb5d,0x718):case _0x5f09b6(-0xf3,-0xca,0x49b,0x456):case _0x5a3069(0x8ad,0x1216,0xe08,0x10b9):case _0x5a3069(0x1240,0xb83,0xdc2,0xbf5):case _0x5f09b6(-0x1a5,0x97,0xc9,0x9):case _0x5a3069(0x58e,0x4af,0x9fe,0xed9):case _0x5f09b6(0x977,0x95a,0xb0,0x551):case _0x5a3069(0x14fa,0xea3,0xfd3,0xc1f):case _0x5a3069(0x7fd,0x8a4,0xc7a,0x10be):case _0x5f09b6(0x15b,0xa41,0x7ac,0x66f):case'yuri':case _0x5f09b6(0x9af,0x471,0x337,0x65a):case _0x5f09b6(-0x157,0x84,0x150,0x10b):case _0x5a3069(0x49c,0x5e8,0x62c,0x4f1):case _0x5f09b6(0x15d,0x352,0x25,0x32f):case _0x5a3069(0xb36,0xdda,0xdda,0xcd2):case'kemonomimi':case _0x5f09b6(0xd35,0xa45,0xccd,0x95f):case _0x5a3069(0x491,0x335,0x7bc,0x950)+'r':case'erofeet':case _0x5f09b6(0x3fc,0x900,0xc2b,0x828):case _0x5f09b6(0x540,0x6af,0x962,0x400):case _0x5f09b6(0x6d4,0x723,0x62,0x3a2):case'waifu':case _0x5a3069(0xa2f,0xb0a,0x66d,0x619):case _0x5a3069(0x765,0xf5d,0xbd3,0xf33):case _0x5f09b6(0x324,0x6e4,0x491,0x78b):case _0x5a3069(0xc9c,0xc6f,0x916,0x975):case'futanari':case _0x5a3069(0x687,0xfcc,0xb16,0x81e):const _0x7d6c22={};_0x7d6c22[_0x5a3069(0x566,0x8bb,0x93d,0xa30)+'t']=_0x5a3069(0xf0c,0xd21,0xb19,0xcb7)+'t';const _0x18f42f={};_0x18f42f[_0x5f09b6(-0x56a,0x17e,-0x1ad,-0x18)]=_0x5a3069(0x11d4,0x1036,0xfe3,0x106b),_0x18f42f[_0x5f09b6(-0x10c,0x899,0x22,0x4a5)]=_0x7d6c22,_0x18f42f[_0x5a3069(0xc8d,0xf08,0xd2c,0x908)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x5f09b6(0x3a5,0x48b,0x5ea,0x91a)](prefix),'©\x20'+ownername,[_0x18f42f]);if(!isNsfw&&!mek[_0x5a3069(0x11de,0x11eb,0xe86,0xfdc)][_0x5a3069(0xf10,0xc6c,0x98b,0xeaf)]&&!isOwner&&!isCreator)return reply(lang['nsfwmo']());var ini_img=await fetchJson(_0x5a3069(0x6a8,0x102a,0xbbc,0x79c)+'kos.life/a'+_0x5f09b6(-0x6a6,-0x5c4,-0x208,-0x1f4)+command),ini_img_=await getBuffer(ini_img[_0x5f09b6(-0x13c,-0x61,0x717,0x3fd)]);const mediax=await alpha['prepareMes'+_0x5f09b6(0x39d,0x3a4,0x514,-0x29)](from,ini_img_,MessageType[_0x5a3069(0x7fc,0x652,0xaed,0x881)],{'thumbnail':Buffer['alloc'](0x26cb+-0x2*0x470+-0x1deb)});let bacotlux=mediax[_0x5a3069(0x1463,0x1437,0xeed,0xd26)][_0x5a3069(0xf4e,0xb01,0xd0d,0xb33)+_0x5f09b6(0x56d,0x3fb,0x7e8,0x297)]?mediax[_0x5f09b6(0xcff,0xda7,0x993,0x824)][_0x5a3069(0x128b,0xa32,0xd0d,0xd3e)+_0x5f09b6(0x6d1,0xad,-0x1c0,0x297)]:mediax;const _0x26e3db={};_0x26e3db[_0x5a3069(0x9bc,0xb6e,0x93d,0x60e)+'t']='🐨\x20Owner';const _0x5bc092={};_0x5bc092[_0x5f09b6(-0x147,0x48f,0x2bb,-0x18)]='owner',_0x5bc092[_0x5f09b6(0x791,0x5e2,0x4e6,0x4a5)]=_0x26e3db,_0x5bc092[_0x5f09b6(0x87b,0x704,0xe4,0x663)]=0x1;const _0xcb5bf7={};_0xcb5bf7[_0x5a3069(0xa94,0xd0e,0x93d,0xb3d)+'t']=_0x5a3069(0x54b,0x44f,0x76e,0x3ab);const _0x362733={};_0x362733[_0x5f09b6(-0x1,-0x123,-0x438,-0x18)]='donasi',_0x362733[_0x5f09b6(0x50c,0x581,0x8f5,0x4a5)]=_0xcb5bf7,_0x362733['type']=0x1;const buttonsx=[_0x5bc092,_0x362733],btnx__={'contentText':lang[_0x5f09b6(0x284,0xc9c,0x3b3,0x6f6)](),'footerText':''+tampilTanggal+enter+tampilWaktu+enter+enter+'©\x20'+creator+('\x20|\x20Request'+_0x5f09b6(-0x4fa,-0x112,-0x470,-0xd9))+sender['split']('@')[-0x2bf+-0x476*-0x3+-0xaa3],'buttons':buttonsx,'headerType':0x4,'imageMessage':bacotlux[_0x5a3069(0xd4e,0x942,0xeed,0xf0c)][_0x5a3069(0x79a,0xc02,0xacb,0xd84)+'ge']},_0x9be6f1={};_0x9be6f1[_0x5f09b6(0x296,0x365,-0x20a,-0xd8)+'id']=[sender];const _0x553243={};_0x553243[_0x5f09b6(-0x658,-0x36b,-0xae,-0x1bf)]=mek,_0x553243[_0x5a3069(0x9c2,0xa0f,0x9bf,0xcdf)+'o']=_0x9be6f1,alpha[_0x5f09b6(0x1c0,0x1f1,0x2c6,0x417)+'e'](from,btnx__,MessageType[_0x5f09b6(0x47b,0x545,0x638,0x33b)+_0x5a3069(0x7ad,0x5af,0x6a0,0x9de)],_0x553243)['catch'](_0x4ede46=>{function _0x134674(_0x10e506,_0x5cfa2c,_0x3dbd0f,_0x9e9494){return _0x5a3069(_0x10e506-0x1a4,_0x5cfa2c-0x1c3,_0x9e9494- -0x632,_0x3dbd0f);}reply(lang[_0x134674(0x64,-0x8c,0x24c,0x4ba)]());}),await limitAdd(sender,limit);break;case _0x5f09b6(0x1c3,-0x593,-0x35e,-0xa6):const _0x4830c6={};_0x4830c6[_0x5a3069(0xbc2,0xb22,0x93d,0x6a1)+'t']='Check\x20Limi'+'t';const _0x8da19e={};_0x8da19e[_0x5a3069(0xb25,0x32a,0x6b1,0x61b)]=_0x5f09b6(0x5d6,0xa57,0xa26,0x91a),_0x8da19e[_0x5f09b6(-0x9e,0x82,0x256,0x4a5)]=_0x4830c6,_0x8da19e[_0x5f09b6(0xa76,0xa80,0x840,0x663)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x5f09b6(0x86c,0x945,0xe2e,0x91a)](prefix),'©\x20'+ownername,[_0x8da19e]);const pref=_0x5a3069(0xe7d,0x12c3,0xdae,0xe9e)+enter+(_0x5a3069(0x51c,0x585,0xa92,0x93f)+_0x5a3069(0x124f,0xa2c,0xd78,0xe9f)+_0x5f09b6(0xaf7,0x951,0xa61,0x559)+_0x5a3069(0x136c,0xe41,0xdd7,0x1337)+'impostor\x20='+_0x5a3069(0x88f,0x48d,0x99e,0x98e)+'lor\x20=\x20blac'+_0x5f09b6(0x8b,-0x6d,0x5e6,0x9d)+_0x5f09b6(0x7af,0x27d,0x7b8,0x203)+_0x5f09b6(0x143,0xb1,0x152,0x541)+'me|orange|'+'pink|purpl'+_0x5f09b6(-0x2fa,0x2d2,0x65b,0xc3)+'e|yellow\x20')+enter+enter+_0x5f09b6(0x376,0xa02,0x4f7,0x78e)+enter+'\x20'+prefix+(_0x5a3069(0xf01,0x735,0xc84,0xdf2)+_0x5f09b6(0x8f8,0x9b2,0x751,0x840)+'|cyan');if(args[_0x5f09b6(-0x3d1,-0x1c2,0x290,0x15)]<-0x603*-0x3+-0x1795+0x58d)return reply(pref);var kntl_=args['join']('\x20'),nama_=kntl_[_0x5f09b6(0x214,0x37f,0xa50,0x776)]('|')[0xd15+-0x19f*0x8+0x1d*-0x1],impostor_=kntl_[_0x5a3069(0xb8d,0xace,0xe3f,0xc05)]('|')[-0x189b+0x1d9f*-0x1+0x363b],color_=kntl_[_0x5a3069(0x126e,0xc0b,0xe3f,0xf5c)]('|')[-0x170d+0x1d2f+-0x620];const _0x109ffd={};_0x109ffd[_0x5a3069(0x137e,0x103a,0xf28,0xdbc)]=_0x5a3069(0x1466,0xfcb,0x1021,0xe69);var amongus=await getBuffer(_0x5a3069(0x1d4,0xab1,0x5c8,0x87f)+_0x5a3069(0x729,0x581,0xa8b,0xc98)+_0x5a3069(0x38b,0x9cf,0x652,0x2f7)+'d?name='+nama_+'&impostor='+impostor_+'&crewmate='+color_,_0x109ffd);amongusp=''+lang[_0x5f09b6(0x923,0x52a,0x7bf,0x6f6)]()+enter+enter+(_0x5a3069(0xac1,0x827,0xb58,0xa20)+_0x5f09b6(-0x9e,0x4e1,0x553,0x4d4)+_0x5a3069(0x98c,0xe4f,0xc19,0x115d)+'.be/w4iQ4r'+_0x5f09b6(0x4f4,0x631,0x2f3,0x1a2)),alpha['sendMessag'+'e'](from,amongus,image,{'thumbnail':Buffer[_0x5f09b6(0x886,0x769,0x607,0x412)](0x1bbc+0x1*-0x16b5+-0x21*0x27),'caption':lang['success'](),'quoted':mek}),await limitAdd(sender,limit);break;case _0x5f09b6(-0x500,-0x128,-0x292,-0x124):case _0x5a3069(0xfa3,0x108a,0xd84,0xef5):case'tweet':if(args[_0x5f09b6(0x491,-0x1bc,0x301,0x15)]<0x146*-0x1e+0x7*-0x39+0x27c4)return reply('..');const _0x349c89={};_0x349c89['displayTex'+'t']=_0x5a3069(0x7c6,0x651,0xb19,0xded)+'t';const _0x28a3d9={};_0x28a3d9[_0x5f09b6(-0x333,-0x35,-0x372,-0x18)]=_0x5f09b6(0xec3,0x74d,0xa46,0x91a),_0x28a3d9[_0x5a3069(0xe88,0x78e,0xb6e,0x618)]=_0x349c89,_0x28a3d9[_0x5a3069(0xe40,0x1099,0xd2c,0xb72)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang['limit'](prefix),'©\x20'+ownername,[_0x28a3d9]);let trump=args['join']('\x20');const _0x27bbfb={};_0x27bbfb[_0x5f09b6(0xd60,0x7d3,0x2e6,0x85f)]=_0x5a3069(0xbe7,0xefb,0x1021,0xd08);let trump1=await fetchJson(_0x5f09b6(-0x69,0x6db,0x8a8,0x4f3)+'kobot.xyz/'+_0x5f09b6(0x9df,0xb02,0x39c,0x924)+_0x5f09b6(0x826,0x911,0x486,0x695)+_0x5a3069(0x691,0x866,0x8d0,0xc91)+_0x5a3069(0x96a,0xd95,0xdd8,0x854)+trump+'&raw=7',_0x27bbfb),trump2=await getBuffer(trump1[_0x5f09b6(0x505,0x483,0x709,0x824)]);alpha[_0x5a3069(0xa47,0x9d0,0xae0,0xd50)+'e'](from,trump2,image,{'thumbnail':Buffer['alloc'](0x1fc1+0x7*-0x31e+0x1*-0x9ef),'caption':lang[_0x5a3069(0xf84,0xba6,0xdbf,0x1048)](),'quoted':mek}),await limitAdd(sender,limit);break;case _0x5f09b6(0x279,0xa35,0x312,0x6ae):if(args[_0x5f09b6(0x47e,0x14b,0x1e7,0x15)]<0x3*0x3b+0x5be+-0x1*0x66e)return reply('..');const _0x26fab7={};_0x26fab7['displayTex'+'t']=_0x5a3069(0x701,0x647,0xb19,0x819)+'t';const _0x549c00={};_0x549c00[_0x5f09b6(-0x132,-0x7d,0x218,-0x18)]=_0x5a3069(0x1451,0xc2b,0xfe3,0xa47),_0x549c00['buttonText']=_0x26fab7,_0x549c00[_0x5f09b6(0xa7f,0x690,0x988,0x663)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x5f09b6(0x597,0x480,0xc27,0x91a)](prefix),'©\x20'+ownername,[_0x549c00]);let cmm=args[_0x5f09b6(0x14c,0x556,0x95,0x49d)]('\x20');const _0x358cf2={};_0x358cf2[_0x5f09b6(0xb2d,0xd57,0x631,0x85f)]='get';let anuuu=await fetchJson(_0x5f09b6(0x99d,0x8cc,0x5d,0x4f3)+_0x5f09b6(-0xed,0x6ea,0x7bc,0x4a2)+_0x5a3069(0x13d2,0xdca,0xfed,0xfb2)+_0x5a3069(0xcbd,0xd15,0xcec,0xb66)+_0x5a3069(0x1384,0x1147,0xf5f,0xfbd)+_0x5a3069(0xe41,0xe29,0xd6d,0x7de)+cmm+_0x5f09b6(0x342,0x327,-0x28,0x6),_0x358cf2),bbuffer=await getBuffer(anuuu[_0x5a3069(0x105c,0x1077,0xeed,0x13d4)]);alpha[_0x5a3069(0x660,0xada,0xae0,0x988)+'e'](from,bbuffer,image,{'thumbnail':Buffer[_0x5a3069(0xefe,0x1027,0xadb,0x5f0)](0x5*-0x613+0xf83*-0x1+-0x68e*-0x7),'caption':lang['success'](),'quoted':mek}),await limitAdd(sender,limit);break;case _0x5f09b6(0xa54,0x6b7,0x733,0x6e4):if(args[_0x5a3069(0xb0e,0x67d,0x6de,0x163)]<-0x1468*0x1+0x1*0x192d+-0x4*0x131)return reply('..');let kanna=args[_0x5a3069(0x6a6,0xaae,0xb66,0xcc3)]('\x20');const _0x54b057={};_0x54b057[_0x5a3069(0x1178,0x11e0,0xf28,0x125b)]=_0x5f09b6(0x560,0x4ad,0x661,0x958);var anu_=await fetchJson(_0x5a3069(0xbb0,0x1055,0xbbc,0x7d8)+_0x5f09b6(-0x75,0x207,0x306,0x4a2)+_0x5f09b6(0x564,0xae9,0x3ff,0x924)+_0x5f09b6(-0x1fc,0x4b3,0x2dd,0xd7)+_0x5a3069(0x587,0x5c2,0x808,0x903)+'t='+kanna+_0x5a3069(0x245,0xb5d,0x6cf,0x942),_0x54b057);let buffer_h=await getBuffer(anu_['message']);alpha[_0x5f09b6(0x258,0x3d8,0x176,0x417)+'e'](from,buffer_h,image,{'thumbnail':Buffer['alloc'](-0x1a8a+-0x1bdd+0x1*0x3667),'caption':lang[_0x5a3069(0x1321,0x10a3,0xdbf,0x1009)](),'quoted':mek}),await limitAdd(sender,limit);break;case _0x5a3069(0xcad,0x12b5,0xd72,0xe92):case _0x5f09b6(0x727,-0x71,0x8f2,0x542):case _0x5f09b6(0x14,0x30e,0x93c,0x4f2):case _0x5f09b6(0x9f6,0x3ac,0x722,0x579):case'dino_kunin'+'g':case _0x5f09b6(0xb0a,0x2e7,0x346,0x59d):case _0x5a3069(0xb86,0xa87,0x6ce,0x61c):case'hope_boy':case _0x5f09b6(-0x2bf,-0x308,0x5fe,0x4c):case _0x5f09b6(0x397,0x5d6,0x558,0x56d):case'kucing':case _0x5f09b6(-0x5f,0x95c,0xb5,0x466):case _0x5f09b6(-0x501,-0x245,0x1d4,-0x1ef)+'di':case _0x5f09b6(0x5a0,0x46b,0x5e,0x29b):case'meow':case _0x5f09b6(0x7ed,0x69f,0x723,0x6f8):case _0x5a3069(0x8dc,0x67b,0xaa3,0xaa9):case'popoci':case _0x5a3069(0x6c0,0x604,0x931,0x922):case _0x5a3069(0x797,0x183,0x4fb,0xb0)+_0x5a3069(0x10d5,0xe22,0xd39,0x105b):case _0x5a3069(0xd9a,0xb5e,0xa00,0x5a9):const _0x20ca43={};_0x20ca43[_0x5f09b6(-0x328,0x18,0x131,0x274)+'t']=_0x5f09b6(0x6ae,0x743,0x93e,0x450)+'t';const _0xa14734={};_0xa14734[_0x5a3069(0xa32,0x44b,0x6b1,0x58d)]=_0x5f09b6(0xd3c,0x9cd,0xa90,0x91a),_0xa14734['buttonText']=_0x20ca43,_0xa14734['type']=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x5f09b6(0x956,0xdf7,0x68b,0x91a)](prefix),'©\x20'+ownername,[_0xa14734]);reply(lang[_0x5a3069(0x342,0x4c5,0x70a,0x6b0)]());var random_telestc=await getBuffer(_0x5f09b6(0x223,0x1ab,0x242,0x236)+_0x5a3069(0x8e7,0x5c6,0x64e,0x16e)+_0x5f09b6(-0x1e,0x444,0x32c,0xd9)+_0x5f09b6(-0x272,0x404,-0x206,-0x11b)+_0x5a3069(0x617,0x360,0x4e2,0x7d7)+'r/'+command+(_0x5a3069(0x977,0x601,0xb21,0xa40)+_0x5f09b6(0x55d,0x719,0xa1c,0x8ee)));const _0x4045e5={};_0x4045e5[_0x5a3069(0xa5a,0x153,0x50a,0x77b)]=fgclink,await alpha[_0x5f09b6(0x67,0x138,0x722,0x417)+'e'](from,random_telestc,sticker,_0x4045e5),await limitAdd(sender,limit);break;case'chika':case'delvira':case _0x5a3069(0x950,0xc36,0xe30,0x1109):case _0x5a3069(0x447,0x935,0x861,0x595):case _0x5f09b6(0x8e8,0x3,0x318,0x58d):case _0x5f09b6(-0x21,0x4a9,0x10d,0x55e):case'ziva':case _0x5f09b6(-0x63,0x2e2,0x514,0x4fd):case _0x5a3069(0x16b,0xab8,0x708,0x65c):case _0x5f09b6(0x61c,0x1f1,0x2b9,0x2bd):case _0x5a3069(0x82e,0xda9,0xad0,0xb1c):case _0x5a3069(0xaa4,0x537,0x5b3,0x82):case'mama_gina':case _0x5f09b6(0x62e,0x6f3,0xa59,0x66b):case _0x5f09b6(0x147,0x2c9,0x5fd,0x185):case _0x5a3069(0x15bf,0xe37,0x1027,0x103e)+'ni':case _0x5f09b6(0x2d0,-0x429,0xb5,0xb9):case _0x5f09b6(0x386,-0x2a2,-0x31b,0x6f):case'geayubi':case _0x5f09b6(-0x2cb,-0x4ac,-0x38a,-0x1d3):case _0x5f09b6(0x37c,-0x119,0x848,0x342):const _0x17df47={};_0x17df47[_0x5f09b6(0x2bd,-0x132,0x644,0x274)+'t']=_0x5a3069(0xaaf,0xbab,0xb19,0xfb2)+'t';const _0x33bfc0={};_0x33bfc0['buttonId']=_0x5f09b6(0x609,0x824,0x693,0x91a),_0x33bfc0[_0x5a3069(0x10e9,0x107e,0xb6e,0xcfe)]=_0x17df47,_0x33bfc0[_0x5f09b6(0x2f5,0x9de,0x1e8,0x663)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x5f09b6(0x8bc,0x8a3,0x550,0x91a)](prefix),'©\x20'+ownername,[_0x33bfc0]);reply(lang[_0x5f09b6(0x29e,0xf9,-0x41b,0x41)]());var random_asupan=await getBuffer(_0x5f09b6(0x7d4,0x72c,0x25c,0x236)+_0x5a3069(0x8c9,0xa50,0x64e,0xb4d)+_0x5a3069(0xaf4,0x8c4,0x7a2,0x6c2)+_0x5a3069(0x6e4,0x613,0x5c2,0xad4)+'supan/'+command+(_0x5f09b6(0x66a,-0x70,0x9ad,0x458)+_0x5a3069(0xc0d,0x1388,0xfb7,0x13f3)));const mediaxx=await alpha[_0x5f09b6(0xa65,0x82f,0x7ae,0x7c5)+'sage'](from,random_asupan,MessageType[_0x5a3069(0x13e9,0xcbb,0xfe7,0xf74)],{'thumbnail':Buffer[_0x5a3069(0xe6a,0x59b,0xadb,0xf99)](-0x102*0x1+0xc95*-0x1+0xd97)});let bacotluxx=mediaxx[_0x5a3069(0x134b,0x1307,0xeed,0xec7)][_0x5a3069(0xcde,0x109b,0xd0d,0xee6)+_0x5f09b6(0x173,-0x2de,0x609,0x297)]?mediaxx[_0x5f09b6(0x88a,0x7bc,0x28b,0x824)]['ephemeralM'+'essage']:mediaxx;const _0x28862f={};_0x28862f['displayTex'+'t']='🐨\x20Owner';const _0x52f5d4={};_0x52f5d4[_0x5f09b6(0x1cf,-0x5a9,0x105,-0x18)]=_0x5f09b6(0xa07,0x92,0x11b,0x53e),_0x52f5d4[_0x5f09b6(0x8af,0xa33,0x282,0x4a5)]=_0x28862f,_0x52f5d4[_0x5f09b6(0x3b7,0xb15,0xb31,0x663)]=0x1;const _0xc1cefe={};_0xc1cefe[_0x5f09b6(0x634,-0x145,0x14c,0x274)+'t']=_0x5f09b6(0x162,-0x288,0x1a4,0xa5);const _0x46b262={};_0x46b262['buttonId']='donasi',_0x46b262[_0x5f09b6(0x9c,0xb1,0x7a3,0x4a5)]=_0xc1cefe,_0x46b262['type']=0x1;const buttonsxx=[_0x52f5d4,_0x46b262],btnx___={'contentText':lang[_0x5a3069(0x1276,0xd2c,0xdbf,0xb9e)](),'footerText':''+tampilTanggal+enter+tampilWaktu+enter+enter+'©\x20'+creator+(_0x5a3069(0x110d,0xbe6,0xc91,0xfd1)+_0x5a3069(0x758,0xb1c,0x5f0,0xa99))+sender[_0x5a3069(0xa33,0x1364,0xe3f,0xc06)]('@')[0x1749+-0xf2e+-0x81b],'buttons':buttonsxx,'headerType':0x5,'videoMessage':bacotluxx[_0x5a3069(0x10cc,0x10a0,0xeed,0xa2b)][_0x5f09b6(0x7d,-0x165,0xf9,-0x21)+'ge']},_0x395f71={};_0x395f71[_0x5f09b6(0x419,0x429,0x12c,-0xd8)+'id']=[sender];const _0x1af1aa={};_0x1af1aa['quoted']=mek,_0x1af1aa[_0x5f09b6(0x569,0x220,0x60a,0x2f6)+'o']=_0x395f71,alpha['sendMessag'+'e'](from,btnx___,MessageType[_0x5a3069(0xa79,0xc02,0xa04,0x613)+_0x5f09b6(-0x3cd,0x205,-0xdf,-0x29)],_0x1af1aa)['catch'](_0x463798=>{function _0x110d2e(_0x25d8ec,_0x612a19,_0x1c9938,_0x31f883){return _0x5a3069(_0x25d8ec-0x12a,_0x612a19-0x18e,_0x612a19- -0x62f,_0x1c9938);}function _0x2a4330(_0x38fbb3,_0x58e492,_0x2bd62f,_0x4ce35a){return _0x5a3069(_0x38fbb3-0x1d9,_0x58e492-0x13c,_0x4ce35a- -0x10f,_0x2bd62f);}const _0x51df54={'NfxdU':function(_0x34b36a,_0x45f10f){return _0x34b36a(_0x45f10f);}};_0x51df54[_0x2a4330(0xe79,0x1256,0x78d,0xce2)](reply,_0x2a4330(0x12da,0xa85,0x99c,0xd67)+_0x2a4330(0x52e,0xa32,0x3d3,0x974)+_0x2a4330(0x540,0x79b,0x6da,0x684)+_0x110d2e(0x710,0x854,0xd26,0xddd)+'gi');}),await limitAdd(sender,limit);break;case'china':case _0x5a3069(0x1135,0xd0f,0xfa7,0xfc2):case _0x5f09b6(-0x42c,0x54f,-0xf0,-0x11):case'thailand':case _0x5f09b6(0x136,-0xd5,-0x3a9,0xcd):case _0x5f09b6(-0x7a,0x5e9,0x727,0x3fe):case _0x5a3069(0xbf3,0x9a7,0x85a,0x87c):case _0x5a3069(0xe00,0xd7e,0xd4d,0x10b9):case'jiso':case _0x5a3069(0xa72,0x9ba,0x6c2,0x423):case'rose':const _0xfd23bd={};_0xfd23bd[_0x5a3069(0xa06,0xa62,0x93d,0x43f)+'t']=_0x5f09b6(0x78b,0xc7,0x532,0x450)+'t';const _0x3fbf4e={};_0x3fbf4e[_0x5a3069(0x2e6,0x91b,0x6b1,0x2aa)]=_0x5f09b6(0x887,0x8fd,0x99e,0x91a),_0x3fbf4e['buttonText']=_0xfd23bd,_0x3fbf4e[_0x5a3069(0xcc4,0xcae,0xd2c,0xbb7)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x5f09b6(0xd95,0x7b5,0xcea,0x91a)](prefix),'©\x20'+ownername,[_0x3fbf4e]);reply(lang[_0x5a3069(0x511,0xca4,0x70a,0x9c5)]());var random_cecan=await getBuffer(_0x5f09b6(0x4e7,0x524,0x6d1,0x236)+_0x5f09b6(-0x2c0,-0x21a,-0x2cd,-0x7b)+'.herokuapp'+_0x5f09b6(0x4bf,-0x1ec,-0xa3,-0x35)+_0x5f09b6(-0x41b,0x500,0x33f,0x150)+command+(_0x5a3069(0xdae,0xcc5,0xb21,0x1028)+_0x5f09b6(0xce4,0x563,0x404,0x8ee)));const mediaxxx=await alpha[_0x5f09b6(0x2e5,0x7f3,0xb5d,0x7c5)+_0x5f09b6(-0x2de,-0x183,-0x58c,-0x29)](from,random_cecan,MessageType[_0x5f09b6(0x653,0x42d,0x383,0x424)],{'thumbnail':Buffer[_0x5a3069(0x7eb,0xba4,0xadb,0xa1d)](-0x1357+0x1*-0x82+0x13d9)});let bacotluxxx=mediaxxx[_0x5f09b6(0x3cf,0x536,0x516,0x824)][_0x5a3069(0xc62,0x119a,0xd0d,0xb06)+_0x5f09b6(0x30b,-0x147,0x81,0x297)]?mediaxxx[_0x5f09b6(0xbe8,0xd1d,0x83a,0x824)][_0x5f09b6(0x6c0,0x87d,0x345,0x644)+'essage']:mediaxxx;const _0x3cc185={};_0x3cc185[_0x5f09b6(-0x98,0x351,-0x30,0x274)+'t']=_0x5f09b6(0x473,-0x27f,0xbb,-0x6);const _0x5c70bd={};_0x5c70bd[_0x5f09b6(0x22c,-0x4f,0x4ca,-0x18)]=_0x5f09b6(0x775,0x576,0xa86,0x53e),_0x5c70bd[_0x5a3069(0xaca,0x750,0xb6e,0x68e)]=_0x3cc185,_0x5c70bd['type']=0x1;const _0xa48568={};_0xa48568['displayTex'+'t']=_0x5f09b6(0xca,0x603,-0x420,0xa5);const _0x437459={};_0x437459[_0x5f09b6(0x173,0x21e,0x3b2,-0x18)]=_0x5f09b6(0x620,0x428,0x542,0x54b),_0x437459['buttonText']=_0xa48568,_0x437459['type']=0x1;const buttonsxxx=[_0x5c70bd,_0x437459],btnxx__={'contentText':lang[_0x5f09b6(0x8c3,0xab5,0xadb,0x6f6)](),'footerText':''+tampilTanggal+enter+tampilWaktu+enter+enter+'©\x20'+creator+(_0x5a3069(0xe1e,0xed4,0xc91,0xedd)+_0x5a3069(0x4a0,0x100,0x5f0,0x6e0))+sender[_0x5a3069(0xa84,0xcfa,0xe3f,0x1243)]('@')[-0x104c+-0x1c26+0x2c72],'buttons':buttonsxxx,'headerType':0x4,'imageMessage':bacotluxxx[_0x5a3069(0x1464,0x1071,0xeed,0x9f6)][_0x5a3069(0x5c9,0x79a,0xacb,0xf3d)+'ge']},_0x580eb5={};_0x580eb5[_0x5a3069(0x404,0x290,0x5f1,0x58b)+'id']=[sender];const _0x44fa39={};_0x44fa39['quoted']=mek,_0x44fa39[_0x5f09b6(0x532,0x52c,0x3ba,0x2f6)+'o']=_0x580eb5,alpha[_0x5a3069(0xb64,0xd24,0xae0,0xeab)+'e'](from,btnxx__,MessageType[_0x5a3069(0xeda,0xf4b,0xa04,0x978)+_0x5f09b6(0x18,-0x19f,0x212,-0x29)],_0x44fa39)[_0x5f09b6(0x24c,0x37b,0x465,0x4e9)](_0x1049fb=>{function _0x5ab4c8(_0x16f579,_0x21dd2b,_0x54086e,_0x5e3fdf){return _0x5f09b6(_0x16f579,_0x21dd2b-0x30,_0x54086e-0x175,_0x54086e-0x412);}const _0x573a8a={'UemOB':function(_0x436714,_0x3cc95b){return _0x436714(_0x3cc95b);},'VQaQM':_0x5ab4c8(0xd76,0xb9d,0xbbf,0x106b)+_0x5ab4c8(0x650,0x329,0x7cc,0x2f2)+_0x5ab4c8(-0x35,0x5c3,0x4dc,-0x41)+'pa\x20saat\x20la'+'gi'};function _0x11095c(_0x1a0723,_0x47025d,_0x402136,_0x58fd88){return _0x5f09b6(_0x58fd88,_0x47025d-0xa3,_0x402136-0xa4,_0x1a0723-0x382);}_0x573a8a[_0x5ab4c8(0x180,0x24c,0x29b,0x1c8)](reply,_0x573a8a['VQaQM']);}),await limitAdd(sender,limit);break;case'sc':case _0x5f09b6(0x36d,-0x6e7,-0x179,-0x1d2):case'sourcecode':try{opo=await fetchJson(_0x5f09b6(0xeb,-0x2dc,0x762,0x236)+_0x5f09b6(-0x529,-0x82,0x43d,-0x7b)+'.herokuapp'+_0x5f09b6(0x181,0x22a,0x30b,-0x107)+_0x5a3069(0x63f,0xec,0x57a,0x978));}catch{const _0x38c3c4={};_0x38c3c4[_0x5f09b6(0x715,0x50a,-0xb,0x4c2)]=_0x5f09b6(0xa9,-0xc4,0x4b2,0x3e0)+_0x5f09b6(0xa08,0x34d,0x634,0x87b)+_0x5f09b6(-0x2c0,-0x179,0x431,0x2ab)+_0x5a3069(0x11da,0xf83,0xddd,0x11fd)+_0x5f09b6(0x623,-0x1e,0x4ed,0x13e)+_0x5f09b6(0x3ea,0x12f,0x3cd,0x199),opo=_0x38c3c4;}let kl=opo['update'];var sjakolan=await getBuffer(_0x5f09b6(0x33a,0x2cf,0x59f,0x89)+_0x5a3069(0xc0b,0x2a8,0x7f1,0x86e)+'ile/e2c139'+_0x5a3069(0xf12,0xf11,0x9b1,0x96b)+_0x5a3069(0x885,0x91d,0xb1c,0x8ed));const _0x429255={};_0x429255[_0x5f09b6(-0xe1,0x469,0x5ae,0x274)+'t']=_0x5f09b6(0x92f,0x5de,0xbda,0x93b);const _0x5aa6ab={};_0x5aa6ab[_0x5f09b6(-0x3ce,0x411,0x33c,-0x18)]=_0x5f09b6(0x40a,-0x31e,-0x4a0,0x20),_0x5aa6ab[_0x5f09b6(0x1ac,0x5ff,0x2e2,0x4a5)]=_0x429255,_0x5aa6ab[_0x5f09b6(0xbbc,0x5d5,0x7ab,0x663)]=0x1;const _0x2af9cb={};_0x2af9cb['displayTex'+'t']=_0x5f09b6(0x949,0x76e,0x245,0x7ae);const _0x2b8e59={};_0x2b8e59[_0x5a3069(0x1ce,0xaac,0x6b1,0x707)]=_0x5a3069(0xbce,0xbaf,0xc07,0x6e9),_0x2b8e59['buttonText']=_0x2af9cb,_0x2b8e59[_0x5f09b6(0x2c1,0x1fd,0xb62,0x663)]=0x1,sendButLocation(from,kl,''+tampilTanggal+enter+tampilWaktu+enter+enter+'Regard\x20@'+ini_mark[_0x5a3069(0xee5,0xc77,0xe3f,0xb9d)]('@')[-0x119d+-0x2*0x5f9+0x1d8f],sjakolan,[_0x5aa6ab,_0x2b8e59],{'contextInfo':{'mentionedJid':[ini_mark]}});break;case'katalog':sendKatalog(_0x5f09b6(0x898,0x7d1,0x63b,0x672)+_0x5a3069(0xbc0,0x905,0xaaa,0xf70),_0x5f09b6(-0x119,0x14e,-0x4e7,-0x188)+'00',_0x5a3069(0x694,0x3ef,0x705,0x2ec));break;case _0x5a3069(0x29b,0x8d3,0x71d,0xc7a):case _0x5f09b6(0x225,0x2af,0x50a,0x2b8):const _0x3ddf51={};_0x3ddf51[_0x5f09b6(-0x206,-0xa8,0x2f4,0x274)+'t']=_0x5a3069(0xce8,0xd89,0xb19,0xc54)+'t';const _0x1e8018={};_0x1e8018[_0x5a3069(0x423,0x36a,0x6b1,0x20f)]='limit',_0x1e8018[_0x5a3069(0x91e,0x905,0xb6e,0x72b)]=_0x3ddf51,_0x1e8018[_0x5f09b6(0xbe2,0x867,0x4a6,0x663)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x5a3069(0xa74,0xed5,0xfe3,0xe3c)](prefix),'©\x20'+ownername,[_0x1e8018]);if(args['length']<0x2*-0x493+-0x2384+0x2cab)return reply(_0x5a3069(0x836,0xdc4,0x82b,0x9e8)+_0x5a3069(0x62b,0xa50,0xaba,0xa4b)+prefix+(_0x5a3069(0x8be,0xe12,0xe42,0x11f9)+'*'));reply(lang['wait']());let yut=await yts(q);server=_0x5a3069(0x911,0x610,0x54c,0x938),yta2(yut[_0x5a3069(0x884,0xfb2,0xd3c,0xf7a)][-0x3f*-0x69+0x2*0x12f4+-0x3fbf*0x1][_0x5a3069(0xc76,0x94d,0xac6,0x857)],server)[_0x5f09b6(0x1ca,0x97,0x78a,0x488)](async _0x48c1f2=>{const _0x260973={'LFkyU':function(_0x438573,_0x7ee1c){return _0x438573(_0x7ee1c);},'VqETt':_0x111f8b(0x6ee,0x1028,0xb38,0xb30),'sGGIl':_0x111f8b(0x347,0x674,0x80f,0x29f)};function _0x111f8b(_0x332af7,_0x5b59ed,_0xb7f5b0,_0x25eced){return _0x5f09b6(_0x332af7,_0x5b59ed-0x63,_0xb7f5b0-0x1e6,_0x25eced-0x209);}const {thumb:_0x13af34,title:_0x44a531,filesizeF:_0x3d73ae,filesize:_0x30b7d8}=_0x48c1f2,_0x571e40='*----「\x20YOU'+_0x75c36b(0xaec,0x619,0x145,0x7a6)+_0x111f8b(0x574,0xaa9,0x425,0x966)+_0x111f8b(0xc79,0x1038,0xbaf,0xa83)+_0x44a531+_0x75c36b(0x8f9,0x755,0x97f,0xcfc)+yut[_0x75c36b(0x5b9,0x95f,0xe04,0xbcc)][-0x6e5*0x3+-0x26b+0x171a][_0x111f8b(0xf16,0xf45,0xcbc,0xa30)]+('\x0a🚀\x20Upload\x20'+':\x20')+yut[_0x75c36b(0x7fb,0x95f,0x5d4,0xc80)][-0x1357*-0x1+-0x1bff*0x1+0x8a8][_0x75c36b(0x5ba,0x63c,0x884,0x83e)]+_0x75c36b(0x87f,0x785,0xb55,0x559)+_0x3d73ae+_0x111f8b(0x5be,0x2fb,-0x43e,0x13)+yut[_0x75c36b(0xdcc,0x95f,0x53a,0xd7f)][0x62*-0x4+-0x28c+0x2*0x20a][_0x75c36b(0x9e2,0x797,0x249,0xb03)]+(_0x111f8b(0x2b0,0xec,0x507,0x204)+'on\x20:\x20')+yut[_0x111f8b(0x372,0x72f,0xe29,0x87c)][0x1*-0x1d63+-0xb1*-0x9+0x172a]['timestamp']+_0x111f8b(0x10a,0x649,0x9f2,0x483)+yut['videos'][0xca3*0x3+-0xa*0x6d+-0x21a7][_0x111f8b(0x946,0x5e6,0x156,0x606)]+('\x0a\x0a_Please\x20'+_0x111f8b(0xd5c,0xc21,0xaa7,0x7b2)+_0x75c36b(0x1fb,0x19c,-0x1e,0x29d)+_0x75c36b(0x351,0x417,0x798,0x628)+_0x111f8b(0x59c,0x209,0x3fc,0x447));let _0xc31760=await _0x260973[_0x111f8b(0x7c5,0x3d4,0x206,0x35c)](getBuffer,_0x13af34);const _0x459c30={};_0x459c30[_0x111f8b(0x6f2,0x209,0x2a2,0x47d)+'t']=_0x260973[_0x75c36b(-0x3c7,0x14b,-0x16c,-0x7c)];const _0x240ac9={};_0x240ac9[_0x111f8b(-0x279,-0x4c,0x35c,0x1f1)]=_0x111f8b(0x928,0x80a,0xb12,0x869)+yut[_0x111f8b(0x688,0x2cb,0x752,0x87c)][-0x2*-0xd6+0x2427+-0x25d3][_0x111f8b(0x384,0x6c2,0x171,0x606)];function _0x75c36b(_0x1572f8,_0x355ce8,_0xf97267,_0x467001){return _0x5a3069(_0x1572f8-0xda,_0x355ce8-0x16b,_0x355ce8- -0x3dd,_0x467001);}_0x240ac9['buttonText']=_0x459c30,_0x240ac9[_0x75c36b(0x58b,0x94f,0xe57,0xc3f)]=_0x260973[_0x75c36b(0x34e,0x71b,0x9ab,0xa24)];const _0xf4a6fe={};_0xf4a6fe[_0x111f8b(0x40a,0x322,0x393,0x47d)+'t']=_0x75c36b(0xf13,0x9be,0x7b3,0xec3);const _0x5451c0={};_0x5451c0['buttonId']='ytmp3\x20'+yut[_0x75c36b(0xaa3,0x95f,0xcd0,0xc79)][-0x1*-0x10a8+-0xa07+-0x6a1][_0x75c36b(0x2b2,0x6e9,0xbfe,0xc9e)],_0x5451c0[_0x111f8b(0x42d,0x92a,0x210,0x6ae)]=_0xf4a6fe,_0x5451c0[_0x75c36b(0x43e,0x94f,0x414,0xdc8)]=_0x260973[_0x75c36b(0x495,0x71b,0x1b3,0x57f)];let _0x1e4dc3=[_0x240ac9,_0x5451c0];sendButLocation(from,_0x571e40,_0x75c36b(0x2d3,0x5d2,0xb7f,0x84)+_0x75c36b(0x98,0x4c8,0x37b,0x407)+_0x111f8b(0x65a,0xb88,0xbd1,0x686)+enter+enter+'©\x20'+ownername,_0xc31760,_0x1e4dc3,{});})[_0x5a3069(0xa2e,0xcaa,0xbb2,0x9e6)](_0x188382=>reply(_0x5f09b6(0x93f,0x8f5,0x828,0x7ad)+_0x5a3069(0xa47,0xa9f,0xa83,0x868)+_0x5f09b6(-0x3ac,0x3f3,-0xa5,0xca)+_0x5a3069(0xfd8,0x11c4,0xe83,0xa48)+'gi')),await limitAdd(sender,limit);break;case _0x5f09b6(0x84e,0x771,0x1a2,0x511):const _0x1d6028={};_0x1d6028['dis1Tex'+'t']=_0x5f09b6(0x158,0x650,0xcd,0x450)+'t';const _0x2eb9d5={};_0x2eb9d5[_0x5f09b6(-0x2fa,-0x5b5,-0x47a,-0x18)]=_0x5a3069(0x1437,0xea4,0xfe3,0xd4a),_0x2eb9d5[_0x5a3069(0xcd4,0xe28,0xb6e,0xf7f)]=_0x1d6028,_0x2eb9d5[_0x5f09b6(0x4df,0xbc6,0x4f1,0x663)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang['limit'](prefix),'©\x20'+ownername,[_0x2eb9d5]);if(!q)return fakegroup('Linknya?');if(!isUrl(args[0x1b1f+-0x215+-0x190a])&&!args[0x1fa9+-0x1d8a+-0x21f][_0x5a3069(0x144d,0xce9,0x1007,0xcd3)]('tiktok.com'))return reply(lang[_0x5f09b6(0x7a6,0x91a,0x2d8,0x68f)]());reply(lang['wait']()),ttt=args[_0x5a3069(0xbed,0xeb2,0xb66,0xca1)]('\x20'),hx[_0x5a3069(0xd9f,0xd3b,0x939,0xc3f)+'er'](ttt)[_0x5f09b6(0x8c5,0x9d8,0x6f2,0x488)](_0x2f1612=>{const _0x3239bc={'UeWPw':_0x56a994(0xacf,0x708,0x54a,0xa8f),'deGrX':_0x5210cc(-0x1d,0x7b6,0xbc,0x3b1),'LrHws':function(_0x6097fc,_0x5431ae,_0x5a33ab,_0x900afd,_0x436f03,_0x3616f1,_0x4bfbee){return _0x6097fc(_0x5431ae,_0x5a33ab,_0x900afd,_0x436f03,_0x3616f1,_0x4bfbee);}};function _0x56a994(_0x16fcdf,_0x2bc7fb,_0x13f80f,_0xf7a0db){return _0x5a3069(_0x16fcdf-0x1b9,_0x2bc7fb-0xb2,_0x13f80f- -0x370,_0xf7a0db);}const {wm:_0x4ce6e2,nowm:_0x572c32,audio:_0x2bc3e3}=_0x2f1612;function _0x5210cc(_0x391200,_0x1001d9,_0x54dda0,_0x32e8b9){return _0x5a3069(_0x391200-0x2e,_0x1001d9-0xc0,_0x32e8b9- -0x3ae,_0x391200);}axios[_0x5210cc(0x93b,0xc54,0x10ed,0xc73)](_0x5210cc(-0x2f,0x458,0x30b,0x15a)+'nyurl.com/'+_0x5210cc(0x798,0x4af,0x5,0x363)+_0x5210cc(0x61a,0x35a,0x508,0x2bb)+_0x4ce6e2)['then'](async _0x1a54d1=>{let _0x26dc7c=await getBuffer(_0x4ce6e2);const _0x8994fb={};function _0x1de07b(_0x4da582,_0x2b0c96,_0xf88b3f,_0x58084a){return _0x56a994(_0x4da582-0xe,_0x2b0c96-0x79,_0x2b0c96- -0x91,_0x4da582);}_0x8994fb[_0x4daf8d(0xd83,0x521,0x826,0x3c5)+'t']=_0x3239bc[_0x4daf8d(0x16f,0xa24,0x6e9,0xbe3)];const _0x40aec1={};_0x40aec1[_0x1de07b(0x37b,0x2b0,0x1f1,0x7a7)]=_0x1de07b(0x70c,0x54f,0xa1d,0x182)+'\x20'+q,_0x40aec1[_0x4daf8d(0xfdc,0xff3,0xa57,0x828)]=_0x8994fb,_0x40aec1[_0x1de07b(0x60f,0x92b,0xe9b,0x744)]=_0x3239bc[_0x4daf8d(0xc02,0x11b0,0xd8f,0xe97)];const _0x257fc6={};_0x257fc6['displayTex'+'t']=_0x1de07b(0x8bb,0x950,0xd6a,0xed0);const _0x4a3cd8={};_0x4a3cd8[_0x1de07b(0x3c,0x2b0,0x4e,0x3c3)]=_0x1de07b(0xa23,0x566,0x45b,0xac0)+'o\x20'+q,_0x4a3cd8['buttonText']=_0x257fc6,_0x4a3cd8['type']=_0x3239bc['deGrX'];let _0x5f4004=[_0x40aec1,_0x4a3cd8];function _0x4daf8d(_0x576224,_0x27caff,_0x90f8b,_0x3e64d4){return _0x56a994(_0x576224-0x185,_0x27caff-0x10b,_0x90f8b-0x259,_0x576224);}_0x3239bc[_0x4daf8d(0xe5e,0xc71,0xbff,0xcb2)](sendButVideo,from,_0x1de07b(0x37b,0x18a,-0x1cd,0x233)+sender[_0x4daf8d(0xf9d,0xda3,0xd28,0x9d9)]('@')[-0x29*0x1+0xc32+-0xc09]+(_0x4daf8d(0x28c,0x72d,0x468,0x337)+'nya\x20klo\x20ma'+'u\x20ubah\x20jad'+_0x4daf8d(0x9fe,0x684,0xa29,0x9d8)+'au\x20tiktok\x20'+_0x4daf8d(0x1146,0xf3a,0xbba,0x1161)+_0x1de07b(0x79c,0x571,0x3d6,0x5c6)+_0x1de07b(0x3bc,0x7bd,0x42f,0xa3d)+'h'),_0x4daf8d(0xcba,0x11c8,0xe2a,0xd0c)+enter+('Jika\x20whats'+_0x4daf8d(0x11c9,0x119a,0xcf5,0xcf3)+'mu\x20belum\x20s'+_0x1de07b(-0x2e6,0x272,-0x125,0x466)+_0x4daf8d(0xbeb,0xca7,0x9b8,0x8d2)+_0x1de07b(-0x53,0x145,0x5cc,0x622)+_0x1de07b(-0x44,0x4af,0x8bc,0x828)+'https://yo'+'utu.be/ERG'+'ID4Fmo9w')+enter+enter+'©\x20'+ownername,_0x26dc7c,_0x5f4004,{'contextInfo':{'mentionedJid':[sender]}});});})[_0x5a3069(0xc0e,0x95a,0xbb2,0x61c)](_0x3e3191=>reply(_0x5a3069(0x8f4,0x99b,0xe76,0x134d)+_0x5f09b6(0x48e,0x4b5,0x96f,0x3ba)+'oba\x20bebera'+'pa\x20saat\x20la'+'gi')),await limitAdd(sender,limit);break;case'alquran_au'+_0x5f09b6(-0x2d,0x17a,-0x4a5,-0x127):{try{pp_userb=await alpha[_0x5f09b6(0x798,0x619,0x10b,0x288)+_0x5a3069(0xa3c,0x668,0x53a,0xab)](sender);}catch{pp_userb='https://i.'+_0x5f09b6(-0x4a,0xcf,-0x19b,-0x1d)+_0x5a3069(0xa34,0x497,0x88e,0xa8d)+'bb87660.pn'+'g';}let pp_userz=await getBuffer(pp_userb);if(args['length']<0x4b*0x73+-0x2392+0x2*0xf1)return reply(_0x5f09b6(0x4bf,-0x12a,0x198,0x30b)+(prefix+command)+(_0x5a3069(0x558,0x85a,0x8e1,0xe5b)+_0x5a3069(0xe22,0x9c8,0x878,0x6f0)+_0x5a3069(0x1321,0xf26,0xe3c,0xf00))+enter+_0x5a3069(0x1062,0x870,0xdae,0xcae)+(prefix+command)+_0x5a3069(0x7aa,0x55f,0x4fd,0x933));var F=q,F1=F[_0x5a3069(0xb11,0xbd2,0xe3f,0xa56)]('|')[-0x1c7b+0x2f6*0xb+0x417*-0x1],F2=F[_0x5f09b6(0x647,0x3ca,0x705,0x776)]('|')[-0x12a8+0x2094+-0xdeb];let pijaqu=await fetchJson(_0x5f09b6(0x2cb,0x38e,-0x334,-0x1ff)+_0x5a3069(0x12e6,0xb9b,0xe12,0xbcc)+_0x5f09b6(0x244,0x662,0x39,0x377)+'alquran-ap'+'i-zeeoneof'+_0x5a3069(0x1224,0xe8f,0xcf2,0xdc4)+'pp/surah/'+F1+'/'+F2),japkk=await getBuffer(pijaqu['data']['audio'][_0x5a3069(0xdcb,0xe96,0xd33,0xe03)])['catch'](_0xf4263=>{function _0xde5685(_0x54d145,_0x22e4a7,_0x3f69e4,_0x46ba90){return _0x5a3069(_0x54d145-0x1e,_0x22e4a7-0x2d,_0x22e4a7- -0x34d,_0x54d145);}const _0x137ee6={};_0x137ee6['LvARE']=_0xde5685(0x514,0x960,0xbb7,0xbb0);const _0x2f0d3b=_0x137ee6;reply(_0x2f0d3b['LvARE']);});const _0x1481a0={};_0x1481a0[_0x5f09b6(0xaf3,0xab8,0x719,0x91d)]=_0x5f09b6(-0x18f,0x2d3,0x70,0x9e)+'utu.be/1r_'+_0x5f09b6(0x1ea,0x286,0x370,0x5cd),_0x1481a0[_0x5a3069(0xec9,0x99f,0xcce,0x993)]=0x2,_0x1481a0[_0x5f09b6(0x585,0x950,0xc87,0x77d)]=_0x5a3069(0x9ab,0x11cd,0xdef,0xecb)+_0x5a3069(0x9d4,0xb48,0x5a2,0x59d),_0x1481a0[_0x5f09b6(0x759,0x1ff,0x411,0x266)]='',_0x1481a0[_0x5f09b6(0xb98,0xbd1,0x4bb,0x826)+'rl']='',_0x1481a0[_0x5a3069(0x105d,0xeaa,0xeca,0x122a)]=pp_userz;const _0x53e00f={};_0x53e00f[_0x5a3069(0xce0,0xf4a,0x9c7,0xe26)]=_0x5f09b6(0x799,0xb47,0x916,0x726)+'dio',_0x53e00f[_0x5a3069(0x9b5,0x42e,0x5c1,0x446)+_0x5a3069(0xcf4,0x93a,0x92a,0xaa5)]=0x3b9aca00,_0x53e00f['isForwarde'+'d']=!![],_0x53e00f[_0x5f09b6(-0x4b,-0x2ec,-0x176,-0x1ed)+_0x5f09b6(0x88d,0xa9a,0xab9,0x951)]=!![],_0x53e00f['externalAd'+_0x5a3069(0xa42,0x570,0x896,0x68a)]=_0x1481a0;const _0x30ac0d={};_0x30ac0d[_0x5a3069(0x647,0x53e,0x9bf,0x58f)+'o']=_0x53e00f,_0x30ac0d['mimetype']=_0x5a3069(0x141a,0xc73,0xecf,0x132b),_0x30ac0d[_0x5f09b6(0x341,0x4fa,0x8f4,0x366)]=_0x5f09b6(-0x29e,0x55b,0x112,0x1fe)+_0x5f09b6(-0x5c5,-0x23f,-0xa0,-0x1b3),_0x30ac0d[_0x5f09b6(0x3cf,0x11d,0x18c,-0x1bf)]=fgclink2,_0x30ac0d[_0x5f09b6(0xd20,0x778,0x816,0x801)]=pp_bot2,alpha[_0x5f09b6(0x53a,0x467,0x5f6,0x417)+'e'](from,japkk,MessageType[_0x5a3069(0xf53,0xd4c,0xa50,0x7eb)],_0x30ac0d),await limitAdd(sender,limit);}break;case _0x5f09b6(-0x5e,0xdf,0x671,0x486):case'fb':case _0x5f09b6(0x681,0x4c7,0x6ad,0x4ad):const _0x208ad0={};_0x208ad0[_0x5f09b6(0x3da,0x6b5,0x620,0x274)+'t']=_0x5f09b6(-0x10f,0x874,0x8ad,0x450)+'t';const _0x4849a2={};_0x4849a2['buttonId']=_0x5a3069(0xd62,0xc37,0xfe3,0xbff),_0x4849a2[_0x5a3069(0xf8c,0xfff,0xb6e,0xece)]=_0x208ad0,_0x4849a2[_0x5a3069(0x95b,0xb7b,0xd2c,0xde2)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x5f09b6(0xc0c,0x69a,0xbe8,0x91a)](prefix),'©\x20'+ownername,[_0x4849a2]);if(!q)return reply(_0x5a3069(0x39f,0x364,0x6c0,0x21b));if(!isUrl(args[0x3*0x2c2+0x250b+-0x2d51])&&!args[0x17b0+0x82*-0x27+-0x1f1*0x2][_0x5f09b6(0xb9f,0x3c6,0x5da,0x93e)]('facebook.c'+'om'))return reply(lang['erorLink']());reply(lang['wait']());var fbte=args[_0x5f09b6(0x3fd,0x306,0x4d1,0x49d)]('\x20');const API_GUEST=_0x5a3069(0xa08,0xa50,0x8ff,0xb40)+_0x5a3069(0x60c,0x79a,0x81e,0xcf9)+_0x5a3069(0xa8d,0xca1,0xbb8,0x1152)+_0x5a3069(0x335,0x26c,0x590,0x459)+_0x5a3069(0xc74,0xfab,0xcc1,0xb75),API_TIMELINE='https://ap'+_0x5f09b6(0x1ab,-0x18f,0x316,0x155)+_0x5f09b6(0x69f,0xe92,0x9e3,0x8fc)+'line/conve'+_0x5a3069(0xd0b,0xa9c,0x785,0xbb6)+_0x5f09b6(0xcd5,0x4c6,0xac8,0x74b)+_0x5f09b6(0x306,0x24f,0x4f3,0x22a)+'ended',AUTH='Bearer\x20AAA'+_0x5f09b6(0x63a,0x66,-0x242,0x2fd)+'AAAAAAAANR'+'ILgAAAAAAn'+'NwIzUejRCO'+'uH5E6I8xnZ'+_0x5f09b6(0x7b2,0x7e1,0x5d9,0x2be)+_0x5f09b6(0x344,0x1eb,0x883,0x393)+_0x5f09b6(0xb46,0xc3e,0x8b3,0x6c6)+_0x5f09b6(-0x2ad,0x24f,-0x144,0x103)+_0x5a3069(0x57b,0x1b4,0x568,0x9a0)+'A',UserAgent=()=>{const _0x6c07f8={};_0x6c07f8[_0x50c905(0xcba,0x87a,0xd1f,0x451)]=_0x50c905(0x95d,0x3f8,0x288,0x7a4)+_0x223f99(0xe4b,0x8bc,0x61b,0xa88)+_0x50c905(0x9e3,0x673,0x554,0x819)+_0x50c905(0x1b1,0x6cb,0x47b,0x3eb)+'0_10_5)\x20Ap'+_0x223f99(-0xfe,0x199,0x234,-0xd1)+_0x50c905(0x179,0x35b,0x7d,0x141)+'HTML,\x20like'+_0x223f99(0x26a,0x5cf,0x6b4,0x451)+_0x223f99(0x184,-0x166,-0x427,-0x320)+_0x50c905(0xd50,0xbaf,0x1013,0x1004)+_0x50c905(0x127,0x62d,0x5b3,0x693),_0x6c07f8['vuKTD']=_0x223f99(-0x164,-0x4d,-0x1cf,-0x11d)+'0\x20(Windows'+'\x20NT\x2010.0;\x20'+'Win64;\x20x64'+_0x223f99(-0x4e4,0x70,-0x2d0,-0x344)+_0x223f99(0x5b3,0x12a,0x232,0x5d6)+'\x20(KHTML,\x20l'+_0x50c905(0x21f,0x31f,0x81c,0x1df)+_0x223f99(0x4d5,0xc2,0x4ec,-0x124)+_0x50c905(0x40e,0x76f,0x2ce,0x27e)+'0\x20Safari/5'+'37.36',_0x6c07f8[_0x223f99(0x5c1,0x694,0xb3b,0x180)]=_0x50c905(0x419,0x3f8,-0x11e,0x3f1)+_0x50c905(0xc59,0xd01,0xaff,0xe80)+'sh;\x20Intel\x20'+_0x223f99(0x612,0x286,-0x161,0x833)+_0x223f99(0xb,-0x135,-0x2c9,0x466)+_0x223f99(0x70f,0x545,0x2b0,0x92e)+_0x223f99(0x790,0x670,0xa54,0x6a1)+_0x223f99(0x80,0x50e,0x4a7,0x4a2)+'.0',_0x6c07f8[_0x223f99(0xa00,0x5cd,0x741,0x473)]='Mozilla/5.'+_0x223f99(-0x3f6,0xf,0x58,0x17a)+'\x20NT\x2010.0;\x20'+'Win64;\x20x64'+_0x50c905(0x5db,0x4b5,0x74d,0x2b2)+'Kit/537.36'+_0x223f99(-0x309,0x1fb,0x767,-0x1a3)+_0x50c905(0x6e6,0x31f,0x8d5,0x6a2)+_0x50c905(0x604,0x675,0x5ff,0xb5c)+'.0.2743.11'+_0x50c905(0x9aa,0x658,0x90d,0x1e4)+_0x50c905(0x26c,0x309,0x758,0x244)+'/15.15063',_0x6c07f8[_0x50c905(0x114,0x34d,0x7ee,0x8ae)]=_0x223f99(0x3b3,-0x4d,-0x29f,0x281)+'0\x20(X11;\x20Li'+_0x223f99(0x5da,0x36d,0x834,0x10f)+_0x50c905(0x9b1,0x8ad,0xa36,0x532)+_0x223f99(0x337,0x2a0,-0xde,0x18e)+_0x50c905(0x582,0xb1a,0x9b1,0xac3)+_0x50c905(0xa40,0x707,0x73e,0x30e);function _0x223f99(_0x51976f,_0x3d9875,_0x2415bf,_0x1ac928){return _0x5a3069(_0x51976f-0xb,_0x3d9875-0x140,_0x3d9875- -0x73a,_0x2415bf);}_0x6c07f8[_0x223f99(0x95f,0x5c1,0x999,0xb23)]=_0x50c905(0x64e,0x3f8,0x4f5,0x95f)+_0x223f99(0x130,0x143,0x276,0x2c3)+_0x223f99(-0xea,0x36d,0x163,-0x1ce)+')\x20AppleWeb'+'Kit/537.36'+_0x50c905(0x507,0x640,0x336,0xb2a)+'ike\x20Gecko)'+_0x223f99(-0x196,-0xa3,0x3b5,-0x220)+'.0.3865.12'+_0x223f99(0x4ca,0x84e,0x8df,0x8b8)+_0x223f99(0x420,0x49e,0x179,0x3e1),_0x6c07f8[_0x50c905(0x57c,0x450,0x1be,0x4b5)]=_0x50c905(-0x59,0x3f8,0x60d,0x2a3)+_0x223f99(-0x3db,0xf,0x3d1,-0x390)+_0x223f99(0xa3e,0x8c3,0x522,0x367)+'Win64;\x20x64'+_0x223f99(0x521,0x70,-0x51c,-0x1ba)+_0x50c905(0x43b,0x56f,0x279,0x3dd)+_0x50c905(0xa73,0x640,0x3eb,0x3cc)+_0x223f99(-0x351,-0x126,-0x4ac,0x11d)+'\x20Chrome/85'+'.0.4183.12'+_0x50c905(0x661,0x5b7,0x773,0x9db)+'37.36',_0x6c07f8[_0x50c905(0x5de,0x21b,0x252,0x701)]='Mozilla/5.'+_0x223f99(-0x20e,0xd1,-0x3b3,-0x3d4)+_0x223f99(0x364,0x101,-0x3d8,-0x2d5)+'x\x20x86_64;\x20'+'rv:57.0)\x20G'+'ecko/20100'+'101\x20Firefo'+_0x223f99(0xa77,0x8a4,0xad6,0x9d0),_0x6c07f8['vDXPR']=_0x50c905(-0xa3,0x3f8,0x948,0x971)+_0x50c905(0xb9b,0xd01,0xf51,0xb03)+_0x50c905(0x986,0x673,0x98c,0x69a)+_0x223f99(0x2d3,0x286,-0x283,0x2f2)+_0x223f99(0x28a,0x40a,0x490,-0x12e)+_0x223f99(0x622,0x5d2,0x703,0x1b8)+_0x223f99(0x441,0x814,0x4de,0x9c8)+_0x223f99(0xcf,0x561,0x9d8,0x3ab)+'ecko)\x20Chro'+_0x223f99(0x92b,0x4db,0x144,0x7bd)+'96.87\x20Safa'+_0x223f99(0x433,0x5e3,0x35,0x68),_0x6c07f8['bnafl']=_0x223f99(-0x2bf,-0x4d,0xb,-0x424)+_0x50c905(0xa93,0xd01,0xebb,0x944)+_0x50c905(0x389,0x673,0x2d1,0x227)+_0x50c905(0xa29,0x6cb,0x191,0x894)+_0x50c905(0x588,0x3b5,0x17b,0x7b4)+'pleWebKit/'+_0x223f99(-0x2b4,-0x9d,-0x40b,0x1ba)+_0x223f99(0xc1f,0x7b9,0x857,0x746)+_0x50c905(0x47e,0xa14,0x7b9,0xa39)+_0x223f99(0x5e9,0x326,0x5d6,0x828)+'1\x20Safari/6'+_0x50c905(0x4eb,0x6a7,0xb5e,0x972);function _0x50c905(_0x471024,_0x48b7f7,_0x4baeec,_0x153db2){return _0x5a3069(_0x471024-0x1d,_0x48b7f7-0x18f,_0x48b7f7- -0x2f5,_0x153db2);}_0x6c07f8[_0x50c905(0x51e,0x8b0,0xbf0,0xae8)]=_0x223f99(0x36d,-0x4d,0x488,0x1b2)+'0\x20(X11;\x20Li'+_0x223f99(0x7b0,0x36d,0x90b,0x913)+')\x20AppleWeb'+_0x223f99(0x522,0x12a,-0x2,-0x456)+_0x50c905(0x4e0,0x640,0xbf,0x985)+_0x50c905(0x49,0x31f,0x46d,0x6a2)+_0x50c905(0x108,0x507,0x7ec,0x555)+_0x223f99(0x35f,-0xd4,0x4aa,0x479)+_0x223f99(0x593,0x7f5,0x924,0x499)+_0x223f99(-0x3e8,0x22,0x292,0x4b0),_0x6c07f8['vwYol']=_0x50c905(0x78a,0x3f8,0x65e,0x1d9)+'0\x20(Windows'+_0x223f99(0x7ef,0x8c3,0xb4b,0x8be)+_0x223f99(0x39d,0x1b6,0x543,0x6d6)+_0x223f99(-0x2b2,0x70,-0x1d2,0x12)+_0x223f99(0x30c,0x12a,0x3e0,0x1b5)+_0x223f99(0x373,0x1fb,-0x2a3,-0xdd)+_0x223f99(0x2e4,-0x126,-0x441,-0x59e)+_0x50c905(0xd7a,0xd1a,0x125f,0xb11)+'.0.4515.10'+_0x50c905(0x3ab,0x63f,0x420,0x836)+_0x50c905(0x6c3,0x8e3,0x612,0x339),_0x6c07f8['jAvtW']=_0x50c905(-0x1e,0x3f8,-0xce,0x8f2)+'0\x20(X11;\x20Ub'+'untu;\x20Linu'+_0x50c905(0xd08,0x880,0x9c3,0x30c)+'rv:88.0)\x20G'+_0x223f99(-0x48a,-0xb6,-0x5c8,-0x261)+'101\x20Firefo'+'x/88.0',_0x6c07f8[_0x223f99(0x7e0,0x88d,0x4a2,0x9b5)]=_0x50c905(0x42d,0x3f8,0x6ad,0x331)+'0\x20(X11;\x20Li'+_0x223f99(0x13f,0x36d,-0x159,0x5ee)+_0x50c905(0x8fd,0x8ec,0x9ba,0x907)+_0x223f99(-0x2d5,0x2a0,0x4d8,0x533)+_0x223f99(0x5e4,0x6d5,0x224,0xbee)+_0x223f99(-0x5c9,-0xa7,-0x1b9,-0x3b9),_0x6c07f8[_0x50c905(0x67c,0x2b5,-0x143,-0x2cb)]=_0x50c905(0x303,0x3f8,0x4ac,0x9c)+_0x223f99(0x961,0x8bc,0xc5c,0x78a)+_0x223f99(0x1a0,0x22e,0x6ce,0x6a9)+_0x50c905(0xa62,0x6cb,0x50a,0x70c)+'0_9_5)\x20App'+_0x50c905(0xba2,0xa17,0xf47,0xccd)+_0x50c905(0x8be,0xc59,0x1129,0xe1f)+_0x50c905(0xcd2,0x9a6,0xe79,0xa15)+_0x223f99(-0x7e,-0x4c,-0x235,-0x7a)+_0x50c905(0x9cd,0x4e1,0x92,0x4dc)+'25.181\x20Saf'+_0x50c905(0x4,0x460,0x3e5,0x27d),_0x6c07f8[_0x50c905(0x12d1,0xd1f,0x10a4,0xd06)]=_0x223f99(0x3f4,-0x4d,-0x5a4,0x230)+'0\x20(Macinto'+_0x223f99(-0xd,0x22e,0x789,0x759)+'Mac\x20OS\x20X\x201'+'0.11;\x20rv:4'+_0x223f99(-0x784,-0x1f8,0x188,-0x42)+_0x50c905(0xe13,0xab5,0xbbc,0x67f)+'Firefox/47'+'.0',_0x6c07f8[_0x50c905(0xd9f,0xa59,0xfaf,0xb4a)]=_0x223f99(-0x1d,-0x4d,-0x49a,-0x183)+_0x223f99(0x4d4,0x8bc,0xaf0,0xbef)+_0x50c905(0x290,0x673,0x7db,0x79f)+_0x223f99(0x52,0x286,0x113,0x3cf)+'0_11_6)\x20Ap'+_0x50c905(0xb6,0x5de,0x7e5,0xaa6)+_0x223f99(0x5b1,0x565,0x1b7,0x13c)+_0x50c905(0x1db,0x77a,0x224,0xd14)+'e\x20Gecko)\x20V'+_0x223f99(0x5a0,0x700,0x809,0x18b)+_0x50c905(0x8fd,0xace,0xab5,0xa5d)+'/605.1.15',_0x6c07f8[_0x50c905(0x359,0x4c2,0xa1d,0x834)]=_0x50c905(0x31,0x3f8,0x1b5,0x4a)+_0x50c905(0xdf3,0xd01,0xe0c,0x114b)+_0x50c905(0x3aa,0x673,0x4ff,0x431)+'Mac\x20OS\x20X\x201'+_0x50c905(0x92f,0x777,0x953,0x5f2)+_0x50c905(0xabc,0xa17,0x8fc,0xf0c)+_0x223f99(0x5ef,0x814,0xca7,0xc77)+'ML,\x20like\x20G'+'ecko)\x20Chro'+'me/36.0.19'+_0x223f99(0x915,0x3aa,-0x11a,0x124)+'ari/537.36',_0x6c07f8[_0x50c905(0x959,0x4cd,0x459,0x9ba)]=function(_0x4b03bb,_0x1aa364){return _0x4b03bb*_0x1aa364;};const _0x7ff4d6=_0x6c07f8,_0x4eeaac=[_0x50c905(0x22f,0x3f8,0x6a9,0x329)+_0x223f99(0x598,0x8bc,0xdfc,0x6c4)+_0x50c905(0xe2,0x673,0x359,0xaa5)+_0x223f99(0x480,0x286,0x14a,0x826)+'0_11_6)\x20Ap'+_0x223f99(0x235,0x199,0x69a,0x5df)+_0x223f99(0x9d0,0x565,0xa77,0xa68)+_0x50c905(0xc8f,0x77a,0xc9f,0x8c9)+_0x50c905(0x8cc,0x99f,0x948,0x947)+_0x50c905(0x729,0xb45,0x69d,0xba7)+_0x50c905(0x626,0xace,0x54e,0xb6d)+_0x223f99(0x462,0x461,0x36a,-0x150),_0x7ff4d6['RfKBv'],_0x7ff4d6[_0x50c905(0x728,0x28b,0x268,-0x75)],_0x50c905(0xe6,0x3f8,-0xda,0x3f3)+'0\x20(X11;\x20Da'+_0x50c905(0x2f2,0x80a,0x6c4,0x58a)+_0x223f99(0x8b0,0x36d,0x3e0,-0x192)+')\x20AppleWeb'+'Kit/537.36'+_0x223f99(-0x397,0x1fb,-0xbc,0x329)+_0x223f99(0x34b,-0x126,0x46f,0x360)+_0x223f99(-0x39d,0x58,0x5bb,-0x2b3)+_0x50c905(0xd63,0x890,0xd48,0x3d0)+_0x223f99(0x2d,0x172,0x9e,-0x3ed)+'37.36',_0x223f99(-0x1b8,-0x4d,-0x110,0x4f7)+'0\x20(Windows'+_0x223f99(0xa60,0x8c3,0xd5c,0xd19)+_0x50c905(0xb9d,0x5fb,0xbac,0xaf6)+')\x20AppleWeb'+_0x50c905(0x298,0x56f,0x660,0x1b3)+'\x20(KHTML,\x20l'+_0x50c905(0x723,0x31f,0x31c,0x5e4)+_0x50c905(0xce1,0xc7e,0x9cf,0xfd3)+'.0.3945.88'+_0x50c905(0xb55,0xc3a,0x920,0xdf4)+_0x223f99(-0x3a5,0x22,0x80,0x254),_0x223f99(0x4b4,-0x4d,0xe7,-0x271)+_0x223f99(0x75e,0x8bc,0xa17,0xb92)+'sh;\x20Intel\x20'+'Mac\x20OS\x20X\x201'+_0x50c905(0x103d,0xd09,0xd1b,0x10ce)+_0x50c905(0xd2e,0xa17,0xaf2,0x559)+_0x223f99(0x670,0x6c8,0x867,0x4ad)+_0x223f99(-0x3c,0x335,0x8e8,0x95)+'e\x20Gecko)\x20V'+_0x223f99(0x809,0x4e2,0x2c0,0x4f0)+_0x50c905(0xc12,0xa97,0x73a,0xb38)+_0x50c905(0x679,0x48f,0x87f,-0xa0),_0x7ff4d6[_0x50c905(0x8c1,0xad9,0x5ab,0xc82)],_0x50c905(0x573,0x3f8,0x140,0x384)+'0\x20(Windows'+_0x223f99(0x8cd,0x8c3,0x65f,0x68b)+'Win64;\x20x64'+_0x223f99(-0xcb,0x70,0x2d1,0x29f)+_0x50c905(0x47e,0x56f,0x992,0x5f8)+_0x50c905(0x354,0x640,0x2eb,0x54b)+'ike\x20Gecko)'+_0x50c905(0x3e9,0x5da,0x780,0x30c)+_0x223f99(-0x4c1,-0x217,-0x85,-0x35b)+'\x20Safari/53'+'7.36',_0x7ff4d6[_0x50c905(0x7bd,0xa12,0xa54,0x73f)],_0x7ff4d6[_0x50c905(0x598,0x34d,0x8be,-0xa8)],'Mozilla/5.'+_0x223f99(-0x4a8,0xd1,0x2c5,0x94)+_0x50c905(0x5c5,0x546,0x46f,0xfe)+_0x223f99(0x2b5,0x43b,0x2bb,0x4c0)+'rv:47.0)\x20G'+'ecko/20100'+'101\x20Firefo'+_0x223f99(0x52e,0x109,0x256,-0x1ea),_0x7ff4d6[_0x223f99(0x574,0x5c1,0x45d,0x92e)],_0x7ff4d6[_0x50c905(0x151,0x450,0x5bd,0x249)],_0x7ff4d6[_0x50c905(0x4e0,0x21b,0x51a,-0x37a)],_0x7ff4d6[_0x50c905(-0x12a,0x33d,-0x8b,0x29f)],_0x7ff4d6[_0x50c905(0x52e,0x58f,0xa43,0x10b)],_0x7ff4d6[_0x223f99(-0x126,0x46b,0x2e0,0x76d)],_0x50c905(0x1f8,0x3f8,0xad,-0xa4)+_0x50c905(0x1ca,0x454,0x396,0x1e9)+'\x20NT\x2010.0;\x20'+_0x223f99(0x3d7,0x1b6,-0x2da,0x5dc)+_0x50c905(0x7bc,0x4b5,0xa4e,0x257)+_0x223f99(0x4e4,0x12a,0x107,0x589)+_0x50c905(0xaef,0x640,0xac8,0x2d8)+_0x223f99(0x2b0,-0x126,-0x99,-0x1f3)+_0x223f99(-0xe4,-0x180,-0x71f,-0x446)+'.0.4324.10'+'4\x20Safari/5'+_0x50c905(0x7e1,0x8e3,0xc9d,0x7f0),_0x7ff4d6[_0x50c905(0x6be,0x8f7,0x6ee,0xad1)],_0x7ff4d6[_0x50c905(0x5d,0x4c3,0xab,0x468)],_0x7ff4d6[_0x223f99(0x590,0x88d,0x39e,0x92f)],_0x7ff4d6[_0x223f99(0x152,-0x190,-0x3b3,-0x4fd)],_0x7ff4d6['gfcIe'],_0x7ff4d6[_0x223f99(0x169,0x614,0x6ce,0x241)],_0x223f99(0x55,-0x4d,-0x343,0x48b)+'0\x20(Macinto'+_0x223f99(0x777,0x22e,0xbb,-0x1f2)+'Mac\x20OS\x20X\x201'+_0x50c905(0xe4,0x3b5,-0x1c4,-0x4f)+_0x223f99(-0x2d6,0x199,-0x171,0x407)+_0x50c905(-0x124,0x35b,0x7b2,0xf6)+_0x50c905(0x64b,0xbfe,0x9f7,0x656)+_0x223f99(0x698,0x5cf,0x45e,0x47a)+'rsion/10.1'+_0x50c905(0x93e,0xbaf,0x7f2,0x7fa)+_0x50c905(0x9b2,0x62d,0x3e3,0x2d1),'Mozilla/5.'+_0x50c905(0x1151,0xd01,0xf13,0x7df)+_0x50c905(0xa75,0x673,0x7b7,0xaae)+_0x50c905(0x20c,0x6cb,0x1be,0x166)+_0x223f99(-0xd7,-0x191,-0x5f6,-0x491)+_0x50c905(0xa41,0x5de,0x5a3,0x777)+_0x223f99(0x6f5,0x6d4,0x1fe,0xb6d)+_0x50c905(0xd80,0xbfe,0x1186,0x89b)+_0x223f99(0x4df,0x5cf,0x6ff,0x5df)+_0x50c905(0x8ae,0x762,0x9c9,0x6de)+'2\x20Safari/6'+_0x50c905(0x7a,0x329,0x3ef,0x30f),_0x7ff4d6[_0x223f99(0x4bf,0x7d,-0x364,0x389)]],_0x3b7d79=_0x4eeaac[~~_0x7ff4d6[_0x223f99(-0x4a7,0x88,0x221,-0x279)](Math[_0x50c905(0x7a9,0x557,0x7a2,0x29f)](),_0x4eeaac[_0x223f99(0x416,-0x5c,0x275,0xae)])];return _0x3b7d79;},getID=_0x326be7=>{let _0x2df54d=/twitter\.com\/[^/]+\/status\/(\d+)/;function _0x5e1394(_0xd04fe3,_0x3836da,_0x31cc90,_0x596510){return _0x5a3069(_0xd04fe3-0xde,_0x3836da-0x1d8,_0x596510- -0x433,_0x31cc90);}let _0x389d99=_0x2df54d[_0x5e1394(0x3ae,0xbcd,0x7b7,0x700)](_0x326be7);return _0x389d99&&_0x389d99[0x96a+0xd27+-0x1690];},getInfo=async function(_0x2bc98e){const _0x3059ae={'xllRI':function(_0x241cf1,_0x266ee0,_0x1d8de4,_0x586a8f,_0x2e169d){return _0x241cf1(_0x266ee0,_0x1d8de4,_0x586a8f,_0x2e169d);},'GHaMt':function(_0x46e7bd,_0x2ec2d3,_0x57c406){return _0x46e7bd(_0x2ec2d3,_0x57c406);},'RGVPn':_0x42f78f(-0x1f8,0x162,-0x376,-0x52)+_0x127700(0xd25,0x1260,0xcf5,0xcae),'gPXoN':_0x127700(0x10ec,0xf55,0x922,0xd90),'hUepE':_0x127700(0xa9f,0x576,0x491,0x996),'jyhRx':_0x42f78f(0xcbe,0x7ee,0x4b6,0x77b),'vmKOM':_0x127700(0x672,0xc0d,0x183,0x707),'oxWDa':'XMLHttpReq'+'uest','UWZWs':_0x127700(0x390,0x2f5,0x79b,0x63f)+_0x42f78f(0xb1,0x601,0x2cb,0x58)+_0x42f78f(-0x69,0x3c,-0x31,-0xda),'AAlZS':_0x127700(0xc19,0x880,0xe00,0x8f0),'jBmcu':_0x42f78f(-0xf2,0x9,-0x4b0,-0x579),'YZMDx':function(_0x234a76,_0xefdcd7){return _0x234a76(_0xefdcd7);},'mfVHF':function(_0x36f6e0,_0x37715d){return _0x36f6e0!==_0x37715d;},'AXRWc':'HgwXJ','mtHki':_0x42f78f(0x2d7,0x6d8,0x22f,0xc81),'yzHZg':function(_0x209426){return _0x209426();},'RZfhN':_0x127700(0x9b9,0x6a3,0x1ac,0x620),'iyaSl':'globalObje'+_0x127700(0x77f,0x9ec,0x7d2,0x867),'EwyDT':'extended_e'+_0x127700(0x1287,0x129c,0xf7c,0xed5),'JJoDA':'No\x20media','WqHTP':'media','UCdUf':_0x127700(0x1157,0xa3c,0x10db,0xe9e),'yGdaL':_0x42f78f(0x3a0,0x4fb,0x3d1,0x58),'STSFZ':_0x42f78f(0x4a9,0x444,0x5c7,0x721),'aRJDQ':_0x42f78f(-0xb7,0x27b,0x69d,0x125),'LbNMc':'tweets','kRtqc':function(_0x38ca6c,_0x24c46b){return _0x38ca6c===_0x24c46b;},'ablcF':_0x42f78f(0x1dd,0x32,0x2c3,0x7b)+'if','izYJf':_0x42f78f(0x2fb,-0x47,0x35,-0x5d2),'iOOhS':_0x42f78f(0x39a,-0xc6,-0x2fe,-0x1e4),'nweNs':_0x127700(0x9b0,0xbae,0xc36,0xe09)+_0x42f78f(0xc3b,0x6f3,0xbde,0x5a9)},_0xbbe74b=_0x3059ae['YZMDx'](getID,_0x2bc98e);function _0x127700(_0x490d2d,_0x26a456,_0x2007f2,_0x558301){return _0x5a3069(_0x490d2d-0xe1,_0x26a456-0x58,_0x558301- -0x149,_0x26a456);}function _0x42f78f(_0x9fda3a,_0x54f9b3,_0x59f438,_0x37cca9){return _0x5a3069(_0x9fda3a-0xcd,_0x54f9b3-0x10c,_0x54f9b3- -0x650,_0x59f438);}if(_0xbbe74b){if(_0x3059ae['mfVHF'](_0x3059ae[_0x127700(0x1189,0x1172,0xb0c,0xe43)],_0x3059ae[_0x42f78f(0x662,0x250,0x39b,0x399)])){let _0x390a6c;try{const _0x2f1793=await _0x3059ae[_0x42f78f(0x245,0x32e,-0xb2,0x6b6)](getToken);_0x390a6c=_0x2f1793['guest_toke'+'n'];}catch(_0x1dab8c){if(_0x3059ae['mfVHF'](_0x3059ae[_0x127700(0xa63,0xf96,0x9e2,0xc58)],_0x3059ae[_0x127700(0x83d,0xe22,0x99a,0xc58)]))_0x3059ae[_0x42f78f(0x197,0x248,0x2e9,0x674)](_0x2c9638,_0x12308e,_0x33b5e0[_0x42f78f(0x19a,0x750,0x6a5,0x40e)][0x7*0x4+-0x3e+0x23][_0x42f78f(-0x5a,0x476,0x38b,0x32b)],_0xcb08f1[_0x42f78f(0x79e,0x76f,0x65e,0x37a)](),_0x4d14a0);else throw new Error(_0x1dab8c);}const _0x131c06={};_0x131c06[_0x42f78f(0x233,0x746,0xc40,0x7e1)+_0x42f78f(0x65a,0x87c,0xb80,0xb55)]=_0x390a6c,_0x131c06[_0x42f78f(0xb2a,0x721,0x91e,0xa77)+_0x42f78f(0xa1a,0x92d,0xc98,0x4d9)]=AUTH;const _0x39f9b1={};_0x39f9b1[_0x42f78f(0x363,0x44c,-0x91,-0xa0)]=_0x131c06;const _0x89d9bc=await axios[_0x127700(0x1100,0xf4c,0x11a9,0xed8)](Util[_0x42f78f(0x7c6,0x70d,0x9a1,0x7fa)](API_TIMELINE,_0xbbe74b),_0x39f9b1);if(!_0x89d9bc[_0x42f78f(-0x11e,0x3f1,0x247,-0x123)][_0x3059ae[_0x127700(0x843,0x514,0x50a,0x744)]]['tweets'][_0xbbe74b][_0x3059ae[_0x127700(0x871,0xa0c,0x9dd,0xaa1)]])throw new Error(_0x3059ae[_0x42f78f(0x49c,0xe,-0x480,-0x3ac)]);const _0x2494df=_0x89d9bc[_0x42f78f(0x88f,0x3f1,0x11b,0x2eb)]['globalObje'+_0x127700(0x483,0xa56,0x559,0x867)]['tweets'][_0xbbe74b]['extended_e'+_0x127700(0x12a5,0xa47,0xb63,0xed5)][_0x3059ae[_0x42f78f(0x156,0x25,0x32f,0x535)]];if(_0x2494df[0x239c+-0x1b1e+-0x87e*0x1][_0x127700(0xe40,0xd5d,0xbc2,0xbe3)]===_0x3059ae[_0x127700(0xb52,0x13d9,0xa25,0xec7)])return{'type':_0x2494df[-0xae4+-0xb74+0x1658][_0x127700(0x8ae,0xd95,0xc1a,0xbe3)],'full_text':_0x89d9bc[_0x42f78f(-0x92,0x3f1,0xb9,0x382)][_0x3059ae['iyaSl']][_0x42f78f(0x9b2,0x7da,0xcc3,0x866)][_0xbbe74b][_0x3059ae[_0x42f78f(0x6a9,0x745,0x815,0x675)]],'variants':_0x2494df[0x1*-0x796+0x224b*-0x1+-0x29e1*-0x1][_0x3059ae[_0x42f78f(0x8f8,0x822,0xd70,0xbe3)]][_0x42f78f(0x2af,-0x47,0x563,0x1ee)]};if(_0x2494df[-0x1e39+0x4*0x904+-0x41*0x17][_0x42f78f(0x1a7,0x6dc,0x9f7,0x8f9)]===_0x3059ae[_0x127700(0x86e,0x28a,0x96,0x467)])return{'type':_0x2494df[-0x257f*-0x1+-0x165a+-0x1*0xf25]['type'],'full_text':_0x89d9bc[_0x42f78f(0x96,0x3f1,-0x10f,-0x36)][_0x127700(0x13a9,0xb3f,0x117f,0xee0)+_0x42f78f(-0xd3,0x360,0x7e9,0x42)][_0x3059ae['LbNMc']][_0xbbe74b][_0x3059ae['yGdaL']],'variants':_0x2494df[_0x42f78f(-0x51f,-0x55,0x32f,-0x408)](_0x5b75b5=>_0x5b75b5[_0x42f78f(0x374,0x60e,0x695,0x6fd)+_0x127700(0xfed,0xe0a,0xb69,0xde1)])};if(_0x3059ae['kRtqc'](_0x2494df[0xd63+0x1d*-0x103+0xff4][_0x42f78f(0x7ee,0x6dc,0xb7d,0x29f)],_0x3059ae[_0x42f78f(0x3b0,0x8e3,0xaa1,0x74b)]))return{'type':_0x2494df[0x1021*0x2+-0x189f+0x1*-0x7a3][_0x127700(0xce6,0xde3,0x7f6,0xbe3)],'full_text':_0x89d9bc[_0x127700(0x935,0x97b,0x957,0x8f8)][_0x3059ae[_0x42f78f(-0xd5,0x23d,0x641,0x4ad)]][_0x3059ae[_0x42f78f(0x61a,0x846,0xb4f,0x621)]][_0xbbe74b][_0x3059ae['yGdaL']],'variants':_0x2494df[-0x1b7*0xd+0x1b*0x23+-0x1*-0x129a][_0x3059ae['STSFZ']][_0x3059ae[_0x127700(0x9ac,0x847,0x406,0x6dd)]]};}else{const _0x3f563b={'tMlit':function(_0x14b085,_0x3971eb){return _0x3059ae['YZMDx'](_0x14b085,_0x3971eb);}};return new _0xfc3a53((_0x5bccb6,_0xbdb2cc)=>{function _0xf73644(_0x251385,_0x19c36a,_0x82824d,_0x3f276d){return _0x42f78f(_0x251385-0x78,_0x3f276d-0x37a,_0x251385,_0x3f276d-0xa9);}function _0x1d7452(_0x3e0ac1,_0x4aa35c,_0x565daa,_0x3ac2c5){return _0x42f78f(_0x3e0ac1-0x1dd,_0x3ac2c5-0x558,_0x565daa,_0x3ac2c5-0x66);}_0x3059ae[_0x1d7452(0xe25,0x934,0x828,0x9d9)](_0xde7223,_0xf73644(0xa61,0xf0,0x41,0x4b2)+_0x1d7452(0x6a4,0xba6,0xae7,0xb59)+'t.com/reso'+'urce/BaseS'+'earchResou'+'rce/get/?s'+_0x1d7452(0x5c1,0x943,0x936,0x9df)+_0x1d7452(0x3f6,0x254,-0x25,0x4d1)+_0xf73644(0x6e0,0x6f3,0xc93,0x70a)+_0xf73644(0xd3f,0x90f,0x603,0x7c1)+_0x403213+(_0x1d7452(0x7a6,0x7fb,0xcee,0x8d5)+'22options%'+'22%3A%7B%2'+_0xf73644(0xcf2,0x2cf,0x728,0x84e)+_0xf73644(0x55b,0x68d,0x9dd,0x537)+_0xf73644(0xbc8,0x594,0x7ee,0x7ff)+_0xf73644(0xfd8,0x8cd,0x9a9,0xbe5)+'22')+_0xf125e7+(_0x1d7452(0x9d2,0x667,0xde2,0xb0a)+_0x1d7452(0xa86,0x2b8,0x1eb,0x70a)+'%22pins%22'+_0xf73644(-0x176,0x37,0x40b,0x37e)+_0x1d7452(0x518,0xe08,0xb2d,0x934)+_0xf73644(0xca1,0x8c2,0xba8,0x712)+_0x1d7452(0xbd3,0x745,0xc27,0x911)+_0x1d7452(0x6e7,0x1b6,0xa64,0x54c)+_0xf73644(0xce6,0xb96,0xbe8,0xa73)+_0x1d7452(0x1092,0x625,0x63b,0xbd7)+_0x1d7452(0x3ba,0x165,0x7a8,0x643)+_0x1d7452(0xe46,0xfc8,0x966,0xb18)+'59'),{'headers':{'accept':_0x1d7452(0x119e,0xe51,0xc3a,0xc0e)+_0x1d7452(0x8a9,0xa29,0x90b,0x755)+_0x1d7452(0x4f6,0xb18,0x5d1,0x61e)+_0xf73644(-0x68,0x423,0x4b7,0x2c5)+_0xf73644(0xad1,0x427,0xbe1,0x649),'accept-language':_0x3059ae[_0x1d7452(0xadf,0x1023,0x7db,0xb1f)],'cache-control':_0x3059ae[_0xf73644(0xfd6,0x11c2,0x1036,0xced)],'pragma':_0x3059ae[_0xf73644(0xf05,0xdff,0xdb9,0xced)],'sec-fetch-dest':_0xf73644(0x540,0x597,0x422,0x7ea),'sec-fetch-mode':_0x3059ae[_0x1d7452(0xe4e,0xa7c,0xe4f,0xb75)],'sec-fetch-site':_0xf73644(0x7a1,0xec0,0xe03,0xa14)+'n','sec-gpc':'1','x-app-version':_0x3059ae[_0xf73644(0x8a3,0x1233,0xa84,0xc8e)],'x-pinterest-appstate':_0x3059ae['vmKOM'],'x-requested-with':_0x3059ae[_0xf73644(0x8fc,0xd3f,0xc4e,0xabc)]},'referrer':_0x3059ae['UWZWs'],'referrerPolicy':_0x3059ae['AAlZS'],'body':null,'method':_0x3059ae[_0xf73644(0x894,0x599,0x305,0x3fa)],'mode':_0x3059ae['hUepE']})['then'](_0x322d6c=>_0x322d6c['json']())[_0x1d7452(0x8bb,0x692,0xa4b,0xa59)](_0x4097a0=>{const _0x13037f=_0x4097a0[_0x2a2d33(-0xba,0x476,0x66d,0x312)+_0x5d0b9f(0x47f,0x293,0x2ab,0x5af)]['data'][_0x2a2d33(0x8be,0x4dc,0x78c,0x7e)][_0x15c9b1[_0x2a2d33(0x14f,0x50c,0x320,0x752)](_0x299cfa[_0x5d0b9f(0x522,0x35,0x3d9,0x461)]()*_0x4097a0[_0x5d0b9f(0x9b7,0x8d0,0x497,0x589)+_0x2a2d33(0x5e4,0x28a,-0x14c,-0x1f3)][_0x5d0b9f(0x5c0,0x5e2,0x5ce,0x835)]['results'][_0x5d0b9f(0x37c,0x463,0x26b,0x7d7)])];function _0x5d0b9f(_0x5c06af,_0x4ff94b,_0x46977d,_0x182c00){return _0xf73644(_0x5c06af,_0x4ff94b-0x184,_0x46977d-0xca,_0x46977d- -0x19d);}function _0x2a2d33(_0x4b00ba,_0x3d9c1b,_0x10184c,_0x1acc24){return _0x1d7452(_0x4b00ba-0x24,_0x3d9c1b-0x8f,_0x10184c,_0x3d9c1b- -0x39c);}var _0x430286=[];const _0xf43bd7={};_0xf43bd7[_0x2a2d33(0x983,0xa17,0xe6e,0x8c8)]=_0x13037f[_0x5d0b9f(0x6b2,0x8fd,0xb88,0x1010)][_0x5d0b9f(-0x182,-0x18b,0x120,0x4ee)]['url'],_0x430286[_0x5d0b9f(-0x84,0x585,0x125,0x3d3)](_0xf43bd7),_0x3f563b[_0x2a2d33(0x720,0x791,0xa2a,0xa2b)](_0x5bccb6,_0x430286);})[_0xf73644(0xe46,0x5a7,0xbfb,0x8dc)](_0xbdb2cc);});}}else{if(_0x3059ae[_0x42f78f(-0x5fd,-0xcb,0x2ba,0x437)](_0x127700(0x914,0xca8,0xb36,0xa9a),_0x3059ae[_0x42f78f(0x9ef,0x770,0x1c5,0x3ec)])){const _0xa082fb={};_0xa082fb[_0x127700(0xef1,0xde8,0x817,0xa42)]=_0x127700(0x50f,0x47c,0x920,0x960)+_0x42f78f(0xa63,0x8f4,0x3b0,0xcdc)+_0x127700(0x94f,0xb7b,0x54f,0x82b)+'youtube.co'+'m/c/zeeone'+_0x127700(0xaaa,0xa24,0xa0c,0x719),_0x41d411=_0xa082fb;}else throw new Error(_0x3059ae['nweNs']);}};async function getToken(){const _0x5edc38={};_0x5edc38[_0x1aa859(0x91d,0x5b9,0x881,0x338)]=_0x1aa859(0x2c3,0x1e2,0x442,0x2c8)+_0x1df829(0x6a,0x46c,0x18f,-0x42d)+'VF3r/5012f'+_0x1aa859(0x84d,0x2ae,0x7aa,0x93a)+'g',_0x5edc38[_0x1aa859(0xb41,0x3b1,0x78b,0x9dd)]=_0x1df829(0x101,-0xc7,0x441,0x405)+'E',_0x5edc38[_0x1df829(0x88f,0x569,0xd19,0xcd2)]=_0x1aa859(0x433,0x424,0x4d6,0x86)+'ECT',_0x5edc38[_0x1df829(0x1a6,0x6be,-0x28f,0x26e)]=_0x1aa859(0x531,0x144,0x4e4,0x3d6)+_0x1aa859(0x1b5,0x7e6,0x51d,0x6ae),_0x5edc38[_0x1aa859(0x1c5,0x656,0x672,0x7eb)]=_0x1aa859(0xe05,0xb0b,0xb63,0xa02)+'ot',_0x5edc38['DtTwO']='_choose\x20th'+_0x1df829(0x7c8,0xa81,0x78d,0xcb2)+_0x1df829(0x386,0x7c1,0x39d,0x149)+_0x1df829(0x4bc,0x353,0xa70,0x578)+_0x1df829(0x216,-0x31,0x677,0x30e)+'d_',_0x5edc38[_0x1aa859(0xc00,0x1215,0xed2,0xc50)]=_0x1aa859(0x842,0x4fe,0x576,0xd)+'nu',_0x5edc38[_0x1aa859(0xcef,0x635,0xad3,0xc52)]=_0x1df829(0x318,0x3e4,0xf3,0x7bd)+_0x1df829(0x7c8,0xa62,0xab2,0xc66)+_0x1df829(0x386,0x6e2,0x1e5,0x46d)+_0x1df829(0x30d,-0x188,0x58d,0x4fe)+_0x1df829(0x984,0xd71,0xb06,0xae2)+_0x1df829(-0x36,0xa,-0x105,0xd0),_0x5edc38[_0x1aa859(0xba0,0x7e5,0xcf0,0x964)]='Sub\x20Menu\x20k'+_0x1df829(0x2a5,0x4b4,0x174,0x852),_0x5edc38[_0x1df829(0x3b3,0xd3,0x6bf,0x152)]=_0x1df829(0x3f5,0x7de,0x8e4,0x547),_0x5edc38['dCMWD']='_choose\x20th'+'is\x20if\x20you\x20'+'want\x20to\x20us'+_0x1df829(0x90d,0xc43,0xe4d,0x416)+_0x1df829(0x818,0xcad,0xc0b,0x31a)+_0x1df829(0x5c,0x82,0x4d4,0x33a),_0x5edc38[_0x1df829(0x32f,0x527,0x73a,0x6d)]='Sub\x20Menu\x20k'+_0x1df829(0x7e2,0x681,0x668,0xcfb),_0x5edc38[_0x1df829(0x19b,0x46f,0x4e4,-0x181)]=_0x1df829(0x39f,0x444,0x58e,-0xe2)+'u',_0x5edc38['vxYBB']=_0x1df829(0x318,0x3a3,0x84,0x395)+_0x1df829(0x7c8,0x693,0x9f6,0x94d)+_0x1aa859(0x9d3,0xb0d,0x8c0,0x996)+_0x1aa859(0xf55,0x99e,0xe18,0xdea)+_0x1df829(0x562,0x8f,0x250,0x83a)+_0x1aa859(0x5ca,0x3f0,0x96d,0x5a2),_0x5edc38[_0x1aa859(0x4be,0x800,0x88f,0xe23)]='_choose\x20th'+_0x1aa859(0x123c,0xf2b,0xd02,0xcfe)+_0x1aa859(0x5f1,0x405,0x8c0,0xa8b)+_0x1df829(0x1ec,0x270,0x687,0x339)+_0x1df829(0x216,0x4c2,-0x9f,0x454)+'d_',_0x5edc38[_0x1aa859(0x394,0xec,0x3df,0x796)]='makermenu',_0x5edc38['sYehD']=_0x1aa859(0x18b,0x155,0x4e1,0x148)+_0x1aa859(0x6a7,0x5c5,0x3d5,0x41d),_0x5edc38[_0x1df829(-0x7f,-0x3d4,-0x7c,0x1db)]=_0x1aa859(0x701,0x971,0xbfa,0xb86),_0x5edc38[_0x1df829(0x1b0,0x708,-0xd7,0x1f)]='_choose\x20th'+_0x1aa859(0xc7a,0x11a9,0xd02,0x82b)+_0x1aa859(0xdff,0xdfc,0x8c0,0xaf3)+_0x1df829(0x822,0xb13,0xa29,0x707)+_0x1aa859(0xfd4,0x9c2,0xb96,0xa94)+_0x1df829(0x5c,0x320,0x1c0,0x498),_0x5edc38['CPDhl']=_0x1df829(-0x59,-0x3fc,-0x5f4,-0xc1)+_0x1df829(0x4c,0x267,-0x3c5,0x92),_0x5edc38[_0x1df829(0x3c6,0x337,0x530,0x311)]=_0x1df829(0x473,0xd7,0x54e,0x26a)+'u',_0x5edc38[_0x1aa859(0x850,0xa15,0xa72,0x71f)]=_0x1df829(-0x59,0x172,0x33,0x3fb)+_0x1aa859(0x72d,0xc0e,0x76d,0x60d),_0x5edc38[_0x1df829(-0xa1,-0x2f1,-0x398,0x212)]='tagmenu',_0x5edc38['Ssoue']=_0x1df829(-0x59,-0x316,-0x474,-0x59a)+'e-10',_0x5edc38['DplZB']=_0x1df829(-0x6b,0x274,0x91,-0x3c0),_0x5edc38['HlFNQ']=_0x1df829(0x318,-0x121,0x6d1,-0x1ca)+_0x1df829(0x7c8,0xa41,0xd6f,0x62c)+_0x1aa859(0xb85,0xdab,0x8c0,0x8ee)+_0x1df829(0x75c,0x80a,0xa65,0x5ad)+'nu\x20command'+'_',_0x5edc38[_0x1aa859(0x4c7,0x8a5,0x5eb,0xd0)]=_0x1df829(0x794,0xd22,0x8fe,0x815)+'n',_0x5edc38[_0x1df829(0x5e9,0xfd,0x324,0x2a0)]=_0x1df829(-0x59,-0x377,-0x4c6,-0x221)+_0x1aa859(0x617,0xd1d,0xa8a,0x1009),_0x5edc38[_0x1aa859(0x960,0xe7a,0xa94,0xd4c)]=_0x1df829(-0x91,-0x301,0x187,-0x291)+_0x1df829(0x21a,0x5de,0xb7,0x5d1),_0x5edc38[_0x1df829(0x48,-0x553,0x64,-0x24b)]='_choose\x20th'+_0x1aa859(0x1127,0x113f,0xd02,0x9e8)+_0x1aa859(0x395,0xc25,0x8c0,0x628)+_0x1df829(0x51a,0x830,-0x38,0x5ec)+_0x1aa859(0x544,0x417,0x60f,0xb3d)+'d_',_0x5edc38[_0x1aa859(0x11f0,0x13dc,0xf05,0x12d4)]=_0x1aa859(0x35a,0x53b,0x4e1,0x420)+_0x1aa859(0x852,0x1293,0xde1,0x920),_0x5edc38[_0x1df829(0xbe,-0x233,-0x143,0x3dd)]='nsfw\x20menu',_0x5edc38['fHphI']=_0x1aa859(0x87a,0x30f,0x852,0xce0)+_0x1aa859(0x1144,0xf3c,0xd02,0x9cc)+_0x1aa859(0xb90,0xe0a,0x8c0,0x4c6)+_0x1aa859(0x351,0x28f,0x808,0xaef)+'menu\x20comma'+_0x1aa859(0x6e1,0x6c3,0x6c8,0x937),_0x5edc38[_0x1aa859(0x531,0xc88,0x961,0xab4)]=_0x1df829(-0x59,-0x291,0x54b,-0x43e)+_0x1df829(0x6d0,0xad2,0x422,0x7e4),_0x5edc38[_0x1aa859(0xd5f,0x442,0x8c7,0xc5e)]=_0x1aa859(0xb71,0xae8,0x5ea,0x7b2)+'u',_0x5edc38[_0x1aa859(0x77,0x598,0x59c,0x40b)]=_0x1aa859(0xb86,0x610,0x852,0xd86)+'is\x20if\x20you\x20'+_0x1df829(0x386,0x6d6,0x76a,0x8b2)+_0x1aa859(0x6ae,0x556,0x589,0x845)+_0x1aa859(0xa8e,0x1f7,0x782,0xaba)+_0x1df829(0x433,0x777,0x198,0x2af),_0x5edc38['jHNoY']='Sub\x20Menu\x20k'+_0x1aa859(0x55f,0x9d1,0xa30,0xf2d),_0x5edc38[_0x1df829(0x6c8,0xbb6,0x893,0x126)]='_choose\x20th'+_0x1df829(0x7c8,0xbda,0xce1,0x5f3)+'want\x20to\x20us'+'e\x20the\x20imag'+_0x1aa859(0x506,0xb69,0x6b8,0x280)+_0x1aa859(0x24c,0x29c,0x750,0x428)+'d_',_0x5edc38[_0x1df829(-0x177,0x262,0x35c,0x2fe)]=_0x1df829(-0x59,-0x3db,0x265,-0x67)+_0x1df829(0x346,0x6d9,-0x213,0x7d7),_0x5edc38[_0x1aa859(0x732,0x982,0x4b3,-0x7c)]='gacha\x20coga'+'n',_0x5edc38[_0x1df829(0x92,0x10f,-0x2e7,0x1ec)]='_choose\x20th'+_0x1aa859(0x12b3,0xd52,0xd02,0xfe8)+_0x1df829(0x386,0xe5,0x338,0x92e)+_0x1aa859(0x6f7,0x5a7,0x736,0xa04)+'a\x20cogan\x20co'+_0x1df829(0x433,-0x53,-0x90,0x45c),_0x5edc38[_0x1df829(0x141,-0x3f,-0x351,-0xc)]=_0x1aa859(0xa6e,0x4cb,0x4e1,0xa49)+_0x1df829(0x195,0x70e,0x3e5,0x6a3),_0x5edc38[_0x1aa859(0xcf2,0x8d0,0xc1e,0x878)]=_0x1df829(0x318,-0x164,-0x110,0x539)+_0x1aa859(0xc57,0x120c,0xd02,0x796)+'want\x20to\x20us'+_0x1df829(0x6ce,0x4d0,0x63d,0x94f)+_0x1df829(0x9a3,0x92c,0xabc,0x7cf)+_0x1df829(0x3e1,0x938,0x92,-0x16d),_0x5edc38[_0x1df829(0x1b8,0x348,0x55b,0x5ba)]=_0x1df829(0x62d,0x3d7,0xab0,0x5e7),_0x5edc38[_0x1aa859(0x46,0x678,0x535,0x84a)]=_0x1df829(0x318,0x7f9,-0x1b1,0x34e)+_0x1df829(0x7c8,0x5e1,0xb15,0xa18)+_0x1df829(0x386,0x53,0x4ea,0x554)+_0x1df829(0x7a1,0xc8e,0x595,0xa06)+_0x1df829(-0xa,-0x1e0,-0x30e,-0x54e)+_0x1aa859(0x6bb,0x66e,0x596,0x411),_0x5edc38[_0x1aa859(0xcb6,0xdfa,0xeb5,0x13f5)]=_0x1aa859(-0x76,0x502,0x4e1,0x8d8)+_0x1aa859(0x52f,0x270,0x4d5,0x4fd),_0x5edc38['iUBNv']=_0x1df829(0xbf,0x1e,-0x49f,-0x200)+'u',_0x5edc38[_0x1aa859(0xd53,0xe5b,0xac5,0xdc0)]='_choose\x20th'+_0x1df829(0x7c8,0xcd5,0x530,0x9dc)+_0x1aa859(0x846,0x75a,0x8c0,0x6b6)+_0x1df829(-0x3f,0x88,-0x4c3,-0x53d)+'promenu\x20co'+'mmand_',_0x5edc38[_0x1aa859(0xbf4,0x11cd,0xe0f,0xcc1)]=_0x1aa859(0x555,0x7d3,0x4e1,0x83)+_0x1df829(0x951,0x3e6,0xd86,0x694),_0x5edc38['cefuZ']=_0x1aa859(0x3d4,0x229,0x463,0x525)+'nu',_0x5edc38[_0x1aa859(0x4c7,0x483,0x91a,0x895)]='_choose\x20th'+'is\x20if\x20you\x20'+_0x1df829(0x386,-0x18,0x53d,0x8e6)+_0x1aa859(0x28a,0xbef,0x6be,0x51f)+_0x1df829(0x272,0x604,0x590,0x28d)+_0x1df829(-0x36,-0x5dc,0x5c,-0xbb);function _0x1df829(_0xaefcc7,_0x4abe27,_0xed8c8f,_0x1d9996){return _0x5a3069(_0xaefcc7-0x65,_0x4abe27-0x10c,_0xaefcc7- -0x642,_0x1d9996);}_0x5edc38[_0x1df829(0x3b8,-0x95,0x794,0x1de)]=_0x1aa859(0x349,0x7aa,0x4e1,0xc8)+_0x1aa859(0x924,0x2b0,0x631,0x11d),_0x5edc38[_0x1df829(0x190,0x44f,0x7,0x6cf)]=_0x1df829(0x318,0x460,-0xc5,-0x6c)+_0x1df829(0x7c8,0x589,0x87c,0x578)+_0x1df829(0x386,0x1d5,0x1b9,0x130)+_0x1df829(0x904,0x858,0xa2f,0xeb2)+_0x1df829(-0x122,-0x642,-0x6aa,0x3e9)+'and_',_0x5edc38[_0x1df829(0x80b,0x5b5,0xdba,0x751)]=_0x1aa859(0x41,0x2f1,0x4e1,0x2d2)+_0x1df829(0x1a3,0x2f2,0x233,-0x382),_0x5edc38[_0x1df829(0x1f8,0x4a7,0x204,0x589)]=_0x1df829(0x27e,-0x110,-0x124,0xcb);function _0x1aa859(_0x3de4e0,_0x1ee2c9,_0x22f83f,_0xe4999){return _0x5a3069(_0x3de4e0-0xe1,_0x1ee2c9-0x30,_0x22f83f- -0x108,_0xe4999);}_0x5edc38['OdGmK']=_0x1aa859(0x335,0x43c,0x852,0x67a)+_0x1aa859(0xb91,0x11bb,0xd02,0xa9a)+_0x1aa859(0x770,0x5d0,0x8c0,0x92a)+_0x1df829(0x49,-0x2e,-0x1b2,-0x302)+_0x1df829(0x722,0x86e,0xc93,0xa1b)+_0x1aa859(0x86c,0xa0e,0x91b,0xbb3),_0x5edc38[_0x1aa859(0xce1,0x605,0x84b,0x887)]=_0x1aa859(0x670,0x704,0xa85,0xb49)+_0x1df829(0x45,-0xfa,0xb9,0x2ee),_0x5edc38[_0x1df829(0x6b5,0xb44,0x196,0x622)]='\x0a\x0a_choose\x20'+_0x1aa859(0xb1e,0xccb,0xe5e,0x136e)+_0x1df829(-0x12b,-0x5d6,-0x571,0x41a)+'know\x20sourc'+_0x1df829(0x7a4,0x704,0xc62,0x39e)+'s\x20bot_',_0x5edc38[_0x1aa859(0x7a7,0x6f9,0xbf8,0xa66)]='source\x20cod'+'e',_0x5edc38[_0x1df829(0x7bb,0x99b,0xa3a,0x60b)]=_0x1aa859(0x96,0x8c,0x5de,0x3d1)+_0x1df829(0x5e7,0x2f7,0x86f,0x1aa),_0x5edc38['YCWlY']=_0x1aa859(0x2c9,0xb29,0x6bf,0x848)+'\x20to',_0x5edc38[_0x1df829(0x892,0x8d0,0xe2a,0x61d)]=_0x1df829(-0x180,0x228,0x24,0x2cf)+'this\x20if\x20yo'+_0x1df829(-0x12b,0x49,-0x689,-0xe2)+'know\x20anyon'+_0x1df829(0x1e6,-0x24a,-0x25,-0x166)+_0x1aa859(0xe5d,0x109e,0xdaf,0x1141)+_0x1aa859(0x6a1,0xaca,0x887,0x4c6)+'pt_',_0x5edc38[_0x1aa859(0x95f,0xb97,0xc74,0xd0b)]=function(_0x497c4a,_0x399933){return _0x497c4a!==_0x399933;},_0x5edc38[_0x1df829(0x1a9,-0x1cd,0x4e7,0x58)]=_0x1df829(0x10d,0x19d,0x165,0x3b4),_0x5edc38[_0x1aa859(0xd5b,0x97c,0xc4a,0x933)]=function(_0xc5d5ea,_0x11082c){return _0xc5d5ea===_0x11082c;},_0x5edc38[_0x1aa859(0x124d,0x1123,0xe8e,0xc21)]=_0x1df829(-0xb,-0x2f9,-0x10d,-0x12d),_0x5edc38[_0x1df829(0x221,-0x2cb,0x65b,-0x33a)]='zAYKD';const _0x51e309=_0x5edc38;try{if(_0x51e309[_0x1aa859(0x1079,0xf45,0xc74,0x8a7)]('rdXAz',_0x51e309[_0x1aa859(0x1ac,0x8b6,0x6e3,0x19a)])){const _0x256510={};_0x256510[_0x1aa859(0x1059,0xb2d,0xc69,0x6f5)+_0x1aa859(0xe00,0xc3d,0xe75,0xfe3)]=AUTH;const _0x4c55a={};_0x4c55a[_0x1df829(0x45a,0x81a,0x4d2,0x90c)]=_0x256510;const _0x12e455=await axios[_0x1aa859(0x206,0x80a,0x5ef,0x670)](API_GUEST,null,_0x4c55a);if(_0x51e309[_0x1df829(0x710,0x767,0x60e,0xaef)](_0x12e455['status'],-0x933+0x8bf*0x1+0x13c)&&_0x12e455[_0x1aa859(0xdf8,0xc17,0x939,0xb8f)]){if(_0x51e309['vxbmg']!==_0x51e309['ThLgm'])return _0x12e455[_0x1aa859(0x673,0x5cd,0x939,0x719)];else _0x45cbf3=_0x51e309[_0x1df829(0x347,0xa5,0x86f,0x26f)];}}else{const _0xa3cb34={};_0xa3cb34[_0x1df829(0x804,0xa69,0xb3a,0x45f)]=_0x1aa859(0x32e,0x239,0x7b9,0x288),_0xa3cb34[_0x1df829(0x2e3,-0x17c,0x115,-0xb8)+'n']=_0x1aa859(0xc81,0x678,0x852,0xc7f)+_0x1df829(0x7c8,0xb92,0x39f,0x550)+_0x1aa859(0x953,0x5d3,0x8c0,0xcb7)+_0x1aa859(0x41b,0xca2,0x9b0,0x8cb)+_0x1aa859(0xf3b,0xa29,0xb96,0xcea)+'and_',_0xa3cb34['rowId']='0';const _0x556bde={};_0x556bde[_0x1aa859(0x1083,0xf2f,0xd3e,0x85c)]=_0x1aa859(-0x45,0x72e,0x4e1,0x6ce)+_0x1aa859(0x12e0,0xdc1,0xd5f,0x10b1),_0x556bde['rows']=[_0xa3cb34];const _0x1b2d62={};_0x1b2d62[_0x1df829(-0x51,-0x36d,-0x3df,-0x1b3)+'id']=[_0x4fb2a6];const _0x20939c={};_0x20939c[_0x1aa859(-0x152,0x238,0x402,0x13b)]=_0x35a70a,_0x20939c['contextInf'+'o']=_0x1b2d62;let _0x19513b=_0x3b42dd[_0x1df829(0x84c,0x48d,0xd7c,0x56a)+_0x1aa859(0x904,0x9e1,0x9a7,0x688)+'ntent'](_0x258ee1,{'listMessage':{'title':'LIST\x20MENU\x20'+_0x1aa859(0x7e3,0x64c,0x8af,0x6c7),'description':_0x1aa859(0x88b,0xb28,0x5b3,0x142)+_0xf1105[_0x1aa859(0x10e2,0xa18,0xd37,0x11d4)]('@')[-0x7*-0x65+0x23+0x2e6*-0x1]+(_0x1aa859(0xc7d,0xbef,0xd14,0x121f)+'rimu\x20menye'+_0x1aa859(0x72a,0xe7a,0xbad,0xc24)+_0x1df829(0x855,0xa2e,0x495,0xbcb)+'h\x20list\x20men'+_0x1df829(0x45c,0x505,0x4eb,0x219)+_0x1aa859(0xb03,0x571,0x90c,0xb5f)+'ih!\x20Don\x27t\x20'+_0x1df829(-0x4b,-0x507,0x15f,0x508)),'buttonText':_0x51e309[_0x1df829(0x251,0x7bd,-0x1a5,0x44)],'footerText':'©\x20'+_0x1944ad,'listType':_0x51e309[_0x1aa859(0xa10,0x1233,0xdc9,0xe50)],'sections':[{'title':_0x51e309['UZeIk'],'rows':[{'title':_0x51e309[_0x1aa859(0x255,0x903,0x672,0x854)],'description':_0x51e309[_0x1aa859(0x66a,0x1f2,0x558,0x8dc)],'rowId':'0'}]},{'title':_0x1aa859(0x801,0x1e8,0x4e1,0x9ce)+_0x1aa859(0x1e1,0x7b,0x4c9,0xa5e),'rows':[{'title':_0x51e309[_0x1df829(0x998,0x3ec,0x6ce,0xac5)],'description':_0x51e309[_0x1df829(0x599,0x51d,0x3d0,0x5b2)],'rowId':'0'}]},{'title':_0x51e309[_0x1aa859(0xf5b,0x82c,0xcf0,0x125f)],'rows':[{'title':_0x51e309['IWSsP'],'description':_0x51e309['dCMWD'],'rowId':'0'}]},{'title':_0x51e309['puuQu'],'rows':[{'title':_0x51e309[_0x1df829(0x19b,0x179,0x240,0x38a)],'description':_0x51e309[_0x1aa859(0x8dc,0x5cd,0x941,0x7d8)],'rowId':'0'}]},{'title':_0x1df829(-0x59,0x3bd,-0x36a,-0x253)+_0x1df829(0x92f,0xe6f,0xa4f,0x4e0),'rows':[{'title':_0x1aa859(0xdca,0x8dc,0xd54,0x11ad),'description':_0x51e309[_0x1df829(0x355,0x578,0x3b9,-0x254)],'rowId':'0'}]},{'title':_0x1aa859(0x33,0x700,0x4e1,0x8e1)+_0x1df829(0x59a,0x786,0x728,0xb3e),'rows':[{'title':_0x51e309['kPRXF'],'description':_0x1df829(0x318,0x7c9,0x4e5,-0x162)+_0x1aa859(0xf21,0xd8d,0xd02,0x1212)+_0x1aa859(0x899,0xe2b,0x8c0,0x982)+_0x1aa859(0x1472,0x1461,0xf06,0xf69)+_0x1df829(0x65c,0x3db,0x7ac,0x978)+_0x1aa859(0x94b,0x2e3,0x596,0x7ac),'rowId':'0'}]},{'title':_0x51e309['sYehD'],'rows':[{'title':_0x51e309[_0x1aa859(0x76f,0x484,0x4bb,0x1d3)],'description':_0x51e309[_0x1df829(0x1b0,-0x5e,0x555,0x595)],'rowId':'0'}]},_0x556bde,{'title':_0x51e309['CPDhl'],'rows':[{'title':_0x51e309[_0x1aa859(0xdbc,0x7dc,0x900,0x809)],'description':_0x1aa859(0x6e2,0xab2,0x852,0x883)+_0x1df829(0x7c8,0x5b8,0x31a,0x4a7)+_0x1df829(0x386,0x196,0x64,0x77b)+_0x1aa859(0x9fb,0x729,0x4f2,0x6a3)+_0x1df829(-0x144,-0x1b7,0x2c,-0x226)+'mmand_','rowId':'0'}]},{'title':_0x51e309[_0x1aa859(0x5d3,0xdd3,0xa72,0x8c9)],'rows':[{'title':_0x51e309[_0x1df829(-0xa1,-0x1f0,0x3aa,-0x25b)],'description':_0x1aa859(0x7b0,0x9b9,0x852,0xb00)+_0x1df829(0x7c8,0x986,0x5b8,0x80f)+_0x1aa859(0x363,0x3c9,0x8c0,0x6f7)+_0x1df829(0x3d6,0x654,0x522,0x7a2)+'enu\x20comman'+'d_','rowId':'0'}]},{'title':_0x51e309[_0x1aa859(0x975,0xbd3,0x988,0xc4d)],'rows':[{'title':_0x51e309[_0x1df829(0x96d,0x60d,0x976,0x6d8)],'description':_0x51e309[_0x1df829(0x4bf,0x21b,0x335,0x784)],'rowId':'0'}]},{'title':_0x1aa859(0x4c2,0x2b7,0x4e1,0x386)+_0x1df829(0x443,0x6f5,0x4dc,0x6dc),'rows':[{'title':_0x51e309[_0x1aa859(0x969,0x147,0x5eb,0x949)],'description':_0x1aa859(0x785,0xd9f,0x852,0xbaa)+_0x1aa859(0xa11,0x1273,0xd02,0xf9f)+_0x1aa859(0x3bb,0x6a8,0x8c0,0xe53)+_0x1df829(0x1fc,0x41b,0x3e2,-0x2da)+_0x1df829(0x71e,0x9e2,0x92d,0x3dc)+_0x1df829(0x3e1,0x159,0x181,0x5f7),'rowId':'0'}]},{'title':_0x51e309[_0x1aa859(0xd88,0x7a2,0xb23,0xf61)],'rows':[{'title':_0x51e309[_0x1df829(0x55a,0x52e,0x2c2,0xa2a)],'description':_0x51e309[_0x1df829(0x48,-0x1c4,0x87,-0x24c)],'rowId':'0'}]},{'title':_0x51e309[_0x1df829(0x9cb,0x723,0xf47,0x763)],'rows':[{'title':_0x51e309['iJafa'],'description':_0x51e309[_0x1aa859(0x4de,0x3f0,0x5fb,0xae4)],'rowId':'0'}]},{'title':_0x51e309[_0x1aa859(0x63e,0x4c8,0x961,0x5d1)],'rows':[{'title':_0x51e309[_0x1df829(0x38d,0x702,0x70,0x596)],'description':_0x51e309['ZWuzj'],'rowId':'0'}]},{'title':_0x51e309[_0x1aa859(0xd5b,0xe51,0xe00,0xf67)],'rows':[{'title':_0x1df829(0x297,0x7c5,0x82d,0x2df)+'ct','description':_0x51e309[_0x1aa859(0x960,0x7be,0xc02,0x10a6)],'rowId':'0'}]},{'title':_0x51e309[_0x1df829(-0x177,-0x2b9,-0x6c6,-0x1aa)],'rows':[{'title':_0x51e309['uotRs'],'description':_0x51e309[_0x1aa859(0x267,0x6e4,0x5cc,0x4ac)],'rowId':'0'}]},{'title':_0x51e309[_0x1df829(0x141,-0x1e7,-0x2d8,0x34e)],'rows':[{'title':_0x1df829(-0xb5,-0x40c,0x0,0xd6),'description':_0x51e309['hsgas'],'rowId':'0'}]},{'title':_0x1df829(-0x59,-0x54,-0x565,0x41b)+'e-18','rows':[{'title':_0x51e309[_0x1aa859(0x448,0x2bc,0x6f2,0xafb)],'description':_0x51e309[_0x1aa859(0x48b,0x923,0x535,0x27d)],'rowId':'0'}]},{'title':_0x51e309[_0x1aa859(0xb1f,0x109c,0xeb5,0xa16)],'rows':[{'title':_0x51e309[_0x1aa859(0xd6f,0x895,0xc78,0xe6d)],'description':_0x51e309[_0x1aa859(0x87e,0xb72,0xac5,0x962)],'rowId':'0'}]},{'title':_0x51e309[_0x1aa859(0xac1,0x8c9,0xe0f,0x10dd)],'rows':[{'title':_0x51e309['cefuZ'],'description':_0x51e309[_0x1aa859(0x69d,0xe12,0x91a,0x72c)],'rowId':'0'}]},{'title':_0x51e309['GXZyy'],'rows':[{'title':_0x1aa859(0xccf,0xeb3,0xc1d,0xa24),'description':_0x51e309[_0x1df829(0x190,0x54a,0x720,0x4d9)],'rowId':'0'}]},{'title':_0x51e309[_0x1df829(0x80b,0x91d,0x8f3,0xd5e)],'rows':[{'title':_0x51e309['zaoeQ'],'description':_0x51e309['OdGmK'],'rowId':'0'}]},{'title':_0x51e309[_0x1aa859(0x8b5,0x92b,0x84b,0x2e2)],'rows':[{'title':_0x1df829(0x7a7,0x5f5,0x745,0xbd7)+'e','description':_0x51e309[_0x1df829(0x6b5,0x2ba,0xab6,0xa6c)],'rowId':_0x51e309['rQLYf']}]},{'title':_0x51e309[_0x1df829(0x7bb,0x21a,0xc89,0xa24)],'rows':[{'title':_0x51e309[_0x1df829(0x85a,0x9f5,0x778,0xc24)],'description':_0x51e309[_0x1aa859(0x12cf,0x126d,0xdcc,0xc49)],'rowId':'0'}]}]}},_0x20939c);const _0x54600c={};_0x54600c[_0x1aa859(0xe59,0xf16,0xbb1,0x83f)]=!![],_0x5da519['relayWAMes'+_0x1df829(0x5e,-0x59,0x532,-0xd2)](_0x19513b,_0x54600c);}}catch(_0x4645fc){throw new Error(_0x4645fc);}}const fbdl=async _0x53c808=>{const _0x34c37b={'WKagD':function(_0x275963,_0x5684c1){return _0x275963(_0x5684c1);},'KIHmz':'value','GBNQF':function(_0x22d812){return _0x22d812();},'uQlVo':'https://do'+'wnvideo.ne'+'t','vLCdH':'input','fFIKO':function(_0x817e56,_0x18dd1e){return _0x817e56===_0x18dd1e;},'FEOtV':_0x3d7d6d(0xf0e,0xb6b,0xc99,0xc14),'QwmXX':function(_0x2f46d7,_0x49c99d){return _0x2f46d7(_0x49c99d);},'cNxgG':_0x3d7d6d(0x503,0x36,0x903,0xa04)+_0x3d7d6d(0xdfd,0xd63,0x8ac,0xe97)+'t/download'+'.php','VTovQ':_0x58ea64(0x93a,0xed9,0xa8f,0xe6f),'gsZqC':_0x3d7d6d(0x73e,0x4af,0x189,0x813)+'\x22col-md-10'+'\x22]','wCflG':function(_0x30e783,_0x10664e,_0x1f063c){return _0x30e783(_0x10664e,_0x1f063c);}};async function _0x339027(){let _0xdfd031=_0x34c37b[_0x2a9c02(0xe43,0xb8c,0x872,0xc6d)](UserAgent);function _0x2a9c02(_0x20f403,_0x1cc679,_0x1887ad,_0x5c9767){return _0x3d7d6d(_0x1cc679- -0x1a6,_0x1887ad,_0x1887ad-0xd1,_0x5c9767-0x151);}const _0x12c290={};_0x12c290[_0x30be40(0x66e,0x298,0xa71,0x505)]=_0x30be40(0x824,0x489,0x510,0x714)+_0x2a9c02(0xefd,0xb8a,0xf17,0x84a)+'n/xhtml+xm'+'l,applicat'+_0x2a9c02(0x797,0xb2e,0xc02,0xfc1)+_0x2a9c02(0x67a,0x5b0,0x69d,0x147)+'avif,image'+_0x2a9c02(0x6e2,0x896,0x40c,0x621)+_0x2a9c02(0x354,0x830,0x68c,0x826)+_0x30be40(0xa9e,0xca4,0xe77,0xb90)+'lication/s'+_0x2a9c02(0x8df,0xc1e,0x71b,0x86f)+'ange;v=b3;'+_0x2a9c02(0x702,0x3ed,0x6d8,0x13c),_0x12c290['accept-lan'+'guage']=_0x2a9c02(0xb85,0x8ab,0x6c8,0xb90)+'=0.9,en;q='+_0x30be40(0x361,-0x8b,-0x136,0x2e0)+_0x2a9c02(0x8b2,0x40c,0x7c0,-0x3f)+'6',_0x12c290[_0x2a9c02(0x55a,0x969,0xd20,0x999)+'user']='?1',_0x12c290[_0x2a9c02(0xcdd,0x93b,0xa43,0xae8)]=_0xdfd031;const _0x2592ee={};_0x2592ee[_0x2a9c02(0x578,0x920,0xd79,0xad4)]=_0x12c290;const _0x2dbf43=await axios['get'](_0x34c37b['uQlVo'],_0x2592ee),_0x693cf2=cheerio[_0x30be40(0x74,0x3bd,0x5f4,-0x1d6)](_0x2dbf43[_0x30be40(0x5cd,0x22b,0x645,0xa4b)]);let _0x258b12;_0x34c37b[_0x2a9c02(0x2b3,0x6ee,0xc95,0x1bb)](_0x693cf2,_0x30be40(0x2a0,0x7c7,0x81d,0x0)+_0x30be40(0x82d,0x958,0xb8b,0x2bf)+'up\x20col-lg-'+_0x2a9c02(0x97b,0xb48,0x723,0x5d9))['find'](_0x34c37b[_0x2a9c02(0xf41,0xa1d,0xd2d,0xa62)])[_0x2a9c02(0x4ac,0x72a,0xa3c,0x9bb)]((_0x38355e,_0xd2bfb)=>{function _0x4c96d0(_0x16ffca,_0x39633c,_0x43b82a,_0x132b9a){return _0x2a9c02(_0x16ffca-0xaa,_0x16ffca- -0xeb,_0x43b82a,_0x132b9a-0x9a);}let _0x3580a1=_0x34c37b['WKagD'](_0x693cf2,_0xd2bfb)[_0x4c96d0(0x6b3,0xbda,0x62b,0xb4d)](_0x34c37b[_0x2ef91e(0x157,0x42c,0x517,0x3f4)]);function _0x2ef91e(_0x43adda,_0x69cd3a,_0x5c1ec6,_0x17221b){return _0x2a9c02(_0x43adda-0xab,_0x43adda- -0x333,_0x69cd3a,_0x17221b-0xa6);}_0x3580a1&&(_0x258b12=_0x3580a1);});const _0x213747={};function _0x30be40(_0x16414b,_0x36e6f2,_0x2bfc28,_0x1c11e0){return _0x58ea64(_0x16414b- -0x84,_0x2bfc28,_0x2bfc28-0xc,_0x1c11e0-0x178);}return _0x213747['ua']=_0xdfd031,_0x213747['token']=_0x258b12,_0x213747;}async function _0x342258(_0x40b4a1,_0x49457f){const _0x34008a={'dAGJr':function(_0x157a2e,_0x2ea978){return _0x157a2e(_0x2ea978);},'dMRRE':function(_0x1ba97d,_0x44ca78){function _0x31a7c4(_0x4147ef,_0x338ffc,_0x5b2774,_0x524965){return _0x4c05(_0x4147ef-0xaa,_0x524965);}return _0x34c37b[_0x31a7c4(0x2f3,0x8a6,0x319,0xe9)](_0x1ba97d,_0x44ca78);},'bYDdx':_0x34c37b['FEOtV'],'BShYC':'KrJmL'},_0x391d6c={};_0x391d6c[_0x3f7505(0x396,0x2bd,0x489,0x651)]=_0x3f7505(0xb10,0x62f,0x63f,0x845)+_0x3f7505(0xb72,0xad6,0x6ad,0xc17)+_0x4d2ec8(0x20b,0x27a,0x3ab,0x7c1)+'l,applicat'+_0x3f7505(0xa7a,0x39a,0x651,0x59c)+_0x4d2ec8(-0x4c5,0x552,-0x11c,0xd3)+_0x4d2ec8(0xaaa,0x4a4,0x6d6,0x61e)+'/webp,imag'+_0x3f7505(-0x196,0x8d,0x353,0x26f)+_0x4d2ec8(0xc3e,0x71e,0x6a6,0x8b9)+_0x3f7505(0xc32,0x998,0x6dc,0xae0)+'igned-exch'+_0x3f7505(0x176,-0x22d,-0x77,-0x57f)+_0x3f7505(-0x24c,0x5c,-0xf0,-0x63f),_0x391d6c['accept-lan'+_0x4d2ec8(0x2b9,0x95d,-0x17a,0x40d)]=_0x4d2ec8(0x7aa,0x10c,0xbb,0x3ce)+_0x3f7505(0x8e4,0xab5,0x7ef,0x27b)+_0x3f7505(0x48a,0x200,0x17c,-0x133)+_0x3f7505(-0x130,0x41,-0xd1,0x4e3)+'6',_0x391d6c['sec-fetch-'+'user']='?1';function _0x3f7505(_0x30381d,_0x15f623,_0x294621,_0x4a9f98){return _0x3d7d6d(_0x294621- -0x683,_0x30381d,_0x294621-0xa,_0x4a9f98-0xab);}_0x391d6c[_0x3f7505(0x5cc,0x6a9,0x8ee,0xc84)+'pe']=_0x4d2ec8(0x4b6,0x59e,0x206,0x6ad)+_0x3f7505(0x9d,-0x5b,0x1ac,0x663)+_0x3f7505(0x318,0x961,0x6a8,0x6d5)+_0x4d2ec8(0x516,0x545,0x72a,0x711),_0x391d6c[_0x3f7505(0x43b,0x5ea,0x45e,0x5c1)]=_0x49457f;const _0x7c77b1=await _0x34c37b[_0x3f7505(0x2b1,0x31c,0x6ef,0x33d)](axios,{'url':_0x34c37b['cNxgG'],'method':_0x34c37b[_0x3f7505(0x697,0xb7a,0x75a,0x80c)],'data':new URLSearchParams(Object[_0x4d2ec8(0x2c6,-0x4df,-0x20f,-0xc)](_0x40b4a1)),'headers':_0x391d6c}),_0x17a11a=cheerio[_0x3f7505(-0x709,-0x4fb,-0x171,-0x1cb)](_0x7c77b1[_0x3f7505(0x1da,0x8,0x3e8,0x921)]);function _0x4d2ec8(_0x44b6e9,_0x30ca8c,_0x13483d,_0xde6e9){return _0x3d7d6d(_0xde6e9- -0x683,_0x13483d,_0x13483d-0x1cf,_0xde6e9-0x176);}let _0x294715=[];return _0x17a11a(_0x34c37b['gsZqC'])[_0x3f7505(0x536,0xba3,0x87c,0xbb3)]('a')[_0x3f7505(0x58b,0x294,0x24d,0x49)]((_0x2633a3,_0x4688e9)=>{function _0x525e36(_0x576175,_0x327d09,_0xcffa24,_0x253423){return _0x3f7505(_0x576175,_0x327d09-0x148,_0x253423-0x2d5,_0x253423-0x7b);}function _0x2f3403(_0x2b9a70,_0x22d51b,_0x456652,_0x564ee5){return _0x3f7505(_0x2b9a70,_0x22d51b-0xe7,_0x564ee5-0x119,_0x564ee5-0x19);}if(_0x34008a['dMRRE'](_0x34008a[_0x2f3403(0x275,0x3b2,0x7a7,0x31b)],_0x34008a['BShYC']))_0x34008a[_0x525e36(0x9b0,0x619,0x9c4,0x995)](_0x3e8d4a,_0x23fd54)[_0x2f3403(0x86b,0x203,0xb53,0x611)](_0x1a144e=>{function _0x1774ec(_0x50ab69,_0x354f4e,_0x3ff21c,_0x3d4286){return _0x2f3403(_0x50ab69,_0x354f4e-0x1d0,_0x3ff21c-0x6f,_0x3ff21c- -0xc);}_0xfc215d(_0x276d51,_0x1a144e[-0xb*-0x7f+0x201e+0x2593*-0x1],_0xd56429[_0x1774ec(0x467,0x483,0x873,0xc9d)](),_0x42554c);});else{let _0x463b75=_0x17a11a(_0x4688e9)[_0x525e36(0x4ed,0x7f8,0x5a3,0x596)]('href'),_0xf4ba12=/(?:https:?\/{2})?(?:[a-zA-Z0-9])\.xx\.fbcdn\.net/;_0xf4ba12[_0x2f3403(0x7a5,0x638,0x5a8,0x8a0)](_0x463b75)&&_0x294715[_0x525e36(0x7c9,0x20d,0x6b1,0x214)](_0x463b75);}}),_0x294715;}function _0x3d7d6d(_0x3a44be,_0x2b5858,_0x340c01,_0x5e11f6){return _0x5a3069(_0x3a44be-0xfa,_0x2b5858-0xe4,_0x3a44be-0x2a,_0x2b5858);}const _0x2d0e88=await _0x339027(),_0x21bcf4={};_0x21bcf4['URL']=_0x53c808,_0x21bcf4[_0x58ea64(0x80f,0xc6c,0x603,0x479)]=_0x2d0e88[_0x58ea64(0x80f,0x5c5,0x7c1,0x5f3)];function _0x58ea64(_0x3d8aa7,_0xea0e34,_0x1a4871,_0x375c16){return _0x5a3069(_0x3d8aa7-0x2a,_0xea0e34-0x8b,_0x3d8aa7- -0x3f0,_0xea0e34);}let _0x42f789=_0x21bcf4;const _0x310e15=await _0x34c37b[_0x58ea64(0x749,0xa08,0x5fa,0xa27)](_0x342258,_0x42f789,_0x2d0e88['ua']);return _0x310e15;};!fbte[_0x5f09b6(0xe44,0xe19,0xb98,0x93e)](_0x5f09b6(0xba8,0x2c0,0x9b6,0x744))?zee[_0x5f09b6(-0x3e,0x22a,-0x1f1,0x279)](fbte)[_0x5f09b6(0x64a,0x5e7,0x53c,0x488)](async _0x2b00a5=>{function _0x3d0c35(_0x422707,_0xa616ec,_0xe92b83,_0x40f414){return _0x5f09b6(_0x422707,_0xa616ec-0xfa,_0xe92b83-0x1a2,_0xa616ec-0x3ce);}const _0x599e93={'iRflv':function(_0x158d58,_0x5542b6,_0x305d3a,_0x10fc68,_0xa65db8,_0x34bc49,_0x3785ea){return _0x158d58(_0x5542b6,_0x305d3a,_0x10fc68,_0xa65db8,_0x34bc49,_0x3785ea);},'MPJli':function(_0x32c464,_0x6ee1fe){return _0x32c464+_0x6ee1fe;},'tzYkq':'RESPONSE','XtxUR':function(_0x40d112,_0x226edf){return _0x40d112+_0x226edf;},'sGKOO':function(_0x320d23,_0x25d25e){return _0x320d23+_0x25d25e;},'orpWB':_0x409556(0x10b7,0xf9c,0x1132,0xc40)};let _0x30657a=_0x409556(0xa1f,0xb80,0x76e,0xcea)+'EBOOK\x20DOWN'+'LOADER\x20」--'+_0x409556(0xbbb,0x935,0x995,0xbad);_0x30657a+=_0x409556(0x209,0x7af,0xc77,0x75f)+'*\x20'+_0x2b00a5['title']+'\x0a';function _0x409556(_0x3ab23a,_0xe5ede8,_0x1b339f,_0x6a3139){return _0x5a3069(_0x3ab23a-0x102,_0xe5ede8-0x1dc,_0x6a3139- -0x111,_0x1b339f);}_0x30657a+=_0x409556(0xd21,0xe65,0xdd5,0x966)+'\x20'+_0x2b00a5[_0x3d0c35(0xb5e,0xaa5,0xd13,0xb26)][-0x252f+-0xbde+0x310d]['extension']+'\x0a',_0x30657a+=_0x3d0c35(0x2e0,0x351,0x203,0x8f1)+_0x3d0c35(0x7f0,0x6d6,0x32a,0x215)+_0x409556(0x2ae,0x840,0x65d,0x44b),_0x30657a+='*📧\x20Size\x20Sd'+_0x409556(0x7eb,0x8b2,0x42a,0x87d)+_0x2b00a5['medias'][-0x195f+-0x23a1+0x3d00][_0x409556(0xbe3,0x9f5,0xbd8,0xacf)+_0x3d0c35(-0xd7,0x442,0x974,0x2c6)]+'\x0a',_0x30657a+=_0x3d0c35(0x585,0x4d4,0x576,-0xce)+'\x20:*\x20'+_0x2b00a5[_0x3d0c35(0x9a6,0xaa5,0x6e6,0xc07)][0x1d97+-0x1e87+0x1*0xf1][_0x409556(0xb7d,0xbd7,0x9ed,0xacf)+_0x409556(0xc1,0x666,0x3fe,0x62c)]+'\x0a',_0x30657a+=_0x409556(0xc29,0xd12,0xd13,0x98c)+_0x409556(0xa44,0x551,0xd30,0x9ef)+_0x2b00a5[_0x409556(0xf70,0xac7,0xb91,0xc8f)][-0x20e0+-0x21fa+0x42da][_0x3d0c35(0x6a5,0x8e5,0xd15,0xc7c)+_0x3d0c35(0x356,0x442,0x6ef,0x3bc)]+'\x0a',_0x30657a+=_0x409556(0x9c3,0x443,0x101,0x601)+_0x2b00a5['url'];let _0x3a5994=await getBuffer(_0x2b00a5[_0x3d0c35(0xccc,0xbcf,0xaca,0x947)]);_0x599e93[_0x3d0c35(-0x325,0x286,0x5f0,0x421)](sendButLocation,from,_0x30657a,_0x409556(0x996,0x12b4,0x113a,0xdbc)+_0x3d0c35(0xf3,0x317,0x1e5,0x4cb)+'in\x20kamu\x20do'+_0x409556(0xaa0,0x11b1,0xaec,0xd9f)+enter+enter+'©\x20'+ownername,_0x3a5994,[{'buttonId':_0x3d0c35(0x4a,0x58a,0x52d,0x8ff)+fbte,'buttonText':{'displayText':_0x599e93[_0x3d0c35(0x4a9,0x5eb,0x8b6,0x80)](_0x599e93[_0x409556(0x950,0x652,0x59c,0x7d5)]('HD','\x20'),_0x2b00a5[_0x3d0c35(0x1025,0xaa5,0xd22,0xaba)][-0x1934+-0x1f05+0x383a]['formattedS'+_0x409556(0x1c8,0x71d,0x4a7,0x62c)])},'type':_0x599e93[_0x3d0c35(0x78e,0xb3a,0xe7e,0xe45)]},{'buttonId':'fbsd\x20'+fbte,'buttonText':{'displayText':_0x599e93['XtxUR']('SD','\x20')+_0x2b00a5[_0x409556(0x7ab,0x11bc,0xb94,0xc8f)][0x1*0x56c+0x23b3+-0x291f][_0x409556(0x57f,0x552,0xbf1,0xacf)+_0x3d0c35(-0x15c,0x442,0x125,0x899)]},'type':_0x599e93['tzYkq']},{'buttonId':'fbaudio\x20'+fbte,'buttonText':{'displayText':_0x599e93[_0x3d0c35(0x784,0x2bd,0x34e,0x456)](_0x599e93[_0x409556(0xf01,0x71c,0xb2e,0xa1f)](_0x599e93[_0x3d0c35(0x863,0xcad,0x10ac,0x802)],'\x20'),_0x2b00a5[_0x3d0c35(0x8ef,0xaa5,0xa82,0x5fa)][-0xf71+-0x3a1+0x1312][_0x409556(0x69f,0x1068,0xde4,0xacf)+'ize'])},'type':_0x599e93['tzYkq']}],{});}):fbdl(fbte)[_0x5a3069(0xddc,0xfe8,0xb51,0x1019)](_0xe83a3b=>{const _0x225534={'QdKsm':function(_0x3ff59d,_0x237aa4,_0x8c0121,_0x2abee6,_0x5d45de){return _0x3ff59d(_0x237aa4,_0x8c0121,_0x2abee6,_0x5d45de);}};function _0x23e176(_0x3df002,_0x50aa7a,_0x2d5612,_0xa0e47f){return _0x5a3069(_0x3df002-0x29,_0x50aa7a-0x5c,_0x2d5612- -0x6d0,_0xa0e47f);}function _0x5cc232(_0x5698cf,_0x52dc9f,_0x57e7ae,_0x102a47){return _0x5a3069(_0x5698cf-0x5,_0x52dc9f-0x12a,_0x5698cf- -0x493,_0x102a47);}_0x225534[_0x5cc232(0x38f,0x1a2,0x8f7,0x82c)](sendFileFromUrl,from,_0xe83a3b[0x1*-0x205+0xffe+0x49*-0x31],lang[_0x23e176(0x959,0x88c,0x6ef,0xac0)](),mek);});break;case'fbhd':case'facebookhd':const _0x5d7d6a={};_0x5d7d6a['displayTex'+'t']=_0x5a3069(0xa05,0x1149,0xe06,0x9c5)+_0x5f09b6(0x2ba,0xa50,0x8d3,0x4c7);const _0x115e6b={};_0x115e6b['buttonId']=_0x5f09b6(0x2e5,-0x1e,0x767,0x3dc),_0x115e6b['buttonText']=_0x5d7d6a,_0x115e6b['type']=0x1;const _0x2b8cf1={};_0x2b8cf1[_0x5a3069(0x3f8,0x329,0x50a,0x6bb)]=mek;if(!isPremium)return sendButMessage(from,_0x5f09b6(0x562,0x910,0xb6,0x5f4)+_0x5a3069(0xc74,0x3e8,0x7e3,0xc36)+_0x5a3069(0x86c,0xa93,0xa2b,0xe1e)+_0x5a3069(0x33f,0x9e8,0x786,0x6f8)+_0x5f09b6(0x846,0xa30,0xc61,0x6ec)+_0x5a3069(0xeb8,0x14df,0xfaa,0xff7)+_0x5a3069(0xfa6,0x1157,0xbb9,0x1009)+_0x5a3069(0x1021,0x851,0xaa6,0x787)+_0x5f09b6(0x339,-0x39c,-0x27,-0x19d)+_0x5f09b6(0x3c3,0x301,0xc09,0x6c4)+prefix+'goprem',_0x5a3069(0xa69,0xdc,0x5e0,0x41)+_0x5a3069(0xf20,0xd8f,0xde5,0x1371),[_0x115e6b],_0x2b8cf1);if(!q)return reply(_0x5f09b6(0x2bc,0x1a8,0x86e,0x59f));if(!isUrl(args[-0x1836+0x114f+0x6e7])&&!args[-0x1b8d+-0x319*0x6+-0x7f*-0x5d]['includes']('facebook.c'+'om'))return reply(lang[_0x5a3069(0x927,0x1168,0xd58,0x948)]());reply(lang['wait']());var fbte=args[_0x5f09b6(0x9d0,0x22,0x3cb,0x49d)]('\x20');zee[_0x5f09b6(0x7dd,0x5bc,-0x185,0x279)](fbte)[_0x5f09b6(0x6f4,0x691,0x603,0x488)](async _0x152fb3=>{function _0x28ddcc(_0x2d2559,_0x5056c3,_0x6b56d2,_0x2d794f){return _0x5f09b6(_0x2d794f,_0x5056c3-0x1e4,_0x6b56d2-0xa6,_0x5056c3- -0x29);}function _0x14dfd4(_0x497fb2,_0x3a6c65,_0x110027,_0x2a13b3){return _0x5a3069(_0x497fb2-0x124,_0x3a6c65-0x10c,_0x3a6c65- -0x324,_0x110027);}sendFileFromUrl(from,_0x152fb3[_0x14dfd4(0xe72,0xa7c,0xf7d,0xf13)][0xc3f+0x1426+-0x2064]['url'],lang[_0x14dfd4(0x96f,0xa9b,0xd57,0x621)](),mek);})[_0x5f09b6(0x97b,0x1f0,0x106,0x4e9)](_0x3566df=>{const _0x126fe8={'TUrNR':function(_0x2dcf1c,_0x1853b2){return _0x2dcf1c(_0x1853b2);}};function _0xbaf234(_0x5cf0be,_0x2a75e3,_0x2cf4d3,_0x471c3c){return _0x5a3069(_0x5cf0be-0x4c,_0x2a75e3-0xc8,_0x5cf0be- -0x245,_0x2a75e3);}_0x126fe8['TUrNR'](reply,lang[_0xbaf234(0x8a7,0xdc6,0x4c0,0xaa1)]());});break;case _0x5a3069(0x1e4,0xafd,0x583,0x750):case'facebooksd':if(!q)return reply(_0x5a3069(0xb42,0x6e2,0xc68,0xfb4));if(!isUrl(args[0x70*-0x38+-0x44b+0xbd*0x27])&&!args[-0xf45+-0x2ab*-0x1+-0x2*-0x64d]['includes'](_0x5a3069(0xd0e,0x805,0xd70,0xd77)+'om'))return reply(lang[_0x5f09b6(0x4f2,0x6d4,0x6ae,0x68f)]());reply(lang[_0x5f09b6(0x387,-0x1cc,-0x215,0x41)]());var fbte=args['join']('\x20');zee[_0x5f09b6(0x354,0xd0,0x5cf,0x279)](fbte)['then'](async _0x55c4f2=>{const _0x43e2f3={'NwqVX':function(_0x84cba5,_0x532853,_0x273155,_0x1ada08,_0x2a9324){return _0x84cba5(_0x532853,_0x273155,_0x1ada08,_0x2a9324);}};function _0x11777c(_0x35c651,_0x184eec,_0x6f42de,_0x4b2bb3){return _0x5f09b6(_0x4b2bb3,_0x184eec-0x82,_0x6f42de-0x1bc,_0x35c651-0x22b);}function _0x50193a(_0x4d890c,_0x594546,_0x20b3d7,_0x19d6df){return _0x5f09b6(_0x594546,_0x594546-0x3e,_0x20b3d7-0xe1,_0x19d6df-0x4d4);}_0x43e2f3[_0x11777c(0xb00,0xeb7,0xaa4,0xcc5)](sendFileFromUrl,from,_0x55c4f2[_0x11777c(0x902,0xd07,0x83e,0x7a2)][-0x1c*0xa7+-0x6ed+0x1931]['url'],lang[_0x50193a(0x7a8,0x1167,0xb8a,0xbca)](),mek);})['catch'](_0x3ed57f=>{function _0x1fe1ba(_0x257191,_0x2359d6,_0x4b84a4,_0x3d5750){return _0x5a3069(_0x257191-0x9,_0x2359d6-0x7d,_0x3d5750- -0x63b,_0x257191);}const _0x548b3d={'EsKDC':function(_0x4cad5d,_0x5c5eab){return _0x4cad5d(_0x5c5eab);}};_0x548b3d[_0x1fe1ba(-0x3e,-0x497,0x25e,-0x95)](reply,lang['tryAgain']());});break;case _0x5a3069(0x2fa,0xc66,0x6e0,0x713):case'facebookau'+_0x5a3069(0x8cf,0x83f,0x5a2,0xa48):{try{pp_userb=await alpha['getProfile'+'Picture'](sender);}catch{pp_userb='https://i.'+'ibb.co/rvs'+_0x5a3069(0x461,0xa1c,0x88e,0xe32)+_0x5f09b6(0x1d5,0x2d6,0x6db,0x1e9)+'g';}let pp_userz=await getBuffer(pp_userb);const _0x1f5372={};_0x1f5372['displayTex'+'t']=_0x5f09b6(0x7a,0x633,0x77b,0x450)+'t';const _0x4823d6={};_0x4823d6[_0x5a3069(0x76a,0x500,0x6b1,0x2eb)]=_0x5a3069(0x1455,0x11de,0xfe3,0x1303),_0x4823d6['buttonText']=_0x1f5372,_0x4823d6[_0x5a3069(0x116e,0xf8f,0xd2c,0xc2d)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x5a3069(0x1597,0x12b8,0xfe3,0xbdb)](prefix),'©\x20'+ownername,[_0x4823d6]);if(!q)return reply(_0x5a3069(0x741,0x113b,0xc68,0xdc9));if(!isUrl(args[-0x1993*-0x1+-0x1ad1+0x13e])&&!args[-0x1d6c+0xac7+0x3*0x637]['includes'](_0x5a3069(0x11fd,0xd1f,0xd70,0x11ef)+'om'))return reply(lang[_0x5f09b6(0x2e9,0x34c,0x677,0x68f)]());reply(lang['wait']());var fbte=args[_0x5f09b6(0x713,0x7ff,0x1f5,0x49d)]('\x20');zee[_0x5f09b6(-0x293,0x7b6,-0x120,0x279)](fbte)[_0x5f09b6(0x565,0x747,0x48,0x488)](async _0x8a0086=>{function _0x2dda5b(_0xb81c63,_0x15b44d,_0x2aedce,_0x1090d6){return _0x5f09b6(_0x2aedce,_0x15b44d-0xb2,_0x2aedce-0x78,_0xb81c63-0x59b);}const _0x26b10a={'UUAAt':function(_0x1be4e0,_0x2aa96a){return _0x1be4e0(_0x2aa96a);},'CexRj':_0x2dda5b(0x639,0x715,0x13b,0xa32)+_0x143126(-0x4,-0x251,0x4b2,0x348)+_0x2dda5b(0xb68,0x6d5,0xaee,0x98e),'ojBVs':_0x2dda5b(0xda1,0xa36,0xbd9,0xa8c)};let _0x3edc9f=await _0x26b10a[_0x2dda5b(0x669,0x7d4,0x3ab,0x30f)](getBuffer,_0x8a0086['medias'][0x2*-0x7bb+-0x53*0xa+-0x54*-0x39][_0x143126(0xa29,0xadc,0x2fa,0x7b2)]);const _0x571f9f={};_0x571f9f[_0x143126(0x1239,0xca0,0xbc2,0xcd2)]=_0x26b10a[_0x143126(0xdd2,0x4ce,0xeb2,0xa83)],_0x571f9f['mediaType']=0x2,_0x571f9f[_0x143126(0x82f,0x10b4,0xdec,0xb32)]=_0x143126(0x526,0x459,0x74e,0x215)+'ic',_0x571f9f[_0x2dda5b(0x801,0xc2a,0xca3,0x5be)]='',_0x571f9f[_0x2dda5b(0xdc1,0xe73,0x9bd,0xf4d)+'rl']='',_0x571f9f[_0x143126(0xbf9,0x1042,0xb2e,0xbb6)]=pp_userz;function _0x143126(_0x101f26,_0x3b03eb,_0x546340,_0x3cf8df){return _0x5f09b6(_0x3b03eb,_0x3b03eb-0xb5,_0x546340-0x80,_0x3cf8df-0x3b5);}const _0x4a9893={};_0x4a9893[_0x2dda5b(0x899,0x4c2,0x810,0xd7d)]=_0x143126(0x617,0xba8,0x7a7,0xace)+_0x2dda5b(0xabf,0xe76,0xa1e,0xf5f)+'oader',_0x4a9893['forwarding'+_0x143126(0x80c,0x866,0x3b0,0x616)]=0x3b9aca00,_0x4a9893[_0x2dda5b(0xeab,0x96e,0x9ac,0xca0)+'d']=!![],_0x4a9893[_0x143126(0x6a4,-0xd0,-0x1c9,0x1c8)+_0x2dda5b(0xeec,0xd57,0xe0c,0x141c)]=!![],_0x4a9893['externalAd'+_0x143126(0x839,0x2cf,0x391,0x582)]=_0x571f9f;const _0xb7832b={};_0xb7832b[_0x2dda5b(0x891,0x577,0x740,0x915)+'o']=_0x4a9893,_0xb7832b[_0x2dda5b(0x680,0xab7,0x6ed,0x288)]=_0x26b10a[_0x2dda5b(0xb85,0xdce,0x6de,0x8ad)],_0xb7832b[_0x2dda5b(0x901,0x4fb,0xcc7,0x69a)]='Facebook\x20M'+'usic.mp3',_0xb7832b['quoted']=fgclink2,_0xb7832b[_0x2dda5b(0xd9c,0xaef,0xded,0x1037)]=pp_bot2,alpha[_0x143126(0x5a6,0x6c0,0x432,0x7cc)+'e'](from,_0x3edc9f,MessageType[_0x2dda5b(0x922,0x7ce,0xb32,0x872)],_0xb7832b);})[_0x5f09b6(0x3b0,0x1ec,0x685,0x4e9)](_0x243985=>{const _0x338ca9={'YSKgE':function(_0x200aba,_0x5773a0){return _0x200aba(_0x5773a0);}};function _0x3c48f2(_0x4b7b28,_0x5def87,_0xae8a64,_0x53f9c8){return _0x5a3069(_0x4b7b28-0x1c6,_0x5def87-0xd3,_0x5def87- -0x693,_0x4b7b28);}function _0x4beb36(_0x218d5f,_0x1a0d1d,_0x348793,_0x26f0d6){return _0x5a3069(_0x218d5f-0xd9,_0x1a0d1d-0x97,_0x26f0d6- -0x676,_0x218d5f);}_0x338ca9[_0x3c48f2(-0xb5,0x201,-0x13b,-0xf8)](reply,lang[_0x4beb36(0x534,0x971,0x31c,0x476)]());});}break;case _0x5f09b6(0x847,0x152,0x26b,0x29e)+'o':case'tiktokmusi'+'c':case _0x5a3069(0xae6,0xb64,0x9d2,0xbf5):{try{pp_userb=await alpha['getProfile'+_0x5f09b6(0x125,-0x6b5,0x337,-0x18f)](sender);}catch{pp_userb=_0x5f09b6(-0x549,0x10a,0x3e2,-0x17f)+_0x5a3069(0x882,0xa20,0x6ac,0xaa3)+'VF3r/5012f'+_0x5a3069(0x81c,0x7a7,0x8b2,0x6b3)+'g';}let pp_userz=await getBuffer(pp_userb);const _0xe3656c={};_0xe3656c['displayTex'+'t']=_0x5f09b6(0x872,0x97,-0xeb,0x450)+'t';const _0xb4aac={};_0xb4aac[_0x5f09b6(-0x4b2,0x7e,-0x18,-0x18)]=_0x5f09b6(0x390,0xe27,0x976,0x91a),_0xb4aac[_0x5a3069(0x733,0xcb7,0xb6e,0x84b)]=_0xe3656c,_0xb4aac[_0x5a3069(0x8ce,0x1225,0xd2c,0xd89)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x5a3069(0x1068,0xc13,0xfe3,0x11d5)](prefix),'©\x20'+ownername,[_0xb4aac]);if(!q)return reply(_0x5a3069(0x71a,0xa2d,0xc68,0xfb4));if(!isUrl(args[0x1a2f*0x1+0x1967*-0x1+-0xc8])&&!args[-0x66a*-0x6+-0x1*-0x1822+-0x3e9e][_0x5f09b6(0x832,0x748,0xdde,0x93e)](_0x5f09b6(-0x270,-0x36e,-0x128,0x2f)))return reply(lang[_0x5a3069(0xce5,0xb26,0xd58,0xc54)]());reply(lang[_0x5a3069(0x738,0x405,0x70a,0x656)]()),hx[_0x5a3069(0x86b,0xad6,0x939,0xe31)+'er'](''+args[-0x121b+-0xa70+-0x1*-0x1c8b])['then'](_0x49f80d=>{const _0x11a72c={'jwxoj':function(_0x1b1d0e,_0x12a762){return _0x1b1d0e(_0x12a762);},'Gspxu':_0x45871d(-0x23f,-0x266,0x172,-0x34b)+_0x1fb1cb(0x162,0x2d2,0x38f,0x837)+'xTH6oLd8','ohFdZ':'audio/mp4'},{wm:_0x3d8509,nowm:_0x100944,audio:_0x57370f}=_0x49f80d;function _0x1fb1cb(_0x20f2f3,_0x5d2151,_0x4b747b,_0x1245f9){return _0x5f09b6(_0x4b747b,_0x5d2151-0x63,_0x4b747b-0x18c,_0x5d2151-0x33f);}function _0x45871d(_0x1e746f,_0x7368fe,_0x2e87fb,_0x499a07){return _0x5a3069(_0x1e746f-0x13,_0x7368fe-0x114,_0x2e87fb- -0x5f5,_0x7368fe);}axios[_0x45871d(0xbfa,0x618,0xa2c,0x6d5)](_0x45871d(0x39a,-0x33a,-0xed,-0x3e)+_0x45871d(0x649,0x7c2,0x837,0xa43)+'api-create'+_0x1fb1cb(0x218,0x2df,0x7a0,0x120)+_0x100944)[_0x45871d(0x1a2,0x862,0x55c,0x88f)](async _0x2a485d=>{me='*Link*\x20:\x20'+_0x2a485d[_0x14c194(0x581,0x9b7,0x738,0xd3b)],nowmm=await _0x11a72c['jwxoj'](getBuffer,_0x57370f);const _0x34ab3c={};_0x34ab3c[_0x666b28(0xafa,0x7f1,0x8bb,0x913)]=_0x11a72c[_0x14c194(0xb17,0xc4e,0x94a,0x1187)],_0x34ab3c[_0x14c194(0xe16,0xc44,0x109e,0x769)]=0x2,_0x34ab3c[_0x14c194(0x9bc,0xdbc,0xdd7,0x130e)]=_0x666b28(0x3db,-0x53f,0x31b,-0x1aa)+'ic',_0x34ab3c[_0x14c194(0xd96,0x8a5,0xa49,0x486)]='',_0x34ab3c[_0x666b28(0xc7b,0xcc8,0x912,0x81c)+'rl']='',_0x34ab3c[_0x666b28(0xa88,0x8cc,0x294,0x7f7)]=pp_userz;const _0x21f347={};_0x21f347[_0x14c194(0x977,0x93d,0x7e1,0x69d)]=_0x14c194(0x35e,0x49f,0x90d,0x4d6)+_0x666b28(0xa9d,0xd0f,0x8e1,0x904)+'der',_0x21f347[_0x14c194(0x97a,0x537,0xa10,0x1ac)+'Score']=0x3b9aca00,_0x21f347[_0x14c194(0xe00,0xf4f,0x1027,0x138e)+'d']=!![];function _0x14c194(_0x82bff7,_0x88a20b,_0x2f3781,_0x29a447){return _0x1fb1cb(_0x82bff7-0x130,_0x88a20b-0x300,_0x82bff7,_0x29a447-0x4e);}_0x21f347[_0x666b28(0x208,-0x5f1,-0x1b8,-0x1f7)+_0x666b28(0xa89,0xae1,0x9e0,0x947)]=!![],_0x21f347['externalAd'+_0x14c194(0x682,0x80c,0x76c,0x4f7)]=_0x34ab3c;const _0x28abd2={};_0x28abd2[_0x14c194(0x8ed,0x935,0x910,0x81b)+'o']=_0x21f347,_0x28abd2[_0x666b28(0x2fb,0x27,-0x18c,0xdb)]=_0x11a72c[_0x666b28(0x840,0x3a8,0x2f7,0x52d)],_0x28abd2['filename']=_0x14c194(0x5ff,0x49f,0x36a,0x937)+_0x14c194(0x952,0x9a3,0xb9b,0x7c0),_0x28abd2['quoted']=fgclink2;function _0x666b28(_0x5ecd31,_0x2515ff,_0xd0e484,_0x5268ca){return _0x45871d(_0x5ecd31-0xe0,_0x5ecd31,_0x5268ca- -0xde,_0x5268ca-0x191);}_0x28abd2['thumbnail']=pp_bot2,alpha[_0x666b28(0x4f7,0x76,0x8a7,0x40d)+'e'](from,nowmm,MessageType[_0x14c194(0x642,0x9c6,0x569,0xabb)],_0x28abd2);});}),await limitAdd(sender,limit);}break;case'tiktoknowm':case _0x5a3069(0xb22,0xc81,0x9a5,0x6b4):case'tt1':{const _0x526031={};_0x526031[_0x5a3069(0x664,0x648,0x93d,0x817)+'t']=_0x5a3069(0xab9,0xba0,0xb19,0x591)+'t';const _0x51be08={};_0x51be08[_0x5f09b6(-0xa7,-0xe,0x53,-0x18)]=_0x5f09b6(0x767,0x725,0xa28,0x91a),_0x51be08[_0x5f09b6(0x78c,0x3ae,0x658,0x4a5)]=_0x526031,_0x51be08['type']=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x5a3069(0x1487,0xc3b,0xfe3,0x1374)](prefix),'©\x20'+ownername,[_0x51be08]);if(!q)return reply(_0x5a3069(0x107d,0x79c,0xc68,0x813));if(!isUrl(args[0x1*-0xcb5+-0x19e2+0x2697])&&!args[0x4*0x556+-0x2701+0x11a9][_0x5f09b6(0x549,0x42f,0x7d9,0x93e)](_0x5a3069(0x898,0x802,0x6f8,0x79c)))return reply(lang[_0x5f09b6(0x9ae,0xb4d,0x5de,0x68f)]());reply(lang['wait']()),hx[_0x5a3069(0x701,0xa79,0x939,0x861)+'er'](''+args[-0x1*-0x581+0x3e4+-0x965])[_0x5a3069(0x9aa,0x9e7,0xb51,0xc05)](_0x482aea=>{function _0x49958b(_0x45a1df,_0x2e7b4b,_0x3a60e7,_0x20867b){return _0x5f09b6(_0x2e7b4b,_0x2e7b4b-0x138,_0x3a60e7-0x1cf,_0x3a60e7-0x473);}function _0x517466(_0xa15dd3,_0x2ab946,_0x3e0856,_0x1eda7d){return _0x5a3069(_0xa15dd3-0xdf,_0x2ab946-0xd1,_0x3e0856- -0x369,_0x2ab946);}const _0x3ef701={'nhXkG':'FvBSl','TEHIQ':function(_0xa3b840,_0x48e29e){return _0xa3b840(_0x48e29e);},'ogWhJ':_0x517466(0x448,-0x1b5,0x3fe,0x915)+_0x517466(0x217,0x2a3,0x2f3,0x43c)+_0x49958b(0x9c5,0x780,0xa40,0x6b3)},{wm:_0xb5bd6f,nowm:_0x5e840c,audio:_0x27f217}=_0x482aea;axios['get'](_0x517466(-0x281,0x302,0x19f,0x368)+_0x517466(0x6f6,0xfd5,0xac3,0xddf)+_0x49958b(-0x27,0x4e,0x4bb,0x2ae)+_0x517466(0x7e2,-0x1a6,0x300,0x74f)+_0x5e840c)[_0x49958b(0x34f,0x7f2,0x8fb,0xc61)](async _0x3a7fa1=>{function _0x5e13fc(_0x403806,_0x943c18,_0x1506eb,_0x54f726){return _0x517466(_0x403806-0x115,_0x403806,_0x54f726-0x4,_0x54f726-0x180);}function _0xafba6a(_0x37227e,_0x294332,_0x1ebd96,_0x605f1){return _0x49958b(_0x37227e-0x20,_0x37227e,_0x1ebd96- -0x368,_0x605f1-0x1a2);}if(_0x3ef701['nhXkG']!=='FvBSl'){let _0x9a24f1=/twitter\.com\/[^/]+\/status\/(\d+)/,_0x26c8f1=_0x9a24f1['exec'](_0x3d8c45);return _0x26c8f1&&_0x26c8f1[0x1548+-0x1*-0x1a51+0x17cc*-0x2];}else{me=_0x5e13fc(0xb9a,0x8b3,0xcbc,0xc06)+_0x3a7fa1[_0x5e13fc(0x55f,0xbae,0xa14,0x6dc)],nowmm=await _0x3ef701[_0xafba6a(0x3ae,0x138,0x5cb,0x2fd)](getBuffer,_0x5e840c);const _0x588c4d={};_0x588c4d['mediaUrl']=_0x3ef701[_0x5e13fc(0x69e,0x5ad,0xbb1,0x729)],_0x588c4d['mediaType']=0x2,_0x588c4d[_0x5e13fc(0xbf8,0x7bf,0x65e,0xae1)]=_0x5e13fc(0x7d4,0x10fd,0xf87,0xbd4)+_0xafba6a(0xe11,0x6ce,0x8ab,0xaf3),_0x588c4d[_0x5e13fc(0x3fe,0x579,0x3c2,0x5ca)]='',_0x588c4d[_0xafba6a(0xa6d,0x3b5,0x931,0xb3e)+'rl']='',_0x588c4d[_0xafba6a(0xa61,0x465,0x90c,0x969)]=pp_userz;const _0x58b16d={};_0x58b16d[_0x5e13fc(-0x1be,0x2a9,0x5c4,0x25c)+_0xafba6a(0x7e6,0x84,0x36c,0x785)]=0x3b9aca00,_0x58b16d[_0xafba6a(0x712,0x4f8,0xa1b,0xcaf)+'d']=!![],_0x58b16d[_0x5e13fc(0xc0,-0x22,-0x292,0x177)+'ral']=!![],_0x58b16d[_0xafba6a(-0x393,0x446,0x152,0x314)+_0x5e13fc(0x6b0,0x82e,0x592,0x531)]=_0x588c4d;const _0x28c19f={};_0x28c19f['contextInf'+'o']=_0x58b16d,_0x28c19f[_0xafba6a(0x2d2,-0x60,0x1f0,-0x273)]=_0xafba6a(0x395,-0x314,0x13c,0x124),_0x28c19f['filename']=_0x5e13fc(0x991,0x10c7,0xa0e,0xbd4)+'WM.mp4',_0x28c19f[_0xafba6a(0x53,0x132,-0xb4,0x3b3)]=fgclink2,_0x28c19f[_0x5e13fc(0xe0b,0x6c2,0xe38,0xb65)]=pp_bot2,alpha[_0xafba6a(0x7b,0x457,0x522,0x52f)+'e'](from,nowmm,MessageType[_0xafba6a(0x50b,0x3cf,0x492,0x311)],_0x28c19f);}});}),await limitAdd(sender,limit);}break;case'tiktokwm':{const _0x2a0633={};_0x2a0633[_0x5f09b6(0x644,0x44a,0x1cf,0x274)+'t']=_0x5a3069(0xc8b,0xc13,0xb19,0x5fb)+'t';const _0x5078d4={};_0x5078d4['buttonId']=_0x5a3069(0x10cb,0xc94,0xfe3,0x14bb),_0x5078d4[_0x5a3069(0x946,0x83a,0xb6e,0xe6f)]=_0x2a0633,_0x5078d4[_0x5f09b6(0x713,0x5e3,0x1a0,0x663)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x5a3069(0xa90,0x1025,0xfe3,0xb2c)](prefix),'©\x20'+ownername,[_0x5078d4]);if(!isUrl(args[0x93*-0x13+0x221a+-0x1731])&&!args[-0x1*-0x2333+-0x1a38+0xb*-0xd1][_0x5f09b6(0xd1c,0x4f7,0x8f8,0x93e)](_0x5a3069(0xbe8,0xbe3,0x6f8,0x9ca)))return reply(lang[_0x5f09b6(0x815,0xa0f,0x5d5,0x68f)]());if(!q)return fakegroup(_0x5a3069(0xaf9,0xc97,0xc68,0xf7e));try{pp_userb=await alpha[_0x5a3069(0x683,0xb51,0x951,0x431)+_0x5f09b6(-0x694,0x19c,-0x591,-0x18f)](sender);}catch{pp_userb=_0x5f09b6(0x2bc,0x8c,-0x67b,-0x17f)+_0x5a3069(0x440,0xa3e,0x6ac,0xb41)+'VF3r/5012f'+_0x5f09b6(-0x3c,-0x3a3,0x5da,0x1e9)+'g';}let pp_userz=await getBuffer(pp_userb);reply(lang[_0x5a3069(0x428,0xcab,0x70a,0x933)]()),hx['ttdownload'+'er'](''+args[0x1f62+-0x60c+-0x1956])[_0x5f09b6(0x67e,0x228,-0x127,0x488)](_0x2135f2=>{const _0x3e148a={};function _0x24a64e(_0x418933,_0x54505e,_0x14bd84,_0x5cf63c){return _0x5f09b6(_0x14bd84,_0x54505e-0x1e,_0x14bd84-0x7a,_0x5cf63c-0x536);}_0x3e148a[_0x573c08(0x801,0x8c8,0x501,0xac8)]='video/mp4';function _0x573c08(_0x3cf7af,_0x5a3354,_0x5c0f31,_0x415c32){return _0x5a3069(_0x3cf7af-0x14a,_0x5a3354-0x7f,_0x5a3354- -0x668,_0x3cf7af);}const _0x3f68fc=_0x3e148a,{wm:_0x15f12f,nowm:_0x29f00c,audio:_0x360440}=_0x2135f2;axios[_0x573c08(0xdef,0x9b9,0x97b,0xee5)]('https://ti'+_0x24a64e(0xdfa,0x8fe,0x9ec,0xc99)+'api-create'+'.php?url='+_0x15f12f)['then'](async _0x31ba81=>{me=_0x4d34ec(0xb7b,0x92e,0xf73,0xf4f)+_0x31ba81[_0x4d34ec(0x651,0x9c8,0x7e1,0xb52)],wmm=await getBuffer(_0x15f12f);const _0x3a18ce={};_0x3a18ce[_0x37afc1(0xfed,0xc5e,0xd01,0x804)]=_0x37afc1(0x533,0x3df,0x6b,0x73)+_0x37afc1(0x41c,0x2d4,0x7c4,0x441)+_0x4d34ec(0x8a6,0xc5e,0xdc3,0x3a5),_0x3a18ce[_0x37afc1(0x99b,0x946,0x9ea,0xc06)]=0x2,_0x3a18ce[_0x4d34ec(0xa56,0xad4,0x4e4,0xa9d)]='Tiktok\x20Wit'+_0x37afc1(0xdc1,0x8ff,0xd54,0xbf2)+'k',_0x3a18ce[_0x4d34ec(0x53f,0x833,0x6f1,0x978)]='';function _0x37afc1(_0x109318,_0x1a34ba,_0x46f2b3,_0xa69058){return _0x573c08(_0x109318,_0x1a34ba-0x2e0,_0x46f2b3-0x11b,_0xa69058-0x151);}_0x3a18ce[_0x37afc1(0x62a,0xb67,0xea6,0xd85)+'rl']='',_0x3a18ce[_0x37afc1(0x95b,0xb42,0x599,0x9f3)]=pp_userz;const _0x39b801={};function _0x4d34ec(_0x4e67ff,_0x5d6dc5,_0x8c72bf,_0x28e227){return _0x573c08(_0x28e227,_0x4e67ff-0x278,_0x8c72bf-0x7a,_0x28e227-0x4c);}_0x39b801[_0x37afc1(-0x85,0x239,0x607,0x308)+_0x37afc1(0x97d,0x5a2,0x997,0xa94)]=0x3b9aca00,_0x39b801[_0x4d34ec(0xbe9,0xe58,0x9ac,0x671)+'d']=!![],_0x39b801[_0x4d34ec(0xec,0x381,-0x19f,0x3af)+'ral']=!![],_0x39b801[_0x4d34ec(0x320,0x3a8,0x25f,0x405)+'Reply']=_0x3a18ce;const _0x1cd2a0={};_0x1cd2a0[_0x37afc1(0x9dc,0x637,0x279,0x525)+'o']=_0x39b801,_0x1cd2a0['mimetype']=_0x3f68fc['bVAru'],_0x1cd2a0[_0x4d34ec(0x63f,0x603,0x4ae,0x2eb)]=_0x4d34ec(0xb80,0xbcf,0xf68,0xca7)+_0x4d34ec(0x14b,-0x13,0x2af,0x30b),_0x1cd2a0[_0x37afc1(-0x18a,0x182,-0x386,0x36d)]=fgclink2,_0x1cd2a0['thumbnail']=pp_bot2,alpha[_0x37afc1(0x210,0x758,0x463,0x8cd)+'e'](from,wmm,MessageType[_0x37afc1(0x9fd,0x6c8,0x5a4,0x61f)],_0x1cd2a0);});})[_0x5f09b6(0x743,0x8e4,0xa01,0x4e9)](_0x3c40fc=>console[_0x5f09b6(0x952,0x72a,0x40d,0x864)](_0x3c40fc)),await limitAdd(sender,limit);}break;case _0x5f09b6(-0x2d1,-0x325,0x3e,0xc0):{const _0x165964={};_0x165964['displayTex'+'t']=_0x5a3069(0xeef,0xe37,0xe06,0xcae)+_0x5f09b6(0x351,0x69e,0x3b9,0x4c7);const _0x5ccccf={};_0x5ccccf[_0x5a3069(0x411,0xb13,0x6b1,0x28e)]=_0x5a3069(0x67f,0xa66,0xaa5,0x6c4),_0x5ccccf[_0x5a3069(0xeb9,0x7cb,0xb6e,0x996)]=_0x165964,_0x5ccccf[_0x5a3069(0xbb8,0xcf4,0xd2c,0x799)]=0x1;const _0xa7860b={};_0xa7860b[_0x5a3069(0x85a,0x242,0x50a,0x578)]=mek;if(!isPremium)return sendButMessage(from,_0x5f09b6(0x8bc,0x554,0x122,0x5f4)+_0x5a3069(0x9f6,0x743,0x7e3,0xc4a)+_0x5f09b6(0x31f,0x598,0x2d4,0x362)+_0x5f09b6(-0x31c,0x379,-0x3af,0xbd)+_0x5a3069(0xfc2,0x10e9,0xdb5,0x1244)+_0x5a3069(0xb40,0xfa5,0xfaa,0x11b2)+_0x5f09b6(0x94c,0x562,0x57,0x4f0)+_0x5f09b6(0x4e5,-0xe,0x6e8,0x3dd)+_0x5a3069(-0x44,0x51,0x52c,0x2a7)+_0x5f09b6(0xaee,0x806,0x833,0x6c4)+prefix+_0x5f09b6(0x23,0x7ed,0x84a,0x3dc),_0x5a3069(0x35b,0x200,0x5e0,0x2dc)+_0x5a3069(0xff5,0x1028,0xde5,0x8f1),[_0x5ccccf],_0xa7860b);if(args['length']<0x213e+0xf9b+-0x8*0x61b)return reply(_0x5f09b6(0x79,0x20c,-0x120,0x392)+_0x5f09b6(-0x671,0x64,0x268,-0x1ee));if(!isUrl(args[0x1*0x1e21+0x2*0x129c+0x99f*-0x7])&&!args[0x85*-0x2a+-0x7e3+-0x27*-0xc3]['includes'](_0x5a3069(0x8f3,0x750,0x789,0x570)))return reply(mess[_0x5f09b6(0x87c,0x6b2,0x4ff,0x460)]['Iv']);try{pp_userb=await alpha[_0x5a3069(0xbdc,0x56d,0x951,0x78f)+_0x5f09b6(0x1a3,-0x40b,0xca,-0x18f)](sender);}catch{pp_userb=_0x5a3069(0xa85,-0x46,0x54a,0xa5)+_0x5f09b6(-0x57d,-0x141,0x1a,-0x1d)+_0x5a3069(0xab6,0x6d1,0x88e,0x891)+_0x5a3069(0xa10,0xb1a,0x8b2,0x6c6)+'g';}let pp_userz=await getBuffer(pp_userb);reply(lang['wait']()),teks=args[_0x5f09b6(0x175,0x4fb,0x21e,0x49d)]('\x20'),res=await mediafireDl(teks),result=_0x5a3069(0x5cb,0xc3b,0xa30,0x68c)+_0x5a3069(0xf1c,0xba6,0xf0b,0xf52)+_0x5a3069(0x4b9,0xae5,0x545,0x885)+petik+_0x5f09b6(0x79d,0x898,0x7d1,0x80a)+petik+'\x20'+res[0xabc+-0x2251+0x1795*0x1][_0x5f09b6(0x79c,0x4ca,0x8ef,0x7bc)]+'\x0a'+petik+_0x5a3069(0xea6,0x8d2,0xe37,0xc7d)+petik+'\x20'+res[-0x1ce7+-0x1cba+0x39a1]['link']+'\x0a'+petik+'々\x20Size\x20:\x20'+petik+'\x20'+res[-0x24fd+-0xa*0x303+0x431b][_0x5a3069(0x738,0x9da,0xada,0x85a)]+(_0x5f09b6(0x541,0x22b,0xd2,0x2d)+'oading\x20fil'+'e..._'),await reply(result),mdf=await getBuffer(res[0x21d5+0xeb7+-0x308c]['link']);const _0x2a0510={};_0x2a0510['mediaUrl']='https://yo'+_0x5a3069(0xb72,0x726,0x65c,0x329)+_0x5a3069(0xb4e,0xb6c,0xc96,0xb2b),_0x2a0510[_0x5f09b6(0x8ef,0x3cc,0xa0b,0x605)]=0x2,_0x2a0510[_0x5a3069(0x13d4,0xa6e,0xe46,0x972)]=_0x5a3069(0xb32,0xf7f,0xdd4,0x1308)+_0x5f09b6(0x406,0x8c7,0x274,0x53f),_0x2a0510[_0x5a3069(0xbec,0x5dd,0x92f,0xba6)]='',_0x2a0510[_0x5f09b6(0x882,0x477,0x94b,0x826)+'rl']='',_0x2a0510[_0x5f09b6(0x50c,0x291,0xb55,0x801)]=pp_userz;const _0x1c2ee3={};_0x1c2ee3['forwarding'+_0x5a3069(0x653,0x681,0x92a,0x5fb)]=0x3b9aca00,_0x1c2ee3['isForwarde'+'d']=!![],_0x1c2ee3['sendEpheme'+_0x5a3069(0xddc,0x1078,0x101a,0x13ad)]=!![],_0x1c2ee3[_0x5a3069(0x456,0x2da,0x710,0xc6d)+'Reply']=_0x2a0510;const _0x394881={};_0x394881[_0x5f09b6(0x6b0,0x42d,0x825,0x2f6)+'o']=_0x1c2ee3,_0x394881[_0x5a3069(0x3f5,0xb36,0x7ae,0xba7)]=res[-0xd28+-0x18ed*-0x1+-0xbc5][_0x5a3069(0x29e,0x642,0x52b,0x214)],_0x394881[_0x5f09b6(-0x193,0x36e,0x508,0x366)]=res[-0x26b4+-0x206f*0x1+-0x1*-0x4723][_0x5f09b6(0x2e2,0x750,0xb40,0x7bc)],_0x394881[_0x5f09b6(-0x4f0,-0x3bb,-0x229,-0x1bf)]=fgclink,_0x394881['thumbnail']=pp_bot2,alpha[_0x5a3069(0x61d,0x718,0xae0,0x694)+'e'](from,mdf,MessageType[_0x5f09b6(0x722,0x115,0x598,0x387)],_0x394881);}break;case _0x5f09b6(-0x5d3,0xc8,-0x402,-0x19b):case _0x5f09b6(-0xe1,0x6f3,0x8f8,0x4ae):case _0x5f09b6(0x53b,0x6c7,0x450,0x6e9):case _0x5a3069(0xd85,0xa83,0xf60,0xaf5)+'rts':{const _0x1dec61={};_0x1dec61['displayTex'+'t']='Check\x20Limi'+'t';const _0x51394b={};_0x51394b[_0x5a3069(0x56b,0x26e,0x6b1,0x3fa)]=_0x5f09b6(0xbbd,0x758,0xe64,0x91a),_0x51394b['buttonText']=_0x1dec61,_0x51394b[_0x5f09b6(0x796,0x2ac,0x9ce,0x663)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x5a3069(0xd2b,0xa89,0xfe3,0x125a)](prefix),'©\x20'+ownername,[_0x51394b]);if(args[_0x5f09b6(-0x2c3,0x8c,0xc2,0x15)]===0x211a+-0xb9*-0x7+-0x1*0x2629)return reply(_0x5f09b6(-0x1b0,0x1b5,0x60,0x162)+'ntah\x20*'+prefix+(_0x5a3069(0x37a,0x49c,0x68d,0x8be)+'kYt]*'));let isLinks2=args[0x161b*-0x1+-0xbc2+0x1*0x21dd][_0x5f09b6(0x9b8,0x1c7,0x561,0x6bf)](/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);if(!isLinks2)return reply(mess['error']['Iv']);try{pp_userb=await alpha[_0x5f09b6(0x6e7,0x183,-0x61,0x288)+_0x5a3069(0xf0,0x88f,0x53a,0x6e4)](sender);}catch{pp_userb=_0x5a3069(0x2f2,0x2bf,0x54a,0x6dd)+_0x5a3069(0x1ef,0x8d0,0x6ac,0x2bb)+_0x5a3069(0x5f7,0x736,0x88e,0x321)+_0x5a3069(0xbc3,0x8bb,0x8b2,0x668)+'g';}let pp_userz=await getBuffer(pp_userb);function ytMp4(_0x3d2b1e){function _0x12fb96(_0x3034fe,_0x3a9a04,_0x3239f8,_0x5ddb74){return _0x5f09b6(_0x3a9a04,_0x3a9a04-0x63,_0x3239f8-0xf2,_0x3034fe- -0x6f);}function _0x100f38(_0x5e6c1a,_0x305e86,_0x159c6d,_0x32b081){return _0x5f09b6(_0x32b081,_0x305e86-0x106,_0x159c6d-0x180,_0x159c6d- -0x61);}const _0x9367bc={'jDpdo':function(_0x51fc89,_0x383bae,_0x24cc31,_0x41c236,_0x4c4461,_0x191f59,_0x5dd980){return _0x51fc89(_0x383bae,_0x24cc31,_0x41c236,_0x4c4461,_0x191f59,_0x5dd980);},'JVtfz':_0x100f38(0x13f,-0x2d3,0x99,0x18),'kQlYp':function(_0x2075d1,_0xec2fa0){return _0x2075d1==_0xec2fa0;},'AvlAt':_0x100f38(0x13a,0x70,0x2ff,0x20d),'ECqGD':function(_0x1db7e6,_0x556f5f){return _0x1db7e6(_0x556f5f);}};return new Promise(async(_0x9da015,_0xe68354)=>{function _0x4a581d(_0x278038,_0x409a6f,_0x3ff9f0,_0x1e4e09){return _0x12fb96(_0x409a6f-0x1e2,_0x278038,_0x3ff9f0-0x160,_0x1e4e09-0x53);}const _0x2bdb7b={'iyQib':function(_0x55c9e2,_0x47683b,_0x1498eb,_0x296c28,_0x4365ec,_0x47edb0,_0x1fb7fe){function _0x3a4dd0(_0x2f399c,_0x4ffcd0,_0xf2fc3c,_0x5e9646){return _0x4c05(_0xf2fc3c- -0xd,_0x5e9646);}return _0x9367bc[_0x3a4dd0(0x742,0xd7b,0xc1b,0xb30)](_0x55c9e2,_0x47683b,_0x1498eb,_0x296c28,_0x4365ec,_0x47edb0,_0x1fb7fe);},'ULlJR':_0x9367bc['JVtfz'],'aHcOt':function(_0x5c079a,_0x5be233){function _0x5da7cd(_0xa7ffb1,_0x441d4f,_0x3c15d2,_0x2381dc){return _0x4c05(_0xa7ffb1- -0x3c0,_0x3c15d2);}return _0x9367bc[_0x5da7cd(0x7fe,0xd76,0x5ec,0xb27)](_0x5c079a,_0x5be233);},'Gbass':_0x9367bc[_0x81cf44(0x2c6,0x4a0,0x9ca,0x565)],'kyRsf':function(_0x2ca1df,_0x16505b){function _0x3ca5a2(_0x1a1dbe,_0x500ac4,_0x1d53ff,_0xe1c5e1){return _0x81cf44(_0x1a1dbe-0x128,_0x1d53ff,_0x1d53ff-0xc4,_0x500ac4-0xf9);}return _0x9367bc[_0x3ca5a2(0x583,0x986,0x70f,0x4b3)](_0x2ca1df,_0x16505b);}};function _0x81cf44(_0x472919,_0x55688f,_0x443c55,_0x584d8a){return _0x12fb96(_0x584d8a-0x4b6,_0x55688f,_0x443c55-0x1ba,_0x584d8a-0x9d);}ytdl['getInfo'](_0x3d2b1e)[_0x4a581d(0xb98,0x5fb,0x6e9,0x1d2)](async _0x408a2d=>{const _0x30f1ac={'UUNwG':function(_0x162973,_0x69cd55,_0x5d6071,_0x45521b,_0x14959d,_0x14163e,_0x515361){function _0x3c688e(_0x114183,_0x8b3c55,_0x44b7b5,_0x477f61){return _0x4c05(_0x44b7b5- -0x283,_0x8b3c55);}return _0x2bdb7b[_0x3c688e(0x4a5,-0x360,0x128,0x1a1)](_0x162973,_0x69cd55,_0x5d6071,_0x45521b,_0x14959d,_0x14163e,_0x515361);},'zCqrk':_0x2bdb7b[_0x9026c1(0x86d,0xcd2,0x1023,0xd6c)]};let _0x40ff27=[];for(let _0x5066a9=-0x617*0x1+-0x18fe+0x1f15;_0x5066a9<_0x408a2d[_0x5a5987(0xb22,0x5f8,0xa24,0x7a)]['length'];_0x5066a9++){let _0x3c0748=_0x408a2d['formats'][_0x5066a9];if(_0x2bdb7b[_0x5a5987(0xb65,0xb47,0xbcd,0xbd2)](_0x3c0748[_0x5a5987(0xb6c,0x78a,0x7dd,0x41e)],_0x9026c1(0x137,0x2db,-0x279,-0x2ad))&&_0x3c0748[_0x9026c1(0xa35,0x807,0x3bc,0x6aa)]==!![]&&_0x3c0748['hasAudio']==!![]){if(_0x2bdb7b['Gbass']!==_0x2bdb7b[_0x5a5987(0xbac,0xa7c,0x7c9,0x9ab)]){const _0x5c1f0a={};_0x5c1f0a[_0x9026c1(0xc38,0x6dd,0x1f5,0x35a)+'t']='🐨\x20Owner';const _0x6a67d1={};_0x6a67d1[_0x5a5987(0x80f,0x5aa,0x112,0x824)]=_0x9026c1(0x588,0x7f8,0x9d4,0x757),_0x6a67d1['buttonText']=_0x5c1f0a,_0x6a67d1[_0x5a5987(0x7bf,0xc25,0xaf3,0xc2d)]=0x1;const _0x1f4f81={};_0x1f4f81[_0x5a5987(0xce4,0x836,0xc9f,0xcc4)+'t']=_0x5a5987(0xe42,0xb42,0xa31,0xffe)+'a',_0x30f1ac[_0x5a5987(0x5c6,0x837,0xcf0,0xb33)](_0x1d6972,_0x2ef0f2[_0x9026c1(0x5c5,0x9b1,0x9c7,0xe2e)],_0x5a5987(0xfa3,0xd9c,0xb5f,0xe5c)+'*'+_0x1ecb28+_0x2904a6+_0x4fc033,''+_0x9e6a70+_0x5922b1+_0x4e0d02+_0x46e155+_0x1c7a83+'©\x20'+_0x20e52a,_0x32962a,[_0x6a67d1,{'buttonId':_0x30f1ac['zCqrk'],'buttonText':_0x1f4f81,'type':0x1}],{});}else{let {qualityLabel:_0xdd8d5b,contentLength:_0x3512f6}=_0x3c0748,_0xbbaf7=await bytesToSize(_0x3512f6);const _0x1aaa83={};_0x1aaa83['video']=_0x3c0748['url'],_0x1aaa83[_0x5a5987(0xbb9,0x60c,0xa53,0x5a2)]=_0xdd8d5b,_0x1aaa83[_0x5a5987(0x875,0x9d3,0xac1,0x729)]=_0xbbaf7,_0x40ff27[_0x5066a9]=_0x1aaa83;}};};let _0x31a537=_0x40ff27[_0x5a5987(0x11a3,0xcc3,0x88f,0xc56)](_0x5d5adc=>_0x5d5adc[_0x5a5987(0xd5f,0xee0,0xd49,0x123c)]!=undefined&&_0x5d5adc[_0x9026c1(0xbaf,0x87a,0x967,0xba8)]!=undefined&&_0x5d5adc[_0x5a5987(0x4fd,0x60c,0x369,0x2bc)]!=undefined),_0x1d710b=await axios[_0x5a5987(0xc76,0xf1a,0xccd,0x13fc)](_0x5a5987(-0x1b2,0x401,0x86c,0x92e)+'nyurl.com/'+'api-create'+_0x9026c1(0x983,0x409,0x88a,0x5e9)+_0x31a537[-0xa0*-0x1b+-0x1b9e+-0x19*-0x6e][_0x5a5987(0x10a0,0xee0,0x109a,0xc23)]),_0x58df9e=_0x1d710b[_0x5a5987(0xda5,0x93a,0x69f,0x3ee)],_0x1b987d=_0x408a2d[_0x5a5987(0xea4,0xeae,0xecc,0xebf)+'ls']['title'],_0x45e9b1=_0x408a2d[_0x9026c1(0xd1a,0xd55,0x11fd,0xf73)+'ls'][_0x5a5987(0xdc5,0x81e,0x5a4,0xdaf)+'n'],_0x44e07d=_0x408a2d[_0x9026c1(0xbc7,0xd55,0xefe,0x955)+'ls']['viewCount'],_0x3d36cc=_0x408a2d[_0x5a5987(0xea9,0xeae,0xcf2,0x106b)+'ls'][_0x5a5987(0x309,0x3e2,-0x20,0xa9)],_0x4e907=_0x408a2d[_0x5a5987(0x1014,0xeae,0x10a9,0xba3)+'ls'][_0x5a5987(0x92a,0x4c0,0x2ef,0x582)];function _0x5a5987(_0x49252e,_0x200e15,_0x5bd27a,_0x340108){return _0x4a581d(_0x5bd27a,_0x200e15-0x44f,_0x5bd27a-0x165,_0x340108-0xbf);}let _0xe8a124=_0x408a2d[_0x5a5987(0xe51,0xeae,0xe61,0xe69)+'ls'][_0x9026c1(0x405,0x683,0xaf1,0x2ac)+'elName'],_0x28bd03=_0x408a2d[_0x5a5987(0x11a6,0xeae,0xaae,0xd3c)+'ls'][_0x9026c1(0x2b5,0x6f7,0x78f,0x7f5)],_0x5e0d8f=_0x408a2d[_0x5a5987(0x78e,0xa8a,0x866,0x65b)+'ponse'][_0x5a5987(0xc29,0xee3,0x128a,0xf3e)+'t']['playerMicr'+'oformatRen'+_0x9026c1(0x7b0,0xd09,0x99b,0x88a)][_0x5a5987(0xb28,0xdc3,0x8dd,0x1351)][_0x9026c1(0x62a,0x332,0x167,0x12d)][-0x1efe+0x55d+0x19a1][_0x9026c1(0x2fd,0x866,0x8e9,0x2fe)];const _0x51f664={};_0x51f664['title']=_0x1b987d,_0x51f664['result']=_0x58df9e,_0x51f664[_0x5a5987(0x25b,0x60c,0x35e,0x25b)]=_0x31a537[0x2484+-0x2166+-0x31e][_0x9026c1(0x72f,0x4b3,-0x55,0x6d3)],_0x51f664[_0x5a5987(0x449,0x9d3,0x698,0x5a8)]=_0x31a537[0x3ad+-0x16*0x30+-0x1*-0x73]['size'],_0x51f664[_0x9026c1(0x9cd,0x822,0x3bc,0xc84)]=_0x5e0d8f;function _0x9026c1(_0x1e7ed0,_0x7de8a6,_0x304691,_0x10fe71){return _0x81cf44(_0x1e7ed0-0x1f3,_0x10fe71,_0x304691-0x3c,_0x7de8a6-0x22);}_0x51f664[_0x9026c1(0xe40,0x914,0xd4a,0xa74)]=_0x44e07d,_0x51f664[_0x9026c1(0x5ad,0x289,0x5d3,-0x204)]=_0x3d36cc,_0x51f664[_0x9026c1(0xaa9,0x94a,0xcde,0x6c4)]=_0x4e907,_0x51f664[_0x9026c1(0xeb0,0x9d4,0x875,0xc71)]=_0xe8a124,_0x51f664[_0x9026c1(0x593,0x6f7,0x70b,0x402)]=_0x28bd03,_0x51f664[_0x5a5987(0x8bd,0xa0c,0x7e2,0x828)]=_0x45e9b1,_0x2bdb7b['kyRsf'](_0x9da015,_0x51f664);})[_0x81cf44(0x5e3,0x79e,0x515,0x930)](_0xe68354);});};let yut=await yts(args[-0x1c73*0x1+-0xfd7+0x1*0x2c4a]);reply(lang[_0x5a3069(0x39a,0x8f8,0x70a,0x30e)]()),ytMp4(args[0xe58+0x1982+0x2*-0x13ed])[_0x5f09b6(0x151,0x321,0x49d,0x488)](_0x2f884f=>{function _0x5a66d4(_0x4e5e05,_0x293b05,_0x58eaac,_0x3365a0){return _0x5f09b6(_0x58eaac,_0x293b05-0x55,_0x58eaac-0x52,_0x4e5e05-0x361);}const _0x535a05={'PAIRt':function(_0x225f16,_0x37415a){return _0x225f16(_0x37415a);},'uNjGj':_0x2091f4(0x7d7,0xedf,0x974,0xbff),'tlhHp':function(_0x4af9c2,_0x48f212,_0x10d264,_0x4087fa){return _0x4af9c2(_0x48f212,_0x10d264,_0x4087fa);},'ReYks':_0x2091f4(0x5b9,0x524,0x2d4,-0x2e),'JRQYP':function(_0x212cbe,_0x4c141c,_0x1b07f4,_0x265469,_0xcb8479,_0x177245,_0x50a0b2){return _0x212cbe(_0x4c141c,_0x1b07f4,_0x265469,_0xcb8479,_0x177245,_0x50a0b2);},'uEPob':_0x5a66d4(0x3ff,-0x5b,0x712,0x450)+'utu.be/1r_'+_0x5a66d4(0x92e,0xac2,0x887,0x6cd),'EiCQX':'video/mp4'};function _0x2091f4(_0xfeb28e,_0x341bf4,_0x491206,_0x19126c){return _0x5a3069(_0xfeb28e-0x155,_0x341bf4-0x40,_0x491206- -0x48b,_0xfeb28e);}const {title:_0x4a29f0,result:_0x4fe221,quality:_0x535ecd,size:_0x507dbb,thumb:_0x33cc5b,views:_0x366906,likes:_0x4d54a8,dislike:_0x12cffa,channel:_0x236cb8,uploadDate:_0x30bde7,desc:_0xddea92}=_0x2f884f;axios['get'](_0x5a66d4(0x1a0,0x4d9,0x2cc,0x54)+_0x5a66d4(0xac4,0xeca,0x663,0xc7d)+_0x5a66d4(0x3a9,-0x102,0x66e,0x6bf)+_0x2091f4(-0x108,-0xd3,0x1de,-0x362)+q)[_0x2091f4(0xa9c,0x987,0x6c6,0x70b)](async _0x51a79c=>{if(_0x535a05[_0x4e83ee(0x5d3,0x901,0x7ee,0xc07)](Number,_0x507dbb['replace'](_0x535a05[_0xc5e5a5(0xe1a,0xde8,0xdc6,0x868)],''))>=-0x15ee+0xb*0x2c8+-0x86e)return _0x535a05[_0xc5e5a5(0x127f,0x122e,0x11fc,0x104d)](sendMediaURL,from,_0x33cc5b,_0x4e83ee(-0x38e,0x18,0x2cd,-0x430)+_0x4e83ee(0x854,0x683,0xaf5,0x3d8)+_0x4e83ee(-0x4b9,-0x3c,0xbc,-0x354)+enter+enter+(_0xc5e5a5(0x4cf,0x356,0x7b5,0x7ed)+'*\x20')+_0x4a29f0+(_0xc5e5a5(0xd90,0x1504,0x13c8,0x10b7)+_0x4e83ee(-0xf,0x451,0x11f,0x8e))+_0x535ecd+('\x0a*⚙️\x20Size\x20:'+'*\x20')+_0x507dbb+(_0x4e83ee(0x14c,0x25a,-0x2f3,0xc0)+_0xc5e5a5(0xa1e,0x117e,0x118c,0xc22))+_0x366906+(_0x4e83ee(0x3b7,0x7bf,0xc10,0xace)+_0x4e83ee(0x8f7,0x4da,0x96c,-0xa5))+_0x4d54a8+(_0x4e83ee(0x32a,0x5f5,0x9fc,0x3ae)+_0x4e83ee(-0x31d,0x154,0x63a,0x26c))+_0x12cffa+(_0xc5e5a5(0x6be,0x61d,0x85c,0xb09)+_0xc5e5a5(0x749,0x89a,0x6c5,0x7ee))+_0x236cb8+(_0x4e83ee(-0x24e,-0x122,0x6d,-0x257)+_0xc5e5a5(0x9c0,0xecb,0x888,0xa1b))+_0x30bde7+_0x4e83ee(0x68e,0x288,0x21d,0x452)+_0x4fe221+enter+enter+(_0x4e83ee(0x6f3,0x6a1,0x46f,0x350)+_0x4e83ee(0x369,0x472,-0x131,0x4c)+_0xc5e5a5(0xe9d,0x95d,0xd8b,0xd7e)+'\x20disajikan'+_0x4e83ee(0x62,0x175,0x359,-0xf4)+_0xc5e5a5(0x101e,0x8e2,0xd99,0xc42)));const _0x2fef33='*----「\x20YOU'+'TUBE\x20VIDEO'+'\x20」----*\x0a\x09\x09'+_0x4e83ee(0x60d,0x436,0x1,0x8df)+_0x4e83ee(0x81e,0x5ae,0x414,0x627)+_0x4a29f0+(_0x4e83ee(0xeb7,0x96f,0xb27,0x7c2)+_0xc5e5a5(0x678,0xc3c,0xb65,0xb99))+_0x535ecd+(_0xc5e5a5(0x94f,0x659,0x273,0x70a)+'*\x20')+_0x507dbb+(_0x4e83ee(-0x2f7,0x25a,-0x313,0x5fd)+_0xc5e5a5(0xb34,0x7cf,0xf89,0xc22))+_0x366906+(_0xc5e5a5(0x10a6,0x9f9,0xb30,0xf07)+':*\x20')+_0x4d54a8+(_0x4e83ee(0x27e,0x5f5,0x5a1,0x643)+_0xc5e5a5(0xd59,0x604,0x2fe,0x89c))+_0x12cffa+(_0xc5e5a5(0xd6b,0x758,0xa0c,0xb09)+_0xc5e5a5(0xd71,0x63b,0xd28,0x7ee))+_0x236cb8+(_0x4e83ee(-0x612,-0x122,0x133,0x3e9)+'\x20:*\x20')+_0x30bde7+('\x0a*🌀\x20Url\x20:*'+'\x20')+q+(_0x4e83ee(0x38d,0x6f0,0x898,0x930)+_0x4e83ee(-0x426,0x17b,0x330,0x266)+_0x4e83ee(0x217,0x2ee,-0xa8,-0x2b7)+_0x4e83ee(0x523,-0x5c,-0x550,-0x51b));let _0x10974d=await _0x535a05[_0xc5e5a5(0x1543,0xc89,0x1063,0x1049)](getBuffer,_0x33cc5b);const _0x5db0d3={};_0x5db0d3[_0xc5e5a5(0xcd9,0xbd4,0xece,0x9ca)+'t']='OWNER';const _0x2fa568={};_0x2fa568[_0xc5e5a5(0x285,0x879,0x691,0x73e)]=_0xc5e5a5(0xb41,0xd3d,0xd20,0xc94),_0x2fa568[_0xc5e5a5(0x94b,0x98c,0x82d,0xbfb)]=_0x5db0d3,_0x2fa568[_0x4e83ee(0x265,0x671,0x17b,0xae2)]=_0x535a05[_0x4e83ee(0x232,-0x3b,0x100,-0x5ed)];let _0x2b8ac0=[_0x2fa568];await _0x535a05[_0x4e83ee(0x36b,-0x8b,0x49b,0x315)](sendButLocation,from,_0x2fef33,_0xc5e5a5(0xedf,0x1379,0xd68,0xfce)+enter+(_0x4e83ee(0x7ca,0x916,0xe07,0x414)+_0x4e83ee(0x454,0x751,0x637,0x3e8)+_0xc5e5a5(0xe4a,0xe78,0xa1f,0xf70)+_0x4e83ee(-0x48f,-0x48,0x395,0x21d)+'ton\x20silahk'+_0x4e83ee(0x2d6,-0x175,-0x485,0xb2)+_0x4e83ee(0x6d7,0x1f5,0x140,0x4e7)+_0x4e83ee(0x45b,0xac,0x413,0x104)+'utu.be/ERG'+'ID4Fmo9w')+enter+enter+'©\x20'+ownername,_0x10974d,_0x2b8ac0,{});function _0xc5e5a5(_0xdd039f,_0x22a045,_0x123033,_0x83c43){return _0x2091f4(_0x123033,_0x22a045-0x18b,_0x83c43-0x518,_0x83c43-0x87);}let _0x1c52ae=await _0x535a05[_0xc5e5a5(0x121a,0x12b7,0xbdf,0x1049)](getBuffer,_0x4fe221);const _0x5460a4={};_0x5460a4['mediaUrl']=_0x535a05[_0x4e83ee(0xa8a,0x84a,0x3ec,0x3f1)],_0x5460a4[_0x4e83ee(0x740,0x613,0x5a4,0x685)]=0x2,_0x5460a4[_0xc5e5a5(0xbb3,0xa0f,0x12bd,0xed3)]=_0x4e83ee(0x56f,0x578,0x207,0x30)+'4',_0x5460a4['body']='',_0x5460a4['thumbnailU'+'rl']='',_0x5460a4[_0xc5e5a5(0xeb2,0xdb6,0x11bf,0xf57)]=pp_userz;function _0x4e83ee(_0x29a4b2,_0x20f389,_0x180924,_0x1f2b10){return _0x5a66d4(_0x20f389- -0x353,_0x20f389-0x136,_0x180924,_0x1f2b10-0x10a);}const _0x4b8c23={};_0x4b8c23[_0xc5e5a5(0x89f,0x576,0x9c4,0x64e)+_0xc5e5a5(0x4f2,0x956,0x7c0,0x9b7)]=0x3b9aca00,_0x4b8c23['isForwarde'+'d']=!![],_0x4b8c23[_0xc5e5a5(0x387,0xba,0xa3c,0x569)+_0xc5e5a5(0x15db,0x10c5,0xcbd,0x10a7)]=!![],_0x4b8c23['externalAd'+_0xc5e5a5(0xc10,0xa68,0x9fb,0x923)]=_0x5460a4;const _0x276012={};_0x276012[_0xc5e5a5(0xebc,0xc9e,0xfa0,0xa4c)+'o']=_0x4b8c23,_0x276012[_0x4e83ee(0x5b4,0xf3,-0x3a0,0xb4)]=_0x535a05[_0xc5e5a5(0x53f,0x679,0x808,0x964)],_0x276012[_0x4e83ee(0x6f6,0x374,0x33c,0x3b5)]=_0x4a29f0+_0x4e83ee(0x1eb,0x6ac,0x1ca,0x76e),_0x276012[_0xc5e5a5(0x2b6,0x5c3,0x984,0x597)]=fgclink2,_0x276012[_0x4e83ee(0x597,0x80f,0x9b5,0x79c)]=pp_bot2,alpha[_0xc5e5a5(0x63d,0x1015,0xb14,0xb6d)+'e'](from,_0x1c52ae,MessageType[_0xc5e5a5(0xe79,0xd59,0x657,0xadd)],_0x276012);});})['catch'](_0x4c340b=>reply('Server\x20err'+'or')),await limitAdd(sender,limit);}break;case _0x5a3069(0x130c,0x125e,0xfd4,0x12b0):case _0x5a3069(0xcea,0xcf4,0xfe7,0xf0b):{const _0x20636c={};_0x20636c[_0x5a3069(0xdcd,0xd95,0x93d,0x4cc)+'t']=_0x5a3069(0x809,0x71f,0xb19,0x737)+'t';const _0x3dc815={};_0x3dc815[_0x5f09b6(-0x504,-0x4a6,0x1ac,-0x18)]='limit',_0x3dc815[_0x5a3069(0xfed,0xda9,0xb6e,0xcd3)]=_0x20636c,_0x3dc815[_0x5f09b6(0xb7d,0x284,0x93d,0x663)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang['limit'](prefix),'©\x20'+ownername,[_0x3dc815]);if(args[_0x5a3069(0x4e3,0xb54,0x6de,0x959)]===0x59b+-0xd5a+0x7bf)return reply(_0x5f09b6(0x301,-0x2dc,-0x285,0x162)+_0x5f09b6(0x5ca,0x2ab,0x692,0x3f1)+prefix+(_0x5f09b6(0x6e5,0x70c,0xba8,0x615)+_0x5a3069(0xc38,0xa20,0xb10,0xab5)+'yang\x20akan\x20'+_0x5f09b6(0x581,0xc40,0x6a7,0x880)));var srch=args[_0x5f09b6(0xa30,0x19e,0x290,0x49d)]('');aramas=await yts(srch),server=_0x5f09b6(0x3ab,-0x6de,-0x120,-0x17d),aramat=aramas[_0x5f09b6(-0x90,-0x159,-0x316,0x6c)];var mulaikah=aramat[-0x109b+0x8*0x343+-0x97d][_0x5f09b6(0x7cc,0x3c2,0x617,0x3fd)];function ytMp4(_0x2f86df){function _0x12cab9(_0x4a7db0,_0x2ad2d4,_0x2a5c21,_0x1a2c7f){return _0x5a3069(_0x4a7db0-0x138,_0x2ad2d4-0xef,_0x4a7db0- -0x663,_0x2ad2d4);}function _0x437f74(_0x12e6b8,_0x5ae803,_0x42dc24,_0x4f5ae3){return _0x5f09b6(_0x42dc24,_0x5ae803-0x7d,_0x42dc24-0x11b,_0x4f5ae3-0x488);}const _0x181bfa={'PDHNE':function(_0x2da019,_0x556025){return _0x2da019(_0x556025);},'cekZg':_0x12cab9(0x813,0x289,0x61c,0xb27)+_0x12cab9(0x889,0x72a,0xddb,0xa33),'JWqVA':function(_0x478c37,_0x2729cd){return _0x478c37===_0x2729cd;},'OAyAp':'QeIIh','ynEMC':_0x12cab9(0xc5,0x2b1,-0x1a7,0x1ea),'elfqr':function(_0x2216b3,_0x33e48f){return _0x2216b3<_0x33e48f;},'RyfFN':function(_0x50a2a6,_0x23e0e7){return _0x50a2a6!==_0x23e0e7;},'emxsJ':function(_0x28e487,_0x4465d6){return _0x28e487==_0x4465d6;},'wJbrz':_0x437f74(0x551,0x408,0x268,0x2fa),'uKXlU':function(_0x5b1059,_0x22110d){return _0x5b1059==_0x22110d;},'YseTl':function(_0x7b344b,_0x20d224){return _0x7b344b(_0x20d224);}};return new Promise(async(_0x307b36,_0x220bc0)=>{const _0xde8270={};_0xde8270['lStjs']=_0x121257(-0x27,0x526,0x9e8,0xa3)+_0x121257(0x89f,0x688,0x913,0x27e)+_0x50e0aa(0x8bd,0x769,0xadb,0x6e6)+_0x50e0aa(0x8e1,0xe15,0xa4f,0x6e5)+'g';function _0x121257(_0x3e0037,_0x4be173,_0x15c1ef,_0x2e02ba){return _0x437f74(_0x3e0037-0x12e,_0x4be173-0xa,_0x15c1ef,_0x4be173-0x21d);}const _0x43fc3e=_0xde8270;function _0x50e0aa(_0x43470c,_0x5ee3f9,_0x1e24f6,_0x466f78){return _0x437f74(_0x43470c-0xaa,_0x5ee3f9-0x16e,_0x1e24f6,_0x43470c-0x270);}ytdl[_0x121257(0xe88,0x9b4,0xa70,0xd2e)](_0x2f86df)[_0x50e0aa(0xb80,0x779,0xd8d,0x957)](async _0x1b7679=>{const _0x5cf330={'lxxrH':function(_0x1b0e1d,_0x2ec12d){function _0x5a005c(_0x3c3f5f,_0x4f0326,_0x1ace81,_0x145e9a){return _0x4c05(_0x3c3f5f-0x1d,_0x1ace81);}return _0x181bfa[_0x5a005c(0x228,-0x319,0x19a,0x398)](_0x1b0e1d,_0x2ec12d);},'RDDts':_0x181bfa['cekZg']};function _0x3520e6(_0x4a8d70,_0x19f288,_0x1d2635,_0x57e453){return _0x121257(_0x4a8d70-0x1c0,_0x19f288- -0x27,_0x4a8d70,_0x57e453-0x158);}function _0x3d7e9e(_0x3b85eb,_0xbfc811,_0x47d348,_0x53dca3){return _0x50e0aa(_0x3b85eb- -0x60,_0xbfc811-0x1e,_0x47d348,_0x53dca3-0xcd);}if(_0x181bfa[_0x3d7e9e(0xf3b,0xffa,0x9b2,0xeba)](_0x181bfa[_0x3d7e9e(0x83b,0x5a3,0x740,0x676)],_0x181bfa[_0x3520e6(0xb86,0x96e,0x816,0xe5e)]))_0x5cf330[_0x3520e6(0xbf8,0xa54,0xa30,0x9a9)](_0x5db51b,_0x5cf330[_0x3520e6(0xd36,0xb92,0x8d5,0x941)]);else{let _0x3a11eb=[];for(let _0x5868c3=-0x1*0x163a+-0x779*-0x3+0x31*-0x1;_0x181bfa[_0x3520e6(0xfbf,0xfa1,0x1329,0x1457)](_0x5868c3,_0x1b7679['formats'][_0x3d7e9e(0x6ad,0x768,0xa10,0x329)]);_0x5868c3++){if(_0x181bfa[_0x3520e6(0x83e,0xc3b,0xeef,0x1033)](_0x3d7e9e(0x8a0,0xa60,0xc4a,0xa36),_0x3d7e9e(0xfa4,0xa34,0xa50,0x1249))){let _0x34843f=_0x1b7679[_0x3d7e9e(0x6ce,0x12c,0x8e1,0x80b)][_0x5868c3];if(_0x181bfa['emxsJ'](_0x34843f[_0x3d7e9e(0x860,0x3d4,0x43b,0x9b9)],_0x181bfa[_0x3520e6(0x626,0x81a,0x9fd,0x68f)])&&_0x181bfa[_0x3520e6(0x823,0x59d,0x689,0x253)](_0x34843f['hasVideo'],!![])&&_0x181bfa[_0x3520e6(0xa0d,0xe2a,0x12d1,0xc3a)](_0x34843f['hasAudio'],!![])){let {qualityLabel:_0x5a06ee,contentLength:_0x268718}=_0x34843f,_0x4c08f4=await bytesToSize(_0x268718);const _0x190caa={};_0x190caa[_0x3d7e9e(0xfb6,0xcf9,0x1513,0x13d5)]=_0x34843f[_0x3520e6(0xf3b,0xa7b,0xaa6,0x685)],_0x190caa['quality']=_0x5a06ee,_0x190caa[_0x3d7e9e(0xaa9,0xd14,0x77f,0x841)]=_0x4c08f4,_0x3a11eb[_0x5868c3]=_0x190caa;};}else _0x172df0=_0x43fc3e[_0x3d7e9e(0xde7,0xdd0,0xd80,0x867)];};let _0x4f385e=_0x3a11eb[_0x3d7e9e(0xd99,0xbeb,0xbfc,0xb12)](_0xe89e42=>_0xe89e42['video']!=undefined&&_0xe89e42[_0x3d7e9e(0xaa9,0xa6c,0x699,0xd50)]!=undefined&&_0xe89e42[_0x3d7e9e(0x6e2,0x61a,0x50a,0xaae)]!=undefined),_0x517183=await axios[_0x3d7e9e(0xff0,0x1296,0x10ed,0xc7a)](_0x3520e6(0x241,0x4bd,-0xf9,0x1ae)+_0x3520e6(0x134f,0xde1,0xbb8,0xebf)+_0x3d7e9e(0x6e0,0x7a3,0x931,0xb2e)+_0x3d7e9e(0x638,0x353,0x188,0xac0)+_0x4f385e[-0x2*-0xd15+0xc*0x99+-0x2156][_0x3520e6(0x14fa,0xf9c,0x13ac,0x1097)]),_0xb99d0f=_0x517183[_0x3520e6(0x558,0x9f6,0x8ef,0xd7c)],_0x1a92be=_0x1b7679[_0x3d7e9e(0xf84,0xe8d,0x11c9,0x1312)+'ls'][_0x3520e6(0xbb6,0xdfb,0x1150,0x99b)],_0x54e91d=_0x1b7679[_0x3d7e9e(0xf84,0x105a,0xbb4,0x1097)+'ls'][_0x3d7e9e(0x8f4,0x69a,0xc9b,0x590)+'n'],_0x306a9f=_0x1b7679['videoDetai'+'ls'][_0x3520e6(0x1012,0xabc,0xc39,0x6fd)],_0x12944a=_0x1b7679[_0x3d7e9e(0xf84,0x1172,0x1359,0x144c)+'ls'][_0x3d7e9e(0x4b8,0xc2,0x278,0x18e)],_0x41888c=_0x1b7679['videoDetai'+'ls'][_0x3520e6(0x11e,0x57c,0x80c,0x707)],_0x7f1dd7=_0x1b7679[_0x3520e6(0xefd,0xf6a,0x126c,0x1065)+'ls'][_0x3d7e9e(0x8b2,0x8c9,0x986,0x453)+'elName'],_0x58221a=_0x1b7679[_0x3520e6(0xe41,0xf6a,0xa67,0x118c)+'ls'][_0x3d7e9e(0x926,0xdc1,0x598,0x693)],_0xf68816=_0x1b7679['player_res'+'ponse']['microforma'+'t']['playerMicr'+'oformatRen'+'derer'][_0x3520e6(0x13e0,0xe7f,0x8f4,0xb2d)][_0x3520e6(0x31e,0x547,0x258,0xad7)][0x410+-0x2640+0x2*0x1118][_0x3520e6(0xd4a,0xa7b,0x89c,0xef0)];const _0x3fc96d={};_0x3fc96d[_0x3d7e9e(0xe15,0xcc1,0xcd9,0x9e2)]=_0x1a92be,_0x3fc96d[_0x3520e6(0xb02,0x694,0xa60,0x986)]=_0xb99d0f,_0x3fc96d[_0x3520e6(0x127,0x6c8,0xc5a,0x6f9)]=_0x4f385e[0x25f9+-0x1*-0x1c2b+-0x4224][_0x3d7e9e(0x6e2,0xa36,0x978,0x563)],_0x3fc96d[_0x3d7e9e(0xaa9,0xf04,0x584,0x857)]=_0x4f385e[-0x1*0x19c4+-0x7d2+0x2196][_0x3520e6(0x897,0xa8f,0xe1c,0xa1a)],_0x3fc96d[_0x3520e6(0xc28,0xa37,0x8e8,0xcb0)]=_0xf68816,_0x3fc96d[_0x3d7e9e(0xb43,0xcc3,0x6c0,0xcf5)]=_0x306a9f,_0x3fc96d['likes']=_0x12944a,_0x3fc96d[_0x3520e6(0xb7f,0xb5f,0xe2b,0xb93)]=_0x41888c,_0x3fc96d[_0x3520e6(0x8eb,0xbe9,0xf5c,0x1147)]=_0x7f1dd7,_0x3fc96d['uploadDate']=_0x58221a,_0x3fc96d[_0x3d7e9e(0xae2,0x6b3,0xce6,0xf4a)]=_0x54e91d,_0x181bfa[_0x3520e6(0xd50,0x7e8,0x746,0x8bf)](_0x307b36,_0x3fc96d);}})['catch'](_0x220bc0);});};reply(lang[_0x5a3069(0x24c,0x48e,0x70a,0x73b)]()),ytMp4(mulaikah)[_0x5f09b6(0x8e7,0x629,0x9d6,0x488)](_0x174c77=>{const _0x565614={'mtlOO':'1|2|0|3|4','uMIYb':function(_0x41b8ae,_0x15096c){return _0x41b8ae*_0x15096c;},'fTMaD':_0x36a335(0x797,0xfd5,0xa4d,0x955),'pOkJb':function(_0x2260df,_0x29da78){return _0x2260df(_0x29da78);},'JRymD':_0x4c7b9b(0x43a,0x73f,0x45d,0x9e8)+_0x36a335(0x9b9,0x1290,0xe21,0xc37)+'nks\x20to','PRJGz':_0x4c7b9b(0x541,0x2a3,-0x26,0x319)+_0x4c7b9b(0x970,0x860,0xbee,0x94b)+_0x36a335(0x92c,0xc2c,0xa4a,0xe8a)+_0x4c7b9b(0x742,0x57a,0x651,-0x2c),'vpPjD':_0x4c7b9b(0x574,0x931,0x785,0x51b)+_0x36a335(0x88a,0xc81,0x9b3,0xda2)+_0x36a335(0xa80,0x6d5,0x943,0x5ae)+'3z1.jpg','eqVlB':'https://f.'+'top4top.io'+_0x36a335(0xc4a,0xc00,0xd5e,0x11f1)+_0x36a335(0x6dc,0x49d,0x5fa,0xb13),'rJJKZ':_0x4c7b9b(0x480,0x77b,0xcd9,0x564)+_0x36a335(0xa6a,0xae5,0x9b3,0x70a)+_0x36a335(0xcec,0x9d9,0xc35,0xf08)+'xk1.jpg','QwqMo':_0x4c7b9b(0x920,0x5fc,0xaeb,0x7c5)+_0x36a335(0xcf0,0xe12,0x9b3,0xb28)+_0x4c7b9b(0x4f4,0x3c7,0x7d5,0x6e3)+'c41.jpg','ekRln':_0x4c7b9b(0x8a6,0xd68,0x7f2,0xe6e)+_0x4c7b9b(0x356,0x860,0x6a4,0x51b)+_0x4c7b9b(0x296,0x76e,0x43d,0x9a8)+_0x4c7b9b(0x2fe,0x789,0xc40,0xaf5),'LsBHp':_0x36a335(0x84e,0xb12,0x80a,0x8d9),'QciAx':_0x36a335(0x1098,0x1141,0xc6e,0x756),'wAHTq':function(_0x343bfb,_0x324b01){return _0x343bfb===_0x324b01;},'XyHis':_0x36a335(0xf71,0xf7a,0xadc,0xd62),'TnqZA':'ZdBbU','ifteN':function(_0x3ed13b,_0xffb538,_0xff6d2a,_0x272151){return _0x3ed13b(_0xffb538,_0xff6d2a,_0x272151);},'eJhOa':_0x4c7b9b(0x82d,0x7ef,0xc6a,0xae9),'eptLm':_0x4c7b9b(0x8ae,0x511,0x65a,-0x4e),'mVQPj':function(_0x165f70,_0x2e6a91,_0x5a5fc4,_0x4e3de1,_0x47941d,_0x3cf49c,_0x3bda09){return _0x165f70(_0x2e6a91,_0x5a5fc4,_0x4e3de1,_0x47941d,_0x3cf49c,_0x3bda09);},'IqSiy':'https://yo'+_0x36a335(0xa91,0x6a0,0x561,0xae6)+_0x4c7b9b(0x730,0xa48,0x5ff,0xa12),'HBrqo':_0x4c7b9b(0x1d2,0x4ac,0x6f8,0xd9)};function _0x4c7b9b(_0x27c224,_0x56dcfd,_0x10d4a7,_0x4033fc){return _0x5f09b6(_0x4033fc,_0x56dcfd-0xe,_0x10d4a7-0xaf,_0x56dcfd-0x47b);}const {title:_0x5639ce,result:_0x5351a3,quality:_0xcc5814,size:_0xfcf4d6,thumb:_0x5461ef,views:_0x7d7681,likes:_0x8861b2,dislike:_0x1d9b54,channel:_0x3c1323,uploadDate:_0x4f6017,desc:_0x4346a0}=_0x174c77;function _0x36a335(_0x352f3f,_0xaf0e96,_0x23502e,_0x409dc5){return _0x5a3069(_0x352f3f-0x164,_0xaf0e96-0x31,_0x23502e- -0xfb,_0xaf0e96);}axios[_0x4c7b9b(0x12a7,0xdd3,0x1089,0xd1d)](_0x4c7b9b(-0x253,0x2ba,0x2ac,0x6c0)+_0x4c7b9b(0x8b2,0xbde,0x6e7,0xae1)+'api-create'+_0x4c7b9b(0x2da,0x41b,0x456,0x345)+q)['then'](async _0x13537e=>{function _0x37e15b(_0x2f7079,_0x5181c0,_0x136516,_0x11d4a5){return _0x4c7b9b(_0x2f7079-0x142,_0x5181c0- -0x22e,_0x136516-0x1cb,_0x11d4a5);}function _0x11d1ba(_0x1f8d23,_0x4d8664,_0xa020c7,_0xcb15af){return _0x36a335(_0x1f8d23-0x104,_0x1f8d23,_0xa020c7-0x6e,_0xcb15af-0x152);}if(_0x565614[_0x37e15b(0x777,0x935,0xea2,0xb94)](_0x565614[_0x11d1ba(0x1407,0xcbd,0xef4,0x1222)],_0x565614[_0x37e15b(0x569,0x6f0,0x4b3,0x986)])){const _0x283cbd=_0x565614['mtlOO'][_0x11d1ba(0xb64,0xa83,0xdb2,0x956)]('|');let _0x70075d=-0xae9+-0x52c+0xb3*0x17;while(!![]){switch(_0x283cbd[_0x70075d++]){case'0':var _0xf9dbbb=_0x54afee[_0x15ba59[_0x11d1ba(0xdba,0x727,0x913,0xb83)](_0x565614[_0x11d1ba(0x5cf,0x25d,0x62a,0xaf)](_0x37b075['random'](),_0x54afee[_0x11d1ba(0x3b1,0x6eb,0x651,0x61c)]))];continue;case'1':_0x516c1f['log'](_0x1a64e8(_0x421e0f,_0x565614[_0x37e15b(-0x14b,0x3f2,0x14d,-0xe3)]),_0x565614[_0x37e15b(0x368,0x219,0x607,0x86)](_0x2fd2fc,_0x565614[_0x37e15b(0xa50,0xb50,0xf3e,0xa51)]));continue;case'2':var _0x54afee=[_0x37e15b(0x456,0x6c2,0x627,0x117)+'top4top.io'+_0x11d1ba(0xabc,0xb57,0x7ee,0x6dc)+_0x11d1ba(0x2f9,0xcd9,0x7f1,0x568),_0x565614[_0x11d1ba(0x58d,0x91c,0x8ff,0xd09)],_0x565614[_0x37e15b(0x67c,0x121,-0x1c1,0x526)],_0x565614['eqVlB'],_0x565614[_0x11d1ba(0x70d,0x130,0x46f,0x94e)],_0x565614[_0x11d1ba(0x593,0xcaa,0x95e,0x443)],_0x565614[_0x11d1ba(0xd0e,0x783,0xca4,0x998)]];continue;case'3':_0x12c5a5=_0x37e15b(0x98f,0x80c,0x8d6,0xa87)+_0x37e15b(-0x15d,0x388,0x2e9,0x899)+_0x37e15b(0x433,0x1bf,-0xc1,-0x1d)+_0x11d1ba(0xadb,0xb4e,0xbcc,0xfb1)+'O\x20\x0a•\x20FATIH'+_0x37e15b(-0xf3,0x2fb,0x3b0,0x8c)+_0x37e15b(-0x51,0x15c,-0x293,0x1f7)+_0x37e15b(-0x18d,0x174,-0x3ba,0x2e3)+_0x1cd8e2[_0x37e15b(0x462,0x9c3,0xed4,0x4b1)]('@')[-0x20e3+0x1f*0x6d+0xc*0x1a4];continue;case'4':const _0x3f8b85={};_0x3f8b85[_0x37e15b(-0x97,0x175,0x497,0x4c7)+'id']=[_0x54238d],_0x371ccd[_0x11d1ba(0xc98,0xcab,0xa53,0x635)+'e'](_0x3dd54f,_0x3b176d,_0x1fc55c,{'thumbnail':_0x53b378['readFileSy'+'nc']('image/'+_0x13bba3),'caption':_0x565614[_0x37e15b(0xca1,0xa46,0x9f9,0x688)],'contextInfo':{'text':_0x11d1ba(0xc9b,0x78e,0x878,0x97b),'forwardingScore':0x3b9aca00,'isForwarded':!![],'sendEphemeral':!![],'externalAdReply':{'title':''+_0x5364b1,'body':'Subscribe\x20'+'ya\x20kak🥰','previewType':_0x565614[_0x11d1ba(0x3ff,0xa3f,0x77c,0xca3)],'thumbnailUrl':''+_0xf9dbbb,'thumbnail':'','sourceUrl':_0x11d1ba(0xa99,0x32d,0x6da,0xa90)+_0x11d1ba(0xe9d,0x102f,0xee8,0x1124)+_0x37e15b(-0x1bd,0xda,-0x42d,0x530)+_0x37e15b(0xf0a,0xa97,0xd4b,0xafe)+_0x11d1ba(0xb31,0xd40,0xe26,0x9e0)+'lA'}},'quoted':_0x3db687,'contextInfo':_0x3f8b85});continue;}break;}}else{if(Number(_0xfcf4d6[_0x37e15b(0x9a2,0x8f0,0x631,0x612)](_0x37e15b(0xc89,0x983,0xcea,0xa00),''))>=-0xcdf+0x201f+-0x4c1*0x4)return _0x565614[_0x11d1ba(0x155,0x8bd,0x4f5,0x2a7)](sendMediaURL,from,_0x5461ef,_0x37e15b(-0x28e,0x257,0x73e,-0x32a)+'TUBE\x20AUDIO'+_0x37e15b(0x540,0x203,0x1d6,-0x37b)+enter+enter+('*🎀\x20Title\x20:'+'*\x20')+_0x5639ce+('\x0a*🚀\x20Qualit'+_0x37e15b(0x6a4,0x690,0x8df,0x787))+_0xcc5814+(_0x37e15b(0x3f9,0x201,0x762,0x80)+'*\x20')+_0xfcf4d6+(_0x11d1ba(0x575,0xbb4,0x888,0xbc3)+':*\x20')+_0x7d7681+(_0x37e15b(0xc74,0x9fe,0xd96,0xf8b)+_0x11d1ba(0x8f0,0xf20,0xb08,0x766))+_0x8861b2+(_0x11d1ba(0x811,0xf83,0xc23,0xe5e)+'es\x20:*\x20')+_0x1d9b54+(_0x37e15b(0xb18,0x600,0x87,0x1d0)+_0x37e15b(-0x8e,0x2e5,-0xd4,0x7a5))+_0x3c1323+(_0x11d1ba(0x92c,0x6ae,0x50c,-0x9d)+'\x20:*\x20')+_0x4f6017+(_0x11d1ba(0x1162,0xe3d,0xe11,0x12b2)+'\x20')+_0x5351a3+enter+enter+('_Untuk\x20dur'+_0x37e15b(0x599,0x6b1,0x25a,0x7f0)+_0x37e15b(0x633,0x875,0x66f,0x84d)+'\x20disajikan'+'\x20dalam\x20ben'+'tuk\x20link_'));const _0x11328b=_0x37e15b(0x1ae,0x257,0x142,-0x21f)+'TUBE\x20VIDEO'+_0x11d1ba(0xbcb,0x588,0x8cf,0x765)+_0x37e15b(0x351,0x675,0x21a,0x670)+_0x37e15b(0xd78,0x7ed,0x93e,0xb72)+_0x5639ce+(_0x11d1ba(0x12a0,0xca3,0xf9d,0x111e)+_0x11d1ba(0xb68,0xf49,0xa7f,0xa11))+_0xcc5814+('\x0a*⚙️\x20Size\x20:'+'*\x20')+_0xfcf4d6+('\x0a*📺\x20Views\x20'+_0x37e15b(0x6a0,0x719,0x7a5,0xc02))+_0x7d7681+(_0x37e15b(0xcec,0x9fe,0xa97,0xac3)+_0x11d1ba(0xecb,0x64c,0xb08,0xc8c))+_0x8861b2+(_0x37e15b(0x8e3,0x834,0xa0f,0x80d)+_0x37e15b(0x36c,0x393,0x520,0x836))+_0x1d9b54+(_0x11d1ba(0x9dc,0x826,0x9ef,0xabd)+_0x11d1ba(0x28d,0x770,0x6d4,0x8c0))+_0x3c1323+(_0x37e15b(-0x466,0x11d,0x54e,-0x86)+'\x20:*\x20')+_0x4f6017+(_0x11d1ba(0x12ed,0xf24,0xe11,0xa28)+'\x20')+q+(_0x11d1ba(0x821,0xa92,0xd1e,0xddd)+'sebentar\x20m'+_0x37e15b(0xd4,0x52d,0x773,0x4eb)+_0x37e15b(0x4cb,0x1e3,0x355,0x214));let _0x1596f8=await getBuffer(_0x5461ef);const _0x474f16={};_0x474f16[_0x11d1ba(0xe54,0xafd,0x8b0,0x803)+'t']=_0x565614[_0x11d1ba(0xfd8,0xdd2,0xe6f,0xa3f)];const _0x13a722={};_0x13a722[_0x11d1ba(0x759,0x928,0x624,0x3b9)]=_0x37e15b(0x2be,0x78b,0x3fc,0xc4c),_0x13a722['buttonText']=_0x474f16,_0x13a722[_0x11d1ba(0x91c,0x84e,0xc9f,0x8de)]=_0x565614[_0x37e15b(0x22e,0x69c,0x128,0x8bc)];let _0x110dad=[_0x13a722];await _0x565614[_0x37e15b(0x9a3,0x42b,0x11c,0x63)](sendButLocation,from,_0x11328b,_0x11d1ba(0xb02,0xd21,0xeb4,0x12d9)+enter+('Jika\x20whats'+_0x37e15b(0x9eb,0x990,0x903,0x662)+_0x37e15b(0xa9f,0xa67,0x7ae,0x9e9)+'upport\x20but'+_0x11d1ba(0x564,0x7a4,0xa42,0x749)+'an\x20tonton\x20'+_0x11d1ba(0xce6,0xca3,0x823,0xac0)+'https://yo'+'utu.be/ERG'+_0x11d1ba(0xa67,0x8c4,0xc82,0xa7d))+enter+enter+'©\x20'+ownername,_0x1596f8,_0x110dad,{});let _0x241a50=await _0x565614[_0x11d1ba(0x46d,0x1d9,0x608,0x367)](getBuffer,_0x5351a3);const _0x3f8a0d={};_0x3f8a0d[_0x37e15b(0x61e,0xb6a,0x5f3,0xc9a)]=_0x565614[_0x37e15b(-0x126,0x373,0x19f,0x544)],_0x3f8a0d[_0x37e15b(0x8bb,0x852,0x6a2,0x58a)]=0x2,_0x3f8a0d[_0x11d1ba(0xad6,0x89a,0xdb9,0x825)]='Youtube\x20Mp'+'4',_0x3f8a0d[_0x11d1ba(0xc4b,0x9d7,0x8a2,0x771)]='',_0x3f8a0d[_0x37e15b(0x905,0xa73,0x4e1,0x583)+'rl']='',_0x3f8a0d[_0x11d1ba(0xbde,0xf19,0xe3d,0xbe0)]=pp_userz;const _0x3ac639={};_0x3ac639[_0x37e15b(0x4f5,0x145,-0x23,-0xf1)+_0x11d1ba(0x9a7,0x9cd,0x89d,0x5a5)]=0x3b9aca00,_0x3ac639[_0x11d1ba(0xf4c,0xcd8,0xf4c,0xba3)+'d']=!![],_0x3ac639['sendEpheme'+'ral']=!![],_0x3ac639['externalAd'+_0x37e15b(0x3e3,0x41a,0x44d,0x299)]=_0x3f8a0d;const _0xdf0bb1={};_0xdf0bb1[_0x11d1ba(0x9a1,0x75b,0x932,0x4aa)+'o']=_0x3ac639,_0xdf0bb1['mimetype']=_0x565614[_0x37e15b(0xcd4,0x9ce,0xb43,0xa41)],_0xdf0bb1['filename']=_0x5639ce+_0x37e15b(0x895,0x8eb,0xd37,0x557),_0xdf0bb1[_0x37e15b(0x2c6,0x8e,-0x4b0,-0x8f)]=fgclink2,_0xdf0bb1[_0x37e15b(0xaa8,0xa4e,0x6ea,0xa5a)]=pp_bot2,alpha['sendMessag'+'e'](from,_0x241a50,MessageType[_0x11d1ba(0x71f,0xc72,0x9c3,0xca9)],_0xdf0bb1);}});})[_0x5a3069(0xe2d,0x10b5,0xbb2,0xd1a)](_0x2566e7=>reply(_0x5f09b6(0x37b,0xf4,0x818,0x2cb)+'or')),await limitAdd(sender,limit);}break;case _0x5f09b6(0xe77,0x4ba,0x576,0x8f1):{const _0x122d65={};_0x122d65[_0x5f09b6(-0x8e,0x602,0x38c,0x274)+'t']=_0x5f09b6(-0x37,0x20b,0x258,0x450)+'t';const _0x46f43a={};_0x46f43a[_0x5f09b6(0x2c7,0x30e,-0x3ab,-0x18)]=_0x5a3069(0x1316,0x1503,0xfe3,0x1170),_0x46f43a[_0x5f09b6(0x59,0x877,0x421,0x4a5)]=_0x122d65,_0x46f43a[_0x5f09b6(0x4ec,0x6bf,0xbd1,0x663)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang['limit'](prefix),'©\x20'+ownername,[_0x46f43a]);if(args[_0x5f09b6(0x13,-0x383,0x182,0x15)]===-0x1*-0x24e8+0x1035*-0x1+0x7*-0x2f5)return reply('Kirim\x20peri'+'ntah\x20*'+prefix+(_0x5a3069(0xa92,0xacd,0xa7d,0x5b4)+_0x5f09b6(0x315,0xf5,0x4,0x594)));let isLinks=args[-0x23b7+-0x631*-0x1+-0x2*-0xec3]['match'](/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);if(!isLinks)return reply(mess[_0x5f09b6(0x830,-0x8b,-0x10a,0x460)]['Iv']);ytmp3=args[_0x5a3069(0x967,0x862,0xb66,0x811)]('\x20');function ytMp3(_0x41b838){function _0x8e3e63(_0x43d380,_0x49bc5b,_0x3e42cb,_0x4cce80){return _0x5f09b6(_0x43d380,_0x49bc5b-0x6d,_0x3e42cb-0x1b0,_0x49bc5b-0x1fa);}const _0x227c85={'RAFyh':function(_0x5bdf46,_0x436f3c,_0x2d04fd){return _0x5bdf46(_0x436f3c,_0x2d04fd);},'ELogc':_0x8e3e63(0x53a,0x679,0x3d4,0x191),'SRmiE':function(_0x4343bd,_0x2831e5){return _0x4343bd(_0x2831e5);},'lSNlL':_0x4a1733(0x304,0x51,0x7e,-0x85)+_0x8e3e63(0x506,0x3e6,-0x15b,0x410),'awNPY':'_choose\x20th'+'is\x20if\x20you\x20'+'want\x20to\x20us'+_0x8e3e63(0xba4,0x62f,0x229,0x747)+_0x8e3e63(0x82b,0x389,0x42a,0x79a)+'d_','imkXu':_0x4a1733(-0x191,0x5c,-0x484,0x56a)+_0x8e3e63(0xe3,0x102,0x387,-0x235),'NmnWA':_0x8e3e63(0x5d8,0x48b,0x498,0x8fb)+_0x4a1733(0x95d,0x87d,0x8e8,0x6b4)+_0x4a1733(0x7d3,0x43b,-0x171,0x7ae)+_0x4a1733(0x1d1,0x3c2,0x8e6,0x73d)+'loadmenu\x20c'+_0x4a1733(-0x187,0x7f,0x114,0x3fd),'rQHMN':_0x4a1733(-0x72,0x4aa,0x427,-0xcb),'AFpWa':_0x4a1733(-0x383,0x5c,-0x16e,-0x42a)+'e-5','gbmqA':'makermenu','oUmjK':_0x4a1733(0x429,0x5c,-0x546,0x574)+_0x4a1733(0x800,0x8da,0x70c,0xcc2),'YvqAb':_0x4a1733(0x5fb,0x334,0x2f,0x3b4),'BvpLw':_0x8e3e63(0x7d1,0x48b,0x80c,0x6ee)+_0x8e3e63(0x89a,0x93b,0x65c,0xacb)+_0x8e3e63(0x94c,0x4f9,0x883,0xfa)+'e\x20the\x20owne'+_0x8e3e63(0x3df,0x7cf,0x47d,0x923)+_0x4a1733(-0x48e,0x111,-0x6b,-0x1ba),'UTQqQ':_0x8e3e63(-0x47e,0x11a,0x493,-0x54)+'e-9','RxlOv':_0x4a1733(0x2ea,0x63a,0x7be,0x321),'shAcC':'_choose\x20th'+_0x4a1733(0x8de,0x87d,0x349,0x753)+'want\x20to\x20us'+_0x8e3e63(0x98c,0x549,0x6c2,0x7f1)+_0x8e3e63(0x599,0x389,0x3a,0x4c8)+'d_','MjSFp':_0x4a1733(-0x32b,0x5c,-0x4c0,-0x96)+_0x8e3e63(-0x291,0x1a0,0x36d,0x44c),'STTMH':_0x4a1733(0x62b,0x3cd,0x86a,0x1ea)+'is\x20if\x20you\x20'+_0x4a1733(0x630,0x43b,0x714,0xf4)+_0x8e3e63(0x68f,0x8cf,0x798,0x52c)+_0x8e3e63(0x637,0x953,0x88b,0x61d)+'_','xqgGV':_0x4a1733(0x1fa,0x5c,0x46e,0x30e)+_0x4a1733(0x737,0x4f8,0x98,0x2ff),'MYLFo':_0x4a1733(0x55d,0x849,0x8f7,0xa58)+'n','fJSKM':_0x8e3e63(0x46b,0x48b,0x6d,0x2bd)+_0x4a1733(0x9be,0x87d,0x6b8,0x782)+_0x8e3e63(0x9ef,0x4f9,0x13d,0x877)+_0x8e3e63(0x266,0x36f,0x2f1,0x166)+_0x8e3e63(0xa1c,0x891,0xa36,0xdfe)+_0x8e3e63(0x29f,0x554,0x81a,-0x4c),'sgLeW':'telegram\x20s'+_0x4a1733(-0x226,0x2cf,-0xba,0x665),'wonBL':_0x8e3e63(-0x30,0x11a,0x3d1,0x699)+_0x8e3e63(0xccf,0xa1a,0xe3e,0x99d),'kIBxs':_0x8e3e63(0x8b0,0x48b,0x9a8,0x4e0)+_0x4a1733(0xa71,0x87d,0x36e,0xd5a)+'want\x20to\x20us'+_0x8e3e63(-0x11b,0x1c2,0x51d,0x49c)+_0x8e3e63(0x2bc,0x3bb,0x44,0x87a)+_0x8e3e63(0x23,0x5a6,0x428,0x212),'UFZkL':_0x4a1733(-0x7d,0x5c,0x1b4,0x1e7)+'e-15','INAmg':'Sub\x20Menu\x20k'+_0x4a1733(0x456,0x3fb,-0x178,0x366),'XDMrX':'_choose\x20th'+_0x4a1733(0x3db,0x87d,0xb1c,0xbbb)+_0x4a1733(0x798,0x43b,0x15,0x2a2)+_0x8e3e63(0x628,0x36f,0x578,-0x1f5)+_0x8e3e63(0x59f,0x95e,0xeda,0xa0c)+_0x4a1733(0x405,0x4e8,0x99d,0xc),'OnpCL':_0x4a1733(-0x30b,0x5c,0x565,-0x11d)+_0x4a1733(0x5d6,0x24a,-0x216,-0x15a),'tiiCc':_0x4a1733(0x167,0x5c,0x464,-0x28a)+_0x8e3e63(0x156,0xfb,-0x3ff,0x48b),'BjTpU':_0x4a1733(0x969,0x6e2,0x31a,0x5ab),'ICDEa':_0x4a1733(-0x4c8,0x5c,-0xe7,-0x334)+_0x8e3e63(-0x416,0x10e,-0x241,-0x3a6),'bgAdO':_0x8e3e63(-0x209,0x232,0x593,0x72d)+'u','EzvEH':_0x4a1733(0x664,0x3cd,0x64d,0xde)+_0x8e3e63(0x433,0x93b,0x922,0x8ba)+_0x8e3e63(0x87d,0x4f9,0x8dd,0x31f)+'e\x20the\x20text'+'promenu\x20co'+_0x8e3e63(0x707,0x5a6,0x342,0x675),'lJQDJ':_0x4a1733(0x4d3,0x5c,-0x537,0x575)+_0x4a1733(0xc25,0xa06,0x588,0xf26),'qCNOo':_0x8e3e63(-0x4f5,0x9c,-0x3ec,0x49b)+'nu','csrAT':_0x4a1733(0x81d,0x3cd,0x29c,0x45)+_0x4a1733(0xcec,0x87d,0xa61,0x31b)+'want\x20to\x20us'+_0x8e3e63(-0x27a,0x2f7,0x2b0,0x131)+'ooxymenu\x20c'+'ommand_','bwBkB':'_choose\x20th'+'is\x20if\x20you\x20'+_0x4a1733(-0xe0,0x43b,0x8ad,0x7a3)+_0x8e3e63(0xa24,0xa77,0xc13,0xa88)+_0x4a1733(0xf9,-0x6d,0x12c,0x17e)+_0x8e3e63(0x58a,0x1cf,0x5ac,0x12),'oaqdv':_0x8e3e63(-0x31d,0x11a,0x2d3,-0x265)+_0x8e3e63(0x6e,0x316,0x2ae,-0x294),'FvPQG':_0x8e3e63(0xde,0x48b,-0x8c,-0x115)+_0x8e3e63(0xb00,0x93b,0x91b,0x694)+_0x4a1733(0x1f4,0x43b,0x9e9,0x4c5)+_0x8e3e63(0x517,0x1bc,0x24b,0x610)+_0x8e3e63(0xd36,0x895,0x33b,0x633)+'mand_','rRVbd':_0x8e3e63(0x71f,0x91a,0xe9e,0xc87)+'e','WtWHK':_0x8e3e63(0x109,0x2f8,0xf6,0x59e)+_0x8e3e63(0xb2f,0x58b,0x3fc,0x50f),'vHQbA':function(_0x446c00,_0x5bcec5){return _0x446c00!==_0x5bcec5;},'lFjwC':_0x4a1733(0x28a,0x2ef,-0x45,0x513),'FmOgE':'OMOlv','sYKle':function(_0x439659,_0x4f57d8){return _0x439659<_0x4f57d8;},'uDpLH':_0x8e3e63(0x184,0x219,0x1fa,0x542),'iwwBF':_0x4a1733(0xbb9,0xa57,0x73f,0x61d)+_0x4a1733(0x970,0x997,0xc11,0x68c)+'opus\x22','MxXqF':_0x8e3e63(0xc91,0x73e,0xaa3,0xb92),'ChfQY':function(_0x1b540e,_0x42e37e){return _0x1b540e(_0x42e37e);},'idEmi':function(_0x18977,_0x1aa502){return _0x18977(_0x1aa502);},'vDvSA':_0x4a1733(-0x256,0x335,-0xa3,0x36d)+_0x4a1733(0x9c4,0x8b7,0x39c,0x397),'vVbZu':'href','OiaTY':_0x8e3e63(0x22c,0x59e,0x39d,0x18d)+_0x4a1733(0xbe1,0x8f1,0x800,0xe92)+_0x4a1733(0xad2,0xa23,0xa09,0xe99)+_0x8e3e63(0x3e4,0x1de,0x5b5,-0x383)+'\x20span','bCTfz':_0x8e3e63(-0x2a4,0x28,0x3af,0x2c1),'jRYts':_0x4a1733(0xd17,0x873,0xb1c,0xaae),'XEmVk':'#primary\x20>'+'\x20div\x20>\x20div'+_0x4a1733(0x880,0x8a2,0x77f,0x775)+_0x4a1733(-0x35b,0x59,0x1e2,0x5d9),'SCchO':function(_0x366264,_0x215d1c){return _0x366264(_0x215d1c);},'ThIFr':_0x8e3e63(0x2e9,0x41b,0x6cc,-0x97)+_0x8e3e63(0xbc0,0x9ca,0xc92,0x951)};function _0x4a1733(_0x3e8dc3,_0x555e4c,_0x2513f9,_0x1eb1de){return _0x5a3069(_0x3e8dc3-0x11d,_0x555e4c-0x19d,_0x555e4c- -0x58d,_0x2513f9);}return new Promise((_0x27cc2b,_0x52dbea)=>{function _0x563a52(_0x1553e6,_0x57fc15,_0x499f77,_0x3664a0){return _0x8e3e63(_0x57fc15,_0x1553e6-0x1f3,_0x499f77-0x84,_0x3664a0-0xf8);}const _0x497574={'NzaOD':function(_0x274509,_0x4ea929){function _0x5a75d8(_0x11acfd,_0x55d78a,_0x2d27cf,_0x3b601d){return _0x4c05(_0x2d27cf-0xb7,_0x11acfd);}return _0x227c85[_0x5a75d8(0x6da,0x726,0x697,0x56e)](_0x274509,_0x4ea929);},'pMBae':_0x227c85['vDvSA'],'JuhQg':_0x227c85['vVbZu'],'AweFi':_0x227c85[_0x563a52(0x85b,0xb94,0x8af,0x6d6)],'jCVAt':'header\x20>\x20d'+'iv.entry-a'+'fter-title'+'\x20>\x20p\x20>\x20spa'+_0x563a52(0x57b,0x8c5,0x84f,0x665)+'ares','rHYnP':_0x227c85[_0x558d45(0x17b,0x197,0x127,0x684)],'ByovX':_0x227c85[_0x558d45(0x519,0x63f,0x63b,0xb2a)],'GOgIg':_0x227c85['XEmVk'],'oXuHa':function(_0x117d1d,_0x231f92){function _0x258096(_0x1e96f1,_0x42a1bf,_0x6bf4fd,_0x118d55){return _0x563a52(_0x118d55- -0x1,_0x1e96f1,_0x6bf4fd-0xfa,_0x118d55-0x10);}return _0x227c85[_0x258096(0x3b0,0x711,0x5a8,0x7f5)](_0x117d1d,_0x231f92);},'wHJKY':_0x227c85['ThIFr']};function _0x558d45(_0x49ed48,_0x445fc7,_0x2770c4,_0x4ee510){return _0x4a1733(_0x49ed48-0x138,_0x2770c4-0x163,_0x445fc7,_0x4ee510-0x17c);}ytdl[_0x558d45(0x3e3,0x1d7,0x5ae,0xb1b)](_0x41b838)[_0x563a52(0x875,0x822,0xc9f,0x6ae)](async _0x53e8cc=>{function _0x6f7df7(_0x2ba279,_0x40030b,_0x4f7695,_0x14a0ff){return _0x558d45(_0x2ba279-0x18f,_0x40030b,_0x4f7695- -0x17,_0x14a0ff-0xfc);}function _0x40fc7c(_0x26d47e,_0x29c11f,_0x3b385b,_0x4ae210){return _0x563a52(_0x29c11f-0x104,_0x4ae210,_0x3b385b-0x87,_0x4ae210-0x9);}const _0x58fb4d={'ZRvRZ':function(_0x27cbaa,_0x16badd,_0x14bdc7){function _0xbb6a97(_0x49265b,_0x23bf91,_0x255ca3,_0x53ecee){return _0x4c05(_0x53ecee-0x26c,_0x255ca3);}return _0x227c85[_0xbb6a97(0xd1b,0x9d8,0x13b2,0xe2b)](_0x27cbaa,_0x16badd,_0x14bdc7);},'FgRBg':_0x227c85['ELogc'],'XayXk':function(_0x54d66b,_0x4339cb){function _0x44fe33(_0x812cfb,_0x5735c8,_0x482dc0,_0x53356a){return _0x4c05(_0x53356a-0x143,_0x5735c8);}return _0x227c85[_0x44fe33(0xca,0x67b,0x970,0x4dc)](_0x54d66b,_0x4339cb);},'QIpam':_0x6f7df7(0xe52,0xc86,0x97a,0x3d8)+_0x6f7df7(0xb2a,0x30c,0x697,0x82f),'nnZpQ':_0x227c85[_0x40fc7c(0x89d,0x92b,0xb55,0xe56)],'jJOoc':_0x227c85[_0x6f7df7(0x14,0x225,0x12b,0x540)],'MZnGZ':_0x227c85[_0x40fc7c(0x7cd,0x6ab,0x939,0x695)],'nWBLJ':'downloadme'+'nu','spvLR':_0x227c85[_0x40fc7c(0x72e,0x8d5,0xd5f,0x6c3)],'HBGgA':_0x227c85[_0x40fc7c(0x402,0x473,0x842,0x4b6)],'ATmsX':_0x6f7df7(0x601,0x677,0x5a0,0x399)+'u','vFFnR':_0x40fc7c(0x71f,0xc84,0xc76,0x77a),'PIUyH':_0x227c85[_0x40fc7c(0x74e,0xc56,0xe67,0x780)],'tUaQE':_0x227c85[_0x6f7df7(0x633,0x71d,0x756,0x27c)],'BlYyF':_0x40fc7c(0x89e,0xb2a,0x840,0xead),'kYDQF':_0x6f7df7(0x6d5,0x93a,0x519,0x4f1)+'is\x20if\x20you\x20'+_0x40fc7c(0x457,0x7f0,0xbcf,0x7bd)+'e\x20the\x20othe'+_0x6f7df7(0x5ac,0xa8f,0x85d,0x9ab)+_0x6f7df7(0x5c1,-0x23,0x25d,0x3db),'zilMd':_0x227c85[_0x6f7df7(0x8d3,0xa87,0x8dd,0xba2)],'GJnRH':_0x227c85[_0x40fc7c(0x22a,0x63c,0x2b7,0x687)],'OiVVs':_0x227c85[_0x40fc7c(0x62a,0x4a1,0x39,0xa12)],'BTcUa':_0x227c85[_0x40fc7c(0xf42,0xdda,0x8a6,0x1337)],'zSVQe':_0x227c85[_0x40fc7c(0xe9a,0xd56,0xe9a,0xea4)],'hTZtQ':_0x227c85[_0x6f7df7(0x4fb,0x836,0x647,0x819)],'nijpq':_0x227c85[_0x40fc7c(0x6c7,0xa23,0xd2d,0xcc6)],'XFhAp':_0x227c85[_0x40fc7c(0x97e,0xade,0xe42,0x936)],'FGkmG':_0x227c85[_0x40fc7c(0xd7c,0x7d0,0x971,0xcea)],'gwxpZ':_0x227c85['MYLFo'],'TDAJW':_0x227c85['fJSKM'],'FArIf':_0x227c85[_0x6f7df7(0x1a4,0x75e,0x4e0,0x35)],'VMIig':_0x6f7df7(0x54a,0x718,0x519,0xa60)+_0x6f7df7(0x8a2,0x61a,0x9c9,0x5fa)+'want\x20to\x20us'+_0x40fc7c(0x738,0x984,0x7b3,0x515)+_0x40fc7c(0x40a,0x53f,0x193,0x17a)+'d_','jiHiH':_0x227c85['wonBL'],'Losrm':_0x6f7df7(-0x14c,-0x1b1,0x125,-0x11),'aVlWF':_0x6f7df7(0x927,0x33a,0x519,0x609)+'is\x20if\x20you\x20'+'want\x20to\x20us'+'e\x20the\x20nsfw'+_0x6f7df7(0x10a,0xd4,0x2ef,-0x2ae)+_0x6f7df7(0x80a,0x62e,0x38f,-0xae),'fAeGg':_0x227c85[_0x40fc7c(0x9f6,0xb0a,0x1001,0x598)],'uvzRs':_0x227c85[_0x40fc7c(0xd9d,0xa25,0xb5e,0x669)],'YHjcr':_0x40fc7c(0x677,0x782,0x527,0x5bb)+_0x40fc7c(0x93a,0xc32,0x993,0xcef)+_0x40fc7c(0xa90,0x7f0,0x7cd,0xc6c)+'e\x20the\x20imag'+'e\x20effect\x20m'+'enu\x20comman'+'d_','HdxMT':_0x227c85[_0x40fc7c(0xd16,0x953,0xbf5,0x87d)],'JWCns':_0x227c85[_0x6f7df7(0x133,-0x1e0,0x150,0x499)],'CnXFk':_0x227c85[_0x6f7df7(-0x3f2,0x5c5,0xb2,0x2ea)],'ceTvp':_0x40fc7c(0xa67,0x782,0x2bb,0x9de)+_0x40fc7c(0xd0a,0xc32,0xacf,0xb8c)+_0x6f7df7(0x6bd,0x74b,0x587,0x96e)+_0x40fc7c(0xf16,0xb38,0x6eb,0xc07)+'esmenu\x20com'+_0x6f7df7(0x80a,0x540,0x5e2,0x637),'uJvgI':_0x227c85[_0x6f7df7(-0x4b,0x1eb,0x41e,0x5c2)],'TBZPl':_0x227c85['BjTpU'],'rYZvv':_0x227c85[_0x40fc7c(0xcb2,0x935,0x40e,0x446)],'WxFZu':_0x227c85['bgAdO'],'xWnJZ':_0x227c85[_0x40fc7c(0xe3a,0xd90,0xdc3,0x130c)],'XLeRC':_0x227c85[_0x40fc7c(0x984,0x4fd,0x124,0x21c)],'TGgsp':_0x227c85[_0x40fc7c(0x755,0x467,0x78d,0x891)],'WnyhA':_0x227c85[_0x6f7df7(0xdb,0x205,0x155,0x5f)],'IUbtR':_0x227c85[_0x6f7df7(0x6d8,0x2f6,0x680,0x967)],'OGAQM':_0x227c85['oaqdv'],'KyqQU':_0x40fc7c(0x46f,0x6e8,0xc68,0x7fa),'mCvVv':_0x227c85[_0x40fc7c(0x65,0x514,0x86f,0x16b)],'VaLLg':_0x227c85[_0x6f7df7(0x655,0x10ed,0xb4a,0x6e3)],'efYLR':'\x0a\x0a_choose\x20'+'this\x20if\x20yo'+'u\x20want\x20to\x20'+_0x40fc7c(0xf68,0xbe4,0xc38,0x1152)+'e\x20code\x20thi'+_0x40fc7c(0x114e,0xd37,0xf5f,0xe19),'jEcKJ':_0x40fc7c(0x66c,0x50e,0x8b9,0xaaf)+_0x40fc7c(0xa34,0xa51,0x9cd,0xcec),'TmZTK':_0x227c85['WtWHK'],'hzaRd':'\x0a\x0a_choose\x20'+_0x40fc7c(0xa5c,0xd8e,0x11dd,0xd3d)+'u\x20want\x20to\x20'+'know\x20anyon'+'e\x20who\x20cont'+'ributed\x20to'+_0x40fc7c(0x4ac,0x7b7,0x677,0x85a)+'pt_'};if(_0x227c85[_0x40fc7c(0x16d,0x4a4,0x85a,0x13b)](_0x227c85[_0x40fc7c(0xabc,0x6f1,0x813,0x8af)],_0x227c85['FmOgE'])){let _0x1c2429=[];for(let _0x140045=-0x1881+-0x21a7+0x3a28;_0x227c85[_0x40fc7c(0x557,0x4da,0xa75,0x541)](_0x140045,_0x53e8cc[_0x40fc7c(0xabd,0x527,0x529,0x314)]['length']);_0x140045++){if(_0x227c85[_0x40fc7c(0x4f0,0x4a4,-0xff,0x5b4)](_0x227c85[_0x6f7df7(0x10e9,0xd11,0xb72,0xb12)],_0x227c85[_0x6f7df7(0x76f,0x108e,0xb72,0x6b5)])){const _0x56ac6c={'Guwtp':function(_0x1b9bd9,_0x593ce0){function _0xabad92(_0x357b83,_0x40be3c,_0x815948,_0x12acd5){return _0x40fc7c(_0x357b83-0x148,_0x40be3c- -0x4d7,_0x815948-0xb4,_0x815948);}return _0x497574[_0xabad92(0x47a,0xf6,0x5a6,0x66b)](_0x1b9bd9,_0x593ce0);},'OgmrO':'header\x20>\x20h'+'2','fZriS':_0x497574[_0x6f7df7(0x5ea,0xb1a,0xb88,0xe87)],'EHhLv':_0x497574[_0x40fc7c(0xe9c,0xdc9,0xf25,0xc0a)],'RMdlw':_0x497574[_0x6f7df7(0x8f5,0x90a,0x3e6,0x46c)],'ebPof':_0x497574[_0x6f7df7(0x7c8,0x5df,0x3f6,0x4cb)],'HwYMI':_0x497574[_0x6f7df7(0xf39,0x959,0xbcb,0x8e0)],'HvgCm':_0x497574[_0x40fc7c(0x8bb,0x494,0x6f,0x5ce)],'vtcSi':_0x497574[_0x6f7df7(0x4ed,0x45a,0x961,0xa8b)],'hdnEv':function(_0x5f10d8,_0x59d925){return _0x5f10d8*_0x59d925;},'Nktpd':_0x40fc7c(0x3df,0x804,0x46a,0xb21)+'mcompile.c'+'lub/page/'};return new _0x3287fc((_0x289396,_0x53267e)=>{const _0xbd6b1f={'VQjDi':function(_0x428fd9,_0x5824c1){function _0x39143c(_0x3d3c6f,_0x1720b3,_0x15f18e,_0x4f9f3f){return _0x4c05(_0x1720b3-0x2d3,_0x4f9f3f);}return _0x56ac6c[_0x39143c(0x809,0x739,0x832,0xb4e)](_0x428fd9,_0x5824c1);},'RbFxf':_0x56ac6c[_0x5052f0(0x52e,0x4d0,0x3a1,0xa10)],'EURdK':_0x56ac6c[_0x195d46(0x594,-0x32,0x301,-0xf)],'vNsTL':_0x56ac6c[_0x5052f0(0xc57,0x71d,0x9b4,0x699)],'yoHNL':_0x56ac6c['RMdlw'],'iANEe':function(_0x169694,_0x315575){return _0x56ac6c['Guwtp'](_0x169694,_0x315575);},'wrgkh':_0x56ac6c[_0x195d46(0xa93,0x79d,0x601,0x711)],'xAYvW':_0x56ac6c[_0x5052f0(0xa70,0x5c4,0x39d,0xa32)],'BxDQF':function(_0x5a2f22,_0x5abc04){return _0x5a2f22(_0x5abc04);},'mRDXN':_0x5052f0(0x9d5,0x6b9,0xa4c,0x49f),'ijfKS':_0x56ac6c[_0x5052f0(0x6cd,0x466,0x35c,0x43a)],'ybLWH':_0x195d46(0xa9d,0x984,0xb9a,0xf53),'QslqB':_0x195d46(0x27d,0x2d6,0x3bf,0x43e),'dAJDB':_0x56ac6c[_0x195d46(0xb9c,0xa20,0x6f1,0x149)],'IQGsM':function(_0x3c28cc,_0x5c361b){function _0x159429(_0x899bc4,_0x50738b,_0x53fa0a,_0x1cdcc5){return _0x195d46(_0x899bc4-0x1e2,_0x50738b-0x119,_0x53fa0a- -0x2fe,_0x50738b);}return _0x56ac6c[_0x159429(-0x1e1,0x682,0x2d6,0x2c3)](_0x3c28cc,_0x5c361b);}},_0x2657dd=_0x2d2570[_0x195d46(0xcbb,0xb79,0x7b7,0x8ff)](_0x56ac6c['hdnEv'](_0x4a689b[_0x5052f0(0x7af,0x422,0x5a,0x590)](),0x2615+-0x13a7+0x5*-0x2c9));function _0x195d46(_0xa4d6d3,_0x3021f0,_0x59dbf2,_0x17bee4){return _0x40fc7c(_0xa4d6d3-0x7c,_0x59dbf2- -0x11,_0x59dbf2-0x13,_0x17bee4);}function _0x5052f0(_0x26cf05,_0x340d8e,_0x2ffc43,_0x2a2d0c){return _0x40fc7c(_0x26cf05-0xbd,_0x340d8e- -0x252,_0x2ffc43-0x172,_0x2a2d0c);}_0x4f5933[_0x5052f0(0xf54,0xbf7,0x8ae,0xaac)](_0x56ac6c[_0x5052f0(0x60b,0x347,0x58a,0x235)]+_0x2657dd)[_0x195d46(0xadb,0xb07,0x968,0xd0a)](_0x3b41ea=>{function _0x5ccaf8(_0x5e6b27,_0x1526a5,_0x206b93,_0x315d60){return _0x5052f0(_0x5e6b27-0x11e,_0x1526a5- -0x203,_0x206b93-0x10d,_0x315d60);}const _0x1ad183={'tGsbu':function(_0x356798,_0x94842f){function _0x472e39(_0x517133,_0x2be977,_0x290b14,_0x49b20d){return _0x4c05(_0x2be977- -0x1cf,_0x49b20d);}return _0xbd6b1f[_0x472e39(0xdcb,0x87d,0x531,0x94e)](_0x356798,_0x94842f);},'ahryU':_0xbd6b1f['RbFxf'],'Gpyae':_0xbd6b1f['EURdK'],'cQUoc':_0xbd6b1f['vNsTL'],'vRHAw':function(_0x10ce93,_0x25bd16){return _0xbd6b1f['VQjDi'](_0x10ce93,_0x25bd16);},'ErfsD':_0xbd6b1f[_0x5ccaf8(0x66e,0x212,0x759,0x306)],'wjjLW':function(_0xf7b7c4,_0x436767){return _0xbd6b1f['iANEe'](_0xf7b7c4,_0x436767);},'JEezZ':_0xbd6b1f[_0x1f5cc5(0x54f,0x41f,0x3eb,0x5e5)],'sNHvp':function(_0x34f7d4,_0x43c218){return _0x34f7d4(_0x43c218);},'rBlqq':_0xbd6b1f[_0x5ccaf8(-0x1fc,0x355,0x4c9,0x8b0)],'ZAWQw':function(_0x34fba8,_0x358782){function _0x10e426(_0xab4b0e,_0x10fbc4,_0x1294aa,_0x3f5ef8){return _0x5ccaf8(_0xab4b0e-0x1c4,_0xab4b0e- -0x4f,_0x1294aa-0x198,_0x3f5ef8);}return _0xbd6b1f[_0x10e426(0x24c,0x23f,0x2d6,0x6b0)](_0x34fba8,_0x358782);},'ZitBE':_0xbd6b1f[_0x1f5cc5(0x421,0x2fa,0x74,0x6aa)],'TmytI':_0xbd6b1f[_0x1f5cc5(0x813,0x7d0,0x43a,0xa64)],'hHPMM':_0xbd6b1f[_0x5ccaf8(-0x267,0x31c,-0x7a,0x6d4)],'eVItc':_0xbd6b1f[_0x1f5cc5(0x901,0x9fc,0x83e,0xf56)]};function _0x1f5cc5(_0x3f0521,_0x1e8859,_0x1e1bfa,_0x2e518c){return _0x195d46(_0x3f0521-0x122,_0x1e8859-0x1f3,_0x1e8859- -0x2d0,_0x3f0521);}const _0x1ff86b=_0xbc0a72[_0x5ccaf8(0x13f,-0x145,0x128,0x1c1)](_0x3b41ea[_0x5ccaf8(-0x34,0x414,0x162,0x1f3)]),_0x584d3f=[];_0x1ff86b(_0xbd6b1f['dAJDB'])[_0x1f5cc5(-0x10e,0x3ed,0x8fe,0x726)](function(_0x1a3bc5,_0x414716){function _0x55b8f2(_0x15966d,_0x4aa389,_0x5c286b,_0x446da2){return _0x1f5cc5(_0x4aa389,_0x446da2-0x20a,_0x5c286b-0xd4,_0x446da2-0x158);}function _0x18e813(_0x1e1022,_0x35047e,_0x5ece3d,_0x25fb86){return _0x1f5cc5(_0x1e1022,_0x25fb86-0x3ed,_0x5ece3d-0x52,_0x25fb86-0x1e9);}_0x584d3f[_0x55b8f2(0x4d2,0x2fb,0x350,0x2e9)]({'title':_0x1ad183['tGsbu'](_0x1ff86b,_0x414716)[_0x18e813(0x88a,0xcb3,0x1033,0xe09)](_0x1ad183[_0x18e813(0x856,0x8af,0x825,0x4af)])[_0x55b8f2(0x820,0x9ae,0x322,0x718)](),'link':_0x1ff86b(_0x414716)[_0x55b8f2(0x8e4,0x89e,0xf62,0xc26)](_0x1ad183['Gpyae'])['attr'](_0x1ad183['cQUoc']),'category':_0x1ad183[_0x18e813(0x9bb,0x1184,0x136d,0xf2c)](_0x1ff86b,_0x414716)[_0x18e813(0xb63,0xf40,0xb1c,0xe09)](_0x1ad183['ErfsD'])[_0x55b8f2(0x568,0xa13,0x9d1,0x718)]()[_0x55b8f2(0xdad,0x7bf,0x1012,0xabd)](_0x55b8f2(0xbd2,0x1072,0xe54,0xc46),''),'share_count':_0x1ad183[_0x18e813(0x13d,0x66e,0x48b,0x4d3)](_0x1ff86b,_0x414716)[_0x55b8f2(0xa47,0x806,0x6b5,0xc26)](_0x1ad183[_0x18e813(0x681,0xbb1,0x95f,0x8e8)])[_0x55b8f2(0xc5b,0x340,0xb73,0x718)](),'views_count':_0x1ff86b(_0x414716)[_0x55b8f2(0x731,0xdad,0x678,0xc26)](_0x18e813(0x721,0x9d4,0x44e,0x9a1)+'iv.entry-a'+_0x18e813(0x7ad,0xd0b,0x55d,0xaf5)+'\x20>\x20p\x20>\x20spa'+_0x18e813(0xd2d,0x652,0xb39,0x9d4)+_0x55b8f2(0x8cc,0xa06,0x690,0x599))[_0x55b8f2(0xc7f,0x906,0xc3b,0x718)](),'type':_0x1ad183[_0x18e813(0x116e,0xaaa,0xd96,0xf10)](_0x1ff86b,_0x414716)[_0x18e813(0x88c,0xc97,0xa6b,0xe09)](_0x1ad183[_0x55b8f2(0xc7c,0x9d5,0x65d,0xb8a)])['attr']('type')||_0x18e813(0xbe8,0x722,0x4bd,0x7f2),'video_1':_0x1ad183[_0x18e813(0xf6,0xba3,0x497,0x675)](_0x1ff86b,_0x414716)[_0x18e813(0x1109,0x91c,0x10fa,0xe09)](_0x1ad183['rBlqq'])['attr'](_0x1ad183[_0x55b8f2(0x462,0x95d,0x736,0x832)])||_0x1ff86b(_0x414716)[_0x55b8f2(0xff5,0xf67,0x1064,0xc26)](_0x1ad183['TmytI'])[_0x18e813(0x4a6,0x714,0x423,0x84e)](_0x1ad183['hHPMM']),'video_2':_0x1ad183[_0x55b8f2(0x573,0x6dc,0x34d,0x492)](_0x1ff86b,_0x414716)[_0x55b8f2(0xe13,0xba1,0x80e,0xc26)](_0x1ad183[_0x55b8f2(0xcde,0x764,0x1052,0xac5)])[_0x18e813(0x71e,0xac2,0x5e4,0x84e)](_0x1ad183['cQUoc'])||''});}),_0xbd6b1f['IQGsM'](_0x289396,_0x584d3f);});});}else{let _0x28813c=_0x53e8cc[_0x40fc7c(0x18,0x527,0x89c,0x86e)][_0x140045];if(_0x28813c[_0x40fc7c(0xf8d,0xcbd,0x11e6,0x11b6)]==_0x227c85[_0x6f7df7(0x366,0x6c6,0x63a,0xb9b)]){if(_0x227c85[_0x6f7df7(-0x1fa,-0x1c3,0x23b,0x277)](_0x227c85[_0x6f7df7(0x42b,0x2d3,0x886,0xc03)],_0x6f7df7(0x79b,0x780,0x4ba,0x423))){let {contentLength:_0x4adb17}=_0x28813c,_0x24f4ba=await _0x227c85['ChfQY'](bytesToSize,_0x4adb17);const _0x420041={};_0x420041[_0x6f7df7(-0x503,-0x4ce,0xa5,0x376)]=_0x28813c[_0x6f7df7(0x569,0x319,0x685,0x4ed)],_0x420041[_0x40fc7c(0x71d,0x902,0x3a0,0x6c0)]=_0x24f4ba,_0x1c2429[_0x140045]=_0x420041;}else _0x497574[_0x6f7df7(0x1fc,-0x29,0x4f7,0x927)](_0x1181bf,_0x497574['wHJKY']),_0x497574[_0x6f7df7(0x1d4,0x7f3,0x4f7,0x299)](_0x34ffb1,_0x206839),_0x34359c[_0x6f7df7(0x8aa,0x605,0xaec,0x6a5)](_0x2b0bc6);};}};let _0x144069=_0x1c2429[_0x40fc7c(0xf41,0xbf2,0x8fa,0x1186)](_0x413fc9=>_0x413fc9[_0x40fc7c(0x661,0x30e,-0x207,0x26)]!=undefined&&_0x413fc9[_0x40fc7c(0x548,0x902,0x490,0x3c6)]!=undefined),_0x38fbf6=await axios[_0x6f7df7(0x73c,0xb87,0xbe0,0x8c4)]('https://ti'+'nyurl.com/'+_0x6f7df7(0x5ea,-0x1f8,0x2d0,-0x2cd)+_0x6f7df7(0x3,0x44b,0x228,0x70a)+_0x144069[-0x2628+0x349*-0x1+0x2971]['audio']),_0xcabf6c=_0x38fbf6[_0x6f7df7(0x57a,0x27c,0x600,0x99d)],_0x1c92b1=_0x53e8cc[_0x40fc7c(0xeed,0xddd,0x9d5,0x9b0)+'ls'][_0x40fc7c(0xda5,0xc6e,0xc53,0x804)],_0x26c7f4=_0x53e8cc[_0x40fc7c(0x1041,0xddd,0x120e,0x83d)+'ls']['descriptio'+'n'],_0x479b96=_0x53e8cc[_0x40fc7c(0xa30,0xddd,0x1060,0x84a)+'ls'][_0x40fc7c(0x580,0x92f,0xa3b,0x53b)],_0x219016=_0x53e8cc[_0x6f7df7(0x1073,0x1018,0xb74,0x64b)+'ls'][_0x40fc7c(0x407,0x311,0x1a9,0x38b)],_0xaef47e=_0x53e8cc[_0x40fc7c(0xd2e,0xddd,0x8b7,0x1136)+'ls']['dislikes'],_0x419700=_0x53e8cc['videoDetai'+'ls'][_0x6f7df7(0x707,0x396,0x4a2,-0x37)+_0x6f7df7(0x2c1,-0x175,0x1f4,0x68e)],_0x46a90e=_0x53e8cc[_0x40fc7c(0xf69,0xddd,0x848,0xd4f)+'ls'][_0x6f7df7(0x98,0x344,0x516,0x87f)],_0x3a7338=_0x53e8cc['player_res'+'ponse'][_0x6f7df7(0xf87,0xd86,0xba9,0xf28)+'t'][_0x6f7df7(0x1f4,0x7f3,0x6f4,0x500)+'oformatRen'+_0x6f7df7(0xfb5,0xd04,0xb28,0xcd8)][_0x40fc7c(0x7cf,0xcf2,0x8a6,0xc79)][_0x40fc7c(0x311,0x3ba,0x904,0x507)][-0x1b65+-0x1c61*0x1+0xb*0x512][_0x40fc7c(0x648,0x8ee,0xab3,0xb62)];const _0x2c36f9={};_0x2c36f9[_0x40fc7c(0xdf3,0xc6e,0xff3,0x783)]=_0x1c92b1,_0x2c36f9[_0x6f7df7(0x511,0x77a,0x29e,0x390)]=_0xcabf6c,_0x2c36f9[_0x6f7df7(0x9ad,0xb2e,0x699,0x979)]=_0x144069[-0x7c*-0x16+0x2*0x71c+-0x638*0x4][_0x40fc7c(0xde4,0x902,0x69e,0x6e0)],_0x2c36f9['thumb']=_0x3a7338,_0x2c36f9[_0x40fc7c(0x9d5,0x99c,0x8ad,0xceb)]=_0x479b96,_0x2c36f9['likes']=_0x219016,_0x2c36f9['dislike']=_0xaef47e,_0x2c36f9[_0x40fc7c(0x6e2,0xa5c,0xcf0,0xe7c)]=_0x419700,_0x2c36f9[_0x40fc7c(0xaf3,0x77f,0x53c,0xa39)]=_0x46a90e,_0x2c36f9['desc']=_0x26c7f4,_0x227c85[_0x6f7df7(0x7d4,0xb1,0x4f6,0x37b)](_0x27cc2b,_0x2c36f9);}else{_0x4a9eca['log'](_0x58fb4d[_0x6f7df7(0x4d7,0x2bc,0x6b6,0x2f3)](_0x584ae8,_0x3b9271,_0x58fb4d['FgRBg']),_0x58fb4d[_0x6f7df7(0x98c,0xf3c,0xa6e,0xa54)](_0x4dd73f,_0x58fb4d[_0x40fc7c(0x1185,0xc96,0x10e9,0x9ed)]));const _0x2f422b={};_0x2f422b[_0x6f7df7(0x689,0xedd,0xa05,0x9ac)]='storagemen'+'u',_0x2f422b[_0x6f7df7(0x15c,0x986,0x4e4,0xd8)+'n']=_0x6f7df7(0x502,0x7a6,0x519,0x5eb)+'is\x20if\x20you\x20'+_0x40fc7c(0xa74,0x7f0,0x96c,0x9e1)+_0x6f7df7(0x5a1,0x723,0x1b9,-0x1f8)+_0x6f7df7(0x75,0x377,0xbd,0xae)+'mmand_',_0x2f422b[_0x40fc7c(0x742,0xa3e,0xac6,0x4a0)]='0';const _0x5072bb={};_0x5072bb[_0x40fc7c(0x11f7,0xc6e,0x110b,0x9dd)]=_0x40fc7c(-0xe5,0x411,0x2c2,0x92b)+_0x40fc7c(-0xfa,0x4b6,0x970,0x73e),_0x5072bb[_0x40fc7c(0xccf,0x9fc,0x789,0xf2e)]=[_0x2f422b];const _0x456c85={};_0x456c85[_0x40fc7c(0x798,0x419,0x6c1,0x1cb)+'id']=[_0x2e9d02];const _0x118776={};_0x118776['quoted']=_0x5c8ea8,_0x118776[_0x6f7df7(0x5e8,0x12,0x57e,0x4c2)+'o']=_0x456c85;let _0xc8621b=_0x561310['prepareMes'+_0x40fc7c(0x445,0x8d7,0x5be,0x8ef)+_0x40fc7c(0xa1b,0xce5,0xa43,0xfa7)](_0x143c74,{'listMessage':{'title':_0x6f7df7(0x6a6,0x799,0x1e7,0x6df)+_0x40fc7c(0x24a,0x7df,0x56a,0x5eb),'description':'Hai\x20@'+_0x2063e9[_0x40fc7c(0x89e,0xc67,0x10ab,0xdb0)]('@')[0x39*-0x92+-0x6*-0x464+0x62a]+(_0x6f7df7(0xe90,0xe4b,0x9db,0x642)+_0x6f7df7(0x55,0x457,0x212,0xbf)+'nangkan\x20😇,'+_0x6f7df7(0xa24,0xe1f,0xa56,0x8bf)+_0x40fc7c(0xde6,0xcc7,0xc9b,0x107b)+_0x40fc7c(0x341,0x8c6,0xe0e,0xba3)+'hkan\x20dipil'+'ih!\x20Don\x27t\x20'+'spam'),'buttonText':_0x40fc7c(0x567,0x56b,0x3a5,0x7f5)+'E','footerText':''+_0x29abcd,'listType':_0x58fb4d[_0x40fc7c(0x476,0x664,0x648,0x7e0)],'sections':[{'title':'🐣\x20All\x20menu'+_0x6f7df7(0x197,0x27f,0x1e4,-0x1ca),'rows':[{'title':_0x6f7df7(0x979,0xa87,0x82a,0x404)+'ot','description':_0x58fb4d[_0x40fc7c(0x7a2,0x54e,0x2b7,0x66f)],'rowId':'0'}]},{'title':_0x58fb4d[_0x40fc7c(0x790,0x5d1,0x4ed,0x3a4)],'rows':[{'title':_0x58fb4d[_0x6f7df7(0x719,0x10a,0x1c9,0x19e)],'description':_0x58fb4d['spvLR'],'rowId':'0'}]},{'title':'Sub\x20Menu\x20k'+'e-2','rows':[{'title':_0x58fb4d['HBGgA'],'description':_0x6f7df7(0x659,0xa8f,0x519,0x686)+_0x40fc7c(0x11a8,0xc32,0xc6b,0x6ae)+_0x6f7df7(0x2c5,0x4e4,0x587,0x41c)+_0x6f7df7(0xc50,0xd0a,0xb0e,0x92e)+'pmenu\x20comm'+_0x6f7df7(0x68f,0x7c7,0x25d,-0x349),'rowId':'0'}]},{'title':'Sub\x20Menu\x20k'+_0x6f7df7(0xb8b,0x830,0x9e3,0xac8),'rows':[{'title':_0x58fb4d[_0x40fc7c(0x918,0x5c7,0x8ab,0x9e6)],'description':_0x6f7df7(0x7cf,0x14a,0x519,0x2c9)+_0x40fc7c(0x980,0xc32,0x84e,0x104f)+_0x6f7df7(0x793,0x3fa,0x587,0x160)+_0x40fc7c(0x87c,0xd48,0x997,0x9c9)+_0x40fc7c(0xab6,0x9cc,0x9ff,0x6d6)+_0x40fc7c(0x3bd,0x89d,0x510,0x758),'rowId':'0'}]},{'title':_0x40fc7c(0x2a0,0x411,0x821,0x632)+_0x40fc7c(0xb5b,0xd99,0xee7,0x12e9),'rows':[{'title':_0x58fb4d[_0x6f7df7(0x2bd,0xa86,0x713,0x4db)],'description':'_choose\x20th'+'is\x20if\x20you\x20'+_0x40fc7c(0x618,0x7f0,0x6ce,0x341)+_0x6f7df7(0x115,0x3c3,0x3ed,0x5a0)+_0x40fc7c(0x969,0x680,0x717,0x8ef)+'d_','rowId':'0'}]},{'title':_0x58fb4d[_0x40fc7c(0x37,0x52c,0x800,0x938)],'rows':[{'title':_0x58fb4d['tUaQE'],'description':_0x40fc7c(0xa6e,0x782,0x6e9,0x708)+'is\x20if\x20you\x20'+_0x6f7df7(0x260,0xf8,0x587,0x612)+_0x40fc7c(0xe09,0xe36,0x128c,0x8d1)+_0x6f7df7(0x7f7,0x926,0x85d,0x469)+_0x6f7df7(0x19a,-0x15d,0x25d,0x4f7),'rowId':'0'}]},{'title':'Sub\x20Menu\x20k'+_0x6f7df7(0x278,0x42,0x9c,0x435),'rows':[{'title':_0x58fb4d[_0x40fc7c(0x122,0x6a9,0x609,0x421)],'description':_0x58fb4d['kYDQF'],'rowId':'0'}]},{'title':_0x58fb4d[_0x40fc7c(0x352,0x30d,0x3b6,0x5b1)],'rows':[{'title':_0x58fb4d[_0x6f7df7(0x946,0x634,0x760,0x62b)],'description':_0x58fb4d['OiVVs'],'rowId':'0'}]},_0x5072bb,{'title':_0x58fb4d[_0x40fc7c(0x621,0xa6d,0xf66,0x981)],'rows':[{'title':_0x58fb4d[_0x6f7df7(0xd30,0x741,0xb2e,0x75d)],'description':_0x58fb4d[_0x6f7df7(0x49,-0x29,0x171,-0x20b)],'rowId':'0'}]},{'title':_0x58fb4d[_0x40fc7c(0x61d,0x8e3,0xc82,0xbf4)],'rows':[{'title':_0x40fc7c(-0xa2,0x3ff,0x56c,0x747),'description':_0x58fb4d[_0x40fc7c(0xce7,0xe03,0xfad,0xa4e)],'rowId':'0'}]},{'title':_0x58fb4d['FGkmG'],'rows':[{'title':_0x58fb4d[_0x40fc7c(0xff6,0xd4a,0xfcf,0xe7a)],'description':_0x58fb4d[_0x6f7df7(0x469,0x44c,0x1b7,-0x390)],'rowId':'0'}]},{'title':_0x6f7df7(-0x22b,0xa5,0x1a8,-0x20d)+'e-12','rows':[{'title':_0x58fb4d['FArIf'],'description':_0x58fb4d[_0x6f7df7(0xb98,0x783,0xa6c,0xb91)],'rowId':'0'}]},{'title':_0x58fb4d['jiHiH'],'rows':[{'title':_0x58fb4d['Losrm'],'description':_0x58fb4d[_0x40fc7c(0x9c6,0x5cb,0x11d,0x2ad)],'rowId':'0'}]},{'title':_0x40fc7c(0x397,0x411,0x562,0x8c8)+'e-14','rows':[{'title':_0x6f7df7(-0xe9,-0x27f,0x2b1,0xb0)+'u','description':_0x58fb4d['fAeGg'],'rowId':'0'}]},{'title':_0x58fb4d[_0x6f7df7(0xc9d,0x802,0xb6d,0x824)],'rows':[{'title':'image\x20effe'+'ct','description':_0x58fb4d[_0x6f7df7(0x613,0x2c3,0x70f,0x417)],'rowId':'0'}]},{'title':_0x58fb4d['HdxMT'],'rows':[{'title':_0x40fc7c(0x204,0x428,-0xfe,0x351)+'n','description':_0x58fb4d[_0x40fc7c(0x9ea,0x7ec,0x701,0xd79)],'rowId':'0'}]},{'title':_0x58fb4d[_0x40fc7c(0xe28,0x9fa,0x5b7,0x78b)],'rows':[{'title':_0x40fc7c(-0xb2,0x3b5,0x1ad,0x3f7),'description':_0x58fb4d[_0x6f7df7(0xac3,0xfe1,0xad0,0x940)],'rowId':'0'}]},{'title':_0x58fb4d['uJvgI'],'rows':[{'title':_0x58fb4d[_0x6f7df7(-0x308,0x115,0x268,-0x20)],'description':_0x6f7df7(0x6c8,0x4a2,0x519,0x438)+_0x40fc7c(0xa1c,0xc32,0xf26,0xc70)+_0x40fc7c(0xb3f,0x7f0,0xa28,0xd4f)+'e\x20the\x20anim'+'emenu\x20comm'+_0x6f7df7(0xf5,0x599,0x25d,0x26d),'rowId':'0'}]},{'title':_0x58fb4d[_0x6f7df7(0xaa0,0xab2,0x575,0x7eb)],'rows':[{'title':_0x58fb4d[_0x40fc7c(0xff,0x37f,0x53f,0x16b)],'description':_0x58fb4d[_0x40fc7c(0x456,0x6d1,0x831,0xa76)],'rowId':'0'}]},{'title':_0x58fb4d[_0x40fc7c(0x746,0xb44,0x605,0xc40)],'rows':[{'title':_0x58fb4d[_0x6f7df7(0x56f,0x5b7,0x178,0x69c)],'description':_0x58fb4d[_0x6f7df7(0x6d7,0xa85,0xacd,0x86c)],'rowId':'0'}]},{'title':_0x6f7df7(0x3f8,0x3bb,0x1a8,0x40a)+_0x6f7df7(-0x7c,0x4e1,0x2f8,-0x15c),'rows':[{'title':_0x40fc7c(0x9c8,0xb4d,0x83f,0x95b),'description':_0x58fb4d[_0x40fc7c(0xb8a,0xdd3,0x1102,0xf96)],'rowId':'0'}]},{'title':_0x58fb4d['OGAQM'],'rows':[{'title':_0x58fb4d[_0x40fc7c(0xd7c,0x9a4,0x846,0xd0a)],'description':_0x58fb4d[_0x40fc7c(0x1171,0xe07,0xf10,0xd25)],'rowId':'0'}]},{'title':_0x40fc7c(0xc73,0x9b5,0xd93,0xa63)+_0x40fc7c(0x62e,0x4af,0x254,0x4dd),'rows':[{'title':_0x58fb4d[_0x40fc7c(0x479,0x848,0x3be,0x5a6)],'description':_0x58fb4d[_0x6f7df7(0x90d,-0x48,0x37d,0x6d6)],'rowId':_0x58fb4d['VaLLg']}]},{'title':_0x58fb4d[_0x6f7df7(-0x263,0xe5,0x27e,0x16a)],'rows':[{'title':_0x58fb4d[_0x40fc7c(0xbd4,0x9c2,0x976,0x825)],'description':_0x58fb4d['hzaRd'],'rowId':'0'}]}]}},_0x118776);const _0xc5cf53={};_0xc5cf53['waitForAck']=!![],_0x595cc2[_0x6f7df7(0xf91,0xf9c,0xb43,0xde8)+'sage'](_0xc8621b,_0xc5cf53);}})['catch'](_0x52dbea);});}reply(lang[_0x5a3069(0x652,0xa39,0x70a,0x29f)]());let yut=await yts(args[0x1725+-0x1981*0x1+0x25c]);server='en68',ytMp3(ytmp3)['then'](_0x2c89fb=>{function _0xe37479(_0x45997d,_0x59cd4e,_0x119b8b,_0x524b84){return _0x5f09b6(_0x45997d,_0x59cd4e-0xff,_0x119b8b-0x16b,_0x59cd4e- -0x5a);}function _0x40cd2b(_0x1f2246,_0x20b81d,_0x421679,_0xb26768){return _0x5a3069(_0x1f2246-0x7a,_0x20b81d-0x18d,_0x1f2246- -0x5ff,_0x421679);}const _0x1a9a6c={'kNfcE':function(_0x2da7f7,_0x9012c8){return _0x2da7f7>=_0x9012c8;},'mSSlF':function(_0x275f81,_0x43311b){return _0x275f81(_0x43311b);},'gMPmh':_0x40cd2b(0x800,0x67f,0x5c0,0x632),'iQNNr':function(_0x1f2a75,_0xd139c1,_0x1623b9,_0x4551d0){return _0x1f2a75(_0xd139c1,_0x1623b9,_0x4551d0);},'rumlW':function(_0x35024c,_0x116269){return _0x35024c(_0x116269);},'uMnKU':'OWNER','LZqEX':_0x40cd2b(0x160,0x699,-0x3f3,0x2d2),'fEdmw':'https://yo'+_0xe37479(0x239,-0xc7,-0x5cc,0x1e6)+_0x40cd2b(0x697,0x698,0x68f,0x805),'bkalZ':'audio/mp4'},{title:_0x262ef6,result:_0x4d92b5,size:_0x3ceca0,thumb:_0x3711e4,views:_0x63fe21,likes:_0x491da6,dislike:_0x311bf9,channel:_0x3f695c,uploadDate:_0x254587,desc:_0x139c9e}=_0x2c89fb;axios['get']('https://ti'+'nyurl.com/'+_0x40cd2b(0x112,0x587,0x519,0x600)+_0x40cd2b(0x6a,0x4b5,0x2e8,-0x521)+q)[_0x40cd2b(0x552,0x507,0x6bf,0x21)](async _0x178db0=>{if(_0x1a9a6c[_0x4b3b47(0x5fd,0x74c,0x100,0x10a)](_0x1a9a6c[_0x4b3b47(0xab2,0x52b,0x9c7,0x917)](Number,_0x3ceca0[_0x59b36a(0x12a4,0x11a5,0xd73,0xd4a)](_0x1a9a6c[_0x4b3b47(0xa99,0x92c,0xf7d,0xdca)],'')),0x2476+0x1e7+-0x2621))return _0x1a9a6c['iQNNr'](sendMediaURL,from,_0x3711e4,_0x4b3b47(0x217,0x782,0xcf,0x42d)+_0x4b3b47(0x882,0x487,0xa77,0xd06)+_0x59b36a(0xabf,0x7b1,0x112f,0xc32)+'🎀\x20Title\x20:*'+'\x20'+_0x262ef6+(_0x59b36a(0x2a4,0xbb,0x210,0x65b)+'*\x20')+_0x3ceca0+(_0x4b3b47(0x459,-0x47,-0x93,0x41d)+_0x59b36a(0xbe7,0xf26,0x671,0xb73))+_0x63fe21+(_0x4b3b47(0x9be,0x4c2,0x750,0xa3b)+_0x4b3b47(0x6d9,0x969,0x994,0x854))+_0x491da6+('\x0a*👎\x20Dislik'+_0x4b3b47(0x353,0x62b,0x1a6,0x238))+_0x311bf9+(_0x4b3b47(0x5c0,0x419,0x4d3,0xb17)+'l\x20:*\x20')+_0x3f695c+(_0x4b3b47(0xdd,-0x324,-0x2f4,0x177)+'\x20:*\x20')+_0x254587+('\x0a*🌀\x20Url\x20:*'+'\x20')+_0x4d92b5+enter+enter+(_0x59b36a(0xc20,0x104d,0xea4,0xd3a)+'asi\x20lebih\x20'+_0x4b3b47(0x835,0x922,0x61e,0x7b1)+_0x4b3b47(0x923,0xc5f,0xd52,0x53e)+_0x59b36a(0xda3,0x6ad,0x82f,0x80e)+_0x59b36a(0xeb2,0x1136,0x113b,0xb93)));const _0x23c4ff=_0x4b3b47(0x217,-0x35b,-0x26b,0xa0)+_0x4b3b47(0x882,0x3a1,0x90b,0xd16)+_0x59b36a(0xe16,0x1158,0xd92,0xc32)+_0x59b36a(0x1232,0x136d,0x1331,0xdfc)+'\x20'+_0x262ef6+('\x0a*⚙️\x20Size\x20:'+'*\x20')+_0x3ceca0+(_0x4b3b47(0x459,-0xb4,-0xe2,-0x117)+_0x4b3b47(0x6d9,0xc53,0x15b,0xaec))+_0x63fe21+(_0x59b36a(0xee3,0xc76,0x8e4,0xe58)+':*\x20')+_0x491da6+(_0x59b36a(0xc4a,0x1110,0xd63,0xc8e)+_0x59b36a(0xaf6,0x64c,0x48f,0x7ed))+_0x311bf9+(_0x59b36a(0x9af,0xc61,0x9b2,0xa5a)+_0x4b3b47(0x2a5,0x197,0x644,0x87))+_0x3f695c+(_0x4b3b47(0xdd,0x3ac,-0x33c,-0x3f)+_0x59b36a(0x701,0x641,0xa19,0x96c))+_0x254587+('\x0a*🌀\x20Url\x20:*'+'\x20')+q+(_0x4b3b47(0x8ef,0x578,0x816,0x9a7)+'sebentar\x20a'+_0x4b3b47(0x1fe,0x2bf,-0x357,0x626)+'ng\x20dikirim'+_0x59b36a(0x886,0x4e7,0xa3f,0x5fd));let _0x2f26ba=await _0x1a9a6c[_0x59b36a(0xc43,0x7a4,0x809,0x95e)](getBuffer,_0x3711e4);const _0x3c2919={};_0x3c2919[_0x4b3b47(0x481,0x914,0x4de,0x8bd)+'t']=_0x1a9a6c[_0x4b3b47(0x94d,0x737,0x9c9,0xb7e)];const _0x2c3818={};_0x2c3818['buttonId']=_0x4b3b47(0x74b,0x2c3,0x540,0x611),_0x2c3818[_0x59b36a(0xfc1,0x753,0x726,0xb4c)]=_0x3c2919,_0x2c3818['type']=_0x1a9a6c[_0x4b3b47(0xa,-0x31b,-0x46d,0x539)];let _0x1ff6d3=[_0x2c3818];await sendButLocation(from,_0x23c4ff,_0x59b36a(0x10a2,0xd3e,0x116e,0xf1f)+enter+('Jika\x20whats'+_0x4b3b47(0x950,0x5ad,0xb07,0xecc)+_0x4b3b47(0xa27,0x6e7,0xc58,0x913)+_0x59b36a(0x55a,0xa43,0x407,0x651)+_0x4b3b47(0x613,0x23f,0x68c,0x670)+_0x4b3b47(0x8a,0x2eb,0x294,0x572)+_0x59b36a(0x6d3,0xa61,0x60a,0x88e)+_0x4b3b47(0x2ab,0x1ca,0x278,0x5e7)+_0x4b3b47(0x1f2,0x79a,0x339,-0x16)+_0x59b36a(0xbf2,0x1138,0xd2d,0xced))+enter+enter+'©\x20'+ownername,_0x2f26ba,_0x1ff6d3,{});let _0x4fb560=await getBuffer(_0x4d92b5);function _0x59b36a(_0xf28036,_0x21dd50,_0x5ea6ad,_0x1543ad){return _0x40cd2b(_0x1543ad-0x5dd,_0x21dd50-0x6d,_0xf28036,_0x1543ad-0x3f);}try{pp_userb=await alpha[_0x4b3b47(0x495,0x342,0x8ad,0xa4a)+'Picture'](sender);}catch{pp_userb=_0x59b36a(0x6d0,0x966,0xa00,0x528)+_0x4b3b47(0x1f0,0x358,-0x1d5,0x775)+_0x4b3b47(0x3d2,0x231,0x3f9,0x88)+'bb87660.pn'+'g';}let _0x4bd66f=await getBuffer(pp_userb);const _0x3b4ec6={};_0x3b4ec6[_0x59b36a(0x1505,0xbd5,0xf51,0xfc4)]=_0x1a9a6c[_0x59b36a(0xfa8,0xf39,0xf7b,0xb38)],_0x3b4ec6[_0x59b36a(0xb94,0xeee,0xa6a,0xcac)]=0x2,_0x3b4ec6[_0x59b36a(0xd2f,0x1285,0x12a0,0xe24)]='Youtube\x20Mp'+'3',_0x3b4ec6[_0x59b36a(0x41a,0x9d6,0x755,0x90d)]='',_0x3b4ec6[_0x4b3b47(0xa33,0xb9e,0x60c,0xd6d)+'rl']='',_0x3b4ec6[_0x4b3b47(0xa0e,0xc16,0xbf8,0xaa1)]=_0x4bd66f;const _0x5d2a94={};_0x5d2a94['forwarding'+'Score']=0x3b9aca00,_0x5d2a94[_0x59b36a(0x1471,0x114a,0x14d0,0xfb7)+'d']=!![],_0x5d2a94[_0x4b3b47(0x20,0x396,-0x3d2,0x5d2)+_0x59b36a(0x1013,0xe6b,0xb63,0xff8)]=!![],_0x5d2a94['externalAd'+_0x59b36a(0x8d6,0x608,0xc97,0x874)]=_0x3b4ec6;const _0x967a46={};_0x967a46[_0x59b36a(0x4ad,0x76c,0xa15,0x99d)+'o']=_0x5d2a94;function _0x4b3b47(_0x3457e5,_0x10cd39,_0x7779f,_0x1050fd){return _0xe37479(_0x10cd39,_0x3457e5-0x267,_0x7779f-0x15,_0x1050fd-0x196);}_0x967a46[_0x59b36a(0xcdb,0x290,0xc12,0x78c)]=_0x1a9a6c[_0x59b36a(0x88e,0x844,0x1139,0xbfd)],_0x967a46['filename']=_0x262ef6+_0x4b3b47(0x692,0x4cb,0x508,0xac9),_0x967a46[_0x59b36a(0x4f6,0x406,0xa,0x4e8)]=fgclink2,_0x967a46[_0x59b36a(0xa16,0xb24,0xd0b,0xea8)]=pp_bot2,alpha[_0x4b3b47(0x624,0x582,0x504,0x156)+'e'](from,_0x4fb560,MessageType['document'],_0x967a46);});})[_0x5a3069(0xab2,0x1116,0xbb2,0x94e)](_0x3a2a0f=>reply('Server\x20err'+'or')),await limitAdd(sender,limit);}break;case _0x5f09b6(-0x331,-0x66b,-0x4db,-0x196):case _0x5a3069(0x6bc,0x534,0xa44,0x953):case _0x5a3069(0x928,0x2d8,0x539,0x591)+'tory':const _0x5cef25={};_0x5cef25['displayTex'+'t']='Check\x20Limi'+'t';const _0x5831ee={};_0x5831ee[_0x5a3069(0xac4,0x966,0x6b1,0x33f)]=_0x5f09b6(0xd3c,0x4ff,0x706,0x91a),_0x5831ee[_0x5a3069(0x807,0xe8a,0xb6e,0xa22)]=_0x5cef25,_0x5831ee[_0x5a3069(0xa99,0xf90,0xd2c,0xb75)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x5f09b6(0x3b5,0xb33,0xe98,0x91a)](prefix),'©\x20'+ownername,[_0x5831ee]);if(!q)return reply(_0x5f09b6(0x910,0x49b,0xd39,0x8d6)+'a?');pape=q,hx[_0x5a3069(0x89,0x425,0x533,0x1cf)](pape)['then'](async _0x545839=>{const _0x3ae090={'mqPti':function(_0x7b02a4,_0x5b4ead){return _0x7b02a4(_0x5b4ead);},'DozAW':_0x2faba2(0x5b6,0x64b,0xac2,0x1a0),'ubSLv':function(_0x21bd2a,_0x195c2b){return _0x21bd2a(_0x195c2b);}};let _0x4f5006=await _0x3ae090['mqPti'](getBuffer,_0x545839[_0x2faba2(0x85f,0x366,0xcf3,0x664)][_0x12d387(0x11de,0x1384,0xde0,0xb85)+_0x12d387(0x13c8,0x1499,0xf87,0x1248)]);await alpha[_0x2faba2(0xb5b,0xb9a,0xb02,0x731)+'e'](from,_0x4f5006,image,{'thumbnail':_0x4f5006,'quoted':mek,'caption':_0x12d387(0x1095,0xa1e,0xf0a,0xd37)+_0x2faba2(0xddd,0xdf5,0xa4a,0xd81)+'」'+enter+enter+_0x12d387(0x705,0x721,0x439,0x334)+_0x545839[_0x2faba2(0x85f,0x712,0x41e,0x9c8)]['id']+enter+('📛\x20*Usernam'+'e\x20:*\x20')+_0x545839['user']['username']+enter+(_0x2faba2(0xc3a,0xf38,0xeaa,0xaea)+_0x2faba2(0xefa,0x10e4,0x9b0,0x1025))+_0x545839['user']['fullName']+enter+(_0x12d387(0x97b,0xda,0x4da,0x35)+_0x12d387(0x3a8,0x879,0x73a,0xcca))+_0x545839[_0x2faba2(0x85f,0x67d,0xcc6,0x3aa)][_0x12d387(0x3ec,0x383,0x57e,0x45b)]+enter+(_0x2faba2(0x1093,0x15c7,0x1626,0xfec)+_0x12d387(0x113b,0xd01,0xd03,0xc86))+_0x545839[_0x12d387(0x965,0x265,0x754,0xacf)][_0x2faba2(0xd32,0x1036,0xc9c,0x10b3)]+enter+(_0x2faba2(0x657,0x864,0x2f0,0xb6c)+'\x20https://i'+_0x12d387(0xda6,0xd33,0xb40,0xa63)+_0x12d387(0xbd9,0xcc5,0xbc5,0xcc1))+_0x545839[_0x2faba2(0x85f,0x688,0x8d0,0x7c9)]['username']+enter+(_0x12d387(0x515,0x846,0x7b2,0xba7)+'*\x20')+_0x545839[_0x12d387(0xd8a,0xe7b,0xd10,0x804)][_0x2faba2(0x759,0x41a,0xb6f,0xa8b)]+'\x20Media'+enter+enter+(_0x12d387(0x68c,0x64b,0x82c,0x793)+'berapa\x20saa'+_0x12d387(0x107f,0xe65,0xd14,0x8eb)+'an\x20dikirim'+'_')});function _0x2faba2(_0x3352e5,_0x3c9897,_0x5929f0,_0x3767ad){return _0x5a3069(_0x3352e5-0xdd,_0x3c9897-0x1c,_0x3352e5-0x7b,_0x3c9897);}function _0x12d387(_0xa221e3,_0x37f2c1,_0x5d783e,_0x2d533e){return _0x5a3069(_0xa221e3-0x11b,_0x37f2c1-0x39,_0x5d783e- -0x90,_0x37f2c1);}for(let _0x19fc20 of _0x545839['medias']){if(_0x19fc20['url'][_0x12d387(0x1329,0x11dd,0xf77,0xea1)](_0x3ae090[_0x12d387(0x11b5,0x10db,0xef6,0xb27)])){let _0x213fe2=await getBuffer(_0x19fc20['url']);alpha[_0x2faba2(0xb5b,0x80b,0x987,0xd7f)+'e'](from,_0x213fe2,video,{'thumbnail':Buffer[_0x12d387(0xddf,0x50a,0xa4b,0xffa)](0x99+0x5f9*-0x5+0xea2*0x2),'quoted':mek,'caption':'Instagram\x20'+'•\x20'+_0x19fc20[_0x2faba2(0xda7,0x1063,0x116e,0x117e)]});}else{let _0x5af9f4=await _0x3ae090[_0x12d387(0xa39,0xd49,0xcad,0xa86)](getBuffer,_0x19fc20[_0x2faba2(0xb41,0x8aa,0xcf0,0xa2c)]);alpha[_0x2faba2(0xb5b,0xdee,0x789,0xf79)+'e'](from,_0x5af9f4,image,{'thumbnail':Buffer[_0x2faba2(0xb56,0xf50,0xe88,0x829)](-0x1ba5+-0x3*0xc91+0x4158),'quoted':mek,'caption':'Instagram\x20'+'•\x20'+_0x19fc20[_0x12d387(0xb6a,0xdad,0xc9c,0x71a)]});}}})[_0x5f09b6(0x48b,0x5e1,0x801,0x4e9)](_0x381c3c=>reply('Terjadi\x20ke'+_0x5a3069(0xaea,0x85e,0x92e,0xc69)+_0x5a3069(0x10f3,0x9ba,0xbe6,0xc61)+_0x5f09b6(0x124,-0x141,0x4eb,0x1d1)+_0x5a3069(0x96e,0xddd,0xef7,0xa1f)+'ma'));break;case'ig':case _0x5a3069(0xe27,0x8f9,0x93c,0x57b):case'igphoto':case _0x5f09b6(0x97a,0xbe8,0x9e1,0x635):case _0x5a3069(0xd6c,0x9a3,0x88b,0xab9):case'igfoto':case _0x5a3069(0x8fc,0x5ed,0x6eb,0x34a):case'instavideo':case _0x5f09b6(0x539,0x515,0x832,0x7ed):case'igreels':case _0x5f09b6(0x22a,0x7cb,0xaa2,0x561):case _0x5a3069(0xbc5,0xac6,0xab1,0xc87):case _0x5a3069(0xfc6,0xbad,0xfa3,0xd8a):case _0x5f09b6(0xc37,0x94e,0x215,0x713):const _0x1e412b={};_0x1e412b[_0x5f09b6(0x55,0x3f4,0x55a,0x274)+'t']=_0x5a3069(0x9c7,0xcbe,0xb19,0x852)+'t';const _0x1e03b7={};_0x1e03b7[_0x5a3069(0xb9b,0xb38,0x6b1,0x773)]=_0x5a3069(0x1420,0xb3c,0xfe3,0xafd),_0x1e03b7[_0x5a3069(0xbf3,0xe9b,0xb6e,0xb8c)]=_0x1e412b,_0x1e03b7[_0x5f09b6(0xabd,0xa37,0x5d6,0x663)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang['limit'](prefix),'©\x20'+ownername,[_0x1e03b7]);if(!isUrl(args[-0x1*0x45b+-0x2*-0x653+-0x84b])&&!args[0x23d5+0x1*0xcb+0x4*-0x928][_0x5a3069(0x12e6,0xa83,0x1007,0x112d)]('instagram.'+_0x5a3069(0x3b1,0x3bb,0x62b,0x55d)))return reply(lang['erorLink']());let urlnya=q;hx['igdl'](urlnya)[_0x5f09b6(0x987,0x7eb,0x728,0x488)](async _0x18f783=>{function _0x662b58(_0xdcf455,_0xdea218,_0x3961c4,_0xcfa85c){return _0x5f09b6(_0xcfa85c,_0xdea218-0x3d,_0x3961c4-0x56,_0xdea218-0x13f);}const _0x14a358={'IESde':function(_0x166923,_0x3da954){return _0x166923(_0x3da954);},'cwXQO':function(_0x22db1b,_0x88c657){return _0x22db1b(_0x88c657);},'FgPdq':function(_0x2d7782,_0x16b921){return _0x2d7782!==_0x16b921;},'EbFSy':_0x662b58(-0x2cf,0x1b8,0xdd,-0x1fe),'RqdbB':function(_0x49f62b,_0x3c4dad){return _0x49f62b(_0x3c4dad);}};let _0x2d6d45=await _0x14a358[_0x4d5105(0x46e,0x3e7,0x160,-0x2c8)](getBuffer,_0x18f783[_0x4d5105(-0xa,0x343,0x2c3,0x234)][_0x4d5105(0x3af,0x7cd,0x94f,0x3a5)+'Url']);await alpha['sendMessag'+'e'](from,_0x2d6d45,image,{'thumbnail':_0x2d6d45,'quoted':mek,'caption':_0x4d5105(0x953,0x601,0xa79,0xb7e)+_0x662b58(0xe9d,0x999,0x838,0x92b)+_0x662b58(-0xbf,0x214,0x27f,0x565)+enter+enter+_0x4d5105(-0x14c,-0x16e,-0x58,0x341)+_0x18f783[_0x662b58(0x592,0x25a,0x733,0x5d6)]['id']+enter+(_0x662b58(0x1df,0x6f1,0x13f,0x2d4)+_0x4d5105(0xaea,0x8b3,0x95e,0x558))+_0x18f783[_0x662b58(0x29b,0x25a,0x206,-0x39)]['username']+enter+(_0x4d5105(0x613,0x173,0x69e,0x7cb)+_0x662b58(0xde3,0x8f5,0xb3c,0xe88))+_0x18f783['user']['fullName']+enter+(_0x4d5105(0x4ca,-0x4ba,0x49,0xd8)+_0x662b58(-0xc,0x240,0x681,0x6ab))+_0x18f783['user'][_0x4d5105(0x138,0x4be,0xed,-0x3ea)]+enter+(_0x662b58(0x604,0xa8e,0xfeb,0xd62)+_0x4d5105(0x45a,0x31d,0x872,0xac7))+_0x18f783[_0x4d5105(-0x115,0xbf,0x2c3,0x3ca)][_0x662b58(0x66a,0x72d,0x5eb,0xbb6)]+enter+(_0x662b58(-0x512,0x52,-0x36a,0x421)+_0x662b58(-0x185,0xcd,0x601,-0x48b)+_0x662b58(0x8a1,0x646,0xb66,0x41f)+_0x662b58(0x118,0x6cb,0x9ac,0x2c0))+_0x18f783[_0x662b58(0x387,0x25a,0x6de,0x752)][_0x662b58(0x3b9,0x4e0,0x29e,0x8a8)]+enter+(_0x662b58(0x2a6,0x2b8,0x636,-0x71)+'*\x20')+_0x18f783['medias'][_0x4d5105(0x282,0x17,0x1bd,-0x2da)]+'\x20Media'+enter+enter+('_Tunggu\x20be'+_0x4d5105(-0x4d9,-0x4e6,-0x2f,0x515)+_0x4d5105(0xd45,0xaf6,0x883,0x316)+'an\x20dikirim'+'_')});function _0x4d5105(_0x18bf63,_0x3245f0,_0x4e69df,_0x4cee56){return _0x5f09b6(_0x18bf63,_0x3245f0-0xb9,_0x4e69df-0x2c,_0x4e69df-0x1a8);}for(let _0x48741e of _0x18f783[_0x662b58(0xb85,0x816,0x838,0x6ea)]){if(_0x48741e[_0x662b58(0x933,0x53c,0x4d1,0x782)][_0x4d5105(0x997,0x9f0,0xae6,0xed2)](_0x662b58(-0x2f5,-0x4f,0x40,-0x367))){let _0x23b94a=await _0x14a358[_0x662b58(0x448,0x49e,0x77c,0x2a2)](getBuffer,_0x48741e['url']);alpha[_0x4d5105(0x445,0x519,0x5bf,0x86b)+'e'](from,_0x23b94a,video,{'thumbnail':Buffer[_0x4d5105(0xb55,0x6c5,0x5ba,0x5e4)](-0x1a2a+0x3fa*0x1+0x50*0x47),'quoted':mek,'caption':'Instagram\x20'+'•\x20\x20'+_0x48741e[_0x4d5105(0xb2e,0xb44,0x80b,0x565)]});}else{if(_0x14a358['FgPdq'](_0x14a358[_0x4d5105(0x2a3,0x3c2,0x6c6,0x488)],_0x662b58(-0x3bd,0x1b8,-0x238,-0x358)))_0x14a358[_0x4d5105(0x3b8,-0x329,0x160,-0x114)](_0x3d9c20,_0xa7c5c9)[_0x662b58(0x641,0x5c7,0x15e,0xb78)](_0x41d5f4=>{const _0x12ba2e={};_0x12ba2e[_0xd68930(0x325,0x82c,0x7d0,0x6f0)]=0xc8;function _0xd68930(_0x116032,_0x41abf5,_0x5c7ba6,_0x58cde3){return _0x662b58(_0x116032-0x5,_0x41abf5-0x27c,_0x5c7ba6-0x1e0,_0x116032);}_0x12ba2e[_0xaf1f5e(0xa11,0x940,0x4bc,0x2c9)]=_0x41d5f4[0x1d32*0x1+-0x1865*0x1+0x1*-0x4cd]['link'];function _0xaf1f5e(_0x47c2cb,_0x49efec,_0x3779ce,_0x3d3a71){return _0x4d5105(_0x3d3a71,_0x49efec-0xe4,_0x3779ce- -0x110,_0x3d3a71-0x4b);}_0x14a358['IESde'](_0x5238e4,_0x12ba2e);})['catch'](_0x49258d);else{let _0x3a8b97=await _0x14a358['RqdbB'](getBuffer,_0x48741e[_0x662b58(0x8d7,0x53c,0x702,0x221)]);alpha[_0x4d5105(0x4db,0x39a,0x5bf,0x301)+'e'](from,_0x3a8b97,image,{'thumbnail':Buffer[_0x4d5105(0x46c,0x79a,0x5ba,0x62d)](0x61*-0x2a+-0xe9*0x1d+0x2a4f),'quoted':mek,'caption':_0x4d5105(0x465,0x20e,0x3d8,0xe8)+'•\x20'+_0x48741e[_0x4d5105(0xcbf,0xad4,0x80b,0x9ea)]});}}}})[_0x5a3069(0xe5a,0x9de,0xbb2,0x10ed)](_0x21f874=>reply(_0x5f09b6(0x6bd,0x528,0xedf,0x92e)+_0x5a3069(0xb7e,0xb70,0xfdd,0x1015)+_0x5f09b6(-0x538,0x25b,-0x148,-0x14d)+_0x5a3069(0xf3a,0x136d,0xe87,0x91c)+'te')),await limitAdd(sender,limit);break;case _0x5a3069(0xb79,0x526,0xa8d,0xa62):const _0x1b9820={};_0x1b9820['displayTex'+'t']=_0x5f09b6(0x2e3,0x657,0x7e4,0x450)+'t';const _0x4bc16f={};_0x4bc16f[_0x5f09b6(-0x171,0x222,0x4e6,-0x18)]=_0x5a3069(0xe2e,0xc89,0xfe3,0xcd8),_0x4bc16f[_0x5a3069(0xea0,0x7ed,0xb6e,0x5fb)]=_0x1b9820,_0x4bc16f[_0x5a3069(0x9a9,0xee2,0xd2c,0xfbb)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang['limit'](prefix),'©\x20'+ownername,[_0x4bc16f]);if(args[_0x5a3069(0x90b,0x28b,0x6de,0xc7e)]<-0x1fe4*-0x1+-0x1b7c+-0xa1*0x7)return reply(lang['noteks'](prefix,command));hhh=q,p=await getBuffer(_0x5f09b6(-0x322,0x418,0xa5,-0x93)+_0x5f09b6(-0x19e,-0x77c,-0x2fd,-0x1f2)+_0x5f09b6(0xe4d,0x650,0x9f9,0x909)+'pp.com/api'+_0x5a3069(0xcbc,0xc52,0xfbf,0xf9b)+_0x5a3069(0x7f8,0xcc0,0xb94,0x109e)+hhh+(_0x5f09b6(0x9cd,0x7b6,0x6db,0x604)+_0x5a3069(0x1a0,0x705,0x732,0x757)+_0x5a3069(0x69,0x4b5,0x57d,-0xc)));const _0x35c1e7={};_0x35c1e7[_0x5f09b6(0x198,-0x2c9,-0x45d,-0x1bf)]=fgclink,alpha['sendMessag'+'e'](from,p,sticker,_0x35c1e7),await limitAdd(sender,limit);break;case'ttp2':const _0x279a2e={};_0x279a2e[_0x5f09b6(0x4b0,0x716,0x3bf,0x274)+'t']=_0x5a3069(0xdaf,0xe5a,0xb19,0x795)+'t';const _0x5df32a={};_0x5df32a[_0x5a3069(0x7e9,0xb67,0x6b1,0xbff)]=_0x5a3069(0x112b,0x128e,0xfe3,0xcf3),_0x5df32a[_0x5f09b6(0x9ad,0xcd,0x3b0,0x4a5)]=_0x279a2e,_0x5df32a[_0x5f09b6(0x61c,0xb73,0x210,0x663)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang['limit'](prefix),'©\x20'+ownername,[_0x5df32a]);if(args[_0x5f09b6(-0x43a,0x531,-0x209,0x15)]<-0x231f+0x291+0x208f)return reply(lang[_0x5f09b6(0x870,0x42b,0x52e,0x4fa)](prefix,command));hhh=q,pp=await getBuffer(_0x5f09b6(-0x2de,-0x388,0x226,-0x93)+_0x5f09b6(0x329,-0x64,0x36,-0x1f2)+_0x5a3069(0xd18,0xed2,0xfd2,0xe24)+_0x5a3069(0x6d4,0x43f,0x61c,0x18f)+'/ttpcustom'+'?text='+hhh+(_0x5a3069(0xd53,0x8ab,0xa46,0xa4e)+_0x5f09b6(0xc07,0x776,0x5e1,0x8b3)+_0x5f09b6(0x1d,-0x263,-0xbb,0x238)));const _0x5966e6={};_0x5966e6['quoted']=fgclink,alpha[_0x5a3069(0x6de,0xfe8,0xae0,0xa9e)+'e'](from,pp,sticker,_0x5966e6),await limitAdd(sender,limit);break;case'ttp3':const _0x543b64={};_0x543b64['displayTex'+'t']=_0x5a3069(0x7a4,0xdcf,0xb19,0x82a)+'t';const _0x1bed96={};_0x1bed96[_0x5a3069(0x14c,0x273,0x6b1,0x4b2)]=_0x5a3069(0xfa0,0xa9c,0xfe3,0x1007),_0x1bed96[_0x5a3069(0xd60,0xf08,0xb6e,0x7ce)]=_0x543b64,_0x1bed96['type']=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x5f09b6(0x695,0x551,0xc3c,0x91a)](prefix),'©\x20'+ownername,[_0x1bed96]);if(args[_0x5a3069(0x586,0x967,0x6de,0x27b)]<0x2703+-0x101*-0xe+0x11b0*-0x3)return reply(lang[_0x5f09b6(0x5fa,0x3a,0x371,0x4fa)](prefix,command));hhh=q,ppp=await getBuffer(_0x5f09b6(-0x63d,-0x3b3,0x458,-0x93)+_0x5f09b6(-0x735,0x1a,-0x44,-0x1f2)+_0x5a3069(0xcff,0xe48,0xfd2,0xca3)+_0x5a3069(0x436,0x2d3,0x61c,0x327)+'/ttpcustom'+_0x5a3069(0x952,0xf08,0xb94,0x1040)+hhh+(_0x5a3069(0x929,0x3c,0x55b,0x5f)+_0x5f09b6(0xa63,0x3fa,0x346,0x72b)+_0x5f09b6(0x8b0,0x15d,-0x79,0x324)));const _0x1cccbf={};_0x1cccbf['quoted']=fgclink,alpha[_0x5a3069(0x7e0,0x801,0xae0,0x94b)+'e'](from,ppp,sticker,_0x1cccbf),await limitAdd(sender,limit);break;case _0x5a3069(0xb85,0xa8d,0x668,0x808):const _0x354cc2={};_0x354cc2['displayTex'+'t']='Check\x20Limi'+'t';const _0x45b908={};_0x45b908[_0x5f09b6(-0x1a0,-0x5a8,-0x437,-0x18)]=_0x5f09b6(0xd21,0xc79,0x961,0x91a),_0x45b908[_0x5f09b6(0x18a,0xa2b,0x9e1,0x4a5)]=_0x354cc2,_0x45b908['type']=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x5a3069(0xd4a,0x14d1,0xfe3,0xe86)](prefix),'©\x20'+ownername,[_0x45b908]);if(args[_0x5a3069(0x88a,0x580,0x6de,0x7d8)]<0xcf8+-0x435*0x4+-0x1*-0x3dd)return reply(lang[_0x5a3069(0x6e6,0x626,0xbc3,0x6e4)](prefix,command));hhh=q,pppp=await getBuffer(_0x5f09b6(-0x162,0x15e,-0xfd,-0x93)+_0x5f09b6(0x39d,-0x323,-0x6f7,-0x1f2)+_0x5a3069(0xd3b,0xac4,0xfd2,0xd4b)+_0x5a3069(0x822,0xa7,0x61c,0xb8a)+_0x5a3069(0x1052,0xf07,0xfbf,0x1040)+'?text='+hhh+(_0x5f09b6(-0x55c,0x1b1,0x4,-0x17a)+_0x5a3069(0x5b4,0x9fe,0x72d,0x792)+'ardianto'));const _0x5823f0={};_0x5823f0[_0x5a3069(-0xa5,0xa6,0x50a,0xcb)]=fgclink,alpha[_0x5f09b6(0x8ea,0x21b,0x9b7,0x417)+'e'](from,pppp,sticker,_0x5823f0),await limitAdd(sender,limit);break;case'ppcouple':case _0x5a3069(0x8f4,0xbbf,0xa8c,0xbc7):const _0x438cb={};_0x438cb['displayTex'+'t']='Check\x20Limi'+'t';const _0x1904c7={};_0x1904c7[_0x5a3069(0x4eb,0xa86,0x6b1,0xa50)]=_0x5f09b6(0xbc1,0x439,0x843,0x91a),_0x1904c7['buttonText']=_0x438cb,_0x1904c7[_0x5a3069(0xd1a,0xe5b,0xd2c,0x90f)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x5a3069(0xe78,0xc1b,0xfe3,0xa52)](prefix),'©\x20'+ownername,[_0x1904c7]);if(!isGroup)return reply(lang['onlygc']());var datax=fs[_0x5a3069(0x81b,0xc1c,0x7b6,0x6f0)+'nc'](_0x5a3069(0x832,0x89a,0xd66,0xabe)+_0x5a3069(0xc2d,0xf5b,0xea0,0x1357));jsonData=JSON['parse'](datax),randIndex=Math[_0x5f09b6(0x4d8,-0x182,0x827,0x2d7)](Math[_0x5a3069(0x5cb,0xc86,0x84c,0x6b3)]()*jsonData['length']);let randKey_=jsonData[randIndex];Laki=await getBuffer(randKey_[_0x5a3069(0xbb1,0x3a3,0x811,0x453)]),await alpha[_0x5a3069(0xec4,0x918,0xae0,0xf06)+'e'](from,Laki,image,{'caption':_0x5f09b6(0xab,-0x14,0x5a2,0xcc),'quoted':mek,'thumbnail':Buffer[_0x5f09b6(0x24b,0x479,0x35f,0x412)](-0xbf9+-0x560+0x1159*0x1)}),Cewe=await getBuffer(randKey_[_0x5f09b6(-0x43d,0x337,-0x1b0,-0x82)]);const mediaxox=await alpha[_0x5a3069(0x98e,0xd49,0xe8e,0xdff)+_0x5a3069(0x2aa,0x1d0,0x6a0,0x949)](from,Cewe,MessageType[_0x5f09b6(0x7bc,0x87e,0x48d,0x424)],{'thumbnail':Buffer[_0x5f09b6(0x220,0x64f,-0x4,0x412)](0x2494*-0x1+0x1d1b+0x779*0x1)});let bacotluxxo=mediaxox['message'][_0x5a3069(0xb4d,0xbf7,0xd0d,0x11df)+'essage']?mediaxox['message'][_0x5f09b6(0x444,0x595,0xafa,0x644)+'essage']:mediaxox;const _0x4575c3={};_0x4575c3[_0x5f09b6(0x48d,-0x8c,-0x31f,0x274)+'t']='🐨\x20Owner';const _0x408fe5={};_0x408fe5['buttonId']='owner',_0x408fe5['buttonText']=_0x4575c3,_0x408fe5[_0x5a3069(0x9cd,0x10c8,0xd2c,0x92f)]=0x1;const _0x48e56b={};_0x48e56b[_0x5f09b6(0x6a,0x6b1,-0x25d,0x274)+'t']='Next\x20➡️';const _0x28af8d={};_0x28af8d[_0x5f09b6(0x481,-0x3ab,-0x29d,-0x18)]=''+command,_0x28af8d[_0x5f09b6(0x485,-0xe7,0x670,0x4a5)]=_0x48e56b,_0x28af8d[_0x5a3069(0xe7a,0xa9c,0xd2c,0xb29)]=0x1;const buttonsxox=[_0x408fe5,_0x28af8d],btnxo___={'contentText':_0x5a3069(0x762,0x9b6,0x908,0xc53),'footerText':''+tampilTanggal+enter+tampilWaktu+enter+enter+'©\x20'+creator+(_0x5f09b6(0x85f,0x742,0x4b0,0x5c8)+_0x5f09b6(-0x188,0x3c1,-0x2c6,-0xd9))+sender[_0x5a3069(0x12fd,0x135d,0xe3f,0xd1b)]('@')[0x15c7+0x7*-0x1fb+-0x7ea],'buttons':buttonsxox,'headerType':0x4,'imageMessage':bacotluxxo['message'][_0x5f09b6(0x562,0x4af,0x9b8,0x402)+'ge']},_0x229928={};_0x229928['quoted']=mek,alpha[_0x5f09b6(0x718,0x86f,0x1bc,0x417)+'e'](from,btnxo___,MessageType[_0x5a3069(0xb85,0x69f,0xa04,0xaa4)+_0x5f09b6(0x2f9,0x433,-0x166,-0x29)],_0x229928)[_0x5a3069(0x673,0xc1d,0xbb2,0x645)](_0x23bf0f=>{const _0x47bfca={'BxyDa':function(_0x4bc240,_0x32df15){return _0x4bc240(_0x32df15);},'TYKji':_0x102a80(0xe39,0xd5d,0x11e0,0xa40)+_0x102a80(0x7e7,0x96a,0x5d0,0x8d1)+_0x102a80(0xb0e,0x67a,0x369,0x2aa)+_0x56ef27(0xd4c,0xab7,0x573,0xa63)+'gi'};function _0x56ef27(_0x3a8b88,_0x2a7728,_0x20d2a8,_0x2efcaa){return _0x5a3069(_0x3a8b88-0x1b0,_0x2a7728-0x138,_0x2efcaa- -0x420,_0x2a7728);}function _0x102a80(_0x369825,_0x53b70e,_0x4c2fce,_0x591ea4){return _0x5a3069(_0x369825-0xf6,_0x53b70e-0x105,_0x53b70e- -0x119,_0x369825);}_0x47bfca['BxyDa'](reply,_0x47bfca[_0x56ef27(0x5f0,0x76c,0xded,0xb41)]);}),await limitAdd(sender,limit);break;case _0x5f09b6(-0x57,0x82b,0x977,0x52e):case _0x5a3069(0x104d,0xc91,0xe88,0x13d5):const _0x408de3={};_0x408de3[_0x5f09b6(0x35b,0x6d1,0x50c,0x274)+'t']=_0x5f09b6(0x863,0x4bc,0x971,0x450)+'t';const _0x1ebbbf={};_0x1ebbbf[_0x5a3069(0x56e,0x662,0x6b1,0x19d)]=_0x5f09b6(0xbda,0x750,0x9e9,0x91a),_0x1ebbbf[_0x5f09b6(0x9bc,0x651,0x508,0x4a5)]=_0x408de3,_0x1ebbbf['type']=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x5a3069(0x10fd,0x14fe,0xfe3,0x102c)](prefix),'©\x20'+ownername,[_0x1ebbbf]);if(!q)return reply(_0x5f09b6(0x8a,0x6ee,0x8f2,0x501)+_0x5f09b6(0x1f9,-0x2bd,0x98,0x1da));async function pinterestSearch(_0x45e66b){function _0x599ece(_0x4b4290,_0x4e7b95,_0x5b7424,_0x4f3cfa){return _0x5a3069(_0x4b4290-0x32,_0x4e7b95-0x1d3,_0x4f3cfa- -0x247,_0x4b4290);}const _0xb2dcd0={'IKniU':function(_0x2984e6,_0x3db093){return _0x2984e6*_0x3db093;},'Ilsaf':function(_0x237134,_0x4b749d){return _0x237134(_0x4b749d);},'rutHU':_0x599ece(0xe19,0xe65,0xc28,0xc92),'EaVhk':_0x5e7514(0xa77,0xa8b,0x84d,0x688),'VaOiA':_0x5e7514(0xeb8,0xcb5,0xaef,0xd78)+'n','aDXEh':_0x5e7514(0xe5f,0xea3,0xe82,0xb41)+'uest','PwkyL':_0x5e7514(0x6a3,0x624,0x9fe,0x1a9),'umxgn':'cors'};function _0x5e7514(_0x3c938b,_0x18fafe,_0x59e6a0,_0x66b07f){return _0x5a3069(_0x3c938b-0x198,_0x18fafe-0x5b,_0x18fafe- -0x35,_0x59e6a0);}return new Promise((_0x573dc8,_0x50ca8d)=>{const _0x4cc9ff={};_0x4cc9ff[_0x5ee17b(0xc04,0xdde,0x8ac,0x888)]='applicatio'+_0x5ee17b(0xb8e,0xa05,0x6e8,0x5f3)+_0x40e5d1(-0x247,0x43d,0x26b,0xab)+'ipt,\x20*/*,\x20'+_0x40e5d1(0x338,0x589,0x762,0x2b4),_0x4cc9ff[_0x5ee17b(0xf35,0x932,0x76b,0x98f)+_0x40e5d1(0x78a,0x7f6,-0x118,0x3fb)]=_0x40e5d1(0xd9,0x9c,0x54,0x147)+_0x5ee17b(0x7c5,0x982,0xfc4,0xb9d),_0x4cc9ff[_0x5ee17b(0xbc6,0x6fc,0xc6f,0x70c)+'rol']=_0xb2dcd0[_0x40e5d1(-0x33c,0x296,-0xd8,0x25b)],_0x4cc9ff[_0x40e5d1(0x6e1,0xa86,0x9cc,0x935)]=_0xb2dcd0[_0x5ee17b(0xbed,0x331,0x2fc,0x66c)],_0x4cc9ff[_0x5ee17b(0xaa6,0x96c,0xdef,0x88b)+'dest']=_0xb2dcd0['EaVhk'],_0x4cc9ff[_0x40e5d1(0x561,0x9f9,0xa1c,0x47a)+_0x5ee17b(0x886,0x7d5,0x5b2,0xa95)]='cors';function _0x40e5d1(_0x7eb203,_0x28101a,_0x4816df,_0x418598){return _0x599ece(_0x4816df,_0x28101a-0x188,_0x4816df-0xc5,_0x418598- -0x424);}_0x4cc9ff[_0x40e5d1(0x98d,0x684,-0xd6,0x47a)+_0x40e5d1(-0x1b8,0x132,0xdc,0x109)]=_0xb2dcd0[_0x5ee17b(0x74c,0xdfa,0xfac,0xcd7)],_0x4cc9ff[_0x5ee17b(0x5ac,0x97b,0x13e,0x4ed)]='1',_0x4cc9ff[_0x5ee17b(0x4b2,0x625,0x1b5,0x738)+_0x5ee17b(0x8a3,0x9f1,0x11aa,0xd23)]=_0x40e5d1(0x513,0x868,0x733,0x7d3),_0x4cc9ff[_0x5ee17b(0x876,0x73e,0x32,0x4d4)+_0x40e5d1(0x7cc,0x341,0xa52,0x60e)]=_0x40e5d1(0x4b4,-0x31f,-0x100,0x1e5),_0x4cc9ff['x-requeste'+_0x40e5d1(0x1fd,0x799,0x6da,0x618)]=_0xb2dcd0['aDXEh'];const _0x365c8a={};_0x365c8a[_0x5ee17b(0x925,0xd9e,0xb38,0x842)]=_0x4cc9ff,_0x365c8a[_0x40e5d1(-0x23d,-0x193,-0x5e4,-0xdf)]=_0x5ee17b(0x206,0x820,-0x5e,0x52e)+'w.pinteres'+_0x40e5d1(0x26d,0x2d9,0x57e,0x21);function _0x5ee17b(_0x3ff9f2,_0x978246,_0x1026d6,_0xb3def8){return _0x5e7514(_0x3ff9f2-0xd8,_0xb3def8- -0x225,_0x3ff9f2,_0xb3def8-0x4a);}_0x365c8a[_0x40e5d1(0x302,0x226,0x33e,0x126)+_0x40e5d1(0x5ee,0xaa7,0x7fb,0x682)]=_0x40e5d1(0xd7,0x42d,-0x126,0x3ce),_0x365c8a[_0x40e5d1(0x244,0x1c1,0x659,0x2c4)]=null,_0x365c8a['method']=_0xb2dcd0[_0x40e5d1(-0x41a,-0x1ed,-0x563,-0x1a4)],_0x365c8a[_0x40e5d1(0xac8,0x268,0x1d4,0x684)]=_0xb2dcd0[_0x40e5d1(0x4aa,0x346,0x5c6,0x7c0)],fetch(_0x5ee17b(0x52,0x8ec,0x989,0x52e)+_0x5ee17b(0xda4,0x59e,0x980,0x9f7)+_0x5ee17b(0x6b1,0x42f,0x82d,0x5c5)+_0x5ee17b(0xa4,0x655,0x98b,0x46c)+'earchResou'+_0x5ee17b(0x63b,0x4c3,0x677,0x78b)+'ource_url='+'%2Fsearch%'+_0x5ee17b(0x28d,0xc50,0xd2c,0x786)+_0x5ee17b(0xbd2,0xd52,0x587,0x83d)+_0x45e66b+('&data=%7B%'+_0x5ee17b(0x123f,0xb7f,0xf5c,0xd2f)+_0x5ee17b(0xc21,0xa84,0xa49,0x891)+_0x40e5d1(0x859,0x742,0x7c7,0x4b9)+_0x5ee17b(0x2dc,0x2b2,0x5cf,0x5b3)+_0x40e5d1(0x9b9,0x69c,0x119,0x46a)+'ery%22%3A%'+'22')+_0x45e66b+(_0x40e5d1(0x9ad,0x8a1,0x15a,0x597)+'cope%22%3A'+_0x40e5d1(-0x62d,-0x2b8,-0x4b2,-0x108)+_0x40e5d1(0x188,0x2ab,0x7d,-0x17)+_0x40e5d1(0x593,0x766,0x717,0x3c1)+_0x5ee17b(0x7a2,0x5e1,0x4e5,0x78e)+_0x40e5d1(0x545,0x51f,0x103,0x39e)+'false%7D%2'+_0x5ee17b(0x824,0xd1b,0x6ee,0xaef)+_0x40e5d1(0xa3b,0x502,0x680,0x664)+_0x5ee17b(0x45b,0x573,0x50e,0x4e1)+_0x40e5d1(0x9b,0xa8a,0x263,0x5a5)+'59'),_0x365c8a)['then'](_0x2c563c=>_0x2c563c[_0x40e5d1(0xa4,0x3bf,0x1f1,0x472)]())['then'](_0x20c470=>{const _0x17d399=_0x20c470[_0x13d965(0x462,0xa08,0x7f3,0x108)+_0xa4a4d0(0x2a1,-0x3ff,0x195,0x461)][_0x13d965(0x599,0x866,0xb11,0x106)][_0xa4a4d0(-0x135,0x48a,0x3e7,0x640)][Math[_0xa4a4d0(0x361,0x35d,0x417,0x98c)](_0xb2dcd0[_0xa4a4d0(0x613,-0x305,0x1f7,-0x182)](Math['random'](),_0x20c470['resource_r'+_0xa4a4d0(-0x330,-0x169,0x195,-0x411)][_0x13d965(0x599,0x554,0xc8,0x85a)][_0xa4a4d0(0x15f,0x46a,0x3e7,0x908)][_0xa4a4d0(0x564,0x537,0x155,0x6fe)]))];var _0x28d140=[];function _0x13d965(_0x1233e5,_0x2cc7d7,_0x1159ec,_0x3ba3fc){return _0x40e5d1(_0x1233e5-0xcf,_0x2cc7d7-0xf7,_0x3ba3fc,_0x1233e5-0x1c3);}const _0x2d6180={};_0x2d6180[_0x13d965(0xa03,0x53c,0xdd9,0x499)]=_0x17d399['images']['orig']['url'];function _0xa4a4d0(_0xa9cc17,_0x42f8ee,_0x337e9e,_0x42316b){return _0x5ee17b(_0x42316b,_0x42f8ee-0x109,_0x337e9e-0x1b9,_0x337e9e- -0x32f);}_0x28d140[_0x13d965(0xf0,0x601,0x325,0x28d)](_0x2d6180),_0xb2dcd0[_0x13d965(0x67,-0x226,0x15a,0x327)](_0x573dc8,_0x28d140);})[_0x40e5d1(0x5c2,0x6a8,0x86d,0x547)](_0x50ca8d);});}const pinterest=_0x2788ba=>new Promise((_0x3e601b,_0x5e2f92)=>{const _0x52678f={'DmjNf':function(_0x15b89d,_0x47bb6c){return _0x15b89d(_0x47bb6c);},'BFLVa':function(_0x9c25d1,_0x4f71a1){return _0x9c25d1(_0x4f71a1);}};function _0x364c1f(_0x4cff96,_0x370576,_0x373e04,_0x34ae04){return _0x5f09b6(_0x370576,_0x370576-0x104,_0x373e04-0x1c5,_0x34ae04-0x17);}function _0x1dce33(_0x5255bb,_0x42e180,_0x38d958,_0x47654b){return _0x5a3069(_0x5255bb-0xc5,_0x42e180-0x14c,_0x42e180- -0x5ec,_0x5255bb);}_0x52678f[_0x364c1f(0x397,0x90a,0x9c8,0x6bc)](pinterestSearch,_0x2788ba)[_0x1dce33(0x278,0x565,0x9c2,0x3a)](_0x108432=>{function _0x4d9823(_0x4335b9,_0x595264,_0x98294f,_0x124556){return _0x364c1f(_0x4335b9-0x1e7,_0x4335b9,_0x98294f-0x91,_0x595264-0x2d9);}const _0xf1204={};function _0x3b1381(_0xc5690c,_0x4960d8,_0x3ee37d,_0x3affd6){return _0x364c1f(_0xc5690c-0x2c,_0x4960d8,_0x3ee37d-0x15,_0x3affd6-0x709);}_0xf1204[_0x4d9823(0xc0e,0x761,0x71b,0x2b5)]=0xc8,_0xf1204['image']=_0x108432[-0x1c07*-0x1+0x6d*-0x38+0x42f*-0x1][_0x4d9823(0xc08,0xad2,0xbd4,0x1086)],_0x52678f[_0x4d9823(0xc6b,0x88c,0xa0b,0x9cb)](_0x3e601b,_0xf1204);})['catch'](_0x5e2f92);});pinterest(q)[_0x5f09b6(0x4bb,-0x9c,0x7c6,0x488)](async _0x46a0c5=>{function _0x5d0850(_0x49718a,_0x4e2146,_0x17b56b,_0x2bba18){return _0x5f09b6(_0x4e2146,_0x4e2146-0x1d0,_0x17b56b-0xe2,_0x17b56b-0x3e3);}function _0x48ab5d(_0x2c765b,_0x4b6335,_0x20cfc4,_0x5b2dea){return _0x5a3069(_0x2c765b-0x119,_0x4b6335-0x16b,_0x4b6335- -0x99,_0x20cfc4);}const _0x419974={'TPdRy':function(_0x4dbbf6,_0x5b4634){return _0x4dbbf6(_0x5b4634);}};let _0x20316c=await _0x419974[_0x48ab5d(0xa03,0x656,0xa78,0xa71)](getBuffer,_0x46a0c5[_0x5d0850(0x7c4,0x830,0x807,0xd60)]);alpha[_0x5d0850(0x7d4,0x653,0x7fa,0x595)+'e'](from,_0x20316c,MessageType[_0x48ab5d(0x6fe,0xa54,0x8af,0xb60)],{'caption':'Hasil\x20Penc'+_0x48ab5d(0xe42,0xba7,0x7eb,0x1001)+q,'quoted':mek,'thumbnail':Buffer['alloc'](0x1556+-0xcb9*-0x2+0x4*-0xbb2)});})[_0x5f09b6(0x59,0x476,0x8c5,0x4e9)](async _0x2037be=>{const _0x5e218c={'yMFEB':function(_0x1a725a,_0x5ddeb3){return _0x1a725a(_0x5ddeb3);},'BgMiS':'Terjadi\x20ke'+_0x1223e5(0xc01,0xb39,0xefe,0x835)};function _0x457bf8(_0x26e0ec,_0x548188,_0x5e78f3,_0x4768d2){return _0x5a3069(_0x26e0ec-0xd6,_0x548188-0x165,_0x548188- -0x325,_0x4768d2);}function _0x1223e5(_0x73f067,_0x1a7e53,_0x3a289d,_0x458a4d){return _0x5f09b6(_0x458a4d,_0x1a7e53-0x55,_0x3a289d-0x11e,_0x1a7e53-0x316);}_0x5e218c['yMFEB'](reply,_0x5e218c[_0x457bf8(0x106a,0xafe,0xd3b,0x84a)]);}),await limitAdd(sender,limit);break;case _0x5a3069(0xecf,0xd9d,0xda9,0xb7a):case _0x5a3069(0xac1,0x791,0xc6e,0xeff):const _0x17bec={};_0x17bec[_0x5a3069(0x8e8,0x4f0,0x93d,0x8da)+'t']=_0x5a3069(0xaae,0xd7a,0xb19,0xb24)+'t';const _0x3b43ed={};_0x3b43ed[_0x5f09b6(0x296,0x277,-0x478,-0x18)]=_0x5a3069(0x12c8,0x13a1,0xfe3,0xd1f),_0x3b43ed[_0x5a3069(0x663,0xe8a,0xb6e,0x10f0)]=_0x17bec,_0x3b43ed[_0x5f09b6(0x813,0x2b7,0x54c,0x663)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x5f09b6(0x3c8,0xa6d,0x5c0,0x91a)](prefix),'©\x20'+ownername,[_0x3b43ed]);if(!q)return reply(_0x5f09b6(-0x1bd,0x527,0x19,0x315));qes=args[_0x5a3069(0xbbc,0xe58,0xb66,0x863)]('\x20');const _0x15221d={};_0x15221d[_0x5a3069(0x10a6,0xa67,0xe46,0xfb8)]=_0x5a3069(0xbd3,0x127b,0xf3f,0x142a)+'e-'+qes,_0x15221d[_0x5a3069(0xc74,0x39e,0x925,0xdba)+'n']=''+creator,_0x15221d[_0x5a3069(0x8c6,0xd82,0xc16,0xb14)]=''+qes;const _0x127e2e={};_0x127e2e[_0x5f09b6(0x54c,0xbfb,0x78f,0x77d)]=_0x5f09b6(0x4a5,0xa68,-0x91,0x4bd)+'le-'+qes,_0x127e2e[_0x5f09b6(0x54e,-0x2fe,-0x54,0x25c)+'n']=''+creator,_0x127e2e[_0x5a3069(0xeb9,0x723,0xc16,0xbdf)]=''+qes;const _0x5ade4c={};_0x5ade4c[_0x5a3069(0x8bd,0xf14,0xe46,0x10a5)]=_0x5f09b6(-0x27f,0x4eb,0x3a4,-0xb8)+'ung-'+qes,_0x5ade4c['descriptio'+'n']=''+creator,_0x5ade4c[_0x5f09b6(0x7c4,0xa51,0x1ab,0x54d)]=''+qes;const _0x12a64b={};_0x12a64b[_0x5a3069(0xe49,0xbc2,0xe46,0xc27)]=_0x5a3069(0xf07,0x8b5,0xa99,0xfcd)+_0x5a3069(0x6ac,0xa2b,0x71c,0xc94)+qes,_0x12a64b[_0x5f09b6(-0x25a,0x37c,-0x12d,0x25c)+'n']=''+creator,_0x12a64b[_0x5a3069(0xcee,0xfc6,0xc16,0x119c)]=''+qes;const _0x14cc43={};_0x14cc43[_0x5f09b6(0xd09,0x1f2,0x6fa,0x77d)]=_0x5f09b6(0x2f5,0x229,-0x103,0x1e6)+_0x5a3069(0xb7b,0xf3b,0xe68,0x1102)+qes,_0x14cc43['descriptio'+'n']=''+creator,_0x14cc43[_0x5a3069(0xa05,0xddf,0xc16,0xc5c)]=''+qes;const _0x3b484d={};_0x3b484d['title']='Emoji-Twit'+_0x5a3069(0xc70,0x1083,0xb72,0xbc1)+qes,_0x3b484d[_0x5f09b6(0x1a2,0x380,-0xce,0x25c)+'n']=''+creator,_0x3b484d[_0x5f09b6(0x2fc,0x83c,0x11,0x54d)]=''+qes;const _0x4f248e={};_0x4f248e[_0x5a3069(0xa23,0x10be,0xe46,0x1338)]='Emoji-Face'+'book-'+qes,_0x4f248e['descriptio'+'n']=''+creator,_0x4f248e[_0x5a3069(0x74b,0x8f7,0xc16,0x1081)]=''+qes;const _0x5c9247={};_0x5c9247[_0x5f09b6(0x926,0x387,0x232,0x77d)]=_0x5f09b6(-0xb,-0x501,-0x50d,-0xd5)+_0x5a3069(0xf10,0x10c2,0xe8b,0x13e9)+qes,_0x5c9247[_0x5f09b6(0x2b4,0x67c,0x6dd,0x25c)+'n']=''+creator,_0x5c9247['rowId']=''+qes;const _0x255efb={};_0x255efb[_0x5a3069(0x92c,0xf58,0xe46,0x11e2)]='Emoji-Open'+_0x5a3069(0x13aa,0x1419,0x101b,0x1030)+qes,_0x255efb[_0x5a3069(0x7d7,0xedb,0x925,0x85b)+'n']=''+creator,_0x255efb[_0x5f09b6(0x70f,0x7cc,0x9c5,0x54d)]=''+qes;const _0x5b2195={};_0x5b2195['title']=_0x5f09b6(0x4f0,0xa6e,0xb8c,0x757)+'idex-'+qes,_0x5b2195[_0x5f09b6(0x54a,0x453,0x29d,0x25c)+'n']=''+creator,_0x5b2195['rowId']=''+qes;const _0x32bbda={};_0x32bbda[_0x5f09b6(0xc0d,0x626,0xd05,0x77d)]=_0x5f09b6(-0x162,0x571,0x340,0x2cc)+'enger-'+qes,_0x32bbda['descriptio'+'n']=''+creator,_0x32bbda[_0x5f09b6(0x992,0x510,0x758,0x54d)]=''+qes;const _0x574758={};_0x574758[_0x5f09b6(0x206,0xd19,0x6e9,0x77d)]=_0x5f09b6(0x4db,0x7f0,0x15b,0x2dd)+qes,_0x574758[_0x5f09b6(0x3dd,-0x98,0x1da,0x25c)+'n']=''+creator,_0x574758[_0x5f09b6(0x995,0x521,0xa3,0x54d)]=''+qes;const _0x23ef09={};_0x23ef09[_0x5a3069(0xa3e,0x893,0xe46,0x1159)]=_0x5f09b6(-0xe5,0x7ce,0x987,0x481)+qes,_0x23ef09[_0x5a3069(0xca5,0x697,0x925,0x4b7)+'n']=''+creator,_0x23ef09[_0x5f09b6(0x5a2,0x262,0x3fe,0x54d)]=''+qes;const rows12=[_0x15221d,_0x127e2e,_0x5ade4c,_0x12a64b,_0x14cc43,_0x3b484d,_0x4f248e,_0x5c9247,_0x255efb,_0x5b2195,_0x32bbda,_0x574758,_0x23ef09],_0x331e40={};_0x331e40[_0x5a3069(0x93f,0x9f8,0xe46,0xcd8)]=_0x5a3069(0x3b6,0x573,0x87f,0x39e)+'h\x20satu',_0x331e40[_0x5a3069(0x1115,0xa0f,0xbd4,0x6ef)]=rows12;const sections12=[_0x331e40],listt12={'buttonText':'SELECT\x20HER'+'E','title':_0x5a3069(0x2d5,0x5b2,0x824,0x5ab)+'\x20','description':_0x5f09b6(-0x2a5,0x234,-0x39a,-0xe)+sender[_0x5f09b6(0x8ee,0xbcb,0x22e,0x776)]('@')[0x2e*-0x1d+-0xbac+0x10e2]+(_0x5f09b6(0x225,0x4e6,0xb30,0x753)+_0x5f09b6(-0xb3,0x60,-0x117,-0x76)+_0x5a3069(0x817,0xf35,0xcb5,0x10d4)+'\x20ini\x20adala'+_0x5f09b6(0xe3d,0x3a3,0x82e,0x93d)+_0x5f09b6(0x5e3,0x533,0x4fe,0x78c)+_0x5f09b6(0x770,0xa40,0x3c5,0x4a4)),'footerText':''+tampilTanggal+enter+tampilWaktu,'sections':sections12,'listType':0x1},_0x145819={};_0x145819[_0x5a3069(0x5af,0x6e8,0x5f1,0x4ab)+'id']=[sender];const _0x1af084={};_0x1af084[_0x5f09b6(-0x6b4,-0x95,0x193,-0x1bf)]=ftoko,_0x1af084['contextInf'+'o']=_0x145819,alpha['sendMessag'+'e'](from,listt12,MessageType['listMessag'+'e'],_0x1af084),await limitAdd(sender,limit);break;}if(sub_yt_zeeone_ofc==_0x5f09b6(0x4b1,0xb6d,0x5d9,0x876)+'e-'+q5){const _0x124e09={};_0x124e09['displayTex'+'t']=_0x5f09b6(0x3ed,0x2a0,0x75a,0x450)+'t';const _0x1e8bf3={};_0x1e8bf3[_0x5f09b6(0x33e,-0x111,0x293,-0x18)]=_0x5f09b6(0x408,0x37b,0xe9a,0x91a),_0x1e8bf3[_0x5f09b6(0x537,0x835,-0xe,0x4a5)]=_0x124e09,_0x1e8bf3['type']=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x5a3069(0x14f8,0x1518,0xfe3,0xa44)](prefix),'©\x20'+ownername,[_0x1e8bf3]);reply(lang[_0x5a3069(0x76b,0xaed,0x70a,0x716)]()),emoji[_0x5f09b6(0xc7f,0x3ec,0xdae,0x958)](''+q5)[_0x5f09b6(0x601,0xa04,0x200,0x488)](async _0x3c5cf4=>{const _0x56d274={'LSrlN':function(_0x55d1c5,_0x465e6c,_0x2e89e2){return _0x55d1c5(_0x465e6c,_0x2e89e2);}};teks=''+_0x3c5cf4[_0x2de67d(0x13d0,0x112c,0xf48,0xf44)][-0x7ff+-0xb25*0x3+0x296e]['url'];function _0x2de67d(_0x53ac43,_0xe4c79,_0x21ef36,_0x72f7a0){return _0x5f09b6(_0xe4c79,_0xe4c79-0xf3,_0x21ef36-0x175,_0x21ef36-0x616);}console['log'](teks),_0x56d274[_0x2de67d(0xf76,0x8a6,0xd0a,0xddc)](sendStickerFromUrl,from,''+teks);function _0x3f3c49(_0x24c09f,_0x61b181,_0x57b6d4,_0x52206f){return _0x5f09b6(_0x52206f,_0x61b181-0xda,_0x57b6d4-0xf8,_0x24c09f-0x42a);}await _0x56d274[_0x3f3c49(0xb1e,0x852,0xdd8,0xb1c)](limitAdd,sender,limit);});}function _0x3f80(){const _0x50bdef=['RxlOv','\x20Safari/53','bVAru','VaOiA','ULlJR','ablcF','ama\x20kamu\x20j','pekerjaan\x20','GfbDB','t\x20diputusk','engan\x20memb','Tiktok\x20No\x20','ggakan\x20apa','iaAzv','seperti\x20se','k\x20seorang\x20','ovseZ','Emoji-Appl','harus\x20kamu','NOTE\x20！','kalo\x20tidur','Title\x20:\x20','cript\x20Bot\x20','hn2Sqy4nHf','e\x20the\x20soun','content-ty','entationml','dicari_','nWpDlmrk','an\x20tetap\x20s','Ketika\x20kam','i\x20tertangk','37.36\x20(KHT','e\x20the\x20grou','ge\x20group\x20c','ng\x20akan\x20ka','Not\x20a\x20Twit','endidik\x20se','u\x20sange','gMPmh','rnah\x20berfi','engan\x20hart','h\x20apa\x20yang','idex-','han\x20orang?','a\x20lupa,\x20Se','RIFY','enjadi\x20ora','Scan\x20Barco','angemymind','youtubesho','TYKji','\x20menjadi\x20\x22','ang\x20kali.\x20','jyhRx','65e7d9ab70','this\x20if\x20yo','3|0|2|4|1','EzvEH','derer','ile/db6f0f','*Link*\x20:\x20','JWqVA','bulannya','mSSlF','zSVQe','Tiktok\x20WM.','e-4','HtWlc','\x20Chrome/79','telah\x20kopi','utube.com/','seMessage','drop\x20emot\x20','CLkUW','AuBmA','rena\x20kelap','a,\x20agar\x20te','low&apikey','ion','📍\x20Tanggal\x20','jDpdo','39ejnOZf','XyHis','truth','product','relayWAMes','it,\x20lalu\x20s','DozAW','t\x20itu\x20mene','0\x20Safari/5','22options%','Jangan\x20rin','rRVbd','AXRWc','\x20sampai\x20sa','kimseok','SALEHA\x20(Su','a\x20apa-apa.','n\x20berkeing','g\x20pas\x20lu\x20l','e-20','ang\x20bisa\x20m','kiVFd','vxbmg','pa\x20aja\x20dit','sakan\x20saki','de\x20diatas\x20','「\x20*INSTAGR','tu\x20adalah\x20','nah\x20buatmu','age!','NwqVX','Usernameny','pragma','JuhQg','\x20melempar\x20','igtv','\x20yaitu\x20pas','https://mm','mu\x20telah\x20m','indonesia','orpWB','FQsWt','a!\x20Upgrade','IUbtR','yukino','\x20normal\x20di','uvzRs','DplZB','efore-titl','ihat\x20siapa','UTQqQ','uDpLH','ang\x20daripa','videoDetai','https://j.','fline','FzSnu','na\x20berhubu','ytmp3','rgabung\x20da','PAIRt','PgeEo','Hydcl','/ttpcustom','tlhHp','a\x20lebih\x20ke','n\x20bermimpi','gPXoN','a\x20dengan\x20k','com/2/time','loadmenu\x20c','SHYDK','\x20kamu\x20belu','pMBae','parkchanye','CNECb','JRymD','kan\x20berpas','\x20per\x20hari\x20','\x20luas\x20dari','an\x20senyuma','Jika\x20whats','an.herokua','eroyuri','playmp4','qSzwp','18241b0142','ic\x20Downloa','besar\x20dari','isForwarde','JvRxm','XFhAp','sNHvp','\x20valid\x20ata','x/57.0','mCvVv','enis\x20yang\x20','l\x20pada\x20kal','pagar\x20peli','limit','audio/webm','esmenu\x20com','mediaUrl','video','Sudah\x20dapa','Dik\x20jangan','microforma','aksana','elfqr','api/imageg','tat\x20yang\x20s','daripada\x20h','Video','gar\x20jadi\x20S','e\x20bawah\x20da','asa\x20orang\x20','kCbyE','5.\x20Selesai','0\x20(Macinto','Link\x20tidak','vRHAw','stickerMes','lah\x20stimul','images','c\x20siapa\x20ya','\x20NT\x2010.0;\x20','0_9_3)\x20App','n\x20kekayaan','dang\x20tidak','ika\x20Anda\x20i','gi\x20setiap\x20','VjcAJ','⋮☰\x20MENU','ma\x20mencint','h\x20list\x20emo','includes','ngif','Dnfrk','\x20Anda.\x20Dir','ngungkanla','rHYnP','PiCNz','e\x20the\x20make','\x20Chrome/92','UCdUf','“Jika\x20anda','bUKIw','Kita\x20tak\x20b','gfcIe','rsebut','nwwtX','Url','✨\x20*Followi','orgy','ral','Moji-','\x20a\x20reply!','fileName','ntities','jhope','lmcwO','get','adalah\x20yan','g,\x20karena\x20','hanya\x20seka','ih\x20lama.','dak\x20untuk\x20','rikagusria','cum_jpg','globalObje','\x0a*🚀\x20Qualit','Emoji-Face','⋮☰\x20BACK','\x20meriang-m','\x0a\x0a_choose\x20','zbeRT','\x20menghalan','VZrWO','LZqEX','PwkyL','lMDuJ','🆔\x20*ID\x20:*\x20','https://al','gYiRm','Jika\x20hujan','fWNch','akukan\x20bis','sSticker','productId','bdsm','📍\x20Nama\x20:\x20@','\x0a🍃\x20Views:\x20','eh\x20itu\x20kar','pi/v2/img/','ejadian\x20ya','rdianto-ch','\x20mencapai\x20','https://do','manusia_li','ana?\x20','sendEpheme','e-6','MXiff','\x20ketika\x20ka','yang\x20memba','“Pakaian\x20i','ele_sticke','sah\x20payah\x20','an,\x20dan\x20im','zilMd','audio','kPRXF','load','likes','fZriS','terakhir\x20b','amu.\x20Tapi,','1000000000','y_form.cgi','75616e6ac9','tickle','https://h.','berapa\x20saa','OnpCL','bkPKU','“Berakit-r','santuy','source','\x20ilusi\x20yan','s\x20duluan\x20s','ile/cb6aaa','kawan_spon','rJJKZ','\x20114\x203','agemenu\x20co','ang\x20yang\x20b','Rqjyd','\x20apa\x20lagi\x20','ami','aimu.','ITRJI','masa\x20lalu,','6288743504','kimjunmyeo','https://ti','JFYvn','quoted','saja\x20dapat','buttons','a\x20yang\x20And','Ghvrh','Ilsaf','ieJBh','🙍‍♂️\x20Owner','e91d325a70','n.\x20Tapi,\x20b','Bila\x20Anda\x20','ak\x20ingin\x20t','sic.mp3','u\x20want\x20to\x20','LCHcx','fd896.jpg','48acc.jpg','\x20\x22\x20di\x20depa','eriang\x20kem','k\x20sebelah\x20','CQdrq','an-temanmu','dmenu\x20comm','\x0a\x0a\x0a•>\x20Nama','les','.0.4430.93','ak\x20tawa\x20ak','Tidak\x20ada\x20','ikirkan\x20ka','lub/page/','VqETt','Tiktok\x20Mus','amu,\x20terus','mime','ngan\x20cara\x20','caption,\x20a','ytmp4','maka\x20akan\x20','rgi.','💌\x20Informat','qSgPZ','igstory','ZfDWT','gimana\x20bro','eninggal\x20s','\x20tetangga,','i\x20akan\x20ada','instagrams','Picture','mp4','isa\x20makan\x20','i\x20sesuatu\x20','\x20janganlah','aca\x2030\x20men','e\x20the\x20imag','5000000000','7.0)\x20Gecko','njimm\x20gabu','aCxAd','R*\x0a\x09\x09\x09\x09\x0a','an\x20tonton\x20','caya\x20diri.','nNnnP','HjOOl','https://i.','/sma\x20jenis','en68','a\x22\x20selama\x20','DjdGl','&color=cya','jar,\x20semak','bCTfz','UemOB','is\x20yang\x20ad','“Pintar\x20it','n\x20membasah','channel/UC','WxFZu','ndekati\x20ti','iapa\x20yang\x20','\x20untuk\x20dir','&color=red','\x20&\x20mp3\x0a','tahuan\x20tan','ting?\x20Taku','stri\x20yang\x20','IURLd','tahun-tahu','PDHNE','%22pins%22','asukan\x20bel','i\x20size\x20thu','nsfw\x20menu','a4e88.jpg','3AGWWjCpTn','q=0.9','💌\x20*Followe','photooxyme','awNPY','.com/api/n','nRQaQ','\x20Anda,\x20tet','Pilih\x20Pay\x20','\x20dan\x20masa\x20','membuat\x20se','hlKuk','noyFR','packname','fd073.jpg','messageInf','\x20database.','\x20media\x20you','lpha/v14','ahryU','u\x20mungkin\x20','ardianto','\x20pernah\x20ce','\x20nih\x20video','vuKTD','iRflv','ifteN','fbsd','dak\x20makan\x20','kRtqc','ah\x20ga\x20sola','ten\x20untuk\x20','.7,ms;q=0.','\x20ke\x20depan.','PkVlD','Hi\x20@','referrer','quotesmenu','ile/487eeb','cuddle','est/activa','XDMrX','thumbnails','orig','ied\x20does\x20n','VlSmn','csrAT','ares','push','\x0a*📆\x20Upload','kanmu.\x20Leb','ipt,\x20*/*,\x20','an\x20dalam\x20h','vpPjD','\x20GOPAY.\x0a4.','wjjLW','fFIKO','dpubF','dio','Perbedaan\x20','sa\x20bahagia','tweettrump','EsKDC','getMonth','video\x20>\x20a','0_11_6)\x20Ap','IEJkC','100000','idak\x20berus','“Cara\x20terb','.com/api/t','Jika\x20Anda\x20','aRJDQ','telegram\x20s','hTZtQ','syifa','ogan\x20menu','CXHTi','a.\x20Bisaku\x20','gan\x20cara\x20k','XtxUR','TGgsp','\x20Chrome/88','uotRs','gkan,\x20apal','adi\x20pagi\x20a','\x20Tapi\x20usah','\x20pedagang\x20','fb7e261a68','forwarding','.com/api/a','mkDUr','tquwX','\x20Silahkan\x20','FjfOT','dislikes','https://va','%2Fsearch%','e-18','KOyfx','mcompile.c','alahkan\x20or','n\x20adalah\x20p','ode\x20diatas','aya\x20tidak\x20','e-1','lucu','tlOaU','rsion/10.1','iam\x20cepiri','Reply\x20pesa','upmenu','\x20\x0a\x0aPowered','“Saya\x20tida','sewabot','Kalau\x20menc','*🔗\x20Link\x20:*','e-19','SINGLE_SEL','EoACw','Click\x20butt','undefined','ange;v=b3;','ogan/','G\x20GROUP```','copyNForwa','\x20>\x20article','masih\x20di\x20i','emxsJ','Sub\x20Menu\x20k','hal\x20yang\x20p','ah\x20pengorb','🐣\x20All\x20menu','extType=1&','ile/924310','Dimanapun\x20','\x20by\x20@','mentionedJ','sedikit\x20da','af9c61265d','Emoji-JoyP','akame','isa\x20mencon','spam','TDAJW','\x20impianmu\x20','e\x20the\x20stor','map','i\x20oleh\x20kei','n\x20idealmu\x20','37.36\x20Edge','eprtQ','gacha\x20coga','karena\x20mem','\x20kamu.\x20Aku','e\x20the\x20text','WO\x20\x22\x20selam','0_10;\x20rv:3','KIHmz','\x20berharap\x20','teriak\x20gaj','variants','nWBLJ','ng\x20jujur\x20l','ommand_','Apabila\x20se','followers','mbawa\x20aku\x20','alah\x20kesal','Emoji-Sams','a\x20yang\x20ing','d89eeaefc6','ike\x20Gecko)','/p_2032vcy','manga','_\x0a•>\x20Nomor','\x20bohong,\x20i','berhasilan','t\x20hati\x20saa','./image/','pp.com/api','nhLVz','01.7.7','..._','mu,\x20dan\x20ma','register\x20o','a\x20menyenan','amongus','car\x20teman\x20','\x20bot','\x20ke\x20cowo','more\x20quote','LIST\x20MENU\x20','UxjDq','Jika\x20menu\x20','com','hentai','AR5b5YFz2g','balik\x20kepa','dak\x20laku,\x20','JRQYP','\x20yang\x20bera','vDXPR','kiss','up\x20saya','elName','https://ha','DObnE','emenu\x20comm','arta\x20benda','99c5f.jpg','VINZ\x0a•\x20MIS','n\x20bukanlah','XkyOR','akan\x20hancu','qCNOo','g\x20dapat\x20me','ndung,\x20Pag','NGoyp','4259388bRQHxa','false%7D%2','baka','\x20Valery.','female','ulit,\x20tapi','utup.','ge\x20upmenu','rQHMN','*📭\x20Quality','entries','i-alphabot','\x20tetapi\x20ti','603.3.8\x20(K','sapp.net','api/ejecte','rimu\x20menye','%2C%22no_f','ail','ge\x20gacha\x20c','\x20https://i','KYoEc','GET','dare','\x20ku\x20ulang\x20','utu.be/1r_','makermenu','JJoDA','g\x20dikirim_','DtTwO','\x20Jangan\x20pe','984f9.jpg','IqYYZ','anyak\x20bela','akkan\x20diri','.0.3497.92','mengerjaka','ttp4','.php?url=','snap/post\x20','ua\x20pria\x20me','ByovX','femdom','a\x20menjadik','e-10','cript=sket','ang\x20kita\x20l','mat\x20untuk\x20','upport\x20but','\x20menjadi\x20j','WqHTP','\x20suka\x20sama','sih\x20jomblo','ya\x20milik\x20t','BvpLw','Jum\x20at','dMPhZ','vHQbA','\x0a*⚙️\x20Size\x20:','downloadme','\x20」----*','ReYks','IESde','animated_g','tu\x20hak\x20kam','ecko/20100','enjadi\x20kap','Hampir\x20sem','cript\x20bot','l\x20seseoran','orang.\x20Say','qEJmp','e\x20the\x20kera','t.com/','ytmp4\x20[lin','e-8','dan\x20hidup\x20','di\x20seperti','e\x20the\x20asup','SXbtH','fox/68.0','.com/api/c','pOkJb','ge\x20quotesm','\x20Chrome/77','zjlYD','apa','kesuksesan','\x20kesulitan','ge\x20group\x20o','601.2.7\x20(K','and_','pa\x20aja?\x20be','sage','viyVs','ri\x20Matemat','VTDVz','ZWuzj','rnah\x20kamu\x20','\x20yang\x20kamu','foto\x20pacar','videoMessa','TBZPl','0_10_5)\x20Ap','seseorang,','ibb.co/rvs','e\x20>\x20span\x20>','utu.be/ERG','ikian,\x20kec','ada\x20akhirn','buttonId','sYKle','97d8a.jpg','f04fc9dd2d','record\x20voi','gTzng','uMIYb','malaysia','chat\x20ke\x20ko','udio\x20senda','Hai\x20@','kXrt+8eqBg','sebutkan\x20t','~\x20@','jEcKJ','Url?','ng\x20kita\x20ha','lisa','🐨\x20Owner','\x20\x0a▶️\x20Durati','ile/ad77c1','urce/BaseS','kas,\x20dll','utu.be/POj','1;37m>','ile/e2c139','slap','\x20sukses\x20it','iar\x20Tuhan\x20','gojosatoru','&raw=7','jBmcu','an\x20akan\x20be','holo','*----「\x20YOU','DSTJZ','lJQDJ','FAkeb','prank\x20chat','shiina','iri\x20saya\x20s','di\x20wa/tele','ltHip','pa\x20agama\x20a','\x20dia\x20\x22i\x20lu','length','result','fbaudio','wuyifan','ng\x20dihabis','aminan\x20keh','ile/851e79','lin\x20aku,\x20a','🏆\x20Contribu','n\x20dan\x20lemp','KrHxp','Command','.\x20Namun,\x20j','igvideo','FvPQG','Mozilla/5.','ecko)\x20Chro','TPdRy','SRmiE','kerasukan,','asupan\x20men','cYYvV','atu\x20saja.','4i1.jpg','\x0a\x09\x09\x09\x09\x0a_Upl','post','tiktok.com','ile/8e308c','video/mp4','ia.','ganti\x20nama','ng\x20tertund','ZffIw','formats','iJafa','textpromen','iyQib','fHphI','PIUyH','Tes\x20aja\x20om','\x20yang\x20udah','\x20berusaha.','viona','qqsfA','wait','xmlformats','\x20jaminan\x20k','mu,\x20siangn','lo\x20pernah\x20',',\x20tetapi\x20t','externalAd','api-create','*🔗\x20Url\x20:*\x20','quality','div[class=','jisoo','xt/javascr','stc\x20comman','XmwBe','Orang\x20kaya','n\x20yang\x20tid','CObtj','osoft-','play','esponse','beberapa\x20k','ang\x20lain.','GsQck','“Wanita\x20ya','Ekddn','an\x20button\x20','telfon\x20cru','jJOoc','Cinta\x20buka','aVKEE','\x20dapatkan\x20','\x20-\x20','zOXLH','0.9,image/','n&apikey=h','x-pinteres','kir\x20jalan\x20','menu\x20comma','engan\x20ada\x20','e&apikey=h','CLdkx','ang\x20can\x20i\x20','all','ika.\x20Lebih','lXcGp','bocil','e-21','\x20bukan\x20tin','%7D%7D&_=1','mu\x20jadikan','ize','net/v2/?lc','emakin\x20sed','rlCsp','ZAWQw','YrQie','SELECT\x20HER','r\x20?”','viLqE','app','sec-gpc','rd\x20@','0\x20(Windows','ak\x20menikah','kimtaehyun','Mendidik\x20s','ZZEyd','CATALOG','mnUqr','an.”','ah\x20bahwa\x20y','https://te','an\x20lagu/qu','angkuk\x20bua','ari/537.36','Regard\x20@','elas\x20lalu\x20','uga?','sudah\x20repo','VfKLZ','buah\x20kelua','7.36','pembayaran','\x20masa\x20depa','RESPONSE','*🎀\x20Title\x20:','l\x20:*\x20','ang\x20tertun','tidurlah\x20s','10eZFZky','Semakin\x20ra','k|blue|bro','https://yo','kali\x20Kena\x20','jPXQW','Sebuah\x20mej','inori','ra\x20gara\x20si','e\x20kata\x20kas','Donasi\x20💰','iRGZg','saya\x20menja','Nktpd','headerType','\x20yang\x20kita','site','fxpnY','\x203\x20hari','\x20\x0a•\x20FERDYZ','ilkan\x20lebi','da\x20uang\x20ya','yPtiz','Bhdmu','h\x20terhadap','las,\x20yang\x20','mount1000','\x20kalo\x20udah','IKniU','a\x20atau\x20tah','asupan','EMKZk','E7FBAF','rsation/%s','tuk\x20user\x20p','ucinta\x20lun','https://ww','mediafire','ngChange','href','e|red|whit','anya\x20pende','\x20Bisaku\x20cu','bfoWA','\x20merasa\x20ce','referrerPo','\x20Chrome/65','oba\x20bebera','n/vnd.open','*_Cowo_*','korea','UUAAt','katacaklon','Oktober','anya\x20dua','“Semakin\x20b','tungkan\x20da','solog','DER*\x20」','ATmsX','en?type=ka','an,\x20dan\x20ji','.herokuapp','aVlWF','tan\x20terbes','NzaOD','September','ang\x20bohong','1b207.jpg','MZnGZ',')\x20AppleWeb',',\x20supaya\x20s',',\x20tapi\x20seb','ATSeP+KLh+','mimetype','nime/','kan\x20Nomina','t,\x20bagaima','en-US,en;q','mRDXN','\x20saja\x20tema','dktbS','readFileSy','YZfqE','jAvtW','geCount','cintai,\x20be','ARENq','nsfw_avata','Guwtp','efYLR','_\x0a\x0aCaranya','e\x20effect\x20m','di\x20bijak\x20s','mrrEQ','sewa_kak','a\x20dengan\x20m','spank','e\x20the\x20phot','Big\x20Thanks','2e1.jpg','kelihatan\x20','rs\x20:*\x20','fillTextPa','hLTvJu4FA3','dohkyungso','Kalau\x20kamu','*📩\x20Size\x20Hd','nd_','rl\x20:\x20','SezxX','n\x20you,\x20mau','neko','0.8,es;q=0','me/65.0.33','e-17','euLuN','MBKrI','Jika\x20kamu\x20','uNjGj','ymZiz','bwwAj',',\x20Setelah\x20','\x20selama\x20ia','147330PfWRdT','boobs','da…kebohon','\x20fitur\x20ini','user','e-22','htjTm','AvlAt','UZeIk','asukan\x20kul','ebPof','HlsuQ','Masalah\x20ak','kirim\x20foto','ERsJq','IqSiy','n\x20ke\x20manta','legra.ph/f','HZwIb','bNkGD','\x20want\x20to\x20d','gif','wkoTZ','ile/ec84cb','ama,\x20bersi','t.”','FiOrG','ku\x20di\x20tubu','\x20Chrome/69','Orang-oran','berlatih?”','“Ingin\x20hat','UeWPw','gan\x20adalah','cope%22%3A','suka\x20mabar','\x0a•\x20HADS\x0a•\x20','n/x-www-fo','BjZx9tvY','m/c/zeeone','nnagen&tex','QciAx','Ada\x20tips\x20a','0\x20(X11;\x20Ub','gZzTN','h%22%3Afal','MmPyN','es\x20:*\x20','iskin.\x20Tap','male','pen','kimjondae','YvqAb','a,\x20maka\x20An','hal\x20yang\x20a','lami\x20sekar','g\x20keras\x20ke','ecan/','empurna,\x20j','wmOxg','LFkyU','61d42f7cac','i.twitter.','t.com/reso','496a8748f2','enger-','QdKsm','\x20:\x0a1.\x20Buka','LIST\x20EMOJI','```Jadikan','izYJf','AweFi','e\x20who\x20cont','\x20itu\x20kunin','pernah\x20jad','Kirim\x20peri','ntaranmu\x20t','anmu.”','e\x20the\x20funm','lempar.”','\x20dalam\x20ben','\x20yang\x20dulu','6288279575','YseTl','salah\x20past','solo','sebentar\x20m','jCVAt','GKzVo','ngat\x20benci','zaoeQ','untu;\x20Linu','nnZpQ','xtMessage','e\x20the\x20gach','yoHNL','ile/4a725e','h\x20atau\x20kal','*💢\x20Total\x20:','x/47.0','n\x20Masukkan','lu\x20sih\x20nam','iv.entry-a','baik\x20dan\x20b','ews','h\x20menjadi\x20','https://d.','utan\x20sesua','random','n/json,\x20te','mangayutri','erokemo','active','a\x20mengubah','\x20akan\x20tera','ng)sama\x20si','?&imageout','h,\x20dan\x20seb','sento_isuz','n.entry-sh','enu\x20comman','795894SNEAaC','vietnam','bYDdx','ticker','an\x20kalau\x20y','g..??”','tiiCc','Putus\x20cint','bunga','ofc','ThLgm','Kit/537.36','wJbrz','nShpm','gar\x20hidup\x20','Belas\x20kasi','ygoRX','WKagD','wA0mo','OAyAp','\x20OVO\x20via\x20H','fTMaD','Pernah\x20suk','*📛\x20Title\x20:','mikosiba','ga”','dari\x20yang\x20','NitpH','e-9','depan\x20tak\x20','tt\x20anjimmm','ah\x20nomor_a','a\x20ikut\x20ter','ntaimu.','/p_2032o0l','JCpkJ','0\x20(X11;\x20Li','cv1.jpg','Pilih\x20sala','it\x20dahulu,','BlYyF','inan\x20untuk','imkXu','bnafl','fbhd\x20','“Kegagalan','i\x20kekayaan','XUlrY','\x20|\x20','an\x20menu\x20co','instafoto','offline','iyaSl','VF3r/5012f','Mei','HvgCm','container','\x20Aku\x20salah','AAgpr','YSKgE','\x20adalah\x20ke','Reply','\x20yang\x20cerd','xllRI','Aku\x20enggak','dengan\x20com','u\x20apa,\x20tap','ile/148e7a','splayText','\x20harganya\x20','sasuke','mtHki','adalah\x20tem','au.\x20Salam\x20','uery','ngan\x20erat\x20','eo\x20or\x20Audi','each','mVQPj','ile/b14ea2','xWnJZ','-officedoc','dan\x20memuka','1\x20Safari/5','0FGwkw==','h\x20dia\x20deng','Emoji-What','video\x20ini\x20','ukan\x20oleh\x20','bb87660.pn','main','ooxymenu\x20c','ECT','XyLhb','da\x20kehidup','emilia','ge\x20tagmenu','NOWM','cJfyw','_Tunggu\x20be','tau\x20bokap?','image/jpeg','Next\x20\x20for\x20','kerangmenu','ownermenu','header\x20>\x20h','getSeconds','ipe\x20pacar\x20','bilang\x20\x22i\x20','rutHU','Alquran\x20Mu','BxDQF','lFjwC','kutin','photo','wn|cyan|da','Bagiku,\x20Ka','lnya\x20cinta','\x20Chrome/90','umptweet&t','fAydh','f5bcc57f70','pleWebKit/','sia\x20yang\x20s','membenci\x20d','bat\x20buruk\x20','EiCQX','wrgkh','image\x20effe','vtcSi','“Gara\x20gara','kaga_kouko','shana','#primary\x20>','ak\x20takut\x20m','e\x20sini','\x20nomor_sur','goose','ownerChann','sa\x20tidak\x20m','April','MPJli','e-2','untuk\x20nafs','ING\x20GROUP`','reply\x20pesa','productIma','anak\x20saya\x20','yang\x20kita\x20','know\x20anyon','ile/d44d0c','Win64;\x20x64','ahan,\x20yasu','bisa\x20kita\x20','t_mode=ext','ospEG','rkreasi\x20da','amu\x20ningga','perasaan\x20c','ukan\x20untuk','Instagram\x20','OgmrO','gEUjc','7cVmoQq','mangat\x20ada','bijaksanaa','https://ap','Februari','=hardianto','elanga…\x20Ga','buah\x20seped','Siapa\x20yang','tqto','aik\x20untuk\x20','ownload_','*Cewe*','katabijak_','resource_r','rat.\x20Kau\x20t','4W5fYrjbea','\x20Bot\x20sebag','\x20jadi\x20\x22\x20BO','s\x20💞','e\x20the\x20nsfw','UUcAR','YMsYMtnlnb','uah\x20negara','vn\x20trus\x20ki','\x0a*📺\x20Views\x20','pussy_jpg','\x20pekerjaan','\x20mengerti\x20','oONFj','attr','fat\x20menjal','pa\x20kita\x20si','adi\x20buat\x20a','Emoji-Open','q=0.01','tu\x20hubunga','sgLeW','603.3.8','tuk\x20orang-','nmu\x20yang\x20a','descriptio','admin','dalah\x20pinc','\x20hanya\x20dua','pa\x20kita\x20su','Score','eeoneofc','Kalau\x20bole','MZQax','salahan\x20co','body','\x20nona\x20cant','sponsbob','yBJUN','Yang\x20palin','7\x20Safari/5','\x20(KHTML,\x20l','elihat\x20ke\x20','idEmi','oXuHa','ttdownload','baekhyung','68abaa14f7','igdl','displayTex','UUNwG','5a5f9.jpg','\x0a⭔\x20Shares\x20','dagang\x20kak','Facebook','\x0a🌀\x20Url\x20:\x20','dah.\x20Biar.','ke\x20lawan\x20j','535156BfYjpM','\x20mungkin.\x20','y\x20:\x20','ybLWH','cepat\x20atau','g\x20nyokap\x20a','idup\x20adala','6\x20Safari/5','Sebutkan\x20k','e\x20the\x20down','tiktoknowm','getProfile','50109.jpg','NrXlY','ge\x20telegra','kVeVk','[\x1b[1;32m\x20C','uploadDate','ca37c.jpg','api\x20orang\x20','_choose\x20th','.\x20Sebab\x20ji','\x20」----*\x0a\x09\x09','\x20ingin\x20suk','ya\x20cukup\x20s','3595319159','essage','n\x20aku\x20yang','“Orang\x20bij','xRlSs','menjamet',',\x20berkobar','cache-cont','tiktokaudi','sh;\x20Intel\x20','naruto','\x20Chrome/52','8ball','),\x20tunggu\x20','LuCck','\x20adalah\x20se','g.whatsapp','results','puuQu','gal\x20pilih\x20','Maret',':\x20https://','aling\x20dita','mediaKey','ara\x20tidak\x20','ttonId','gkin\x20jodoh','le-','pQvXh','rus\x20tetap\x20','elajaran.','yzHZg','the\x20messag','rumlW','song','xAYvW','nda.”\x20–\x20P.','-renang\x20ke','u\x20seseoran','syania','z4puTs%3D1','e-16','CYsYf','\x20bukan\x20aku','fromMe','PRJGz','List\x20messa','\x20:*\x20','\x20this\x20scri','Anda\x20menja','nsfwmo','x-app-vers','infobot','Server\x20err','Emoji-Mess','nya\x20takut\x20','DACMA','ile/97b236','keinginan\x20','Lebih\x20baik','bahtera\x20hi','01.2.7','ku\x20masih\x20s','\x20false\x20\x0aco','\x20div\x20>\x20div','floor','ang\x20berpua','ZoNRc','NTsgE','jungkook','ttmp4','Emoji-LG-','pt_','xqgGV','edia\x20sedan','gamu?','\x20takut\x20men','e/apng,*/*','vBxOT','i\x20apapun\x20y','Choose\x20vid','cts','b5e33a30ee','5c293c4fd5','ge\x20image\x20e','JEezZ','rmlNa','rYZvv','BOT','Agustus','ynEMC','an\x20datang\x20','\x20satu\x20tema','/p_2032z7a','udian.”','aan.','contextInf','Mac\x20OS\x20X\x201','ar\x20sambil\x20','kan\x20menert','u.\x20Asal\x20ja','JWCns','eri\x20kita\x20j','AAAAAAAAAA','text','want\x20to\x20us','https://e.','\x20cinta\x20sam','kin\x20banyak','\x20orang\x20yan','&data=%7B%','\x20Jadi\x20kena','DpzsL','u\x20bukan\x20ti','\x20:*\x20sd,\x20hd','ttmp3','a,\x20sebuah\x20','Example:\x20','Anda\x20tidak','./zeeone/z','pb1.jpg','getInfo','?\x20rasanya\x20','\x20Gecko/201','\x20ada\x20darah','https://sf','\x0a5.\x20Selesa','emojinya?','a\x20sama\x20sia','2Fpins%2F%','convertmen','\x20nyuri\x20uan','t\x20siapa\x20se','ge\x20asupan\x20','rce/get/?s','.\x20Sedangka','ffect','xt_on_reso','ataannya.','1919191919','QwqMo','ekarang\x20ju','rdianto','HwYMI','enu','ana\x20dan\x20bi','\x20tidak\x20per','se&text=','wRMKl','0@s.whatsa','IWSsP','TUBE\x20PLAY\x20','nGXzp','eron','Minggu','GXZyy','tidak\x20munc','fox/45.0','ta\x20menjadi','fox_girl','a\x20sekampun','tyni','\x20terus\x20saj','ita\x20adalah','nerJid','buttonsMes','onlyOwner','Tak\x20semua\x20','ketik\x20pake','SruNu','urce%22%3A','lah\x20suami\x20','ukhty','\x20lalu\x20kiri','YRuPm','.com/api','ik…\x20Lupa\x20a','lewdkemo','an,\x20namun\x20','/webp,imag','mu\x20dengan\x20','hkan\x20dipil','DnlUy','\x20*READ*','salePriceA','e\x20the\x20tagm','ago','\x20tahu,\x20sem','kimnanjoon','AXaGv','kirim\x20voic','n\x20saling\x20m','epadanya..','VaLLg','ng\x20cantik\x20','NgJVM','mand_','itu\x20tai,\x20j','text.com/n','hentaivid','id,en-US;q','cwXQO','fsGMi','\x20gc/luar\x20g','\x20khusus\x20un','etch_conte','ic.mp3','code','filename','*MEDIAFIRE','nLGIe','.presentat','priceAmoun','t\x20di\x20dunia','nginan\x20unt','e58a0.jpg','groupmenu','NmWyi','origin','audioMessa','000','ot\x20contain','OWNER','/p_2032cf1','FTkbF','o7sv4hu4k-','data','an\x20tidak\x20m','\x20bertahan\x20','instastory','88f9e.jpg','&color=yel','0&fontsize','d6da00d7ae','vxYBB','\x20untuk\x20men','jaminan\x20ke','\x20bilang\x20\x22a','Tuhan\x20memb','g\x20sok\x20tau,','AKINAH\x20(Se','document','g\x20melelahk','ses\x20maka\x20l','Juni','locationMe','em\x20Pakai\x20G','kursi,\x20sem','rsion/9.1.','ownerku','rsakit-sak','\x20to','Link\x20Nya\x20M','Zv7ttfk8LF','kita\x20tahu.','\x20takut\x20sam','erah\x2024\x20ja','rsion/9.0.','tsapp.net','pussy','unda.”','.0.3497.10','jRYts','guage','hasVideo','a.”','TlFBI','username','blowjob','0_9_4)\x20App','header\x20>\x20d','l\x20pembayar','KHTML,\x20lik','a\x20sama\x20ora','\x20kakinya\x20h','\x0a⭔\x20Categor','ge\x20animeme','amu\x20sakit\x20','mmand_','aArvU','*🌍\x20Type\x20:*','\x20membagika','bG0=','gangbang','iwwBF','\x0a*😎\x20Channe','ytmp3\x20[lin','\x20span','ebih\x20keras','adalah\x20kub','ggota\x20grup','thumb','salahan,\x20c','Hal\x20terbai','e-11','getQuotedO','rd\x20dan\x20Vis','shAcC','huangzitao','3982086kgSKGp','cefron.nl/','couple','ttp1','ogWhJ','i\x20celana\x20A','Ssoue','ini,\x20Tuhan','\x20amongus\x20u','\x20boleh\x20keh','video_info','tidak\x20ada\x20','tu\x20dia\x20unt','3Fq%3D','contentTex','Emoji-Micr','\x20pergi\x20jau','a\x20sama\x20den','headers','*✉️\x20Size\x20Mp','u\x20bot\x20sila','lxxrH','n.entry-vi','getMinutes','shinka','patrick','lawdF','goprem','ekarang\x20de','nux\x20x86_64','ria,\x20beri\x20','🏅\x20Source\x20S','OFC','dikit\x20perk','in\x20banyak\x20','NmnWA','top4top.io','sageFromCo','alan\x20untuk','instareel','rkanmu\x20mel','ile/277163','acVmp','storagemen','asuna_yuki','User-Agent','e\x20the\x20owne','kNfcE','ntah\x20*','nijpq','suga','pake\x20foto\x20','uhkan\x20agar','kotori_min','empty','bwBkB','ta\x20bertepu','tap\x20seimba','ebih\x20besar','MYssc','url','japan','sehat.\x20Gel','wallpaper','Emoji-Twit','imageMessa','Cinta\x20adal','XVWsR','ntuk\x20bahag','ton\x20silahk','riri','GHaMt','SCchO','Subscribe\x20','nenek\x20moya','se%2C%22qu','vjXZB','ource_url=','sage\x20menu','reka\x20menja','size','alloc','ku\x20mungkin','json','bayi.”','cors','sendMessag','ZitBE','accept','src','85.125\x20Saf','sec-fetch-','i\x20selingku','rYAYVeWq-7','engkau\x20ber','\x20disaat\x20ki','\x20sempurna,','22%3A%7B%2','tryAgain','image','dmenu','gan\x20takut\x20','luhan','\x09\x09\x09\x09\x0a*🎀\x20Ti','gan\x20jika\x20k','XyZwi','ut\x20itu\x20pen','xk1.jpg','RaCab','ZRvRZ','sGGIl','hanlah\x20ter','458582NxHQoD','if,\x20jauh\x20l','emas,\x20emas','\x20hidup\x20leb','e\x20the\x20allm','tanyze;\x20Li','3\x20:*\x20','HlFNQ','asa','lSNlL','☠️\x20Owner\x20','\x20dan\x20Masuk','ile/4c2e47','viewCount','ka\x20aku\x20sak','jukkL','hinata','vIpyR','y\x20:*\x20','ICDEa','ge\x20otherme','ECqGD','dul\x20video\x20','\x0a⭔\x20Media\x20U','ecan','desc','anda\x20menja','f31132917d','lewdk','\x20karena\x20ha','eptLm','Check\x20Limi','ile/1599f5','\x20perlu\x20har','0f7eb.jpg','dtsWA','EHbjv','ero','kPiI3/Xxar','?apikey=of','pat','ile/9fc9b3','2isPrefetc','DvPNE','ge\x20funmenu','_\x0a\x0a\x0aCarany','\x20hidupku.\x20','error','ohsehun','INAmg','anal','asi\x20lebih\x20','Sahabat\x20ya','lonte','sGKOO','MU\x20CANTIK\x20','\x0a🆔\x20ID\x20:\x20','exec','ang\x20kamu\x20a','playerMicr','944yntuCU','OiaTY','e-15','wCflG','status','“Uang\x20buka','amu','Botwea\x20©2k','https://f.','a\x20tidur\x20ka','i\x20audio\x20at','Ldoab','mewujudkan','\x20didalam\x20g','0_9_5)\x20App','/p_2032mwb','o\x20?','EHhLv','magenta','INQUIRY','Emoji-HTC-','full_text','\x20sekarang,','anna','.mp3','facebook','YHjcr','then','\x20semakin\x20c','t\x20seharian','vFFnR','mikasa','lah\x20menjad','dibuat','Please\x20Sub','BxpBo','fEdmw','\x20negara\x20te','e\x20the\x20tele','avatar','ritaan','risi\x20dari\x20','t1000','yang\x20dibut','\x0a🎃\x20Size\x20:\x20','menu','9999999','classic','join','ita\x20tidak\x20','nya\x20sendir','LzGjn','EwYWQ','kobot.xyz/','TnqZA','n\x20dipilih!','buttonText','RfKBv','Dengan\x20dem','\x20Dan\x20sekar','ter-','ung-','views','x\x20x86_64;\x20','fbdl','ytshorts','jahy','r\x20yang\x20coc','FrRwD','idur.”\x20–\x20P','KyqQU','\x20inginkan,','DBidI','https://g.','\x20tahu\x20adal','semua\x20cint','n,\x20kalau\x20k','Gbass','oruptor\x20di','.0.3325.18','Emoji-Goog','\x20contoh\x20:\x20','apat\x20kentu','TEHIQ','mgNWo','update','ss\x20recent\x20','🏅\x20Source\x20s','DUJyC','lana.”','emium','player_res','e-12','dar\x20tidak\x20','?text=',':*\x20','productMes','gbmqA','.\x20Valery','vLCdH','TmZTK','/605.1.15','yGche','scribe\x20htt','ku\x20tidak\x20b','pageCount','foot','GJnRH',';\x20rv:45.0)','ndiri.','ertmenu\x20co','yWqEI','ak\x20yang\x20ki','653158378f','documentMe','88e11.jpg','dislike','del','Lelaki\x20yan','\x20kamu\x20putu','97m/gdkX/D','\x20:\x20_','aran.”','sa\x20menghas','catch','“Dalam\x20pan','rapa\x20lama?','tuk\x20link_','kepada\x20mer','sama\x20bersa','com/1.1/gu','\x20akun\x20mu\x20s','Ilmu\x20penge','chat','https://ne','sule\x20sampe','aja\x20dibawa','💋\x20*Fullnam','“Berlatih\x20','fter-title','i,\x20sederha','noteks','uk\x20kehidup','currencyCo','yana','tagmenu','ang\x20aku\x20se','dalah\x20lela','Masukkan\x20q','sTIBH','egagalan.','nVNmD','yang\x20SIAGA','g,\x20maka\x20se','nstagram.c','“Saat\x20kamu','CnXFk','trap','rows','\x20miring.”','tugas\x20kepa','PVnaI','37.36','inya,\x20menj','tiktok','LnOOI','e-5','RDDts','```SUCCESS','serializeM','formattedS',';\x20rv:68.0)','menyenangk','zKRqi','ge\x20makerme','wal\x20dari\x20s','ba\x20ulangi\x20','EbFSy','selectedDi','accept-lan','EwyDT','eseorang\x20y','vwYol','usic\x20Downl','Desember','n\x20Nominal\x20','enatap\x20mat','09438.jpg','\x20Fisika.\x20L','miskin\x20tid','lzpTa','=100&fillT','📍\x20Waktu\x20:\x20','pinterest','bisa\x20membu','\x20dalam\x20sua','“Jika\x20kepi','MjSFp','r\x20oleh\x20ser','UFZkL','n,\x20aku\x20tid','token','ohFdZ','footerText','%22%2C%22s','membuat\x20ki','mu\x20adalah\x20','ZamAh','Januari','owner','Downloader','rku\x20gak?\x22\x20','rkgreen|li','benedict','i\x20kunci\x20me','MBZzv','ge\x20source\x20','ayuki','6199803015','jid','ixybK','njadi\x20tuan','donasi','me/67.0.33','rowId','RGVPn','ssage','ps://youtu','tits','lpVnJ','ersion/7.0','feet','P-mu.\x0a2.\x20P','bkalZ','Sebenarnya','Sewa\x20☕','postor\x20=\x20t','n\x20rumah\x20mu','tik,.\x20Rusa','tMlit','a,\x20namun\x20m','nisa','ILZit','tion','instareels','eePlh','BVcHd','terburuk\x20l','3z1.jpg','aat\x20masih\x20','mangat.\x20Se','processing','r\x20di\x20dalam','Youtube\x20Mp','channel','nget','kr_robot','mah\x20Anda\x20m','QLDDu','k\x20dikerjak','thighs','ch-name&do','DANA\x20via\x20H','nmu','o-k40Q-gO_','pada\x20banya','arian:\x20','k\x20solusiny','dbfly','\x20diri\x20send','pian\x20hadir','BTcUa','Kita\x20adala','\x20bahasa\x20da','Firefox/33','🔖\x20List\x20Sew','AtFgq','USD','mu\x20yang\x20pe','a4639.jpg','aHcOt','\x20akan\x20liha','\x20:\x20_@','w.pinteres','tangan?\x20ka','684ea07ea1','\x20」----*\x0a\x0a*','om/','aura','promenu\x20co','93987PyYViq','EL\x0a•\x20SATRI','amu\x20akan\x20l','\x20gak\x20ngert','kalau\x20tida','kYt]*','media_url_','\x20diam\x20dan\x20','sangan\x20hid','fXMPV','\x20Bayar\x0a3.\x20','lose','kamu\x20semua','DmjNf','doge','\x20>\x20p\x20>\x20spa','Linknya?','tle\x20:*\x20','deliveries','All\x20menu\x20b','\x20Tetapi\x20ja','hUepE','semoji','animemenu','di\x20sini','\x0a⭔\x20Views\x20:','select\x20the','ta\x20lupa,\x20s','pp.net','tsar',',\x20waktu\x20me','avif,image','unda\x20maka\x20','t-appstate','holoyero','📛\x20*Usernam','an\x20pacar,\x20','PbGOS','ji\x20karakte','3.0)\x20Gecko','\x20Anda\x20iala','00587','only','d-with','amongus\x20\x20c','ITGwb','RyfFN','h\x20Watermar','\x0a\x0a•\x20ZEEONE','ijfKS','uiYjL','uk\x20mengger','bA1B2pJ18r','ument.pres','\x20tidak\x20bis','85459.jpg','gue\x20anak\x20l','\x20|\x20Request','gasm','KeuLZ','e\x20Gecko)\x20V','h=800&scal','xTH6oLd8','a\x20dari\x20Bio','text/html,','api\x20perasa','ilih\x20Pay\x20/','ML,\x20like\x20G','pmGDi','ik\x20anak\x20ma','rmenu\x20comm','605.1.15\x20(','bukanlah\x20j','\x22input-gro','\x20kalo\x20peng','ge\x20textpro','\x0a⭔\x20Source\x20','suksesan\x20y','t\x20yang\x20kua','PkgpL','kirim\x20pake','256','ion/xml;q=','hGVqn','jimin','Eror','AK\x20BOHONG\x22','emerlangan','\x0a*👎\x20Dislik','rim\x20kesini','\x20diam?','ojBVs','garuh\x20kepa','nangkan\x20😇,','STTMH','following','Jangan\x20per','waitForAck','jujuran\x20ya','CZFni','“Kesuksesa','Mohon\x20maaf','--*\x0a\x0a','adi\x20kusir\x20','aiumu.','te.json','wgiqg','Aku\x20gak\x20pa','9\x22]','Kirim\x20pesa','f\x20atau\x20tek','MxXqF','\x20terlebih\x20','+0Mjbi7yii','9199191919','\x20yang\x20tert','blqix','&color=blu','mediaType','t%22%3A%7B','Saat\x20yang\x20','no\x20wm\x20ting','ku\x20saja.','a\x20istri\x20sa','\x20Alesanya?','GOPAY\x20via\x20','listRespon','\x20*DELIVERE','Gspxu','lebih\x20baik','\x20kuat\x20dan\x20','jpegThumbn','HRuRF','X/A=','video*\x20_Ju','mjZNS','i\x20yang\x20ter','api\x20kebias','kIBxs','pencapaian','u\x20bilang\x20b','kaori_miya','\x20vn\x20kesini','menikah\x20me','tahu,\x20Sema','etangga.”','same-origi','mu!','en?type=ch','licy','teriak\x20\x22\x20a','mode','djwAa','dari\x20batas','c.vercel.a','Rabu','cuckold','indah.”','jgRrn','vzVZB','Scale=true','mbnail','\x20jadi\x20paca','yUqry','akin\x20banya','ument.spre','instaphoto','jnslD','rQLYf','rm-urlenco','othermenu','menghadapi','hal\x20yang\x20b','ya\x20ngiler\x20','applicatio','fVAPY','GBNQF','\x20Gecko)\x20Ve','NCbZs','Selasa','leWebKit/5','ephemeralM','List\x20Messa','ID4Fmo9w','e\x20the\x20quot','selectedBu','e-14','\x20akan\x20hanc','ta…tapi\x20sa','\x20Aplikasi\x20','LrHws','ce\x20baca\x20su','ar\x20seharus','dAGJr','HVgYB','cGhEH','XLeRC','ri/537.36','oUmjK','yuzuki','sai\x0a\x0a_Rega','\x20yang\x20diwa','uk\x20memilik','keta','30yRtrBt','soundmenu','hsgas','image/','AglAf','ytmp4\x20','POST','“Tidak\x20ada','type','sendVideoA','ponseMessa','SZhSR','/p_20325yp','ekRln','\x20bilang\x20ke','primary','alcakenya','lication/s','pgJNh','sambut\x20den','lizard','sbob','c/pc\x20selam','BY\x20ZEEONE\x20','videos','ubSLv','TUBE\x20AUDIO','-beratnya\x20','atu\x20kampun','kira\x20udah,','\x20sange','ter\x20URL','h\x20mencoba\x20','\x20tidak\x20tul','ta\x20tidur.\x20','ilangan\x20se','QwmXX','C%22contex','AbOlV','feetg','Manusia\x20ak','jenni','WKGlb','bnVDU','us\x20berhasi','AUDIO','iEzdI','boleh\x20beda','iDmqF','D3MAaYx15D','\x20akar\x20untu','mencintai.','erorLink','ument.word','dang\x20berpu','reply\x20mess','_Untuk\x20dur','format','en?type=tr','at\x20anda\x20te','acecan\x20com','Terbuka\x20un','AM\x20STORY*\x20','u\x20hanya\x20un','ngmenu\x20com','n\x20Bot!','./lib/coup','.mp4','zettai','PHOTO','ded','drop\x20kutip','replace','&text=','BFLVa','isa\x20melaku','facebook.c','authorizat','awoawo','an\x20yang\x20ba','eVItc','tpE=','danya.\x20Bal','cmm','sername\x0aim','iri.','ng\x20seharus','9YP2ZQn4','bkEPc','adalah\x20ban','karena\x20mer','na\x20kalau\x20s','iUBNv','a\x20tersebut','winry','data-src','trump','m\x20terdafta','g,\x20maka\x20bi','KkBtR','match','“Menahan\x20g','\x20nila\x20seti','a,\x20jika\x20ka','.3\x20Safari/','ketik\x20','ALL\x20MENU\x20B','81IUq16cHj','an\x20putra\x20a','an\x20turun\x20k','oxWDa','ng\x20:*\x20','TFzAz','yGdaL','x-guest-to','CexRj','tuk\x20Anda,\x20','ya\x20kak🥰','igned-exch','Audio','FUL\x20CLOSIN','sa\x20ringan\x20','e\x20the\x20upme','dJtJH','medias','RZfhN','GOgIg','VQjDi','t\x20media\x20ak','gan\x20sebaik','ttern=Warn','uran\x20diman','yqjta','emoji','/20100101\x20','\x0a\x0a_Tunggu\x20','m\x20ke\x20salah','kanna','Usage:\x20','gPJNH','\x20ninggalin','wAHTq','ytshort','VTovQ','sAUHl','remium\x20saj','businessOw','kebohongan','ntak\x20wa\x20ur','ih!\x20Don\x27t\x20','apa\x20ketaku','Button\x20mes','know\x20sourc','LSrlN','\x20ss\x20drop\x20k','success','iOOhS','nicholas','gecg','1.2\x20Safari','sakura','rbelalak\x20a','rah.\x20Saya\x20','Sekarang\x20a','agi\x20yang\x20j','ar\x20bunga\x20k','filter','ikin\x20senen','“Carilah\x20i','lamnya\x20aku','mITLh','pai\x20tua.”','h\x20banyak\x20u','extendedTe','7326@s.wha','wnvideo.ne','Mediafire\x20','nuju\x20kegag','gacha\x20ceca','rue\x20/\x20not\x20','ext=','jsFkV','erok','\x20Nominal\x20p','instatv','youtube.co','enyapanya,','\x20disajikan','test','“Diam\x20itu\x20','Facebook\x20M','e\x20the\x20anim','video_1','on\x20below','e\x20code\x20thi','eyakinkan\x20','anmu','source\x20cod','sheet','ang.','erlebih\x20da','ikit\x20yang\x20','g\x20sukses\x20a','Alquran\x20Au','ki\x20yang\x20bi','NfxdU','akit\x20dahul','sama\x20siapa','&apikey=ha','ymenu','ja).”','=0.9','hvtlg','r\x20sejati\x20p','dYkjj','*----「\x20FAC','ai\x20admin\x20t','fWYsl','Membaca\x20se','\x20MB','img',',\x20aku\x20tak\x20','37.75.14\x20(','ntik\x20bukan','ap\x20kerasla','et-fu/prox','Upgrade\x20Pr','ekolah\x20apa','hololewd','uMnKU','is\x20if\x20you\x20','etik\x20@veri','app\x20mod\x20ka','groups','601.7.7\x20(K','00101\x20Fire','i\x20memegang','Satu\x20jam\x20y','quran-api-','nah\x20mencob','.json?twee','remoteJid','an\x0a5.\x20Sele','ayuzawa','lStjs','g\x20kreatif\x20','n/xhtml+xm','69280.jpg','\x20Semoga\x20ha','orbanan\x20mu','🎀\x20Title\x20:*','kenapa?','Emoji-emoj','pap\x20mukamu','nu\x20command','BgMiS','e-3','akan\x20membe','」----*\x0a\x0a💦\x20','ya.\x20Yang\x20s','⭔\x20Title\x20:\x20','\x20didapet\x20a','tweets','umxgn','nyurl.com/','a\x20cogan\x20co','AFpWa','\x20>\x20ul\x20>\x20li','ayu','TQoxd','3tLgSSQ','ru.\x20Malaha','\x20seseorang','tzYkq','k\x20bicara\x20d','々\x20Link\x20:\x20','stanzaId','rBlqq','ersion/11.','fileLength','yat','nita\x20yang\x20','9a236a4','split','messageSen','\x20di\x20dunia\x20','play\x20query','Pura\x20pura\x20','2\x20>\x20a','ile/435878','title','i.simsimi.','=0.9,en;q=','rYcKb','HBrqo','ngan\x20sampa','DISABLE\x20VE','xIPQS','mizore_sir','ih\x20kuat\x20da','rga','alaman','ya.\x20Andai\x20','eHeight=50','lewd','ji\x20silahka','Bahagialah','Ex\x20:','a\x20bagi\x20wan','/p_2032xlj','pmenu\x20comm','Gw_16l7c','funmenu','kan\x20apapun','=id&cf=fal','\x20mereka\x20se','nIKnE','iSzsV','\x20banyak\x20ng','ndai.','e\x20the\x20othe','endiri','Sabtu','e-7','sApp-','Watermark','siapa\x20oran','ebih\x20baik\x20','jak\x20sini.”','gun\x20dari\x20t','QIpam','\x20kehancura','profilePic','bx/mFEB8SW','STSFZ','tau\x20putri\x20','Aku\x20tidak\x20','uKXlU','Terjadi\x20ke','✓\x20OWNER','berikan.','IDR','\x0a*👍\x20Likes\x20','QXAkV','rat\x20apapun','dikuburkan','iv.entry-b','e\x20:*\x20','gi\x20pemanda','999999999','di\x20bawah.','pa\x20saat\x20la','book-','nama','key','user\x20priva','pinterest2','aslah\x20deng','e\x20you\x20repl','ixels-','n\x20kamu\x20dan','kebiasaan\x20','prepareMes','PZmST','“Sayang…\x20t','Next\x20➡️','ekarang\x20da','g\x20terbaik\x20','buttonsRes','mimeType','LbNMc','\x20ini\x20adala','kLcYZ','n\x20botnya\x20','ada\x20yang\x20m','ng.','YCWlY','at\x20dan\x20nik','\x0a*🌀\x20Url\x20:*','h\x20list\x20men','le.js','fSqms','fBupF','*BROADCAST','.2\x20Safari/','Meskipun,\x20','deGrX','Saya\x20tidak','gFwCj','\x20miskin,\x20t','menemukann','link','i\x20pertama.','VMIig','lihatan','XayXk','wnload\x20','menjadi\x20se','caption','ODby7_MoRY','hulu```','QslqB','instavid','ributed\x20to','k\x20ngiler\x20d','u\x20adalah\x20s','mu\x20jatuh\x20k','ery%22%3A%','akYLp','ntent','DMrdU','04eea.jpg','n\x20itu\x20bera','YYFMJ','LsBHp','chats','eorang\x20pri','an\x20Masukka','ali\x20dan\x20ca','inum\x20pasti','\x0a\x0a_Regard\x20','\x20balasan\x20d','thumbnail','ile/6de20d','ken','Pilih\x20medi','u\x20berenang','audio/mp4','O\x20\x0a•\x20FATIH','xGRTb','pwankg','々\x20Judul\x20:\x20','sKiZg','find','MxDOz','nks\x20to','XMLHttpReq','no-cache','akan\x20potny','e\x20note\x20bil','ungi\x20tanpa','elek.”','ka\x20Lupa\x20Pa','k\x20ada\x20manu','JJdSH','RvRwd','NkBAVg8GMe','mu\x20belum\x20s','cvcMJ','n\x20segalany','tipan\x20itu','zono','aja\x20membia','e-13','logi.','ote,\x20terus','salahan','message','fmToZ','thumbnailU','videoId','meow','\x20jomblo\x20it','HTML,\x20like','l-hal\x20keci','in\x20','bodoh\x20dari','mand\x20ya\x20sa','UxmCR','ah\x20mengert','hXiUN','w6.flaming','eJhOa','fileSha256','c41.jpg','ak\x20makan\x20d','begitulah\x20','teguh,\x20Tuh','6285716360','orang\x20yang','erikan\x20yan','uEPob','eXI.enc','gin\x20menjad','jHNoY','ontoh|true','ku\x20gak\x20bis','\x20DOWNLOADE','zztPS','an\x20kebodoh','WnyhA','s\x20bot_','idak\x20sangg','ceTvp',';q=0.8,app','dzWwbApjky','dalah\x20peng','kQlYp','RAFyh','fspIv','lebih\x20dari','HWogz','Ingin\x20Namb','n\x20bilang\x20\x22','ge\x20Big\x20Tha','au\x20mau,\x20di','ak\x20akan\x20ku','yang\x20membu','e\x20the\x20conv','agi\x20sedih\x20','gwxpZ','AM\x20DOWNLOA',';\x20codecs=\x22','e\x20:\x20','JiIFG','us.','method','i\x20%batre\x20k','https','ri\x20akar\x20te','PR-ku\x20adal','log'];_0x3f80=function(){return _0x50bdef;};return _0x3f80();}if(sub_yt_zeeone_ofc==_0x5f09b6(0x534,0xa0a,0x5ab,0x4bd)+_0x5f09b6(0xfd,0x5dd,0x4b1,0x2b1)+q5){const _0x1d6ccb={};_0x1d6ccb[_0x5f09b6(0x309,0x5ef,0x3e,0x274)+'t']=_0x5f09b6(0x95c,0x47e,0x977,0x450)+'t';const _0x370963={};_0x370963[_0x5f09b6(-0x326,0x16f,-0x1b9,-0x18)]=_0x5f09b6(0x888,0x5b9,0xd11,0x91a),_0x370963[_0x5f09b6(-0x6d,-0x8e,0x3d6,0x4a5)]=_0x1d6ccb,_0x370963[_0x5a3069(0xaa5,0xc5d,0xd2c,0x12c2)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x5f09b6(0xbc0,0xafa,0x972,0x91a)](prefix),'©\x20'+ownername,[_0x370963]);emoji[_0x5f09b6(0x456,0x6b8,0x99a,0x958)](''+q5)[_0x5f09b6(-0x109,0x776,0x3ed,0x488)](async _0x46f6a1=>{function _0x35546b(_0x2a77f0,_0xd94ece,_0x445d98,_0x591c8b){return _0x5f09b6(_0x445d98,_0xd94ece-0x11a,_0x445d98-0x182,_0x591c8b-0x222);}const _0x1110bb={'MZQax':function(_0x1242f9,_0x1f2a63,_0x2fa6c1){return _0x1242f9(_0x1f2a63,_0x2fa6c1);}};teks=''+_0x46f6a1[_0x35546b(0x644,0xc83,0x890,0xb54)][0x120e+-0x23dd*0x1+-0xa*-0x1c8][_0x35546b(0x5ef,0xa9d,0x6be,0x61f)],console[_0x35546b(0x966,0x9ad,0xe45,0xa86)](teks);function _0x45e499(_0x4501e1,_0x504aaf,_0xd02516,_0x51fb56){return _0x5a3069(_0x4501e1-0x75,_0x504aaf-0x21,_0x504aaf- -0x231,_0x4501e1);}_0x1110bb[_0x35546b(0x7dc,0x7b2,0x2f8,0x486)](sendStickerFromUrl,from,''+teks),await limitAdd(sender,limit);});}if(sub_yt_zeeone_ofc=='Emoji-Sams'+_0x5a3069(0x906,0x88a,0xb73,0xe69)+q5){const _0x5aed73={};_0x5aed73[_0x5a3069(0x5b7,0x45e,0x93d,0x4f4)+'t']=_0x5a3069(0x83a,0x586,0xb19,0x56e)+'t';const _0x55ac2d={};_0x55ac2d[_0x5a3069(0x3e5,0x56d,0x6b1,0xc2f)]=_0x5f09b6(0x429,0xc3d,0x901,0x91a),_0x55ac2d['buttonText']=_0x5aed73,_0x55ac2d[_0x5a3069(0x95a,0x11f2,0xd2c,0x9af)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang['limit'](prefix),'©\x20'+ownername,[_0x55ac2d]);reply(lang[_0x5f09b6(0x3d,-0xac,-0x49f,0x41)]()),emoji['get'](''+q5)[_0x5a3069(0xd2c,0x109b,0xb51,0x10bc)](async _0x155c17=>{const _0x1b0fe7={'Ekddn':function(_0x48c7bb,_0xd7dc22,_0x5bb1f2){return _0x48c7bb(_0xd7dc22,_0x5bb1f2);}};teks=''+_0x155c17[_0x258bfe(0x1020,0x1397,0xc5d,0x135e)][-0x22f7+-0x3*0x779+0x2*0x1cb2]['url'];function _0x258bfe(_0x206983,_0x280fc0,_0x3a41d1,_0x5bea66){return _0x5f09b6(_0x3a41d1,_0x280fc0-0x32,_0x3a41d1-0x168,_0x206983-0x6ee);}function _0x28c43a(_0x3c7818,_0xe572a0,_0x43cab9,_0x4a7d5b){return _0x5a3069(_0x3c7818-0x175,_0xe572a0-0x19e,_0x4a7d5b- -0x5c7,_0x3c7818);}console[_0x28c43a(0xd1d,0xa48,0x562,0x966)](teks),sendStickerFromUrl(from,''+teks),await _0x1b0fe7[_0x258bfe(0x748,0x1fe,0x542,0xa7d)](limitAdd,sender,limit);});}if(sub_yt_zeeone_ofc==_0x5f09b6(0x426,0x10c,0x57b,0x3d0)+_0x5f09b6(-0x3aa,-0x53,0x340,0x53)+q5){const _0x40710e={};_0x40710e[_0x5a3069(0x429,0xadd,0x93d,0x534)+'t']='Check\x20Limi'+'t';const _0x811ac9={};_0x811ac9[_0x5a3069(0x4aa,0x6d7,0x6b1,0xb09)]=_0x5f09b6(0xe45,0xbd6,0x479,0x91a),_0x811ac9[_0x5f09b6(0xde,0x97e,-0xa8,0x4a5)]=_0x40710e,_0x811ac9[_0x5a3069(0x1257,0x80a,0xd2c,0xd72)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x5a3069(0x118f,0x1378,0xfe3,0x11f4)](prefix),'©\x20'+ownername,[_0x811ac9]);emoji[_0x5f09b6(0xbc2,0x9fa,0xef0,0x958)](''+q5)[_0x5f09b6(0xf7,0x31b,0x464,0x488)](async _0x149b15=>{function _0x48549d(_0x1e437e,_0x51aa55,_0x562d96,_0x1c5f80){return _0x5a3069(_0x1e437e-0x91,_0x51aa55-0x97,_0x51aa55- -0x3e0,_0x1e437e);}function _0x498249(_0x34667a,_0x2d724e,_0x266c4e,_0x30b41e){return _0x5a3069(_0x34667a-0xca,_0x2d724e-0x1bb,_0x30b41e- -0xa0,_0x2d724e);}const _0x21af4c={'uMmiZ':function(_0x6fc9ef,_0x3a0661,_0x18830d){return _0x6fc9ef(_0x3a0661,_0x18830d);},'YRuPm':function(_0x4ade84,_0x4dbc7c,_0x3f82d8){return _0x4ade84(_0x4dbc7c,_0x3f82d8);}};teks=''+_0x149b15[_0x498249(0x1192,0xf8a,0x11f3,0xf5b)][0x3*0x57a+0xa*0x19c+-0x2083][_0x498249(0xa1e,0x590,0xfb1,0xa26)],console[_0x48549d(0x98b,0xb4d,0x1103,0xa82)](teks),_0x21af4c['uMmiZ'](sendStickerFromUrl,from,''+teks),await _0x21af4c[_0x48549d(0x214,0x62d,0x2ad,0x15d)](limitAdd,sender,limit);});}if(sub_yt_zeeone_ofc==_0x5a3069(0x7e2,0xbf5,0x8af,0x8dc)+'sApp-'+q5){const _0x419859={};_0x419859[_0x5a3069(0x9e7,0x86a,0x93d,0x5cb)+'t']=_0x5f09b6(0x507,0x176,0x358,0x450)+'t';const _0x540847={};_0x540847[_0x5a3069(0x190,0x6e8,0x6b1,0xb44)]=_0x5a3069(0xeb9,0x144c,0xfe3,0xceb),_0x540847['buttonText']=_0x419859,_0x540847[_0x5f09b6(0x536,0x8ba,0xc12,0x663)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x5f09b6(0xa24,0xcce,0xaa7,0x91a)](prefix),'©\x20'+ownername,[_0x540847]);reply(lang[_0x5f09b6(0x23,0x387,0x5ce,0x41)]()),emoji[_0x5f09b6(0x5e3,0x5b3,0xb66,0x958)](''+q5)[_0x5f09b6(0x87e,0x4bd,-0xf6,0x488)](async _0x5f1175=>{function _0x3f7ff0(_0x342341,_0x5524ed,_0x2661d7,_0xb0d8a4){return _0x5f09b6(_0xb0d8a4,_0x5524ed-0x188,_0x2661d7-0x88,_0x5524ed-0x470);}const _0x3bded6={'jukkL':function(_0x2ad2b3,_0x3512f4,_0x55ec43){return _0x2ad2b3(_0x3512f4,_0x55ec43);}};function _0x3cbc84(_0x5e5aec,_0x4a6155,_0x56dd35,_0x136544){return _0x5a3069(_0x5e5aec-0x1ea,_0x4a6155-0x11a,_0x136544- -0x547,_0x56dd35);}teks=''+_0x5f1175['images'][0x5e4+-0x101c+0xa3c][_0x3cbc84(0x6f5,0x7cc,0x110,0x57f)],console[_0x3f7ff0(0x127e,0xcd4,0x113e,0xe99)](teks),_0x3bded6[_0x3cbc84(0x376,0x378,0x397,0x5c2)](sendStickerFromUrl,from,''+teks),await _0x3bded6['jukkL'](limitAdd,sender,limit);});}if(sub_yt_zeeone_ofc==_0x5a3069(0x961,0xe10,0xaca,0x6bf)+'ter-'+q5){const _0xe366c6={};_0xe366c6[_0x5f09b6(0x7ad,0x4e8,-0x16c,0x274)+'t']=_0x5f09b6(-0x15e,0x924,0x202,0x450)+'t';const _0x3a4a28={};_0x3a4a28[_0x5f09b6(-0x57c,0x387,0x208,-0x18)]=_0x5f09b6(0x49f,0x585,0xc93,0x91a),_0x3a4a28['buttonText']=_0xe366c6,_0x3a4a28[_0x5a3069(0xf4d,0x783,0xd2c,0x84c)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang['limit'](prefix),'©\x20'+ownername,[_0x3a4a28]);emoji[_0x5a3069(0x12ef,0x1306,0x1021,0x1398)](''+q5)[_0x5f09b6(-0xd4,0x5db,0x46e,0x488)](async _0x4f3cb6=>{const _0x594f1d={'NTKGG':function(_0x123aca,_0x39857a,_0x2d6492){return _0x123aca(_0x39857a,_0x2d6492);}};teks=''+_0x4f3cb6[_0x1d01ed(0xb5c,0xa6b,0xb8d,0xd5d)][0xd6+0x1*0x1123+-0x2fe*0x6][_0x1d01ed(0xbec,0xced,0xc1d,0x828)];function _0x1d01ed(_0x5f25f3,_0xd4b6f1,_0x836ab5,_0x1f81ae){return _0x5f09b6(_0x836ab5,_0xd4b6f1-0x114,_0x836ab5-0x129,_0x1f81ae-0x42b);}console[_0x1d01ed(0xf3e,0xb98,0xbc1,0xc8f)](teks),sendStickerFromUrl(from,''+teks);function _0x5d0766(_0x5c5a6e,_0x2dc506,_0x360885,_0x43c5f4){return _0x5f09b6(_0x5c5a6e,_0x2dc506-0x10a,_0x360885-0x155,_0x43c5f4-0x3de);}await _0x594f1d['NTKGG'](limitAdd,sender,limit);});}function _0x4c05(_0x2e8511,_0x1bc2bd){const _0x658cc=_0x3f80();return _0x4c05=function(_0x44366d,_0x4d75df){_0x44366d=_0x44366d-(0x13a*0x6+-0x22d+-0x3c7);let _0x2fd253=_0x658cc[_0x44366d];return _0x2fd253;},_0x4c05(_0x2e8511,_0x1bc2bd);}function _0x5a3069(_0x24fa87,_0x3f248f,_0x3dc2b0,_0x53bda8){return _0x4c05(_0x3dc2b0-0x357,_0x53bda8);}if(sub_yt_zeeone_ofc==_0x5a3069(-0x14,0x770,0x4bf,0x44d)+_0x5f09b6(0x7b0,0x9e3,0x678,0x7bb)+q5){const _0x28f87e={};_0x28f87e[_0x5a3069(0xd4a,0xc19,0x93d,0x4f5)+'t']=_0x5a3069(0x1067,0xf55,0xb19,0xa83)+'t';const _0x48424f={};_0x48424f[_0x5a3069(0x2cc,0x996,0x6b1,0x6d5)]=_0x5f09b6(0x5bf,0xd3f,0xdbf,0x91a),_0x48424f[_0x5f09b6(0x292,0x3d3,0x951,0x4a5)]=_0x28f87e,_0x48424f[_0x5a3069(0xcae,0xbdc,0xd2c,0xbb6)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang['limit'](prefix),'©\x20'+ownername,[_0x48424f]);reply(lang[_0x5a3069(0xa24,0x40f,0x70a,0x94a)]()),emoji[_0x5a3069(0x101a,0x12ea,0x1021,0xbd6)](''+q5)[_0x5a3069(0xb02,0x92c,0xb51,0xf03)](async _0x2215f0=>{const _0x26663c={'XUlrY':function(_0x1a8735,_0x517eaf,_0xea1711){return _0x1a8735(_0x517eaf,_0xea1711);},'NmWyi':function(_0x256cac,_0x16cc4c,_0x3dba4b){return _0x256cac(_0x16cc4c,_0x3dba4b);}};teks=''+_0x2215f0['images'][0x65*0x2b+0x18*-0x28+-0xd31][_0x1cca98(0x4bc,0x765,0x953,0xec)],console[_0x295434(0xeea,0xe4c,0x9d4,0x1101)](teks);function _0x1cca98(_0x308c11,_0x3278df,_0x6cbe33,_0x280ef4){return _0x5a3069(_0x308c11-0x40,_0x3278df-0x28,_0x308c11- -0x60a,_0x3278df);}_0x26663c[_0x295434(0x845,0xc63,0x491,0x4a3)](sendStickerFromUrl,from,''+teks);function _0x295434(_0x4d3e94,_0x569136,_0x390bbb,_0x140617){return _0x5a3069(_0x4d3e94-0xfb,_0x569136-0xfd,_0x4d3e94- -0x43,_0x569136);}await _0x26663c[_0x295434(0x9f5,0x7ae,0x6cc,0xa0e)](limitAdd,sender,limit);});}if(sub_yt_zeeone_ofc=='Emoji-JoyP'+'ixels-'+q5){const _0xb787ce={};_0xb787ce[_0x5f09b6(0x163,-0x29c,0x149,0x274)+'t']='Check\x20Limi'+'t';const _0x7316={};_0x7316[_0x5a3069(0xc1d,0x924,0x6b1,0xafc)]=_0x5a3069(0x1515,0xf91,0xfe3,0xc49),_0x7316['buttonText']=_0xb787ce,_0x7316['type']=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x5f09b6(0x96c,0x72f,0x8cb,0x91a)](prefix),'©\x20'+ownername,[_0x7316]);emoji[_0x5a3069(0x1066,0xe8b,0x1021,0x14bc)](''+q5)[_0x5a3069(0xa27,0xf8a,0xb51,0x82d)](async _0x4d4567=>{function _0x2849c8(_0x422225,_0x318690,_0xff0264,_0x135edf){return _0x5f09b6(_0x318690,_0x318690-0x102,_0xff0264-0x1a2,_0x422225- -0x56);}const _0xd2ca87={'dktbS':function(_0x82c569,_0x40737d,_0x2d13c9){return _0x82c569(_0x40737d,_0x2d13c9);}};teks=''+_0x4d4567[_0x2849c8(0x8dc,0x739,0xb24,0x4cc)][0x1a52+0xfbb*-0x1+-0xa90][_0x23939b(0x890,0x793,0x809,0x5de)],console[_0x2849c8(0x80e,0x7b0,0xbaf,0x6a0)](teks),_0xd2ca87['dktbS'](sendStickerFromUrl,from,''+teks);function _0x23939b(_0x35d78b,_0x3e9624,_0x472c68,_0x1807fc){return _0x5f09b6(_0x1807fc,_0x3e9624-0xae,_0x472c68-0x165,_0x3e9624-0x396);}await _0xd2ca87[_0x23939b(0x535,0x482,0x7c6,0x3c7)](limitAdd,sender,limit);});}if(sub_yt_zeeone_ofc==_0x5f09b6(0x426,-0x178,0x23c,0x255)+'Moji-'+q5){const _0x485667={};_0x485667[_0x5a3069(0x4be,0x923,0x93d,0x9ee)+'t']=_0x5f09b6(0x36e,0x82c,0x71,0x450)+'t';const _0x1dd628={};_0x1dd628['buttonId']=_0x5f09b6(0x45f,0x370,0x68a,0x91a),_0x1dd628[_0x5a3069(0xa6b,0xfec,0xb6e,0x5ca)]=_0x485667,_0x1dd628['type']=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x5f09b6(0xa96,0xa13,0xe02,0x91a)](prefix),'©\x20'+ownername,[_0x1dd628]);emoji[_0x5a3069(0xc03,0xc0b,0x1021,0x1199)](''+q5)[_0x5f09b6(0x175,0x34c,0x952,0x488)](async _0x4879f8=>{const _0x281cc5={'IqYYZ':function(_0x5991e9,_0x55f9f4,_0x4e4a4b){return _0x5991e9(_0x55f9f4,_0x4e4a4b);},'BxpBo':function(_0x397a03,_0x1348a6,_0x1142c1){return _0x397a03(_0x1348a6,_0x1142c1);}};function _0x5d21fd(_0x1e9f56,_0x51cb44,_0x5d1547,_0x56b000){return _0x5f09b6(_0x56b000,_0x51cb44-0xca,_0x5d1547-0x174,_0x5d1547-0x341);}function _0xfaec78(_0x14cc4a,_0x1533e3,_0x501239,_0xb27d49){return _0x5a3069(_0x14cc4a-0xff,_0x1533e3-0x47,_0x501239- -0x3f5,_0x1533e3);}teks=''+_0x4879f8[_0x5d21fd(0x733,0xefc,0xc73,0x121d)][-0x2246+-0x23c8+0x4616][_0xfaec78(0x855,0x5b3,0x6d1,0xb1e)],console[_0xfaec78(0x60b,0x792,0xb38,0x5e4)](teks),_0x281cc5[_0xfaec78(0x5b6,0x795,0x26e,0x447)](sendStickerFromUrl,from,''+teks),await _0x281cc5[_0x5d21fd(0xb9b,0xb34,0x7d1,0x66f)](limitAdd,sender,limit);});}if(sub_yt_zeeone_ofc==_0x5f09b6(0x773,0x697,0x2bb,0x757)+_0x5f09b6(0xd74,0xa27,0xd7c,0x890)+q5){const _0x349bbe={};_0x349bbe[_0x5a3069(0xdb7,0xbec,0x93d,0x5c3)+'t']=_0x5f09b6(0x1bd,0x6ee,0x408,0x450)+'t';const _0xc6fbb3={};_0xc6fbb3[_0x5a3069(0x6e6,0x222,0x6b1,0x3fd)]='limit',_0xc6fbb3[_0x5f09b6(0x255,0x148,-0x4f,0x4a5)]=_0x349bbe,_0xc6fbb3[_0x5f09b6(0x5db,0x9e7,0x88f,0x663)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x5a3069(0x12cb,0xad2,0xfe3,0x13fd)](prefix),'©\x20'+ownername,[_0xc6fbb3]);reply(lang['wait']()),emoji[_0x5a3069(0x103b,0xb5b,0x1021,0xcf0)](''+q5)[_0x5f09b6(0x7d4,0x1d0,0x8a0,0x488)](async _0x1f4152=>{const _0x167cf6={'zztPS':function(_0x153716,_0x36bc38,_0x50be6c){return _0x153716(_0x36bc38,_0x50be6c);}};teks=''+_0x1f4152[_0x55870b(0x8bd,0xae9,0x7a8,0xc2f)][0x23fb+0x21d7*-0x1+-0x21b]['url'];function _0x35fca8(_0x576336,_0x17315c,_0x596f89,_0x3445a2){return _0x5f09b6(_0x3445a2,_0x17315c-0xca,_0x596f89-0x100,_0x17315c-0x52);}console[_0x55870b(0x747,0x852,0x109d,0xb61)](teks);function _0x55870b(_0x10cd0d,_0x4e86f3,_0x36d64e,_0x3ef85d){return _0x5f09b6(_0x4e86f3,_0x4e86f3-0xd3,_0x36d64e-0x17,_0x3ef85d-0x2fd);}_0x167cf6[_0x55870b(0x8aa,0x8b8,0x9f3,0xb40)](sendStickerFromUrl,from,''+teks),await _0x167cf6['zztPS'](limitAdd,sender,limit);});}if(sub_yt_zeeone_ofc==_0x5a3069(0x9f4,0x72c,0x995,0xf0b)+_0x5a3069(0xdac,0x568,0x821,0x438)+q5){const _0x500d2d={};_0x500d2d[_0x5a3069(0xc6c,0x71e,0x93d,0xa96)+'t']=_0x5a3069(0x7c4,0xc58,0xb19,0xffd)+'t';const _0x13acf2={};_0x13acf2[_0x5f09b6(0x34a,0x4ad,0x256,-0x18)]=_0x5f09b6(0x7a3,0x4c0,0x6c2,0x91a),_0x13acf2[_0x5f09b6(0x757,0x1e8,0x221,0x4a5)]=_0x500d2d,_0x13acf2[_0x5f09b6(0x4c2,0x59d,0x49d,0x663)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang['limit'](prefix),'©\x20'+ownername,[_0x13acf2]);emoji[_0x5a3069(0x1089,0x14d7,0x1021,0xfdb)](''+q5)[_0x5f09b6(0x47f,0x5fc,-0x33,0x488)](async _0x194428=>{const _0x254ff7={'CXHTi':function(_0x124406,_0x3997cb,_0x2b3983){return _0x124406(_0x3997cb,_0x2b3983);}};function _0x25f265(_0x36d761,_0x26f54a,_0x36da68,_0x925b90){return _0x5a3069(_0x36d761-0x6e,_0x26f54a-0x162,_0x26f54a- -0x33,_0x36d761);}function _0x297731(_0x1f2aed,_0x531940,_0x5efc0d,_0x2f33d7){return _0x5f09b6(_0x531940,_0x531940-0x8d,_0x5efc0d-0x12d,_0x1f2aed-0x405);}teks=''+_0x194428[_0x25f265(0x13a2,0xfc8,0xafa,0xb7e)][-0x10bb+-0x853*0x4+0x3211][_0x297731(0x802,0x2a7,0x7a8,0xa8a)],console['log'](teks),_0x254ff7[_0x25f265(0x763,0x582,0x60e,0x857)](sendStickerFromUrl,from,''+teks),await limitAdd(sender,limit);});}if(sub_yt_zeeone_ofc==_0x5a3069(0xb55,0x6a9,0x9a6,0x76f)+q5){const _0x1ef385={};_0x1ef385[_0x5f09b6(0x2d0,-0x2fe,0x188,0x274)+'t']='Check\x20Limi'+'t';const _0x52c248={};_0x52c248[_0x5a3069(0xb2c,0xa46,0x6b1,0x3c0)]=_0x5a3069(0xd57,0x1299,0xfe3,0xe0e),_0x52c248[_0x5a3069(0xce3,0x9a4,0xb6e,0x65f)]=_0x1ef385,_0x52c248[_0x5f09b6(0x7de,0x74b,0x12b,0x663)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x5f09b6(0x8ea,0xa26,0xe0e,0x91a)](prefix),'©\x20'+ownername,[_0x52c248]);reply(lang[_0x5a3069(0x42a,0x8c1,0x70a,0x958)]()),emoji[_0x5a3069(0x1301,0x1545,0x1021,0x12c5)](''+q5)[_0x5a3069(0x896,0xef5,0xb51,0x9b6)](async _0x1e5ae5=>{function _0x5cf154(_0x15578a,_0x2c2c00,_0x3b6bcd,_0x51a81d){return _0x5f09b6(_0x2c2c00,_0x2c2c00-0x1f1,_0x3b6bcd-0x1b6,_0x3b6bcd-0x354);}function _0x452439(_0x270e06,_0x48ef9b,_0x33d7c0,_0x402be6){return _0x5a3069(_0x270e06-0x94,_0x48ef9b-0x10,_0x402be6- -0x30,_0x270e06);}const _0x52519a={'EoACw':function(_0x3b615d,_0x470565,_0x495524){return _0x3b615d(_0x470565,_0x495524);},'CZFni':function(_0x18afae,_0x9edc35,_0x56f0c1){return _0x18afae(_0x9edc35,_0x56f0c1);}};teks=''+_0x1e5ae5[_0x5cf154(0xac8,0xf3a,0xc86,0x120e)][-0x13*-0x182+0x176+-0x1e11]['url'],console['log'](teks),_0x52519a[_0x5cf154(-0xe6,0x54c,0x26a,0xac)](sendStickerFromUrl,from,''+teks),await _0x52519a[_0x452439(0xa95,0xa48,0xbe3,0xc8b)](limitAdd,sender,limit);});}if(sub_yt_zeeone_ofc==_0x5a3069(0xbf0,0xc38,0xb4a,0x762)+q5){const _0x1900c={};_0x1900c[_0x5f09b6(0x81,-0x18d,0x56f,0x274)+'t']=_0x5a3069(0x940,0xead,0xb19,0x930)+'t';const _0x296c99={};_0x296c99[_0x5f09b6(-0x2ec,-0x2db,0x325,-0x18)]=_0x5f09b6(0xe07,0x771,0xdd4,0x91a),_0x296c99[_0x5a3069(0x10ab,0xc5a,0xb6e,0xada)]=_0x1900c,_0x296c99[_0x5a3069(0x1282,0xe99,0xd2c,0x7ec)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x5a3069(0xd31,0xaf4,0xfe3,0xa42)](prefix),'©\x20'+ownername,[_0x296c99]);emoji[_0x5a3069(0x14fc,0xcfb,0x1021,0xe03)](''+q5)[_0x5a3069(0xefd,0x1046,0xb51,0xa99)](async _0xd32bc5=>{const _0x501e9d={'cJfyw':function(_0x1ceb93,_0x4f89de,_0x34ebd4){return _0x1ceb93(_0x4f89de,_0x34ebd4);}};function _0x4c0e29(_0x54648b,_0x2dafb8,_0x562c4a,_0x448e27){return _0x5a3069(_0x54648b-0x17f,_0x2dafb8-0xa2,_0x2dafb8- -0x22b,_0x562c4a);}teks=''+_0xd32bc5[_0x4c0e29(0xa6c,0xdd0,0x114b,0x9ca)][0x1*-0x1c9+0x232+-0x5d][_0x4c0e29(0xd48,0x89b,0x86b,0xbfc)],console[_0x4c0e29(0x124b,0xd02,0xb72,0xb68)](teks),_0x501e9d[_0x2382dc(0x739,0x66e,-0x351,0x1cb)](sendStickerFromUrl,from,''+teks);function _0x2382dc(_0x215440,_0x217158,_0x1225f9,_0xd136dd){return _0x5a3069(_0x215440-0x16a,_0x217158-0x130,_0xd136dd- -0x6f0,_0x1225f9);}await limitAdd(sender,limit);});}
		switch (command) {
case 'dompet':
					const kantong = checkATMuser(sender)
					reply(` *「 ATM USER 」* \n📛 *Nama* : ${pushname}\n🆔 *Nomer* : ${sender.split("@")[0]}\n💰 *Uang* : ${kantong}\n`)
					break
	case 'transfer':
				if (!q.includes('|')) return  reply('format salah')
                			const tujuan = q.substring(0, q.indexOf('|') - 1)
                			const jumblah = q.substring(q.lastIndexOf('|') + 1)
                			if(isNaN(jumblah)) return await reply('jumlah harus berupa angka!!')
                			if (jumblah < 100 ) return reply(`Minimal Transfer 100`)
                			if (checkATMuser(sender) < jumblah) return reply(`uang mu tidak mencukupi untuk melakukan transfer`)
                			const tujuantf = `${tujuan.replace("@", '')}`
               				fee = 0.005 *  jumblah
                			hasiltf = jumblah + fee
                			addKoinUser(`${tujuantf}@s.whatsapp.net`, hasiltf)
                			confirmATM(sender, hasiltf)
                			reply(`*「 SUKSES  」*\n\npengiriman uang telah sukses\ndari : +${sender.split("@")[0]}\nke : +${tujuan}\njumblah transfer : ${jumblah}\npajak : 30*jumblah`)
                			break
	case 'limit': case 'ceklimit': case 'balance': case 'glimit':
reply(`💳 Limit : ${isPremium ? 'Unlimited Premium' : `${getLimit(sender, limitawal, limit)} / ${limitawal}`}
🏧 Limit Game : ${cekGLimit(sender, gcount, glimit)} / ${gcount}
🏦 Balance : $${getBalance(sender, balance)}


Kamu Dapat Membeli Limit Dengan ${prefix}Buylimit *Nominal* Dan ${prefix}Buyglimit *Nominal* Untuk Membeli Game Limit

*Example :*
${prefix}buylimit 10
${prefix}buyglimit 10

NOTE : 
- Harga Limit Perlimit adalah $100 balance`)
break
case 'buylimit':{
if (!q) return reply(`Kirim perintah *${prefix}buylimit* jumlah limit yang ingin dibeli\n\nHarga 1 limit = $100 balance`)
if (q.includes('-')) return reply(`Jangan menggunakan -`)
if (isNaN(q)) return reply(`Harus berupa angka`)
let ane = Number(nebal(q) * 100)
if (getBalance(sender, balance) < ane) return reply(`Balance kamu tidak mencukupi untuk pembelian ini`)
kurangBalance(sender, ane, balance)
giveLimit(sender, nebal(q), limit)
reply(`Pembeliaan limit sebanyak ${q} berhasil

*🏧 Sisa Balance : $${getBalance(sender, balance)}*
*🏦 Sisa Limit : ${getLimit(sender, limitawal, limit)} / ${limitawal}*`)
}
break
case 'buyglimit':{
if (!q)return reply(`Example : ${prefix + command} 10\n\nHarga 1 limit = $100 balance`)
if (q.includes('-')) return reply(`Jangan menggunakan -`)
if (isNaN(q)) return reply(`Harus berupa angka`)
const koinPerlimit = 100
const total = koinPerlimit * q
if (getBalance(sender,balance) <= total) return reply(`maaf Balance kamu belum mencukupi. silahkan kumpulkan dan beli nanti`)
kurangBalance(sender, total, balance)
givegame(sender, q, glimit)
reply(`Pembeliaan game limit sebanyak ${q} berhasil

*💳 Sisa Balance : $${getBalance(sender, balance)}*
*💷 Sisa Game Limit : ${cekGLimit(sender, gcount, glimit)} / ${gcount}*`)
}
break
	case 'me': case 'myinfo': case 'info': case 'profile': case 'profil':{
		let bio_nya = await alpha.getStatus(sender)
		try {
			bio_user = `${bio_nya.status}`
		} catch {
			bio_user = '-'
			}
		try {
					pp_userb = await alpha.getProfilePicture(sender)
				} catch {
					pp_userb = 'https://ibb.co/RHxcNw9'
				}
			let pp_userz = await getBuffer(pp_userb)
let cek = ms( await premium.getPremiumExpired(sender, premium) - Date.now())
let userProcfile = `「 *USER INFO* 」

📛 Nama : ${pushname}
💋 Bio : ${bio_user}
🔗 Tag : @${sender.split("@")[0]}
💥 Api : wa.me/${sender.split("@")[0]}

💹 Limit : ${isPremium ? 'Unlimited Premium' : `${getLimit(sender, limitawal, limit)} / ${limitawal}`}
💳 Game Limit : ${cekGLimit(sender, gcount, glimit)} / ${gcount}
💷 Balance : $${getBalance(sender, balance)}
👛 Dompet : ${checkATMuser(sender)}
💱 Role : ${role}
🏧 Level : ${getLevelingLevel(sender)}
🏦 Xp : ${getLevelingXp(sender)}

💌 Status : ${isPremium? `Premium User` : `Free user`}
⏰ Expired Prem : ${isPremium ? 'Unlimited Premium' : ` ${cek.days} d, ${cek.hours} h, ${cek.minutes} m, ${cek.seconds} s`}
👨‍ Register : ${isRegister? `Done`:`Belum Daftar`}
🚫 Baned : ${isBanned?`True`:`False`}`
let papakpo = [{
										"buttonId": `inv`,
										"buttonText": {
											"displayText": "INVENTORY"
											},
										"type": "RESPONSE"
										},{
										"buttonId": `sewabot`,
										"buttonText": {
											"displayText": "SEWA"
											},
										"type": "RESPONSE"
										}]
								sendButLocation(from, userProcfile , `NOTE ！\nJika whatsapp mod kamu belum support button silahkan tonton video ini https://youtu.be/ERGID4Fmo9w\n\n© ${ownername}`,pp_userz, papakpo, {contextInfo: { mentionedJid: [sender]}})
}
break
	case 'verify': case 'daftar':{
	let bio_nya = await alpha.getStatus(sender)
		try {
			bio_user = `${bio_nya.status}`
		} catch {
			bio_user = '-'
			}
			try {
					pp_userb = await alpha.getProfilePicture(sender)
				} catch {
					pp_userb = 'https://ibb.co/RHxcNw9'
				}
			let pp_userz = await getBuffer(pp_userb)
 if (isRegister) return reply('Kamu sudah terdaftar di dalam database')
 addRegisterUser(sender, pushname, bio_user, wib)
 let ran_blc = randomNomor(50)
 addBalance(sender, ran_blc, balance)
fs.writeFileSync('./database/user/register.json', JSON.stringify(register))
teks = `╭─❒ *Verification*\n│ *Nama :* ${pushname}\n│ *Nomor :* @${sender.split('@')[0]}\n│ *Bio :* ${bio_user}\n│ *Time :* ${wib}\n╰❒ *Success*`
let papako = [{
										"buttonId": `menu`,
										"buttonText": {
											"displayText": "MENU"
											},
										"type": "RESPONSE"
										},{
										"buttonId": `me`,
										"buttonText": {
											"displayText": "PROCFILE"
											},
										"type": "RESPONSE"
										}]
								sendButLocation(from, teks , `Thank for verification\n© ${ownername}`,pp_userz, papako, {contextInfo: { mentionedJid: [sender]}})
                }
break
	
case 'setmenu':
if (!isOwner && !isCreator && !mek.key.fromMe) return reply(lang.onlyOwner())
const listhades = ['document', 'troli', 'troli2', 'katalog', 'katalog2', 'list', 'location']
listMsg = {
 buttonText: 'SET MENU',
 footerText: `© ${ownername}`,
 description: `Pilih tampilan menu sesukamu`,
 sections: [
                     {
                      "title": `SET MENU`,
 rows: [
                          {
                              "title": "document",
                              "rowId": "setmenu document"
                           },
                           {
                              "title": "troli",
                              "rowId": "setmenu troli"
                           },
                           {
                              "title": "troli2",
                              "rowId": "setmenu troli2"
                           },
                           {
                              "title": "katalog",
                              "rowId": "setmenu katalog"
                           },
                           {
                              "title": "katalog2",
                              "rowId": "setmenu katalog2"
                           },
                           {
                              "title": "list",
                              "rowId": "setmenu list"
                           },
                           {
                              "title": "location",
                              "rowId": "setmenu location"
                           }
                        ]
                     }],
 listType: 1
}
if (!listhades.includes(q)) return alpha.sendMessage(from, listMsg, MessageType.listMessage, {quoted: mek})
//reply(`*Example :*${enter}•${prefix + command} location\n•${prefix + command} document\n•${prefix + command} list\n•${prefix + command} troli\n•${prefix + command} troli2\n•${prefix + command} katalog\n•${prefix + command} katalog2\n`)
typemenu = q
reply(lang.success())
break
case 'setlang':
         if (!isOwner && !isCreator && !mek.key.fromMe) return reply(lang.onlyOwner())
if(args[0] == 'ind'){
lang = ind
reply('Sukses mengubah bahasa ke ind')
}else if(args[0] == 'eng'){
lang = eng
reply('Success changing language to eng')
}else if(args[0] == 'es'){
lang = es
reply('Éxito cambiando el idioma a es')
}else if(args[0] == 'ml'){
lang = ml
reply('ഭാഷയിലേക്ക് മാറ്റുന്നതിൽ വിജയം ml')
}else if(args[0] == 'pt'){
lang = pt
reply('Sucesso ao alterar o idioma para pt')
}else if(args[0] == 'ru'){
lang = ru
reply('Успешно сменил язык на ru')
}else {
reply(`Example : ${prefix + command} eng\n\nAvailable\n•ind - Indonesia\n•eng - English\n•es - Spanish\n•ml - Malayalam\n•pt - Portugis\n•ru - Russian`)
}
break
                case 'allmenu':
                case 'menu':
                case 'help':
                try {
					pp_userb = await alpha.getProfilePicture(sender)
				} catch {
					pp_userb = 'https://ibb.co/RHxcNw9'
				}
			let pp_userz = await getBuffer(pp_userb)
                let papao = [{
										"buttonId": `owner`,
										"buttonText": {
											"displayText": "OWNER"
											},
										"type": "RESPONSE"
										},{
										"buttonId": `sewabot`,
										"buttonText": {
											"displayText": "SEWA"
											},
										"type": "RESPONSE"
										
										}]
								sendButLocation(from, allmenu(kyun, os, prefix, wita, wit, ucapannya2, timuu, status, wa_version, mcc, mnc, os_version, device_manufacturer, device_model, alfa , alfa1, thisDay, ini_tanggal, totalchat, hit_today, ini_gcchat, latensii), `NOTE ！\nFollow Instagram https://instagram.com/zeusxz_store\n\n© ${ownername}`,pp_userz, papao, {})
                break
        case 'trigger':
					reply ('Mungkin yg kamu maksud .triggered')
					await limitAdd(sender, limit)
					break
					case 'sampah':
					if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
				 if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	                 ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(lang.wait())
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					media = await alpha.downloadMediaMessage(ger)
					njay = await uploadImages(media)
                    titid = await fetchJson(`https://nekobot.xyz/api/imagegen?type=trash&url=${njay}`, {method: 'get'})
                    buffer = await getBuffer(titid.message)
					alpha.sendMessage(from, buffer, image, {caption : lang.success(),quoted: mek})
                   }
                   await limitAdd(sender, limit)
              break       
		case 'triggered':case 'gay': case 'glass': case 'passed': case 'jail': case 'comrade':case 'green': case 'blue': case 'sepia': case 'wasted': case 'greyscale': case 'blurple2': case 'blurple': case 'red': case 'invertgreyscale': case 'invert':{
		if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(lang.wait())
					owgi = await alpha.downloadMediaMessage(ger)
				    anu = await uploadImages(owgi)
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu4 = `https://some-random-api.ml/canvas/${command}?avatar=${anu}`
					exec(`wget ${anu4} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(lang.tryAgain())
					alpha.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					fs.unlinkSync(rano)
					})
					} else {
					reply(`Reply Foto Dengan Caption ${prefix + command}`)

					}
					await limitAdd(sender, limit)}
					break 
					case 'jadian':
					if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
jds = []
jdii = groupMembers
koss = groupMembers
akuu = jdii[Math.floor(Math.random() * jdii.length)]
diaa = koss[Math.floor(Math.random() * koss.length)]
teks = `Ciee.. yang lagi jadian @${akuu.jid.split('@')[0]}  (♥️ ) @${diaa.jid.split('@')[0]} `
jds.push(akuu.jid)
jds.push(diaa.jid)
mentions(teks, jds, true)
await limitAdd(sender, limit)
break
   case 'group': 
   case 'gc': 
                if (!isGroup) return reply(lang.onlygc());
        if (!isGroupAdmins && !isBotGroupAdmins) return reply(lang.onlygcAdmin());
        if (args[0] == "open") {
          await alpha.groupSettingChange(from, GroupSettingChange.messageSend, false)
					fakegroup('S U C C E S S  O P E N I N G  G R O U P')
        } else if (args[0] == "close") {
          await alpha.groupSettingChange(from, GroupSettingChange.messageSend, true)
					fakegroup('S U C C E S S  C L O S I N G  G R O U P')
        } else if (!q) {
        	var ini_gopayy =`Halo @${sender.split("@")[0]} Gunakan ${prefix + command } Open / Close jika button tidak merespon`
var buttonss = [
{buttonId: 'group open', buttonText:{displayText: 'Open'}, type: 1},
{buttonId: 'group close', buttonText:{displayText: 'Close'}, type: 1}
]

buttonMessagee = {
contentText: ini_gopayy,
footerText: `${tampilTanggal}\n${tampilWaktu}\n\n© ${creator}` ,
buttons: buttonss,
headerType: 1
}
alpha.sendMessage(from,  buttonMessagee, MessageType.buttonsMessage,{
        caption: 'ZeusXz ©2k22',
        "contextInfo": {
            text: 'hi',
            "forwardingScore": 1000000000,
            isForwarded: true,
            sendEphemeral: true,
            "mentionedJid" : [sender]
            },
			quoted: ftroli,sendEphemeral: true 
			})
        }
        break
         /*   case 'mystat': 
            case 'botstat': 
            case 'botstatus': 
			case 'mystatus':
				anu = process.uptime()
                teskny = `B O T  S T A T I S T I C\n`
				teskny +=`\`\`\`Group Chat : ${giid.length}\`\`\`\n`
				teskny +=`\`\`\`Personal Chat : ${totalchat.length - giid.length}\`\`\`\n`
				teskny +=`\`\`\`Total Chat : ${totalchat.length}\`\`\`\n`
				teskny +=`\`\`\`Speed :\`\`\` ${latensii.toFixed(4)} _Second_\n`
				teskny +=`\`\`\`Runtime : ${(kyun(os.uptime()))}\`\`\`\n\n` 
				teskny +=`P H O N E  S T A T I S T I C\n`
				teskny +=`\`\`\`Wa Whatsapp : ${wa_version}\`\`\`\n`
				teskny +=`\`\`\`RAM : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB\`\`\`\n`
				teskny +=`\`\`\`MCC : ${mcc}\`\`\`\n`
				teskny +=`\`\`\`MNC : ${mnc}\`\`\`\n`
				teskny +=`\`\`\`OS Version : ${os_version}\`\`\`\n`
				teskny +=`\`\`\`Merk Hp : ${device_manufacturer}\`\`\`\n`
				teskny +=`\`\`\`Versi Hp : ${device_model}\`\`\`\n`
				teskny +=`\`\`\`Runtime : ${(kyun(os.uptime()))}\`\`\``
				alpha.sendMessage(from, teskny, text, {quoted: { key : { participant : `0@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync(`image/${thumbnail}`), "mimetype": "application/octet-stream","title": `${setting.fake}`, "fileLength": "36", "pageCount": 0, "fileName": `${setting.fake}`}}, "messageTimestamp": "1614069378", "status": "PENDING"},contextInfo:{"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
break
*/
case 'getbio':
				if (!isGroup) return reply(lang.onlygc())
				if (args.length < 1) return reply('```TAG ORANGNYA```')
                mentionedd = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
                const p = await alpha.getStatus(`${mentionedd}`, MessageType.text)
                reply(p.status)
                if (p.status == 401) {
                reply("Error! mungkin diprivate")
                }
                await limitAdd(sender, limit)
                break
/*case 'creategroup':
case 'creategrup':
			    if (!isGroup) return reply(lang.onlygc())
				if (args.length < 1) return reply(`Penggunaan ${prefix}creategrup nama grup|@tag member`)
				argza = arg.split('|')
				if (mek.message.extendedTextMessage != undefined){
                    mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                    for (let i = 0; i < mentioned.length; i++){
						anu = []
						anu.push(mentioned[i])
                    }
					alpha.groupCreate(argza[0], anu)
					reply(`Sukes membuat grup:\n${argza}`)
                }
				break*/
		case 'caripesan':
		    case 'searchmessage':
		if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
				if (!q) return reply(`Penggunaan ${command} _nama pesannya_\n\nContoh \n --> ${command} halo`)
				reply(lang.wait())
				 xtext = args.join(' ')
				                cond = xtext.split(" ")
				                 a = await alpha.searchMessages(xtext, from, 10, 1)// count 10 
				                 fox = '*「 Message Search 」*\n\n'
				                num = 0
				                for (j of a.messages){
				                    num += 1
				                    if (j.message.conversation) {
				                        if (j.key.fromMe){ 
				                            fox += num+'. Sender : '+alpha.user.jid+'\n    Msg : '+j.message.conversation+'\n    MsgID : '+j.key.id+'\n    Type : conversation\n\n'
				                        }else{
				                            fox += num+'. Sender : '+j.key.participant+'\n    Msg : '+j.message.conversation+'\n    MsgID : '+j.key.id+'\n    Type : conversation\n\n'
				                        } 
				                    }
				                    else if (j.message.extendedTextMessage){
				                        if (j.key.fromMe){ 
				                            fox += num+'. Sender : '+alpha.user.jid+'\n    Msg : '+j.message.extendedTextMessage.text+'\n    MsgID : '+j.key.id+'\n    Type : extendedTextMessage\n\n'
				                        }else{
				                            fox += num+'. Sender : '+j.key.participant+'\n    Msg : '+j.message.extendedTextMessage.text+'\n    MsgID : '+j.key.id+'\n    Type : extendedTextMessage\n\n'
				                        } 
				                    }
				                }
				                reply(fox)
				await limitAdd(sender, limit)
		                break
case 'setname':
					if (!isGroup) return reply(lang.onlygc())
					if (!isGroupAdmins) return reply(lang.onlygcAdmin())
					if (!isBotGroupAdmins) return reply(lang.botNotAdm())
					alpha.groupUpdateSubject(from, `${body.slice(9)}`)
					alpha.sendMessage(from, '「  SUKSES  」Mengubah Nama Grup', text, { quoted: fdoc })
					await limitAdd(sender, limit)
					break 
case 'setdesc':
					if (!isGroup) return reply(lang.onlygc())
					if (!isGroupAdmins) return reply(lang.onlygcAdmin())
					if (!isBotGroupAdmins) return reply(lang.botNotAdm())
					alpha.groupUpdateDescription(from, `${body.slice(9)}`)
					alpha.sendMessage(from, '*「  SUKSES  」Mengubah Desk Grup', text, { quoted: fdoc })
					await limitAdd(sender, limit)
					break   
case 'spam':
if (!isGroup) return reply(lang.onlygc())
				if (!isGroupAdmins) return reply(lang.onlygcAdmin())
				if (args.length < 1) return reply(`Penggunaan ${prefix}spam teks|jumlahspam`)
				argzi = args.split("|")
				if (!argzi) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
				if (isNaN(argzi[1])) return reply(`harus berupa angka`)
				for (let i = 0; i < argzi[1]; i++){
					alpha.sendMessage(from, argzi[0], MessageType.text)
				}
				await limitAdd(sender, limit)
					break    
case 'readall':
					if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					var chats = await alpha.chats.all()
                    chats.map( async ({ jid }) => {
                          await alpha.chatRead(jid)
                    })
					rdl = `Berhasil membaca ${chats.length} Chat !`
					reply(rdl)
					console.log(chats.length)
					break
case 'listpc':
					  if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					  cpcp = await getpc(totalchat)
					  teks = `*L I S T  P E R S O N A L  C H A T*\nTOTAL PC: ${cpcp.length}\n\n`
					  for(let i=0; i<cpcp.length; i++){
						conts = mek.key.fromMe ? mek.user.jid : alpha.contacts[cpcp[i]] || {notify: jid.replace(/@.+/, '')}
						pushnama = alpha.contacts[cpcp[i]] != undefined ? alpha.contacts[cpcp[i]].vname || alpha.contacts[cpcp[i]].notify : undefined
						teks += `• Name : ${pushnama}\n• Tag : @${cpcp[i].split("@")[0]}\n• Wa.me : wa.me/${cpcp[i].split("@")[0]}\n\n----------------------------------\n\n`
					}
					mentions( teks, cpcp, true)
					break 
case 'listgroup':
case 'listgrup':
case 'listgc':
case 'listgrop':
case 'gruplist':
case 'groplist':
case 'grouplist':
if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
const txs = alpha.chats.all().filter(v => v.jid.endsWith('g.us')).map(v =>`•> ${alpha.getName(v.jid)}${enter}${v.jid}\n[${v.read_only ? 'Left' : 'Joined'}]`).join`${enter}~~${enter}`
alpha.sendMessage(m.chat, '```「 LIST GROUPS 」```\n\n' + txs, text)
break
				   break 
case 'bcsticker':
case 'bcstik':
					if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					anu = await alpha.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
						const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						bc = await alpha.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							alpha.sendMessage(_.jid, bc, sticker, {quoted:ftroli})
						}
						fakestatus('Suksess broadcast')
					}
					break
case 'bcvideo':
					if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					anu = await alpha.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						bc = await alpha.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							alpha.sendMessage(_.jid, bc, video, {mimetype: 'video/mp4', duration: 359996400,quoted: ftoko,caption: `[ *${setting.botname} BROADCAST* ]\n\n${body.slice(9)}`})
						}
						fakestatus(lang.successBc())
					}
					break
	case 'bcaudio':
					if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					anu = await alpha.chats.all()
					if (isMedia && !mek.message.audioMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						bc = await alpha.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							alpha.sendMessage(_.jid, bc, audio, {mimetype :  'audio/mp4' , duration : 359996400, ptt : true,quoted: ftoko,caption: `[ *${setting.botname} BROADCAST* ]\n\n${body.slice(9)}`})
						}
						fakestatus(lang.successBc())
					}
					break
case 'bcgif':
					if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					anu = await alpha.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						bc = await alpha.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							alpha.sendMessage(_.jid, bc, sticker, {mimetype: Mimetype.gif,quoted : ftroli,caption: `[ *${setting.botname} BROADCAST* ]\n\n${body.slice(7)}`})
						}
						fakestatus(lang.successBc())
					}
					break
         case 'owner':
         case 'creator':  
         ini_ownerNumber = [`${targetpc}@s.whatsapp.net`]
					let ini_list = []
					for (let i of ini_ownerNumber) {
					const vname = alpha.contacts[i] != undefined ? alpha.contacts[i].vname || alpha.contacts[i].notify : undefined
					ini_list.push({
					"displayName": 'Owner ZeusXzBot',
					"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:${vname ? `${vname}` : `${alpha.user.name}`}\nORG: Ownership;\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
					})
					}
					hehe = await alpha.sendMessage(from, {
					"displayName": `${ini_list.length} kontak`,
					"contacts": ini_list 
					}, 'contactsArrayMessage', { quoted: fkontak})
					var ini_gopayy =`Halo @${sender.split("@")[0]} itu owner ku, Mohon yang sopan ya kak😇`
var buttonss = [
{buttonId: 'donasi', buttonText:{displayText: 'Donasi'}, type: 1},
{buttonId: 'sewabot', buttonText:{displayText: 'Sewa'}, type: 1}
]

buttonMessagee = {
contentText: ini_gopayy,
footerText: `${tampilTanggal}\n${tampilWaktu}\n\n© ${creator}` ,
buttons: buttonss,
headerType: 1
}
alpha.sendMessage(from,  buttonMessagee, MessageType.buttonsMessage,{
        caption: 'ZeusXz ©2k22',
        "contextInfo": {
            text: 'hi',
            "forwardingScore": 1000000000,
            isForwarded: true,
            sendEphemeral: true,
            "mentionedJid" : [sender]
            },
			quoted: ftoko,sendEphemeral: true 
			})
					break
                case 'sider':
                shape = '✓ '
infom = await alpha.messageInfo(from, mek.message.extendedTextMessage.contextInfo.stanzaId)
tagg = []
teks = `Telah Dibaca Oleh :\n\n`
for(let i of infom.reads){
teks += shape+' ' + '@' + i.jid.split('@')[0] + '\n'
teks += `> Waktu : ` + moment(`${i.t}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
tagg.push(i.jid)
}
mentions(teks, tagg, true)
await limitAdd(sender, limit)
					break   
			case 'fakeloc':
			if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
               var kntl = body.slice(8)
			   var nama = kntl.split("|")[0];
			   var impostor = kntl.split("|")[1];
			   var bro = fs.readFileSync(`image/${thumbnail}`)
               alpha.sendMessage(from, { name: `${nama}`,address: `${impostor}`,jpegThumbnail: bro }, MessageType.location)                
		    await limitAdd(sender, limit)
					break   
		    case 'on':
		            if (!mek.key.fromMe && !isOwner && !isCreator) return 
		            offline = false
		            fakeitem(lang.ownerOn())
		            break       
		    case 'status':
		            fakeitem(`*STATUS*\n${offline ? '> OFFLINE' : '> ONLINE'}\n${banChats ? '> SELF-MODE' : '> PUBLIC-MODE'}`)
		            break
		    case 'off':
		            if (!mek.key.fromMe && !isOwner && !isCreator) return 
		            offline = true
		            waktu = Date.now()
		            anuu = args.join(' ') ? args.join(' ') : '-'
		            alasan = anuu
		            fakeitem(lang.ownerOff())
		            break   
		    case 'get':
		if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
		            if(!q) return reply('linknya?')
		            fetch(`${args[0]}`).then(res => res.text())  
		            .then(bu =>{
		            fakestatus(bu)
		            })   
		            await limitAdd(sender, limit)
					break   
		    case 'kontag':
					if (!isGroupAdmins) return reply(lang.onlygcAdmin())
					if (!isOwner && !isCreator) return reply(lang.onlyOwner())
		            pe = args.join('')
		            entah = pe.split('|')[0]
		            nah = pe.split('|')[1]
		            if (isNaN(entah)) return reply('Invalid phone number');
		            members_ids = []
		            for (let mem of groupMembers) {
		            members_ids.push(mem.jid)
		            }
		            vcard = 'BEGIN:VCARD\n'
		            + 'VERSION:3.0\n'
		            + `FN:${nah}\n`
		            + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
		            + 'END:VCARD'.trim()
		            alpha.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact, {contextInfo: {"mentionedJid": members_ids}})
		            await limitAdd(sender, limit)
					break   
		    case 'sticktag':
		            if (!isGroupAdmins) return reply(lang.onlygcAdmin())
					if (!isOwner && !isCreator) return reply(lang.onlyOwner())
		            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
		            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await alpha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		            value = args.join(" ")
		            var group = await alpha.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            alpha.sendMessage(from, ini_buffer, sticker, options)
		            fs.unlinkSync(file)
		            } else {
		            fakegroup(`*Reply sticker yang sudah dikirim*`)
		            }
		            await limitAdd(sender, limit)
					break   
		    case 'totag':
		            if (!isGroupAdmins) return reply(lang.onlygcAdmin())
					if (!isOwner && !isCreator) return reply(lang.onlyOwner())
		            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
		            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await alpha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		            value = args.join(" ")
		            var group = await alpha.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            alpha.sendMessage(from, ini_buffer, sticker, options)
		            fs.unlinkSync(file)
		            } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
		            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await alpha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		            value = args.join(" ")
		            var group = await alpha.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            alpha.sendMessage(from, ini_buffer, image, options)
		            fs.unlinkSync(file)
		        } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
		            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await alpha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		            value = args.join(" ")
		            var group = await alpha.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		            	mimetype : 'audio/mp4',
		            	ptt : true,
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            alpha.sendMessage(from, ini_buffer, audio, options)
		            fs.unlinkSync(file)
		        }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
		            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await alpha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		            value = args.join(" ")
		            var group = await alpha.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		            	mimetype : 'video/mp4',
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            alpha.sendMessage(from, ini_buffer, video, options)
		            fs.unlinkSync(file)
		        } else{
		          fakestatus(`reply gambar/sticker/audio/video dengan caption ${prefix}totag`)
		        }
		        await limitAdd(sender, limit)
					break   
		    case 'fitnah':
		if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
		            if (args.length < 1) return fakegroup(`Usage :\n${prefix}fitnah [@tag|pesan|balasanbot]]\n\nEx : \n${prefix}fitnah @tagmember|hai|hai juga`)
		            var gh = args.join('')
		            mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
		            var replace = gh.split("|")[0];
		            var target = gh.split("|")[1];
		            var bot = gh.split("|")[2];
		            alpha.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
		            break
		    case 'settarget':
		if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
		            if(!q) return fakegroup(`${prefix}settarget 628xxxxx`)
		            targetpc = args[0]
		            fakegroup(`Succes Mengganti target fitnahpc : ${targetpc}`)
		            break
		    case 'fitnahpc':
		if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
		            if(!q) return fakegroup(`${prefix}fitnahpc teks target|teksny`)
		            jids = `${targetpc}@s.whatsapp.net` // nomer target
		            var splitt = args.join(' ').replace(/@|\d/gi, '').split('|')
		            var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
		            var options = {contextInfo: {quotedMessage: {extendedTextMessage: {text: splitt[0]}}}}
		            const responye = await alpha.sendMessage(jids, `${splitt[1]}`, MessageType.text, options)
		            await alpha.deleteMessage(jids, { id: responye.messageID, remoteJid: jids, fromMe: true })
		            break
		    case 'tomp3':
		if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
		            if (!isQuotedVideo) return fakegroup('```Reply videonya!```')
		            reply(mess.wait)
		            let encmedia2 = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
		            let media2 = await alpha.downloadAndSaveMediaMessage(encmedia2)
		            ran = getRandom('.mp4')
		            exec(`ffmpeg -i ${media2} ${ran}`, (err) => {
		            fs.unlinkSync(media2)
		            if (err) return fakegroup(`Err: ${err}`)
		            buffer453 = fs.readFileSync(ran)
		            alpha.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', quoted: mek })
		            fs.unlinkSync(ran)
		            })
		            await limitAdd(sender, limit)
					break   
		    case 'fast':
		if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
		            if (!isQuotedVideo) return fakegroup('Reply videonya!')
		            fakegroup(mess.wait)
		            encmedia3 = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
		            media3 = await alpha.downloadAndSaveMediaMessage(encmedia3)
		            ran = getRandom('.mp4')
		            exec(`ffmpeg -i ${media3} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
		            fs.unlinkSync(media3)
		            if (err) return fakegroup(`Err: ${err}`)
		            buffer453 = fs.readFileSync(ran)
		            alpha.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
		            fs.unlinkSync(ran)
		            })
		            await limitAdd(sender, limit)
					break   
		    case 'slow':
		if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
		            if (!isQuotedVideo) return fakegroup('Reply videonya!')
		            fakegroup(mess.wait)
		            encmedia4 = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
		            media4 = await alpha.downloadAndSaveMediaMessage(encmedia4)
		            ran = getRandom('.mp4')
		            exec(`ffmpeg -i ${media4} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
		            fs.unlinkSync(media4)
		            if (err) return fakegroup(`Err: ${err}`)
		            buffer453 = fs.readFileSync(ran)
		            alpha.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
		            fs.unlinkSync(ran)
		            })
		            await limitAdd(sender, limit)
					break   
		case 'tupai':
		if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
var encmedia6 = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
var media6 = await alpha.downloadAndSaveMediaMessage(encmedia6)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media6} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media6)
if (err) return reply('Error!')
let hah = fs.readFileSync(ran)
alpha.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
await limitAdd(sender, limit)
					break   
		    case 'reverse':
		if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
		            if (!isQuotedVideo) return fakegroup('```Reply videonya!```')
		           var encmedia5 = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
		          var media5 = await alpha.downloadAndSaveMediaMessage(encmedia5)
		            ran = getRandom('.mp4')
		            exec(`ffmpeg -i ${media5} -vf reverse -af areverse ${ran}`, (err) => {
		            fs.unlinkSync(media5)
		            if (err) return fakegroup(`Err: ${err}`)
		            buffer453 = fs.readFileSync(ran)
		            alpha.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
		            fs.unlinkSync(ran)
		            })
		            await limitAdd(sender, limit)
					break   
		    case 'anime2':
					if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
		            fetch('https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt')
		            .then(res => res.text())
		            .then(body => {
		            let tod = body.split("\n");
		            let pjr = tod[Math.floor(Math.random() * tod.length)];
		            imageToBase64(pjr)
		            .then((response) => {
		            media =  Buffer.from(response, 'base64');
		            alpha.sendMessage(from,media,image,{quoted:mek,caption:'Dasar wibu. Nih!!!\nJgn lupa sub YT : AN3.'})
		            }
		            )
		            .catch((error) => {
		            console.log(error); 
		            }
		            )
		            });
		            await limitAdd(sender, limit)
					break   
		    case 'kontak':
		if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
		            pe = args.join(' ') 
		            entah = pe.split('|')[0]
		            nah = pe.split('|')[1]
		            if (isNaN(entah)) return reply('Invalid phone number');
		            vcard = 'BEGIN:VCARD\n'
		            + 'VERSION:3.0\n'
		            + `FN:${nah}\n`
		            + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
		            + 'END:VCARD'.trim()
		            alpha.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact)
		            await limitAdd(sender, limit)
					break   
		    case 'take':
		    case 'colong':
		if (!isPremium) return sendButMessage(from, `Mohon maaf fitur ini khusus untuk user premium saja! Upgrade akun mu sekarang dengan cara ketik ${prefix}goprem`, `Click button below`, [{buttonId: 'goprem',buttonText: {displayText: `Upgrade Premium`,},type: 1,}],{quoted:mek});
		if (!isQuotedSticker) return reply('```Reply stc nya```')
		            var encmedia_ = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				    var media_ = await alpha.downloadAndSaveMediaMessage(encmedia_)
		            anu = args.join(' ').split('|')
		            satu = anu[0] !== '' ? anu[0] : `SUBSCRIBE`
		            dua = typeof anu[1] !== 'undefined' ? anu[1] : `ZEUSXZ`
		            require('./lib/fetcher.js').createExif(satu, dua)
					require('./lib/fetcher.js').modStick(media_ , alpha, mek, from)
					await limitAdd(sender, limit)
					break   
			case 'stikerwm':
			case 'stickerwm':
		    case 'swm':
		if (!isPremium) return sendButMessage(from, `Mohon maaf fitur ini khusus untuk user premium saja! Upgrade akun mu sekarang dengan cara ketik ${prefix}goprem`, `Click button below`, [{buttonId: 'goprem',buttonText: {displayText: `Upgrade Premium`,},type: 1,}],{quoted:mek});
		            pe = args.join('')
		            var a = pe.split("|")[0];
		            var b = pe.split("|")[1];
		            if (isMedia && !mek.message.videoMessage || isQuotedImage ) {
		            const encmedia___ = isQuotedImage   ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
		             media___ = await alpha.downloadAndSaveMediaMessage(encmedia___)
		            await createExif(a,b)
		            out = getRandom('.webp')
		            ffmpeg(media___)
		            .on('error', (e) => {
		            console.log(e)
		            alpha.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
		            fs.unlinkSync(media___)
		            })
		            .on('end', () => {
		            _out = getRandom('.webp')
		            spawn('webpmux', ['-set','exif','./sticker/data.exif', out, '-o', _out])
		            .on('exit', () => {
		            alpha.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
		            fs.unlinkSync(out)
		            fs.unlinkSync(_out)
		            fs.unlinkSync(media___)
		            })
		            })
		            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
		            .toFormat('webp')
		            .save(out) 
		            } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
		            const encmedia___ = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
		            const media___ = await alpha.downloadAndSaveMediaMessage(encmedia___)
		            pe = args.join('')
		            var a = pe.split("|")[0];
		            var b = pe.split("|")[1];
		            await createExif(a,b)
		            out = getRandom('.webp')
		            ffmpeg(media___)
		            .on('error', (e) => {
		            console.log(e)
		            alpha.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
		            fs.unlinkSync(media___)
		            })
		            .on('end', () => {
		            _out = getRandom('.webp')
		            spawn('webpmux', ['-set','exif','./sticker/data.exif', out, '-o', _out])
		            .on('exit', () => {
		            alpha.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
		            fs.unlinkSync(out)
		            fs.unlinkSync(_out)
		            fs.unlinkSync(media___)
		            })
		            })
		            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
		            .toFormat('webp')
		            .save(out)       
		            } else {
		            fakestatus(`Kirim gambar dengan caption ${prefix}swm teks|teks atau tag gambar yang sudah dikirim`)
		            }
		            await limitAdd(sender, limit)
					break   
		    case 'upswteks':
		            if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
		            if (!q) return fakestatus('Isi teksnya!')
		            alpha.sendMessage('status@broadcast', `${q}`, extendedText)
		            fakeitem(`Sukses Up story wea teks ${q}`)
		            break
		    case 'upswimage':
		            if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
		            if (isQuotedImage) {
		            const swsw = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            cihcih = await alpha.downloadMediaMessage(swsw)
		            alpha.sendMessage('status@broadcast', cihcih, image, { caption: `${q}` })
		            bur = `Sukses Upload Story Image dengan Caption: ${q}`
		            alpha.sendMessage(from, bur, text, { quoted: mek })
		            } else {
		            fakegroup('```Reply gambarnya!```')
		            }
		            break
		    case 'upswvideo':
		            if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
		            if (isQuotedVideo) {
		            const swsw = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            cihcih = await alpha.downloadMediaMessage(swsw)
		            alpha.sendMessage('status@broadcast', cihcih, video, { caption: `${q}` }) 
		            bur = `Sukses Upload Story Video dengan Caption: ${q}`
		            alpha.sendMessage(from, bur, text, { quoted: mek })
		            } else {
		            fakegroup('```Reply videonya!```')
		            }
		            break
		    case 'fdeface':
		            ge = args.join('')           
		            var pe = ge.split("|")[0];
		            var pen = ge.split("|")[1];
		            var pn = ge.split("|")[2];
		            var be = ge.split("|")[3];
		            const fde = `kirim/reply image dengan capion ${prefix}fdeface link|title|desc|teks`
		            if (args.length < 1) return reply (fde)
		            const dipes = isQuotedSticker || isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
		            const tipes = await alpha.downloadAndSaveMediaMessage(dipes)        
		            const bufer = fs.readFileSync(tipes)
		            const desc = `${pn}`
		            const title = `${pen}`
		            const url = `${pe}`
		            const buu = `https://${be}`
		    		var anu = {
		        	detectLinks: false
		    		}
		    		var mat = await alpha.generateLinkPreview(url)
		    		mat.title = title;
		    		mat.description = desc;
		    		mat.jpegThumbnail = bufer;
		   			mat.canonicalUrl = buu; 
		    		alpha.sendMessage(from, mat, MessageType.extendedText, anu)
		            await limitAdd(sender, limit)
					break   
		    case 'public':
		              if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
		          	if (banChats === false) return
		          	banChats = false
		          	//fakeitem(`「 *PUBLIC-MODE* 」`)
						sendButMessage(from, `「 *PUBLIC-MODE* 」`, `Click self to return to self mode`, [
            {
              buttonId: 'self',
              buttonText: {
                displayText: `Self Mode`,
              },
              type: 1,
            }]);
        break;
			case 'self':
			          if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
		          	if (banChats === true) return
		          	banChats = true
		          	//fakeitem(`「 *SELF-MODE* 」`)
		          	sendButMessage(from, `「 *SELF-MODE* 」`, `Click public to return to public mode`, [
            {
              buttonId: 'public',
              buttonText: {
                displayText: `Public Mode`,
              },
              type: 1,
            }]);
        break;
		case 'revoke':
if (!isGroup) return fakegroup(lang.onlygc())
					if (!isGroupAdmins) return reply(lang.onlygcAdmin())
await alpha.revokeInvite(from)
reply(lang.success())
break
		 	case 'hidetag':
		     case '_`':
		     if (!isGroup) return fakegroup(lang.onlygc())
			if (!isGroupAdmins) return reply(lang.onlygcAdmin())
		var value = args.join(' ')
					var group = await alpha.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map(async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var optionshidetag = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					alpha.sendMessage(from, optionshidetag, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "393470602054-1351628616@g.us" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": `${setting.fake}`, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync(`image/${thumbnail}`)} }  } })
					await limitAdd(sender, limit)
					break   
				case 'sewacheck':
				case 'ceksewa':
							if (!isGroup) return fakegroup(lang.onlygc())
							if (!isSewa) return reply(`Group ini tidak terdaftar dalam list sewabot. Ketik ${prefix}sewabot untuk info lebih lanjut`)
							let cekvip = ms(_sewa.getSewaExpired(from, sewa) - Date.now())
							let premiumnya = `*「 SEWA EXPIRED 」*\n\n📛 *ID*: ${from}\n⏰ *Expired :* ${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s)`
							reply(premiumnya)
							break
				case 'sewa':
							if (!isGroup)return fakegroup(lang.onlygc())
							if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
							if (args.length < 1) return reply(`Penggunaan :\n*${prefix}sewa* add/del waktu`)
							if (args[0] === 'add'){
								_sewa.addSewaGroup(from, args[1], sewa)
								reply(lang.success())
								} else if (args[0] === 'del'){
									sewa.splice(_sewa.getSewaPosition(from, sewa), 1)
									fs.writeFileSync('./src/sewa.json', JSON.stringify(sewa))
									reply(lang.success())
									} else {
										reply(`Example : *${prefix}sewa* add/del waktu`)
										}
							break
				case 'sewalist': 
				case 'listsewa':
							let txtnyee = `*「 LIST SEWA」*\nJumlah : ${sewa.length}\n\n`
							for (let i of sewa){
								let cekvipp = ms(i.expired - Date.now())
								txtnyee += `🆔 *ID :* ${i.id} \n⏰ *Expire :* ${cekvipp.days} day(s) ${cekvipp.hours} hour(s) ${cekvipp.minutes} minute(s) ${cekvipp.seconds} second(s)\n\n`
								}
							reply(txtnyee)
							break
				case 'premium': case 'prem':
							if (args.length === 0) return reply(`Kirim perintah *${prefix}premium* add/del 62xxx waktu (misal 1 hari -> 1d)\nExample:\n${prefix}premium add 62887435047326 1d`)
							if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
							if (args[0] === 'add') {
								if (mek.message.extendedTextMessage != undefined) {
									mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
									premium.addPremiumUser(mentioned[0], args[2], _premium)
									reply(`*「 PREMIUM ADDED 」*\n\n📛 *ID*: ${mentioned[0]}\n⏰ *Expired*: ${ms(toMs(args[2])).days} day(s) ${ms(toMs(args[2])).hours} hour(s) ${ms(toMs(args[2])).minutes} minute(s)`)
									} else {
										premium.addPremiumUser(args[1] + '@s.whatsapp.net', args[2], _premium)
										reply(`*「 PREMIUM ADDED 」*\n\n📛 *ID*: ${args[1]}@s.whatsapp.net\n⏰ *Expired*: ${ms(toMs(args[2])).days} day(s) ${ms(toMs(args[2])).hours} hour(s) ${ms(toMs(args[2])).minutes} minute(s)`)
										}
										} else if (args[0] === 'del') {
											if (mek.message.extendedTextMessage != undefined) {
									mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
									_premium.splice(premium.getPremiumPosition(mentioned[0], _premium), 1)
									fs.writeFileSync('./src/premiun.json', JSON.stringify(_premium))
									reply(lang.success())
									} else {
										_premium.splice(premium.getPremiumPosition(args[1] + '@s.whatsapp.net', _premium), 1)
										fs.writeFileSync('./src/premiun.json', JSON.stringify(_premium))
										reply(lang.success())
										}
										} else {
											reply('emror')
											}
							break
				case 'premiumcheck': case 'cekpremium': 
							if (!isPremium) return reply(`Akun kamu belum premium silahkan ${prefix}buypremium`)
							const cekExp = ms(await premium.getPremiumExpired(sender, _premium) - Date.now())
							reply(`*「 PREMIUM EXPIRED 」*\n\n🆔 *ID*: ${sender}\n🏦 *Premium left*: ${cekExp.days} day(s) ${cekExp.hours} hour(s) ${cekExp.minutes} minute(s)`)
							break
				case 'listprem': case 'listpremium':
							let txt = `「 *PREMIUM USER LIST* 」\n\n`
							let men = [];
							for (let i of _premium){
								men.push(i.id)
								const checkExp = ms(i.expired - Date.now())
								txt += `🆔 *ID :* @${i.id.split("@")[0]}\n⏰ *Expired*: ${checkExp.days} day(s) ${checkExp.hours} hour(s) ${checkExp.minutes} minute(s)\n\n`
								}
								mentions(txt, men, true)
							break
				case 'payment': case 'pay': case 'donasi': case 'donate':
				alpha.sendMessage(from, fs.readFileSync(`./image/${setting.donasi}`), image, {caption: 'Scan untuk melakukan pembayaran', quoted: mek, thumbnail: fs.readFileSync(`./image/${setting.donasi}`)})
				break
				case 'belipremium': case 'buypremium': case 'sewabot': case 'goprem':
							let sewalak = await getBuffer('https://telegra.ph/file/5e96a14f1ebaee0df2e24.jpg')
							sendButLocation(from, pc_sewa() , `©  ${ownername}`,sewalak,  [{"buttonId": `payment`,"buttonText": {"displayText": "PAYMENT"},"type": "RESPONSE"}], {})
							break
				case 'gcbot': case 'grupbot': case 'groupbot':
							let gcbot = await getBuffer('https://telegra.ph/file/09d4f9b77a0745f35bdfa.jpg')
							reply('Group bot telah di kirim ke private chat')
							sendButLocation(sender, gcbotwa() , `©  ${ownername}`,gcbot,  [{"buttonId": `sewabot`,"buttonText": {"displayText": "SEWABOT"},"type": "RESPONSE"}], {})
							break
				case 'infobot':
				let infobopot = await getBuffer('https://telegra.ph/file/06fad83011a4b1cecd4ba.jpg')
							sendButLocation(from, infobot(status, offline, latensii, totalchat, giid, wa_version, mcc, mnc, os_version, device_manufacturer, device_model, ownerNumberrr,runtime, kyun) , `©  ${ownername}`,infobopot,  [{"buttonId": 'gcbot',"buttonText": {"displayText": "GROUP BOT"},"type": "RESPONSE"}], {contextInfo:{"mentionedJid": [ownerNumberrr]}})
							break
			case 'sticker': case 'stikerin':
				case 'stiker': case 's':{
						if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
						if (isMedia && !mek.message.videoMessage || isQuotedImage) {
							const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
							const media = await alpha.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
							exif.create('Created By', '@zeusxz_store', `stickwm_${sender}`)
							//ran = getRandom('.webp')
                        await ffmpeg(`./${media}`)
                            .input(media)
                            .on('start', function (cmd) {
                                console.log(`Started : ${cmd}`)
                            })
                            .on('error', function (err) {
                                console.log(`Error : ${err}`)
                                fs.unlinkSync(media)
                                 })
                            .on('end', async function () {
                                console.log('Finish')
                                exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
								if (error) return reply(lang.tryAgain())
								await alpha.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: fgif})
								fs.unlinkSync(media)	
									fs.unlinkSync(`./sticker/${sender}.webp`)	
                                    fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
								})
								})
                           .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(`./sticker/${sender}.webp`)
                    } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
                        const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        const media = await alpha.downloadAndSaveMediaMessage(encmedia)
                        exif.create('Created By', 'zeusxz_store', `stickwm_${sender}`)
                    //    ran = getRandom('.webp')
                        await ffmpeg(`./${media}`)
                            .inputFormat(media.split('.')[1])
                            .on('start', function (cmd) {
                                console.log(`Started : ${cmd}`)
                            })
                            .on('error', function (err) {
                                console.log(`Error : ${err}`)
                                fs.unlinkSync(media)
                                tipe = media.endsWith('.mp4') ? 'video' : 'gif'
                                reply(`❌ Gagal, pada saat mengkonversi ${tipe} ke stiker`)
                            })
                            .on('end', async function () {
                                console.log('Finish')
                                exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
						if (error) return reply(lang.tryAgain())
								await alpha.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: fgif})
								fs.unlinkSync(media)	
									fs.unlinkSync(`./sticker/${sender}.webp`)	
                                    fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
								})
								})
								.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
						.save(`./sticker/${sender}.webp`)
                    } else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        const media = await alpha.downloadAndSaveMediaMessage(encmedia)
                        ranw = getRandom('.webp')
                        ranp = getRandom('.png')
                        reply(mess.wait)
                        keyrmbg = 'bcAvZyjYAjKkp1cmK8ZgQvWH'
                        await removeBackgroundFromImageFile({ path: media, apiKey: keyrmbg, size: 'auto', type: 'auto', ranp }).then(res => {
                            fs.unlinkSync(media)
                            let bufferir9vn5 = Buffer.from(res.base64img, 'base64')
                            fs.writeFileSync(ranp, bufferir9vn5, (err) => {
                                if (err) return reply('Gagal, Terjadi kesalahan, silahkan coba beberapa saat lagi.')
                            })
                            exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
                                fs.unlinkSync(ranp)
                                if (err) return reply(lang.tryAgain())
                                alpha.sendMessage(from, fs.readFileSync(ranw), sticker, { quoted: mek })
                                    fs.unlinkSync(ranw)
                                })
                            })
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix}sticker atau tag gambar yang sudah dikirim\nDurasi sticker video 1-9 detik...`)
                    }
                    await limitAdd(sender, limit)
				            }
           break
		case 'toimg':{
		if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
		if (!isQuotedSticker) return reply('Reply stc nya!')
					reply(lang.wait())
					encmediaa = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediaa = await alpha.downloadAndSaveMediaMessage(encmediaa)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${mediaa} ${ran}`, (err) => {
					fs.unlinkSync(mediaa)
					if (err) return reply('Yah gagal, coba ulangi ^_^')
					buffer = fs.readFileSync(ran)
					fakethumb(buffer,'Webp To Image')
					fs.unlinkSync(ran)
					})
					await limitAdd(sender, limit)}
					break   
			case 'ytsearch': case 'yts':
			if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
					if (args.length < 1) return reply('Tolong masukan query!')
					var srch = args.join(' ');
					try {
		        	var aramas = await yts(srch);
		   			} catch {
		        	return await alpha.sendMessage(from, 'Error!', MessageType.text, dload)
		    		}
		    		aramat = aramas.all 
		    		var tbuff = await getBuffer(aramat[0].image)
		    		var ytresult = '';
		    		ytresult += '「 *YOUTUBE SEARCH* 」'
		    		ytresult += '\n________________________\n\n'
		   			aramas.all.map((video) => {
		        	ytresult += '🐣 Title: ' + video.title + '\n'
		            ytresult += '📬 Link: ' + video.url + '\n'
		            ytresult += '⏰ Durasi: ' + video.timestamp + '\n'
					ytresult += '👁️ Views: ' + video.views + '\n'
		            ytresult += '🚀 Upload: ' + video.ago + '\n________________________\n\n'
		    		});
		    		ytresult += '*WHATSAPP-BOT*'
		    		await fakethumb(tbuff,ytresult)
					await limitAdd(sender, limit)
					break   
			case 'setreply':
			case 'setfake':
			        if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					if (!q) return fakegroup(mess.wrongFormat)
					fake = q
					fakegroup(`Succes Mengganti Conversation Fake : ${q}`)
					break
			case 'setprefix':
if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
reply('Pke yg multi aja')
/*if (args.length < 1) return reply(`*Format Error!*\n\n*Example :*\n •${prefix + command} multi\n •${prefix + command} nopref\n •${prefix + command} #`)
if((args[0]) == 'multi'){
if(multi)return reply('_Sudah diaktifkan sebelumnya!_')
multi = true
nopref = false
single = false
reply(`_Succses mengganti Prefix ke Multiprefix!_`)
}else
if ((args[0]) == 'nopref'){
if(nopref)return reply('_Sudah diaktifkan sebelumnya!_')
multi = false
single = false
nopref = true
reply(`_Succses mengganti Prefix ke noprefix!_`)
}else
if((args[0]) == `${q}`){
multi = false
nopref = false
single = true
prefa = `${q}`
reply(`_Succses mengganti Prefix ke ${q}_`)
}*/
break
			case 'setfakeimg':
			        if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
		        	if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
		            boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
					delb = await alpha.downloadMediaMessage(boij)
					fs.writeFileSync(`./image/${fthumb}`, delb)
					fakestatus('Sukses')
		        	} else {
		            fakeitem(`Kirim gambar dengan caption ${prefix}setfakeimg`)
		          	}
					break	
			case 'setthumb':
			        if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
			        if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
		          	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
					delb = await alpha.downloadMediaMessage(boij)
					fs.writeFileSync(`./image/${thumbnail}`, delb)
					fakestatus('Sukses')
		        	} else {
		            fakegroup(`Kirim gambar dengan caption ${prefix}sethumb`)
		          	}
					break	
			case 'image':
			if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
		            if (args.length < 1) return fakegroup('Masukan teks!')
		            const gimg = args.join('');
gis(gimg, async (error, result) => {
n = result
images = n[Math.floor(Math.random() * n.length)].url
cptg = `*-------「 GIMAGE SEARCH 」-------*
⛄ *Query* : ${gimg}
🔗 *Media Url* : ${images}`
var imgnya = await getBuffer(images)
sendButImage(from,  cptg , `© ${ownername}`,imgnya, [{"buttonId": `image ${q}`,"buttonText": {"displayText": "Next Image"},"type": "RESPONSE"}], {quoted: mek})
			})
					await limitAdd(sender, limit)
					break   
		    
		    case 'brainly':
		if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
					if (args.length < 1) return reply('Pertanyaan apa')
		          	brien = args.join(' ')
					brainly(`${brien}`).then(res => {
					teks = '❉───────────────────────❉\n'
					for (let Y of res.data) {
					teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉──────────────────❉\n`
					}
					alpha.sendMessage(from, teks, text,{quoted:mek,detectLinks: false})                        
		            }).catch(e => {
					reply('Terjadi kesalahan, coba beberapa saat lagi')
					})             
					await limitAdd(sender, limit)
					break       
    case 'playstore':
    if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
            if(!q) return reply('lu nyari apa?')
            let play = await hx.playstore(q)
            let store = '❉─────────────────────❉\n'
            for (let i of play){
            store += `\n*「 *PLAY STORE* 」*\n
- *Nama* : ${i.name}
- *Link* : ${i.link}\n
- *Dev* : ${i.developer}
- *Link Dev* : ${i.link_dev}\n❉─────────────────────❉`
            }
            reply(store)
            await limitAdd(sender, limit)
					break   
		case 'linkwa':
case 'grupwa':
case 'groupwa':
case 'gcwa':
if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
            if(!q) return reply('cari group apa?')
            hx.linkwa(q)
            .then(result => {
            let res = '「 *GC WA* 」\n\n'
            for (let i of result) {
            res += `*Nama*: *${i.nama}\n*Link*: ${i.link}\n\n`
            }
            reply(res)
            });
            await limitAdd(sender, limit)
			break    
case 'lirik':
if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
            if(!q) return reply('lagu apa?')
            let song = await hx.lirik(q)
            sendMediaURL(from,song.thumb,song.lirik)
            await limitAdd(sender, limit)
			break  
    case 'anime':
    if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
 if(!q) return reply('Judul animenya?')
 zee.Anime(`${q}`).then(async data => {
                    let txt = `*-------「 ANIME-SEARCH 」-------*\n\n`
                    for (let i of data) {
                        txt += `*📫 Title :* ${i.judul}\n`
                        txt += `*📚 Url :* ${i.link}\n-----------------------------------------------------\n`
                    }
                    await sendFileFromUrl(from,data[0].thumbnail,txt,mek)
                })
                .catch((err) => {
                    reply(lang.tryAgain())
                })
            break
    case 'otaku':
    if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
            if(!q) return reply('Judul animenya?')
            let anime = await hx.otakudesu(q)
            rem = `*Judul* : ${anime.judul}
*Jepang* : ${anime.jepang}
*Rating* : ${anime.rate}
*Produser* : ${anime.produser}
*Status* : ${anime.status}
*Episode* : ${anime.episode}
*Durasi* : ${anime.durasi}
*Rilis* : ${anime.rilis}
*Studio* : ${anime.studio}
*Genre* : ${anime.genre}\n
*Sinopsis* :
${anime.desc}\n\n*Link Batch* : ${anime.batch}\n*Link Download SD* : ${anime.batchSD}\n*Link Download HD* : ${anime.batchHD}`
           var ram = await getBuffer(anime.img)
            alpha.sendMessage(from,ram,image,{quoted:mek,caption:rem})
            await limitAdd(sender, limit)
			break   
    case 'komiku':
    if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
            if(!q) return reply(`judulnya?\n${prefix}komiku mao gakuin`)
            let komik = await hx.komiku(q)
            result = `*Title* : ${komik.title}\n
*Title Indo* : ${komik.indo}\n
*Update* : ${komik.update}\n
*Desc* : ${komik.desc}\n
*Chapter Awal* : ${komik.chapter_awal}
*Chapter Akhir* : ${komik.chapter_akhir}`
            sendMediaURL(from, komik.image,result)
            await limitAdd(sender, limit)
					break     
			case 'term':
			
			        if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					if (!q) return fakegroup(mess.wrongFormat)
					exec(q, (err, stdout) => {
					if (err) return fakegroup(`ZEUSXZBOT:~ ${err}`)
					if (stdout) {
					fakegroup(stdout)
					}
					})
				    break 
		    case 'join':
		            if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
		            try {
		            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(lang.erorLink())
		            hen = args[0]
		            if (!q) return fakestatus('Masukan link group')
		            var codeInvite = hen.split('https://chat.whatsapp.com/')[1]
		            if (!codeInvite) return fakegroup ('pastikan link sudah benar!')
		            var response = await alpha.acceptInvite(codeInvite)
		            fakestatus('```SUKSES JOIN GRUP```')
		            } catch {
		            fakegroup('```LINK ERROR!```')
		            }
		            break
		    case 'twmp4': case 'twitter':
if (args.length < 1) return reply('Link?')
lin = args[0]
reply(lang.wait())
zee.Twitter(`${lin}`).then(async data => {
                    let txt = `*----「 TWITTER DOWNLOADER 」----*\n\n`
                    txt += `*📫 Title :* ${data.title}\n`
                    txt += `*📟 Quality :* ${data.medias[1].quality}\n`
                    txt += `*💾 Size :* ${data.medias[1].formattedSize}\n`
                    txt += `*📚 Url :* ${data.url}`
                    sendFileFromUrl(from,data.medias[1].url,txt,mek)
                })
                .catch((err) => {
                    reply(lang.err())
                })
await limitAdd(sender, limit)
					break   
case 'twmp3':
if (args.length < 1) return reply('Link?')
lin = args[0]
reply(lang.wait())
hx.twitter(lin).then(async (res) => {
console.log('[ TWITTER ] downloader')
Anu = res.SD
fto = fs.readFileSync(`./image/${thumbnail}`)
alpha.sendMessage(from, fto, image, {quoted:mek, caption:`*TWITTER MP3*${enter}${enter}•> Hd : ${res.HD}${enter}•> Sd : ${res.SD}${enter}•> Audio : ${res.audio}${enter}${enter}_Please wait, the media file is being sent it may take a few minutes_`, thumbnail:fs.readFileSync(`./image/${thumbnail}`), contextInfo:{forwardingScore: 989, isForwarded: true}})
khs = await getBuffer(Anu)
alpha.sendMessage(from, khs, audio, {mimetype:'audio/mp4', filename:'alphagan.mp3', quoted:mek, ptt:true})
})
await limitAdd(sender, limit)
					break   
		    case 'runtime':
		    case 'test':
		            run = process.uptime() 
		            teks = `${kyun(runtime)}`
		            reply(teks)
		            break  
			case 'speed':
			case 'ping':
			const timestamp = speed();
					const latensi = speed() - timestamp
					exec(`neofetch --stdout`, (error, stdout, stderr) => {
					const child = stdout.toString('utf-8')
					const teks = child.replace(/Memory:/, "Ram:")
					const pingnya = `\`\`\`${teks}Speed: ${latensi.toFixed(4)} Second\`\`\``
					fakegroup(pingnya)
					})
					break
               
		    case 'totag':
		if (!isGroupAdmins) return reply(lang.onlygcAdmin())
		if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
		            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await alpha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		            value = args.join(" ")
		            var group = await alpha.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            alpha.sendMessage(from, ini_buffer, sticker, options)
		            fs.unlinkSync(file)
		            } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
		            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await alpha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		            value = args.join(" ")
		            var group = await alpha.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            alpha.sendMessage(from, ini_buffer, image, options)
		            fs.unlinkSync(file)
		        } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
		            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await alpha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		            value = args.join(" ")
		            var group = await alpha.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		                mimetype : 'audio/mp4',
		                ptt : true,
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            alpha.sendMessage(from, ini_buffer, audio, options)
		            fs.unlinkSync(file)
		        }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
		            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await alpha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		            value = args.join(" ")
		            var group = await alpha.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		                mimetype : 'video/mp4',
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            alpha.sendMessage(from, ini_buffer, video, options)
		            fs.unlinkSync(file)
		        } else{
		          fakegroup(`reply gambar/sticker/audio/video dengan caption ${prefix}totag`)
		        }
		        await limitAdd(sender, limit)
					break   
		    case 'tomp4':
		            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
		            ger = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            let owogi = await alpha.downloadAndSaveMediaMessage(ger)
		            webp2mp4File(owogi).then(res=>{
		            sendMediaURL(from,res.result,'Done')
		            })
		            }else {
		            fakegroup('reply stiker')
		            }
		            fs.unlinkSync(owogi)
		            await limitAdd(sender, limit)
					break   
			case 'togif':
		            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
		            ger = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            let owoogi = await alpha.downloadAndSaveMediaMessage(ger)
		            webp2mp4File(owoogi).then(async res=>{
					let ksksn = await getBuffer(res.result)
		            alpha.sendMessage(from, ksksn, MessageType.video, {mimetype: 'video/gif', gifPlayback: true, caption: lang.success(), quoted: fgif })
		            })
		            }else {
		            fakegroup('Reply stiker')
		            }
		            fs.unlinkSync(owoogi)
		            await limitAdd(sender, limit)
					break   
		    case 'tourl':
			case 'imgtourl':{
                if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
 									 boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
									 owgi = await alpha.downloadMediaMessage(boij)
									 res = await uploadImages(owgi)
									 reply(res)
										} else {
											reply('kirim/reply gambar/video')
										}
										}
											await limitAdd(sender, limit)
					break   
/*
]=====> NSFW MENU<=====[
*/

			case 'awoo':
					if (!isNsfw) return reply(lang.nsfwmo())
					reply(lang.wait())
					anu = await fetchJson(`https://waifu.pics/api/sfw/awoo`)
					buffer = await getBuffer(anu.url)
					anu  = {contextInfo: {"forwardingScore":999,"isForwarded":true,'stanzaId': msgId, 'participant':`${numbernye}@s.whatsapp.net`, 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"locationMessage": {"degreesLatitude": 41.893714904785156, "degreesLongitude": -87.63370513916016, "name": fake , 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}}
                    alpha.sendMessage(from, buffer, image, anu)
					await limitAdd(sender, limit)
					break   
			case 'blowjob2':
					if (!isNsfw) return reply(lang.nsfwmo())
					reply(lang.wait())
					anu = await fetchJson(`https://nekos.life/api/v2/img/blowjob`)
					buffer = await getBuffer(anu.url)
					anu  = {contextInfo: {"forwardingScore":999,"isForwarded":true,'stanzaId': msgId, 'participant':`${numbernye}@s.whatsapp.net`, 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"locationMessage": {"degreesLatitude": 41.893714904785156, "degreesLongitude": -87.63370513916016, "name": fake , 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}}
                    alpha.sendMessage(from, buffer, image, anu)
					await limitAdd(sender, limit)
					break   
			case 'megumin':
					if (!isNsfw) return reply(lang.nsfwmo())
					reply(lang.wait())
					anu = await fetchJson(`https://waifu.pics/api/sfw/megumin`)
					buffer = await getBuffer(anu.url)
					anu  = {contextInfo: {"forwardingScore":999,"isForwarded":true,'stanzaId': msgId, 'participant':`${numbernye}@s.whatsapp.net`, 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"locationMessage": {"degreesLatitude": 41.893714904785156, "degreesLongitude": -87.63370513916016, "name": fake , 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}}
                    alpha.sendMessage(from, buffer, image, anu)
					await limitAdd(sender, limit)
					break   
			case 'trapnime':
					if (!isNsfw) return reply(lang.nsfwmo())
					reply(lang.wait())
					anu = await fetchJson(`https://waifu.pics/api/nsfw/trap`)
					buffer = await getBuffer(anu.url)
					anu  = {contextInfo: {"forwardingScore":999,"isForwarded":true,'stanzaId': msgId, 'participant':`${numbernye}@s.whatsapp.net`, 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"locationMessage": {"degreesLatitude": 41.893714904785156, "degreesLongitude": -87.63370513916016, "name": fake , 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}}
                    alpha.sendMessage(from, buffer, image, anu)
					await limitAdd(sender, limit)
					break   

/*
]=====> GROUP MENU<=====[
*/
  
			case 'add':  
			if (!isGroup) return reply(lang.onlygc())
					if (!isGroupAdmins) return reply(lang.onlygcAdmin())
					if (!isBotGroupAdmins) return reply(lang.botNotAdm())
                    if (args.length < 1) return reply('Yang mau di add?')
					if (args[0].startsWith('08')) return reply('Gunakan kode negara mas')
					orang = args[0] + '@s.whatsapp.net'
response = await alpha.groupAdd(from, [orang])
o = response.participants[0]
let inv = (Object.values(o))
if(inv[0].code == 409) return reply('Orang yang anda add sudah ada didalam Group!')
else if(inv[0].code == 403){
alpha.sendMessage(from, `User private\n\nMengirim Undangan Group Ke @${q.split('@')[0]}`, MessageType.text, {quoted: mek, contextInfo: {mentionedJid: [orang]}})
alpha.sendMessage(from, orang, inv[0].invite_code, inv[0].invite_code_exp, groupMetadata.subject , `Salah Satu Admin Mengundang Anda Masuk Ke Sini Silahkan Klik Bergabung Untuk Masuk`)
}
					break 
					case 'radd': case 'addreply':
					if (!isGroup) return reply(lang.onlygc())
					if (!isGroupAdmins) return reply(lang.onlygcAdmin())
					if (!isBotGroupAdmins) return reply(lang.botNotAdm())
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Reply pesan yg ingin di Add!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
mentions(`Perintah di terima, Add: @${mentioned[0].split('@')[0]}`, mentioned, true)
alpha.groupAdd(from, mentioned)
break

case 'kick':
if (!isGroup) return reply(lang.onlygc())
					if (!isGroupAdmins) return reply(lang.onlygcAdmin())
					if (!isBotGroupAdmins) return reply(lang.botNotAdm())
if(!q)return reply(`*Format salah!*\n\n*Example : ${prefix + command} @tag*`)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
yau = q.split('@')[1] + '@s.whatsapp.net'
alpha.groupRemove(from, [yau])
reply(`Succses kick target!`)
break

case 'rkick': case 'kickreply':
if (!isGroup) return reply(lang.onlygc())
					if (!isGroupAdmins) return reply(lang.onlygcAdmin())
					if (!isBotGroupAdmins) return reply(lang.botNotAdm())
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Reply pesan yg ingin di Kick!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
mentions(`Perintah di terima, mengeluarkan : @${mentioned[0].split('@')[0]}`, mentioned, true)
alpha.groupRemove(from, mentioned)
break
			case 'antilink':
if (!isGroup) return reply(lang.onlygc())
					if (!isGroupAdmins) return reply(lang.onlygcAdmin())
					if (!isBotGroupAdmins) return reply(lang.botNotAdm())
              if (args[0] == 'on'){
              if (isAntiLink) return reply(lang.anjawaUdhOn(command))
              antilink.push(from)
              fs.writeFileSync('./src/antilink.json', JSON.stringify(antilink))
              reply(lang.anjawaOn(command))
              } else if (args[0] == 'off'){
              let anu = antilink.indexOf(from)
              antilink.splice(anu, 1)
              fs.writeFileSync('./src/antilink.json', JSON.stringify(antilink))
              reply(lang.anjawaOff(command))
              } else if (!q) {
          sendButMessage(from, `MODE ANTILINK`, `Choose one`, [
            {
              buttonId: 'antilink on',
              buttonText: {
                displayText: `On`,
              },
              type: 1,
            },
            {
              buttonId: 'antilink off',
              buttonText: {
                displayText: `Off`,
              },
              type: 1,
            },
          ]);
        }
        break;
       case 'event':
					if (!isGroup) return reply(lang.onlygc())
					if (!isGroupAdmins) return reply(lang.onlygcAdmin())
					if ( !isOwner && !isCreator && !mek.key.fromMe) return reply("Khusus admin");
					if (args[0] == "on") {
						if (isEventon) return reply(lang.anjawaUdhOn(command))
						event.push(from)
						fs.writeFileSync('./src/event.json', JSON.stringify(event))
						reply(lang.anjawaOn(command))
					} else if (args[0] == "off") {
						event.splice(from, 1)
						fs.writeFileSync('./src/event.json', JSON.stringify(event))
						reply(lang.anjawaOff(command))
					} else if (!q) {
          sendButMessage(from, `MODE EVENT`, `Choose one`, [
            {
              buttonId: 'event on',
              buttonText: {
                displayText: `On`,
              },
              type: 1,
            },
            {
              buttonId: 'event off',
              buttonText: {
                displayText: `Off`,
              },
              type: 1,
            },
          ]);
        }
        break;
	case 'antivirtex':
 if (!isGroup) return reply(lang.onlygc())
					if (!isGroupAdmins) return reply(lang.onlygcAdmin())
					if (!isBotGroupAdmins) return reply(lang.botNotAdm())       
        if (args[0] == "on") {
          if (isAntivirtex) return reply(lang.anjawaUdhOn(command))
          antivirtex.push(from);
          fs.writeFileSync(
            "./src/antivirtex.json",
            JSON.stringify(antivirtex)
          );
          reply(lang.anjawaOn(command))
        } else if (args[0] == "off") {
          antivirtex.splice(from, 1);
          fs.writeFileSync("./src/antivirtex.json", JSON.stringify(ant));
          reply(lang.anjawaOff(command))
        } else if (!q) {
          sendButMessage(from, `MODE ANTIVIRTEX`, `Choose one`, [
            {
              buttonId: 'antivirtex on',
              buttonText: {
                displayText: `On`,
              },
              type: 1,
            },
            {
              buttonId: 'antivirtex off',
              buttonText: {
                displayText: `Off`,
              },
              type: 1,
            },
          ]);
        }
        break;
			case 'admin':
					if (!isGroup) return fakestatus('```KHUSUS GRUP BRO```')
					teks = `*DAFTAR ATASAN GROUP* _${groupMetadata.subject}_\n*TOTAL* : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
					no += 1
					teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
			
			case 'tagall':
			if (!isGroup) return reply(lang.onlygc())
					if (!isGroupAdmins) return reply(lang.onlygcAdmin())
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
					teks += `@${mem.jid.split('@')[0]}\n`
					members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break

			case 'clearall':
			        if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
			        anu = await alpha.chats.all()
					alpha.setMaxListeners(10)
					for (let _ of anu) {
					alpha.deleteChat(_.jid)
					}
					reply(lang.success())
					break
            case 'out':
                    if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					setTimeout( () => {
					alpha.groupLeave (from) 
					}, 2000)
					setTimeout( () => {
					alpha.updatePresence(from, Presence.composing) 
					reply('```Byeee 👋```')
					}, 0)
					break     
		    case 'leave2':
                    if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					setTimeout( () => {
					alpha.groupLeave (q) 
					}, 2000)
					setTimeout( () => {
					alpha.updatePresence(from, Presence.composing) 
					fakestatus('```Ok gua out```')
					}, 0)
					break       
           case 'getpp':
				if (mek.message.extendedTextMessage != undefined){
					let mentioneddd = mek.message.extendedTextMessage.contextInfo.mentionedJid
					try {
						pic = await alpha.getProfilePicture(mentioneddd[0])
					} catch {
						pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
					}
					seeer = `Nama : *${pushname}`
					thumbb = await getBuffer(pic)
					anuu  = {contextInfo:{"forwardingScore":999,"isForwarded":true,'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': `${numbernye}@s.whatsapp.net`, 'remoteJid': '6289523258649-1604595598@g.us', 'quotedMessage': {"imageMessage": {"caption": `「 Bot by zeusxz 」`, 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}}
                    alpha.sendMessage(from, thumbb ,image, anuu)
				}
				await limitAdd(sender, limit)
					break   
	case 'inspect':
		            try {
		            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(lang.erorLink())
		            if (!q) return reply('```Masukkan link groupnya```')
		            cos = args[0]
		            var net = cos.split('https://chat.whatsapp.com/')[1]
		            if (!net) return reply('pastikan itu link https://whatsapp.com/')
		            jids = []
		            let { id, owner, subject, subjectOwner, desc, descId, participants, size, descOwner, descTime, creation} = await alpha.query({ 
		            json: ["query", "invite",net],
		            expect200:true })
		            let par = `*Id* : ${id}
		${owner ? `*Owner* : @${owner.split('@')[0]}` : '*Owner* : -'}
		*Nama Gc* : ${subject}
		*Gc dibuat Tanggal* : ${formatDate(creation * 1000)}
		*Jumlah Member* : ${size}
		${desc ? `*Desc* : ${desc}` : '*Desc* : tidak ada'}
		*Id desc* : ${descId}
		${descOwner ? `*Desc diubah oleh* : @${descOwner.split('@')[0]}` : '*Desc diubah oleh* : -'}\n*Tanggal* : ${descTime ? `${formatDate(descTime * 1000)}` : '-'}\n\n*Kontak yang tersimpan*\n`
		           for ( let y of participants) {
		             par += `> @${y.id.split('@')[0]}\n*Admin* : ${y.isAdmin ? 'Ya' : 'Tidak'}\n`
		             jids.push(`${y.id.replace(/@c.us/g,'@s.whatsapp.net')}`)
		             }
		             jids.push(`${owner ? `${owner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
		             jids.push(`${descOwner ? `${descOwner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
		             alpha.sendMessage(from,par,text,{quoted:mek,contextInfo:{mentionedJid:jids}})
		             } catch {
		             reply(lang.erorLink())
		             }
		             await limitAdd(sender, limit)
					break   
			case 'return':
			case 'cek':
			case 'me':
			if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					return alpha.sendMessage(from, JSON.stringify(eval(args.join(' '))), text, { quoted: ftroli})
					break
			case 'bc':
			case 'broadcast':
			case 'bcimage':
					if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					if (args.length < 1) return reply('```TEXT?```')
					arg = args.join(' ');
					anu = await alpha.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
					const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek					
					bc = await alpha.downloadMediaMessage(encmedia)
					for (let _ of anu) {
					await alpha.sendMessage(_.jid, bc, image, {thumbnail: bc, quoted:fkontak ,caption: `「  *BROADCAST* 」\n\n${arg}`})
					}
					fakegroup(lang.successBc())
					} else {
					await ini_bc_pc_bang(arg)
					fakegroup(lang.successBc())
					}
					break
			case 'bcgc':
					case 'bcgroup':
					case 'bcgrup':
					case 'broadcastgrup':
		if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
                    if (args.length < 1) return reply(`Untuk broadcast ke semua group ketik:\n${prefix}bcgroup [isi chat]`)
                    var group = await alpha.groupMetadata(from)
			ini_bc = args.join(' ')
		var groupz = await alpha.chats.all().filter(v => v.jid.endsWith('g.us'))
                    reply(`\`\`\`[ ! ]\`\`\` Broadcast in progress! Total: ${groupz.length} groups`)
                    await ini_bc_gc_bang(ini_bc)
					reply(`\`\`\`[ ✓ ] Success broadcast : ${groupz.length} groups\`\`\``)
					break
			case 'buggc':
			if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					await alpha.toggleDisappearingMessages(from, 0)
					break
			case 'infogc':
					alpha.updatePresence(from, Presence.composing)
					if (!isGroup) return reply(lang.onlygc())
					try {
					ppimg = await alpha.getProfilePicture(from)
					} catch {
						ppimg = 'https://i.ibb.co/NthF8ds/IMG-20201223-WA0740.jpg'
					}
					let buf = await getBuffer(ppimg)
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += `*Nama grup :* ${groupName}\n*Deskripsi :* ${groupDesc}\n*Jumlah Admin :* ${groupAdmins.length}\n*Jumlah Member :* ${groupMembers.length}`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}]`
					}
					alpha.sendMessage(from, buf, image, {quoted: mek, caption: teks})
					await limitAdd(sender, limit)
					break   
			
                case 'memegenerator': case 'memegen':
									if (!isPremium && !mek.key.fromMe) return reply(mess.only.prem)
									if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* teks atas|teks bawah`)
									if (!q.includes('|')) return reply(`Kirim perintah *${prefix + command}* teks atas|teks bawah`)
									try {
										if (!isQuotedImage) return reply(`Reply Gambar!`)
										reply(lang.wait())
										var teks1 = q.split('|')[0] ? q.split('|')[0] : ''
										var teks2 = q.split('|')[1] ? q.split('|')[1] : ''
										var enmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
									   var mediiia = await alpha.downloadMediaMessage(enmedia)
										var njay = await uploadImages(mediiia)
										var resu = await getBuffer(`https://api.memegen.link/images/custom/${teks1}/${teks2}.png?background=${njay}`)
										alpha.sendMessage(from, resu, image, {caption:'.stikerin bang', quoted: mek})
										fs.unlinkSync(media)
										} catch (e) {
											console.log(e)
										}
										limitAdd(sender, limit)
									break
					 	case 'stickermeme': case 'memesticker': case 'memestick': case 'stickmeme': case 'stcmeme': case 'smeme':
						if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* zeusxzbot`)
									if (q.includes('|')) return reply(`Kirim perintah *${prefix + command}* zeusxzbot`)
									try {
										if (!isQuotedImage) return reply(`Reply Gambar!`)
										reply(lang.wait())
										var teks2 = args.join(' ')
										var enmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
										var mediia = await alpha.downloadMediaMessage(enmedia)
										var njay = await uploadImages(mediia)
										var resu = await getBuffer(`https://api.memegen.link/images/custom/-/${teks2}.png?background=${njay}`)
										alpha.sendMessage(from, resu, image, {caption:'.stiker', quoted: mek})
										fs.unlinkSync(media)
										} catch (e) {
											console.log(e)
										}
										limitAdd(sender, limit)
									break
             case 'demoteall':
			if (!isGroup) return reply(lang.onlygc())
					if (!isGroupAdmins) return reply(lang.onlygcAdmin())
					if (!isBotGroupAdmins) return reply(lang.botNotAdm())
			                members_id = []
					for (let mem of groupMembers) {
				   	members_id.push(mem.jid)
				  	}
			                alpha.groupDemoteAdmin(from, members_id)
			                break
			case 'promoteall':
			if (!isGroup) return reply(lang.onlygc())
					if (!isGroupAdmins) return reply(lang.onlygcAdmin())
					if (!isBotGroupAdmins) return reply(lang.botNotAdm())
                members_id = []
					for (let mem of groupMembers) {
				   	members_id.push(mem.jid)
				  	}
                alpha.groupMakeAdmin(from, members_id)
                break
              case 'promote':
					if (!isGroup) return reply(lang.onlygc())
					if (!isGroupAdmins) return reply(lang.onlygcAdmin())
					if (!isBotGroupAdmins) return reply(lang.botNotAdm())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
					mentionede = mek.message.extendedTextMessage.contextInfo.participant
alpha.groupMakeAdmin(from, [mentionede])
teks = `Members @${mentionede.split('@')[0]} succes promote`
alpha.sendMessage(from, teks, text, {quoted:mek, contextInfo:{mentionedJid:[mentionede]}})
break
				case 'demote':
					if (!isGroup) return reply(lang.onlygc())
					if (!isGroupAdmins) return reply(lang.onlygcAdmin())
					if (!isBotGroupAdmins) return reply(lang.botNotAdm())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
					mentionede = mek.message.extendedTextMessage.contextInfo.participant
alpha.groupDemoteAdmin(from, [mentionede])
teks = `Members @${mentionede.split('@')[0]} succes demote`
alpha.sendMessage(from, teks, text, {quoted:mek, contextInfo:{mentionedJid:[mentionede]}})
break
                
                /*
                ]----------------------------------------------------------------> API ZEKS <----------------------------------------------------------------[
                */
case 'captain_as':case 'smoke':case 'tiktok2': case 'arcade':case 'battlefield':case 'pubg':
if (args.length < 1) return reply(lang.tahta(prefix, command))
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
let photooxy = await getBuffer(`${alphaapi}/photooxy/${command}?apikey=${alphakey}&text=${m1}&text2=${m2}`)
sendButImage(from,  `D O N E✅` , `© ${ownername}`,photooxy, [{"buttonId": `owner`,"buttonText": {"displayText": "👨‍💻 Owner"},"type": "RESPONSE"},{"buttonId": `donasi`,"buttonText": {"displayText": "💰 Donate"},"type": "RESPONSE"}], {thumbnail: Buffer.alloc(0), quoted: mek})
await  limitAdd(sender, limit)
break                         
case 'shadow':case 'cname':case 'romantic':case 'burnpaper':case 'funnycup':case 'love':case 'undergrass':          case 'heart':case 'coffeecup':case 'wood':          case 'flower':         case 'wooden': case '3dsummer':case 'wolf_metal':case '3dnature':case 'underwater':          case 'goldenrose':case 'vector':case 'typography':case 'typography2': case 'underfall':  case 'smokyneon': case 'rainbow': case 'graffiti':case 'camouflage':case '3dglowing':          case 'vintage':case 'honey': case 'whitecube':case 'avatar': case 'glowrainbow':case 'nightsky':case 'fur':case 'flaming': case 'crisp':case 'embroidery':case 'bcake':          case '3dligth':case 'metallic': case 'striking':case 'watermelon':         case 'butterfly':case 'harry':case 'glowneon':case 'coffecup2':          case 'luxury': case 'cemetery':case 'woodblock':case 'sweet':case 'simple':case 'bevel':case 'underflower':         case 'underflower2':
if (args.length < 1) return reply(lang.noteks(prefix, command))
let photooxy2 = await getBuffer(`${alphaapi}/photooxy/${command}?apikey=${alphakey}&text=${q}`)
sendButImage(from,  `D O N E✅` , `© ${ownername}`,photooxy2, [{"buttonId": `owner`,"buttonText": {"displayText": "👨‍💻 Owner"},"type": "RESPONSE"},{"buttonId": `donasi`,"buttonText": {"displayText": "💰 Donate"},"type": "RESPONSE"}], {thumbnail: Buffer.alloc(0), quoted: mek})
await  limitAdd(sender, limit)
break         
case 'halloween2':case 'horror':case 'game8bit':case 'layered':case 'glitch2':case 'coolg':case 'coolwg':case 'realistic':case 'space3d':case 'gtiktok':case 'stone':case 'marvel':case 'marvel2':case 'pornhub':case 'avengers':case 'metalr':case 'metalg':case 'metalg2':case 'halloween2':case 'lion':case 'wolf_bw':case 'wolf_g':case 'ninja':case '3dsteel':case 'horror2':case 'lava':case 'bagel':
if (args.length < 1) return reply(lang.tahta(prefix, command))
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
let textpro = await getBuffer(`${alphaapi}/textpro/${command}?apikey=${alphakey}&text=${m1}&text2=${m2}`)
sendButImage(from,  `D O N E✅` , `© ${ownername}`,textpro, [{"buttonId": `owner`,"buttonText": {"displayText": "👨‍💻 Owner"},"type": "RESPONSE"},{"buttonId": `donasi`,"buttonText": {"displayText": "💰 Donate"},"type": "RESPONSE"}], {thumbnail: Buffer.alloc(0), quoted: mek})
await  limitAdd(sender, limit)
break 
 case 'blackpink':case 'rainbow2':case 'water_pipe':case 'halloween':case 'sketch':case 'sircuit':case 'discovery':case 'metallic2':case 'fiction':case 'demon':case 'transformer':case 'berry':case 'thunder':case 'magma':case '3dstone':case 'neon':case 'glitch':case 'harry_potter':case 'embossed':case 'broken':case 'papercut':case 'gradient':case 'glossy':case 'watercolor':case 'multicolor':case 'neon_devil':case 'underwater':case 'bear':case 'wonderfulg':case 'christmas':case 'neon_light':case 'snow':case 'cloudsky':case 'luxury2':case 'gradient2':case 'summer':case 'writing':case 'engraved':case 'summery':case '3dglue':case 'metaldark':case 'neonlight':case 'oscar':case 'minion':case 'holographic':case 'purple':case 'glossyb':case 'deluxe2':case 'glossyc':case 'fabric':case 'neonc':case 'newyear':case 'newyear2':case 'metals':case 'xmas':case 'blood':case 'darkg':case 'joker':case 'wicker':case 'natural':case 'firework':case 'skeleton':case 'balloon':case 'balloon2':case 'balloon3':case 'balloon4':case 'balloon5':case 'balloon6':case 'balloon7':case 'steel':case 'gloss':case 'denim':case 'decorate':case 'decorate2':case 'peridot':case 'rock':case 'glass':case 'glass2':case 'glass3':case 'glass4':case 'glass5':case 'glass6':case 'glass7':case 'glass8':case 'captain_as2':case 'robot':case 'equalizer':case 'toxic':case 'sparkling':case 'sparkling2':case 'sparkling3':case 'sparkling4':case 'sparkling5':case 'sparkling6':case 'sparkling7':case 'decorative':case 'chocolate':case 'strawberry':case 'koifish':case 'bread':case 'matrix':case 'blood2':case 'neonligth2':case 'thunder2':case '3dbox':case 'neon2':case 'roadw':case 'bokeh':case 'gneon':case 'advanced':case 'dropwater':case 'wall':case 'chrismast':case 'honey':case 'drug':case 'marble':case 'marble2':case 'ice':case 'juice':case 'rusty':case 'abstra':case 'biscuit':case 'wood':case 'scifi':case 'metalr':case 'purpleg':case 'shiny': case 'jewelry':case 'jewelry2':case 'jewelry3':case 'jewelry4':case 'jewelry5':case 'jewelry6':case 'jewelry7':case 'jewelry8':case 'metalh':case 'golden':case 'glitter':case 'glitter2':case 'glitter3':case 'glitter4':case 'glitter5':case 'glitter6':case 'glitter7':case 'metale':case 'carbon':case 'candy':case 'metalb':case 'gemb':case '3dchrome':case 'metalb2':case 'metalg':
if (args.length < 1) return reply(lang.noteks(prefix, command))
let textpro2 = await getBuffer(`${alphaapi}/textpro/${command}?apikey=${alphakey}&text=${q}`)
sendButImage(from,  `D O N E✅` , `© ${ownername}`,textpro2, [{"buttonId": `owner`,"buttonText": {"displayText": "👨‍💻 Owner"},"type": "RESPONSE"},{"buttonId": `donasi`,"buttonText": {"displayText": "💰 Donate"},"type": "RESPONSE"}], {thumbnail: Buffer.alloc(0), quoted: mek})
await  limitAdd(sender, limit)
break  
case 'tahta':  
                   if (args.length < 1) return reply(lang.noteks(prefix, command))
                   F = q
                   reply(lang.wait())
                   tahta = await getBuffer(`${ApiZeks}/api/hartatahta?text=${F}&apikey=${zeksApikey}`)
                   tahtah = `${lang.success()}\n\nPlease Subscribe https://youtu.be/w4iQ4rwA0mo`
                   sendImageMaker(tahta, tahtah, sender)
                  await  limitAdd(sender, limit)
                  break
       case 'ytgold':  
                   if (args.length < 1) return reply(lang.noteks(prefix, command))
                   F = q
                   reply(lang.wait())
                   ytgold = await getBuffer(`${ApiZeks}/api/gplaybutton?text=${F}&apikey=${zeksApikey}`)
                   ytgoldp = `${lang.success()}\n\nPlease Subscribe https://youtu.be/w4iQ4rwA0mo`
                   sendImageMaker(ytgold, ytgoldp, sender)
                   await  limitAdd(sender, limit)
                   break  
       case 'ytsilver':  
                   if (args.length < 1) return reply(lang.noteks(prefix, command))
                   F = q
                   reply(lang.wait())
                   ytsilver = await getBuffer(`${ApiZeks}/api/splaybutton?text=${F}&apikey=${zeksApikey}`)
                   ytsilverp = `${lang.success()}\n\nPlease Subscribe https://youtu.be/w4iQ4rwA0mo`
                   sendImageMaker(ytsilver, ytsilverp, sender)
                   await  limitAdd(sender, limit)
                   break              
     case 'nulis':
									reply(`*Example*\n${prefix}nuliskiri\n${prefix}nuliskanan\n${prefix}foliokiri\n${prefix}foliokanan`)
									break
						case 'nuliskiri':{
									if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
									if (args.length < 1) return reply(`Kirim perintah *${prefix}nuliskiri* teks`)
									reply(mess.wait)
									const tulisan = q
									const splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
									const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
									spawn('convert', [
									'./media/nulis/images/buku/sebelumkiri.jpg',
									'-font',
									'./media/nulis/font/Indie-Flower.ttf',
									'-size',
									'960x1280',
									'-pointsize',
									'22',
									'-interline-spacing',
									'2',
									'-annotate',
									'+140+153',
									fixHeight,
									'./media/nulis/images/buku/setelahkiri.jpg'
									])
									.on('error', () => reply(lang.tryAgain()))
									.on('exit', () => {
										alpha.sendMessage(from, fs.readFileSync('./media/nulis/images/buku/setelahkiri.jpg'), image, {thumbnail:Buffer.alloc(0),quoted: mek, caption: `Jangan Malas`})
										limitAdd(sender, limit)
										})
									}
									break
						case 'nuliskanan':{
									if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
									if (args.length < 1) return reply(`Kirim perintah *${prefix}nuliskanan* teks`)
									reply(mess.wait)
									const tulisan = q
									const splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
									const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
									spawn('convert', [
									'./media/nulis/images/buku/sebelumkanan.jpg',
									'-font',
									'./media/nulis/font/Indie-Flower.ttf',
									'-size',
									'960x1280',
									'-pointsize',
									'23',
									'-interline-spacing',
									'2',
									'-annotate',
									'+128+129',
									fixHeight,
									'./media/nulis/images/buku/setelahkanan.jpg'
									])
									.on('error', () => reply(lang.tryAgain()))
									.on('exit', () => {
										alpha.sendMessage(from, fs.readFileSync('./media/nulis/images/buku/setelahkanan.jpg'), image, {thumbnail:Buffer.alloc(0),quoted: mek, caption: `Jangan Malas`})
										limitAdd(sender, limit)
										})
									}
									break
						case 'foliokiri':{
									if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
									if (args.length < 1) return reply(`Kirim perintah *${prefix}foliokiri* teks`)
									reply(mess.wait)
									const tulisan = q
									const splitText = tulisan.replace(/(\S+\s*){1,13}/g, '$&\n')
									const fixHeight = splitText.split('\n').slice(0, 38).join('\n')
									spawn('convert', [
									'./media/nulis/images/folio/sebelumkiri.jpg',
									'-font',
									'./media/nulis/font/Indie-Flower.ttf',
									'-size',
									'1720x1280',
									'-pointsize',
									'23',
									'-interline-spacing',
									'4',
									'-annotate',
									'+48+185',
									fixHeight,
									'./media/nulis/images/folio/setelahkiri.jpg'
									])
									.on('error', () => reply(lang.tryAgain()))
									.on('exit', () => {
										alpha.sendMessage(from, fs.readFileSync('./media/nulis/images/folio/setelahkiri.jpg'), image, {thumbnail:Buffer.alloc(0),quoted: mek, caption: `Jangan Malas`})
										limitAdd(sender, limit)
										})
									}
									break
						case 'foliokanan':{
									if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
									if (args.length < 1) return reply(`Kirim perintah *${prefix}foliokanan* teks`)
									reply(mess.wait)
									const tulisan = q
									const splitText = tulisan.replace(/(\S+\s*){1,13}/g, '$&\n')
									const fixHeight = splitText.split('\n').slice(0, 38).join('\n')
									spawn('convert', [
									'./media/nulis/images/folio/sebelumkanan.jpg',
									'-font',
									'./media/nulis/font/Indie-Flower.ttf',
									'-size',
									'960x1280',
									'-pointsize',
									'23',
									'-interline-spacing',
									'3',
									'-annotate',
									'+89+190',
									fixHeight,
									'./media/nulis/images/folio/setelahkanan.jpg'
									])
									.on('error', () => reply(mess.error))
									.on('exit', () => {
										alpha.sendMessage(from, fs.readFileSync('./media/nulis/images/folio/setelahkanan.jpg'), image, {thumbnail:Buffer.alloc(0),quoted: mek, caption: `Jangan Malas`})
										limitAdd(sender, limit)
									})
									}
									break      
       case 'ttp':  
                    if (args.length < 1) return reply(lang.noteks(prefix, command))
                    ttp = args.join(' ')
                    anu1 = await getBuffer(`https://api.xteam.xyz/ttp?file&text=${ttp}`)
                    alpha.sendMessage(from, anu1, image, {quoted: mek, caption : '.stikerin'})
					.catch(e =>{
					reply(lang.tryAgain())})
					 await limitAdd(sender, limit)
					break   
         case 'attp':  
                    if (args.length < 1) return reply(lang.noteks(prefix, command))
                    hhhh = q
                    anu1 = await getBuffer(`https://api.xteam.xyz/attp?file&text=${hhhh}`)
                    alpha.sendMessage(from, anu1, sticker, {quoted: mek})
					.catch(e =>{
					reply(lang.tryAgain())})
                    await limitAdd(sender, limit)
					break   
             case 'ktpmaker': case 'ktp':
                    if (args.length == 0) return reply(`Usage: ${prefix + command} nik|provinsi|kabupaten|nama|tempat, tanggal lahir|jenis kelamin|jalan|rt/rw|kelurahan|kecamatan|agama|status nikah|pekerjaan|warga negara|berlaku sampai|url_image\n\nExample: ${prefix + command} 456127893132123|bumipertiwi|fatamorgana|LoL Human|mars, 99-99-9999|belum ditemukan|jl wardoyo|999/999|turese|imtuni|alhamdulillah islam|jomblo kack|mikirin dia|indo ori no kw|hari kiamat|https://i.ibb.co/Xb2pZ88/test.jpg`)
                    get_args = args.join(" ").split("|")
                    nik = get_args[0]
                    prov = get_args[1]
                    kabu = get_args[2]
                    name = get_args[3]
                    ttl = get_args[4]
                    jk = get_args[5]
                    jl = get_args[6]
                    rtrw = get_args[7]
                    lurah = get_args[8]
                    camat = get_args[9]
                    agama = get_args[10]
                    nikah = get_args[11]
                    kerja = get_args[12]
                    warga = get_args[13]
                    until = get_args[14]
                    img = get_args[15]
                    reply('waitt')
                    bikin = (`https://ferdiz-afk.my.id//api/maker/ktp?nik=${nik}&nama=${name}&ttl=${ttl}&jk=${jk}&gdarah=-&almt=${jl}&rt-rw=${rtrw}&kel=${lurah}&kcmtn=${camat}&agma=${agama}&status=${nikah}&kerja=${kerja}&negara=${warga}&berlaku=${until}&prov=${prov}&kab=${kabu}&picurl=${img}`)
                      console.log(bikin)
                    imge = await getBuffer(bikin)
                    await alpha.sendMessage(from, imge, image, { thumbnail: Buffer.alloc(0), quoted: mek });
                    await limitAdd(sender, limit)
					break 
        case 'nulis2':
if (args.length < 1) return reply(`*Usage*: ${prefix + command} nama&kelas&nomor&kata\n*Example*: ${prefix + command} udin&20&17&blablabla`)
var bodi = args.join(" ")
var nama = bodi.split("&")[0];
var kelas = bodi.split("&")[1];
var no = bodi.split("&")[2];
var aksarane = bodi.split("&")[3];
reply('membuat bos...')
                 rakz = await getBuffer(`https://ferdiz-afk.my.id//api/tulis?nama=${nama}&no=${no}&kelas=${kelas}&text=${aksarane}`)
                 alpha.sendMessage(from, rakz, image, { quoted: mek ,thumbnail: Buffer.alloc(0) });
await limitAdd(sender, limit)
					break   
              /*
              ]----------------------------------------------------------------> STORAGE <----------------------------------------------------------------[
              */
	        case 'addstik':
	if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					if (!isQuotedSticker) return fakestatus('Reply stiker')
					nm = body.slice(9)
					if (!nm) return reply('Nama sticker nya apa?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await alpha.downloadMediaMessage(boij)
					setiker.push(`${nm}`)
					fs.writeFileSync(`./media/sticker/${nm}.webp`, delb)
					fs.writeFileSync('./temp/stik.json', JSON.stringify(setiker))
					fakegroup(`Sukses Menambahkan Sticker\nCek dengan cara ${prefix}liststik`)
					break
	      case 'liststik':
	      case 'liststiker':
	      case 'liststc':
					teks = '*Sticker list :*\n\n'
					for (let awokwkwk of setiker) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${setiker.length}*\n\n_Untuk mengambil sticker silahkan reply pesan ini dengan caption nama sticker_`
					alpha.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": setiker } })
					break
					
			case 'addimg':
			if(!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					if (!isQuotedImage) return fakegroup('```Reply imagenya```')
					clara = body.slice(8)
					if (!clara) return fakegroup('```Nama imagenya apa```')
					keya = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await alpha.downloadMediaMessage(keya)
					imagenye.push(`${svst}`)
					fs.writeFileSync(`./media/foto/${svst}.jpg`, delb)
					fs.writeFileSync('./temp/image.json', JSON.stringify(imagenye))
					fakegroup(`Sukses Menambahkan image\nCek dengan cara ${prefix}listimg`)
					break
			case 'listimg':
					teks = '*Image list :*\n\n'
					for (let awokwkwk of imagenye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${imagenye.length}*\n\n_Untuk mengambil sticker silahkan reply pesan ini dengan caption nama foto/image_`
					fakegroup(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": setiker } })
					break
			case 'addvid':
			if(!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					if (!isQuotedVideo) return fakegroup('```Reply vidionya```')
					svst = body.slice(8)
					if (!svst) return fakegroup('```Nama vidionya apa```')
					keya = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await alpha.downloadMediaMessage(keya)
					imagenye.push(`${svst}`)
					fs.writeFileSync(`./media/video/${svst}.mp4`, delb)
					fs.writeFileSync('./temp/video.json', JSON.stringify(imagenye))
					fakegroup(`Sukses Menambahkan video\nCek dengan cara ${prefix}listvideo`)
					break
	        case 'listvid':
					teks = '*List Video :*\n\n'
					for (let awokwkwk of videonye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${videonye.length}* \n\n_Untuk mengambil sticker silahkan reply pesan ini dengan caption nama video_`
					alpha.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": imagenye } })
					break
			
			case 'addvn':
			if(!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					if (!isQuotedAudio) return fakegroup('```Reply vnnya```')
					svst = body.slice(7)
					if (!svst) return reply('```Nama audionya apa```')
					keya = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await alpha.downloadMediaMessage(keya)
					audionye.push(`${svst}`)
					fs.writeFileSync(`./media/audio/${svst}.mp3`, delb)
					fs.writeFileSync('./temp/vn.json', JSON.stringify(audionye))
					fakegroup( `Sukses Menambahkan Audio\nCek dengan cara ${prefix}listvn`)
					break
           
			case 'listvn':
					teks = '*List Vn:*\n\n'
					for (let awokwkwk of audionye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${audionye.length}*\n\n_Untuk mengambil sticker silahkan reply pesan ini dengan caption nama audio_`
					alpha.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": audionye } })
					break
			case 'addrespon':
			if(!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					if(!q) return reply(`ketik perintah ${prefix + command} filter|jawab!`)
					fltr = q.split('|')[0]
					jwb = q.split('|')[1]
					if(!jwb) return reply('Format salah!')
					for(let i of filter){
					  if(fltr.includes(i.Filter)) return reply(`Filter ${fltr} sudah ada didatabase`)
					}
					const chat = {
					Filter : fltr,
					Jawaban : jwb
					}
					filter.push(chat)
					fs.writeFileSync('./src/filter.json', JSON.stringify(filter))
					reply(`Sukses menambahkan filter ${fltr}\nCek dengan cara ${prefix}listchatrespon`)
					break
					
			case 'delrespon':
			if(!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					for(let i=0; i<filter.length; i++){
					if(q.includes(filter[i].Filter)){
					   obj = {
					      txt: filter[i].text,
					      balesan: filter[i].balesan
					   }
					   let del = filter.indexOf(filter[i])
					   filter.splice(del, 1)
					   fs.writeFileSync('./src/filter.json', JSON.stringify(filter))
					   reply(`Sukses Menghapus Respon ${q}`)
					}
					}
					break
case 'listrespon':
   teks = 'List Respon:\n'
   for (let i of filter) {
   teks += `• Filter : ${i.Filter}\n• Jawab : ${i.Jawaban}\n---------------------------\n`
   }
   teks += `Total : ${filter.length}`
   alpha.sendMessage(from, teks.trim(), extendedText, {quoted: mek})
   break
		case 'caripesan2':
            if(!q)return reply('Masukkan pesan yg mau di cari')
            let v = await alpha.searchMessages(q,from,10,1)
            let s = v.messages
            let el = s.filter(v => v.message)
            el.shift()
            try {
            if(el[0].message.conversation == undefined) return
            reply(`Ditemukan ${el.length} pesan`)
            await sleep(3000)
            for(let i = 0; i < el.length; i++) {
            await alpha.sendMessage(from,'Nih pesannya',text,{quoted:el[i]})
            }
            } catch(e){
            reply('Pesan tidak ditemukan!')
            }           
            await limitAdd(sender, limit)
					break   
     case 'searchmsg':  
             if (args.length < 1) return reply(`Pesan Yang Mau Dicari Apaan?\nContoh : ${command} halo|10`)
             teks = arg
             if (teks.includes("|")) { 
             try {
             var ve = teks.split("|")[0]
             var za = teks.split("|")[1]
             sampai = `${za}`
             if (isNaN(sampai)) return reply('Harus berupa Angka!')
             batas = parseInt(sampai) + 1
             if (batas > 20) return reply('Maks 20!')
             reply(lang.wait())
             cok = await nino.searchMessages(`${ve}`, from, batas,1) 
             if (cok.messages.length < 2) return reply('Tidak Ditemukan Pesan') 
             if (cok.messages.length < parseInt(batas)) reply(`Hanya Ditemukan ${cok.messages.length - 1} Pesan`)
             for (i=1;i < cok.messages.length;i++) {
             if (cok.messages[i].message) {
             alpha.sendMessage(from, `Ditemukan!`, text, {sendEphemeral: true, quoted: cok.messages[i]}) 
			}
			}
             } catch (e) {
             return reply(String(e))}
             } else {
             reply(`Format salah, format yang benar : ${command} halo|10`)}
             await limitAdd(sender, limit)
					break   
    case 'hash':
                try {
                if (!isQuotedSticker) return reply('Reply Sticker!')
                const encmeds = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                const mediastick = await alpha.downloadMediaMessage(encmeds)
                var crypto = require('crypto')
                hash = crypto.createHash('sha256').update(mediastick).digest('base64');
                console.log(hash)
                reply (hash)
                } catch {
                	reply(`reply stiker dengan command ${prefix}hash`)
	}
            await limitAdd(sender, limit)
					break   
    case 'delvote':
            if(!isGroupAdmins && !mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlygcAdmin())
            if(isVote) return reply(lang.noSesiVote())
            delVote(from)
            reply(lang.suksesDelVot())
            break
    case 'voting':
            if(!isGroupAdmins && !mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlygcAdmin())
            if(!isGroup) return reply(lang.onlygc())
            if (isVote) return reply(lang.adaVoting())
            if(!q) return reply(lang.caraVoting())
            if (mek.message.extendedTextMessage.contextInfo.mentionedJid.length > 0 || mek.message.extendedTextMessage.contextInfo == null) {
            let id = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
            split = args.join(' ').replace('@', '').split('|')
            if(!Number(split[2])) return reply(lang.caraVot(prefix, command))
            await mentions('Vote ' +'@'+ id.split('@')[0]+' Di Mulai' +'\n\n' + `vote = ✅\ndevote = ❌\n\nAlasan: ${split[1]}`,[id],true)
            addVote(from,split[1],split[0],split[2],reply)
            }
            await limitAdd(sender, limit)
					break   
		case 'stopjadibot':
			    if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
			    stopjadibot(reply)
			    break
		case 'listbot':
			    let tekss = '「 *LIST JADIBOT* 」\n'
			    for(let i of listjadibot) {
			    tekss += `*Number* : ${i.jid.split('@')[0]}
*Name* : ${i.name}
*Device* : ${i.phone.device_manufacturer}
*Model* : ${i.phone.device_model}\n\n`
			    }
			    reply(tekss)
		case 'addcmd': 
       case 'setcmd':
              if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
              if (isQuotedSticker) {
              if (!q) return reply(`Penggunaan : ${command} cmdnya dan tag stickernya`)
              var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
              addCmd(kodenya, q)
              reply(lang.success())
              } else {
              reply('Reply stickenya')
}
              break
       case 'delcmd':
              if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
              if (!isQuotedSticker) return reply(`Penggunaan : ${command} tagsticker`)
              var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
            scommand.splice(getCommandPosition(kodenya), 1)
              fs.writeFileSync('./lib/scommand.json', JSON.stringify(scommand))
              reply(lang.success())
              break
       case 'listcmd':
              let teksnyee = `「 *LIST STICKER CMD* 」`
              let cemde = [];
              for (let i of scommand) {
              cemde.push(i.id)
              teksnyee += `\n\n📍 *ID :* ${i.id}\n📍 *Cmd* : ${i.chats}`
}
              mentions(teksnyee, cemde, true)
              break
      case 'delttt':
case 'delttc':
               if (!isGroup) return reply(lang.onlygc())
              // if (!isTTT) return reply('Tidak Ada Permainan Di Grub Ini')
               delete tictactoe[senderNumber]
fs.writeFileSync("./src/tictactoe.json", JSON.stringify(tictactoe))                        
if (fs.existsSync('./temp/' + from + '.json')) {
fs.unlinkSync('./temp/' + from + '.json')
reply(lang.suksesDelTtt())
}
               break
        case 'cekhistory':
reply(` S T A T U S  T I C T A C T O E ${enter}•> Win : ${checkWin(sender)}${enter}•> Lose : ${checkLose(sender)}`)
break
case 'delsesi':
if (!isGroupAdmins && !mek.key.fromMe && !isOwner) return reply('Hanya bisa didelete oleh admin group dan owner bot')
if (args[0] === 'ttt') {
delete tictactoe[senderNumber]
fs.writeFileSync("./src/tictactoe.json", JSON.stringify(tictactoe))                        
if (fs.existsSync('./temp/' + from + '.json')) {
fs.unlinkSync('./temp/' + from + '.json')
reply(lang.noSesiTtt())
}
} else if (args[0] === 'vote') {
if(isVote) return reply(lang.noSesiVote())
            delVote(from)
            reply(lang.sukseDelVot())
} else {
	reply(`${prefix + command}delsesi ttt atau vote`)
}
break

case 'tictactoe':
case 'ttt':
if (!isGroup)return reply('*Khusus group*')
if (mek.message.extendedTextMessage.contextInfo.mentionedJid > 1) return reply('Hanya bisa dengan 1 orang')
if (!mek.message.extendedTextMessage.contextInfo.mentionedJid[0]) return
if (fs.existsSync(`./temp/${from}.json`)) return reply(`Sedang Ada Sesi, tidak dapat dijalankan secara bersamaan${enter}Ketik *${prefix}delsesi ttt*, untuk menghapus sesi`)
if (args.length === 0) return reply(`Tag Lawan Yang Ingin Diajak Bermain Game`)
tttSkuy = setTtt(`${from}`)
tttSkuy.status = false
tttSkuy.Z = sender.replace("@s.whatsapp.net", "")
tttSkuy.Y = args[0].replace("@", "");
fs.writeFileSync(`./temp/${from}.json`, JSON.stringify(tttSkuy, null, 2))
starGame = `「 *MEMULAI GAME TICTACTOE* 」${enter}${enter}•@${sender.replace("@s.whatsapp.net", "")} Menantang Bermain Tictactoe ${enter}[ ${args[0]} ] Ketik Y/N untuk menerima atau menolak permainan${enter}${enter}`
alpha.sendMessage(from, starGame, text, {quoted: mek, contextInfo: { mentionedJid: [sender, args[0].replace("@", "") + "@s.whatsapp.net"],}})
await limitAdd(sender, limit)
					break   
             case 'size':
if (args.length < 1) return reply('Masukan angkanya')
filsize = args[0]
costick = await alpha.prepareMessageFromContent(from,{
"stickerMessage": {
"url": m.quoted.url,
"fileSha256": m.quoted.fileSha256.toString('base64'),
"fileEncSha256": m.quoted.fileEncSha256.toString('base64'),
"mediaKey": m.quoted.mediaKey.toString('base64'),
"mimetype": m.quoted.mimetype,
"height": m.quoted.height,
"width": m.quoted.width,
"directPath": m.quoted.directPath,
"fileLength": filsize,
"mediaKeyTimestamp": m.quoted.mediaKeyTimestamp.low,
"isAnimated": m.quoted.isAnimated
}
}, {quoted:mek})
alpha.relayWAMessage(costick)
await limitAdd(sender, limit)
					break   
case "colongsw": 
        if (!mek.key.fromMe) return
        if ((isMedia && !mek.message.videoMessage) || isQuotedImage) {
          ger = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          owgi = await alpha.downloadAndSaveMediaMessage(ger);
          alpha.sendMessage(sender, fs.readFileSync(owgi), "imageMessage", {
            caption: q,
          });
          reply("Sukses");
          fs.unlinkSync(owgi);
        } else if ((isMedia && !mek.message.videoMessage) || isQuotedVideo) {
          ger = isQuotedVideo
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          owgi = await alpha.downloadAndSaveMediaMessage(ger);
          alpha.sendMessage(sender, fs.readFileSync(owgi), "videoMessage", {
            caption: q,
          });
          reply("Sukses");
          fs.unlinkSync(owgi);
        } else {
          reply("Reply sw foto / video yg mau dicolong")
        }
        break
       case "listonline": 
        let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat;
        try {
          let online = [
            ...Object.keys(alpha.chats.get(id).presences),
            alpha.user.jid,
          ];
          alpha.reply(
            m.chat,
            "「 L I S T   O N L I N E  」\n" +
              online.map((v) => "┃➥ @" + v.replace(/@.+/, "")).join`\n` +
              "\n",
            m,
            {
              contextInfo: { mentionedJid: online },
            }
          );
        } catch (e) {
          m.reply("");
        }
        break;
        case 'getname':
 try {
getnem = alpha.getName(mek.quoted.sender)
reply(`${getnem}`)
} catch {
	reply ('Reply pesan @user')
	}
await limitAdd(sender, limit)
					break   
case 'linkgrup':
case 'linkgroup':
				case 'linkgc':
				    if (!isGroup) return reply(lang.onlygc())
				    if (!isBotGroupAdmins) return reply('Only admin')
				    linkgc = await alpha.groupInviteCode (from)
				    yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
				    alpha.sendMessage(from, yeh, text, {quoted: mek})
			        await limitAdd(sender, limit)
					break   
		case 'unpin':
                if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
                alpha.modifyChat(from, ChatModification.unpin)
                reply('*succes unpin this chat*')
                console.log('unpin chat = ' + from)
                break
        case 'pin':
                if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
                alpha.modifyChat(from, ChatModification.pin)
                reply('*succes pin this chat*')
                console.log('pinned chat = ' + from)
                break
         case 'unreadall':
                if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
                var chats = await alpha.chats.all()
                chats.map( async ({ jid }) => {
                await alpha.chatRead(jid, 'unread')
                    })
		    reply(`\`\`\`Successfully unread ${chats.length} chats !\`\`\``)
		    console.log(chats.length)
	        break
	        
            case 'readall':
                if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
                var chats = await alpha.chats.all()
                chats.map( async ({ jid }) => {
                await alpha.chatRead(jid)
                })
		reply(`\`\`\`Successfully read ${chats.length} chats !\`\`\``)
	      console.log(chats.length)
		break
		case 'unarchiveall':
                if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
                reply('*succes unarchive all chat*')
                console.log('succes unarchive chat = ' + from)
                anu = await alpha.chats.all()
                for (let _ of anu) {
                alpha.modifyChat(_.jid, ChatModification.unarchive)
                }
                break
                
            case 'archive':
                if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
                reply(lang.wait())
                console.log('succes archive chat = ' + from)
                await sleep(3000)
                alpha.modifyChat(from, ChatModification.archive)
                break
           case 'delthischat':
                if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
                console.log('succes delete chat = ' + from)
                await sleep(4000)
                await alpha.modifyChat(from, ChatModification.delete)
                reply('*succes delete this chat*')
                break
            case 'ssweb':
            case 'ss':
                if (args.length < 1) return reply('Urlnya mana om')
					teks = q
					anu = await fetchJson(`https://shot.screenshotapi.net/screenshot?&url=${teks}`)
					buff = await getBuffer(anu.screenshot)
					alpha.sendMessage(from, buff, image, {quoted: mek, caption : teks})
					await limitAdd(sender, limit)
					break   
			case 'artinama':
                if (args.length < 1) return reply('Apa yang mau dicari um?')
                teks = q
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/arti?nama=${teks}`, {method: 'get'})
					reply(`Arti Nama ${teks}\n\n`+anu.result)
				await limitAdd(sender, limit)
					break   
			case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
ter = command[1].toLowerCase()
  tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
 reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
 await limitAdd(sender, limit)
					break   
 case 'getexif':
try {
    if (!m.quoted) return reply('Tag stikernya!')
    cok = { message: { [m.quoted.mtype]: m.quoted } }
    if (/sticker/.test(m.quoted.mtype)) {
        let img = new webp.Image()
        await img.loadBuffer(await m.quoted.download())
        reply(util.format(JSON.parse(img.exif.slice(22).toString())))
    }
    } catch (e) {
    	throw e
    reply(String(e))
    }
    await limitAdd(sender, limit)
					break   
		case 'afk':
			if (!isGroup) return reply(lang.onlygc())
            if (isAfkOn) return 
                reason = q ? q : 'Nothing'
                off.addAfkUser(sender, Date.now(), reason, _off)
               papa =  `*${pushname}* Sekarang sedang Afk\n*Reason :* ${reason}\n`
                alpha.sendMessage(from,papa, text,{quoted : mek})
            break
        case 'autoread':
if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
if (args.length < 1) return reply(`Example:\n${prefix}autoread gc on`)
if (args[0] === "gc") {
if (args.length < 2) return reply(`Example:\n${prefix}autoread gc on`)
if (args[1] === "on") {
if (readGc === true) return reply(lang.anjawaUdhOn(command))
readGc = true
reply(`Succes mengaktifkan autoread group`)
} else if (args[1] === "off") {
if (readGc === false) return
readGc = false
reply(`Succes mematikan autoread group`)
} else {
reply(`Pilih on atau off`)
}
} else if (args[0] === "pc") {
if (args.length < 2) return reply(`Example:\n${prefix}autoread pc on`)
if (args[1] === "on") {
if (readPc === true) return reply(lang.anjawaUdhOn(command))
readPc = true
reply(`Succes mengaktifkan autoread pc`)
} else if (args[1] === "off") {
if (readPc === false) return
readPc = false
reply(`Succes mematikan autoread pc`)
} else {
reply(`Pilih on atau off`)
}
} else {
reply(`*List Auto Read*\n•> gc\n•> pc`)
}
break
case 'nsfw':
					    if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
						if (!isGroup) return reply(lang.onlygc()) 
						if (args.length < 1) return reply(lang.anjawaUdhOon(command))
						if (args[0] === 'on') {
						if (isNsfw) return reply(lang.anjawaUdhOn(command))
						_nsfw.push(from)
						fs.writeFileSync('./src/nsfw.json', JSON.stringify(_nsfw))
						reply(lang.anjawaOn(command))
						} else if (args[0] === 'off') {
						_nsfw.splice(from, 1)
						fs.writeFileSync('./src/nsfw.json', JSON.stringify(_nsfw))
						reply(lang.anjawaOff(command))
						} else if (!q) {
          sendButMessage(from, `MODE NSFW`, `Choose one`, [
            {
              buttonId: 'nsfw on',
              buttonText: {
                displayText: `On`,
              },
              type: 1,
            },
            {
              buttonId: 'nsfw off',
              buttonText: {
                displayText: `Off`,
              },
              type: 1,
            },
          ]);
        }
        break;
case 'antibug':
          if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
          if (args[0] === 'on') {
          if (bugc === true) return reply(lang.anjawaUdhOn(command))
          bugc = true
          antitrol = true
          reply(lang.anjawaOn(command))
          } else if (args[0] === 'off') {
          if (bugc === false) return
          bugc = false
          antitrol = false
          reply(lang.anjawaOff(command))
          } else if (!q) {
          sendButMessage(from, `MODE ANTIBUG`, `Choose one`, [
            {
              buttonId: 'antibug on',
              buttonText: {
                displayText: `On`,
              },
              type: 1,
            },
            {
              buttonId: 'antibug off',
              buttonText: {
                displayText: `Off`,
              },
              type: 1,
            },
          ]);
        }
        break;
          case 'antidelete':
if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
if (args[0] === "on") {
if (antidel === true) return reply(lang.anjawaUdhOn(command))
antidel = true
reply(lang.anjawaOn(command))
} else if (args[0] === "off") {
if (antidel === false) return
antidel = false
reply(lang.anjawaOff(command))
} else if (!q) {
          sendButMessage(from, `MODE ANTI DELETE`, `Choose one`, [
            {
              buttonId: 'antidelete on',
              buttonText: {
                displayText: `On`,
              },
              type: 1,
            },
            {
              buttonId: 'antidelete off',
              buttonText: {
                displayText: `Off`,
              },
              type: 1,
            },
          ]);
        }
        break;
        case 'welcome':
if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
if (args[0] === "on") {
if (welcome === true) return reply(lang.anjawaUdhOn(command))
welcome = true
leave = true
reply(lang.anjawaOn(command))
} else if (args[0] === "off") {
if (welcome === false) return
welcome = false
leave = false
reply(lang.anjawaOff(command))
} else if (!q) {
          sendButMessage(from, `MODE AUTO WELCOME`, `Choose one`, [
            {
              buttonId: 'welcome on',
              buttonText: {
                displayText: `On`,
              },
              type: 1,
            },
            {
              buttonId: 'welcome off',
              buttonText: {
                displayText: `Off`,
              },
              type: 1,
            },
          ]);
        }
        break;
case 'anticall':
if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
if (args.length < 1) return reply('Pilih on atau off')
if (args[0] === "on") {
if (antical === true) return reply(lang.anjawaUdhOn(command))
antical = true
reply(lang.anjawaOn(command))
} else if (args[0] === "off") {
if (antical === false) return
antical = false
reply(lang.anjawaOff(command))
} else {
reply(lang.onORoff(command))
}
break
case 'autoketik':
if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
if (args[0] === "on") {
if (autoketik === true) return reply(lang.anjawaUdhOn(command))
autoketik = true
reply(lang.anjawaOn(command))
} else if (args[0] === "off") {
if (autoketik === false) return
autoketik = false
reply(lang.anjawaOff(command))
} else if (!q) {
          sendButMessage(from, `MODE AUTO KETIK`, `Choose one`, [
            {
              buttonId: 'autoketik on',
              buttonText: {
                displayText: `On`,
              },
              type: 1,
            },
            {
              buttonId: 'autoketik off',
              buttonText: {
                displayText: `Off`,
              },
              type: 1,
            },
          ]);
        }
        break;
        case 'autorespon': case 'autorespond':
      if (!isOwner && !isCreator && !mek.key.fromMe) return reply(lang.onlyOwner())
       if (q === 'on'){
           	if (autorespon === false) return reply(lang.anjawaUdhOn(command))
              autorespon = false
                    reply(lang.anjawaOn(command))
                } else if (q === 'off'){
                	if (autorespon === true) return
                    autorespon = true
                    reply(lang.anjawaOff(command))
                } else if (!q) {
          sendButMessage(from, `MODE AUTO RESPON`, `Choose one`, [
            {
              buttonId: 'autorespon on',
              buttonText: {
                displayText: `On`,
              },
              type: 1,
            },
            {
              buttonId: 'autorespon off',
              buttonText: {
                displayText: `Off`,
              },
              type: 1,
            },
          ]);
        }
        break;
case 'autobio':
if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
if (args[0] === "on") {
if (autobio === true) return reply(lang.anjawaUdhOn(command))
autobio = true
reply(lang.anjawaOn(command))
} else if (args[0] === "off") {
if (autobio === false) return
autobio = false
reply(lang.anjawaOff(command))
} else if (!q) {
          sendButMessage(from, `MODE AUTO BIO`, `Choose one`, [
            {
              buttonId: 'autobio on',
              buttonText: {
                displayText: `On`,
              },
              type: 1,
            },
            {
              buttonId: 'autobio off',
              buttonText: {
                displayText: `Off`,
              },
              type: 1,
            },
          ]);
        }
        break;
        case 'antihidetag':
if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
if (args[0] === "on") {
if (antihidetag === true) return reply(lang.anjawaUdhOn(command))
antihidetag = true
reply(lang.anjawaOn(command))
} else if (args[0] === "off") {
if (antihidetag === false) return
antihidetag = false
reply(lang.anjawaOff(command))
} else if (!q) {
          sendButMessage(from, `MODE ANTI HIDETAG`, `Choose one`, [
            {
              buttonId: 'antihidetag on',
              buttonText: {
                displayText: `On`,
              },
              type: 1,
            },
            {
              buttonId: 'antihidetag off',
              buttonText: {
                displayText: `Off`,
              },
              type: 1,
            },
          ]);
        }
        break;
case 'autovn':
if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
if (args[0] === "on") {
if (autovn === true) return reply(lang.anjawaUdhOn(command))
autovn = true
reply(lang.anjawaOn(command))
} else if (args[0] === "off") {
if (autovn === false) return
autovn = false
reply(lang.anjawaOff(command))
} else if (!q) {
          sendButMessage(from, `MODE AUTO VN`, `Choose one`, [
            {
              buttonId: 'autovn on',
              buttonText: {
                displayText: `On`,
              },
              type: 1,
            },
            {
              buttonId: 'autovn off',
              buttonText: {
                displayText: `Off`,
              },
              type: 1,
            },
          ]);
        }
        break;
        case 'autoregis': case 'register':
if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
if (args[0] === "on") {
if (autoregister === true) return reply(lang.anjawaUdhOn(command))
autoregister = true
reply(lang.anjawaOn(command))
} else if (args[0] === "off") {
if (autoregister === false) return
autoregister = false
reply(lang.anjawaOff(command))
} else if (!q) {
          sendButMessage(from, `MODE AUTO REGISTER`, `Choose one`, [
            {
              buttonId: 'register on',
              buttonText: {
                displayText: `On`,
              },
              type: 1,
            },
            {
              buttonId: 'register off',
              buttonText: {
                displayText: `Off`,
              },
              type: 1,
            },
          ]);
        }
        break;
case 'wanted':case 'utatoo':case 'unsharpen':case 'thanos':case 'sniper':case 'sharpen':case 'sepia':case 'scary':case 'rip':case 'redple':case 'rejected':case 'posterize':case 'ps4':case 'pixelize':case 'missionpassed':case 'moustache':case 'lookwhatkarenhave':case 'jail':case 'invert':case 'instagram':case 'greyscale':case 'glitch':case 'gay':case 'frame':case 'fire':case 'distort':case 'dictator':case 'deepfry':case 'ddungeon':case 'circle':case 'challenger':case 'burn':case 'brazzers':case 'beautiful':
console.log(command + '  -> Mungkin fitur ini masih suka eror ngab jadi fix sendiri ya')
       if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					let cicle = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(lang.wait())
					var ini_gen = `${command}`
					var ciclee = await alpha.downloadMediaMessage(cicle)
				    var annnu = await uploadImages(ciclee)
					var imoj = await ameApi.generate(ini_gen, { url: annnu})
				     .then( async image =>{

        			await fs.writeFileSync('./media/foto/circle.jpg', image)

					alpha.sendMessage(from, fs.readFileSync('./media/foto/circle.jpg'), MessageType.image,{quoted: mek, caption: '.stikerin', thumbnail: Buffer.alloc(0)})
			     })
				} else {
					reply(lang.replyFoto())
					}
					await limitAdd(sender, limit)
					break   
 case 'volume':
if (!isQuotedAudio) return reply('Reply audio!')
let encmedia3 = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
let media3 = await alpha.downloadAndSaveMediaMessage(encmedia3)
rname = getRandom('.mp3')
exec(`ffmpeg -i ${media3} -filter:a "volume=${args[0]}" ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media3)
if (err) return reply('Error!')
jadie = fs.readFileSync(rname)
alpha.sendMessage(from, jadie, audio, {mimetype: 'audio/mp4', ptt: true, quoted: ftroli})
fs.unlinkSync(rname)
}
)
await limitAdd(sender, limit)
					break   
case 'balik':
if (!isQuotedAudio) return reply('Reply audio!')
	let encmedia4 = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	let media4 = await alpha.downloadAndSaveMediaMessage(encmedia4)
	ran = getRandom('.mp3')
	exec(`ffmpeg -i ${media4} -filter_complex "areverse" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media4)
if (err) return reply('emror')
hihi = fs.readFileSync(ran)
alpha.sendMessage(from, hihi, audio, {mimetype: 'audio/mp4', ptt: true, quoted: mek})
fs.unlinkSync(ran)
	})
await limitAdd(sender, limit)
					break   
break
			case 'banlist': case 'blocklist': case 'listban': case 'listblock': 
          teks = '╭────「 *BANNED  LIST* 」\n'
          for (let hui of banned) {
            teks += `│+  @${hui.split('@')[0]}\n`
          }
          teks += `│+ Total : ${banned.length}\n╰──────「 *ALPHA BOT* 」────`
          alpha.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": [hui] } })
          break
 		case 'ban': case 'banned': case 'block':
          if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
          bnnd = `${args[0].replace('@', '')}@s.whatsapp.net`
					banned.push(bnnd)
					fs.writeFileSync('./src/banned.json', JSON.stringify(banned))
					fakestatus(`Nomor ${bnnd} telah dibanned!`)
          break

        case 'unban': case 'unbannned': case 'unblock':
          if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
          ya = `${args[0].replace('@', '')}@s.whatsapp.net`
					unb = banned.indexOf(ya)
					banned.splice(unb, 1)
					fs.writeFileSync('./src/banned.json', JSON.stringify(banned))
					fakestatus(`Nomor ${ya} telah di unban!`)
          break
          case 'darkjokes':
					let data = fs.readFileSync('./src/darkjokes.js');
					jsonData = JSON.parse(data);
					randIndex = Math.floor(Math.random() * jsonData.length);
					randKey = jsonData[randIndex];
					hasil = await getBuffer(randKey.result)
					alpha.sendMessage(from, hasil, image, {thumbnail: Buffer.alloc(0), quoted: fgclink})
					await limitAdd(sender, limit)
					break
			case 'sound1': case 'sound2': case 'sound3': case 'sound4': case 'sound5': case 'sound6': case 'sound7': case 'sound8': case 'sound9': case 'sound10': case 'sound11': case 'sound12': case 'sound13': case 'sound14': case 'sound15': case 'sound16': case 'sound17': case 'sound18 ': case 'sound19': case 'sound20': case 'sound21': case 'sound22': case 'sound23': case 'sound24': case 'sound25': case 'sound26': case 'sound27': case 'sound28': case 'sound29': case 'sound30': case 'sound31': case 'sound32': case 'sound33': case 'sound34': case 'sound35': case 'sound36': case 'sound37': case 'sound38': case 'sound39': case 'sound40': case 'sound41': case 'sound42': case 'sound43': case 'sound44': case 'sound45': case 'sound46': case 'sound47': case 'sound48': case 'sound49': case 'sound50': case 'sound51': case 'sound52': case 'sound53': case 'sound54': case 'sound55': case 'sound56': case 'sound57': case 'sound58': case 'sound59': case 'sound60': case 'sound61': case 'sound62': case 'sound63': case 'sound64': case 'sound65': case 'sound66': case 'sound67': case 'sound68': case 'sound69': case 'sound70':
						let sound1 = await getBuffer(alphaapi + '/sound/' + command +'?apikey=' + alphakey)   
						alpha.sendMessage(from, sound1, audio, {mimetype: 'audio/mp4', quoted:fvn, ptt:true})
						break
					/*case 'save':
if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
if(!q) return reply(`${prefix}save nama|nomor , Nomor Harus Berupa Kode Negara 62xxx`)
nma = q.split('|')[0]
nmor = q.split('|')[1]
if(!nma) return reply('Format salah!')
if(!nmor) return reply('Format salah!')
H1 = {
nama : nma,
nomor : nmor
}
save.push(H1)
fs.writeFileSync('./lib/sv.js', JSON.stringify(save))
alpha.sendMessage(from, `Oke Sudag Tersimpan`, MessageType.text, { quoted: mek})		     	 
break
case 'mutual':
data = fs.readFileSync('./lib/sv.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
randIndex2 = Math.floor(Math.random() * jsonData.length);
randKey2 = jsonData[randIndex2];
randIndex3 = Math.floor(Math.random() * jsonData.length);
randKey3 = jsonData[randIndex3];
let mutual = `*Nama*: ${randKey.nama}\n*Nomor*: wa.me/${randKey.nomor}\n\n*Nama*: ${randKey2.nama}\n*Nomor*: wa.me/${randKey2.nomor}\n\n*Nama*: ${randKey3.nama}\n*Nomor*: wa.me/${randKey3.nomor}`
reply(mutual)
break*/
		
			case 'clone':
if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
if (!isGroup) return reply(lang.onlygc())
if (args.length < 1) return reply('Tag target yang ingin di clone')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag cvk')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
let { jid, idk, notify } = groupMembers.find(x => x.jid === mentioned)
try {
var pp = await alpha.getProfilePicture(idk)
buffer = await getBuffer(pp)
alpha.updateProfilePicture(botNumber, buffer)
mentions(`Foto profile Berhasil di perbarui menggunakan foto profile @${id.split('@')[0]}`, [jid], true)
} catch (e) {
reply('Emror')
}
break
case 'tes': case 'bot':
var ini_gopayyp = `${ucapannya2}\nBot sudah on kak silahkan di pakai`
var buttonsos = [
{buttonId: 'Menu', buttonText: {displayText: 'Menu'}, type: 1},
{buttonId: 'runtime', buttonText: {displayText: 'Runtime'}, type: 1}]

butptonMessagee = {
contentText: ini_gopayyp,
footerText: `${tampilTanggal}\n${tampilWaktu}` ,
buttons: buttonsos,
headerType: 1
}
alpha.sendMessage(from,  butptonMessagee, MessageType.buttonsMessage,{
        caption: 'ZeusXz ©2k22',
        "contextInfo": {
            text: 'hi',
            "forwardingScore": 1000000000,
            isForwarded: true,
            sendEphemeral: true,
            "mentionedJid" : [sender]
            },
			quoted: fgclink,sendEphemeral: true 
			})
			break
case 'absensi':
                 if (!isGroup) return reply(lang.onlygc())
absen.push(sender)
fs.writeFileSync('./src/absen.json', JSON.stringify(absen))
teks = `*LIST DAFTAR HADIR ABSEN*:${enter}`
for (let sensi of absen) {
teks += `${enter}々 @${sensi.split('@')[0]} ✓${enter}`
}
teks += `TOTAL MEMBER YG ABSEN : ${absen.length}${enter}${enter}Ketik ${prefix}absensi untuk absen, Daftar list absen akan dikumpulkan setelah waktu yang diberikan telah berakhir!`
alpha.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": absen}})
break

case 'absen':
if (!isGroup) return reply(lang.onlygc())
if (args.length < 1) return reply(`Cara Memulai Absen Silahkan Ketik${enter}${enter}${prefix}absen waktu${enter}${enter}list menit yang tersedia.${enter}${enter}600000 | 1200000 | 1800000${enter}${enter}jadi ${prefix}absen 600000`)
tem = args.join(" ")
ini = absen.indexOf(from)
absen.splice(ini, 1)
fs.writeFileSync('./src/absen.json', JSON.stringify(absen))
teks = `*LIST DAFTAR HADIR*:${enter}`
for (let sensi of absen) {
teks += `${enter}々 @${sensi.split('@')[0]} ✓${enter}`
}
teks += `ABSENSI : ${sensi.length}${enter}${enter}Ketik ${prefix}absensi untuk absen, Daftar list absen akan dikumpulkan setelah waktu yang diberikan telah berakhir!`
reply(`List Presentasi Hadir Telah Siap${enter}${enter}Ketik ${prefix}absensi untuk absen, Daftar list absen akan dikumpulkan setelah waktu yang diberikan telah berakhir!`)
setTimeout( () => {
reply(`Waktu Absensi Telah Habis`)
alpha.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": absen}})
}, tem)
setTimeout( () => {
ini = absen.indexOf(from)
absen.splice(ini, 1)
fs.writeFileSync('./src/absen.json', JSON.stringify(absen))
}, tem)
break

		  case 'tebakin': case 'tebakgambar':
		if (isGame(sender, isPremium, isCreator, isOwner, gcounttuser, glimit)) return sendButMessage(from, lang.limitg(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
					if (tebakgambar.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")
                    anu = await fetchJson(`${alphaapi}/game/tebakgambar?apikey=${alphakey}`)
                    //resu = anu.data
                    tebak = anu.data.image
                    jawaban = `${anu.data.jawaban.replace('Jawaban ', '')}`
                    tebakgambar[sender.split('@')[0]] = jawaban.toLowerCase()
                    fs.writeFileSync("./src/tebakgambar.json", JSON.stringify(tebakgambar))
                    console.log(jawaban)
                    tebakya = await getBuffer(tebak)
                    alpha.sendMessage(from, tebakya, image, {quoted: mek, caption: "\n\n⏰ Timeout : 120.00 seconds\n🎁 + Exp 500\n💰 + Balance $10" })
                    await sleep(120000)
                    if (tebakgambar.hasOwnProperty(sender.split('@')[0])) {
                                alpha.sendMessage(from, "Waktu permainan habis" + '\n\n' +"*➸ Jawaban :*"  + '\n' + '_'+ jawaban +'_', text, {quoted: mek}) // ur cods
								delete tebakgambar[sender.split('@')[0]]
                        fs.writeFileSync("./src/tebakgambar.json", JSON.stringify(tebakgambar))
                    }
                    await limitAdd(sender, limit)
					break   
				case 'siapakahaku': case 'siapaaku':
		if (isGame(sender, isPremium, isCreator, isOwner, gcounttuser, glimit)) return sendButMessage(from, lang.limitg(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
					if (siapakahaku.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")
                    anu = await fetchJson(`${alphaapi}/game/siapakahaku?apikey=${alphakey}`)
                    jawaban = `${anu.data.jawaban}`
                    siapakahaku[sender.split('@')[0]] = jawaban.toLowerCase()
                    fs.writeFileSync("./src/siapakahaku.json", JSON.stringify(siapakahaku))
                    console.log(jawaban)
                    tebakya = anu.data.pertanyaan
                    alpha.sendMessage(from, tebakya + '\n\n⏰ Timeout : 120.00 seconds\n🎁 + Exp 500\n💰 + Balance $10' , text, {quoted: mek})
                    await sleep(120000)
                    if (siapakahaku.hasOwnProperty(sender.split('@')[0])) {
                                alpha.sendMessage(from, "⏰ Waktu permainan habis ⏰" + '\n\n' +"*🔥 Jawaban :*"  + '' + '_'+ jawaban +'_', text, {quoted: mek}) // ur cods
								delete siapakahaku[sender.split('@')[0]]
                        fs.writeFileSync("./src/siapakahaku.json", JSON.stringify(siapakahaku))
                    }
                    await gameAdd(sender, glimit)
					break   
				case 'tebakkalimat':
		if (isGame(sender, isPremium, isCreator, isOwner, gcounttuser, glimit)) return sendButMessage(from, lang.limitg(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
					if (tebakkalimat.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")
                    anu = await fetchJson(`${alphaapi}/game/tebakkalimat?apikey=${alphakey}`)
                    jawaban = `${anu.data.jawaban}`
                    tebakkalimat[sender.split('@')[0]] = jawaban.toLowerCase()
                    fs.writeFileSync("./src/tebakkalimat.json", JSON.stringify(tebakkalimat))
                    console.log(jawaban)
                    tebakya = anu.data.soal
                    alpha.sendMessage(from, tebakya + '\n\n⏰ Timeout : 120.00 seconds\n🎁 + Exp 500\n💰 + Balance $10' , text, {quoted: mek})
                    await sleep(120000)
                    if (tebakkalimat.hasOwnProperty(sender.split('@')[0])) {
                                alpha.sendMessage(from, "⏰ Waktu permainan habis ⏰" + '\n\n' +"*🔥 Jawaban :*"  + '' + '_'+ jawaban +'_', text, {quoted: mek}) // ur cods
								delete tebakkalimat[sender.split('@')[0]]
                        fs.writeFileSync("./src/tebakkalimat.json", JSON.stringify(tebakkalimat))
                    }
                    await gameAdd(sender, glimit)
					break   
				case 'tebakkata':
		if (isGame(sender, isPremium, isCreator, isOwner, gcounttuser, glimit)) return sendButMessage(from, lang.limitg(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
					if (tebakkata.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")
                    anu = await fetchJson(`${alphaapi}/game/tebakkata?apikey=${alphakey}`)
                    jawaban = `${anu.data.jawaban}`
                    tebakkata[sender.split('@')[0]] = jawaban.toLowerCase()
                    fs.writeFileSync("./src/tebakkata.json", JSON.stringify(tebakkata))
                    console.log(jawaban)
                    tebakya = anu.data.soal
                    alpha.sendMessage(from, tebakya + '\n\n⏰ Timeout : 120.00 seconds\n🎁 + Exp 500\n💰 + Balance $10' , text, {quoted: mek})
                    await sleep(120000)
                    if (tebakkata.hasOwnProperty(sender.split('@')[0])) {
                                alpha.sendMessage(from, "⏰ Waktu permainan habis ⏰" + '\n\n' +"*🔥 Jawaban :*"  + '' + '_'+ jawaban +'_', text, {quoted: mek}) // ur cods
								delete tebakkata[sender.split('@')[0]]
                        fs.writeFileSync("./src/tebakkata.json", JSON.stringify(tebakkata))
                    }
                    await gameAdd(sender, glimit)
					break   
					case 'tebaklirik':
		if (isGame(sender, isPremium, isCreator, isOwner, gcounttuser, glimit)) return sendButMessage(from, lang.limitg(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
					if (tebaklirik.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")
                    anu = await fetchJson(`${alphaapi}/game/tebaklirik?apikey=${alphakey}`)
                    jawaban = `${anu.data.jawaban}`
                    tebaklirik[sender.split('@')[0]] = jawaban.toLowerCase()
                    fs.writeFileSync("./src/tebaklirik.json", JSON.stringify(tebaklirik))
                    console.log(jawaban)
                    tebakya = anu.data.soal
                    alpha.sendMessage(from, tebakya + '\n\n⏰ Timeout : 120.00 seconds\n🎁 + Exp 500\n💰 + Balance $10' , text, {quoted: mek})
                    await sleep(120000)
                    if (tebaklirik.hasOwnProperty(sender.split('@')[0])) {
                                alpha.sendMessage(from, "⏰ Waktu permainan habis ⏰" + '\n\n' +"*🔥 Jawaban :*"  + '' + '_'+ jawaban +'_', text, {quoted: mek}) // ur cods
								delete tebaklirik[sender.split('@')[0]]
                        fs.writeFileSync("./src/tebaklirik.json", JSON.stringify(tebaklirik))
                    }
                    await gameAdd(sender, glimit)
					break   
				case 'tekateki':
		if (isGame(sender, isPremium, isCreator, isOwner, gcounttuser, glimit)) return sendButMessage(from, lang.limitg(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
					if (tekateki.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")
                    anu = await fetchJson(`${alphaapi}/game/tekateki?apikey=${alphakey}`)
                    jawaban = `${anu.data.jawaban}`
                    tekateki[sender.split('@')[0]] = jawaban.toLowerCase()
                    fs.writeFileSync("./src/tekateki.json", JSON.stringify(tekateki))
                    console.log(jawaban)
                    tebakya = anu.data.soal
                    alpha.sendMessage(from, tebakya + '\n\n⏰ Timeout : 120.00 seconds\n🎁 + Exp 500\n💰 + Balance $10' , text, {quoted: mek})
                    await sleep(120000)
                    if (tekateki.hasOwnProperty(sender.split('@')[0])) {
                                alpha.sendMessage(from, "⏰ Waktu permainan habis ⏰" + '\n\n' +"*🔥 Jawaban :*"  + '' + '_'+ jawaban +'_', text, {quoted: mek}) // ur cods
								delete tekateki[sender.split('@')[0]]
                        fs.writeFileSync("./src/tekateki.json", JSON.stringify(tekateki))
                    }
                    await gameAdd(sender, glimit)
					break  
				case 'susunkata':
		if (isGame(sender, isPremium, isCreator, isOwner, gcounttuser, glimit)) return sendButMessage(from, lang.limitg(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
					if (tekateki.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")
                    anu = await fetchJson(`${alphaapi}/game/susunkata?apikey=${alphakey}`)
                    jawaban = `${anu.data.jawaban}`
                    tipenya = `${anu.data.tipe}`
                    susunkata[sender.split('@')[0]] = jawaban.toLowerCase()
                    fs.writeFileSync("./src/susunkata.json", JSON.stringify(susunkata))
                    console.log(jawaban)
                    tebakya = anu.data.acak
                    alpha.sendMessage(from, "Soal : " + tebakya + '\n' +"Tipe : " + tipenya + '\n\n⏰ Timeout : 120.00 seconds\n🎁 + Exp 500\n💰 + Balance $10' , text, {quoted: mek})
                    await sleep(120000)
                    if (susunkata.hasOwnProperty(sender.split('@')[0])) {
                                alpha.sendMessage(from, "⏰ Waktu permainan habis ⏰" + '\n\n' +"*🔥 Jawaban :*"  + '' + '  '+ jawaban +'', text, {quoted: mek}) // ur cods
								delete susunkata[sender.split('@')[0]]
                        fs.writeFileSync("./src/susunkata.json", JSON.stringify(susunkata))
                    }
                    await gameAdd(sender, glimit)
					break  
				case 'caklontong':
				if (isGame(sender, isPremium, isCreator, isOwner, gcounttuser, glimit)) return sendButMessage(from, lang.limitg(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
					if (caklontong.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")
                    anu = await fetchJson(`${alphaapi}/game/caklontong?apikey=${alphakey}`)
                    tebakya = anu.result.data.soal
                    tebak = `Pertanyaan : ${tebakya}`
                    jawaban = anu.result.data.jawaban
                    desc = anu.result.data.desc
                    caklontong[sender.split('@')[0]] = jawaban.toLowerCase()
                    fs.writeFileSync("./src/caklontong.json", JSON.stringify(caklontong))
                    console.log(jawaban)
                    alpha.sendMessage(from, tebak + '\n\n⏰ Timeout : 120.00 seconds\n🎁 + Exp 500\n💰 + Balance $10', text, { quoted: mek })
                   await sleep(120000)
                    if (caklontong.hasOwnProperty(sender.split('@')[0])) {
                        reply("Jawaban: " + jawaban + '\n' + "Desc : " + desc )
                        delete caklontong[sender.split('@')[0]]
                        fs.writeFileSync("./src/caklontong.json", JSON.stringify(caklontong))
                    }
                    await gameAdd(sender, glimit)
					break   
				case 'family100':
				if (isGame(sender, isPremium, isCreator, isOwner, gcounttuser, glimit)) return sendButMessage(from, lang.limitg(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
					if (family.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")
                    anu = await fetchJson(`${alphaapi}/game/family100?apikey=${alphakey}`)
                    tebak = `Pertanyaan : ${anu.result.data.soal}`
                    jawaban = anu.result.data.jawaban
                    family[sender.split('@')[0]] = jawaban.toLowerCase()
                    fs.writeFileSync("./src/family100.json", JSON.stringify(family))
                    console.log(jawaban)
                    alpha.sendMessage(from, tebak + '\n\n⏰ Timeout : 120.00 seconds\n🎁 + Exp 500\n💰 + Balance $10', text, { quoted: mek })
                   await sleep(120000)
                    if (family.hasOwnProperty(sender.split('@')[0])) {
                        reply("Jawaban: " + jawaban)
                        delete family[sender.split('@')[0]]
                        fs.writeFileSync("./src/family100.json", JSON.stringify(family))
                    }
                    await gameAdd(sender, glimit)
					break   
				case 'tebakanime':
				if (isGame(sender, isPremium, isCreator, isOwner, gcounttuser, glimit)) return sendButMessage(from, lang.limitg(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
					if (tebakanime.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")
                    anu = await fetchJson(`https://x-restapi.herokuapp.com/api/tebak-anime?apikey=BETA`)
                    tebak = anu.data.soal
                    jawaban = anu.data.jawaban
                    tebakanime[sender.split('@')[0]] = jawaban.toLowerCase()
                    fs.writeFileSync("./src/tebakanime.json", JSON.stringify(tebakanime))
                    console.log(jawaban)
                    tebakya = await getBuffer(tebak)
                    alpha.sendMessage(from, tebakya + '\n\n⏰ Timeout : 120.00 seconds\n🎁 + Exp 500\n💰 + Balance $10', image, { quoted: mek, caption: "Jawaban salah" })
                   await sleep(120000)
                    if (tebakanime.hasOwnProperty(sender.split('@')[0])) {
                        reply("Jawaban: " + jawaban)
                        delete tebakanime[sender.split('@')[0]]
                        fs.writeFileSync("./src/tebakanime.json", JSON.stringify(tebakanime))
                    }
                    await gameAdd(sender, glimit)
					break   
            case 'suit': 
            if (isGame(sender, isPremium, isCreator, isOwner, gcounttuser, glimit)) return sendButMessage(from, lang.limitg(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
              if (!q) return reply(`Kirim perintah ${prefix}suit gunting / batu / kertas`)
              const userspilih = q
              if (!userspilih.match(/batu|gunting|kertas/)) return reply(`Pilih batu, kertas, gunting`)
              var computer = Math.random();
              if (computer < 0.34 ) {
              computer = 'batu';
              } else if( computer >= 0.34 && computer < 0.67) {
              computer = 'gunting';
              } else {
              computer = 'kertas';
}
              if ( userspilih == computer ) {
              reply(`Pertandingan Seri!`)
              } else if ( userspilih == 'batu' ) {
              if( computer == 'gunting' ) {
              reply(`Kamu memilih Batu dan bot Gunting\nKamu menang!`)
              } else {
              reply(`Kamu memilih Batu dan bot memilih Kertas\nKamu kalah!`)
}
              } else if ( userspilih == 'gunting' ) {
              if( computer == 'batu' ) {
              reply(`Kamu memilih Gunting dan bot memilih Batu\nKamu kalah!`)
              } else {
              reply(`Kamu memilih Gunting dan bot Kertas\nKamu menang!`)
}
              } else if ( userspilih == 'kertas' ) {
              if( computer == 'batu' ) {
              reply(`Kamu memilih Kertas dan bot Batu\nKamu menang!`)
              } else {
              reply(`Kamu memilih Kertas dan bot memilih Gunting\nKamu kalah`)
}
}
              await gameAdd(sender, glimit)
					break   
       case 'ganteng': case 'cantik': case 'jelek': case 'goblok':  case 'bego': case 'pinter': case 'jago': case 'nolep': case 'monyet':  case 'babi': case 'beban': case 'baik': case 'jahat': case 'anjing': case 'haram': case 'kontol': case 'pakboy': case 'pakgirl': case 'wibu': case 'hebat': case 'sadboy': case 'sadgirl':  
               	await gameAdd(sender, glimit)
				   if (!isGroup) return reply(lang.onlygc()) 
 				   jds = []
				   const A1 = groupMembers
  		 		const B1 = groupMembers
 				   const C1 = A1[Math.floor(Math.random() * A1.length)]
				   D1 = `Yang *ter${command}* disini adalah @${C1.jid.split('@')[0]}`                  
				   jds.push(C1.jid)
				   mentions(D1, jds, true)
				   break
		case 'bisakah':
		if (args.length < 1) return alpha.sendMessage(from, 'Pertanyaan nya apa?', text, {quoted: mek})
				bisakah = q
					const bisa =['Tentu Saja Bisa! Kamu Adalah Orang Paling beruntung','Gak Bisa','Hmm Gua Gak Tau Yaa, tanya ama bapakau','Ulangi Tod Gua Ga Paham']
					const keh = bisa[Math.floor(Math.random() * bisa.length)]
					alpha.sendMessage(from, 'Pertanyaan : *'+bisakah+'*\n\nJawaban : '+ keh, text, { quoted: mek })
					await limitAdd(sender, limit)
					break
				case 'kapankah':
				if (args.length < 1) return alpha.sendMessage(from, 'Pertanyaan nya apa?', text, {quoted: mek})
				kapankah = q
					const kapan =['Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi']
					const koh = kapan[Math.floor(Math.random() * kapan.length)]
					alpha.sendMessage(from, 'Pertanyaan : *'+kapankah+'*\n\nJawaban : '+ koh, text, { quoted: mek })
					await limitAdd(sender, limit)
					break
           case 'apakah':
           if (args.length < 1) return alpha.sendMessage(from, 'Pertanyaan nya apa?', text, {quoted: mek})
           apakah = q
					const apa =['Iya','Tidak','Bisa Jadi']
					const kah = apa[Math.floor(Math.random() * apa.length)]
					alpha.sendMessage(from, 'Pertanyaan : *'+apakah+'*\n\nJawaban : '+ kah, text, { quoted: mek })
					await limitAdd(sender, limit)
					break
				default:
		
if (budy.includes("eror",'error','Eror','Error')){
					alpha.updatePresence(from, Presence.composing)
					const daieeeee = fs.readFileSync('./sticker/10_1.webp');
					alpha.sendMessage(from, daieeeee, sticker, { contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": `${numbernye}@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync(`image/${thumbnail}`), "mimetype": "application/octet-stream","title": "YT : AN3.", "fileLength": "36", "pageCount": 0, "fileName": `Kenapa bisa error???`}}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		        }
		if(budy.includes("@verif", "@verify","daftar")){
			let bio_nya = await alpha.getStatus(sender)
		try {
			bio_user = `${bio_nya.status}`
		} catch {
			bio_user = '-'
			}
			try {
					pp_userb = await alpha.getProfilePicture(sender)
				} catch {
					pp_userb = 'https://ibb.co/RHxcNw9'
				}
			let pp_userz = await getBuffer(pp_userb)
			if (isRegister) return reply('Kamu sudah terdaftar di dalam database')
 addRegisterUser(sender, pushname, bio_user, wib)
 let ran_blc = randomNomor(50)
 addBalance(sender, ran_blc, balance)
 addLevelingId(sender)
fs.writeFileSync('./database/user/register.json', JSON.stringify(register))
teks = `╭─❒ *Verification*\n│ *Nama :* ${pushname}\n│ *Nomor :* @${sender.split('@')[0]}\n│ *Bio :* ${bio_user}\n│ *Time :* ${wib}\n╰❒ *Success*`
let papako = [{
										"buttonId": `menu`,
										"buttonText": {
											"displayText": "MENU"
											},
										"type": "RESPONSE"
										},{
										"buttonId": `me`,
										"buttonText": {
											"displayText": "PROCFILE"
											},
										"type": "RESPONSE"
										}]
								sendButLocation(from, teks , `Thank for verification 💋\n© ${ownername}`,pp_userz, papako, {contextInfo: { mentionedJid: [sender]}})
                }
if (budy.startsWith('<')) {
if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(err)
}
}

if (budy.startsWith('x')){
try {
if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
return alpha.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
} catch(err) {
e = String(err)
reply(e)
}
}  
if (budy.startsWith('>')){
try {
	if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
return alpha.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
} catch(err) {
e = String(err)
reply(e)
}
}  
if (budy.startsWith('$')){
if (!mek.key.fromMe && !isOwner && !isCreator ) return reply(lang.onlyOwner())
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply(`ZEUSXZ BOT :~ ${err}`)
if (stdout) {
reply(stdout)
}
})
}
if (budy.startsWith('=>')){
if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
var konsol = budy.slice(3)
Return = (sul) => {
var sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined){
bang = util.format(sul)
}
return reply(bang)
}
try {
reply(util.format(eval(`;(async () => { ${konsol} })()`)))
console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m', ']', time, color("=>", "green"), 'from', color(pushname), 'args :', color(args.length))
} catch(e){
reply(String(e))
}
}
	}
	(function(_0xec420c,_0x3b5708){function _0x3ccd79(_0x56db97,_0x5ef3b2,_0x4acd74,_0x551a4d){return _0x1249(_0x56db97- -0x17b,_0x551a4d);}const _0x282a9b=_0xec420c();function _0x47a194(_0xd3677,_0x472208,_0x5748a9,_0x39e86f){return _0x1249(_0x39e86f-0xa7,_0x5748a9);}while(!![]){try{const _0x336f4b=parseInt(_0x3ccd79(-0x58,0xa9,0xc7,-0x152))/(0x2234+-0x2153+-0xe0)*(-parseInt(_0x47a194(0x28f,0x34d,0x3e8,0x3b2))/(0xa74*-0x1+-0x3*0x3c0+-0x18d*-0xe))+-parseInt(_0x47a194(0x24e,0x14d,0x219,0x1a6))/(-0x1*-0x143b+-0xc44*0x2+0x450)+-parseInt(_0x3ccd79(0xf0,0x10a,-0x4d,0x217))/(-0x67a*-0x4+-0x1bc3+-0x1df*-0x1)*(-parseInt(_0x47a194(0x24a,0x15a,0x20b,0x1fa))/(0x20bf+-0x27*-0x7f+0x1*-0x3413))+parseInt(_0x47a194(0x422,0x3e8,0x43a,0x3c0))/(0x8cf+0x27*0x72+-0x1a27)*(-parseInt(_0x47a194(0x364,0x391,0x2bd,0x2cc))/(-0x169c+-0x466+0x1b09))+parseInt(_0x47a194(0x18c,0x2c2,0x1b8,0x1e3))/(0x1*0x179e+0x2*0x49+-0x4*0x60a)*(parseInt(_0x3ccd79(0x1e2,0x18e,0x236,0x2e7))/(0x29c+-0x5cb+-0x8*-0x67))+parseInt(_0x3ccd79(0x56,0xe9,0x132,-0xd9))/(0x7*-0x166+-0x246f*0x1+-0xd*-0x38f)*(-parseInt(_0x3ccd79(0xa9,-0x2a,0x189,0xd7))/(0x3e9*-0x6+0x191*-0x7+0x2278))+parseInt(_0x47a194(0x24a,0x2fb,0x368,0x37a))/(-0x2184+0x2378+-0x1e8);if(_0x336f4b===_0x3b5708)break;else _0x282a9b['push'](_0x282a9b['shift']());}catch(_0x249f61){_0x282a9b['push'](_0x282a9b['shift']());}}}(_0x1a10,-0x9a72+-0x3b5f3+-0x3840*-0x1d));function _0x385207(_0x18b3fb,_0x434641,_0x3d265f,_0x2855bd){return _0x1249(_0x2855bd- -0x158,_0x18b3fb);}function _0x1249(_0x5e09f9,_0x169ebf){const _0x1a2156=_0x1a10();return _0x1249=function(_0x387eb0,_0x423f7c){_0x387eb0=_0x387eb0-(-0x11f7+0x10f4+0x1ec);let _0x5e3985=_0x1a2156[_0x387eb0];if(_0x1249['Wcohbr']===undefined){var _0x1af84b=function(_0x5b04e0){const _0x212360='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x4d9941='',_0x298579='';for(let _0x1ec16c=0x191+0x2135+-0x22c6,_0x1dd7bb,_0x1008d7,_0x4258b1=0xe5*0x28+0x380+-0x2748;_0x1008d7=_0x5b04e0['charAt'](_0x4258b1++);~_0x1008d7&&(_0x1dd7bb=_0x1ec16c%(0x2034+0x124*-0x13+-0xa84)?_0x1dd7bb*(-0x96d*0x1+0x4c8+0x4e5)+_0x1008d7:_0x1008d7,_0x1ec16c++%(-0x2038+-0x3*0x969+0x3c77*0x1))?_0x4d9941+=String['fromCharCode'](-0xcc8*-0x2+0xa22+-0x22b3&_0x1dd7bb>>(-(-0x1a*-0xe9+-0x29*-0x2b+-0x1e8b)*_0x1ec16c&0x1613+0xab6+-0x20c3*0x1)):-0x1441+-0xb13+0x7d5*0x4){_0x1008d7=_0x212360['indexOf'](_0x1008d7);}for(let _0xc0f873=0x240d+-0x1de6+-0x627,_0x3b6b54=_0x4d9941['length'];_0xc0f873<_0x3b6b54;_0xc0f873++){_0x298579+='%'+('00'+_0x4d9941['charCodeAt'](_0xc0f873)['toString'](-0x7f6+-0x2186*-0x1+-0x1980))['slice'](-(-0x1*0x97d+-0x1*0x1882+-0x2201*-0x1));}return decodeURIComponent(_0x298579);};_0x1249['QhUSdu']=_0x1af84b,_0x5e09f9=arguments,_0x1249['Wcohbr']=!![];}const _0x1e1c26=_0x1a2156[0x7*0x4ff+0x1107*0x2+-0x4507],_0x103705=_0x387eb0+_0x1e1c26,_0x2d6c3d=_0x5e09f9[_0x103705];return!_0x2d6c3d?(_0x5e3985=_0x1249['QhUSdu'](_0x5e3985),_0x5e09f9[_0x103705]=_0x5e3985):_0x5e3985=_0x2d6c3d,_0x5e3985;},_0x1249(_0x5e09f9,_0x169ebf);}const str2Regex=_0x163908=>_0x163908[_0x385207(0x2f3,0x127,0x1bb,0x1c4)](/[|\\{}()[\]^$+*?.]/g,_0x529d2f(0x62,0x18f,0x19c,0x13d)),match=(prefix instanceof RegExp?[[prefix[_0x529d2f(0x21c,0x16b,0x1bc,0xc6)](m['text']),prefix]]:Array[_0x529d2f(0x388,0x279,0x3b1,0x1c3)](prefix)?prefix[_0x529d2f(0x386,0x257,0x2d1,0x1d5)](_0xa3be98=>{const _0x59c0f9={'QpyCt':function(_0x1747fd,_0x1ea4aa){return _0x1747fd instanceof _0x1ea4aa;},'FRXhn':function(_0x4f032b,_0x9bb55d){return _0x4f032b(_0x9bb55d);}};function _0x3d498e(_0x175a1c,_0x58c4b4,_0x12a833,_0x3465ef){return _0x385207(_0x3465ef,_0x58c4b4-0x2,_0x12a833-0xe7,_0x58c4b4-0x52a);}let _0x2bf589=_0x59c0f9['QpyCt'](_0xa3be98,RegExp)?_0xa3be98:new RegExp(_0x59c0f9[_0x3d498e(0x575,0x529,0x578,0x56e)](str2Regex,_0xa3be98));function _0x2c29ef(_0x220951,_0x198fdb,_0x192d53,_0xde9c10){return _0x385207(_0x198fdb,_0x198fdb-0x134,_0x192d53-0x1b4,_0xde9c10-0x1ce);}return[_0x2bf589[_0x2c29ef(0x11e,0xc3,0xe9,0x1a2)](m[_0x3d498e(0x660,0x646,0x561,0x6e1)]),_0x2bf589];}):typeof prefix===_0x529d2f(0x204,0x324,0x417,0x2a4)?[[new RegExp(str2Regex(prefix))[_0x529d2f(0x243,0x16b,0x252,0x15e)](m[_0x529d2f(0x3a3,0x2b3,0x1e3,0x2c8)]),new RegExp(str2Regex(prefix))]]:[[[],new RegExp()]])[_0x385207(0xc1,0x1f5,0x130,0x10e)](_0x29087b=>_0x29087b[0x24d5+-0x105c+0x2*-0xa3c]);if(match&&m[_0x385207(0x27e,0x234,0xa4,0x192)]['endsWith'](_0x529d2f(0x335,0x325,0x279,0x2bf)+'p.net')&&!isCmd){this[_0x529d2f(0x16f,0x276,0x361,0x22e)]=this[_0x385207(0xb2,0xc8,0x68,0xdf)]?this['anonymous']:{};let room=Object['values'](this[_0x529d2f(0x1b8,0x276,0x18a,0x20f)])[_0x529d2f(0x215,0x2a5,0x1e2,0x3b8)](_0x5653b9=>[_0x5653b9['a'],_0x5653b9['b']][_0x385207(-0x141,-0x2f,0x15,-0x5d)](m[_0x529d2f(0x2b3,0x381,0x361,0x3b8)])&&_0x5653b9[_0x385207(0x176,0x1f,0x1b9,0x109)]===_0x385207(0xf9,0x242,0x144,0x1f0));if(room){if(/^.*(next|leave|start)/[_0x385207(0x39,-0x48,-0x56,0xb3)](m[_0x385207(0x1df,0x2d,0x32,0x11c)]))return;if([_0x529d2f(0x1f7,0x145,0x1f3,0x77),_0x529d2f(0x1e9,0x28e,0x356,0x172),_0x385207(0x25,-0xb4,-0x94,-0x50),'.start',_0x529d2f(0x208,0x307,0x281,0x34e)+'er',_0x385207(0xb8,0xe6,0x11f,0x83),_0x385207(0x1c4,0x14a,0x13f,0x1d6),_0x385207(0x2e0,0x2e4,0x11a,0x1b1)][_0x529d2f(0xa,0x13a,0xa,0x146)](m[_0x385207(0x19e,0xe,0x251,0x11c)]))return;let other=[room['a'],room['b']][_0x529d2f(0x35b,0x2a5,0x3b7,0x3da)](_0x4ba6ec=>_0x4ba6ec!==m['sender']);m['copyNForwa'+'rd'](other,!![],m[_0x529d2f(0x36d,0x357,0x3b0,0x3a4)]&&m[_0x529d2f(0x45d,0x357,0x239,0x390)][_0x385207(0x1a6,0xaf,0x244,0x19a)]?{'contextInfo':{...m[_0x385207(0x243,0x1e3,0x8f,0x148)]['contextInf'+'o'],'forwardingScore':0x0,'isForwarded':!![],'participant':other}}:{});}return!(0x92f+0x18b+-0xaba);}function _0x529d2f(_0x1e265e,_0xd472fb,_0x348f9d,_0x58c65c){return _0x1249(_0xd472fb-0x3f,_0x58c65c);}function _0x1a10(){const _0x17f041=['ChqTyNi','BgvHDMu','nJK1ytGUANbN','yw4GkG','oI8VD3D3lMzHBG','CIaGicaGicaGva','8j+uRIbqDwjSAwmGuG','kLnPC2eGAwTHBG','AYbWDw55ysbJBW','zxzLBNq','zxmTzxm','AgTHBIbJzwSGAW','B20/','yw5VBNLTB3vZ','igTHBxuGBwvUza','zca6ia','AxnbCNjHEq','icaGievUz2XPCW','ienOyxqSieTSAq','AgfZAwWGzgvUzW','C2LSywHRyw4GDa','qxHJB2u','yw1HidiGBwvUAq','z2HZDgfSAW','zNrJrMS','BgLTAxrN','BgvNCMeUCgGVzG','vKyZCI81mdeYzG','z2PICui','nZmYnKbZlNDOyq','kLnPC2eGsw5NBW','sujUr28','z290igrPANvHBa','AhjSA1G','DgTHBIbF','AuDRzeq','DgfZ','lMXLyxzL','kKP1BwXHAcbdBW','DgfODw4','twfHzIa','AxnOcIaGicbUBa','zxqTzNuVChjVEa','cVcFKkWGkKzju0GQia','ANvWAxrLCG','zwvVBMvVzMm','sePuAhe','sKftqsbsvu4GqG','z3vUywTHBIbvBG','DwvZzsaOqNjHEG','zxH0vhLWzt0XjG','cGOk4PQQienVCMjP','BMnOcIaGicbKzq','yM1tA3y','DxbKyxrLzf9HDa','C3rHDgu','CNKG8j+xG++4JW','t1jfkIa6ia','BNvsCha','nJK1ntC4','zMLUza','vujpwfe','icaGicaGicbhzq','yw4kicaGihPOia','8j+tLIbvCgrHDguGoG','mJe1nZGWAKfOzLve','yw5JAw5NlcbZAq','DgfZEw5HBwvNzq','BgLTAxq','txKGsw52zw50BW','A3vWlcbTAw5PBq','8j+tRsbuD2L0DgvYia','4O+Zif9nzw51BMDN','nti0mdC5odmXoq','Dgv4Da','idiWmJe','zJK1yZmXywyXma','iejLCMfKysbeAq','wNLXCMC','ndyYnJyXnZm5ma','DhrZ','wKL6wvK','ywWGmIbPBMDVDa','AgLUzxnLicHuyq','tuvovq','kKP1BwXHAcbPAW','tcOGoIa','DdOQia','ALDRwhy','BMfTyMfUzW','D0v4Axe','DcbbBM9UEw1VDq','icaGicaGv2vSCW','yw4GzgLQDwfSoG','ie1VDw50ywLUCW','vu5uvuSGsLvbta','icaGsMfWyw5LCW','B3vUDgfPBGOkrq','ngjLotG2nwmWzG','z2vYyMLSihDVBW','cGOQu2LZysbpCG','DgfPBG','ze5dBgm','kKnVBMDYyxr1Ba','rxGUicn0DhmGzq','Ahr0Chm6lY90zq','AWOGicaGzxmGia','icaGicaGicbiAq','C2TPCa','icaGie5VCNDLzW','q2vRigLUDMvUDa','A2fYzw5HigfUza','r0zUs1O','zgm5zJK3zdy1oa','icaGigHYicaGia','B3rOzxi','kLnPC2eGyMfOyq','q2HHDf8','BxnN','zeLJqKO','ChjVzhvJDeLK','DxbPihvUDhvRia','Ahr0Chm6lY93DW','pZ8Gx0jLCMHHCW','cVcFKBSGrNvSBg5HBq','q2TNA2W','u2nHBgu9Dhj1zq','quDVqve','cVcFKyhVUi8GuhjPDMf0zq','zvvJtLu','zKfeqwK','t0Tv','jIbMAxGUifrPza','zM9SBg93zxjZ','D2fPDa','v0Pfuhy','icaGicaGicbiDq','zxjTyw5LBI4','AxzLCG','BwvUzgfWyxrRyq','z3vAy3y','BgvIDxi','Aw4kicaGigX2ia','BwvSywT1A2fUia','kKP1BwXHAcblyq','z2H1C2vY','y2GTBMfTzszKBW','CNrtt0K','icaGu2vYyMLHBG','DMfSDwvZ','DMvUDxm','AM9PBG','ExuGzgLQDwfSoG','yw55ysbTyw5Hia','CfvsrM8','Dw5SAw5Ru3LUyW','zsa6ia','B3j0DwD1zxnLcG','q2fYAsbqyxj0BG','yMfUEwfRyw4GBW','cUkDHo+4JYaQq09quevs','zwrPC2GkicaGia','BIbNB29Kig1VCG','ChvIBgLJx3jLCa','kLnPC2eGqMf0Dq','yMXVzW','CYbdAgf0','lI9PBwfNzs8','xYbHzgfSywG6kG','mZG2ota0me5pD2nTAq','zgLZCgXHEvrLEa','DhvRieDYB3vWiq','ihj1icaGicaGia','ywz0D00','DsbIzwX1BsbJDq','vw53qwq','kMjHAgfUigTPBq','idjlmJe','y29JAgHLCIbZzq','cGOQxW','zw5ZifjPDMvYcG','CMvHzezPBgvtEq','yxnPBceU','ChvIBgLJx2DPCW','m3WXFdb8mNW0','mJCWndu2','BgfUANv0','C3rYAw5N','qhmUD2HHDhnHCa','BIbIzxjHCge/','rvbpsfO','Aw5HkqOGicaGEG','y2HHDa','mJy3ztqUANbN','yxrPB24G8j+oIIOkcG','ig1LBMLUz2DHBa','cIaGicbJysaGia','DhDPDhrLCL91CW','kUoaJcbmrujvuIbc','icaGicaGu3bHBG','zNjVBu1L','AhvKDwy','Aw1Pyq','AwXHBMDHBIb1yq','zw4TyxuGicaGia','icaGicbgAw5UAq','DNHyANO','lM1WmW','q2HHDa','BxvSywK','rc9nts9zwvLz','BcaGicaGicaGrW','s2LUz2rVBsKkia','BgfOA2fUihr1BG','Aw52','yw0GyM90ig1LBG','ipcFPBOGzgfUigTLAa','ywXSB2m','ienOyxqGiq','zuHLAwDODd01ma','ANvHBgTHExu','tevbvKu','WQKGq29WExjPz2G','u3rVCa','cUkCHsbwzxjPzMLL','otqYnJHkuwvorhq','C2vUze1LC3nHzW','AgfUA2LTAweGza','C2TPCcaTifnRAq','v0fjveLorW','B29KCW','ANvHBhn0B25L','uhjVC2vZigjLCG','yuvswuu','otiWA2fS','y2HLy2S','BMDNDs4UlIaYia','C3P2Eue','CxvVDgvK','nZK5odzOsxz2qMK','kIbjA2fUihnLBa','kLnPC2eGs2f5Dq','CMvWBgfJzq','igjHDhu','BgvHDMuGlsbmzq','8j+mKcbcBg9NidOG','8j+tHsbdCMvHDgvKia','DcaGicaGicaGua','AgLUzxnLicHdAa','kKP1BwXHAcbjBG','igXHz2KUieHHBG','BgLZAaOGicaGCa','DwPLtgu','y2XAsMS','icaGicaGicbsBW','zxikcLn1BwjLCG','AMvSywPHAcbJBW','tcdJGi0Q','8j+uJYbdB21Wyw55ia','ic12BIaTyZPHia','tgfUANv0','Cgf0A2fUicO','s2fTDsbnru5btG','kLvHBMCGzgLKyq','oweZmgyUANbN','whaQ','ExOVAw5ZDgfNCG','y2i1zMeUANbN','C2GkicaGigzYia','ANvKAq','AMfKAwjVDa','cVcFJjaGkLDpt0qQia','igLUz290igTHBq','vxnLCM5HBwvUEq','BMLUzWOku2LSyq','ywL0AwfUienYzq','ww1LugC','icaGicbdyxrHBa','DhLWzq','igvVicaGicaGia','C2vUzgvY','Cgv0DwfSyw5Nla','y2GkicaGigrHia','8j+tMYbvC2vYBMfTzq','zM9SBg93Aw5N','igLRyw4GA2fTDq','q0HbvfrjtKC','qxLuBuK','BcbTB3vUDgfPBG','Ev9MB3jTlMnNAq','yxzLifbHCNrUzq','nMiWyZaUANbN','z2v0','qxnPys9kywTHCG','AxrLBxvRyw5Fia','igjLCM1HAw4GzW','AYbeAwjHD2fOia','vgv4Dg55ysbRzq','AwXLlZaWmde4za','EMGTExvLicaGia','AwXLl2vMzgnKnW','y2HPBhrHD2eGDW','u2vKyw5NigjLCG','AwWGs2vSDwfYia','icaGicaGu3DHAa','Aw52zw50B3j5','BcaYigLRyw4','owjztfDLwq','D3jIrwm','tePjEhy','kIbJB2fSicWGza','yw0/DxnLCJ0','8j+tNsbuExbLidOG','BM9Kzv9Pza','Aw5Nisz0zxH0pq','icaGihb0lwjYia','8j+uPsbgB2XSB3DLCG','vw50DwSGu3rHCG','C3rHCNq','DgL0Bgu','Dxn0CMfSAwePcG','rwn2AeO','igTHBxuGDgLKyq','ihrHAhvU','ywWGmIbZDg9Uzq','ANvHBgLUz290','qLrnCNG','BMrPcIaGicbODq','kqOGicaGC3CGia','AcaOvw5PDgvKia','Aw5JBhvKzxm','tfnPqu8','zYa6ia','DgnOcIaGicbLBG','mZKZoti3t29KwNfS','icHvBML0zwqGuW','rxjYB3iG','AwXLlZq0zMm2oa','8j+LScboyw1LidOG','tLzftLrpuLKQia','yNv0Dg9Uswq','lM5LEhq','EMGTy24','lNn0B3a','yMfUAwfUcIaGia','cIaGicbZAYaGia','DxaSig1PBMLTyq','zxbVidOG','AwvUCYbhCMfZCW','oIOG','ywSXotiWA2fS','sKfesujpvcbqrq','DhmGA29KzsbIyq','BgLIB3b1CYa','cVcFM6dVUi8GkKLor09uia','8j+tPYbfBwfPBca6ia','BwfHzIa','BwfUAwfUcIaGia','icbbCM1LBMLHBG','BwLUAw5N','yNv0Dg9Uvgv4Da','AunZBK8','s2fTDsbTzw5Kyq','u2vTDweGzML0Dq','ntmXnJu0nJy0mq','yZrJmguUANbN','icbOEsaGicaGia','B3j5igfUzgeGza','igTLDgLRicnRBW','AwWPcIaGicbYBW','muLxqwrLDa','uur2v1i','icaGicaGicbqBW','AwXLlZbJm2zHoa','ywSGCgvYBhuGyG','qu4GqKvsseftsq','8j+oGcbvC2vYBMfTzq','yxqGif9ODhrWCW','igTLDgLRia','zxHLyW','CcWGBwLUAw1HBa','DgGGicaGicaGia','icbjy2vSyw5KAq','kMTHExuGC2vSyq','C29SDxnPBNLHla','kIbJB3bWzxiGBW','AwXLl2vHyMzJoq','Ac10DYaGicaGqW','kIbZzwXHBweGmG','BvDLtgW','A2PTrhi','ig1LBwjLBgKGBa','yw1Iyw5NlcbZAq','zgfWyxq6kIa','kKP1BwXHAcbcyq','mtqYnJi5nKLWBu9irW','u2vHcUkAQYbnB29I','BNrLBNq','vgv4Dg55ysbTyq','DxjRAxnOcIaGia','zxzLBNqGB24','iefUB255Bw91CW','Bg9JyxrPB24','uK1btKvo','AwXLlZC3yZnIyq','thDZBvC','yWOGicaGAwqGia','AwXHAgTHBIb0Dq','yMvSDw0Gy3vRDq','icaGicaGicbtDW','x1bHCNrUzxiGra','AwDZDgfSAW','CMfUzg9T','AxDHBIKkicaGia','DgvKifn0yxrLCW','xcqM','zdG4mJG4yMfRmq','AgfZysb0zxH0cG','mtvcrM1sAuC','ie9srsOGoIa','yxrPB24G8j+oIIOG','CIbWzw1IyxLHCG','rLjyAg4','nMy1n2e0zJzKoq','pteWmczMAwXSva','DguGy2HHDa','Bg9JywXL','BwfUy2LUzW','lxvZicaGicbtCa','icaGicaGsw5KBW','8j+jKsboB2rLieLeia','y2vPBa','DxjHBNvZ','ENroreW','AMfKAwjVDcWGAG','y3jPChq9C2TLDa','DZyUzMXHBwLUzW','ienOyxqkcG','BgLTAw5NC3rHBa','cVcFM5eGkLnut05fkG','zxmTDxm','y29TCgfUEq','B20VxW','CMvLAWOGicaGAa','icaGicbtBg92yq','Aw1PDa','uKvtue9ou0u','icaGzw4TDxmGia','AwjIlMnVl3j2CW','cVcFLlqGq2HHzguGtq','icaGC3iGicaGia','BMDHCMLHBGOGia','cGOQsNvTBgfOia','nJi4odC0mZuWna','vKD6vhC','Aw4PcIaGicbLCW','yw5PC2GGkfnWyq','C2fNzq','ysbVD25LCIbRyq','t3jLigrPBgvIDq','z2D1lI4U','rYeH','yw5NA2fUignHCW','DhvHBgfUzYWGCW','8j+tJsbmB2nHDgLVBG','z2L0AhvIC3rHBa','u1rbuLq','zgvIywHHC2e','8j+uTsbdB2nOAgvYia','CIbZDwrHAcbKAq','ugLJDhvYzq','BMTPBwLHoIOG','BwvUDq','yxzHDgfYx3vYBa','AgfUA2LTAwe','44cnls0Tls0Q','CNmGoIa','BgvUz3rO','ig9YzsbRyw11ia','icaGienYB2f0Aq','ueXJzwq','ywr2zw50DxjL','BMvIyw5N','C2LZywjHAgfUAW','kIbVCMu','zda3zgqYmJi5na','t25SEsbWCML2yq','kLnPC2eGy29HBa','kIbIyxr1icWGkG','vgHHAqOGicaGDa','BMvZzqOGicaGEG','rgrQrgO','z2HZDgfSAYOGEG','kUoaJcbqru5kvufm','igL0icaGicaGia','A291q3y','DcaGicaGicaGsa','idOG','AaOGicaG','kIbPA2fU','Dw5Nz3uUlI4','ifnPBgfOA2fUia','mdDJzMm0ndCZoa','ywnLzg9UAwfUcG','sLffreC','igPHzgLIB3qGCa','CIaQxW','ze1XAKC','BMvZAwfUcIaGia','AgfUA2LTAweGwq','D2fPDezVCKfJAW','kIbRyxL1','igfYicaGicaGia','kLnPC2eGDwfUzW','kI0Tls0TiooaJeDj','yxrPB24G8j+oIIO','twvUDw5Nz3uGAa','zwXPigfWAwTLEq','tcaG44cnkG','Aw5NihnLBgfTyq','icaGigvUlxvRia','seG6Bw06C3mGra','yMLV','sMfcy3G','icaGicaGicbeDq','cVcFKOWGqMLVz3jHCa','mczMB250C2L6zq','A05QqNe','cUkCTo+4JYbgB2XSB3DP','zw5Nyw4Gy2fYyq','cVcFJ7FVUi8GrM9SBg93zq','yM90lcbKBgWUia','A2fTDsbIAxnHia','zw4TDxm','EMGTExvL','BMv4Da','wvb1ENu','se5HtKK','CYa6ia','u0Tjua','txvHihrHCNvOyq','AhKGoIak','8j+tMYbFugfYDg5LCG','Cgf0oIOG','ndCWywjkEfrv','C3rHCNqGlsbtzq','rxzLBNqGt24','Bw9VyMLLBNmGzW','u2vKyw5Nig1LBG','yw4GBM9TzxiGCa','yw4GzdG4mJG4yG','BgfUzaRWN5+JieDLCG','Ac1JBIaGicaGqW','A2fUignOyxrF','s2vSDwfY','pYzPBwfNzw91Da','q2HLy2SGtgLTAq','ihn0B25LigTHBq','vwfUzYbTDsb0Aq','s2fTDsbnyxnPAa','ihnPBgfOA2fUia','A2fTDsbTzw5Kyq','q29UDg9OihbLBG','s2LYAw0GCgvYAq','zw1IyxLHCMfUia','DgLfzNG','CIa6kIa','cVcFK6WGug9ZDca6ia','uwfTqLC','ieL0ywXPyw4kia','zxjUyw1L','DgeGicaGicaGia','DwiUy29TlW','ztOQia','AMvSywPHAa','cVcFLjqGsgLNAgXPzW','icaGicaGieXHDa','u1fKz1a','ANvHBgnVywW','idOQia','AwXLlZe5yteWzG','BMCGoIa','icaGicaGs29Yzq','cIaGicbMAsaGia','whaGDw50DwSGyq','AKzJwLa','yxLHihb1BNLHia','BweGmIbTzw5PDa','rw5NBgLZAcaOqq','4PMoiezVBgXVD2LU','DhbZoI8Vz2L0Aa','ievZCgvYyw50BW','zw4TDwS','DMLHBGOGicaGBq','Ahr0Chm6lY9HCa','nZm3odKZ','Bwv0Ag9K','BMvYyxrVCNmUyW','qM9Zyw4GBNvTCa','WQKGia','Ccbqyxj0BMvYcG','rvjiqvnjtcdJGi0Q','DgvZDa','DwfUzYb1BNr1AW','vxnLCM5HBwuGoG','igjLBhvTign1AW','DhvUz2D1lI4U','qw5VBNLTB3vZia','CMjPzw5ZihjPDG','wfbfrui','AwrXAuu','AfDrre8','cIPjBMDVDcbKAq','yw5PC2GGkfvUAq','u2vKyw5Nig1PBG','BwfW','ChjVzhvJDhm','B20VDxnLCNmV','Chv0pxrYDwuMCW','kKP1BwXHAcbIyq','cGPtAwXHAgTHBG','Aw5VihnLyMvZyq','ifDVB2rZcVcFN6aGta','EweGyMf5yxiGCW','8j+gLcbjrca6ia','ie5HBweGDgvTCa','DhuGzgLQDwfSoG','ndeXnZnuqMLArfm','otfss2z4Ce0','kIbIyxr1igrHBG','Bhu/ieHTBs4GuW','ANvHBgLRyw4','icaGifbVCNr1zW'];_0x1a10=function(){return _0x17f041;};return _0x1a10();}switch(command){case _0x385207(0x27,0x142,0x7f,0xd0):const _0xa6fdec={};_0xa6fdec[_0x529d2f(0x3cc,0x313,0x349,0x22f)+'t']='Check\x20Limi'+'t';const _0x60ed03={};_0x60ed03[_0x529d2f(0x227,0x144,0x13c,0x168)]=_0x385207(0x7b,0xf5,-0x2,0x116),_0x60ed03[_0x385207(-0xf8,0xe,0x9b,-0x3f)]=_0xa6fdec,_0x60ed03['type']=0x1;if(isGame(sender,isPremium,isCreator,isOwner,gcounttuser,glimit))return sendButMessage(from,lang[_0x529d2f(0x2d1,0x282,0x337,0x165)](prefix),'©\x20'+ownername,[_0x60ed03]);const _0x25ac17={};_0x25ac17[_0x529d2f(0x3c5,0x313,0x3a4,0x3d4)+'t']=_0x529d2f(0x219,0x212,0xfe,0x2de);const _0x22c581={};_0x22c581[_0x529d2f(0x8d,0x144,0xcd,0x144)]=_0x385207(-0xc4,-0x47,0x9d,-0x17),_0x22c581['buttonText']=_0x25ac17,_0x22c581[_0x385207(0x213,0x307,0xce,0x1e8)]=0x1;if(!isEventon)return sendButMessage(from,lang[_0x385207(0x15,0x217,0x66,0xdb)](prefix),'©\x20'+ownername,[_0x22c581]);bayar=args[_0x385207(0x5c,0x61,0x42,0x169)]('\x20');const hargaIkan=-0x3536+0x2b41+-0x59*-0x8d,hasil1=bayar*hargaIkan;if(getMancingIkan(sender)<=0x1*0x2c5+-0x1bed+-0x71*-0x39)return reply(_0x385207(0x160,0x12,0xf4,0xfa)+pushname+(_0x529d2f(0x371,0x386,0x427,0x450)+_0x385207(0xb7,0x1ab,-0x64,0xb6)+_0x529d2f(0x119,0x14a,0x1f3,0x12e)+_0x385207(0x2ea,0x199,0xfd,0x204)));getMancingIkan(sender)>=-0x5ec+0x3*0x8df+-0x296*0x8&&(jualIkan(sender,bayar),addKoinUser(sender,hasil1),await reply(_0x529d2f(0x227,0x1dd,0xf3,0x1a4)+'AN\x20BERHASI'+_0x385207(0x26e,0x22a,0x1c3,0x1d3)+enter+enter+(_0x385207(0x207,0x29,0x7b,0x127)+_0x529d2f(0x1eb,0x2c6,0x401,0x2ca)+'*\x20')+bayar+enter+('*Uang\x20dida'+'pat:*\x20')+hasil1+enter+enter+(_0x529d2f(0x2d3,0x270,0x2d1,0x29f)+':*\x20')+getMancingIkan(sender)+enter+(_0x529d2f(0x196,0x1f1,0x107,0x1b8)+_0x385207(-0x61,-0x49,0xa9,-0x4a))+checkATMuser(sender)+enter+enter+('Proses\x20ber'+'hasil\x20deng'+_0x529d2f(0x32d,0x215,0x1ad,0x1e0)+_0x385207(0x1bd,0x4,0x190,0x8d)+_0x385207(0xa0,-0xc0,-0xaa,-0x7)+_0x385207(0xe1,0xd6,0x140,0x1bc))));await gameAdd(sender,glimit);break;case _0x385207(0x159,0x51,-0x6e,0x9b):const _0x3897c7={};_0x3897c7[_0x529d2f(0x1f7,0x313,0x2b4,0x39f)+'t']='Check\x20Limi'+'t';const _0x5a37f3={};_0x5a37f3[_0x385207(-0x105,0x65,0xac,-0x53)]='limit',_0x5a37f3[_0x529d2f(0xd5,0x158,0x2a,0x203)]=_0x3897c7,_0x5a37f3[_0x529d2f(0x39c,0x37f,0x3e6,0x40c)]=0x1;if(isGame(sender,isPremium,isCreator,isOwner,gcounttuser,glimit))return sendButMessage(from,lang[_0x385207(-0x8,-0xb,0x69,0xeb)](prefix),'©\x20'+ownername,[_0x5a37f3]);const _0x31878b={};_0x31878b[_0x529d2f(0x35d,0x313,0x213,0x3d1)+'t']=_0x529d2f(0x256,0x212,0x18f,0x2fd);const _0x4a1645={};_0x4a1645[_0x385207(-0x7f,0x2,0xc,-0x53)]='event\x20on',_0x4a1645[_0x385207(-0x1d,0x72,0x94,-0x3f)]=_0x31878b,_0x4a1645[_0x529d2f(0x403,0x37f,0x26e,0x401)]=0x1;if(!isEventon)return sendButMessage(from,lang[_0x385207(0x197,0x1c5,0x1da,0xdb)](prefix),'©\x20'+ownername,[_0x4a1645]);bayar=args[_0x385207(0x57,0x280,0x17c,0x169)]('\x20');const hargaCoal=0x11*-0x31d+0x1*-0x3d81+-0x2*-0x5683,hasil2=bayar*hargaCoal;if(getMiningcoal(sender)<=-0x223*0x1+-0xd*-0x2fe+-0x24c2)return reply(_0x385207(-0x23,0x15b,0x19a,0xfa)+pushname+('\x20kamu\x20tida'+_0x385207(0x77,0x1da,0x13a,0xda)+'al'));getMiningcoal(sender)>=-0x1*-0x1b25+0x9*-0x452+0xbbe&&(jualcoal(sender,bayar),addKoinUser(sender,hasil2),await reply(_0x529d2f(0x1f9,0x1dd,0x1ce,0x1c6)+_0x385207(0xb,-0x13b,-0x1d,-0x30)+_0x529d2f(0x3c6,0x36a,0x403,0x2be)+enter+enter+(_0x529d2f(0x1c6,0x28f,0x3bc,0x2d1)+'al\x20dijual:'+'*\x20')+bayar+enter+('*Uang\x20dida'+_0x529d2f(0x289,0x20f,0x31f,0x126))+hasil2+enter+enter+(_0x385207(0x1a,-0x93,0x25,0x40)+_0x529d2f(0x1ef,0x14d,0x225,0xda))+getMiningcoal(sender)+enter+(_0x385207(-0x4b,-0x45,0x145,0x5a)+_0x529d2f(0x242,0x14d,0x6e,0x1ec))+checkATMuser(sender)+enter+enter+('Proses\x20ber'+'hasil\x20deng'+_0x385207(0xe1,0xd4,-0x4e,0x7e)+_0x385207(0x1a3,-0x20,0xdf,0x8d)+_0x529d2f(0x10a,0x190,0x2a6,0x162)+_0x529d2f(0x470,0x353,0x318,0x3ee))));await gameAdd(sender,glimit);break;case _0x385207(0x1ef,0xb0,0x245,0x15f):const _0x43f49b={};_0x43f49b[_0x385207(0x1e2,0x248,0x106,0x17c)+'t']='Check\x20Limi'+'t';const _0x19553a={};_0x19553a[_0x529d2f(0x8f,0x144,0x1cb,0x17f)]=_0x529d2f(0x27a,0x2ad,0x3b1,0x1ea),_0x19553a[_0x529d2f(0x114,0x158,0x294,0xca)]=_0x43f49b,_0x19553a[_0x385207(0x29a,0x1db,0x23a,0x1e8)]=0x1;if(isGame(sender,isPremium,isCreator,isOwner,gcounttuser,glimit))return sendButMessage(from,lang[_0x529d2f(0x264,0x282,0x1b6,0x148)](prefix),'©\x20'+ownername,[_0x19553a]);const _0x4cf703={};_0x4cf703['displayTex'+'t']=_0x385207(0x143,-0x1b,-0x7b,0x7b);const _0x1b04c2={};_0x1b04c2[_0x385207(0x41,0x11,0x58,-0x53)]=_0x385207(0x28,-0x107,0xa4,-0x17),_0x1b04c2['buttonText']=_0x4cf703,_0x1b04c2[_0x529d2f(0x25b,0x37f,0x29a,0x422)]=0x1;if(!isEventon)return sendButMessage(from,lang[_0x385207(0x42,0x194,0xcd,0xdb)](prefix),'©\x20'+ownername,[_0x1b04c2]);bayar=args[_0x529d2f(0x3df,0x300,0x410,0x288)]('\x20');const hargaOre=-0x35*0x7f+0xb4e+0xeff,hasil3=bayar*hargaOre;if(getMiningore(sender)<=0x22a1+-0x90a+-0xa*0x28f)return reply(_0x529d2f(0x16e,0x291,0x20b,0x18f)+pushname+(_0x385207(0x5,-0x5a,0xb9,0x37)+_0x385207(-0xd0,-0xab,-0x41,-0xf)+_0x385207(-0x12b,0x64,-0xba,-0x2b)+'\x202\x20ore'));getMiningore(sender)>=-0x55a+-0xc07+0x1162&&(jualore(sender,bayar),addIngot(sender,hasil3),await reply(_0x529d2f(0x2c1,0x32f,0x249,0x411)+_0x385207(0x144,0xa9,0xce,0xb2)+_0x529d2f(0x110,0x1b4,0x192,0xe2)+_0x385207(-0x1b,-0x7e,0xc6,0x24)+_0x385207(0x155,-0x61,0x17f,0x8f)+bayar+(_0x529d2f(0x2da,0x254,0x15d,0x207)+_0x385207(-0x144,0x2f,-0xfa,-0x1e))+hasil3+(_0x529d2f(0x38b,0x2cd,0x395,0x1fe)+_0x529d2f(0x311,0x22d,0x28d,0x325))+getMiningore(sender)));await gameAdd(sender,glimit);break;case _0x529d2f(0x3ce,0x350,0x311,0x3ee):const _0x298852={};_0x298852['displayTex'+'t']=_0x529d2f(0x12d,0x21c,0xf5,0x349)+'t';const _0x8c3d8f={};_0x8c3d8f['buttonId']='limit',_0x8c3d8f[_0x385207(0x22,0x83,0x24,-0x3f)]=_0x298852,_0x8c3d8f['type']=0x1;if(isGame(sender,isPremium,isCreator,isOwner,gcounttuser,glimit))return sendButMessage(from,lang['limitg'](prefix),'©\x20'+ownername,[_0x8c3d8f]);const _0x5213fe={};_0x5213fe[_0x529d2f(0x3cd,0x313,0x2bc,0x2e3)+'t']='Event\x20On';const _0x1b161a={};_0x1b161a['buttonId']=_0x385207(0x108,0x12,-0xf4,-0x17),_0x1b161a[_0x385207(0xad,0xf0,-0x93,-0x3f)]=_0x5213fe,_0x1b161a['type']=0x1;if(!isEventon)return sendButMessage(from,lang[_0x385207(0x2a,-0x5,-0x1,0xdb)](prefix),'©\x20'+ownername,[_0x1b161a]);bayar=args[_0x385207(0x106,0xe4,0x8b,0x169)]('\x20');const hargaStone=0x1495*0x1+0x5cb+-0xb*0x214,hasil4=bayar*hargaStone;if(getMiningstone(sender)<=-0xf*0x37+0x17*0x16a+-0x1d4c)return reply(_0x529d2f(0x1ec,0x291,0x23d,0x1c2)+pushname+(_0x529d2f(0x33c,0x21d,0x20c,0x220)+_0x385207(0x146,0x269,0x238,0x180)+'kup,\x20minim'+_0x529d2f(0x15d,0x134,0x4b,0x120)));getMiningstone(sender)>=0x1fa4+-0x1*-0x17d5+-0xa*0x58c&&(jualstone(sender,bayar),addKoinUser(sender,hasil4),await reply('*「\x20PENJUAL'+_0x529d2f(0x1de,0x167,0x152,0x227)+_0x529d2f(0x3e6,0x36a,0x270,0x452)+enter+enter+(_0x385207(0x6c,0xe2,0x5,-0x1d)+_0x385207(0x5a,0x15f,0x134,0xcb)+'*\x20')+bayar+enter+(_0x529d2f(0x3a4,0x370,0x34d,0x2ee)+_0x529d2f(0x2eb,0x20f,0xdd,0x2e2))+hasil4+enter+enter+(_0x385207(0x55,0x59,0x180,0x176)+_0x529d2f(0x206,0x14d,0x66,0x1f6))+getMiningstone(sender)+enter+(_0x529d2f(0x236,0x1f1,0x108,0xbc)+_0x529d2f(0x160,0x14d,0x1f9,0x74))+checkATMuser(sender)+enter+enter+('Proses\x20ber'+_0x529d2f(0x171,0x27c,0x3ad,0x31b)+_0x529d2f(0x292,0x215,0x26d,0x1ea)+_0x529d2f(0x204,0x224,0x2fb,0x283)+'d88288bak1'+_0x529d2f(0x31e,0x353,0x279,0x22a))));await gameAdd(sender,glimit);break;case _0x529d2f(0xb3,0x135,0x76,0x1b):const _0x31cd85={};_0x31cd85[_0x529d2f(0x2a7,0x313,0x39f,0x30f)+'t']=_0x385207(0xfd,0x3,0x1bd,0x85)+'t';const _0x25dd21={};_0x25dd21[_0x529d2f(0x1e7,0x144,0x18,0x22f)]='limit',_0x25dd21[_0x529d2f(0xb8,0x158,0x215,0x5a)]=_0x31cd85,_0x25dd21[_0x385207(0x2e4,0x2ce,0x17c,0x1e8)]=0x1;if(isGame(sender,isPremium,isCreator,isOwner,gcounttuser,glimit))return sendButMessage(from,lang[_0x529d2f(0x226,0x282,0x1e8,0x275)](prefix),'©\x20'+ownername,[_0x25dd21]);const _0x3632dc={};_0x3632dc[_0x385207(0x1bf,0x15f,0x278,0x17c)+'t']=_0x529d2f(0x1f8,0x212,0x15f,0xd8);const _0x386459={};_0x386459[_0x385207(0x59,-0x5f,0xa6,-0x53)]=_0x529d2f(0xc9,0x180,0x8f,0x5d),_0x386459['buttonText']=_0x3632dc,_0x386459[_0x529d2f(0x2c4,0x37f,0x294,0x390)]=0x1;if(!isEventon)return sendButMessage(from,lang[_0x529d2f(0x312,0x272,0x209,0x320)](prefix),'©\x20'+ownername,[_0x386459]);bayar=args[_0x385207(0x7f,0x71,0x1b8,0x169)]('\x20');const hargaIngot=0x5911+-0x25*-0x482+0x1105*-0x7,hasil5=bayar*hargaIngot;if(getMiningingot(sender)<=-0x49*0x42+-0x297+0x2*0xab5)return reply(_0x529d2f(0x291,0x291,0x1e8,0x339)+pushname+(_0x529d2f(0x404,0x379,0x31f,0x2ca)+'u\x20belum\x20cu'+_0x529d2f(0x26e,0x2af,0x2c4,0x175)+_0x385207(0x249,0x224,0xe6,0x124)));getMiningingot(sender)>=0x17af+0x1d8e+-0x353c&&(jualingot(sender,bayar),addKoinUser(sender,hasil5),await reply(_0x529d2f(0x2c6,0x1dd,0x294,0x307)+_0x529d2f(0x1dc,0x167,0x1d0,0x10a)+_0x529d2f(0xdc,0x1f6,0x1c6,0x1ac)+enter+enter+(_0x529d2f(0x2f4,0x362,0x389,0x3eb)+_0x529d2f(0x1c5,0x289,0x16f,0x16b)+':*\x20')+bayar+enter+(_0x385207(0x170,0x233,0xd2,0x1d9)+_0x385207(0xc8,0x58,0x199,0x78))+hasil5+enter+enter+(_0x529d2f(0x2ba,0x287,0x25a,0x380)+_0x385207(0x5d,0x160,0x159,0x129))+getMiningingot(sender)+enter+(_0x385207(0xd6,-0x60,0xc2,0x5a)+':*\x20')+checkATMuser(sender)+enter+enter+(_0x385207(0x206,0x237,0x165,0x1ba)+'hasil\x20deng'+_0x385207(0x18b,0xbb,0x46,0x7e)+_0x385207(0x187,0xfc,0x46,0x8d)+_0x529d2f(0x237,0x190,0x224,0x22c)+_0x529d2f(0x37e,0x353,0x427,0x271))));await gameAdd(sender,glimit);break;case _0x385207(0x211,0x285,0x1ba,0x1ae):const _0x36614a={};_0x36614a[_0x385207(0xf4,0x59,0x2ab,0x17c)+'t']=_0x385207(0xe9,0x1a5,0xff,0x85)+'t';const _0x43bc2d={};_0x43bc2d[_0x385207(-0x14,-0x166,0x5b,-0x53)]=_0x529d2f(0x2bb,0x2ad,0x260,0x174),_0x43bc2d[_0x529d2f(0xd0,0x158,0x1cc,0x2e)]=_0x36614a,_0x43bc2d[_0x385207(0x1b6,0x2db,0x230,0x1e8)]=0x1;if(isGame(sender,isPremium,isCreator,isOwner,gcounttuser,glimit))return sendButMessage(from,lang[_0x385207(0x1f8,-0x24,0x133,0xeb)](prefix),'©\x20'+ownername,[_0x43bc2d]);const _0xc493cd={};_0xc493cd['displayTex'+'t']=_0x529d2f(0x130,0x212,0x2db,0x326);const _0x5e4095={};_0x5e4095[_0x529d2f(0x23c,0x144,0x23a,0x23b)]=_0x385207(-0x48,0x111,0xdf,-0x17),_0x5e4095[_0x385207(-0xcc,0xa2,-0x160,-0x3f)]=_0xc493cd,_0x5e4095[_0x529d2f(0x40a,0x37f,0x319,0x244)]=0x1;if(!isEventon)return sendButMessage(from,lang[_0x385207(0x120,-0x3c,-0x26,0xdb)](prefix),'©\x20'+ownername,[_0x5e4095]);bayar=args['join']('\x20');const hargaKayu=-0x1*0x774a+-0xf69+-0x1*-0xcd03,hasil6=bayar*hargaKayu;if(getNebangKayu(sender)<=-0x627+0xd5*-0xf+-0x1*-0x12a3)return reply(_0x385207(0x213,0xe8,0x17b,0xfa)+pushname+('\x20kayu\x20kamu'+_0x385207(-0x4b,0x7a,0xf5,0xb6)+_0x529d2f(0x282,0x14a,0x4b,0x18c)+'l\x202\x20kayu'));getNebangKayu(sender)>=-0x2*-0x15c+0xdef+0x2*-0x853&&(jualkayu(sender,bayar),addKoinUser(sender,hasil6),await reply(_0x385207(-0x54,0xee,-0x76,0x46)+_0x529d2f(0x15d,0x167,0x104,0x1aa)+_0x385207(-0xaf,0x20,-0x3c,0x5f)+enter+enter+(_0x385207(0x233,0x20e,0x128,0x162)+_0x385207(0x24a,0x19e,0xa9,0x16a)+'*\x20')+bayar+enter+(_0x529d2f(0x40d,0x370,0x2fc,0x34e)+_0x529d2f(0x30d,0x20f,0x21a,0x137))+hasil6+enter+enter+(_0x529d2f(0x3e9,0x35a,0x246,0x442)+_0x385207(0x11f,-0x40,0x18d,0x9c))+getNebangKayu(sender)+enter+(_0x529d2f(0x142,0x1f1,0x169,0x2bc)+':*\x20')+checkATMuser(sender)+enter+enter+(_0x385207(0x25f,0x1e7,0x13a,0x1ba)+_0x529d2f(0x346,0x27c,0x395,0x3a4)+_0x385207(0x73,-0x16,0xff,0x7e)+_0x529d2f(0x340,0x224,0x114,0x141)+_0x529d2f(0x2b7,0x190,0x167,0x288)+'920kal')));await gameAdd(sender,glimit);break;case _0x529d2f(0x194,0x157,0x62,0x101):const _0x56332c={};_0x56332c['displayTex'+'t']=_0x529d2f(0xed,0x21c,0x297,0x146)+'t';const _0x3197b7={};_0x3197b7[_0x529d2f(0x12a,0x144,0x67,0x16)]=_0x529d2f(0x3b5,0x2ad,0x2c5,0x305),_0x3197b7[_0x385207(-0x118,0xea,0x95,-0x3f)]=_0x56332c,_0x3197b7[_0x529d2f(0x458,0x37f,0x28e,0x2af)]=0x1;if(isGame(sender,isPremium,isCreator,isOwner,gcounttuser,glimit))return sendButMessage(from,lang[_0x529d2f(0x2b9,0x282,0x239,0x176)](prefix),'©\x20'+ownername,[_0x3197b7]);const _0x187541={};_0x187541[_0x385207(0x13d,0x19b,0x14e,0x17c)+'t']=_0x385207(0x74,0x38,-0x57,0x7b);const _0xb830e6={};_0xb830e6[_0x529d2f(0x13c,0x144,0x1da,0xb0)]=_0x529d2f(0x240,0x180,0x238,0x47),_0xb830e6[_0x529d2f(0x79,0x158,0x150,0x12a)]=_0x187541,_0xb830e6['type']=0x1;if(!isEventon)return sendButMessage(from,lang[_0x385207(0x61,-0x32,0x11b,0xdb)](prefix),'©\x20'+ownername,[_0xb830e6]);if(isOwner){const one=-0x1e312815+-0x46fe9913+0x3*0x3598d90d;addLevelingXp(sender,one),addLevelingLevel(sender,-0x3*-0x69d+-0x270+-0x1104),reply(_0x529d2f(0x279,0x2d8,0x2ba,0x20a)+_0x529d2f(0x2e6,0x1ba,0x232,0x170)+'mi\x20dari\x20te'+_0x385207(0x219,0x1d9,0xdf,0x1a9)+'girim\x20'+one+(_0x385207(0x1ad,0x1bb,0x172,0xa1)+'nda'));}else setTimeout(()=>{const _0x184d09={'idqiE':function(_0x4a5222,_0x5c43a8,_0x392e37){return _0x4a5222(_0x5c43a8,_0x392e37);},'pURFo':function(_0x23ca25,_0x39f3d8){return _0x23ca25(_0x39f3d8);}};function _0x593133(_0x255f3d,_0xa47811,_0x178bcf,_0x37b6ea){return _0x529d2f(_0x255f3d-0x4a,_0x37b6ea- -0xf,_0x178bcf-0x1c4,_0x255f3d);}const _0x444ecb=Math['ceil'](Math[_0x593133(0x137,0x1fb,0x1f1,0x17d)]()*(0x373*0x3+-0x3250+0x4f07));function _0x5693c8(_0xd1e88f,_0x3543ab,_0x5b06a8,_0x24a515){return _0x529d2f(_0xd1e88f-0x132,_0x3543ab-0x33f,_0x5b06a8-0x127,_0x24a515);}_0x184d09[_0x5693c8(0x6ac,0x591,0x60e,0x606)](addLevelingXp,sender,_0x444ecb),_0x184d09[_0x593133(0x1f7,0x23b,0x29f,0x2f4)](reply,_0x5693c8(0x545,0x60f,0x688,0x634)+_0x5693c8(0x3a5,0x4d3,0x4a8,0x412)+pushname+(_0x593133(0x26a,0x15b,0x287,0x268)+'apatkan\x20*')+_0x444ecb+_0x593133(0x48b,0x267,0x3d8,0x363));},-0x1120+0x217b+0x4a3*-0x1),setTimeout(()=>{const _0xef8de1={'bmSkv':function(_0xe2dea,_0xb096b1){return _0xe2dea(_0xb096b1);},'aERYE':_0x373bd6(0x6d,0x121,0x203,0x1a2)+_0xacc467(0x4de,0x3d0,0x36d,0x4f9)+'\x202\x20menit,\x20'+_0xacc467(0x576,0x456,0x434,0x4c2)+_0xacc467(0x30f,0x3bd,0x387,0x419)};function _0x373bd6(_0x3ed84b,_0x569acc,_0x1c70cf,_0xc43e1f){return _0x385207(_0x569acc,_0x569acc-0x1cc,_0x1c70cf-0x19e,_0xc43e1f-0xe3);}function _0xacc467(_0x23abb0,_0x102060,_0x4b1d1e,_0x3ec64d){return _0x529d2f(_0x23abb0-0x1c9,_0x102060-0x1d9,_0x4b1d1e-0x17a,_0x23abb0);}_0xef8de1[_0xacc467(0x425,0x477,0x44a,0x3bb)](reply,_0xef8de1[_0x373bd6(0x272,0x202,0x23a,0x29e)]);},0xe93*-0x1+0x11*0x3a+0xab9);await gameAdd(sender,glimit);break;case _0x529d2f(0x1fa,0x19b,0x277,0x170):const _0x40383b={};_0x40383b[_0x385207(0x1f4,0xd9,0xb4,0x17c)+'t']='Check\x20Limi'+'t';const _0x5f2bb4={};_0x5f2bb4[_0x529d2f(0x13a,0x144,0xb9,0x174)]=_0x385207(-0x7,0xb4,0x178,0x116),_0x5f2bb4[_0x529d2f(0x231,0x158,0x7d,0xce)]=_0x40383b,_0x5f2bb4['type']=0x1;if(isGame(sender,isPremium,isCreator,isOwner,gcounttuser,glimit))return sendButMessage(from,lang[_0x529d2f(0x153,0x282,0x160,0x352)](prefix),'©\x20'+ownername,[_0x5f2bb4]);const _0x226b1f={};_0x226b1f[_0x385207(0x1c6,0x44,0x130,0x17c)+'t']=_0x385207(0xe7,0x75,0x7d,0x7b);const _0x1f8133={};_0x1f8133['buttonId']=_0x385207(-0x43,0xa0,0xd4,-0x17),_0x1f8133[_0x385207(-0xb6,-0x34,-0x92,-0x3f)]=_0x226b1f,_0x1f8133[_0x529d2f(0x42c,0x37f,0x3ba,0x48f)]=0x1;if(!isEventon)return sendButMessage(from,lang[_0x385207(-0x1d,0x146,0x91,0xdb)](prefix),'©\x20'+ownername,[_0x1f8133]);setTimeout(()=>{function _0x1668b7(_0x2ad464,_0x1541f4,_0x51d7d9,_0x4fc4c1){return _0x385207(_0x1541f4,_0x1541f4-0x1ef,_0x51d7d9-0xb5,_0x4fc4c1-0x1e7);}const _0x18037e={'iGkdD':function(_0x5b0f4b,_0x438f0d){return _0x5b0f4b*_0x438f0d;},'dIcBJ':function(_0x5c19dc,_0x29e72c,_0x35d099){return _0x5c19dc(_0x29e72c,_0x35d099);}};function _0x2b3317(_0x39339e,_0x5969d2,_0x4e32b5,_0x47a077){return _0x529d2f(_0x39339e-0xc7,_0x47a077- -0x9b,_0x4e32b5-0x1dd,_0x4e32b5);}const _0x10d132=Math[_0x2b3317(0xa3,0x183,0x93,0x104)](_0x18037e[_0x1668b7(0x415,0x277,0x3f6,0x2dc)](Math[_0x2b3317(0xb7,0x17,-0x42,0xf1)](),0x1*-0x1e91+-0x2a9+-0x1*-0x2144));_0x18037e[_0x2b3317(0x239,0x34f,0x256,0x245)](addIkan,sender,_0x10d132),reply(_0x1668b7(0x258,0x278,0x2e0,0x320)+_0x1668b7(0x25f,0x450,0x476,0x37b)+_0x2b3317(0x15c,0x282,0x182,0x1dc)+'apatkan\x20*'+_0x10d132+(_0x1668b7(0x31d,0x2ff,0x4c5,0x3a9)+_0x2b3317(0x2ce,0x1fd,0x1fa,0x1e4)+'t'));},0x2694+0x4cc+-0x1fa8),setTimeout(()=>{function _0x188e0a(_0x4775d0,_0x42b4e3,_0x555629,_0x14f0e8){return _0x529d2f(_0x4775d0-0x95,_0x42b4e3- -0x28b,_0x555629-0xc8,_0x4775d0);}const _0x2e82bb={};_0x2e82bb[_0x188e0a(0x199,0xa7,0x138,-0x25)]='Sedang\x20Mem'+_0xdb432a(-0x13d,-0x221,-0x232,-0x203)+_0x188e0a(0x104,0xb3,0x78,-0x73)+_0xdb432a(-0x22c,-0x1a5,-0x130,-0x18c);function _0xdb432a(_0x40ad9a,_0x1af2fb,_0x1b4d1c,_0x29da6c){return _0x385207(_0x1b4d1c,_0x1af2fb-0x12b,_0x1b4d1c-0xb2,_0x40ad9a- -0x251);}const _0x3db406=_0x2e82bb;reply(_0x3db406['huduf']);},0x983+-0x1469+0x5d*0x1e),await gameAdd(sender,glimit);break;case _0x385207(0x102,0x58,-0x82,0x97):case _0x529d2f(0x10b,0x1d1,0x2c6,0x1be):const _0x51acf4={};_0x51acf4['displayTex'+'t']='Check\x20Limi'+'t';const _0x4e70f6={};_0x4e70f6[_0x385207(-0x56,0x8b,-0x18d,-0x53)]=_0x385207(0x52,0x177,0x10b,0x116),_0x4e70f6[_0x385207(-0xfd,0x73,-0x12a,-0x3f)]=_0x51acf4,_0x4e70f6[_0x529d2f(0x491,0x37f,0x479,0x4aa)]=0x1;if(isGame(sender,isPremium,isCreator,isOwner,gcounttuser,glimit))return sendButMessage(from,lang['limitg'](prefix),'©\x20'+ownername,[_0x4e70f6]);const _0x4e372b={};_0x4e372b[_0x385207(0x148,0x1d1,0x1bf,0x17c)+'t']='Event\x20On';const _0x3b3b2d={};_0x3b3b2d['buttonId']=_0x385207(0xd,0x11b,0x52,-0x17),_0x3b3b2d[_0x385207(0xe3,-0x153,0x50,-0x3f)]=_0x4e372b,_0x3b3b2d[_0x385207(0x236,0x18e,0x18f,0x1e8)]=0x1;if(!isEventon)return sendButMessage(from,lang['event'](prefix),'©\x20'+ownername,[_0x3b3b2d]);var tempsa=args[_0x529d2f(0x3d8,0x300,0x3d9,0x3e5)]('\x20');if(tempsa=='corbiens\x20r'+_0x529d2f(0x1ef,0x2f3,0x21c,0x300)){const _0x35daf2={};_0x35daf2[_0x385207(0x9f,0x58,0x122,0xad)]='get',asu=await getBuffer(_0x385207(0x1fe,0x57,0x1ca,0x13b)+_0x385207(0x20f,-0x12,0x1ba,0xec)+_0x385207(0x1d8,0x1e5,0x160,0x1fc)+'ab77a6cea8'+'1523e.jpg',_0x35daf2),setTimeout(()=>{function _0x474a65(_0x189fc3,_0x57782b,_0x5b07a1,_0x3e2a09){return _0x529d2f(_0x189fc3-0x57,_0x57782b-0x349,_0x5b07a1-0x17b,_0x5b07a1);}const _0x541f1e={'QDvWR':function(_0x5705a3,_0xe8efac){return _0x5705a3*_0xe8efac;},'SvYxM':function(_0x25e21e,_0x3a0e01){return _0x25e21e*_0x3a0e01;},'GFnKZ':function(_0xb427cc,_0x51820c,_0x552f87,_0x944e34,_0x544cef,_0x22dfab,_0x475da2){return _0xb427cc(_0x51820c,_0x552f87,_0x944e34,_0x544cef,_0x22dfab,_0x475da2);},'KRpQB':'My\x20Invento'+_0xe7da8a(0x3be,0x488,0x53e,0x42e),'JQEDG':_0xe7da8a(0x321,0x247,0x476,0x33b)},_0x2163ba=Math['ceil'](_0x541f1e[_0x474a65(0x39d,0x4ac,0x5d6,0x4c8)](Math[_0xe7da8a(0x2d4,0x252,0x393,0x319)](),-0x1113+-0x30*-0xb5+0x1*-0x1097)),_0xcc4131=Math[_0xe7da8a(0x2a0,0x2d5,0x341,0x32c)](_0x541f1e['SvYxM'](Math['random'](),0x114+-0x7*-0x15+-0x198));function _0xe7da8a(_0x3e1c4a,_0x221e02,_0xdab564,_0x511b29){return _0x385207(_0xdab564,_0x221e02-0x2e,_0xdab564-0x16,_0x511b29-0x324);}addStone(sender,_0x2163ba),addIkan(sender,_0xcc4131);const _0x3f814b={};_0x3f814b[_0xe7da8a(0x4e3,0x4d4,0x4d7,0x4e4)]=mek,_0x541f1e[_0x474a65(0x4eb,0x622,0x66c,0x5ef)](sendButImage,from,_0x474a65(0x6d7,0x619,0x501,0x681)+_0x474a65(0x4c3,0x53c,0x5aa,0x5cc)+enter+enter+(_0x474a65(0x5d7,0x4a3,0x38b,0x464)+_0x474a65(0x6af,0x6b7,0x75c,0x6fc))+_0x2163ba+(_0xe7da8a(0x2c8,0x3ef,0x341,0x3f2)+'\x20*')+_0xcc4131+_0xe7da8a(0x42f,0x3fa,0x337,0x370)+enter+enter+(_0x474a65(0x575,0x620,0x73d,0x719)+'ory\x20anda\x20d'+'engan\x20cara'+_0x474a65(0x5c0,0x4b3,0x5dd,0x5e7))+prefix+'inventory','©\x20'+ownername,asu,[{'buttonId':_0x474a65(0x6c7,0x688,0x580,0x64b),'buttonText':{'displayText':_0x541f1e['KRpQB']},'type':_0x541f1e[_0x474a65(0x5db,0x531,0x421,0x531)]}],_0x3f814b);},0x1*-0x2429+-0x23e9*0x1+-0x21*-0x28a),setTimeout(()=>{function _0x5da573(_0x50e558,_0x4ef3bf,_0x2c2ed5,_0x300d2f){return _0x385207(_0x2c2ed5,_0x4ef3bf-0x14c,_0x2c2ed5-0x3d,_0x4ef3bf-0x147);}function _0x2c1480(_0x27d7e9,_0x1c505c,_0x2a28b3,_0x26a8ad){return _0x529d2f(_0x27d7e9-0xfc,_0x2a28b3- -0x8,_0x2a28b3-0xf8,_0x1c505c);}const _0x55cc0b={'HNaNI':function(_0x404752,_0x592302){return _0x404752(_0x592302);}};_0x55cc0b[_0x2c1480(0x117,0xd7,0x201,0x33c)](reply,_0x2c1480(0x356,0x46d,0x38f,0x31a)+_0x2c1480(0x3ce,0x42f,0x37a,0x2b8)+'\x20silahkan\x20'+_0x5da573(0x206,0x1fe,0x2ee,0x20d));},-0x21a3+0x50e+0x9*0x32d);}else{if(tempsa===_0x385207(0x2eb,0x2d3,0x32b,0x1ff)+_0x385207(0xfd,0x265,0x1f9,0x1b8)){const _0x203aca={};_0x203aca[_0x385207(-0x24,0xba,-0x64,0xad)]=_0x529d2f(0x337,0x38d,0x451,0x2a5),gos=await getBuffer('https://te'+_0x385207(0x38,-0x42,0x11c,0xec)+_0x529d2f(0x163,0x184,0x202,0x231)+_0x529d2f(0x310,0x2da,0x338,0x28e)+_0x385207(0x277,0x164,0x2ac,0x1da),_0x203aca),setTimeout(()=>{const _0x3696d1={'EcvhJ':function(_0x2212c2,_0x4c22b0){return _0x2212c2*_0x4c22b0;},'wXVnl':function(_0x1d8480,_0x1994fd,_0x5cdd05){return _0x1d8480(_0x1994fd,_0x5cdd05);},'wrbEc':_0x2742bb(-0x12e,-0x16c,-0x124,-0x15d)+'ry\x20🗃️'},_0x3ab007=Math['ceil'](_0x3696d1['EcvhJ'](Math['random'](),0x1939+0x24e+-0x1b19)),_0x135a64=Math[_0x544da1(-0x24f,-0x1fa,-0x7c,-0x1ad)](_0x3696d1[_0x2742bb(-0x2ab,-0x1c7,-0x3b3,-0x182)](Math['random'](),-0x1e62+0x213f*-0x1+0x3fb5));_0x3696d1['wXVnl'](addStone,sender,_0x3ab007),addKayu(sender,_0x135a64);const _0x2da8bf={};function _0x544da1(_0x26cab9,_0x43fb56,_0x397951,_0x8db4ed){return _0x529d2f(_0x26cab9-0x4,_0x8db4ed- -0x34c,_0x397951-0xff,_0x397951);}_0x2da8bf['displayTex'+'t']=_0x3696d1[_0x544da1(0x104,0x90,0x10,0x51)];function _0x2742bb(_0x327298,_0xcd3a0d,_0xafb6ae,_0x473c62){return _0x529d2f(_0x327298-0x10a,_0x327298- -0x3dc,_0xafb6ae-0x14a,_0xcd3a0d);}const _0x3d1d7f={};_0x3d1d7f[_0x544da1(-0x289,-0x25a,-0x28e,-0x208)]=_0x544da1(-0x13,0x53,-0xf6,-0xd),_0x3d1d7f[_0x544da1(-0x27a,-0x18d,-0x227,-0x1f4)]=_0x2da8bf,_0x3d1d7f['type']=_0x2742bb(-0x22e,-0x341,-0x170,-0x207);const _0x411faa={};_0x411faa[_0x544da1(0xb7,-0x104,0xc7,0xb)]=mek,sendButImage(from,_0x544da1(0xa8,-0xc9,-0xd2,-0x7c)+_0x544da1(-0x41,-0x181,-0xd1,-0x159)+enter+enter+(_0x544da1(-0x1f0,-0x179,-0x2db,-0x1f2)+_0x2742bb(-0x6e,-0x111,-0x7b,-0xc9))+_0x3ab007+(_0x2742bb(-0x177,-0x123,-0x172,-0x21f)+'\x20*')+_0x135a64+_0x2742bb(-0x1ed,-0x1ef,-0x15a,-0x185)+enter+enter+(_0x2742bb(-0x105,-0x6c,-0x17f,-0x1bd)+'ory\x20anda\x20d'+_0x2742bb(-0x1db,-0x24f,-0x1b0,-0x201)+'\x20ketik\x20')+prefix+'inventory','©\x20'+ownername,gos,[_0x3d1d7f],_0x411faa);},-0x17ff*0x1+-0x1*0x19e2+0x3d99),setTimeout(()=>{const _0x4cbf6c={'AyTmI':function(_0x56b60d,_0x28f443){return _0x56b60d(_0x28f443);},'kjmDr':_0xe0096d(0x7bc,0x6af,0x678,0x5e2)+_0x404546(0x50d,0x5e7,0x5e1,0x51f)+_0xe0096d(0x4c3,0x538,0x5e2,0x674)+_0xe0096d(0x692,0x566,0x4cd,0x686)};function _0x404546(_0x3bf24d,_0x503319,_0x40c43f,_0x386cf8){return _0x385207(_0x40c43f,_0x503319-0x78,_0x40c43f-0x1e4,_0x503319-0x3fc);}function _0xe0096d(_0x3d1b77,_0x223b3f,_0x3a1667,_0x13567d){return _0x529d2f(_0x3d1b77-0x87,_0x223b3f-0x318,_0x3a1667-0x193,_0x13567d);}_0x4cbf6c[_0xe0096d(0x5e1,0x6a0,0x608,0x6e4)](reply,_0x4cbf6c[_0xe0096d(0x59a,0x48e,0x3e0,0x540)]);},0x455+0x130b+-0x8*0x2ec);}else{if(tempsa===_0x529d2f(0x299,0x31b,0x1df,0x28b)+'a'){const _0xc0716e={};_0xc0716e[_0x385207(0x13a,0x12d,-0x81,0xad)]=_0x385207(0x2a5,0x14a,0x1bc,0x1f6),seae=await getBuffer(_0x385207(0x17,0x183,0x39,0x13b)+_0x529d2f(0x2fa,0x283,0x1d4,0x1db)+_0x385207(-0xe0,-0xa1,-0xd3,-0x25)+_0x529d2f(0x2b8,0x1e6,0x20e,0x172)+_0x385207(0x18a,0x19a,0x165,0x1f5),_0xc0716e),setTimeout(()=>{const _0x26832c={'tiEfx':function(_0x2c841b,_0x1930c3){return _0x2c841b*_0x1930c3;},'UnwAd':function(_0x2b1e9e,_0x2cd4a0,_0x258aef){return _0x2b1e9e(_0x2cd4a0,_0x258aef);},'voSKI':function(_0x4b9cc6,_0x224c64,_0x59899a,_0x5166f9,_0xc49846,_0x15023f,_0x264b87){return _0x4b9cc6(_0x224c64,_0x59899a,_0x5166f9,_0xc49846,_0x15023f,_0x264b87);},'iCsnO':_0x42be3a(0x85,-0x26,0x1ac,0x88)+_0x7ed1f1(0x529,0x34e,0x479,0x409),'xsoRg':'RESPONSE'};function _0x42be3a(_0x4eaba2,_0x6c518e,_0x47ac6,_0x497adb){return _0x385207(_0x47ac6,_0x6c518e-0x25,_0x47ac6-0x19e,_0x497adb- -0x8f);}const _0x1add2a=Math[_0x42be3a(-0x117,-0x11,0xb5,-0x87)](_0x26832c[_0x7ed1f1(0x303,0x415,0x269,0x38d)](Math[_0x42be3a(-0x123,-0x5a,0x36,-0x9a)](),0x17df+-0x1*-0x165a+-0x4*0xb7e));_0x26832c[_0x42be3a(-0x25,0x12b,0x172,0xf2)](addIkan,sender,_0x1add2a);const _0x58c21e={};_0x58c21e['quoted']=mek;function _0x7ed1f1(_0x2fad45,_0x3ad71d,_0x109993,_0x1c39c5){return _0x529d2f(_0x2fad45-0x152,_0x1c39c5-0x168,_0x109993-0x10c,_0x109993);}_0x26832c['voSKI'](sendButImage,from,_0x42be3a(-0x1f,0x173,-0x89,0xaa)+_0x7ed1f1(0x438,0x252,0x441,0x35b)+enter+enter+('Kamu\x20menda'+'patkan\x20*')+_0x1add2a+_0x42be3a(0x99,0x7a,-0x14b,-0x43)+enter+enter+('Cek\x20invent'+'ory\x20anda\x20d'+_0x42be3a(0xd1,0x28,0x48,-0x25)+'\x20ketik\x20')+prefix+_0x7ed1f1(0x465,0x526,0x520,0x502),_0x42be3a(-0x58,-0x9f,0x1a,0x21)+ownername,seae,[{'buttonId':_0x42be3a(0x68,0x5b,0x223,0x119),'buttonText':{'displayText':_0x26832c[_0x42be3a(-0xbb,-0x124,-0x38,-0xcd)]},'type':_0x26832c['xsoRg']}],_0x58c21e);},0x462+-0x1*0xe3c+0x1592),setTimeout(()=>{const _0x56d9d8={};function _0x39014e(_0x3875f8,_0xe50dff,_0x14b702,_0x3e3a17){return _0x529d2f(_0x3875f8-0x1a0,_0x3e3a17- -0x148,_0x14b702-0x173,_0x3875f8);}_0x56d9d8[_0x39014e(0x26f,0x301,0x19e,0x1ef)]='Sedang\x20ber'+_0xad420(0x35f,0x2b7,0x37f,0x33f)+_0x39014e(0x215,0xf1,-0x38,0xd8)+'tunggu...';function _0xad420(_0x2c3660,_0xb621b2,_0x220114,_0x1f1931){return _0x385207(_0xb621b2,_0xb621b2-0xfc,_0x220114-0xda,_0x2c3660-0x174);}const _0x409e28=_0x56d9d8;reply(_0x409e28['vxXjz']);},0x1f53+0x3db+-0x26*0xed);}else{if(tempsa===_0x529d2f(0xc7,0x1a6,0xf4,0xef)+_0x529d2f(0x34f,0x389,0x489,0x328)+'s'){const _0x4cbc32={};_0x4cbc32[_0x385207(0xa7,0xb4,0x139,0xad)]=_0x529d2f(0x2bf,0x38d,0x33e,0x27d),seoe=await getBuffer(_0x529d2f(0x3ad,0x2d2,0x227,0x2e2)+'legra.ph/f'+_0x385207(0x6,-0x6,0x63,0x9d)+_0x529d2f(0x258,0x2b5,0x38c,0x316)+_0x385207(0x96,0x210,0xde,0x193),_0x4cbc32),setTimeout(()=>{const _0x5cacfb={'rtSOI':function(_0x48377,_0x13de71){return _0x48377*_0x13de71;},'jWkXv':function(_0x388a42,_0x14c298,_0x45953f){return _0x388a42(_0x14c298,_0x45953f);},'ZIzYY':function(_0x26dc9b,_0x2b94ab,_0x49b385){return _0x26dc9b(_0x2b94ab,_0x49b385);},'gjbqB':_0x72caeb(0x5d2,0x58d,0x575,0x4ab)+'ry\x20🗃️','hrlkX':'RESPONSE'},_0x2302ac=Math['ceil'](Math['random']()*(-0x5d7+-0xf9a+-0x1d*-0xbf)),_0x2697c3=Math[_0x72caeb(0x4c3,0x580,0x5c0,0x4aa)](_0x5cacfb[_0x72caeb(0x620,0x53e,0x5ca,0x68f)](Math[_0x10614a(0x1d9,0x1ce,0x253,0x1b4)](),0x2496+0x199*0x1+-0x25df));_0x5cacfb[_0x10614a(0x30e,0x269,0x36d,0x2a2)](addOre,sender,_0x2302ac),_0x5cacfb[_0x10614a(0x307,0x210,0x306,0x3bb)](addStone,sender,_0x2697c3);function _0x72caeb(_0x2a0bf4,_0x42dc17,_0x59c940,_0x32412d){return _0x529d2f(_0x2a0bf4-0x20,_0x2a0bf4-0x324,_0x59c940-0x117,_0x32412d);}const _0x221e38={};_0x221e38[_0x72caeb(0x637,0x54b,0x585,0x6f8)+'t']=_0x5cacfb[_0x72caeb(0x5a9,0x482,0x49a,0x617)];function _0x10614a(_0x12fb27,_0x374525,_0x6b112f,_0x25bdb7){return _0x385207(_0x25bdb7,_0x374525-0x23,_0x6b112f-0x6c,_0x12fb27-0x1e4);}const _0x2c1400={};_0x2c1400[_0x72caeb(0x468,0x4d8,0x45b,0x399)]='inv',_0x2c1400[_0x10614a(0x1a5,0x2b5,0x15f,0x12e)]=_0x221e38,_0x2c1400[_0x72caeb(0x6a3,0x795,0x5dd,0x721)]=_0x5cacfb[_0x10614a(0x2d7,0x2ea,0x2e8,0x2c9)];const _0x252d40={};_0x252d40[_0x10614a(0x3a4,0x4a7,0x278,0x368)]=mek,sendButImage(from,_0x72caeb(0x5f4,0x705,0x5b8,0x6d6)+_0x72caeb(0x517,0x5f5,0x5ce,0x493)+enter+enter+('Kamu\x20menda'+_0x72caeb(0x692,0x5d7,0x6d6,0x6c2))+_0x2302ac+(_0x72caeb(0x495,0x483,0x3b4,0x389)+'re\x20dan\x20')+_0x2697c3+_0x72caeb(0x680,0x5dd,0x631,0x5c3)+enter+enter+(_0x72caeb(0x5fb,0x715,0x6a0,0x578)+_0x72caeb(0x483,0x550,0x432,0x45f)+_0x10614a(0x24e,0x18f,0x130,0x220)+_0x72caeb(0x48e,0x506,0x39d,0x4c2))+prefix+_0x10614a(0x3e7,0x45e,0x317,0x488),'©\x20'+ownername,seoe,[_0x2c1400],_0x252d40);},-0xff0+-0x8ea*-0x3+0xea),setTimeout(()=>{const _0x290581={'ujeLe':function(_0x4306ca,_0x3db69e){return _0x4306ca(_0x3db69e);},'Axcoe':_0x47b1ac(0x25f,0x20b,0x295,0x117)+_0x47b1ac(0x272,0x1f6,0x290,0x26f)+_0x22e824(-0x79,-0x166,-0x17a,-0x114)+_0x22e824(-0x16d,-0x138,-0x1ef,-0x14e)};function _0x22e824(_0x382884,_0x186536,_0x2f65a1,_0x45411d){return _0x529d2f(_0x382884-0x186,_0x186536- -0x386,_0x2f65a1-0x73,_0x2f65a1);}function _0x47b1ac(_0x5f229b,_0x2189ff,_0x2dcf81,_0x2c4bdb){return _0x529d2f(_0x5f229b-0x79,_0x2189ff- -0x18c,_0x2dcf81-0x47,_0x2c4bdb);}_0x290581[_0x47b1ac(0x27d,0x1d9,0x2cf,0x2b9)](reply,_0x290581[_0x47b1ac(0xa7,0xf2,-0x35,0x1b2)]);},0x4a8+0x3c9*-0x3+0x6b3);}else{if(tempsa==='chade\x20moun'+_0x529d2f(0x25b,0x2ce,0x200,0x369)){const _0x43a226={};_0x43a226[_0x529d2f(0x27e,0x244,0x214,0x149)]=_0x385207(0x303,0xfe,0x1e5,0x1f6),seye=await getBuffer(_0x529d2f(0x3b6,0x2d2,0x362,0x2a3)+_0x529d2f(0x1f4,0x283,0x25c,0x16f)+_0x385207(0x267,0x1ae,0x21e,0x1fe)+_0x529d2f(0x1ce,0x1d5,0x1c2,0x2be)+_0x529d2f(0x176,0x26b,0x180,0x137),_0x43a226),setTimeout(()=>{const _0x16f081={'BTMrx':function(_0x74f1a9,_0x3f957a){return _0x74f1a9*_0x3f957a;},'WuYAi':function(_0x31b6b2,_0x13bfae,_0x2b91b0,_0x5c3dff,_0x19ab62,_0x3b842c,_0x3bc022){return _0x31b6b2(_0x13bfae,_0x2b91b0,_0x5c3dff,_0x19ab62,_0x3b842c,_0x3bc022);},'XPEEB':'My\x20Invento'+'ry\x20🗃️'};function _0x3686e6(_0x3d1128,_0x400aa0,_0x1fc749,_0x12007e){return _0x529d2f(_0x3d1128-0x10e,_0x1fc749- -0x3e0,_0x1fc749-0x137,_0x400aa0);}function _0x26c375(_0xd5f899,_0x5c3015,_0x16754f,_0x3e5039){return _0x385207(_0xd5f899,_0x5c3015-0xf2,_0x16754f-0xe1,_0x3e5039-0x4b8);}const _0x3473db=Math[_0x26c375(0x597,0x399,0x419,0x4c0)](_0x16f081[_0x26c375(0x3c7,0x455,0x535,0x457)](Math[_0x3686e6(-0x21d,-0x250,-0x254,-0x30f)](),0x1*-0xc1+-0x11d0+0x12b9)),_0x423c04=Math[_0x3686e6(-0x19d,-0x234,-0x241,-0x2a5)](Math[_0x26c375(0x433,0x3aa,0x593,0x4ad)]()*(0x2f*0x1+0x1*0xf77+-0x7b5*0x2));addOre(sender,_0x3473db),addStone(sender,_0x423c04);const _0x698342={};_0x698342['quoted']=mek,_0x16f081['WuYAi'](sendButImage,from,_0x3686e6(-0x28,-0x5,-0x110,-0xf3)+_0x26c375(0x4a4,0x640,0x42e,0x514)+enter+enter+(_0x26c375(0x579,0x550,0x586,0x47b)+'patkan\x20*')+_0x3473db+(_0x26c375(0x57a,0x5a9,0x3de,0x492)+'re\x20dan\x20')+_0x423c04+_0x26c375(0x55a,0x645,0x5bd,0x67d)+enter+enter+(_0x26c375(0x6f1,0x4cb,0x51d,0x5f8)+_0x3686e6(-0x29b,-0x2be,-0x281,-0x1e5)+_0x3686e6(-0x183,-0x263,-0x1df,-0x10e)+_0x26c375(0x494,0x3ea,0x532,0x48b))+prefix+_0x3686e6(-0x5e,-0x92,-0x46,0xf0),'©\x20'+ownername,seye,[{'buttonId':_0x26c375(0x75f,0x553,0x5ca,0x660),'buttonText':{'displayText':_0x16f081[_0x3686e6(-0x182,-0xc5,-0x18f,-0xf0)]},'type':_0x3686e6(-0x259,-0x143,-0x232,-0x263)}],_0x698342);},-0xe64+0x117b+0x8a1),setTimeout(()=>{function _0xd26057(_0x46dc1f,_0x268284,_0x25f31d,_0x440b55){return _0x529d2f(_0x46dc1f-0x1e7,_0x46dc1f-0xf6,_0x25f31d-0x4a,_0x268284);}const _0x34c389={};_0x34c389[_0x1dfe4a(0x1a0,0x21e,0x1c4,0x141)]=_0xd26057(0x48d,0x405,0x445,0x44c)+_0xd26057(0x478,0x505,0x3ff,0x51f)+'\x20silahkan\x20'+_0xd26057(0x344,0x243,0x297,0x412);const _0x321c9f=_0x34c389;function _0x1dfe4a(_0x316c9d,_0x2bb185,_0x257212,_0x332ad5){return _0x385207(_0x332ad5,_0x2bb185-0x87,_0x257212-0x76,_0x316c9d-0x10f);}reply(_0x321c9f[_0xd26057(0x31e,0x2fa,0x23b,0x2f3)]);},-0x4*0x971+-0x1*-0x537+0x208d);}else{if(tempsa===_0x529d2f(0x1aa,0x2cc,0x2bc,0x36d)+'ds'){const _0x188b2c={};_0x188b2c['method']='get',siae=await getBuffer('https://te'+_0x385207(0x89,0x111,0x4,0xec)+_0x529d2f(0x277,0x141,0x18b,0x173)+_0x385207(0x114,0x33,0x75,0x134)+_0x529d2f(0x370,0x374,0x3e3,0x31e),_0x188b2c),setTimeout(()=>{function _0x4cfc34(_0x39eef9,_0xd5757f,_0x4cbaff,_0x568084){return _0x529d2f(_0x39eef9-0x185,_0x4cbaff- -0xa7,_0x4cbaff-0x55,_0x39eef9);}function _0x2a2fc5(_0x1ec803,_0x4b349d,_0x124c09,_0x166763){return _0x385207(_0x1ec803,_0x4b349d-0x14,_0x124c09-0x90,_0x124c09- -0x13b);}const _0x560c77={'dNClc':function(_0x120682,_0x376f09){return _0x120682*_0x376f09;},'LSiAO':function(_0x5de631,_0x24fec8,_0x208a42){return _0x5de631(_0x24fec8,_0x208a42);},'LJIxv':function(_0x3f704f,_0x4c2e0b,_0x4ad440,_0x30bfd,_0x3632b7,_0x52f254,_0x1f1d75){return _0x3f704f(_0x4c2e0b,_0x4ad440,_0x30bfd,_0x3632b7,_0x52f254,_0x1f1d75);},'TKKwu':_0x4cfc34(0xe9,0x2f3,0x207,0x120)+_0x2a2fc5(0xfd,-0x25,-0x31,0xf9),'RHGve':_0x2a2fc5(-0x1f7,-0x5,-0x124,-0x22d)},_0x37e1eb=Math['ceil'](Math['random']()*(-0x1733+0x1*0x140b+0x382)),_0x471337=Math[_0x4cfc34(0x1e5,0x192,0xf8,0x5d)](_0x560c77[_0x4cfc34(0x332,0x1b0,0x228,0x181)](Math[_0x2a2fc5(-0x191,-0x88,-0x146,-0x199)](),-0x3e0+-0x2034+0x2441));_0x560c77[_0x4cfc34(-0x10,-0x43,0x94,-0x6d)](addStone,sender,_0x37e1eb),_0x560c77[_0x2a2fc5(-0x18c,-0x184,-0x197,-0xec)](addKayu,sender,_0x471337);const _0x3a0d42={};_0x3a0d42[_0x4cfc34(0x2ac,0x2d5,0x2b0,0x307)]=mek,_0x560c77[_0x2a2fc5(0x16b,-0x4,0xcc,0x166)](sendButImage,from,_0x4cfc34(0x335,0x360,0x229,0x2ca)+'ation\x20🎊*'+enter+enter+(_0x4cfc34(0x1ec,0xfd,0xb3,0x1c4)+_0x2a2fc5(0x51,-0x80,0x9c,0xac))+_0x37e1eb+(_0x2a2fc5(0xb5,-0x188,-0x6d,0xa9)+'\x20*')+_0x471337+_0x4cfc34(0x260,0x1a6,0x148,0x239)+enter+enter+(_0x2a2fc5(0x115,-0x9f,0x5,0xcc)+'ory\x20anda\x20d'+_0x2a2fc5(0x48,-0xc6,-0xd1,0x5e)+_0x4cfc34(0x164,-0xb,0xc3,0x126))+prefix+_0x2a2fc5(0x89,-0x2,0xc8,0xae),'©\x20'+ownername,siae,[{'buttonId':_0x2a2fc5(0xf5,0x193,0x6d,0x23),'buttonText':{'displayText':_0x560c77['TKKwu']},'type':_0x560c77['RHGve']}],_0x3a0d42);},-0x2b*-0x95+0x1*-0x2531+0x17e2),setTimeout(()=>{function _0x9f28b9(_0x354493,_0x88ee23,_0x59fa97,_0x8df90f){return _0x385207(_0x354493,_0x88ee23-0xb7,_0x59fa97-0x65,_0x8df90f-0xb3);}function _0x17c54a(_0x2fe10f,_0x46905f,_0x3681d9,_0x1943c3){return _0x385207(_0x46905f,_0x46905f-0x98,_0x3681d9-0x191,_0x3681d9- -0x20b);}reply(_0x9f28b9(0x273,0x3a1,0x222,0x2b3)+_0x17c54a(0x11,-0x103,-0x20,-0x122)+_0x9f28b9(0xd3,0x21a,0x175,0x13c)+'tunggu...');},-0x16ad+0x21cb+0xb1e*-0x1);}else{if(tempsa===_0x529d2f(0x19e,0x213,0x2c0,0x293)+'rassland'){const _0x44a861={};_0x44a861[_0x385207(-0xd,0x70,0x168,0xad)]=_0x385207(0xcb,0x1c2,0x195,0x1f6),bbbb=await getBuffer('https://te'+_0x529d2f(0x242,0x283,0x385,0x251)+_0x529d2f(0x14f,0x165,0xdf,0x190)+_0x529d2f(0x1f5,0x197,0x1d8,0x95)+_0x529d2f(0x35,0x15d,0x250,0x281),_0x44a861),setTimeout(()=>{const _0xfc05d7={'szvyA':function(_0x1f284f,_0x442e42){return _0x1f284f*_0x442e42;},'fADAi':function(_0x4ca432,_0x120294){return _0x4ca432*_0x120294;},'YPuzu':function(_0xa10946,_0x2bdaea,_0x264206){return _0xa10946(_0x2bdaea,_0x264206);},'RGaHI':function(_0x362ea2,_0x5eb850,_0x393d14){return _0x362ea2(_0x5eb850,_0x393d14);},'ftcFk':function(_0x270e17,_0x53c847,_0x462b23,_0x549cd7,_0x45be56,_0x4207d2,_0x26de0e){return _0x270e17(_0x53c847,_0x462b23,_0x549cd7,_0x45be56,_0x4207d2,_0x26de0e);},'SQdgP':'My\x20Invento'+_0x41308f(0x6ed,0x6d5,0x647,0x6fe),'sSVeS':_0x41308f(0x4e2,0x5a3,0x554,0x60b)},_0x57eae7=Math[_0x41308f(0x629,0x606,0x545,0x5a6)](_0xfc05d7[_0xdacb60(0x1f0,0x19c,0x2d6,0x2f9)](Math[_0x41308f(0x4df,0x576,0x532,0x41c)](),0x191d+0xef*-0x21+-0x33d*-0x2));function _0x41308f(_0xb4d293,_0x592230,_0x3812d6,_0x2ed5f7){return _0x385207(_0xb4d293,_0x592230-0x198,_0x3812d6-0x1c4,_0x3812d6-0x53d);}const _0x1fba4a=Math[_0xdacb60(0x39,0x92,-0xfe,-0xd3)](_0xfc05d7[_0x41308f(0x720,0x759,0x691,0x64f)](Math[_0xdacb60(0x26,-0xca,0x14d,0x74)](),-0xd9b+0xc03*0x1+0x1ac));function _0xdacb60(_0x4d6586,_0x562c41,_0x83b25b,_0x52fa9f){return _0x529d2f(_0x4d6586-0x3c,_0x4d6586- -0x166,_0x83b25b-0x1cd,_0x52fa9f);}_0xfc05d7[_0x41308f(0x53c,0x5a7,0x5ae,0x516)](addStone,sender,_0x57eae7),_0xfc05d7['RGaHI'](addKayu,sender,_0x1fba4a);const _0x98fd7f={};_0x98fd7f['quoted']=mek,_0xfc05d7[_0x41308f(0x611,0x660,0x627,0x67d)](sendButImage,from,_0x41308f(0x680,0x73f,0x676,0x547)+_0xdacb60(0x8d,0x19,0x17e,0x19a)+enter+enter+(_0x41308f(0x4af,0x455,0x500,0x564)+'patkan\x20*')+_0x57eae7+('*\x20batu\x20dan'+'\x20')+_0x1fba4a+'\x20kayu'+enter+enter+(_0x41308f(0x724,0x6ce,0x67d,0x61f)+_0xdacb60(-0x7,0x8b,0x4f,0x1f)+_0xdacb60(0x9b,-0x88,0x13b,-0x3d)+'\x20ketik\x20')+prefix+_0xdacb60(0x234,0x351,0x226,0x2b0),'©\x20'+ownername,bbbb,[{'buttonId':_0x41308f(0x5c9,0x681,0x6e5,0x642),'buttonText':{'displayText':_0xfc05d7[_0x41308f(0x58b,0x633,0x5d7,0x6f0)]},'type':_0xfc05d7['sSVeS']}],_0x98fd7f);},-0x4*0x339+-0x2263+0x3aff*0x1),setTimeout(()=>{function _0x58964c(_0xb9775d,_0x52102b,_0x1edc24,_0x5a6408){return _0x385207(_0xb9775d,_0x52102b-0x118,_0x1edc24-0x10c,_0x52102b- -0x17a);}const _0x100511={'DdjDj':function(_0x15af9c,_0x50f027){return _0x15af9c(_0x50f027);}};function _0x5e93fd(_0x3c752d,_0x5daf4b,_0xb195f4,_0x3c9baa){return _0x529d2f(_0x3c752d-0x1e2,_0x3c752d-0x42,_0xb195f4-0x66,_0xb195f4);}_0x100511[_0x5e93fd(0x21d,0x20b,0x139,0x2f6)](reply,_0x5e93fd(0x3d9,0x4c2,0x2cf,0x4f2)+_0x58964c(0x194,0x71,0x3f,0x82)+_0x5e93fd(0x262,0x227,0x385,0x32c)+_0x58964c(0x34,-0xc3,0x5b,-0x76));},-0x3*0x5a6+0x9*-0x425+0x363f);}else{const _0xb65c49={};_0xb65c49[_0x385207(0x1a1,0xd2,0x1bb,0xad)]=_0x385207(0x187,0xbd,0x231,0x1f6),seae=await getBuffer(_0x385207(0x7f,0xc1,0x1da,0x13b)+_0x385207(0x21e,0x52,0x1e6,0xec)+'ile/168577'+'96fab2ccb6'+'cffc2.jpg',_0xb65c49),tesk='*PILIH\x20WIL'+'AYAH\x20YANG\x20'+'INGIN\x20KAMU'+'\x20JELAJAHI*'+_0x385207(-0x1,0xdf,0x82,0x105)+_0x529d2f(0x351,0x31d,0x287,0x390)+_0x385207(0x7b,0x105,0x11b,0x2d)+_0x385207(-0x29,0x73,-0x116,-0x1b)+_0x529d2f(0x9f,0x14c,0x2c,0x15d)+_0x385207(-0x1d,0xd4,0x180,0x80)+'bil\x20Woods\x0a'+'🟢\x20Chiltawa'+_0x385207(0x12c,0x156,0x1c2,0xc7)+'imingstall'+_0x385207(0x236,0xd4,0x1ff,0x130)+_0x385207(0xcf,0xa2,0x141,0x1a)+_0x529d2f(0x2e3,0x2ca,0x324,0x1eb)+'xample\x20:\x0a-'+'\x20'+prefix+(_0x529d2f(0x2d3,0x369,0x34c,0x281)+_0x529d2f(0x1cf,0x250,0x25d,0x263)+_0x385207(0x2ae,0xcc,0xbf,0x1d1)+_0x529d2f(0x2e5,0x261,0x2ec,0x183)+_0x385207(0xd1,-0x6b,-0xdc,-0x2e)+_0x529d2f(0x140,0x26d,0x200,0x178)+_0x529d2f(0x3b8,0x2ac,0x193,0x1db)+_0x529d2f(0x2a9,0x245,0x1ec,0x2de)+_0x529d2f(0x2d9,0x1aa,0x2d6,0x133)),alpha[_0x385207(0x173,0x125,0x21a,0x1b4)+'e'](from,seae,image,{'thumbnail':seae,'quoted':mek,'caption':tesk});}}}}}}}await gameAdd(sender,glimit);break;case _0x529d2f(0x2f7,0x2c2,0x352,0x19c):const _0x56b575={};_0x56b575[_0x385207(0x25a,0x5e,0x152,0x17c)+'t']=_0x385207(-0x44,0x8d,0x9,0x85)+'t';const _0x12a999={};_0x12a999['buttonId']=_0x385207(0xcb,0x120,0x39,0x116),_0x12a999[_0x529d2f(0x294,0x158,0x272,0x260)]=_0x56b575,_0x12a999[_0x385207(0x127,0xcd,0x1cc,0x1e8)]=0x1;if(isGame(sender,isPremium,isCreator,isOwner,gcounttuser,glimit))return sendButMessage(from,lang[_0x529d2f(0x1db,0x282,0x170,0x270)](prefix),'©\x20'+ownername,[_0x12a999]);const _0x1de4bb={};_0x1de4bb[_0x529d2f(0x39c,0x313,0x25b,0x1e0)+'t']=_0x529d2f(0x122,0x212,0xdc,0x32b);const _0x4b78a8={};_0x4b78a8['buttonId']=_0x385207(-0xaa,-0xee,0x7f,-0x17),_0x4b78a8[_0x385207(-0xbc,-0xf7,-0x23,-0x3f)]=_0x1de4bb,_0x4b78a8[_0x385207(0x308,0x236,0x240,0x1e8)]=0x1;if(!isEventon)return sendButMessage(from,lang[_0x529d2f(0x236,0x272,0x268,0x301)](prefix),'©\x20'+ownername,[_0x4b78a8]);setTimeout(()=>{const _0x459a1e={'NcwJm':function(_0x36d2ea,_0x4c02c5){return _0x36d2ea*_0x4c02c5;},'mWeLl':function(_0x4d4b70,_0x553ca8){return _0x4d4b70*_0x553ca8;},'EOGGY':function(_0x28dfaa,_0x5cafe8,_0x5b7ab5){return _0x28dfaa(_0x5cafe8,_0x5b7ab5);},'HJThq':function(_0x14ca33,_0x364a94,_0x1e817a){return _0x14ca33(_0x364a94,_0x1e817a);},'dZHSs':function(_0x1b4a6c,_0x505aa6){return _0x1b4a6c(_0x505aa6);}},_0x79fb37=Math[_0x57c6f3(0x3e1,0x3bf,0x373,0x3ae)](Math[_0x57c6f3(0x374,0x3ac,0x367,0x400)]()*(-0x17e2+0x36*-0x31+0x376*0xa)),_0x1a8456=Math[_0x42f38e(0x9b,0xae,0x137,0x16a)](_0x459a1e['NcwJm'](Math[_0x57c6f3(0x31d,0x3ac,0x339,0x3bd)](),0x5*0x3b4+0x1ba*0x7+0x2*-0xf3e)),_0x5c5e86=Math['ceil'](_0x459a1e[_0x42f38e(0x1a2,0x109,0x10d,0x24)](Math[_0x42f38e(0x12f,0x1c7,0x124,0x25)](),-0x80f+-0x1*0x45a+0xc73*0x1));_0x459a1e['EOGGY'](addStone,sender,_0x79fb37);function _0x42f38e(_0x8211f7,_0x2eeb56,_0x527a87,_0x47e59e){return _0x529d2f(_0x8211f7-0x11b,_0x527a87- -0x68,_0x527a87-0x10f,_0x47e59e);}addCoal(sender,_0x1a8456),_0x459a1e[_0x57c6f3(0x576,0x4b7,0x388,0x511)](addOre,sender,_0x5c5e86);function _0x57c6f3(_0x3116c8,_0x2f4390,_0x10be45,_0x2a7780){return _0x385207(_0x3116c8,_0x2f4390-0x31,_0x10be45-0x99,_0x2f4390-0x3b7);}_0x459a1e['dZHSs'](reply,'*Congratul'+'ation\x20🎊*'+enter+enter+('\x20kamu\x20mend'+'apatkan\x20*')+_0x79fb37+_0x57c6f3(0x48a,0x3f8,0x300,0x44f)+_0x1a8456+(_0x42f38e(0x3d9,0x37c,0x337,0x37a)+_0x57c6f3(0x4fe,0x48c,0x355,0x462))+_0x5c5e86+_0x57c6f3(0x455,0x3f4,0x2be,0x381));},0x28d*-0x4+-0x270c+0x79f*0x8),setTimeout(()=>{function _0x33a50e(_0x3eb0e4,_0x1b479a,_0x2f90fd,_0x496b35){return _0x529d2f(_0x3eb0e4-0x192,_0x3eb0e4-0x15e,_0x2f90fd-0x18c,_0x2f90fd);}function _0x5cd1d5(_0x46c4bd,_0x404d71,_0xfb116b,_0x2e9e98){return _0x385207(_0x404d71,_0x404d71-0x136,_0xfb116b-0xa4,_0xfb116b- -0xc7);}reply(_0x5cd1d5(-0x2e,0x4f,-0x4a,0xd3)+'ambang,\x20si'+_0x5cd1d5(-0x30,0x1a9,0xe0,0x1fa)+_0x5cd1d5(-0x166,-0xb6,-0xa2,-0x1a8));},-0x6b6*-0x1+-0xc95+0x5df*0x1),await gameAdd(sender,glimit);break;case _0x529d2f(0x203,0x1d2,0x237,0x2bc):const _0x133778={};_0x133778[_0x385207(0x171,0x7c,0x253,0x17c)+'t']=_0x529d2f(0x143,0x21c,0x330,0x274)+'t';const _0x125fdf={};_0x125fdf['buttonId']='limit',_0x125fdf['buttonText']=_0x133778,_0x125fdf['type']=0x1;if(isGame(sender,isPremium,isCreator,isOwner,gcounttuser,glimit))return sendButMessage(from,lang[_0x385207(0x173,0x1e,0x74,0xeb)](prefix),'©\x20'+ownername,[_0x125fdf]);const _0x3bb4bc={};_0x3bb4bc[_0x385207(0x9b,0x188,0xc2,0x17c)+'t']=_0x385207(0x87,-0x8b,0x69,0x7b);const _0xc7cc76={};_0xc7cc76[_0x529d2f(0x25b,0x144,0x21d,0x197)]=_0x529d2f(0xf0,0x180,0x277,0x20b),_0xc7cc76['buttonText']=_0x3bb4bc,_0xc7cc76[_0x385207(0x24e,0x119,0x114,0x1e8)]=0x1;if(!isEventon)return sendButMessage(from,lang['event'](prefix),'©\x20'+ownername,[_0xc7cc76]);setTimeout(()=>{const _0x3d6c86={'jFcZP':function(_0xd89c5f,_0x3fd68c){return _0xd89c5f*_0x3fd68c;},'AGoAQ':function(_0x41c0d9,_0x25fbdd,_0xebb641){return _0x41c0d9(_0x25fbdd,_0xebb641);},'ciCQD':function(_0x4e30c5,_0x448388){return _0x4e30c5(_0x448388);}};function _0x549eb5(_0xba99a8,_0x3e55a0,_0x401768,_0x371c9d){return _0x385207(_0x371c9d,_0x3e55a0-0x21,_0x401768-0x10f,_0x401768-0x21a);}const _0x3b42c1=Math['ceil'](_0x3d6c86[_0x1354a3(0xb3,0x19,0x7f,0x2e)](Math[_0x549eb5(0x1e9,0x329,0x20f,0x217)](),-0x19d1+-0x21*0x1d+0x1da2));_0x3d6c86[_0x549eb5(0x24a,0x30f,0x36b,0x2ca)](addKayu,sender,_0x3b42c1);function _0x1354a3(_0x4d9404,_0x3e6e6f,_0x2ccca8,_0x337b5d){return _0x529d2f(_0x4d9404-0x138,_0x337b5d- -0x20b,_0x2ccca8-0x2c,_0x2ccca8);}_0x3d6c86['ciCQD'](reply,'*Congratul'+'ation\x20🎊*'+enter+enter+(_0x549eb5(0x246,0x39e,0x2a4,0x243)+_0x549eb5(0x4de,0x421,0x3f1,0x3b6))+_0x3b42c1+(_0x549eb5(0x1dd,0xcc,0x1f2,0x324)+_0x549eb5(0x31b,0x2e0,0x2be,0x3ab)));},-0x67a+-0x1*-0x3d1+-0x4cb*-0x3),setTimeout(()=>{const _0x4609fe={};function _0x334e70(_0x239190,_0x1e7c03,_0x1f911a,_0x1235a0){return _0x385207(_0x1235a0,_0x1e7c03-0x198,_0x1f911a-0x7d,_0x1e7c03-0x20b);}_0x4609fe[_0x5a9bd7(0x97,0xed,0x1b4,0x274)]=_0x334e70(0x1d2,0x288,0x268,0x273)+_0x5a9bd7(-0x1a,-0x8f,-0x3a,-0x149)+_0x5a9bd7(0x1be,0x154,0x18c,0x1df)+'ggu...';const _0x1ac99c=_0x4609fe;function _0x5a9bd7(_0x5f25fd,_0x5cf85c,_0x9f364f,_0x4327cf){return _0x529d2f(_0x5f25fd-0xfa,_0x9f364f- -0x1b2,_0x9f364f-0xa4,_0x4327cf);}reply(_0x1ac99c['clZJk']);},0xf8+0x4d8+-0x5d0),await gameAdd(sender,glimit);break;case'goplanet':const _0x4a237c={};_0x4a237c[_0x385207(0x1ab,0x1e8,0x99,0x17c)+'t']=_0x385207(0x91,0xa7,0x2f,0x85)+'t';const _0x25cc8e={};_0x25cc8e[_0x385207(-0xdf,-0x35,-0x12e,-0x53)]='limit',_0x25cc8e[_0x385207(0xe,-0x8,-0x8,-0x3f)]=_0x4a237c,_0x25cc8e[_0x385207(0x1eb,0x24c,0x29f,0x1e8)]=0x1;if(isGame(sender,isPremium,isCreator,isOwner,gcounttuser,glimit))return sendButMessage(from,lang['limitg'](prefix),'©\x20'+ownername,[_0x25cc8e]);const _0x4a1540={};_0x4a1540[_0x385207(0x20e,0x272,0x14a,0x17c)+'t']=_0x529d2f(0x138,0x212,0x17d,0x11e);const _0xb2aabb={};_0xb2aabb[_0x529d2f(0x17b,0x144,0xd,0x161)]=_0x385207(-0x48,0x115,0x58,-0x17),_0xb2aabb[_0x529d2f(0xfa,0x158,0x12c,0x10e)]=_0x4a1540,_0xb2aabb[_0x385207(0x1af,0x1aa,0x24b,0x1e8)]=0x1;if(!isEventon)return sendButMessage(from,lang['event'](prefix),'©\x20'+ownername,[_0xb2aabb]);setTimeout(()=>{function _0x25e8f5(_0x13235a,_0x306d76,_0xec2b93,_0x5a40b7){return _0x385207(_0x13235a,_0x306d76-0x12c,_0xec2b93-0x83,_0x5a40b7-0x260);}const _0x45365f={'VGzTw':'merkurius','Ckgkl':'mars','EPOHZ':_0x25e8f5(0x40b,0x33f,0x312,0x35e),'yduXQ':'saturnus','aftwM':'neptunus','dMqjG':_0x25e8f5(0x362,0x204,0x2be,0x269),'UBOXQ':function(_0x5b5d28,_0xa0b88f){return _0x5b5d28*_0xa0b88f;},'IBnGo':function(_0x309c99,_0x3acb59){return _0x309c99(_0x3acb59);}};function _0x155ee1(_0x50d730,_0x749072,_0x57cfcd,_0x3177f7){return _0x385207(_0x57cfcd,_0x749072-0x56,_0x57cfcd-0xcb,_0x3177f7-0x243);}const _0x1fbb56=Math[_0x25e8f5(0x20c,0x256,0x22c,0x268)](Math[_0x25e8f5(0x2c7,0x35a,0x344,0x255)]()*(-0x22c2+0x35b*0xb+-0x1c3)),_0x5bfe31=[_0x45365f[_0x25e8f5(0x22d,0x2ba,0x1cf,0x27f)],_0x25e8f5(0x454,0x371,0x2e6,0x3c8),_0x45365f[_0x155ee1(0x2d7,0x2d2,0x282,0x392)],_0x45365f[_0x25e8f5(0x4a7,0x4fa,0x3eb,0x3f0)],_0x45365f['yduXQ'],_0x45365f[_0x25e8f5(0x2f1,0x431,0x4df,0x3df)],_0x45365f[_0x155ee1(0x273,0x344,0x2e2,0x297)]],_0x4ce222=_0x5bfe31[Math['floor'](_0x45365f[_0x25e8f5(0x44c,0x268,0x27f,0x36f)](Math[_0x25e8f5(0x14b,0x149,0x27f,0x255)](),_0x5bfe31[_0x25e8f5(0x3d2,0x2dc,0x35f,0x296)]))];addPlanet(sender,_0x1fbb56),_0x45365f[_0x155ee1(0x3e8,0x36c,0x24b,0x334)](reply,_0x155ee1(0x469,0x292,0x3e6,0x37c)+'ation\x20🎊*'+enter+enter+(_0x155ee1(0x3dc,0x25b,0x26d,0x2cd)+_0x155ee1(0x350,0x44b,0x51b,0x41a))+_0x1fbb56+(_0x25e8f5(0x390,0x50b,0x511,0x3e2)+'ia\x20dari\x20*')+_0x4ce222+(_0x25e8f5(0x111,0x2f7,0x162,0x23d)+_0x25e8f5(0x332,0x1af,0x124,0x1fc)));},-0x5d8*-0x2+-0x1df0+0x1df8),setTimeout(()=>{const _0x433c67={'PLced':function(_0x4484c7,_0x2981d0){return _0x4484c7(_0x2981d0);},'WJEPv':_0xe0d389(0x3e6,0x310,0x4b9,0x2f3)+_0x3c689b(-0x35,-0x55,0xb1,0x125)+_0xe0d389(0x1d6,0x21f,0x232,0x187)+_0xe0d389(0x3a4,0x456,0x3bb,0x3c9)+_0xe0d389(0x2df,0x22e,0x3ce,0x380)};function _0x3c689b(_0x3666ae,_0xa22426,_0x51c322,_0x3fb2c2){return _0x529d2f(_0x3666ae-0x24,_0x51c322- -0x10e,_0x51c322-0x105,_0xa22426);}function _0xe0d389(_0x3830e7,_0x3785a6,_0xa4d610,_0x374e02){return _0x529d2f(_0x3830e7-0x1e3,_0x3830e7-0x4f,_0xa4d610-0x151,_0x374e02);}_0x433c67[_0xe0d389(0x21f,0x311,0x283,0x21c)](reply,_0x433c67[_0x3c689b(0x221,0x122,0x1e2,0x238)]);},0x10c1+0x1a9c+-0x2b5d),await gameAdd(sender,glimit);break;case'jualbahank'+_0x529d2f(0x30b,0x333,0x333,0x41e):const _0x3be3be={};_0x3be3be[_0x529d2f(0x403,0x313,0x30a,0x402)+'t']=_0x529d2f(0x264,0x21c,0x16d,0x2eb)+'t';const _0x3f2767={};_0x3f2767[_0x529d2f(0x17e,0x144,0x21a,0x260)]=_0x385207(0x19d,0x1ca,0x5e,0x116),_0x3f2767['buttonText']=_0x3be3be,_0x3f2767[_0x529d2f(0x369,0x37f,0x277,0x458)]=0x1;if(isGame(sender,isPremium,isCreator,isOwner,gcounttuser,glimit))return sendButMessage(from,lang[_0x529d2f(0x3a2,0x282,0x14e,0x2c4)](prefix),'©\x20'+ownername,[_0x3f2767]);const _0x5bfae1={};_0x5bfae1[_0x529d2f(0x3aa,0x313,0x39f,0x32e)+'t']=_0x385207(0x148,-0x39,-0x11,0x7b);const _0x3c7a60={};_0x3c7a60['buttonId']='event\x20on',_0x3c7a60['buttonText']=_0x5bfae1,_0x3c7a60['type']=0x1;if(!isEventon)return sendButMessage(from,lang[_0x385207(0x118,0x192,0xa,0xdb)](prefix),'©\x20'+ownername,[_0x3c7a60]);buayar=body['slice'](-0xbf4+-0xe13*0x1+0x1a17);const hargakimia=0x185b+0x11*0x1f2+-0x3585*0x1,dapetin=buayar*hargakimia;if(getBertualangPlanet(sender)<=-0x218f+0x20c+0x1f84)return reply(_0x385207(-0x4b,-0x9,-0x8c,-0x43)+pushname+(_0x385207(-0xae,-0x101,-0xa4,-0x65)+'k\x20punya\x20ba'+_0x529d2f(0x20e,0x1ca,0x1ca,0x2a0)));getBertualangPlanet(sender)>=-0x279*0xb+0x1*-0x185b+0x338f&&(jualbahankimia(sender,buayar),addKoinUser(sender,dapetin),await reply(_0x385207(0x111,0x170,0xd5,0x46)+_0x385207(-0x83,0x6e,0x49,-0x30)+_0x385207(0x1bb,0x25d,0x2b3,0x1d3)+enter+enter+(_0x529d2f(0x2f3,0x25b,0x1ff,0x1c0)+_0x529d2f(0x3f5,0x34c,0x40f,0x416)+'ijual:*\x20')+buayar+enter+(_0x385207(0x2b4,0x250,0x297,0x1d9)+'pat:*\x20')+dapetin+enter+enter+(_0x385207(0x14c,0x22d,0x127,0x146)+_0x529d2f(0x9e,0x1c7,0x2a1,0x207))+getBertualangPlanet(sender)+enter+(_0x385207(0x33,0x189,0x90,0x5a)+_0x529d2f(0x128,0x14d,0x4c,0xe6))+checkATMuser(sender)+enter+enter+('Penjualan\x20'+'berhasil\x20d'+'engan\x20nomo'+_0x529d2f(0x5b,0x195,0xf8,0x6d)+_0x529d2f(0x2a3,0x216,0x12b,0x251)+_0x385207(-0xa6,0x6d,0x4a,-0x49))));await gameAdd(sender,glimit);break;case _0x385207(0x10,0x2b,-0x89,0x3c)+_0x385207(0x186,0x19f,0x151,0x19c):teks=_0x385207(0x121,0x1c8,0xf6,0xc4)+_0x529d2f(0x204,0x1ed,0x281,0x147)+'ang\x20didapa'+_0x385207(0x1d,0x7c,0x15a,0xf4)+pushname+(_0x385207(0x1e6,0x51,0x10b,0x17a)+_0x385207(0x28d,0x162,0xe2,0x185))+getBertualangPlanet(sender)+'_*';const _0x4ae072={};_0x4ae072[_0x529d2f(0x243,0x357,0x231,0x2c2)]=mek,alpha[_0x385207(0xc1,0x82,0xf0,0x1b4)+'e'](from,teks,text,_0x4ae072);break;case _0x529d2f(0x493,0x376,0x4aa,0x417):case'casino':const _0x3e3d1b={};_0x3e3d1b[_0x385207(0x2a4,0xbf,0x8c,0x17c)+'t']=_0x385207(-0xa3,0xa,0x107,0x85)+'t';const _0x3e598e={};_0x3e598e['buttonId']=_0x385207(0x219,0x54,0xf2,0x116),_0x3e598e['buttonText']=_0x3e3d1b,_0x3e598e[_0x529d2f(0x35a,0x37f,0x316,0x4ac)]=0x1;if(isGame(sender,isPremium,isCreator,isOwner,gcounttuser,glimit))return sendButMessage(from,lang[_0x529d2f(0x38d,0x282,0x206,0x379)](prefix),'©\x20'+ownername,[_0x3e598e]);const _0x243e48={};_0x243e48[_0x529d2f(0x2cc,0x313,0x3c5,0x210)+'t']=_0x529d2f(0xdf,0x212,0x327,0x185);const _0x54bdd5={};_0x54bdd5[_0x385207(-0x124,-0x124,-0x4a,-0x53)]=_0x529d2f(0x29e,0x180,0x146,0x13e),_0x54bdd5['buttonText']=_0x243e48,_0x54bdd5[_0x529d2f(0x484,0x37f,0x40c,0x3d1)]=0x1;if(!isEventon)return sendButMessage(from,lang['event'](prefix),'©\x20'+ownername,[_0x54bdd5]);cas=q;if(checkATMuser(sender)<cas)return reply(_0x529d2f(0x343,0x21e,0x1d9,0x1ef)+'dak\x20mencuk'+_0x529d2f(0x25d,0x2e2,0x3b3,0x237)+_0x385207(0x49,0x15f,0xd5,0x161)+'judi');if(args['length']<0x29*-0x56+-0x1719+-0x760*-0x5)return reply('Mau\x20taruha'+'n\x20berapa');if(isNaN(cas))return reply(_0x385207(0x98,-0x67,0x47,0x75)+_0x385207(0x276,0x277,0x61,0x18f));const resg=[_0x385207(0xd3,0x2b4,0x2c2,0x1d8)+_0x385207(-0xc6,0x38,0xe3,0x26),'Kamu\x20KALAH'+'!!'];bayar=confirmATM(sender,cas),setTimeout(()=>{const _0x116819={'JaBcx':function(_0x2224eb,_0xbb4621){return _0x2224eb*_0xbb4621;},'hWQDO':function(_0x22d6db,_0xdd659a){return _0x22d6db+_0xdd659a;},'guZcv':function(_0x3a5310,_0x5476fa){return _0x3a5310==_0x5476fa;},'eUcNU':function(_0x7a5867,_0x43b4ce){return _0x7a5867(_0x43b4ce);},'tAfha':'Kamu\x20KALAH'+'!!','gVjwK':function(_0xa30678,_0x521251,_0x4fd7aa){return _0xa30678(_0x521251,_0x4fd7aa);},'kNjBq':_0x35b64b(-0x2e0,-0x24e,-0x2c1,-0x22f)};function _0x59d968(_0x21608b,_0x5581a3,_0x4b0076,_0x5f0825){return _0x529d2f(_0x21608b-0x60,_0x21608b-0x5a,_0x4b0076-0xa8,_0x5581a3);}const _0x5ccd60=Math['ceil'](_0x116819[_0x59d968(0x255,0x216,0x2b7,0x269)](Math[_0x35b64b(-0x1b5,-0x202,-0x193,-0x14b)](),-0x20e0+-0xef7+0x2fd9)),_0x570069=_0x116819[_0x35b64b(-0x1f0,-0x13b,-0x13c,-0x15f)](cas,-0x6c2+-0x3*0x5fb+-0x1*-0x18b3),_0x1cedb0=resg[Math['floor'](Math['random']()*resg['length'])];function _0x35b64b(_0xd5a9eb,_0x422483,_0x335b89,_0x40156b){return _0x529d2f(_0xd5a9eb-0x160,_0x422483- -0x38e,_0x335b89-0x64,_0x40156b);}if(_0x116819[_0x59d968(0x34f,0x462,0x317,0x2ab)](_0x1cedb0,_0x35b64b(-0x90,-0x1f,-0x78,0x14)+_0x35b64b(-0x181,-0x1d1,-0x151,-0x1f3)))addKoinUser(sender,_0x570069),_0x116819[_0x35b64b(-0x13c,-0xa4,-0x29,-0x1c0)](reply,_0x59d968(0x32a,0x3d3,0x1ef,0x446)+_0x35b64b(-0x1a7,-0x19b,-0x176,-0x1db)+enter+enter+('Kamu\x20memen'+_0x59d968(0x218,0x336,0x1d8,0x1f0)+_0x59d968(0x2b7,0x2c3,0x388,0x246)+_0x59d968(0x244,0x152,0x171,0x112))+_0x570069+'_*'+enter+enter+('Kumpulkan\x20'+_0x59d968(0x2a5,0x1e2,0x2b6,0x3bf)+_0x59d968(0x1d1,0x1ae,0x200,0x106)+_0x59d968(0x207,0x1e8,0x17c,0xcb)));else _0x116819['guZcv'](_0x1cedb0,_0x116819['tAfha'])?(_0x116819['gVjwK'](confirmATM,sender,cas),reply('Kamu\x20kalah'+_0x59d968(0x39b,0x3c7,0x3a7,0x425)+_0x59d968(0x38e,0x252,0x42a,0x31c)+'ng\x20sebesar'+'\x20'+cas)):reply(_0x116819[_0x59d968(0x259,0x210,0x334,0x284)]);},-0xd17+-0x2014+0x1*0x38e3),setTimeout(()=>{const _0x556606={'GrDFL':function(_0x347b31,_0x33a5d6){return _0x347b31(_0x33a5d6);}};function _0x1adc03(_0x573582,_0x930e4a,_0x4037af,_0x4ddfcf){return _0x385207(_0x573582,_0x930e4a-0x40,_0x4037af-0xa5,_0x4037af-0x30d);}function _0x4b28b8(_0x4c51ef,_0x49cca7,_0x453cac,_0x2051cb){return _0x529d2f(_0x4c51ef-0x111,_0x453cac-0x246,_0x453cac-0x108,_0x4c51ef);}_0x556606['GrDFL'](reply,_0x4b28b8(0x35f,0x4c4,0x43a,0x348)+_0x1adc03(0x381,0x388,0x495,0x376));},-0x85a*0x2+-0x1*0x17fb+0x1*0x28af),await gameAdd(sender,glimit);break;case _0x529d2f(0x2eb,0x33f,0x385,0x2a1):case _0x385207(0x195,0x19d,0x10c,0xf6):case _0x385207(0x2e0,0x2fd,0x1bf,0x203):{try{pp_userb=await alpha['getProfile'+_0x385207(-0x1d,-0xce,-0xaf,0x2f)](sender);}catch{pp_userb='https://i.'+_0x529d2f(0x23e,0x1b0,0x292,0x153)+_0x529d2f(0x1ed,0x284,0x39b,0x201)+'bb87660.pn'+'g';}let pp_userz=await getBuffer(pp_userb);inventory='\x0a🗃️\x20*USER\x20I'+_0x529d2f(0x5e,0x143,0x7c,0x237)+'🗃️\x20\x0a\x0a🎢\x20*COA'+_0x385207(0xd5,0x149,0xdb,0x128)+getMiningcoal(sender)+(_0x529d2f(0x282,0x1a7,0x172,0x116)+_0x385207(0x6a,0x2d,0xba,0x4a))+getMiningstone(sender)+(_0x385207(0x271,0x28e,0x268,0x172)+_0x385207(-0xbd,-0xdc,-0x13e,-0x4))+getMiningore(sender)+(_0x385207(-0x40,0x6d,-0xef,-0x45)+_0x385207(-0x20,0xea,0xb3,0x10b))+getMiningingot(sender)+(_0x529d2f(0x44e,0x378,0x28a,0x49e)+':\x20')+getNebangKayu(sender)+(_0x385207(0x85,0x65,0x13,0xfd)+':\x20')+getMancingIkan(sender)+(_0x529d2f(0x222,0x25c,0x1bb,0x2c5)+_0x529d2f(0x358,0x390,0x25b,0x3ae)+'ame\x20untuk\x20'+_0x529d2f(0x2f5,0x2f4,0x31a,0x35a)+'n\x20lebih\x20ba'+'nyak\x20inven'+'tory'),alpha[_0x385207(0x187,0x28f,0x117,0x1b4)+'e'](from,pp_userz,image,{'thumbnail':Buffer[_0x385207(0xbf,0x1c1,0x233,0x1ab)](-0xa7f*0x1+-0x9*0x28a+-0x2159*-0x1),'quoted':mek,'caption':inventory});}break;case'kodebahasa':kodenyab='Kode\x20bahas'+'a\x0a\x20\x0a\x20\x09Code'+'\x20\x20\x20\x20\x20\x20\x20Bah'+'asa\x0a\x20\x20\x20\x20sq'+'\x20\x20\x20\x20\x20\x20\x20\x20Al'+_0x385207(-0xb0,0x73,0xb8,-0x4f)+_0x385207(0x47,0x43,-0x8f,0x59)+'\x20Arabic\x0a\x20\x20'+_0x529d2f(0x20d,0x15e,0x28e,0x275)+_0x529d2f(0x11b,0x156,0x143,0x255)+_0x529d2f(0x42b,0x32d,0x26b,0x307)+_0x385207(0x1b0,0x255,0x173,0x1e7)+_0x385207(0x247,0x9b,0x1b8,0x111)+'\x20\x20\x20\x20\x20\x20\x20Chi'+_0x385207(0xa9,-0x88,0x167,0x43)+_0x529d2f(0x1fc,0x218,0x102,0x313)+_0x385207(0x2f3,0x1b5,0x299,0x1ca)+_0x529d2f(0x2d9,0x328,0x1ff,0x263)+_0x385207(0x10f,-0xb6,-0x149,-0x24)+_0x385207(0x113,0xe2,0x104,0x125)+_0x385207(-0x87,0xd1,-0x22,-0xa)+_0x529d2f(0x311,0x394,0x3f2,0x3de)+'Chinese\x20(C'+'antonese)\x0a'+_0x529d2f(0x22d,0x2db,0x3e8,0x34f)+_0x529d2f(0x112,0x1cf,0xf5,0x15c)+'an\x0a\x20\x20\x20\x20cs\x20'+'\x20\x20\x20\x20\x20\x20\x20Cze'+_0x385207(0xf1,0x2e3,0xcf,0x1ec)+'\x20\x20\x20\x20\x20\x20\x20Dan'+_0x385207(-0x7,0x1c5,0x26,0xfb)+_0x385207(0x55,0xdc,-0x71,0x65)+_0x529d2f(0x9b,0x13d,0x92,0x31)+'\x20\x20\x20\x20\x20\x20\x20\x20En'+'glish\x0a\x20\x20\x20\x20'+_0x529d2f(0x2ca,0x335,0x205,0x372)+_0x529d2f(0x1cb,0x23c,0x220,0x221)+_0x529d2f(0x6a,0x130,0x1a1,0x248)+_0x385207(-0xa3,0xcf,-0x4c,0x61)+_0x385207(-0xe,0x1eb,0x1aa,0xe3)+_0x529d2f(0x262,0x139,0xb6,0x75)+_0x385207(0x228,0x195,0x16f,0x1a6)+_0x529d2f(0x1b6,0x1af,0x231,0xbe)+'\x20\x20\x20English'+_0x385207(0x52,0x56,0x59,-0x58)+'tates)\x0a\x20\x20\x20'+_0x529d2f(0x2af,0x380,0x39e,0x479)+_0x385207(0x18a,0x186,0x32,0xa8)+_0x529d2f(0x19f,0x237,0x1e0,0x24b)+_0x385207(0x2c2,0x2d0,0x2c8,0x19f)+_0x529d2f(0x2fe,0x375,0x252,0x3e5)+'\x20\x20\x20\x20\x20\x20\x20Fre'+_0x385207(0xe,0x131,0x51,0x106)+_0x385207(0xc5,0x21e,0x236,0x110)+'rman\x0a\x20\x20\x20\x20e'+_0x385207(0x2a1,0xde,0x124,0x1a5)+_0x385207(-0x53,0x2f,0x12b,0x14)+_0x385207(-0xef,0x172,0x53,0x49)+_0x529d2f(0x32d,0x37c,0x361,0x2f7)+'ole\x0a\x20\x20\x20\x20hi'+_0x529d2f(0x37c,0x2d4,0x3e1,0x3f7)+_0x385207(0x7c,0xbb,0x37,-0x60)+_0x385207(0xec,0x28,0x262,0x15a)+_0x529d2f(0x2bd,0x1b3,0x15f,0x17c)+'\x20\x20is\x20\x20\x20\x20\x20\x20'+_0x385207(0x3a,-0x131,-0x152,-0x29)+_0x385207(0x21,-0xe,0x76,-0x11)+_0x529d2f(0x1ed,0x19d,0x182,0x10d)+_0x385207(0xa2,0x27,-0x16,0x55)+_0x529d2f(0x2f6,0x1de,0x302,0x121)+_0x385207(0x8f,-0x5,0x105,0x92)+'\x20\x20\x20ja\x20\x20\x20\x20\x20'+_0x529d2f(0x241,0x2c9,0x2a2,0x3b5)+'e\x0a\x20\x20\x20\x20ko\x20\x20'+_0x385207(-0xa,0x12d,-0x26,0x9f)+'an\x0a\x20\x20\x20\x20la\x20'+_0x385207(0x12f,0x14,0x161,0x99)+_0x529d2f(0x1d7,0x2f7,0x2ea,0x36f)+_0x385207(0xda,0x44,0xb4,0x99)+_0x385207(0x8d,0xdf,0x9d,0xaa)+'k\x20\x20\x20\x20\x20\x20\x20\x20M'+_0x385207(-0x4a,0xcc,0x139,0x50)+'\x20\x20\x20\x20no\x20\x20\x20\x20'+_0x385207(0xc1,0x50,0xdc,0x13f)+'ian\x0a\x20\x20\x20\x20pl'+_0x385207(0xad,-0x46,0xd9,-0x33)+_0x385207(0x1d9,0x1b1,0x1e4,0x1cd)+_0x529d2f(0x2be,0x360,0x294,0x3d1)+_0x529d2f(0x206,0x306,0x334,0x273)+_0x529d2f(0x20,0x12b,0x19b,0x10c)+_0x385207(-0x30,0xcc,0x194,0xd1)+_0x529d2f(0x390,0x29a,0x2c8,0x1f2)+_0x529d2f(0xa1,0x161,0x4e,0x11d)+_0x385207(0x2a9,0x21d,0xf3,0x1d0)+_0x529d2f(0x1b5,0x155,0x204,0x279)+_0x529d2f(0x281,0x315,0x38e,0x2dc)+'\x20Russian\x0a\x20'+_0x385207(0x130,0x14f,0x6e,0x1b)+_0x529d2f(0x38d,0x2fd,0x233,0x277)+_0x385207(-0x15b,-0x150,0x15,-0x4e)+(_0x529d2f(0x140,0x1ac,0x1b3,0x134)+_0x529d2f(0x3ee,0x2d3,0x1a9,0x276)+_0x529d2f(0x344,0x330,0x269,0x2fe)+'ish\x0a\x20\x20\x20\x20es'+'-es\x20\x20\x20\x20\x20Sp'+_0x529d2f(0x27b,0x1b8,0xda,0x24d)+_0x529d2f(0xdb,0x1b7,0x11c,0x23e)+_0x529d2f(0xd2,0x19c,0xfb,0x9c)+_0x385207(0x35,0x4,0xf1,0xbe)+_0x529d2f(0x12b,0x18e,0x218,0xea)+_0x529d2f(0x17f,0x138,0x268,0xdb)+_0x385207(0x20e,0x296,0x2cb,0x202)+'ili\x0a\x20\x20\x20\x20sv'+_0x529d2f(0x2a5,0x189,0x181,0x2a2)+_0x529d2f(0x2fc,0x30a,0x2e8,0x427)+_0x529d2f(0x129,0x22b,0x164,0x196)+'Tamil\x0a\x20\x20\x20\x20'+_0x385207(-0x87,-0xdd,-0xfb,-0x2a)+_0x385207(-0x5b,-0x9a,0xff,0x42)+_0x385207(0x1e6,-0x5c,0x10c,0xd7)+_0x385207(-0x151,-0x46,0x24,-0x18)+'\x20vi\x20\x20\x20\x20\x20\x20\x20'+'\x20Vietnames'+'e\x0a\x20\x20\x20\x20cy\x20\x20'+_0x529d2f(0x366,0x2c5,0x2dd,0x250)+_0x385207(0xc5,0x15e,-0x12,0x4b)),reply(kodenyab);break;case _0x385207(0x229,0x1ab,-0x1a,0x122):const _0x18d910={};_0x18d910[_0x385207(0xbf,0x1ef,0x188,0x1c0)]=mek;if(args[_0x385207(0x11b,-0xef,-0x86,0x36)]<-0x2*0x5b8+-0x3*-0x115+-0x1*-0x832)return alpha[_0x385207(0xba,0x248,0x2bb,0x1b4)+'e'](from,'Kode\x20bahas'+_0x529d2f(0x3c5,0x302,0x2f6,0x256)+_0x385207(0x24,0x1dd,0x1c,0xde),text,_0x18d910);kodenya=['af','sq','ar','hy','ca','zh',_0x529d2f(0x10a,0x146,0x248,0xb),'zh-tw',_0x385207(-0x91,-0x8e,-0xc0,0x6f),'hr','cs','da','nl','en','en-au',_0x529d2f(0x1bd,0x240,0x1ab,0x1f5),_0x385207(-0x76,0xdf,0x140,0x6e),'eo','fi','fr','de','el','ht','hi','hu','is','id','it','ja','ko','la','lv','mk','no','pl','pt',_0x529d2f(0x196,0x269,0x1b7,0x26b),'ro','ru','sr','sk','es',_0x385207(0x32,0xd3,0xa9,0xdc),_0x529d2f(0x2c7,0x1a8,0x9a,0x9b),'sw','sv','ta','th','tr','vi','cy'];try{const gtts=require('./lib/gtts')(args[-0x25ce+-0x16*0x6e+0x2f42]),_0x213ae1={};_0x213ae1[_0x529d2f(0x40d,0x357,0x440,0x3c7)]=mek;if(args[_0x529d2f(0x305,0x1cd,0x1e4,0x2dc)]<-0x1141*-0x1+-0x1*0x165a+0x51b)return alpha[_0x385207(0xd7,0x209,0x10e,0x1b4)+'e'](from,_0x529d2f(0x2b0,0x17e,0x116,0x161)+'na\x20om',text,_0x213ae1);dtt=body['slice'](0x21b9+-0x2f*-0x73+-0x36cd*0x1),ranm=getRandom(_0x385207(0x191,0x6d,0x1a6,0x1a1)),rano=getRandom('.ogg'),dtt['length']>-0x8*-0x3d5+-0x1*0xeef+0x19*-0x89?reply(_0x385207(0xdd,0x168,0x329,0x1fb)+_0x529d2f(0x271,0x308,0x229,0x3d8)+'m'):gtts['save'](ranm,dtt,function(){function _0x14096b(_0x1f24e4,_0x377796,_0x733e97,_0x483b67){return _0x385207(_0x483b67,_0x377796-0x189,_0x733e97-0x1de,_0x1f24e4-0x4b7);}const _0xb1002d={'LwsmW':function(_0x29a5c7,_0x1ccf7e){return _0x29a5c7 instanceof _0x1ccf7e;},'kouCv':function(_0x1c00a0,_0x2f1fcb){return _0x1c00a0===_0x2f1fcb;},'YmePg':_0x14096b(0x5d7,0x4ad,0x6ae,0x664),'PJzRn':_0x577bad(-0xd8,-0x110,-0x1e7,-0xa7),'AKiFB':function(_0x242809,_0x23a3ab){return _0x242809(_0x23a3ab);},'RwSVs':'Gagal\x20om:('};function _0x577bad(_0x34e827,_0x38876a,_0x5f053e,_0x36f475){return _0x385207(_0x5f053e,_0x38876a-0x118,_0x5f053e-0x1a7,_0x34e827- -0x262);}exec('ffmpeg\x20-i\x20'+ranm+('\x20-ar\x2048000'+_0x577bad(-0x8d,0xa9,-0x5f,-0x87)+_0x14096b(0x471,0x43b,0x4b4,0x38e))+rano,_0x27ee66=>{function _0x2ecb0f(_0x526ce9,_0xeb510c,_0x7cca53,_0x1bd376){return _0x577bad(_0x1bd376-0x179,_0xeb510c-0x8c,_0x526ce9,_0x1bd376-0x1d6);}function _0x1b63ac(_0x2d2ab2,_0x49f2de,_0x5aa140,_0xcdec33){return _0x577bad(_0x5aa140-0x4e6,_0x49f2de-0xa2,_0x2d2ab2,_0xcdec33-0x155);}if(_0xb1002d[_0x1b63ac(0x378,0x24e,0x2cc,0x254)](_0xb1002d[_0x2ecb0f(0x5a,0x66,0xad,0xfd)],_0xb1002d[_0x2ecb0f(0x10,0x109,0x148,0xfd)])){const _0x544891=_0xb1002d['PJzRn']['split']('|');let _0x42e457=-0x68*-0x12+0x2cc+-0xa1c;while(!![]){switch(_0x544891[_0x42e457++]){case'0':if(_0x27ee66)return _0xb1002d['AKiFB'](reply,_0xb1002d['RwSVs']);continue;case'1':buff=fs['readFileSy'+'nc'](rano);continue;case'2':const _0x211df9={};_0x211df9[_0x2ecb0f(0x165,0x212,-0x35,0xd7)]=mek,_0x211df9['ptt']=!![],alpha[_0x2ecb0f(0x99,0x7e,0x28,0xcb)+'e'](from,buff,audio,_0x211df9);continue;case'3':fs[_0x1b63ac(0x34e,0x3bc,0x3f1,0x4dc)](ranm);continue;case'4':fs[_0x2ecb0f(-0xa2,0xf0,0xae,0x84)](rano);continue;}break;}}else{let _0x106522=_0xb1002d[_0x2ecb0f(-0x1c3,-0x53,-0xfc,-0xfb)](_0x153ceb,_0x28f2fe)?_0x3a72aa:new _0x50e4b0(_0x28cdf3(_0x242fb8));return[_0x106522[_0x2ecb0f(-0x94,0x27,-0x119,-0x115)](_0x35860a[_0x2ecb0f(-0xcd,0x14e,0xeb,0x33)]),_0x106522];}});});}catch{reply(_0x529d2f(0x11a,0x222,0x29b,0x1d8)+'ggunaan\x20#t'+_0x529d2f(0x21c,0x150,0x1ba,0xd6)+_0x529d2f(0x235,0x191,0x1ae,0xd7)+_0x529d2f(0x277,0x2d1,0x225,0x196)+_0x529d2f(0x23f,0x30b,0x23a,0x3a4)+_0x385207(0x1b1,0x2c5,0x18a,0x1e4)+_0x385207(0xb7,0x95,0x189,0xdd)+'ode\x20bahasa'+_0x385207(-0xfc,-0x16f,-0x142,-0x37)+_0x385207(0xcb,-0x52,0x102,0x2c));}break;case _0x385207(-0xac,-0x137,0x63,-0xc):{const _0x103ea7={};_0x103ea7[_0x385207(0x1a5,0x258,0x96,0x17c)+'t']=_0x385207(0x1a4,0x93,0x55,0x85)+'t';const _0x859ddb={};_0x859ddb[_0x529d2f(0x24d,0x144,0x23b,0x1a6)]=_0x529d2f(0x37d,0x2ad,0x349,0x38b),_0x859ddb[_0x529d2f(0xba,0x158,0x291,0x25a)]=_0x103ea7,_0x859ddb['type']=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang['limit'](prefix),'©\x20'+ownername,[_0x859ddb]);if(!q)return fakegroup(_0x529d2f(0x34d,0x37a,0x48a,0x357)+'a?');var halzmal=q;const tod=await fetchJson(_0x385207(0x5b,0x4b,0x136,0xab)+'i.popcat.x'+_0x529d2f(0x31d,0x373,0x29a,0x237)+_0x529d2f(0x48d,0x3a0,0x2cc,0x421)+halzmal);var {username,full_name,biography,posts,reels,followers,following,private,verified,profile_pic}=tod;const txt=_0x529d2f(0x19d,0x168,0x228,0xaf)+_0x529d2f(0x308,0x1e1,0x214,0x10b)+username+(_0x385207(0xaf,0xf9,0x247,0x14e)+_0x529d2f(0x2e1,0x305,0x287,0x22e))+full_name+(_0x529d2f(0x27c,0x202,0x266,0x134)+_0x385207(-0x4e,-0x88,0x14f,0x35))+followers+(_0x529d2f(0x231,0x200,0x21b,0x1e1)+_0x529d2f(0x28b,0x235,0x16f,0x239))+following+_0x529d2f(0x11a,0x227,0x1f8,0x115)+posts+(_0x385207(0x156,0x17d,0x17a,0x98)+'ht\x20:\x20')+reels+(_0x385207(0x4a,0x51,0x1b4,0x152)+'\x20:\x20')+private+(_0x385207(0x14f,0x25d,0x11b,0x1b2)+_0x385207(0xd5,0x1d7,0x1fd,0xe1))+verified+(_0x529d2f(0x11e,0x1fd,0x2a6,0x242)+_0x385207(-0x4b,0xf6,0xf,0x76))+biography;sendFileFromUrl(m[_0x385207(0x25d,0xa9,0x142,0x192)],profile_pic,txt,mek),await limitAdd(sender,limit);}break;case _0x529d2f(0x1be,0x280,0x304,0x2ed):case _0x529d2f(0x13e,0x1c1,0x116,0x161)+'k':case _0x385207(0xde,0x37,0x263,0x163):{if(args[_0x529d2f(0x2ae,0x1cd,0xd0,0x2f4)]<0x192a+-0x2*0xbdd+-0x16f)return reply(_0x385207(-0xc,0x112,-0x80,0x8c)+'ntah\x20*'+prefix+(_0x529d2f(0x140,0x1dc,0x1bd,0x2d2)+_0x385207(0xf3,0x215,0x119,0xff)));reply(lang[_0x529d2f(0x279,0x2ef,0x1b8,0x3e0)]());let y=await fetchJson(_0x529d2f(0x2ac,0x242,0x188,0x36b)+'i.github.c'+_0x385207(0xa4,0x1c6,0x129,0xc2)+q),ppgt=await getBuffer(y[_0x385207(0xcb,-0x7a,0x15c,0x32)]),textt=_0x529d2f(0x230,0x1f2,0x2ac,0xc4)+'THUB\x20STALK'+_0x529d2f(0x299,0x1cb,0x2e9,0x17d)+enter+enter+(_0x529d2f(0x472,0x384,0x45f,0x276)+_0x529d2f(0x1c9,0x1e1,0x234,0x12e))+y['login']+enter+_0x529d2f(0xde,0x142,0x18a,0x2c)+y['name']+enter+_0x385207(0x2a,0xea,0xcb,0xc9)+y['id']+enter+(_0x385207(0xfc,0x18,0x10a,0x7)+':\x20')+y[_0x385207(0xb,0x1e,-0x199,-0x6e)]+enter+(_0x529d2f(0x8a,0x12c,0xd,-0xa)+_0x385207(-0x80,0x14c,0xf7,0x73))+y[_0x385207(0x1ce,0x20,0x108,0x157)]+enter+(_0x385207(0x103,0x1c5,0x191,0xa6)+_0x385207(0x4d,0xbb,0x25,-0x5b))+y[_0x529d2f(0x2c0,0x385,0x2e4,0x34c)]+enter+_0x529d2f(0x4f,0x128,0x18d,0x1b8)+y[_0x529d2f(0x299,0x37f,0x42c,0x3c5)]+enter+(_0x385207(0xbf,0x1f8,0x10b,0x1d4)+':\x20')+y[_0x385207(0x13b,0x139,0xd3,0x12)]+enter+_0x529d2f(0x396,0x35e,0x401,0x411)+y[_0x385207(0x1ca,0x224,0x4e,0x177)]+enter+(_0x385207(-0x9,-0x11,-0x5d,0x29)+'\x20:\x20')+y[_0x385207(-0x10c,0x71,0x91,-0x15)]+enter+_0x529d2f(0xf8,0x153,0x2c,0xaa)+y['email']+enter+'💌\x20Bio\x20:\x20'+y[_0x529d2f(0x1e7,0x1fa,0x1d6,0x219)]+enter+(_0x529d2f(0x1b1,0x2b0,0x39d,0x25f)+_0x385207(0x152,0x97,0x10,0xb5)+'\x20')+y[_0x529d2f(0x23f,0x32e,0x34b,0x350)+_0x529d2f(0x214,0x22a,0x157,0x10e)]+enter+(_0x529d2f(0x21c,0x26f,0x172,0x1ae)+_0x385207(0xc2,0x5c,-0x181,-0x4c))+y[_0x529d2f(0x402,0x30c,0x41a,0x2e9)+'os']+enter+('🌍\x20Public\x20G'+'its\x20:\x20')+y[_0x529d2f(0x338,0x320,0x2fa,0x28b)+'ts']+enter+(_0x385207(0x166,0x179,0x11e,0x1c8)+':\x20')+moment(y['created_at'])['tz']('Asia/Jakar'+'ta')[_0x385207(-0x136,-0x116,-0x15,0x3)]('id')['format'](_0x529d2f(0x27f,0x1f9,0x1c9,0x18e)+_0x529d2f(0x2c7,0x33b,0x454,0x22a))+enter+(_0x385207(0x18d,0x119,0xab,0x112)+'\x20')+moment(y[_0x385207(-0x21,0x14b,-0x8,0x108)])['tz'](_0x529d2f(0x409,0x38e,0x3d2,0x38c)+'ta')['locale']('id')['format'](_0x385207(-0x68,0x49,-0x68,0x62)+'D/MM/YYYY')+enter+('➿\x20Url\x20:\x20ht'+_0x385207(-0x94,0x1a1,0x92,0xa7)+_0x529d2f(0x2c0,0x22c,0x1c0,0x1bc))+q;const _0x1a9624={};_0x1a9624['caption']=textt,_0x1a9624[_0x529d2f(0x3a7,0x357,0x40c,0x2d1)]=mek,alpha[_0x529d2f(0x2a1,0x34b,0x2fd,0x44a)+'e'](from,ppgt,image,_0x1a9624),await limitAdd(sender,limit);}break;case _0x529d2f(0x476,0x377,0x249,0x30a):const _0x228ab4={};_0x228ab4['productId']=_0x529d2f(0x17c,0x15c,0x1ce,0x178)+_0x529d2f(0x343,0x2a4,0x37d,0x3ab);const _0x3aa4fc={};_0x3aa4fc[_0x385207(-0x14e,0xa0,-0x98,-0x68)]=_0x385207(-0x168,-0x168,0xcc,-0x48)+_0x385207(-0xb7,-0xe6,-0xb1,-0x14),_0x3aa4fc[_0x385207(0xba,0x1a9,0x19d,0xc1)]=[_0x228ab4];const _0x91e300={};_0x91e300[_0x529d2f(0x275,0x2e1,0x3f7,0x38c)]=_0x385207(0xe5,0x126,0xc8,0x11b)+_0x385207(0x292,0x10a,0x11d,0x18b);const _0x212063={};_0x212063['title']='ORDER\x20BOT\x20'+_0x529d2f(0x3a0,0x2c8,0x37d,0x270)+'AN',_0x212063[_0x385207(0x190,0x1b0,0x187,0xc1)]=[_0x91e300];const _0x4778b2={};_0x4778b2[_0x385207(0x33,0x2b,0x185,0x14a)]=_0x385207(-0x5,0x69,0x1c2,0x121)+_0x529d2f(0x2a9,0x243,0x1e5,0x193);const _0x53ed08={};_0x53ed08[_0x385207(0x5b,-0x5f,-0x14b,-0x68)]=_0x385207(0x8,0x150,0x216,0x101)+'OT\x20VIA\x20HER'+_0x529d2f(0x261,0x2ec,0x2d3,0x266),_0x53ed08['products']=[_0x4778b2];const _0x4d3989={};_0x4d3989[_0x529d2f(0x24c,0x357,0x2dd,0x39e)]=mek,lisduct=await alpha['prepareMes'+'sageFromCo'+_0x529d2f(0x1ca,0x17d,0x79,0x1a1)](from,{'listMessage':{'title':_0x529d2f(0x205,0x14f,0x2b,0x9f)+'RMANEN','description':_0x385207(-0x25,0xf6,0x1b9,0xaf)+'ang\x20bot\x20mu'+_0x385207(0x10f,0x4a,0xff,0xcf)+_0x385207(0x114,0xee,0xa2,0xa3)+_0x385207(0x6c,-0x4,-0x68,-0x27)+'\x20sekarang\x20'+_0x529d2f(0x33c,0x204,0x2d8,0x2de)+_0x385207(0xe5,-0x20,-0x31,0xb)+'adi\x20owner\x20'+_0x529d2f(0x106,0x203,0x1fe,0x2d9)+_0x385207(-0x161,-0x38,-0x9e,-0x3c)+_0x529d2f(0x270,0x1c5,0x1f3,0x94)+'\x20sediakan\x20'+_0x529d2f(0x3a8,0x2ed,0x308,0x276)+_0x529d2f(0x50,0x166,0x142,0x28d)+_0x529d2f(0x2f2,0x1f5,0x246,0x1b5)+_0x529d2f(0x3e5,0x363,0x400,0x232)+_0x385207(0x5c,0x6d,-0x41,0xc8)+'ekali\x20bisa'+_0x385207(-0x59,0xae,-0x1c,0x52)+_0x385207(0x1ab,0x5f,0x150,0x15b),'buttonText':'','listType':'PRODUCT_LI'+'ST','productListInfo':{'productSections':[_0x3aa4fc,_0x212063,_0x53ed08],'headerImage':{'jpegThumbnail':fs[_0x385207(0x9b,0x1d9,0x223,0x187)+'nc'](_0x529d2f(0x26a,0x310,0x240,0x253)+thumbnail)},'businessOwnerJid':_0x385207(-0xbd,0x66,-0x2e,0x1e)+_0x385207(0x92,0x94,0x1a5,0xef)+'tsapp.net'},'footerText':'Jika\x20Minat'+_0x529d2f(0x280,0x1e5,0x281,0x21e)+'Lihat\x20Item'}},_0x4d3989);const _0x4c31b8={};_0x4c31b8[_0x385207(0x53,0x3c,-0xd3,0x57)]=!![],alpha['relayWAMes'+_0x529d2f(0x170,0x1b9,0x1bd,0x15a)](lisduct,_0x4c31b8);break;case _0x529d2f(0x2bc,0x276,0x2ad,0x384):{const flamingtext=_0x385207(0x27e,0x10,0x1f9,0x14c)+_0x529d2f(0x157,0x1a4,0xf0,0x25c)+'text.com/n'+_0x529d2f(0x28c,0x293,0x2d4,0x2f5)+_0x529d2f(0x3cd,0x38a,0x4b4,0x3b4)+_0x385207(-0x2d,0x17f,0xfb,0x84)+_0x385207(0x198,0x1dd,-0x41,0xc3)+_0x385207(0x63,0x109,0x8e,0xc)+_0x385207(0x139,0x83,0x21a,0x164)+_0x385207(0xcc,0xd6,0x27f,0x150)+'&scaleWidt'+'h=800&scal'+_0x385207(0x15f,0x96,0x1cf,0x1ad)+_0x529d2f(0x2f8,0x1fe,0x13d,0x134)+_0x529d2f(0x23b,0x198,0x2d4,0x268)+_0x385207(0x1d6,0x1b3,-0x20,0x104)+'fillTextPa'+'ttern=Warn'+_0x385207(-0x17,0xa8,-0x68,-0x6d);if(isGroup)return reply(_0x385207(-0xfb,0x92,0x8,0x3f)+'te\x20chat');this[_0x385207(0x10b,0x114,0x16f,0xdf)]=this[_0x529d2f(0x2aa,0x276,0x358,0x357)]?this[_0x385207(0x50,-0x17,-0x30,0xdf)]:{},anonymousloc=await getBuffer(flamingtext+(_0x529d2f(0x347,0x24f,0x265,0x335)+_0x385207(0x129,0x242,0x173,0x1a2)));const _0x4335fd={};_0x4335fd['displayTex'+'t']=_0x385207(0xfb,0x128,0x160,0x126);const _0x83151d={};_0x83151d[_0x529d2f(0x21a,0x144,0x38,0x1bb)]=_0x529d2f(0x2f5,0x1c8,0x1ef,0xbb),_0x83151d[_0x529d2f(0x18b,0x158,0x137,0x21b)]=_0x4335fd,_0x83151d['type']=0x1;const _0xc93ee8={};_0xc93ee8[_0x385207(0x172,0x153,0x58,0x17c)+'t']='START';const _0x3973fe={};_0x3973fe[_0x529d2f(0x26e,0x144,0xd0,0x194)]=_0x385207(0xb0,0x9a,-0x71,-0x69),_0x3973fe[_0x385207(0x24,-0x6a,-0x152,-0x3f)]=_0xc93ee8,_0x3973fe['type']=0x1;const _0x5d5a2a={};_0x5d5a2a[_0x529d2f(0x344,0x357,0x383,0x3cf)]=mek,sendButLocation(from,'Welcome\x20To'+_0x529d2f(0x19c,0x181,0x84,0x1aa)+_0x529d2f(0x119,0x1a5,0xc8,0xac)+prefix+(_0x529d2f(0x294,0x211,0x213,0x18a)+'arch\x20Partn'+'er\x0a')+prefix+(_0x529d2f(0x485,0x34d,0x253,0x3db)+_0x529d2f(0x312,0x248,0x25c,0x2b6))+prefix+(_0x385207(0x1d5,0x132,0x1ac,0x1c6)+_0x385207(0x179,0x211,0x247,0x1f4)+'r'),_0x385207(0x129,0xff,0x2da,0x1b0)+'t\x20'+botname+_0x529d2f(0x23a,0x31a,0x382,0x333),anonymousloc,[_0x83151d,_0x3973fe],_0x5d5a2a);}break;case'keluar':case _0x529d2f(0x39b,0x26a,0x34f,0x1f0):{if(isGroup)return reply(_0x529d2f(0x1ad,0x1d6,0x147,0x22c)+_0x385207(0x6,-0x12b,-0x14,0x2));this[_0x385207(-0x5e,0x1a4,0x182,0xdf)]=this['anonymous']?this[_0x385207(0x102,0xea,0x145,0xdf)]:{};let room=Object['values'](this['anonymous'])[_0x385207(0x150,-0x5,0xcb,0x10e)](_0x593c03=>_0x593c03[_0x529d2f(0x38d,0x354,0x33b,0x3bf)](m[_0x529d2f(0x491,0x381,0x346,0x32c)]));if(!room){const _0x2b099c={};_0x2b099c[_0x385207(0x166,0x163,0xd5,0x17c)+'t']=_0x385207(0x79,-0x9,0x71,0x2b);const _0x14ddfc={};_0x14ddfc[_0x385207(-0x41,-0xf1,-0x60,-0x53)]=_0x385207(0x4,0x14,0xf,-0x69),_0x14ddfc[_0x385207(0x6e,0x94,-0x4b,-0x3f)]=_0x2b099c,_0x14ddfc[_0x529d2f(0x3eb,0x37f,0x2d6,0x34e)]=0x1;const _0x4ec2e7={};_0x4ec2e7[_0x385207(0x2b9,0x1e6,0x122,0x1c0)]=mek,await sendButMessage(from,'Kamu\x20Tidak'+_0x529d2f(0x300,0x2b6,0x189,0x35a)+_0x385207(-0x2d,0x101,-0x8b,-0x16)+_0x385207(0x16a,0x25,0x1e3,0xe4)+_0x385207(0x115,0x17e,0x14a,0x1fa)+'Untuk\x20Star'+_0x385207(0x61,0x1d7,0x63,0x12d)+_0x385207(0x262,0x26d,0x13b,0x178),_0x529d2f(0x448,0x347,0x242,0x3ed)+'t\x20'+botname+'\x202021',[_0x14ddfc],_0x4ec2e7);throw![];}const _0x37f39c={};_0x37f39c[_0x529d2f(0x2dd,0x313,0x315,0x36a)+'t']=_0x385207(-0xe9,-0xe9,0xd8,0x2b);const _0x421e48={};_0x421e48[_0x529d2f(0x22a,0x144,0x277,0xa6)]=_0x385207(0x2,0x30,-0x41,-0x69),_0x421e48['buttonText']=_0x37f39c,_0x421e48[_0x385207(0x249,0x23d,0x198,0x1e8)]=0x1;const _0x46ba94={};_0x46ba94[_0x385207(0x2a4,0xe1,0xc4,0x1c0)]=mek,sendButMessage(from,_0x529d2f(0x3be,0x2e4,0x2d4,0x389)+_0x385207(0x12b,0x294,0x17a,0x201)+'Dari\x20Sesi\x20'+_0x529d2f(0x253,0x24f,0x210,0x15d)+_0x385207(0x84,0x7e,0xb9,0x147),_0x529d2f(0x378,0x347,0x339,0x3c1)+'t\x20'+botname+_0x385207(0xbe,0x1cd,0x1fa,0x11d),[_0x421e48],_0x46ba94);let other=room[_0x385207(0x263,0x6d,0x1db,0x145)](m[_0x385207(0xf8,0x1c0,0x21b,0x1ea)]);const _0xd2a95={};_0xd2a95[_0x385207(0x21a,0x1e2,0x226,0x17c)+'t']=_0x529d2f(0x194,0x1c2,0x1aa,0x180);const _0x1d976c={};_0x1d976c['buttonId']='start',_0x1d976c['buttonText']=_0xd2a95,_0x1d976c[_0x385207(0x218,0x1d0,0x23b,0x1e8)]=0x1;const _0x508d0a={};_0x508d0a[_0x385207(0x115,0xd4,0x206,0x1c0)]=mek;if(other)await sendButMessage(other,_0x529d2f(0x10f,0x20e,0x19d,0x211)+'\x20meninggal'+_0x529d2f(0x117,0x219,0x192,0x218),_0x529d2f(0x427,0x347,0x3f8,0x20f)+'t\x20'+botname+_0x529d2f(0x250,0x2b4,0x294,0x31c),[_0x1d976c],_0x508d0a);delete this[_0x529d2f(0x309,0x276,0x2aa,0x1c9)][room['id']];if(command==='leave')break;}case _0x385207(0x18d,0x2d7,0xec,0x1a3):case _0x529d2f(0x51,0x12e,0x247,0x1f4):{if(isGroup)return reply(_0x529d2f(0xc3,0x1d6,0xac,0x284)+_0x385207(-0x8d,-0x10d,-0xbd,0x2));this['anonymous']=this[_0x529d2f(0x296,0x276,0x28b,0x1ee)]?this[_0x385207(0x74,0x1ed,0xf3,0xdf)]:{};if(Object[_0x385207(0x227,0x3d,0x1c6,0x167)](this[_0x529d2f(0x25b,0x276,0x229,0x250)])[_0x385207(0x221,0x246,0x105,0x10e)](_0x34d2fd=>_0x34d2fd['check'](m['sender']))){const _0x223ed2={};_0x223ed2[_0x385207(0x224,0x283,0x1a4,0x17c)+'t']=_0x385207(0x2e3,0x2a5,0x13c,0x1af);const _0x2c1822={};_0x2c1822[_0x385207(-0x28,-0x7b,-0x157,-0x53)]='leave',_0x2c1822[_0x385207(-0xd2,0xfd,-0x74,-0x3f)]=_0x223ed2,_0x2c1822[_0x385207(0xb3,0x199,0x314,0x1e8)]=0x1;const _0x567dce={};_0x567dce[_0x385207(0xcc,0x2c5,0x2bf,0x1c0)]=mek,await sendButMessage(from,_0x385207(0x1,0x19b,0x56,0x88)+_0x385207(0x7,0x19f,0x1a2,0x11f)+_0x529d2f(0x287,0x181,0x158,0x215)+_0x385207(0x136,0x7b,0x184,0x1ac),_0x529d2f(0x3e8,0x347,0x3f4,0x261)+'t\x20'+botname+'\x202021',[_0x2c1822],_0x567dce);throw![];}let room=Object[_0x529d2f(0x390,0x2fe,0x2a6,0x429)](this['anonymous'])[_0x529d2f(0x249,0x2a5,0x322,0x336)](_0x4c21ff=>_0x4c21ff[_0x529d2f(0x2b3,0x2a0,0x352,0x3b9)]==='WAITING'&&!_0x4c21ff[_0x529d2f(0x248,0x354,0x3b7,0x21a)](m[_0x385207(0x2ef,0x149,0x22f,0x1ea)]));if(room){const _0x4a7d4c={};_0x4a7d4c[_0x385207(0x2a3,0xf4,0x16e,0x17c)+'t']=_0x385207(0xa7,0x141,0x222,0x1af);const _0x2f443a={};_0x2f443a[_0x385207(-0xe0,0x81,-0x2b,-0x53)]='leave',_0x2f443a[_0x385207(-0x46,-0x33,-0xe6,-0x3f)]=_0x4a7d4c,_0x2f443a[_0x529d2f(0x338,0x37f,0x46b,0x3aa)]=0x1;const _0xebb229={};_0xebb229[_0x529d2f(0x441,0x313,0x326,0x444)+'t']=_0x529d2f(0x2a7,0x20b,0x318,0xdb);const _0x2bca0b={};_0x2bca0b[_0x529d2f(0x258,0x144,0x118,0x1e2)]=_0x385207(0x4a,0x34,0x269,0x13e),_0x2bca0b['buttonText']=_0xebb229,_0x2bca0b[_0x385207(0xeb,0x10e,0x19b,0x1e8)]=0x1;const _0x39d2a7={};_0x39d2a7[_0x529d2f(0x44d,0x357,0x460,0x2b9)]=mek,await sendButMessage(room['a'],_0x529d2f(0x1c2,0x18a,0x8a,0x115)+_0x385207(0x2c6,0x2c0,0x2ae,0x1f8)+'🎭','©\x20Copyrigh'+'t\x20'+botname+_0x529d2f(0x28d,0x2b4,0x211,0x1b3),[_0x2f443a,_0x2bca0b],_0x39d2a7),room['b']=m[_0x529d2f(0x282,0x381,0x48f,0x391)],room[_0x385207(0x6e,0x27,-0x7,0x109)]='CHATTING';const _0x1948ba={};_0x1948ba['displayTex'+'t']=_0x529d2f(0x3d0,0x346,0x441,0x27e);const _0x51cfd7={};_0x51cfd7[_0x529d2f(0x235,0x144,0x149,0x21a)]=_0x385207(0x9b,0x72,-0x42,0xd3),_0x51cfd7[_0x529d2f(0x67,0x158,0x12b,0x1d7)]=_0x1948ba,_0x51cfd7[_0x385207(0x23a,0xdc,0x1e1,0x1e8)]=0x1;const _0x780563={};_0x780563[_0x529d2f(0x25e,0x313,0x332,0x3a9)+'t']=_0x529d2f(0x1ec,0x20b,0x1ca,0x1ce);const _0x42c64d={};_0x42c64d[_0x529d2f(0x16d,0x144,0x172,0xd6)]=_0x529d2f(0x3fe,0x2d5,0x204,0x37e),_0x42c64d[_0x529d2f(0x74,0x158,0x22d,0xad)]=_0x780563,_0x42c64d[_0x385207(0x163,0x1d3,0x138,0x1e8)]=0x1;const _0x4867e0={};_0x4867e0['quoted']=mek,await sendButMessage(room['b'],_0x529d2f(0x153,0x18a,0x7a,0x288)+_0x385207(0x101,0x1f9,0x236,0x1f8)+'🎭','©\x20Copyrigh'+'t\x20'+botname+_0x529d2f(0x17a,0x2b4,0x1d8,0x18d),[_0x51cfd7,_0x42c64d],_0x4867e0);}else{let id=+new Date();this[_0x385207(0x205,0x6,0x158,0xdf)][id]={'id':id,'a':m[_0x529d2f(0x355,0x381,0x484,0x32c)],'b':'','state':_0x529d2f(0x45b,0x34e,0x237,0x464),'check':function(_0x1813d5=''){function _0x2a46c1(_0x3cc5c7,_0x45125a,_0x256eb9,_0x2aba3a){return _0x529d2f(_0x3cc5c7-0x44,_0x2aba3a- -0x41,_0x256eb9-0xf0,_0x256eb9);}return[this['a'],this['b']][_0x2a46c1(0x9b,0xb0,0x1c8,0xf9)](_0x1813d5);},'other':function(_0x33872e=''){const _0x5c53fd={};function _0x4adf09(_0x5e51ff,_0x4e7407,_0x39bfb9,_0xbd9aab){return _0x385207(_0x4e7407,_0x4e7407-0x107,_0x39bfb9-0x198,_0x39bfb9-0x510);}_0x5c53fd[_0x4adf09(0x524,0x5b2,0x51a,0x59d)]=function(_0xca8ab7,_0x3706ec){return _0xca8ab7===_0x3706ec;};function _0x206074(_0x529c66,_0x34a7db,_0x57ca90,_0x40bd4b){return _0x529d2f(_0x529c66-0x190,_0x34a7db- -0x1f3,_0x57ca90-0x1cc,_0x57ca90);}_0x5c53fd[_0x4adf09(0x644,0x53f,0x63c,0x6e1)]=function(_0x3ededf,_0xe905a9){return _0x3ededf===_0xe905a9;};const _0x5cfb6b=_0x5c53fd;return _0x5cfb6b[_0x4adf09(0x4b5,0x5fa,0x51a,0x3fe)](_0x33872e,this['a'])?this['b']:_0x5cfb6b[_0x206074(0x6c,0xd0,0x10,0xc6)](_0x33872e,this['b'])?this['a']:'';}};const _0x1891ff={};_0x1891ff[_0x385207(0x86,0x1c1,0x1e0,0x17c)+'t']='LEAVE';const _0x4103cf={};_0x4103cf[_0x385207(-0xbe,-0x117,-0x81,-0x53)]=_0x385207(-0xc,0x1d3,0x165,0xd3),_0x4103cf['buttonText']=_0x1891ff,_0x4103cf[_0x385207(0x27e,0x1e4,0x120,0x1e8)]=0x1;const _0x586c0a={};_0x586c0a[_0x385207(0x1a0,0xd9,0x146,0x1c0)]=mek,await sendButMessage(m[_0x529d2f(0x292,0x329,0x28f,0x224)],_0x529d2f(0x340,0x2b1,0x26f,0x353)+'u\x20Partner_',_0x529d2f(0x2b9,0x347,0x3b7,0x41b)+'t\x20'+botname+_0x529d2f(0x20f,0x2b4,0x34f,0x2f9),[_0x4103cf],_0x586c0a);}break;}case _0x385207(0xbe,-0xc7,0x79,0x70):case _0x529d2f(0x273,0x2d5,0x3ed,0x20e):case _0x529d2f(0x221,0x323,0x2c3,0x305):{if(isGroup)return reply('Fitur\x20Tida'+'k\x20Dapat\x20Di'+_0x529d2f(0x256,0x299,0x2f4,0x374)+_0x385207(0x196,0x1b9,0x1c7,0x17d));this[_0x385207(0x50,0x183,0x17b,0xdf)]=this[_0x529d2f(0x375,0x276,0x299,0x17c)]?this[_0x529d2f(0x1fd,0x276,0x34d,0x25c)]:{};let romeo=Object[_0x385207(0x164,0x1d4,0xd8,0x167)](this['anonymous'])[_0x529d2f(0x305,0x2a5,0x2c6,0x389)](_0x18cd98=>_0x18cd98[_0x529d2f(0x48f,0x354,0x453,0x2e0)](m[_0x529d2f(0x357,0x381,0x376,0x450)]));if(!romeo){const _0x4b3b9d={};_0x4b3b9d[_0x529d2f(0x260,0x313,0x1fb,0x305)+'t']=_0x385207(0x7b,0x3e,-0xe9,0x2b);const _0x4fd71c={};_0x4fd71c['buttonId']=_0x529d2f(0xec,0x12e,0x83,0x32),_0x4fd71c[_0x529d2f(0xa7,0x158,0x21d,0x207)]=_0x4b3b9d,_0x4fd71c[_0x385207(0x144,0x220,0x177,0x1e8)]=0x1;const _0x355fda={};_0x355fda[_0x529d2f(0x263,0x357,0x27a,0x438)]=mek,await sendButMessage(from,'Kamu\x20Tidak'+_0x385207(0x1c8,0x11,0x242,0x11f)+_0x385207(0x51,0x58,-0x12,-0x16)+_0x529d2f(0x34d,0x27b,0x321,0x1a6)+_0x529d2f(0x2cf,0x391,0x2a5,0x3bc)+_0x385207(-0x198,0xad,-0x14b,-0x6a)+_0x529d2f(0x18e,0x2c4,0x275,0x295)+_0x529d2f(0x388,0x30f,0x3fd,0x3de),'©\x20Copyrigh'+'t\x20'+botname+'\x202021',[_0x4fd71c],_0x355fda);throw![];}let other=romeo['other'](m[_0x385207(0x12c,0x2ff,0xc8,0x1ea)]);const _0x14333b={};_0x14333b[_0x529d2f(0x30e,0x313,0x33c,0x227)+'t']=_0x529d2f(0xd8,0x1c2,0x2ae,0x1ba);const _0xc2e00b={};_0xc2e00b['buttonId']=_0x529d2f(0x24b,0x12e,0x61,0x22b),_0xc2e00b[_0x385207(-0xd1,0x41,-0x10c,-0x3f)]=_0x14333b,_0xc2e00b[_0x529d2f(0x29e,0x37f,0x291,0x482)]=0x1;const _0x29b922={};_0x29b922[_0x529d2f(0x24e,0x357,0x247,0x3a8)]=mek;if(other)sendButMessage(other,_0x529d2f(0x1e6,0x20e,0x2c4,0xfc)+_0x385207(0x1d9,0x79,0x2ab,0x195)+_0x385207(-0xb3,0x9d,0x1ab,0x82),'©\x20Copyrigh'+'t\x20\x20'+botname+_0x529d2f(0x2a7,0x2b4,0x2b0,0x178),[_0xc2e00b],_0x29b922);delete this['anonymous'][romeo['id']];let room=Object[_0x529d2f(0x3ab,0x2fe,0x27a,0x2d8)](this[_0x385207(-0xa,0x21c,0x5c,0xdf)])[_0x385207(0x10,0x1fd,0x1dd,0x10e)](_0x5d9983=>_0x5d9983[_0x529d2f(0x249,0x2a0,0x38e,0x20e)]===_0x529d2f(0x452,0x34e,0x41c,0x3b7)&&!_0x5d9983[_0x385207(0x197,0x241,0x1c0,0x1bd)](m[_0x385207(0x164,0x287,0x109,0x1ea)]));if(room){const _0x17d016={};_0x17d016[_0x529d2f(0x316,0x313,0x2be,0x41a)+'t']=_0x529d2f(0x3ca,0x346,0x3b5,0x2a5);const _0x3f6f27={};_0x3f6f27['buttonId']=_0x385207(0xd5,0x1e8,-0x1e,0xd3),_0x3f6f27[_0x385207(-0x29,-0x6b,-0x122,-0x3f)]=_0x17d016,_0x3f6f27[_0x385207(0xf1,0x109,0x231,0x1e8)]=0x1;const _0x186939={};_0x186939[_0x385207(0x1e6,0x73,0x158,0x17c)+'t']='SKIP';const _0x4a47a6={};_0x4a47a6[_0x385207(-0x15,0x80,0xcb,-0x53)]=_0x385207(0x71,0x129,0x196,0x13e),_0x4a47a6[_0x385207(-0x90,-0x141,-0x95,-0x3f)]=_0x186939,_0x4a47a6[_0x529d2f(0x3f9,0x37f,0x3a9,0x290)]=0x1;const _0x46ff28={};_0x46ff28[_0x529d2f(0x387,0x357,0x2eb,0x3be)]=mek,await sendButMessage(room['a'],'_Partner\x20D'+'itemukan_\x20'+'🎭','©\x20Copyrigh'+'t\x20'+botname+_0x529d2f(0x1da,0x2b4,0x196,0x370),[_0x3f6f27,_0x4a47a6],_0x46ff28),room['b']=m[_0x529d2f(0x46e,0x381,0x340,0x2aa)],room[_0x529d2f(0x184,0x2a0,0x1be,0x246)]='CHATTING';const _0x358a01={};_0x358a01[_0x385207(0x17b,0xbc,0x169,0x17c)+'t']=_0x385207(0x22e,0x28f,0xec,0x1af);const _0x447cd1={};_0x447cd1['buttonId']=_0x529d2f(0x16d,0x26a,0x158,0x20d),_0x447cd1['buttonText']=_0x358a01,_0x447cd1[_0x385207(0x2f0,0x11a,0x30e,0x1e8)]=0x1;const _0x5f1784={};_0x5f1784['displayTex'+'t']=_0x385207(-0x3e,-0x8c,-0x7b,0x74);const _0x19db7e={};_0x19db7e[_0x529d2f(0x118,0x144,0x177,0x10b)]='skip',_0x19db7e[_0x385207(-0x106,0x92,-0x16f,-0x3f)]=_0x5f1784,_0x19db7e[_0x529d2f(0x39c,0x37f,0x34a,0x27a)]=0x1;const _0x5816f1={};_0x5816f1[_0x529d2f(0x3fa,0x357,0x258,0x390)]=mek,await sendButMessage(room['b'],'_Partner\x20D'+_0x385207(0x18b,0x235,0x182,0x1f8)+'🎭',_0x385207(0x25b,0x203,0xbb,0x1b0)+'t\x20'+botname+_0x385207(0x1b1,0x1b8,0x1b7,0x11d),[_0x447cd1,_0x19db7e],_0x5816f1);}else{let id=+new Date();this['anonymous'][id]={'id':id,'a':m[_0x385207(0x20a,0x226,0xdd,0x1ea)],'b':'','state':_0x529d2f(0x3e5,0x34e,0x31e,0x3e1),'check':function(_0x41fdf5=''){function _0x25960e(_0x5d56d2,_0x3a0626,_0xb66494,_0x14bc54){return _0x529d2f(_0x5d56d2-0x144,_0x3a0626-0x135,_0xb66494-0x6d,_0x5d56d2);}return[this['a'],this['b']][_0x25960e(0x178,0x26f,0x260,0x3a3)](_0x41fdf5);},'other':function(_0x4102e0=''){const _0xebf8f7={};_0xebf8f7[_0x16cf05(0x58b,0x677,0x579,0x64b)]=function(_0x2b98fc,_0x143318){return _0x2b98fc===_0x143318;};function _0x16cf05(_0x3d473a,_0x525ddf,_0x58d95e,_0x2cf649){return _0x385207(_0x525ddf,_0x525ddf-0x28,_0x58d95e-0x1d1,_0x2cf649-0x53f);}const _0x32988f=_0xebf8f7;return _0x32988f['nuRpp'](_0x4102e0,this['a'])?this['b']:_0x4102e0===this['b']?this['a']:'';}};const _0x4b97d6={};_0x4b97d6['displayTex'+'t']=_0x529d2f(0x323,0x346,0x302,0x25a);const _0x127c0b={};_0x127c0b[_0x385207(0x12,-0x92,0x7,-0x53)]=_0x385207(0x11c,0xe6,0x189,0xd3),_0x127c0b[_0x529d2f(0x109,0x158,0x1cd,0x135)]=_0x4b97d6,_0x127c0b['type']=0x1;const _0x2cc305={};_0x2cc305[_0x385207(0x2db,0x1a1,0x215,0x1c0)]=mek,await sendButMessage(m[_0x529d2f(0x417,0x329,0x245,0x261)],_0x529d2f(0x1cb,0x2b1,0x324,0x213)+'u\x20Partner_',_0x385207(0x89,0x220,0xe5,0x1b0)+'t\x20'+botname+_0x385207(0xb7,0x188,0x231,0x11d),[_0x127c0b],_0x2cc305);}break;}}
if (isGroup && budy != undefined) {
	} else {
	console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m CHAT \x1b[1;37m]', timuu, color(q), 'from', color(pushname))
	}		
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero")) {
	console.log('Message : %s', color(e, 'green'))
        }
	// console.log(e)
	}
}
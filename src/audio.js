const click = require('./resources/click_01.wav')
const achi = require('./resources/achi.mp3')

const sounds = {}

sounds.click = document.createElement('audio')
sounds.click.src = click

sounds.achi = document.createElement('audio')
sounds.achi.src = achi

export default sounds

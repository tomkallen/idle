import { Howl } from 'howler'

const click = require('./resources/click_01.wav')
const achi = require('./resources/achi.mp3')

export default {
  click: new Howl({src: [click]}),
  achi: new Howl({src: [achi]})
}



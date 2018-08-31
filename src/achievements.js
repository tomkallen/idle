import store from './store'

export const achievements = [
  {
    name: 'My first crop',
    info: 'Collect 250 wheat',
    active: false,
    score: 5,
    isQualified () {
      return store.resources.wheat >= 250
    }
  },
  {
    name: 'Are you logging this?',
    info: 'Collect 500 wood',
    active: false,
    score: 5,
    isQualified () {
      return store.resources.wood >= 500
    }
  },
  {
    name: 'Get stoned',
    info: 'Collect 600 stone',
    active: false,
    score: 5,
    isQualified () {
      return store.resources.stone >= 600
    }
  }
]
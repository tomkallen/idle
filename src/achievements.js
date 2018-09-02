import store from './store'

export const achievements = [
  {
    id: 1001,
    name: 'My first crop',
    info: 'Collect 250 wheat',
    category: 'resources',
    active: false,
    score: 5,
    isQualified () {
      return store.resources.wheat >= 250
    }
  },
  {
    id: 1011,
    name: 'Are you logging this?',
    info: 'Collect 500 wood',
    category: 'resources',
    active: false,
    score: 5,
    isQualified () {
      return store.resources.wood >= 500
    }
  },
  {
    id: 1021,
    name: 'Get stoned',
    info: 'Collect 600 stone',
    category: 'resources',
    active: false,
    score: 5,
    isQualified () {
      return store.resources.stone >= 600
    }
  }
]
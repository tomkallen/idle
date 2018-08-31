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
  }
]
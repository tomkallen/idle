import store from '../../store'

export default [
  {
    id: 1001,
    name: 'My First Crop',
    info: 'Accumulate 1000 wheat',
    category: 'resources',
    active: false,
    score: 5,
    isQualified () {
      return store.resources.wheat >= 1000
    }
  },
  {
    id: 1002,
    name: 'Wheat & Sweat',
    info: 'Accumulate 5000 wheat',
    category: 'resources',
    active: false,
    score: 5,
    isQualified () {
      return store.resources.wheat >= 5000
    }
  },
  {
    id: 1003,
    name: 'We Gonna Need A Larger Barn',
    info: 'Accumulate 25000 wheat',
    category: 'resources',
    active: false,
    score: 5,
    isQualified () {
      return store.resources.wheat >= 25000
    }
  },
  {
    id: 1011,
    name: 'Are you logging this?',
    info: 'Accumulate 750 wood',
    category: 'resources',
    active: false,
    score: 5,
    isQualified () {
      return store.resources.wood >= 750
    }
  },

  {
    id: 1012,
    name: 'Wooden Logic',
    info: 'Accumulate 4000 wood',
    category: 'resources',
    active: false,
    score: 5,
    isQualified () {
      return store.resources.wood >= 4000
    }
  },
  {
    id: 1021,
    name: 'Get stoned',
    info: 'Accumulate 500 stone',
    category: 'resources',
    active: false,
    score: 5,
    isQualified () {
      return store.resources.stone >= 500
    }
  },
  {
    id: 1022,
    name: 'Stone Cold',
    info: 'Accumulate 2500 stone',
    category: 'resources',
    active: false,
    score: 5,
    isQualified () {
      return store.resources.stone >= 2500
    }
  },
  {
    id: 1051,
    name: 'Giddy Up!',
    info: 'Accumulate 200 horses',
    category: 'resources',
    active: false,
    score: 5,
    isQualified () {
      return store.resources.horses >= 200
    }
  },
  {
    id: 1052,
    name: 'Fells Like Stallion',
    info: 'Accumulate 1000 horses',
    category: 'resources',
    active: false,
    score: 10,
    isQualified () {
      return store.resources.horses >= 1000
    }
  }
]
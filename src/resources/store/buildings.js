import {getPrice, getSpeed, getId} from './utils'

export default [
  {
    index: getId(),
    name: 'Wheat Farm',
    produces: 'wheat',
    speed: 1,
    price: 50,
    currency: 'gold',
    priceModifier: 1.07,
    productionModifier: 1.15,
    level: 0,
    getPrice,
    getSpeed

  },
  {
    index: getId(),
    name: 'Woodcutter Cabin',
    produces: 'wood',
    speed: 0.9,
    price: 75,
    currency: 'gold',
    priceModifier: 1.09,
    productionModifier: 1.15,
    level: 0,
    getPrice: getPrice,
    getSpeed: getSpeed
  },
  {
    index: getId(),
    name: 'Stone Quarry',
    produces: 'stone',
    speed: 0.75,
    price: 160,
    currency: 'gold',
    priceModifier: 1.11,
    productionModifier: 1.15,
    level: 0,
    getPrice: getPrice,
    getSpeed: getSpeed
  },
  {
    index: getId(),
    name: 'Cattle Farm',
    produces: 'cattle',
    speed: .5,
    price: 300,
    currency: 'gold',
    priceModifier: 1.13,
    productionModifier: 1.3,
    level: 0,
    getPrice: getPrice,
    getSpeed: getSpeed
  },
  {
    index: getId(),
    name: 'Hunter Log',
    produces: 'leather',
    speed: .33,
    price: 370,
    currency: 'gold',
    priceModifier: 1.13,
    productionModifier: 1.33,
    level: 0,
    getPrice: getPrice,
    getSpeed: getSpeed
  },
  {
    index: getId(),
    name: 'Horse Farm',
    produces: 'horses',
    speed: 0.1,
    price: 370,
    currency: 'gold',
    priceModifier: 1.15,
    productionModifier: 1.33,
    level: 0,
    getPrice: getPrice,
    getSpeed: getSpeed
  }
]
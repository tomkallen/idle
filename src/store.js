import { observable, action } from 'mobx'

class Store {

  static updateInterval = 3 // sec

  @observable global = {
    era: 1
  }

  @observable  buildings = [
    {
      index: 0,
      name: 'Wheat Farm',
      produces: 'wheat',
      speed: 1,
      price: 50,
      currency: 'gold',
      priceModifier: 1.07,
      productionModifier: 1.15,
      level: 0,
      getPrice: getPrice,
      getSpeed: getSpeed

    },
    {
      index: 1,
      name: 'Woodcutter Cabin',
      produces: 'wood',
      speed: .9,
      price: 75,
      currency: 'gold',
      priceModifier: 1.09,
      productionModifier: 1.15,
      level: 0,
      getPrice: getPrice,
      getSpeed: getSpeed
    },
    {
      index: 2,
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
      index: 3,
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
      index: 4,
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
      index: 5,
      name: 'Stables',
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

  @observable resources = {
    gold: 1000,
    wheat: 0,
    wood: 0,
    stone: 0,
    horses: 0
  }

  @action levelUp (id) {
    const building = this.buildings.find(item => item.index === id)
    if (building && this.resources.gold > building.getPrice()) {
      this.resources.gold -= building.getPrice()
      building.level += 1
    }
  }

  @action tick () {
    console.log(this.buildings)
    this.buildings.slice(0).forEach(b => {
      if (b.level) {
        this.resources[b.produces] += Math.floor(b.getSpeed() * Store.updateInterval)
      }
    })
    window.setTimeout(this.tick.bind(this), 3000)
  }
}

const store = new Store()

export default store

function getPrice () {
  return Math.round(this.price * (Math.pow(this.priceModifier, this.level + 1)))
}

function getSpeed () {
  return Number((this.speed * 5).toFixed(2)) * this.level
}
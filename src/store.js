import { observable, computed, action } from 'mobx'
import sounds from './audio'
import { achievements } from './achievements'

class Store {

  static updateInterval = 3 // sec

  @observable achievementScore = 0
  @observable currentAchievement = null
  @observable global = {
    era: 1,
    villagers: 0
  }

  @computed get maxCapacity () {
    return {
      wheat: this.services[1].capacity * this.services[1].level
    }
  }

  updateStore (prop, value) {
    this[prop] = value
  }

  @observable services = [
    {
      index: 0,
      name: 'Peasant Hut',
      description: 'This is a very basic hut for your common folk. It is not that spacey.',
      price: 150,
      currency: 'gold',
      priceModifier: 1.08,
      level: 1,
      maxLevel: 5,
      capacity: 3,
      type: 'peasants',
      tab: 'housing',
      getPrice: getPrice,
      getCapacity: getCapacity
    },
    {
      index: 1,
      name: 'Barn',
      description: 'This is where your wheat is stored',
      price: 100,
      currency: 'gold',
      priceModifier: 1.08,
      level: 1,
      maxLevel: 30,
      capacity: 500,
      type: 'wheat',
      tab: 'store',
      getPrice: getPrice,
      getCapacity: getCapacity
    },
    {
      index: 2,
      name: 'Warehouse',
      description: 'Used to store the stone blocks',
      price: 200,
      currency: 'gold',
      priceModifier: 1.1,
      level: 1,
      maxLevel: 20,
      capacity: 300,
      type: 'stone',
      tab: 'store',
      getPrice: getPrice,
      getCapacity: getCapacity
    },
    {
      index: 3,
      name: 'Stables',
      description: 'Where your horses live',
      price: 1000,
      currency: 'gold',
      priceModifier: 1.1,
      level: 1,
      maxLevel: 10,
      capacity: 20,
      type: 'horses',
      tab: 'store',
      getPrice: getPrice,
      getCapacity: getCapacity
    }
  ]

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
    gold: 10000,
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
      sounds.click.play()
    }
  }

  @action tick () {
    this.buildings.slice(0).forEach(b => {
      if (b.level) {
        this.resources[b.produces] += Math.floor(b.getSpeed() * Store.updateInterval)
      }
    })
    this.achievementTracker()
    window.setTimeout(this.tick.bind(this), 3000)
  }

  @action achievementTracker () {
    achievements.forEach(a => {
      if (!a.active && a.isQualified()) {
        a.active = true
        this.achievementScore += a.score
        this.currentAchievement = a
      }
    })
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

function getCapacity () {
  return Math.round(this.level * this.capacity)
}


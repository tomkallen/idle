import { observable, action } from 'mobx'
import sounds from './audio'
import burghers from './resources/store/burghers'
import { achievements, buildings, resources, services } from './resources/store'

class Store {

  static updateInterval = 3 // sec

  @observable achievementScore = 0
  @observable currentAchievement = null
  @observable display = null

  @observable achievements = achievements
  @observable burghers = burghers
  @observable services = services
  @observable buildings = buildings
  @observable resources = resources

  updateStore (prop, value) {
    this[prop] = value
  }

  @action levelUp (id) {
    const building = this.buildings.find(item => item.index === id)
    if (building && this.resources.gold >= building.getPrice()) {
      this.resources.gold -= building.getPrice()
      building.level += 1
      sounds.click.play()
    }
  }

  @action upgrade (id) {
    const service = this.services.find(service => service.index === id)
    if (service && service.level < service.maxLevel && this.resources.gold >= service.getPrice()) {
      this.resources.gold -= service.getPrice()
      service.level += 1
      sounds.click.play()
    }
  }

  @action tick () {
    this.buildings.slice(0).forEach(b => {
      if (b.level) {
        this.resources[b.produces] += Math.floor(b.getSpeed() * Store.updateInterval)
        const capacity = this.services.find(service => service.type === b.produces).getCapacity()
        if (this.resources[b.produces] > capacity) this.resources[b.produces] = capacity
      }
    })
    this.achievementTracker()
    window.setTimeout(this.tick.bind(this), 3000)
  }

  @action achievementTracker () {
    this.achievements.forEach(a => {
      if (!a.active && a.isQualified()) {
        a.active = true
        this.achievementScore += a.score
        this.currentAchievement = a
      }
    })
  }

  @action displayModal (modal) {
    this.display = modal
  }
}

const store = new Store()
export default store

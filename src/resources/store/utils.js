export function getPrice () {
  return Math.round(this.price * (Math.pow(this.priceModifier, this.level + 1)))
}

export function getSpeed () {
  return Number((this.speed * 5 * this.level).toFixed(2))
}

export function getCapacity () {
  return Math.round(this.level * this.capacity)
}

export function getId () {
  return `${String(Math.random()).slice(1, 9)}-${String(Math.random()).slice(1, 9)}`
}

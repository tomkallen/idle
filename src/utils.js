export function getPrice (item) {
  return Math.round((item.level + 1) * item.price * item.priceModifier)
}

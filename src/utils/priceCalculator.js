export default function priceCalculator(car) {
  let carPrice = car.price
  let batteryPrice = car.battery.hasOwnProperty('price') ? car.battery.price : 0
  let colorPrice = car.color.hasOwnProperty('price') ? car.color.price : 0
  let interiorPrice = car.interior.hasOwnProperty('price')
    ? car.interior.price
    : 0

  let total = carPrice + batteryPrice + colorPrice + interiorPrice

  return total.toFixed(2)
}

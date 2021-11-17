export const myCarReducer = (state, action) => {
  switch (action.type) {
    case 'SET_MODEL':
      const car = action.car
      return {
        ...state,
        id: car.id,
        model: car.model,
        price: car.price,
        image: car.image,
        battery: {},
        color: {},
        interior: {},
        components: [],
      }
    case 'SET_BATTERY':
      return {
        ...state,
        battery: action.battery,
      }
    case 'SET_COLOR':
      const model = action.color.models.find((mdl) => {
        return mdl.model === state.model
      })
      return {
        ...state,
        image: model.image,
        color: action.color,
      }
    case 'SET_INTERIOR':
      return {
        ...state,
        interior: action.interior,
      }
    default:
      console.log('error')
      throw new Error()
  }
}

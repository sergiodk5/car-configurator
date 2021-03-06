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
        guarantee: {},
        payment: null,
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
    case 'SET_COMPONENTS':
      let newComponents = []

      if (
        state.components.some((comp) => comp.name === action.component.name)
      ) {
        newComponents = state.components.filter(
          (comp) => comp.name !== action.component.name
        )
      } else {
        newComponents = state.components.concat(action.component)
      }

      return {
        ...state,
        components: newComponents,
      }
    case 'SET_GUARANTEE':
      return {
        ...state,
        guarantee: action.guarantee,
      }
    case 'SET_PAYMENT':
      return {
        ...state,
        payment: action.payment,
      }
    default:
      console.log('error')
      throw new Error()
  }
}

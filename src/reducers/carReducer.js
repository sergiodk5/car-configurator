export const myCarReducer = (state, action) => {
  //     id: 0,
  //   model: null,
  //   price: 0,
  //   image: null,
  //   battery: null,
  //   color: null,
  //   interior: null,
  //   components: [],

  switch (action.type) {
    case 'SET_MODEL':
      const car = action.car
      return {
        ...state,
        id: car.id,
        model: car.model,
        price: car.price,
        image: car.image,
      }
    default:
      console.log('error')
      throw new Error()
  }
}

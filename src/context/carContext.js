import { createContext, useContext, useState, useMemo, useReducer } from 'react'
import { myCarReducer } from '../reducers/carReducer'

const CarContext = createContext()
const MyCarContext = createContext()

const initialCarState = {
  id: 0,
  model: 'null',
  price: 0,
  image: 'null',
  battery: {},
  color: {},
  interiors: {},
  components: [],
}

export function useCar() {
  return useContext(CarContext)
}

export function useMyCar() {
  return useContext(MyCarContext)
}

export default function CarProvider({ children }) {
  const [car, setCar] = useState({})
  const carProvider = useMemo(() => ({ car, setCar }), [car])

  const [state, dispatch] = useReducer(myCarReducer, initialCarState)
  const myCarProvider = {
    id: state.id,
    model: state.model,
    price: state.price,
    image: state.image,
    battery: state.battery,
    color: state.color,
    interior: state.interior,
    components: state.components,
    setMyCar: (car) => {
      dispatch({ type: 'SET_MODEL', car })
    },
    setBattery: (battery) => {
      dispatch({ type: 'SET_BATTERY', battery })
    },
    setColor: (color) => {
      dispatch({ type: 'SET_COLOR', color })
    },
    setInterior: (interior) => {
      dispatch({ type: 'SET_INTERIOR', interior })
    },
    setComponents: (component) => {
      dispatch({ type: 'SET_COMPONENTS', component })
    },
  }

  return (
    <CarContext.Provider value={carProvider}>
      <MyCarContext.Provider value={myCarProvider}>
        {children}
      </MyCarContext.Provider>
    </CarContext.Provider>
  )
}

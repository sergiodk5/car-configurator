import { useEffect } from 'react'
import { useMyCar, useCar } from '../../context/carContext'
import { useStep } from '../../context/formContext'
import '../../css/StepZero.css'
import { cars } from '../../data/data'

const Model = ({ cr }) => {
  const { setMyCar, id } = useMyCar()
  const { setCar } = useCar()
  const { step, increaseStep, setNextStep } = useStep()

  const handleClick = () => {
    setCar(cr)
    setMyCar(cr)
    setNextStep(true)
    increaseStep(step)
  }
  return (
    <li
      className={`ecc-step__model ${id === cr.id ? 'selected' : ''}`}
      onClick={handleClick}
    >
      <div className='ecc-model__image'>
        <img src={cr.image} alt={cr.model} />
      </div>

      <div className='ecc-model__selector'>
        <div className='ecc-model__title'>{cr.model}</div>
        <div className='ecc-model__price'>
          <span>από</span> {cr.price}€
        </div>
      </div>
    </li>
  )
}

const StepZero = () => {
  const { setNextStep } = useStep()
  const { id } = useMyCar()

  useEffect(() => {
    if (0 !== id) {
      setNextStep(true)
    }
  }, [id])
  return (
    <div className='ecc-form__step ecc-form__step--zero'>
      <ul className='ecc-sidebar ecc-step__models'>
        {cars.map((car) => (
          <Model key={car.id} cr={car} />
        ))}
      </ul>
    </div>
  )
}

export default StepZero

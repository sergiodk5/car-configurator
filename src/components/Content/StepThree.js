import { useCar } from '../../context/carContext'
import '../css/StepThree.css'

const Interior = (interior) => {
  return (
    <li className='ecc-step__extra'>
      <div className='ecc-step__extra__image'>
        <img src={interior.image} alt={interior.type} />
      </div>
      <div className='ecc-step__extra__info'>
        <div className='ecc-step__extra__type'>{interior.type}</div>
        <div className='ecc-step__extra__price'>+{interior.price}€</div>
      </div>
    </li>
  )
}

const StepThree = () => {
  const { car } = useCar()
  return (
    <div className='ecc-form__step ecc-form__step--three'>
      <ul className='ecc-sidebar fixed-height ecc-step__extras'>
        {car.interiors.map((int, idx) => (
          <Interior key={idx} interior={int} />
        ))}
      </ul>
    </div>
  )
}

export default StepThree

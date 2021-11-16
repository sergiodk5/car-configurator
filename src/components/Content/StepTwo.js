import { useCar } from '../../context/carContext'
import '../css/StepTwo.css'

const Color = ({ color }) => {
  return (
    <li className='ecc-step__color'>
      <div className='ecc-step__color__image'>
        <img src={color.thumb} alt={color.name} />
      </div>
      <div className='ecc-step__color__price'>+{color.price}€</div>
    </li>
  )
}

const StepTwo = () => {
  const { car } = useCar()

  return (
    <div className='ecc-form__step ecc-form__step--two'>
      <ul className='ecc-sidebar fixed-height ecc-step__colors'>
        {car.colors.map((color, idx) => (
          <Color key={idx} color={color} />
        ))}
      </ul>
    </div>
  )
}

export default StepTwo

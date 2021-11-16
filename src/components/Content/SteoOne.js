import { useCar } from '../../context/carContext'
import '../../css/StepOne.css'

const Battery = ({ btr, id }) => {
  return (
    <li key={id} className='ecc-step__battery'>
      <div className='ecc-battery__image'>
        <img src={btr.image} alt={btr.type} />
      </div>

      <div className='ecc-battery__title'>{btr.type}</div>
      <div className='ecc-battery__kwh'>{btr.kWh} kWh</div>
      <div className='ecc-battery_range'>
        <span>Μέγιστη Αυτονομία</span>
        {btr.maxRange}
      </div>
      <div className='ecc-battery__price'>+{btr.price}€</div>
    </li>
  )
}

const StepOne = () => {
  const { car } = useCar()
  return (
    <div className='ecc-form__step ecc-form__step--one'>
      <ul className='ecc-sidebar fixed-height ecc-step__batteries'>
        {car.batteries.map((btr, idx) => (
          <Battery key={idx} btr={btr} id={idx} />
        ))}
      </ul>
    </div>
  )
}

export default StepOne

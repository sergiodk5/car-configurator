import { useEffect } from 'react'
import { useStep } from '../../context/formContext'
import { useMyCar } from '../../context/carContext'
import { batteries } from '../../data/data'
import '../../css/StepOne.css'

const Battery = ({ btr }) => {
  const { setBattery, battery } = useMyCar()

  return (
    <li
      className={`ecc-step__battery ${
        battery?.id === btr.id ? 'selected' : ''
      }`}
      onClick={() => setBattery(btr)}
    >
      <div className='ecc-battery__image'>
        <img src={btr.image} alt={btr.type} />
      </div>

      <div className='ecc-battery__title'>{btr.type}</div>
      <div className='ecc-battery__kwh'>{btr.kWh} kWh</div>
      <div className='ecc-battery__range'>
        <span>Μέγιστη Αυτονομία</span>
        {btr.maxRange}
      </div>
      <div className='ecc-battery__price'>+{btr.price}€</div>
    </li>
  )
}

const StepOne = () => {
  const { setNextStep } = useStep()
  const { model, battery } = useMyCar()

  const btrs = batteries.filter((obj) => {
    return obj.models.includes(model)
  })

  useEffect(() => {
    if (battery?.id) {
      setNextStep(true)
    }
  }, [battery])

  return (
    <div className='ecc-form__step ecc-form__step--one'>
      <ul className='ecc-sidebar fixed-height ecc-step__batteries'>
        {btrs.map((btr, idx) => (
          <Battery key={idx} btr={btr} />
        ))}
      </ul>
    </div>
  )
}

export default StepOne

import { useEffect } from 'react'
import { useStep } from '../../context/formContext'
import { useMyCar } from '../../context/carContext'
import { interiors } from '../../data/data'
import '../../css/StepThree.css'

const Interior = ({ intr }) => {
  const { interior, setInterior } = useMyCar()

  return (
    <li
      className={`ecc-step__extra ${
        interior?.type === intr.type ? 'selected' : ''
      }`}
      onClick={() => setInterior(intr)}
    >
      <div className='ecc-step__extra__image'>
        <img src={intr.image} alt={intr.type} />
      </div>
      <div className='ecc-step__extra__info'>
        <div className='ecc-step__extra__type'>{intr.type}</div>
        <div className='ecc-step__extra__price'>+{intr.price}€</div>
      </div>
    </li>
  )
}

const StepThree = () => {
  const { setNextStep } = useStep()
  const { interior, setInterior } = useMyCar()

  useEffect(() => {
    if (!interior?.type) {
      setInterior(interiors[0])
    }

    setNextStep(true)
  }, [])

  return (
    <div className='ecc-form__step ecc-form__step--three'>
      <ul className='ecc-sidebar fixed-height ecc-step__extras'>
        {interiors.map((intr, idx) => (
          <Interior key={idx} intr={intr} />
        ))}
      </ul>
    </div>
  )
}

export default StepThree

import { useEffect } from 'react'
import { useStep } from '../../context/formContext'
import { useMyCar } from '../../context/carContext'
import { guarantees } from '../../data/data'
import '../../css/StepFive.css'

const Guarantee = ({ gte }) => {
  const { guarantee, setGuarantee } = useMyCar()
  return (
    <li
      className={`ecc-step__guarantee ${
        gte.type === guarantee.type ? 'selected' : ''
      } `}
      onClick={() => setGuarantee(gte)}
    >
      <div className='ecc-step__component__type'>{gte.type}</div>
      <div className='ecc-step__component__price'>+{gte.price}€</div>
    </li>
  )
}

const StepFive = () => {
  const { setNextStep } = useStep()
  const { guarantee, setGuarantee } = useMyCar()

  useEffect(() => {
    if (!guarantee?.type) {
      setGuarantee(guarantees[0])
    }
    setNextStep(true)
  }, [])

  return (
    <div className='ecc-form__step ecc-form__step--five'>
      <ul className='ecc-sidebar fixed-height ecc-step__guarantees'>
        {guarantees.map((gte, idx) => (
          <Guarantee key={idx} gte={gte} />
        ))}
      </ul>
    </div>
  )
}

export default StepFive

import { useEffect } from 'react'
import { useStep } from '../../context/formContext'
import { useMyCar } from '../../context/carContext'
import { payments } from '../../data/data'
import '../../css/StepSix.css'

const Payment = ({ pay }) => {
  const { payment, setPayment } = useMyCar()
  const { step, increaseStep, setNextStep } = useStep()

  const handleClick = () => {
    setPayment(pay)
    setNextStep(true)
    increaseStep(step)
  }
  return (
    <li
      className={`ecc-step__payment ${pay === payment ? 'selected' : ''} `}
      onClick={handleClick}
    >
      <div className='ecc-step__payment__name'>{pay}</div>
    </li>
  )
}

const StepSix = () => {
  const { setNextStep } = useStep()
  const { payment, setPayment } = useMyCar()

  useEffect(() => {
    if (!payment) {
      setPayment(payments[0])
    }
    setNextStep(true)
  }, [])

  return (
    <div className='ecc-form__step ecc-form__step--six'>
      <ul className='ecc-sidebar fixed-height ecc-step__payments'>
        {payments.map((pay, idx) => (
          <Payment key={idx} pay={pay} />
        ))}
      </ul>
    </div>
  )
}

export default StepSix

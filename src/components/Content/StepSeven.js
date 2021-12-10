import { useEffect } from 'react'
import { useStep } from '../../context/formContext'
import '../../css/StepSeven.css'

const StepSeven = () => {
  const { setNextStep } = useStep()

  useEffect(() => {
    setNextStep(true)
  }, [])

  return (
    <div className='ecc-form__step ecc-form__step--seven'>
      <div className='ecc-sidebar ecc-step__client'>
        <h1>Step Seven</h1>
      </div>
    </div>
  )
}

export default StepSeven

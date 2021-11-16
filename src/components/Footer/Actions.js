import { useStep } from '../../context/formContext'
import '../../css/Actions.css'

const Actions = () => {
  const { steps, step, increaseStep, decreaseStep } = useStep()

  return (
    <div className='ecc-form__actions'>
      {0 < step && (
        <span className='ctrl-btn btn-prev' onClick={() => decreaseStep(step)}>
          Προηγούμενο
        </span>
      )}

      {step < steps - 1 && (
        <span className='ctrl-btn btn-next' onClick={() => increaseStep(step)}>
          Επόμενο
        </span>
      )}

      {steps - 1 === step && (
        <span className='ctrl-btn btn-send'>Αποστολή</span>
      )}
    </div>
  )
}

export default Actions

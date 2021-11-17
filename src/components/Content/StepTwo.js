import { useEffect } from 'react'
import { useStep } from '../../context/formContext'
import { useMyCar } from '../../context/carContext'
import { colors } from '../../data/data'
import '../../css/StepTwo.css'

const Color = ({ clr }) => {
  const { setColor, color } = useMyCar()

  return (
    <li
      className={`ecc-step__color ${color.name === clr.name ? 'selected' : ''}`}
      onClick={() => setColor(clr)}
    >
      <div className='ecc-step__color__image'>
        <img src={clr.thumb} alt={clr.name} />
      </div>
      <div className='ecc-step__color__price'>+{clr.price}€</div>
    </li>
  )
}

const StepTwo = () => {
  const { setNextStep } = useStep()
  const { model, color } = useMyCar()

  const clrs = colors.filter((obj) => {
    return (
      0 !==
      obj.models.filter((mdl) => {
        return mdl.model === model
      }).length
    )
  })

  useEffect(() => {
    if (color?.name) {
      setNextStep(true)
    }
  }, [color])

  return (
    <div className='ecc-form__step ecc-form__step--two'>
      <ul className='ecc-sidebar fixed-height ecc-step__colors'>
        {clrs.map((clr, idx) => (
          <Color key={idx} clr={clr} />
        ))}
      </ul>
    </div>
  )
}

export default StepTwo

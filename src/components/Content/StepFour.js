import { useEffect } from 'react'
import { useMyCar } from '../../context/carContext'
import '../../css/StepFour.css'
import { components } from '../../data/data'

const Component = ({ cmp }) => {
  const { components: myComponents, setComponents } = useMyCar()

  const handleClick = () => {
    setComponents(cmp)

    // if (
    //   cmp?.requires &&
    //   !myComponents.some((component) => component.name === cmp?.requires)
    // ) {
    //   let required = components.find((component) => component.name === cmp.name)
    //   setComponents(required)
    // }
  }

  useEffect(() => {
    console.log(myComponents)
  }, [myComponents])

  return (
    <li
      className={`ecc-step__component ${
        myComponents.some((component) => component.name === cmp.name)
          ? 'selected'
          : ''
      } `}
      onClick={handleClick}
    >
      <div className='ecc-step__component__type'>{cmp.name}</div>
      <div className='ecc-step__component__price'>+{cmp.price}€</div>
    </li>
  )
}

const StepFour = () => {
  const { model } = useMyCar()
  const cmps = components.filter((component) => {
    return component.models.includes(model)
  })
  return (
    <div className='ecc-form__step ecc-form__step--four'>
      <ul className='ecc-sidebar fixed-height ecc-step__components'>
        {cmps.map((component, idx) => (
          <Component key={idx} cmp={component} />
        ))}
      </ul>
    </div>
  )
}

export default StepFour

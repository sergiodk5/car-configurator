import { useEffect } from 'react'
import { useStep } from '../../context/formContext'
import { useMyCar } from '../../context/carContext'
import '../../css/StepFour.css'
import { components } from '../../data/data'

const Component = ({ cmp, handleComponent }) => {
  const { components: myComponents } = useMyCar()

  const handleClick = () => {
    handleComponent(cmp)
  }

  return (
    <li
      className={`ecc-step__component ${
        undefined !==
        myComponents.find((component) => component.name === cmp.name)
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
  const { setNextStep } = useStep()
  const { model, setComponents, components: myComponents } = useMyCar()
  const cmps = components.filter((component) => {
    return component.models.includes(model)
  })

  const handleClick = (comp) => {
    // If element is required remove the element that requires this element.
    if (myComponents.some((component) => component?.requires === comp.name)) {
      let requires = myComponents.filter((obj) => obj?.requires === comp.name)
      setComponents(requires[0])
    }

    // Set the element.
    setComponents(comp)

    // if element requires another element add the other element too.
    if (
      comp?.requires &&
      !myComponents.some((component) => component.name === comp?.requires)
    ) {
      let required = components.filter((obj) => obj.name === comp?.requires)

      if (required.length) {
        setComponents(required[0])
      }
    }
  }

  useEffect(() => {
    setNextStep(true)
  }, [])

  return (
    <div className='ecc-form__step ecc-form__step--four'>
      <ul className='ecc-sidebar fixed-height ecc-step__components'>
        {cmps.map((component, idx) => (
          <Component key={idx} cmp={component} handleComponent={handleClick} />
        ))}
      </ul>
    </div>
  )
}

export default StepFour

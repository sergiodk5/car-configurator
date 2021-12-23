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
      <div className='ecc-step__component__indicator'>
        {undefined !==
        myComponents.find((component) => component.name === cmp.name) ? (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            <path
              fillRule='evenodd'
              d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
              clipRule='evenodd'
            />
          </svg>
        ) : (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
            />
          </svg>
        )}
      </div>
      <div className='ecc-step__component__wrapper'>
        <div className='ecc-step__component__type'>{cmp.name}</div>
        <div className='ecc-step__component__price'>+{cmp.price}€</div>
      </div>
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
      <h2 className='ecc-mobile__header'>Επιλογή Εξωπλισμού</h2>
      <ul className='ecc-sidebar fixed-height ecc-step__components'>
        {cmps.map((component, idx) => (
          <Component key={idx} cmp={component} handleComponent={handleClick} />
        ))}
      </ul>
    </div>
  )
}

export default StepFour

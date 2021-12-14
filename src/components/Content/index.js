import React, { useEffect } from 'react'
import { useStep } from '../../context/formContext'
import Previewer from './Previewer'

const Content = ({ children }) => {
  const { setSteps, step } = useStep()
  const pages = React.Children.toArray(children)
  const steps = React.Children.count(children)

  useEffect(() => {
    setSteps(steps)
  }, [])

  return (
    <div className='ecc-form__content'>
      {0 < step && 7 > step ? (
        <Previewer totalWidth={steps - 1 === step ? 'full' : 'half'} />
      ) : null}

      {pages[step]}
    </div>
  )
}

export default Content

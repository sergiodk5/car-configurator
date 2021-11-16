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
      {0 < step && <Previewer />}

      {pages[step]}
    </div>
  )
}

export default Content

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

  //   useEffect(() => {
  // console.log(step + ' of ' + steps)
  //   }, [step])

  return (
    <div className='ecc-form__content'>
      {0 < step && step !== 8 ? (
        <Previewer totalWidth={steps - 1 === step ? 'full' : 'half'} />
      ) : null}

      {/*steps - 1 !== step ? pages[step] : null*/}
      {pages[step]}
    </div>
  )
}

export default Content

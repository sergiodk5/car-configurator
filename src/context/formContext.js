import { createContext, useContext, useReducer } from 'react'
import { stepReducer } from '../reducers/stepReducer'

const StepContext = createContext()

const initialStepState = {
  step: 0,
  steps: 0,
  nextStep: false,
}

export function useStep() {
  return useContext(StepContext)
}

export default function StepProvider({ children }) {
  const [state, dispatch] = useReducer(stepReducer, initialStepState)

  const provider = {
    step: state.step,
    steps: state.steps,
    nextStep: state.nextStep,
    increaseStep: (step) => {
      dispatch({ type: 'INCREASE', step })
    },
    decreaseStep: (step) => {
      dispatch({ type: 'DECREASE', step })
    },
    setStep: (step) => {
      dispatch({ type: 'SET_STEP', step })
    },
    setSteps: (steps) => {
      dispatch({ type: 'SET_TOTAL', steps })
    },
    setNextStep: (nextStep) => {
      dispatch({ type: 'ALLOW_NEXT', nextStep })
    },
  }

  return (
    <StepContext.Provider value={provider}>{children}</StepContext.Provider>
  )
}

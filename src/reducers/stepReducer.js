export const stepReducer = (state, action) => {
  switch (action.type) {
    case 'INCREASE':
      if (state.nextStep) {
        return {
          ...state,
          step: action.step + 1,
          nextStep: false,
        }
      }

      return state
    case 'DECREASE':
      return {
        ...state,
        step: action.step - 1,
      }
    case 'SET_STEP':
      if (state.step > action.step) {
        return {
          ...state,
          step: action.step,
        }
      }

      return state
    case 'SET_TOTAL':
      return {
        ...state,
        steps: action.steps,
      }
    case 'ALLOW_NEXT':
      return {
        ...state,
        nextStep: action.nextStep,
      }
    default:
      throw new Error()
  }
}

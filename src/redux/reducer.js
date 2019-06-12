// string constant = if variable name is misspelled, will throw error
const ACTION_TYPE = 'reducer/ACTION_TYPE'

export default function reducer(state, action) {
  switch(action.type) {
    case ACTION_TYPE:
      const newState = {}

      // user spread operator to combine to new array
      const newStateArr = [...state.arr, newAction]

      return {state: newStateArr}

      case: ACTION_TYPE2:
      
      default:
        return state
  }
}
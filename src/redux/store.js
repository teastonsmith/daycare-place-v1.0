import { createStore } from 'redux'
import reducer from './reducer'


export default createStore(reducer)
// // redux: store reducer
// function reducer(state) {
//   return state
// }

// // redux: initial state variable
// const initialState = {

// }

// export default createStore(reducer, initialState)
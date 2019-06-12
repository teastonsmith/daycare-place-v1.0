const initialState = {
	// table params here
	username: '',
	firstname: '',
	balance: null,
};

// string constant = if variable name is misspelled, will throw error
// const ACTION_TYPE = 'reducer/ACTION_TYPE';
const UPDATE_USER = 'UPDATE_USER';
const CLEAR_USER = 'CLEAR_USER';

export function updateUser(user) {
	return {
		type: UPDATE_USER,
		payload: user,
	};
}

export function clearUser() {
	return {
		type: CLEAR_USER,
	};
}

function reducer(state = initialState, action) {
	switch (action.type) {
		case UPDATE_USER:
			// destructuring
			const { username, firstname, balance } = action.payload;
			return { username, firstname, balance };
		case CLEAR_USER:
			return { ...initialState };
		default:
			return state;
	}
}

export default reducer;

// export default function reducer(state, action) {
//   switch(action.type) {
//     case ACTION_TYPE:
//       const newState = {}

//       // user spread operator to combine to new array
//       const newStateArr = [...state.arr, newAction]

//       return {state: newStateArr}

//       case ACTION_TYPE2:

//       default:
//         return state
//   }
// }

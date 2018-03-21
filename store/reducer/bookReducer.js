const initialState = []

export const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ALL_BOOK':
      return [
        ...state,
        ...action.data
      ]
      break;
    default:
      return state
      break;
  }
}
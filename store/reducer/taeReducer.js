const initialState = [
{  id: 9,
  name:'adam'}
]

export const taeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TEST':
      return [
        ...state, {
          id: 900,
          name: action.name
        }
      ]
      break;
    default:
      return state
      break;
  }
}
const userData = (state=[], action) => {
  switch (action.type) {
    case 'INIT_GET_STORED_DATA':
      return action.data
    case 'UPDATE_STORED_DATA':
      return [
        ...state,
        action.data
      ]
    default:
      return state
  }
}

export default userData

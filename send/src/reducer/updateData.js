const updateData = (state={}, action) => {
  switch (action.type) {
    case 'UPDATE_DATA':
      const {key, name, age} = action
      return {
        key,
        name,
        age
      }
    default:
      return state
  }
}

export default currentData

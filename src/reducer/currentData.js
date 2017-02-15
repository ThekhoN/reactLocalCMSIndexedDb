const currentData = (state={}, action) => {
  switch (action.type) {
    case 'UPDATE_CURRENT_DATA':
      if(!action.name && !action.age){
          return {
            key: action.key
          }
      }
      else {
        const {key, name, age} = action
        return {
          key,
          name,
          age
        }
      }

    default:
      return state
  }
}

export default currentData

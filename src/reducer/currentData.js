import {UPDATE_CURRENT_DATA} from '../action/actionTypes'

const currentData = (state={}, action) => {
  switch (action.type) {
    case UPDATE_CURRENT_DATA:
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

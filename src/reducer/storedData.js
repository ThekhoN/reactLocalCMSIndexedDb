const userData = (state=[], action) => {
  switch (action.type) {
    case 'INIT_GET_STORED_DATA':
      return action.data
    case 'UPDATE_STORED_DATA':
      return [
        ...state,
        action.data
      ]
    case 'EDIT_STORED_DATA':
      return state.map(function(singleData={key: '', name: '', age: ''}){
          if(action.key === singleData.key){
            if(action.name){
                singleData.name = action.name
            }
            if(action.age){
                singleData.age = action.age
            }
          }
          return singleData
      })
    default:
      return state
  }
}

export default userData

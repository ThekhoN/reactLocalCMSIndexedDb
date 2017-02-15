const updateState = (name, key, state) => {
  return [...state].map(function(item){
    if(item.key === key){
      item.name = name
    }
    return item
  })
}

export default updateState

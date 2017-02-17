export const updateCurrentData = (key, name, age) => {
  return {
    type: 'UPDATE_CURRENT_DATA',
    key,
    name,
    age
  }
}

export const initGetStoredData = (data) => {
   return {
     type: 'INIT_GET_STORED_DATA',
     data
   }
}

export const editStoredData = (key, name, age) => {
  return {
    type:'EDIT_STORED_DATA',
    key,
    name,
    age
  }
}

export const updateStoredData = (data) => {
  return {
    type:'UPDATE_STORED_DATA',
    data
  }
}

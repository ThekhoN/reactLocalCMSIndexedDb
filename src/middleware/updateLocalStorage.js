import {db, updateOnEdit, storeInIndexedDb} from '../module/indexedDb'

const updateLocalStorage = store => next => action => {
  //console.info('updateLocalStorage middleware. . .')
  next(action)
  if(action.type === 'UPDATE_STORED_DATA'){
    storeInIndexedDb(action.data)
    return
  }
  if(action.type === 'EDIT_STORED_DATA'){
      const {name, age} = action
      const data = {
        name,
        age
      }
      updateOnEdit(db, data, store.getState().currentData.key)
    return
  }
}

export default updateLocalStorage

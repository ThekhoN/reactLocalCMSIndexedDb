import Dexie from 'dexie'


export const db = new Dexie('userDetails')
db.version(1).stores({
  user: 'key, name, age',
})

//initial store update ~ read from indexedDb
export const updateStoreAtInit = (db, store, callback) => {
  console.info('running updateStoreAtInit. . .')
  let data = []
  const collection = db.user
  //delete indexedDb
  //db.user.clear()
  collection.each(function(item){
    if(item){
        data.push(item)
    }
    const {key, name, age} = item
    console.log('typeof item', typeof item)
    console.log(`Found: ${name} with age ${age} and key ${key}`);
  })
  setTimeout(function(){
    console.error('data: ', data)
    store.dispatch({
        type: 'INIT_GET_STORED_DATA',
        data:data
    })
    if(callback){
      callback()
    }
  }, 1000)
}

export const logData = (db) => {
  console.log('logData running. . .');
  const collection = db.user
  //console.log('db', db);
  collection.each(function(user){
    const {key, name, age} = user
    console.log(`Found: ${name} with age ${age} and key ${key}`);
  })
}

export const getInitialDataFromIndexedDb = (callback) => {
  console.info('running getInitialDataFromIndexedDb. . .')
  db
    .open()
    .catch(function(error){
      console.error('db open failed ', error)
    })
    .then(function(){
        logData(db)
        if(callback){
          callback(db)
        }
    })
}

export const storeInIndexedDb = (data) => {
  //console.log('data inside storeInIndexedDb: ', data)
  db
    .open()
    .catch(function(error){
      console.error('db open failed ', error)
    })

  const {key, name, age} = data
  db.user.put({
      key,
      name,
      age
    })
    .then(function(){
      const collection = db.user
      collection.each(function(user){
        const {key, name, age} = user
        console.log(`Found: ${name} with age ${age} and key ${key}`);
      })
    })
    .catch(function(error){
      console.error('db store failed ', error)
    })
}

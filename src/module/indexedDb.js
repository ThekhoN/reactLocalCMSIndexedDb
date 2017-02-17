import Dexie from 'dexie'

export const db = new Dexie('userDetails')
db.version(1).stores({
  user: 'key, name, age',
})

//hard delete indexedDb
//db.user.clear()
export const updateStoreAtInit = (db, callback) => {
  //const Promise = Dexie.Promise;
  let data = []
  db.transaction('r', db.user, function () {
    db.user.each(function (item) {
      const {key, name, age} = item
      console.log(`Found: ${name} with age ${age} and key ${key}`);
      data.push(item)
    })
  })
  .then(function(){
    //console.log('data: ', data)
    if(callback){
      callback(data)
    }
  })
  .catch(function(error){
    console.log('error in updateStoreAtInit: ', error)
  })
}

export const updateOnEdit = (db, data, key) => {
    const {name, age} = data
    db.transaction('rw', db.user, function () {
      db.user
      .where("key")
      .equals(key)
      .modify(
        {
          name,
          age
        }
      );
    })
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

export const storeInIndexedDb = (data, callback) => {
  const {key, name, age} = data
  db.transaction('rw', db.user, function () {
    db.user.put({
        key,
        name,
        age
    })
  })
  .then(function(){
    if(callback){
      callback(data)
    }
  })
  .catch(function(error){
    console.log('error in storeInIndexedDb: ', error)
  })
}

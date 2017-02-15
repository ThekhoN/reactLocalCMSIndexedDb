import React, {Component} from 'react'
import dummyData from '../module/dummyData'
import UserDetails from '../component/UserDetails'
import UserInputForm  from '../component/UserInputForm'
import updateState from '../module/updateState'
import {db, storeInIndexedDb, updateStoreAtInit, getInitialDataFromIndexedDb, logData} from '../module/indexedDb'

import store from '../store'

class MainContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      currentData: {
        name: '',
        age: '',
        key: ''
      },
      storedData: []
    }
    this.handleDispatchEditToMain = this.handleDispatchEditToMain.bind(this)
    this.handleSubmitInputToMain = this.handleSubmitInputToMain.bind(this)
  }
  handleSubmitInputToMain(data){
    //console.log('data in handleSubmitInputToMain: ',  data);
    const {name, age, key} = data

    store.dispatch({
      type: 'UPDATE_CURRENT_DATA',
      key,
      name,
      age
    })

    console.log(store.getState().currentData)

    storeInIndexedDb(store.getState().currentData)

    let dbReadData = []
    const collection = db.user
    collection.each(function(item){
      if(item.name!==''){
          dbReadData.push(item)
      }
    })

    store.dispatch({
      type: 'UPDATE_STORED_DATA',
      data: data
    })

  }
  handleDispatchEditToMain(name, key){
    console.log('dispatched value: ', name, key)
    const currentStoredData = this.state.storedData
    console.log('currentStoredData: ', currentStoredData)
    const updatedData = updateState(name, key, currentStoredData)
    console.log('updatedData: ', updatedData)
    this.setState({
      storedData: updatedData
    }, function(){
      console.info('updated state on dispatch: ', this.state)
    })
  }
  componentDidMount(){
    //init db query & update store
    updateStoreAtInit(db, store, function(){
      this.setState({
        storedData: store.getState().storedData
      })
    }.bind(this))
  }
  render(){
    const {storedData} = this.state
    return (<div>
        <UserInputForm onSubmitInputToMain={this.handleSubmitInputToMain}/>
        {
          <UserDetails data={store.getState().storedData} handleDispatchEditToMain={this.handleDispatchEditToMain}/>
        }
      </div>)
  }
}

export default MainContainer

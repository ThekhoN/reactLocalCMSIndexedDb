import React, {Component} from 'react'
import UserDetails from '../component/UserDetails'
import UserInputForm  from '../component/UserInputForm'
import {db, updateStoreAtInit} from '../module/indexedDb'

class MainContainer extends Component {
  constructor(props){
    super(props)
    this.handleSubmitInputToMain = this.handleSubmitInputToMain.bind(this)
  }
  handleSubmitInputToMain(data){
    const {dispatchUpdateCurrentDataOnSubmit, dispatchUpdateStoredDataOnSubmit} = this.props
    const {name, age, key} = data

    dispatchUpdateCurrentDataOnSubmit(key, name, age)
    dispatchUpdateStoredDataOnSubmit(data)
  }
  componentDidMount(){
    updateStoreAtInit(db, function(data){
      this.props.dispatchInitGetStoredData(data)
    }.bind(this))
  }
  render(){
    return (<div>
        <UserInputForm onSubmitInputToMain={this.handleSubmitInputToMain}/>
        {
          <UserDetails
            storeState={this.props.storeState}
            currentDataFromStore={this.props.currentDataFromStore}
            handleDispatchOnHandleEditTrue={this.props.handleDispatchOnHandleEditTrue}
            handleDispatchOnHandleEditFalse={this.props.handleDispatchOnHandleEditFalse}
          />
        }
      </div>)
  }
}

export default MainContainer


import './App.css';
import MainContainer from './container/MainContainer'
import {connect} from 'react-redux'
import {updateCurrentData, initGetStoredData, updateStoredData, editStoredData} from './action/actionCreators'

const mapStateToProps = (state) => {
  return {
    storeState: state,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    dispatchInitGetStoredData:(data) => {
      dispatch(initGetStoredData(data))
    },
    handleDispatchOnHandleEditTrue:(key, name, age) => {
      dispatch(editStoredData(key, name, age))
    },
    handleDispatchOnHandleEditFalse:(key, name, age)=>{
      dispatch(updateCurrentData(key, name, age))
    },
    dispatchUpdateCurrentDataOnSubmit:(key, name, age)=>{
      dispatch(updateCurrentData(key, name, age))
    },
    dispatchUpdateStoredDataOnSubmit:(data)=>{
      dispatch(updateStoredData(data))
    }
  }
}

const App = connect(mapStateToProps, mapDispatchToProps)(MainContainer)


export default App;

import React from 'react'
import EditableUserDetailUnit from './EditableUserDetailUnit'

const UserDetails = ({storeState, handleDispatchEditToMain, handleDispatchOnHandleEditTrue, currentDataFromStore, handleDispatchOnHandleEditFalse}) => {
  const data = storeState.storedData

  return (<div className='userDetails'>
      <h2>User Details: </h2>
      <br/>
      <ul>
        <li>
          <div className='userDetailsWrapper label'>
            Name
          </div>
          <div className='userDetailsWrapper label'>
            Age
          </div>
          <div className='userDetailsWrapper label'>
            Update
          </div>
        </li>
        {
          data.map((d, key) => (<EditableUserDetailUnit key={key}
                             data={d}
                            currentDataFromStore={storeState.currentData}
                            dispatchOnHandleEditTrue={handleDispatchOnHandleEditTrue}
                            dispatchOnHandleEditFalse={handleDispatchOnHandleEditFalse}
                           />))
        }
      </ul>
    </div>)
}


  export default UserDetails

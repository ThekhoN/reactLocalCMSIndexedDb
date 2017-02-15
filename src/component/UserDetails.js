import React from 'react'
import EditableUserDetailUnit from './EditableUserDetailUnit'

const UserDetails = ({data, handleDispatchEditToMain}) => (<div className='userDetails'>
    <h2>User Details: </h2>
    <br/>
    <ul>
      <li>
        <div className='userDetailsWrapper label'>
          Name
        </div>
        <div className='userDetailsWrapper label'>
          Update
        </div>
      </li>
      {
        data.map((d, key) => (<EditableUserDetailUnit key={key} 
                           data={d}
                           dispatchEditToMain={(name, key)=>{handleDispatchEditToMain(name, key)}}/>))
      }
    </ul>
  </div>)

  export default UserDetails

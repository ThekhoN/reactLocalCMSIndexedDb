import React, {Component} from 'react'

class EditableUserDetailUnit extends Component {
  constructor(props){
    super(props)
    this.state = {
      key: this.props.data.key,
      name: this.props.data.name,
      age: this.props.data.age,
      editable: false
    }
    this.handleEdit = this.handleEdit.bind(this)
  }
  handleEdit(key){
    console.log('handlingEdit for ', key)
    const {editable} = this.state
    if(editable){
      this.setState({
        editable: false,
        name: this.nameEditInput.value,
        age: this.ageEditInput.value,
      }, function(){
          const {name, age} = this.state
          //console.log('dispatchOnHandleEditTrue: ', this.props.dispatchOnHandleEditTrue);
          console.info('dispatch name, age: ', name, age)
          this.props.dispatchOnHandleEditTrue(this.props.currentDataFromStore.key, name, age)
      })
    }
    else {
      this.setState({
        editable: true
      }, function(){
          this.props.dispatchOnHandleEditFalse(key, null, null)
      })
    }
  }
  render(){
   const {name, age, editable, key} = this.state
   return (<li key={key} >
       <div className='editableUserDetailUnit'>
      <div className='userDetailsWrapper nameContainer'>
        {editable && <input
                       ref={node=>{this.nameEditInput=node}}
                       className='editable'
                       placeholder='Name'
                       type='text'
                       defaultValue={name}/>}
        {!editable && <span className='editable'>{name}</span>}
      </div>
      <div className='userDetailsWrapper ageContainer'>
        {editable && <input
                       ref={node=>{this.ageEditInput=node}}
                       className='editable'
                       placeholder='Age'
                       type='text'
                       defaultValue={age}/>}
        {!editable && <span className='editable'>{age}</span>}
      </div>
      <div className='userDetailsWrapper editContainer'>
        <button
          onClick={()=>{
            this.handleEdit(key)
          }}>
          {editable && `Update`}
          {!editable && `Edit`}
        </button>
      </div>
    </div>
     </li>)
  }
}

export default EditableUserDetailUnit

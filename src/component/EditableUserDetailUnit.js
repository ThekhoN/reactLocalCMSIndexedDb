import React, {Component} from 'react'

class EditableUserDetailUnit extends Component {
  constructor(props){
    super(props)
    this.state = {
      key: this.props.data.key,
      name: this.props.data.name,
      editable: false
    }
    this.handleEdit = this.handleEdit.bind(this)
  }
  handleEdit(key){
    console.log('handlingEdit for ', key)
    const {editable, value} = this.state
    if(editable){
      this.setState({
        editable: false,
        name: this.nameEditInput.value,
      }, function(){
        this.props.dispatchEditToMain(this.state.name, key)
      })
    }
    else {
      this.setState({
        editable: true
      })
    }
  }
  render(){
   const {name, age, editable, key} = this.state
   return (<li key={key} onBlur={
         (e)=>{
           //console.log('on bluring the li. . .')
            //console.info('e.target :', e.target)
           //this.handleBlur(key)
         }
       }>
       <div className='editableUserDetailUnit'>
      <div className='userDetailsWrapper nameContainer'>
        {editable && <input
                       onChange={(e)=>{
                        }}
                       ref={node=>{this.nameEditInput=node}}
                       className='editable'
                       type='text'
                       defaultValue={name}/>}
        {!editable && <span className='editable'>{name}</span>}
      </div>
      <div className='userDetailsWrapper editContainer'>
        <button onBlur={()=>{
            //this.handleBlur(key)
          }}

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

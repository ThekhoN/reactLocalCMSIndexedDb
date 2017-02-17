import React, {Component} from 'react'

class UserInputForm extends Component {
    constructor(props){
      super(props)
      this.handleSubmit = this.handleSubmit.bind(this)
      this.validateDate = this.validateDate.bind(this)
    }
  handleSubmit(data){
    this.props.onSubmitInputToMain(data)
  }
  validateDate(data){
    if(data.name === '' && data.age === ''){
      alert('name and age are required!')
      return false
    }
    if(!(/^[A-Za-z\s]+$/.test(data.name))){
      alert('enter a valid name')
      return false
    }
    if(!(/(\d{1,3})/).test(data.age)){
      alert('enter a valid age')
      return false
    }
    else {
      return true
    }
  }
    render(){
      return (<div className='formContainer'>
        <h2>User Input: </h2>
        <br/>
                <form onSubmit={
                    (e)=>{
                      e.preventDefault()
                      const data = {
                        name: this.nameInput.value,
                        age: this.ageInput.value,
                        key: new Date().getTime() //unique key
                      }
                      if(this.validateDate(data)){
                        this.handleSubmit(data)
                      }
                    }
                  }>
                  <p>
                    <label htmlFor='name'>Name: <input ref={node=>{this.nameInput=node}} type='text' id='name'/></label>
                  </p>
                  <p>
                    <label htmlFor='age'>Age: <input ref={node=>{this.ageInput=node}} type='text' id='age'/></label>
                  </p>
                  <p>
                    <button className='button-e pure-button' type='submit'>submit</button>
                  </p>
                </form>
              </div>)
    }
}

export default UserInputForm

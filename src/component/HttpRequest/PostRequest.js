import React, { Component } from 'react'
import axios from 'axios'

export class PostRequest extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         firstname: "",
         middlename: "",
         lastname: "",
         success: "",
         failure: "",
      }
    }
    changeHandler = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    submitHandler = (event) => {
        const{firstname, middlename, lastname} = this.state
        event.preventDefault()
        console.log(this.state)
        if(!firstname || !middlename || !lastname){
            this.setState({failure: "please fill all details"})
        }else{
            axios.post("https://shrouded-taiga-78885.herokuapp.com/api/user", this.state)
                .then(response => {
                    console.log(response)
                    this.setState({success: "Congrate you have successfully signed up"})
                })
                .catch(error => {
                    console.log(error)
                    this.setState({failure: "Check your network"})
                })
        } 
    }

  render() {
      const {firstname, middlename, lastname, success, failure} = this.state
    return (
      <div>
          <p>{success}</p>
          <p>{failure}</p>
          <form onSubmit={this.submitHandler}>
              <div>
                  <label>firstname: </label>
                  <input 
                    type="text" 
                    value={firstname}
                    name="firstname"
                    onChange={this.changeHandler}
                  />
              </div>
              <div>
                  <label>middlename: </label>
                  <input 
                    type="text" 
                    value={middlename}
                    name="middlename"
                    onChange={this.changeHandler}
                  />
              </div>
              <div>
                  <label>lastname: </label>
                  <input 
                    type="text" 
                    value={lastname}
                    name="lastname"
                    onChange={this.changeHandler}
                  />
              </div>
              <button type='submit'>Submit</button>
          </form>
      </div>
    )
  }
}

export default PostRequest
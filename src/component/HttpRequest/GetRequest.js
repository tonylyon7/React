import React, { Component } from 'react'
import axios from 'axios'

export class GetRequest extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         post: [],
         errorMsg: ""
      }
    }

    componentDidMount (){
        axios.get("https://tonybackend.herokuapp.com/api/user")
            .then(response => {
                console.log(response)
                this.setState({posts: response.data})
            })
            .catch(error => {
                this.setState({errorMsg: "Something went wrong"})
            })
    }
  render() {
     const {post} = this.state
    return (
      <div>
          {
            post ? 
                post.map(p => {
                    <div key={post.id}>
                        <h2>{post.title}</h2>
                    </div>
                })
            : <h2>(errorMsg)</h2>}
      </div>
    )
  }
}

export default GetRequest
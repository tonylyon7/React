
import React, {Component} from "react";

class Form extends Component{
    constructor(props){
        super(props)
        this.state = {
            name: "",
            email: "",
            comments: "",
            choice: ""
        }
    }

    handleName = (event) => {
        this.setState({
            name: event.target.value
        },() => {console.log(this.state.name)})
    }

    handleEmail = (event) => {
        this.setState({
            email: event.target.value
        },() => {console.log(this.state.email)})
    }

    handleComment = (event) => {
        this.setState({
            comments: event.target.value
        },() => {console.log(this.state.email)})
    }

    handleChoice = (event) => {
        this.setState({
            choice: event.target.value
        },() => {console.log(this.state.choice)})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        alert(`
        ${this.state.name}
        ${this.state.email}
        ${this.state.comments}
        ${this.state.choice}
        `)
    }

    render(){
        return(
            <>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Name: </label>
                        <input type="text" value={this.state.name} onChange={this.handleName}/>
                    </div>
                    <div>
                        <label>Email: </label>
                        <input type="text" value={this.state.email} onChange={this.handleEmail}/>
                    </div>
                    <div>
                        <label>Comment: </label>
                        <textarea type= "text" value={this.state.comments} onChange={this.handleComment}/>
                    </div>
                    <div>
                        <label>Choice of Library</label>
                        <select value={this.state.choice} onChange={this.handleChoice}>
                            <option name="React">React</option>
                            <option name="View">View</option>
                            <option name="Angular">Angular</option>
                        </select>
                    </div>
                    <button type="submit"> Submit</button>
                </form>
            </>
        )
    }
}

export default Form
import React, { Component } from "react";

class Form extends Component {
    constructor (props) {
        super (props)

        this.initialState = {
            title: "",
            body: "",
        }

        this.state = this.initialState
    }

    handleChange = event => {
        const {name, value } = event.target

        this.setState({
            [name]: value
        })
    }

    submitForm = () => {
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
    }

    render () {
        const {title, body } = this.state;

        return (
            <div>
                <form>
                    <label>Title</label>
                    <input
                        placeholder = "Insert Title"
                        type = "text"
                        name = "title"
                        value = {title}
                        onChange = {this.handleChange}
                        id = "title" />

                    <label>Entry</label>

                    <input
                        placeholder = "Tell Me About Your Day"
                        type = "textarea"
                        name = "body"
                        value = {body}
                        onChange = {this.handleChange}
                        id = "body" />

                </form>
                <button onClick = {this.submitForm}>Submit</button>
            </div>
        )
    }
}




export default Form;
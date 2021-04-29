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
}
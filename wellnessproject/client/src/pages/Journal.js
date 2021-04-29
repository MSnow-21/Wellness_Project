import React, { Component } from 'react';

class App extends Component {
    state = {
        entries: [


        ]
    }
}

removeEntry = index => {
    const { entries } = this.state
    
    this.setState ({
        entries: entries.filter (( entry, i) => {
            return i != index
        })
    })
}

handleSubmit = entry => {
    this.setState ({ entries: [...this.state.entires, entry]})
}
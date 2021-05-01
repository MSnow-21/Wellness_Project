import React, { Component } from 'react';
import Form from "../../components/Form/Form";
import Entries from "../../components/Entries/Entries"


//function Header () {
//    return (

 //   )
class Journal extends Component {
    state = {
        entries: [


        ]
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

render () {
    const { entries} = this.state;

    return (
        <div className ="Journal">
            <h1> My Journal </h1>
            <Entries entryData = {entries} removeEntry = {this.Entry}/>
            <Form handleSubmit = {this.handleSubmit}/>
            
        </div>
    );
    
    }

}

export default Journal;
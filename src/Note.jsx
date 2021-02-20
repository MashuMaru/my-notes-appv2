import React, { Component } from "react";

class Note extends Component {

    state = {
        isExpanded: false
    }

    showNote = () => {
        this.setState({
            isExpanded: true
        })
    }

    render() {
        return (
            <div className="note">
                <input onClick={()=>this.showNote()} className="note-title" placeholder="title..."></input>
                {this.state.isExpanded ? (<textarea cols="30" rows="5" className="note-contents" placeholder="contents..."></textarea> ) : null}
                {this.state.isExpanded ? (<img className="delete-img" src={require('./images/recycle-bin.png')} alt="delete"></img>) : null}
            </div>)
        }
    }
    
export default Note;

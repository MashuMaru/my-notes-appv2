import React, { Component } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Note from "./Note.jsx";

class App extends Component {

    state = {
        notes: [
           { 
               id: 0
            }
        ]
    }

    prevNoteID = 1;

    handleAddNote = (id) => {
        this.setState(prevState => {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id: this.prevNoteID += 1
                    }
                ]
            }
        })
    }

    handleRemoveNote = (id) => {
        this.setState (prevState => {
            return {
                notes: prevState.notes.filter(n => n.id !== id)
            }
        });
    }

    render () {

    return (
            <div>
                <Header 
                    addNote={this.handleAddNote}
                />
                <section id="note-section" className="body-section">
                {this.state.notes.map( (note, index) => 
                <Note 
                    id={note.id}
                    key={note.id.toString()}
                    index={index}
                    removeNote={this.handleRemoveNote} 
                />)} 

                </section> 
                <Footer />
            </div>)
            }
        }
export default App;
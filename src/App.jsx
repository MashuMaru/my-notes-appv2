import React, { useState } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Note from "./Note.jsx";

function App() {
    const [notes, setNotes] = useState([0, 1, 2, ]);
    const children = [];

    // function addNewNote() {
    //     for (var i = 0; i < this.setNotes.numChildren; i += 1) {
    //         children.push(<Note />)
    //     } 
    // }
    

    function addNewNote(noteItem) {
        setNotes(prevNotes => {
            return [...prevNotes, noteItem];
        })
    }

    function deleteNote() {
        alert('delete note.');
    }

    return <div>
            <Header 
            onAdd={addNewNote}/>
            <section id="note-section" className="body-section">
            {/* <Note 
                onDelete={deleteNote}
                /> */}
            
            {children}

            {notes.map((notes, index) => {
                return (<Note 
                key={index}
                id={index}
                value={notes.noteItem}
                onDelete={deleteNote}
                />);
            })}
            </section>
            <Footer />
        </div>
}

export default App;
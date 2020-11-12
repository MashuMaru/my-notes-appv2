import React, { useState } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Note from "./Note.jsx";

function App() {
    const [notes, setNotes] = useState([]);

    function addNewNote() { 
        alert('add note....');
    
    }

    // function addNewNote(note) {
    //     setNotes(prevNotes => {
    //         return [...prevNotes, note];
    //     })
    // }

    function deleteNote() {
        alert('delete note.');
    }

    // function deleteNote(id) {
    //     setNotes(prevNotes => {
    //         return prevNotes.filter((noteItem, index) => {
    //             return index !== id;
    //         })
    //     })
    // }

    return <div>
            <Header 
            onAdd={addNewNote}/>
            <section id="note-section" className="body-section">
            <Note 
                onDelete={deleteNote}
                />
            {notes.map((noteItem, index) => {
                return (<Note 
                key={index}
                id={index}
                value={noteItem.noteItem}
                onDelete={deleteNote}
                />);
            })}
            </section>
            <Footer />
        </div>
}

export default App;
import React, { useState } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Note from "./Note.jsx";

function App() {
    const [notes, setNotes] = useState([0]);

    // function addNewNote() { 
    //     alert('add note....');
    
    // }

    function addNewNote(noteItem) {
        setNotes(prevNotes => {
            return [...prevNotes, noteItem];
        })
    }



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
            {/* <Note 
                onDelete={deleteNote}
                /> */}

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
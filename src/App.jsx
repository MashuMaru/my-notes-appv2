import React, { useState } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Note from "./Note.jsx";

function App() {
    const [notes, setNotes] = useState([]);

    function deleteNote(id) {
        setNotes(prevNotes => {
            return prevNotes.filter((noteItem, index) => {
                return index !== id;
            })
        })
    }

    return <div>
            <Header />
            <section className="body-section">
            <Note />
            {notes.map((noteItem, index) => {
                return (<Note 
                key={index}
                id={index}
                onDelete={deleteNote}
                />);
            })}
                


            </section>
            <Footer />
        </div>
}

export default App;
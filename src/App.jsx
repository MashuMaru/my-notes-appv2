import React from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Note from "./Note.jsx";

function addNote() {
    alert("Add note.")
}

function App() {
    return <div>
<Header />
<img className="add-img" src={require('./images/plus.png')} alt="add" onClick={addNote}></img>
<div className="grid-container">
<Note />
<Note />
<Note />
<Note />
<Note />
</div>
<Footer />
    </div>
}

export default App;
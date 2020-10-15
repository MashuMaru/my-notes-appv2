import React from "react";

function addNote(){
    alert("add a new note.")
}

function Header() {
    return <div className="header">
        <h1>My Sticky Notes App</h1>
        <img src="plus.png" alt="plus" onClick={addNote}></img>
    </div>
    }



export default Header;
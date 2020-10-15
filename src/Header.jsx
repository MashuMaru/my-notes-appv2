import React from "react";

function addNote(){
    alert("add a new note.")
}

function Header() {
    return <div className="header">
        <h1>My Sticky Notes App</h1>
        {/* <img src="plus.png" alt="plus" onClick={addNote}></img> */}
        <img className="add-img" src={require('./plus.png')} onClick={addNote} alt="add"></img>
    </div>
    }



export default Header;
import React from "react";


function addNote(){
    alert("add a new note.")
}

function Header() {
    return <div className="header">
        <h1 className="header-text">My Sticky Notes App</h1>
        <img className="add-img" src={require('./images/plus.png')} alt="add" onClick={addNote}></img>
    </div>
    }



export default Header;
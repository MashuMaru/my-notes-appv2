import React from "react";

function deleteNote() {
    alert("Delete note.");
}

function Note() {
    return <div className="note">
    <input className="note-title" placeholder="title..."></input>
    <textarea cols="30" rows="5" className="note-contents" placeholder="contents..."></textarea>
    <img className="delete-img" src={require('./images/recycle-bin.png')} onClick={deleteNote} alt="delete"></img>
    </div>
}

export default Note;
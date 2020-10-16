import React from "react";

function clickedTitle() {
    alert("Add the title of the note")
}

function clickedContents () {
    alert("Add the contents of the note.")
}

function deleteNote() {
    alert("Delete note.");
}

function Note() {
    return <div className="note">
    <input className="note-title" placeholder="title..." onClick={clickedTitle}></input>
    <textarea cols="30" rows="5" className="note-contents" placeholder="contents..." onClick={clickedContents}></textarea>
    <img className="delete-img" src={require('./images/recycle-bin.png')} onClick={deleteNote} alt="delete"></img>
    </div>
}

export default Note;
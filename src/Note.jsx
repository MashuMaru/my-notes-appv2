import React from "react";

function clickedTitle() {
    alert("Add the title of the note")
}

function clickedContents () {
    alert("Add the contents of the note.")
}

function deleteNote() {
    alert("Delete this note.")
}

function Note() {
    return <div className="note">
    {/* <div className="note-move">1</div> */}
    <input className="note-title" placeholder="title..." onClick={clickedTitle}></input>
    <textarea cols="30" rows="5" className="note-contents" placeholder="contents..." onClick={clickedContents}></textarea>
    <img src="/recycle-bin.png" alt="delete" onClick={deleteNote}></img>
    </div>
}

export default Note;
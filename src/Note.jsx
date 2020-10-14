import React from "react";

function clickedTitle() {
    alert("Add the title of the note")
}

function clickedContents () {
    alert("Add the contents of the note.")
}

function Note() {
    return <div className="note">
    <input className="note-title" placeholder="title..." onClick={clickedTitle}></input>
    <input cols="30" rows="5" className="note-contents" placeholder="contents..." onClick={clickedContents}></input>
    </div>
}

export default Note;
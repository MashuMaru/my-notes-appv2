import React, { useState } from "react";



function Note() {

    const [isExpanded, setExpanded] = useState(false);

    function deleteNote() {
        alert("Delete note.");
    }
    
    function expand() {
        setExpanded(true);
        
    }

    return <div className="note">
    <input className="note-title" placeholder="title..." onClick={expand}></input>
    {isExpanded ? (<textarea cols="30" rows="5" className="note-contents" placeholder="contents..."></textarea>) : null}
    {isExpanded ? (<img className="delete-img" src={require('./images/recycle-bin.png')} onClick={deleteNote} alt="delete"></img>) : null}
    </div>
}

export default Note;
import React, { useState } from "react";



function Note(props) {

    const [isExpanded, setExpanded] = useState(false);

    function handleClick(props) {
        props.onDelete(props.id);
    }
    
    function expand() {
        setExpanded(true);
    }

    return <div className="note">
    <input className="note-title" placeholder="title..." onClick={expand}></input>
    {isExpanded ? (<textarea cols="30" rows="5" className="note-contents" placeholder="contents..."></textarea>) : null}
    {isExpanded ? (<img className="delete-img" src={require('./images/recycle-bin.png')} onClick={handleClick} alt="delete"></img>) : null}
    </div>
}

export default Note;
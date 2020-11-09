import React, {useState} from "react";


function addNote(){
    alert("add a new note.")
}

function Header() {
    const [isMouseOver, setMouseOver] = useState(false);
    const [isMouseOut, setMouseOut] = useState(true);

    function handleMouseOver() {
        setMouseOver(true);
    }

    function handleMouseOut() {
        setMouseOut(setMouseOver(false));
    }

    return <div className="header">
                <h1 className="header-text">My Sticky Notes App</h1>
                    <div className="add-button" onMouseOver={handleMouseOver}>
                        <img className="add-img" src={require('./images/plus.png')} alt="add" onClick={addNote} onMouseOut={handleMouseOut}></img>
                    {isMouseOver ? <p className="add-p">add note</p> : null}
                    {isMouseOut && null }
                    </div>
            </div>
    }



export default Header;
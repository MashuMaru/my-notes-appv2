import React, {useState} from "react";

function Header(props) {
    const [isMouseOver, setMouseOver] = useState(false);
    const [isMouseOut, setMouseOut] = useState(true);

    function addNote() {
        props.onAdd();
    }

    function handleMouseOver() {
        setMouseOver(true);
    }

    function handleMouseOut() {
        setMouseOut(setMouseOver(false));
    }

    return <div className="header">
                <h1 className="header-text">My Sticky Notes App</h1>
                    <div className="add-button">
                        <img className="add-img" src={require('./images/plus.png')} alt="add" onClick={addNote} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}></img>
                        {isMouseOver ? <p className="add-p">add note...</p> : null}
                        {isMouseOut && null }
                    </div>
            </div>
    }



export default Header;
import React from "react";


function addNote() {
    alert("Add note.")
}

function Add() {
 return <img className="add-img" src={require('./images/plus.png')} alt="add" onClick={addNote}></img>

}

export default Add;
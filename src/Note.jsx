import React, { Component } from "react";

class Note extends Component {
  state = {
    isExpanded: false,
    isMousedOver: false,
  };

  handleMousedOver = () => {
    this.setState({
      isMousedOver: true,
    });
  };
  handleMousedOut = () => {
    this.setState({
      isMousedOver: false,
    });
  };

  showNote = () => {
    this.setState({
      isExpanded: true,
    });
  };

  render() {
    return (
      <div className="note">
        <input
          onClick={() => this.showNote()}
          className="note-title"
          placeholder="title..."
        ></input>

        {this.state.isExpanded ? (
          <textarea
            cols="30"
            rows="5"
            className="note-contents"
            placeholder="contents..."
          ></textarea>
        ) : null}

        <img
          onClick={() => this.props.removeNote(this.props.id)}
          className="delete-img"
          src={require("./images/recycle-bin.png")}
          alt="delete"
          onMouseOver={this.handleMousedOver}
          onMouseOut={this.handleMousedOut}
        ></img>
        {this.state.isMousedOver ? (
          <p className="delete-p">delete note...</p>
        ) : null}
      </div>
    );
  }
}

export default Note;

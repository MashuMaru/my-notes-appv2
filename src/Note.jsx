import React, { Component } from "react";

class Note extends Component {
  state = {
    isExpanded: false,
    isMousedOver: false,
    isMousedOverSave: false,
    descInput: "",
  };

  userData;

  constructor(props) {
    super(props);

    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDesc = this.onChangeDesc.bind(this);

    this.state = {
      titleInput: "",
      descInput: "",
    };
  }

  onChangeTitle = (e) => {
    this.setState({
      titleInput: e.target.value,
    });
  };

  onChangeDesc = (e) => {
    this.setState({
      descInput: e.target.value,
    });
  };

  componentDidMount() {
    this.userData = JSON.parse(localStorage.getItem("note"));

    if (localStorage.getItem("note")) {
      this.setState({
        titleInput: this.userData.titleInput,
        descInput: this.userData.descInput,
      });
    } else {
      this.setState({
        titleInput: "",
        descInput: "",
      });
    }
  }

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
        <form>
          <input
            onClick={() => this.showNote()}
            className="note-title"
            placeholder="title..."
            value={this.state.titleInput}
            onChange={this.onChangeTitle}
          ></input>

          {this.state.isExpanded ? (
            <textarea
              cols="30"
              rows="5"
              className="note-contents"
              placeholder="contents..."
              value={this.state.descInput}
              onChange={this.onChangeDesc}
            ></textarea>
          ) : null}
        </form>
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

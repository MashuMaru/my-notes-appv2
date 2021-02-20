import React, {Component} from "react";

class Header extends Component {
    
    state = {
        isMousedOver: false,
    }
    

    handleMouseOver = () => {
        this.setState({
            isMousedOver: true
        })
    }

    handleMouseOut = () => {
        this.setState( {
            isMousedOver: false
        })
    }

    render() {
        return <div className="header">
        <h1 className="header-text">My Sticky Notes App</h1>
            <div className="add-button">
                <img className="add-img" src={require('./images/plus.png')} alt="add" onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}></img>
                {this.state.isMousedOver ? <p className="add-p">add note...</p> : null}
                {this.state.isMousedOut && null }
            </div>
    </div>
}

    }
   



export default Header;


// import React, {useState} from "react";

// function Header(props) {
//     const [isMouseOver, setMouseOver] = useState(false);
//     const [isMouseOut, setMouseOut] = useState(true);

//     function addNote() {
//         props.onAdd();
//     }

//     function handleMouseOver() {
//         setMouseOver(true);
//     }

//     function handleMouseOut() {
//         setMouseOut(setMouseOver(false));
//     }

//     return <div className="header">
//                 <h1 className="header-text">My Sticky Notes App</h1>
//                     <div className="add-button">
//                         <img className="add-img" src={require('./images/plus.png')} alt="add" onClick={addNote} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}></img>
//                         {isMouseOver ? <p className="add-p">add note...</p> : null}
//                         {isMouseOut && null }
//                     </div>
//             </div>
//     }



// export default Header;
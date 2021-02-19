import React, { Component } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Note from "./Note.jsx";

class App extends Component {

    state = {
        notes: [
           { id: 0}
        ]
    }
    render () {

    return (
    <div>
                <Header />
                <section id="note-section" className="body-section">
                <Note />

                </section>
                <Footer />
            </div>)
            }
        }
export default App;
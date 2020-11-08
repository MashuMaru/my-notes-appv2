import React from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Note from "./Note.jsx";

function App() {
    return <div>
            <Header />
            <section className="body-section">
                <Note />
                <Note />
                <Note />
                <Note />
                <Note />
                <Note />
            </section>
            <Footer />
        </div>
}

export default App;
import React from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Note from "./Note.jsx";


function App() {
    return <div>
<Header />
<div className="grid-container">
<Note />
<Note />
<Note />

</div>
<Footer />
    </div>
}

export default App;
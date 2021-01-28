import React from "react";

function Footer(){
    var date = new Date();
    var currentYear = date.getFullYear();

    return <div className="footer"> 
    <p>© Copyright {currentYear}. Mashumaru</p>
    </div>
}

export default Footer;
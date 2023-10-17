"use strict";

//HTML connenct
window.addEventListener("load", function() {
    document.getElementById("start").addEventListener("click", function() {
        main();
    });
});


// Helper functions
let getFile = async function(src) {
    return new Promise((resolve) => {
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function() {
            if (xhr.readyState === 4) {
                resolve(this.response);
            }
        }
        xhttp.open("GET", src, true);
        xhttp.send();
    });
}

//Webassembly use
let main = async function() {

    
};





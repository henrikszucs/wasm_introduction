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
            if (xhttp.readyState === 4) {
                if (this.status == 200) {
                    resolve(this.response);
                } else {
                    resolve(undefined);
                }
            }
        }
        xhttp.open("GET", src, true);
        xhttp.responseType = 'arraybuffer';
        xhttp.send();
    });
}

//Webassembly use
let main = async function(src="program.wasm") {

    //
    // SETUP enviroment (import to wasm)
    //
    // Table - good for function access
    const tbl = new WebAssembly.Table({ "initial": 2, "element": "anyfunc" });

    // Memory - good for data access
    const mem = new WebAssembly.Memory({
        "initial": 10,
        "maximum": 100,
        "shared": false
    });

    // Global - good for variable access
    const global = new WebAssembly.Global({ value: "i32", mutable: true }, 0);

    const importObject = {
        "imports": {
            "myImportedFunction": (arg) => {
                console.log(arg);
            }
        },
        "js": {
            "myTable": tbl,
            "myMemory": mem,
            "myGlobal": global,
        }
    };
    

    //
    // LOAD webassemly program data >> module + instance
    //
    let wasm;
    const METHOD = 1;
    if (METHOD === 1) {
        //vanilla load and construct (beginner friendly)
        const wasmBuffer = await getFile(src);

        const wasmModule = new WebAssembly.Module(wasmBuffer);
	    const wasmInstance = new WebAssembly.Instance(wasmModule);
        wasm = wasmInstance;

    } else if (METHOD === 2) {
        //create module + instance with one function
        const wasmBuffer = await getFile(src);
        const wasmObj = await WebAssembly.instantiate(wasmBuffer);

        const wasmModule = wasmObj.module;
        const wasmInstance = wasmObj.instance;
        wasm = wasmInstance;

    } else if (METHOD === 3) {
        //create module + instance with one function (streamed, fastest method, need CORRECT server setup)
        const wasmObj = await WebAssembly.instantiateStreaming(fetch(src));

        const wasmModule = wasmObj.module;
        const wasmInstance = wasmObj.instance;
        wasm = wasmInstance;

    }
    

    //
    //CALL enviroment (export from wasm)
    //
    console.log(wasm);
    //wasm.exports["myMethod"]();
    
};





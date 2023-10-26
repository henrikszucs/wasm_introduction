var wasmModule = new WebAssembly.Module(wasmCode);
var wasmInstance = new WebAssembly.Instance(wasmModule, wasmImports);

let index = wasmInstance.exports.test();
index = Math.floor(index / Int32Array.BYTES_PER_ELEMENT);
let arr = new Int32Array(wasmInstance.exports.memory.buffer);
console.log(index);
console.log(arr);

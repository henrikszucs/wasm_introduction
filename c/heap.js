var wasmModule = new WebAssembly.Module(wasmCode);
var wasmInstance = new WebAssembly.Instance(wasmModule, wasmImports);

let index = wasmInstance.exports.test(10);
let memoryBuffer = wasmInstance.exports.memory.buffer;
let memoryArray = new Int8Array(memoryBuffer);
selected = new DataView(memoryBuffer, index, Int32Array.BYTES_PER_ELEMENT);

console.log(index);
console.log(selected.getInt32(0, true));

wasmInstance.exports.js_free();

index = wasmInstance.exports.test(100);

console.log(memoryArray);





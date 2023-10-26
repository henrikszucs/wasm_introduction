let i = wasmInstance.exports.test();

let arr = new Uint8Array(wasmInstance.exports.memory.buffer);

let slice = arr.slice(i, i+11);

let decoder = new TextDecoder();
decoder.decode(slice);
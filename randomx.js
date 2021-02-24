var rx = require("./build/Release/randomx.node");

function batchVM(vm, hashes) {
  if (!vm) {
    throw new Error("Invalid VM");
  }

  if (!Array.isArray(hashes)) {
    throw new Error("Invalid hashes, hashes should be an Array of string");
  }

  return new Promise((resolve, reject) => {
    const result = [];

    try {
      for (const hash of hashes) {
        result.push(rx.hash(vm, hash));
      }
      resolve(result);
    } catch (err) {
      reject(err);
    }
  });
}

function batch(seed, hashes) {
  if (typeof seed !== "string") {
    throw new Error("Invalid seed, seed should be a String");
  }

  if (!Array.isArray(hashes)) {
    throw new Error("Invalid hashes, hashes should be an Array of string");
  }

  return new Promise((resolve, reject) => {
    let vm;
    const result = [];

    try {
      vm = rx.RandomxVM(seed, ["jit", "ssse3"]);
      for (const hash of hashes) {
        result.push(rx.hash(vm, hash));
      }
      resolve(result);
    } catch (err) {
      reject(err);
    }
  });
}

function createVM(seed) {
  if (typeof seed !== "string") {
    throw new Error("Invalid seed, seed should be a String");
  }

  return new Promise((resolve, reject) => {
    let vm;

    try {
      vm = rx.RandomxVM(seed, ["jit", "ssse3"]);
      resolve(vm);
    } catch (err) {
      reject(err);
    }
  });
}

exports.batch = batch;
exports.createVM = createVM;
exports.batchVM = batchVM;

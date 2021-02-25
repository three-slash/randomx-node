var rx = require("./build/Release/randomx.node");

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

function batchVM(vm, hashes) {
  if (!vm) {
    throw new Error("Invalid VM");
  }

  if (!Array.isArray(hashes)) {
    throw new Error(
      "Invalid hashes, hashes should be an Array of [nonce, blob]"
    );
  }

  return new Promise((resolve, reject) => {
    const result = [];

    try {
      for (const [nonce, blob] of hashes) {
        result.push([nonce, rx.hash(vm, blob)]);
      }
      resolve(result);
    } catch (err) {
      reject(err);
    }
  });
}

exports.createVM = createVM;
exports.batchVM = batchVM;

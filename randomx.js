var rx = require("./build/Release/randomx.node");

function generate(seed, hashes) {
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

module.exports = generate;

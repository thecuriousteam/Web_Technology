console.log("Node module explorer demo");

const expdemo = require("./first-module");

console.log("Node module explorer demo", __dirname, __filename);

const wrappedLocation = expdemo.wrapperCheck();
console.log("Knowing how the node js wrappes to execute the code");
wrappedLocation;

const path = require("path");

console.log("Current Directory", path.dirname(__filename));
console.log("File Name", path.basename(__filename));
console.log("File Extension", path.extname(__filename));

// we can join the multiple path and make an absolute path
const joinPath = path.join("/user", "documents", "node", "project");
console.log("After join path", joinPath);

const resolvePath = path.resolve("user", "documents", "node", "project");
console.log("Resolve path:", resolvePath);

const normalizePath = path.normalize("/user/.documents/../node/projects");
console.log("normalizePath", normalizePath);

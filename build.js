const { spawn } = require("child_process");

const buildPath = {
    GAME: "game",
    CALL: "video-call",
    NOTIFICATION: "notification"
};

const main = async() => {
    Object.keys(buildPath).forEach(key => {
        spawn("npx", ["cross-env", `REACT_APP_MODULE=${key}`, `BUILD_PATH=build/${buildPath[key]}`, "npm", "run", "build"]);
    });
};

main();
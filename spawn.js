const { spawn } = require("child_process");

const buildPath = {
    GAME: "game",
    CALL: "video-call",
    NOTIFICATION: "notification"
};

const portMap = {
    game: 3000,
    "video-call": 3001,
    notification: 3002
};

const build = () => {
    Object.keys(buildPath).forEach(key => {
        spawn("npx", ["cross-env", `REACT_APP_MODULE=${key}`, `BUILD_PATH=build/${buildPath[key]}`, "npm", "run", "build"]);
    });
};

const serve = () => {
    Object.keys(portMap).forEach(folder => {
        spawn("npx", ["serve", "-s", `build/${folder}`, "-l", portMap[folder]])
    });
};

const main = async() => {
    build();
    console.log("Building completed.");
    serve();
};

main();
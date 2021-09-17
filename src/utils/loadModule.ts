import { envToComponent, Modules } from "../config";

export const loadModule = () => {
    const module = process.env.REACT_APP_MODULE as Modules ;
    const component = envToComponent[module];
    console.log(component)

    let importedComponent;

    switch (component) {
        case "GameVC":
            importedComponent = import("../GameVC/index");
            break;
        case "Notification":
            importedComponent = import("../Notification/index");
            break;
        case "VideoCall":
            importedComponent = import("../VideoCall/index");
            break;
        default:
            break;
    };

    return importedComponent;
};

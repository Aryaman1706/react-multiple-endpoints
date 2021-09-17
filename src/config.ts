export type Modules = "GAME" | "NOTIFICATION" | "CALL";

export type Components = "GameVC" | "Notification" | "VideoCall";

export type TenvToComponent = {
    [K in Modules]: Components
}

export const envToComponent: TenvToComponent = {
    GAME: "GameVC",
    NOTIFICATION: "Notification",
    CALL: "VideoCall"
}

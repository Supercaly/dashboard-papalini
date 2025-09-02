import type { Room } from "./room";

export interface Config {
    baseUrl: string;
    rooms: Room[];
}
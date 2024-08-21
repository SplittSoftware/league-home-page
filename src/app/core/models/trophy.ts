import { SeasonManager } from "./manager";

export interface Trophy {
    type: string;
    image?: string;
    manager?: SeasonManager;
}
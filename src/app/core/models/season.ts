import { SeasonManager } from "./manager";

export interface Season {
    year: number;
    season: number;
    records: SeasonManager[];
    link?: string;
}
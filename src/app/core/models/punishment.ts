export interface Punishment {
    name: string;
    link?: string;
    season: number;
    year: number;
    waffleString: string;
    hoursString: string;
    punishmentResult: PunishmentResult;
}

export interface PunishmentResult {
    waffles: number;
    hours: number;
}

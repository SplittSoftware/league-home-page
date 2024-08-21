export interface SeasonManager {
    name: string;
    wins: number;
    losses: number;
    place: number;
    regPlace?: number;
    pointsFor: number;
    pointsForString?: string;
    pointsAgainst: number;
    pointsAgainstString?: string;
    season: number;
    year: number;
    link?: string;
}

export interface OverallManager {
    name: string;
    wins?: number;
    losses?: number;
    firsts?: number;
    seconds?: number;
    thirds?: number;
    cheds?: number;
    averagePlace: number;
    averagePointsFor: number;
    averagePointsAgainst: number;
    totalPointsFor: number;
    totalPointsAgainst: number;
    link?: string;
}
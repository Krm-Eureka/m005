export interface TRCwDateRange {
    succeeded: boolean;
    message:   null;
    errors:    null;
    data:      item[];
}

export interface item {
    id:                    number;
    partNumber:            string;
    loadValue:             number;
    loadJudgement:         number;
    loadJudgementDesc:     string;
    distanceValue:         number;
    distanceJudgement:     number;
    distanceJudgementDesc: string;
    totalJudgement:        number;
    totalJudgementDesc:    string;
    productionDate:        Date;
    productionDateDesc:    string;
    productionTimeDesc:    string;
}

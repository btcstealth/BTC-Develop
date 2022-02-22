export interface Rating {
  description?: string;
  rating: number;
}

export interface Todo {
  id: number,
  goal: string,
  description?: string,
  value: Rating,
  cost: Rating,
  timeframe: GoalTimeFrameType
}

export enum GoalTimeFrameType {
  LONG_TERM = "Long term",
  SHORT_TERM = "Short term"
}
export type operator = 'in' | 'eq' | 'ne' | 'gt' | 'gte' | 'lt' | 'lte' | 'startswith' | 'endswith' | 'contains' ;

export interface IFilterRule {
  Field?: string;
  Operator?: operator;
  Value?: any;
  Condition?: 'and' | 'or';
  Rules?: IFilterRule[]
}

export interface IFilterConditions {
  Condition: 'and' | 'or';
  Rules: IFilterRule[]
}

export class FilterConditions implements IFilterConditions {
  Condition: "and" | "or";
  Rules: IFilterRule[];

  constructor() {
    this.Condition = "and";
    this.Rules = [];
  }
}


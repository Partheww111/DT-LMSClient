import { OrderBySpecs } from "./orderBySpecs.model";
import { IFilterConditions, FilterConditions, IFilterRule } from "./query.filter.interface";

export interface IAdditionalFilterObject {
  key: string;
  filterValues: string[];
}
export interface IQuerySpecs {
  IncludeDeleted: boolean;
  PaginationSpecs: IPaginationSpecs;
  FilterConditions?: IFilterConditions | null;
  OrderBySpecs?: OrderBySpecs[];
  AdditionalFilters?: IAdditionalFilterObject[];
}

// export class QuerySpecs implements IQuerySpecs {
//   static BuildQuery(arg0: import("./query.filter.interface").IFilterRule[], DefaultPagination: PaginsationSpecs, DefaultSortOrder: OrderBySpecs[], DefaultDisplayColumn: string[], arg4: IAdditionalFilterObject[]): any {
//     throw new Error('Method not implemented.');
//   }
//   public IncludeDeleted: boolean;
//   public FilterConditions?: IFilterConditions;
//   public PaginationSpecs: IPaginationSpecs;
//   public OrderBySpecs?: OrderBySpecs[];
//   public AdditionalFilters?: IAdditionalFilterObject[];
// }


export class QuerySpecs implements IQuerySpecs {
  public IncludeDeleted: boolean;
  public FilterConditions?: IFilterConditions | undefined;
  public PaginationSpecs: IPaginationSpecs;
  public OrderBySpecs?: OrderBySpecs[];
  public AdditionalFilters?: IAdditionalFilterObject[];
  public DisplayColumns?: string[];
  specs: IAdditionalFilterObject | undefined;

  /**
   *
   */
  constructor() {
    this.IncludeDeleted = false;
    this.FilterConditions = new FilterConditions();
    this.PaginationSpecs = new PaginationSpecs();
    this.OrderBySpecs = [];
    this.AdditionalFilters = [];
    this.DisplayColumns = [];
  }

  public static BuildQuery(
    rules: IFilterRule[],
    paginationSpecs: PaginsationSpecs,
    orderBy: OrderBySpecs[],
    AdditionalFilters: IAdditionalFilterObject[] = []
  ): QuerySpecs {
    let query: QuerySpecs = new QuerySpecs();
    //query.FilterConditions.Rules = rules;
    query.PaginationSpecs = paginationSpecs;
    query.OrderBySpecs = orderBy;
    query.AdditionalFilters = AdditionalFilters
    return query;
  }

}
export interface IPaginationSpecs {
  PaginationRequired: boolean;
  Page: number;
  Limit: number;
}

export class PaginsationSpecs implements IPaginationSpecs {
  public PaginationRequired: boolean = false;
  public Page: number = 1;
  public Limit: number = 0;
}

export class PaginationSpecs implements IPaginationSpecs {
  public PaginationRequired: boolean = true;
  public Page: number = 1;
  public Limit: number = 0;
}

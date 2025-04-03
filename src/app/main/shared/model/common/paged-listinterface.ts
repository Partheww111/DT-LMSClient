export interface PagedList<T>
{
    CurrentPage: number,
    TotalPages: number,
    PageSize: number,
    TotalCount: number,
    HasPrevious: boolean,
    HasNext: boolean,
    Items : T[]
}

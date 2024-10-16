export interface FullResponse<T, U extends number> {
  'statusCode': U;
  'headers': object;
  'body': T;
}

export type GetMoviesRequest = {
  'limit'?: number;
  'offset'?: number;
  'totalCount'?: boolean;
  'fields'?: Array<'id' | 'title'>;
  'where.id.eq'?: number;
  'where.id.neq'?: number;
  'where.id.gt'?: number;
  'where.id.gte'?: number;
  'where.id.lt'?: number;
  'where.id.lte'?: number;
  'where.id.like'?: number;
  'where.id.in'?: string;
  'where.id.nin'?: string;
  'where.id.contains'?: string;
  'where.id.contained'?: string;
  'where.id.overlaps'?: string;
  'where.title.eq'?: string;
  'where.title.neq'?: string;
  'where.title.gt'?: string;
  'where.title.gte'?: string;
  'where.title.lt'?: string;
  'where.title.lte'?: string;
  'where.title.like'?: string;
  'where.title.in'?: string;
  'where.title.nin'?: string;
  'where.title.contains'?: string;
  'where.title.contained'?: string;
  'where.title.overlaps'?: string;
  'where.or'?: Array<string>;
  'orderby.id'?: 'asc' | 'desc';
  'orderby.title'?: 'asc' | 'desc';
}

export type GetMoviesResponseOK = Array<{ 'id'?: number | null; 'title'?: string | null }>
export type GetMoviesResponses =
  GetMoviesResponseOK

export type CreateMovieRequest = {
  'id'?: number;
  'title': string;
}

export type CreateMovieResponseOK = { 'id'?: number | null; 'title'?: string | null }
export type CreateMovieResponses =
  CreateMovieResponseOK

export type UpdateMoviesRequest = {
  'fields'?: Array<'id' | 'title'>;
  'where.id.eq'?: number;
  'where.id.neq'?: number;
  'where.id.gt'?: number;
  'where.id.gte'?: number;
  'where.id.lt'?: number;
  'where.id.lte'?: number;
  'where.id.like'?: number;
  'where.id.in'?: string;
  'where.id.nin'?: string;
  'where.id.contains'?: string;
  'where.id.contained'?: string;
  'where.id.overlaps'?: string;
  'where.title.eq'?: string;
  'where.title.neq'?: string;
  'where.title.gt'?: string;
  'where.title.gte'?: string;
  'where.title.lt'?: string;
  'where.title.lte'?: string;
  'where.title.like'?: string;
  'where.title.in'?: string;
  'where.title.nin'?: string;
  'where.title.contains'?: string;
  'where.title.contained'?: string;
  'where.title.overlaps'?: string;
  'where.or'?: Array<string>;
  'id'?: number;
  'title': string;
}

export type UpdateMoviesResponseOK = Array<{ 'id'?: number | null; 'title'?: string | null }>
export type UpdateMoviesResponses =
  UpdateMoviesResponseOK

export type GetMovieByIdRequest = {
  'fields'?: Array<'id' | 'title'>;
  'id': number;
}

export type GetMovieByIdResponseOK = { 'id'?: number | null; 'title'?: string | null }
export type GetMovieByIdResponses =
  GetMovieByIdResponseOK

export type UpdateMovieRequest = {
  'fields'?: Array<'id' | 'title'>;
  'id': number;
  'title': string;
}

export type UpdateMovieResponseOK = { 'id'?: number | null; 'title'?: string | null }
export type UpdateMovieResponses =
  UpdateMovieResponseOK

export type DeleteMoviesRequest = {
  'fields'?: Array<'id' | 'title'>;
  'id': number;
}

export type DeleteMoviesResponseOK = { 'id'?: number | null; 'title'?: string | null }
export type DeleteMoviesResponses =
  DeleteMoviesResponseOK

export type GetExampleRequest = {
  unknown
}

export type GetExampleResponseOK = unknown
export type GetExampleResponses =
  FullResponse<GetExampleResponseOK, 200>



export interface Api {
  setBaseUrl(newUrl: string) : void;
  setDefaultHeaders(headers: Object) : void;
  getMovies(req?: GetMoviesRequest): Promise<GetMoviesResponses>;
  createMovie(req?: CreateMovieRequest): Promise<CreateMovieResponses>;
  updateMovies(req?: UpdateMoviesRequest): Promise<UpdateMoviesResponses>;
  getMovieById(req?: GetMovieByIdRequest): Promise<GetMovieByIdResponses>;
  updateMovie(req?: UpdateMovieRequest): Promise<UpdateMovieResponses>;
  deleteMovies(req?: DeleteMoviesRequest): Promise<DeleteMoviesResponses>;
  getExample(req?: GetExampleRequest): Promise<GetExampleResponses>;
}
type PlatformaticFrontendClient = Omit<Api, 'setBaseUrl'>
type BuildOptions = {
  headers?: Object
}
export default function build(url: string, options?: BuildOptions): PlatformaticFrontendClient

import { Action } from '@ngrx/store';
import { Company } from '../../company/company';

export const LOAD_COMPANIES_SUCCESS = '[Companies] Load Success';
export const DELETE_COMPANY = '[Companies] Delete';

export class LoadCompaniesSuccess implements Action {
  readonly type = LOAD_COMPANIES_SUCCESS;
  constructor(public payload: Company[]) { }
}

export class DeleteCompany implements Action {
  readonly type = DELETE_COMPANY;
  constructor(public payload: number) { }
}

export type All
  = LoadCompaniesSuccess
  | DeleteCompany;

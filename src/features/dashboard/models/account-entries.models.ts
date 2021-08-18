import { PageableResponse } from 'src/types/api-response';

export type AccountEntriesResponse = PageableResponse<AccountEntry>;

export interface AccountEntry {
  accountEntryId: number;
  amount: number;
  status: Status;
  orderId: number;
  groupId: number;
  createDate: string;
}

export enum Status {
  Paid = 'PAID',
}

export interface AccountEntriesFrequencyResponse {
  [date: string]: number;
}

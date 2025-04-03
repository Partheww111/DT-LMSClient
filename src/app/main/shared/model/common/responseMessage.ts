import { Alert } from "./alert.interface";

export interface ResponseMessage {
  ResCode: number;
  Success: boolean;
  Message?: string;
  Data?: any;
  Alerts?: Alert[];
}

export interface gResponseMessage<T> {
  ResCode: number;
  Success: boolean;
  Message: string;
  Data: T;
  Alerts: Alert[];
}

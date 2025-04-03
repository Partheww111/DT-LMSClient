import { AlertLevel, AlertType } from "./alert.types";

export interface Alert {
  Id?: string,
  Code?: number;
  Type?: AlertType;
  Message: string;
  CanDismiss: boolean;
  Level?: AlertLevel;
  AutoClose: boolean;
  FieldName?: any;
  HelpPageId?: string;
}



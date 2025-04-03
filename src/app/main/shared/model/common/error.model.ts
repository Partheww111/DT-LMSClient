import { Alert } from "./alert.interface";

export class ApiError {
    code: number;
    message: string;
    alerts: Alert[]

    constructor(code: number, message: string, alerts: Alert[] ) {
        this.code = code;
        this.message = message;
        this.alerts = alerts;
     }

    set addAlert(alert: Alert) {
        this.alerts.push(alert)
    }
}

export class AppError {
    code? : number;
    message: string;
    parameters?: any

    constructor(msg: string, errCode = 0, params = null) {
        this.message = msg;
        if(errCode != 0) {
            this.code = errCode;
        }

        if(params) {
            this.parameters = params;
        }
    }
}
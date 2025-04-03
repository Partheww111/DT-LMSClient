import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { API_ENDPOINTS } from "../../../main/shared/config/api-endpoints.config";
import { ResponseMessage } from "../../../main/shared/model/common";
import { httpOptions } from "../../../main/shared/config/httpOptions";


@Injectable({
  providedIn: 'root'
})
export class UserListService {

  constructor(private _http: HttpClient) { }

  public UserList() {
    let API = API_ENDPOINTS.User.List ;
    return this._http.get<ResponseMessage>(API);
  }

  
}

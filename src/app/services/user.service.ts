import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Injectable } from '@angular/core';


export interface UserInfo{
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string; 
}

export interface resultData{
  data: UserInfo[];
}

@Injectable()
export class UserService{
  constructor(private _http: HttpClient){

  }
  getUsersData():Observable<resultData>{
    return this._http.get<resultData>('https://reqres.in/api/users?page=1')
  }
}
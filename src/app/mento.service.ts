import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { User } from './UserDto';
import { Mentor } from './Mentor';

@Injectable({
  providedIn: 'root'
})
export class MentoService {
  private baseUrl1 = 'http://localhost:5757/api/assistant';

  constructor(private http: HttpClient) { }
  signUp(user: User): Observable<any> {
    return this.http.post<any>(`${this.baseUrl1}/signup`, user);
  }
  login(user: User): Observable<any> {
    return this.http.post<any>(`${this.baseUrl1}/login`, user);
  }



  loadMentor():Observable<any>{
    return this.http.get(`${this.baseUrl1}/display`);
  }
  loadWeather():Observable<any>{
    return this.http.get("https://api.openweathermap.org/data/2.5/weather?lat=27.9506&lon=-82.4572&appid=e5ed9efd684b2ec495fbd588b00d890f");
  }
  addMentor(user:Mentor):Observable<any>{

    return this.http.post(`${this.baseUrl1}/addmentor`,user);
  }

}

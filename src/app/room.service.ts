import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Room } from './room';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  private baseUrl = 'http://localhost:8080/api/v1/rooms';

  constructor(private http: HttpClient) { }

  getRoom(id: number): Observable<any> {
    
    return this.http.get(this.baseUrl + '/' + id);
    //return this.http.get('${this.baseUrl}/${id}');
  }

  createRoom(room: Object): Observable<Object> {

    return this.http.post(this.baseUrl, room);
    //return this.http.post('${this.baseUrl}', room);
  }

  updateRoom(id: number, value: any): Observable<Object> {

    return this.http.put(this.baseUrl + '/' + id, value);
    //return this.http.put('${this.baseUrl}/${id}', value);
  }

  deleteRoom(id: number): Observable<any> {

    return this.http.delete(this.baseUrl + '/' + id, {responseType: 'text'});
    //return this.http.delete('${this.baseUrl}/${id}', {responseType: 'text'});
  }

  getRoomsList(): Observable<any> {

    return this.http.get(this.baseUrl);
    //return this.http.get('${this.baseUrl}');
  }
}

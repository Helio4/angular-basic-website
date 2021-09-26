import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  apiUrl = 'https://api.github.com/users';

  constructor(private http: HttpClient) { }


  // Get a number of users
  getUsers(number: number) {
    return this.http.get(`${this.apiUrl}?per_page=${number}`);
  }

  // Get a single user by username
  getUser(username: string) {
    return this.http.get(`${this.apiUrl}/${username}`);
  }

}

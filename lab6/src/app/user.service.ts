import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, take } from 'rxjs';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://jsonplaceholder.typicode.com/todos';
  private favoriteUsers: any[] = [];

  constructor(private http: HttpClient, private storage: Storage) {
    this.createDatabase();
  }

  getUsers(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  async getFavoriteUsers(): Promise<any[]> {
    const storedUsers = await this.storage.get('favoriteUsers');
    this.favoriteUsers = storedUsers || [];
    return this.favoriteUsers;
  }

  addToFavorites(user: any) {
    if(!this.favoriteUsers.includes(user)){
      this.favoriteUsers.push(user);
      this.storage.set('favoriteUsers', this.favoriteUsers);
    }
  }

  private createDatabase() {
    this.storage.create();
  }
}
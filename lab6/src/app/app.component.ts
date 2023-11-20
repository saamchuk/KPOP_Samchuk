import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';

import { MatDialog } from '@angular/material/dialog';
import { UserDialogComponent } from './user-dialog/user-dialog.component';

import { FavoritesComponent } from './favorites/favorites.component';

import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ HttpClientModule, MatTableModule, UserDialogComponent, FavoritesComponent],
  providers: [UserService, Storage],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  users: any[] = [];
  favorites: any[] = [];
  constructor(private userService: UserService, public dialog: MatDialog, public storage: Storage) {}

  ngOnInit() {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
    });
    this.storage.create();
    this.loadFavorites();
  }
  
  loadFavorites(): void {
    this.storage.get('favorites').then((favorites) => {
      if (favorites) {
        this.favorites = favorites;
      }
    });
  }

  openDialog(user: any): void {
    const dialogRef = this.dialog.open(UserDialogComponent, {
      data: user
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result && !this.favorites.includes(user)){
        this.favorites = [...this.favorites, user];
        this.storage.set('favorites', this.favorites);
      }
    });
  }

  clearStorage(){
    this.storage.clear().then(() => {
      location.reload();
    });
  }
}

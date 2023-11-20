import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';

import { MatDialog } from '@angular/material/dialog';
import { UserDialogComponent } from './user-dialog/user-dialog.component';

import { FavoritesComponent } from './favorites/favorites.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ HttpClientModule, MatTableModule, UserDialogComponent, FavoritesComponent],
  providers: [UserService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  users: any[] = [];
  favorites: any[] = [];
  constructor(private userService: UserService, public dialog: MatDialog) {}

  ngOnInit() {
    this.userService.getUsers().subscribe(data => {
      this.users = data.results;
    });
  }
  
  openDialog(user: any): void {
    const dialogRef = this.dialog.open(UserDialogComponent, {
      data: user
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result && !this.favorites.includes(user)){
          this.favorites = [...this.favorites, user];
      }
    });
  }
}

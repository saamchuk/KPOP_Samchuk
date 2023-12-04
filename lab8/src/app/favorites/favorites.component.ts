import { Component, Input} from '@angular/core';

import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css'
})
export class FavoritesComponent{
  @Input() favorites!: any[];
}

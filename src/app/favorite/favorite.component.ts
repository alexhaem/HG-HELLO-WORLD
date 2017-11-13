import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  IsSelected: boolean;
  title: string;

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.IsSelected = !this.IsSelected;
  }
}

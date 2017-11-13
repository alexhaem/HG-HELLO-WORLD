import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  title: string;

  @Input('is-favorite') IsSelected: boolean;
  @Output('change') click = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.IsSelected = !this.IsSelected;
    this.click.emit({ newValue: this.IsSelected });
  }
}

export interface FavoriteChangedEventArgs {
  newValue: boolean;
}

import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  post = {
    body: 'This is my tweet.',
    isFavorite: true
  };

  tweet = {
    body: 'Here is the body of the tweet..',
    isLiked: false,
    likesCount: 10
  };

  onFavoriteChanged(eventArgs: FavoriteChangedEventArgs) {
    console.log('favorite changed', eventArgs.newValue);
  }
}

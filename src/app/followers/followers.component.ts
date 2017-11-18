import { ActivatedRoute } from '@angular/router';
import { FollowerService } from './../services/follower.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {
  followers: any[];

  constructor(
    private service: FollowerService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    let obs = Observable.combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ])
      .switchMap(combined => {
        let id = combined[0].get('id');
        let page = combined[1].get('page');

        // this.service.getAll({ id: id, page: page });
        return this.service.getAll();
      })
      .subscribe(followers => this.followers = followers);

    // let id1 = this.route.snapshot.paramMap.get('id');
    // this.route.paramMap.subscribe(params => {
    // });

    // let id2 = this.route.snapshot.queryParamMap.get('page');
    // this.route.queryParamMap.subscribe(params => {
    // });
  }
}

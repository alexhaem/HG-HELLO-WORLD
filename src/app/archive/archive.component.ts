import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {
  year: number;
  month: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    // this.route.paramMap
    //   .subscribe(params => {
    //     this.year = +params.get('year');
    //     this.month = +params.get('month');
    //   });

    let params = this.route.snapshot.paramMap;

    this.year = +params.get('year');
    this.month = +params.get('month');
  }

  viewAll() {
    this.router.navigate(['/']); // Home page
  }
}

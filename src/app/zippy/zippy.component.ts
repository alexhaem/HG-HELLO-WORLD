import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent implements OnInit {
  @Input('title') title: string;
  IsExpanded = false;

  constructor() { }

  ngOnInit() {
  }

  toggle(){
    this.IsExpanded = !this.IsExpanded;
  }
}

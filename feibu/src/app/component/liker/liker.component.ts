import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-liker',
  templateUrl: './liker.component.html',
  styleUrls: ['./liker.component.css']
})
export class LikerComponent implements OnInit {

  @Input()
  count: number = 0;
  constructor() { }
  //counter:number = 0;
  ngOnInit() {
  }

  increment(){
    this.count++;
  }

  

}

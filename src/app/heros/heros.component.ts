import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['../../assets/styles/common.scss','./heros.component.scss']
})
export class HerosComponent implements OnInit {

  constructor() { }
  username:string;
  heros:Array<number>;
  ngOnInit() {
    this.username = 'wsngs';
    this.heros = [
      1,2
    ]
  }

}

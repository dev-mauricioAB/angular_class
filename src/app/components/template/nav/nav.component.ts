import { Component, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit, OnChanges {

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    let heart = document.getElementById("home-id");

    if (heart)
      heart.classList.add('backGround');
  }


}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-lol',
  templateUrl: './lol.component.html',
  styleUrls: ['./lol.component.css'],
})
export class LolComponent implements OnInit {
  constructor(private route: Router) {}

  ngOnInit(): void {
    this.route.navigate(['/cart']);
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-arg-prog',
  templateUrl: './arg-prog.component.html',
  styleUrls: ['./arg-prog.component.css']
})
export class ArgProgComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login(){
    this.router.navigate(['/login'])
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-arg-prog',
  templateUrl: './arg-prog.component.html',
  styleUrls: ['./arg-prog.component.css']
})
export class ArgProgComponent implements OnInit {

  isLogged = false;
  constructor(private router: Router, private tokenService: TokenService) { }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  onLogOut(): void {
    this.tokenService.logout();
    window.location.reload();
  }

  login() {
    this.router.navigate(['/login'])
  }
}

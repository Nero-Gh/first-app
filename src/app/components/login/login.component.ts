import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MasterService } from '../../services/master.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  providers: [MasterService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginObj: any = {
    username: '',
    password: '',
  };

  constructor(private mast: MasterService, private router: Router) {}

  onLogin() {
    this.mast.login(this.loginObj).subscribe((res: any) => {
      if (res.result == true) {
        localStorage.setItem('user', JSON.stringify(res.data));
        this.router.navigate(['']);
      } else {
        alert('Invalid Username or Password');
      }
    });
  }
}

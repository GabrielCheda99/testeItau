import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  loading: boolean = false;
  error: string;
  email: string;
  password: string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    localStorage.clear();
  }

  onSubmit(form: NgForm) {
    this.loading = true;
    if (!form.valid) return;

    // this.authLibService.authenticateUser(form.value);

    this.authService.login(form.value).subscribe(authenticated => {
      if (!authenticated) {
        this.loading = false
        return this.error = "O e-mail está incorreto.";
      }
      else {
        this.loading = false;
        return this.router.navigateByUrl('/home')
      }
    })

    form.reset();
  }
}

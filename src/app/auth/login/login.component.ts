import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/core/service/auth.service';
import { IuserConnect } from 'src/app/shared/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm!: FormGroup;
  constructor(private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.loginForm = this.fb.group({
      email: ['test@test.test', Validators.compose([Validators.required, Validators.pattern(/^\S+@\S+\.\S+$/)])],
      password: ['test', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(20)])]
    });
  }

  submitForm(): void {
    const formModel = this.loginForm.value;
    const data: IuserConnect = {
      email: formModel.email,
      password: formModel.password,
    };
    this.loginForm.disable();
    this.authService.login(data)
      .then((res) => {
        this.toastr.success(res);
        this.router.navigate(['/pages/home']);

      })
      .catch((e) => {
        this.toastr.error(e);
      })
      .finally(() => {
        this.loginForm.enable();
      });
  }

}

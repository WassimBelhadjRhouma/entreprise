import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/core/service/auth.service';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public registerForm!: FormGroup;
  constructor(private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(30)])],
      lastName: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(40)])],
      email: ['', Validators.compose([Validators.required, Validators.pattern(/^\S+@\S+\.\S+$/)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(20)])]
    });
  }

  submitForm(): void {
    const formModel = this.registerForm.value;
    const data: User = new User({
      firstName: formModel.firstName,
      lastName: formModel.lastName,
      email: formModel.email,
      password: formModel.password,
    });
    this.registerForm.disable();
    this.authService.register(data)
      .then((suc) => {
        this.toastr.success(suc);
        this.router.navigate(['/auth/login']);
      })
      .catch((e) => {
        this.toastr.warning(e);
      })
      .finally(() => {
        this.registerForm.enable();
      });
  }

}

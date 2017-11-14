import { PasswordValidators } from './password.validators';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'change-password-form',
  templateUrl: './change-password-form.component.html',
  styleUrls: ['./change-password-form.component.css']
})
export class ChangePasswordFormComponent {
  form = new FormGroup({
    oldPassword: new FormControl('', Validators.required, PasswordValidators.invalidOldPassword),
    newPassword: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required)
  }, 
  PasswordValidators.passwordsShouldMatch);

  // form: FormGroup;

  // constructor(fb: FormBuilder) {
  //   this.form = fb.group({
  //     oldPassword: ['', Validators.required, PasswordValidators.invalidOldPassword],
  //     newPassword: ['', Validators.required],
  //     confirmPassword: ['', Validators.required],
  //   }, {
  //       validator: PasswordValidators.passwordsShouldMatch
  //     });
  // }

  get oldPassword() {
    return this.form.get('oldPassword');
  }

  get newPassword() {
    return this.form.get('newPassword');
  }

  get confirmPassword() {
    return this.form.get('confirmPassword');
  }

  changePassword() {
    console.log('Changed');
  }
}

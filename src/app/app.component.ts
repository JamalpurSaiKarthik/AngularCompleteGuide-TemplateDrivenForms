import { Component, ViewChild,ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class AppComponent {
  @ViewChild('f',{static: false}) signUpForm: NgForm;
  defaultQuestion = "teacher";
  answer = '';
  genders = ['Male','Female'];
  user={
    username:'',
    email:'',
    secretQuestion:'',
    answer:'',
    gender:''
  };
  
  submitted = false;

  suggestUserName() {
    const suggestedName = 'Superuser';

    this.signUpForm.form.patchValue({
      userData:{username:suggestedName}
    });
  }

  // onSubmit(form:NgForm)
  // {
  //   console.log(form);
  // }

   onSubmit()
  {
    console.log(this.signUpForm);
    this.submitted = true;
    this.user.username = this.signUpForm.value.userData.username;
    this.user.email = this.signUpForm.value.userData.email;
    this.user.secretQuestion = this.signUpForm.value.secret;
    this.user.answer = this.signUpForm.value.questionAnswer;
    this.user.gender = this.signUpForm.value.gender;

    this.signUpForm.reset();
  }
}

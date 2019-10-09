import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-mentor-signup',
  templateUrl: './mentor-signup.component.html',
  styleUrls: ['./mentor-signup.component.css']
})
export class MentorSignupComponent implements OnInit {

  isSuccess = false;
  message = "";
  isFailed = false;
  registerDetails = new FormGroup({
    fullName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required,Validators.email]),
    phoneNumber: new FormControl('', Validators.required),
    years: new FormControl('', Validators.required),
    videoFacility: new FormControl('', Validators.required),
    presentationFacility: new FormControl('', Validators.required),
    linkdin: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required)
  });

  constructor() { }

  ngOnInit() {
  }

}

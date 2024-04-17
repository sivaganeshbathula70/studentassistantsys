import { Component, OnInit } from '@angular/core';
import { User } from '../UserDto';
import { MentoService } from '../mento.service';
import { Router } from '@angular/router';
interface LoginResponse {
  role: string;
  // Add other properties if present in the response
}
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user: User = new User();
  errorMessage = '';
  signUpMessage: string = '';

  constructor(private userServive:MentoService,private router:Router) { }

  ngOnInit(): void {
  }
  signUp(): void {
    this.userServive
    .signUp(this.user).subscribe(
      (response) => {
        console.log('Signup response:', response);
        this.signUpMessage = 'User registered successfully';
      },
      (error) => {
        console.error('Signup error:', error);
        this.signUpMessage = 'Error in user registration. Please try again.';
      }
    );
  }
  login(): void {
    this.userServive.login(this.user).subscribe(
      (response) => {
        console.log('Login response:', response); 
        if (response && response.role) {
          if (response.role === 'student') {
            console.log('Redirecting to doctor page...');
            this.router.navigateByUrl('/displaymentor');
          } else if (response.role === 'admin') {
            console.log('Redirecting to patient page...');
            this.router.navigateByUrl('/addmentor');
          } 
          else if (response.role === 'adminu') {
            console.log('Redirecting to admin page...');
            this.router.navigateByUrl('/admincomponent');
          } 
          else {
            console.error('Unknown role:', response.role);
            this.errorMessage = 'Invalid role received. Please contact support.';
          }
        } else {
          console.error('Invalid response:', response);
          this.errorMessage = 'Invalid response received. Please try again.';
        }
      },
      (error) => {
        console.error('Login error:', error);
        this.errorMessage = 'Invalid credentials. Please try again.';
      }
    );
  }

}

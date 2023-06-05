import { Component, OnInit } from '@angular/core';
import { FacebookLoginProvider, SocialAuthService } from '@abacritt/angularx-social-login';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angularGoogleLogin';

  constructor(private authService:SocialAuthService){}

  user:any;
  loggedIn:any;
  loggedInUser:any;

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      // this.user = user;
      this.loggedIn = user != null;
      console.log(user);
      localStorage.setItem('user', JSON.stringify(user));
      this.loggedInUser = JSON.parse(localStorage.getItem('user')!);
    });
    this.loggedInUser = JSON.parse(localStorage.getItem('user')!);
    console.log(this.loggedInUser.name);
  }

  signInWithFb(){
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
    localStorage.removeItem("user");
    this.loggedInUser = '';
  }
}

import {Routes } from "@angular/router";

import{SignupComponent} from "./signup.component";
import {SigninComponent} from "./signin.component";
import {LogoutComponent} from "./logout.component";

export const Auth_Routes: Routes = [
  {path: '', redirectTo: 'signup', pathMatch: 'full' },
  {path: 'signup', component: SignupComponent },
  {path:'signin', component: SigninComponent},
  {path:'logout', component: LogoutComponent}
];

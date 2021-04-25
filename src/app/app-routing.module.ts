import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AboutComponent } from './company/about/about.component';
import { CompanyComponent } from './company/company.component';
import { ContactusComponent } from './company/contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PnfComponent } from './pnf/pnf.component';
import { PostComponent } from './post/post.component';
import { PostdetailComponent } from './postdetail/postdetail.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'post',component:PostComponent,canActivate:[AuthGuard]},
  {path:'post/:id',component:PostdetailComponent},
  {path:'company',component:CompanyComponent,
    children:[
      {path:'',redirectTo:'about',pathMatch:'full'},
      {path:'about',component:AboutComponent},
      {path:'contactus',component:ContactusComponent}
    ]
  },
  {path:'',redirectTo:'/home',pathMatch:'prefix'},
  {path:'**',component:PnfComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { ElementRef, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { PostdetailComponent } from './postdetail/postdetail.component';
import { PnfComponent } from './pnf/pnf.component';
import { PostService } from './service/post.service';
import { HttpClientModule } from '@angular/common/http';
import { CompanyComponent } from './company/company.component';
import { AboutComponent } from './company/about/about.component';
import { ContactusComponent } from './company/contactus/contactus.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms'
import { RouterOutlet } from '@angular/router';
import { HighlightDirective } from './highlight.directive';
import { HighDirective } from './high.directive';
import { ObservableComponent } from './observable/observable.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostComponent,
    PostdetailComponent,
    PnfComponent,
    CompanyComponent,
    AboutComponent,
    ContactusComponent,
    LoginComponent,
    HighlightDirective,
    HighDirective,
    ObservableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }

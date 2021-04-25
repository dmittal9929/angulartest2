import { Component } from '@angular/core';
import * as data from './Testdata.json' 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularRouting';
  public Tempdata = data;
  
}

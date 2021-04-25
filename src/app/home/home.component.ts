import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <div>
  <p>
  Danske Bank is a Nordic bank with strong local roots and bridges to the rest of the world. For 150 years, we have helped people and businesses in the Nordics realise their ambitions. 
<br>
<br>
  We want to help our customers become financially confident and help them build their lives and businesses on a solid financial foundation. We aim to create long-term value for all our stakeholders – our customers, shareholders and the societies we are part of – and our vision is to be recognised as the most trusted financial partner.
  <p>
  <div>`,
  styleUrls:["./home.component.css"]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

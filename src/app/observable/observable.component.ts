import { Component, OnInit } from '@angular/core';
import { observable, Observable, Observer, of } from 'rxjs';

@Component({
  selector: 'app-observable',
  template: `
    <p>
      observable works!
    </p><br/>
    <button (click)="call()">subscribe</button>
    <div> time is {{time | async}}</div>
    <div> time is {{res | async}}</div>
  `,
  styles: [
  ]
})
export class ObservableComponent implements OnInit {
  arr:number[] =   [1,2,5,3]
  res:Observable<number[]>
  constructor() { 
    this.res= of(this.arr)
  }

  ngOnInit(): void {
  }
  call(){
    this.res.subscribe(e=>{
      console.log("next",e)
    },
    err=>{
      console.log(err)
    },()=>
    console.log("complete"))

    this.time.subscribe(e=>{
      console.log("next",e)
    },
    err=>{
      console.log(err)
    },()=>
    console.log("complete"))
  }
  time = new Observable<string>((observer: Observer<String>)=>{
    setInterval(()=>observer.next(new Date().toString()),1000)
  })
}

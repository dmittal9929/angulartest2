import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-postdetail',
  templateUrl: './postdetail.component.html',
  styleUrls: ['./postdetail.component.css']
})
export class PostdetailComponent implements OnInit {
  id:number
  emp:any;
  constructor(ar:ActivatedRoute,private ser:PostService,private route:Router) { 
    this.id = ar.snapshot.params['id']
    this.ser.getById(this.id).subscribe(e=>{
      console.log(e)
      this.emp=e
    })
  }

  ngOnInit(): void {
  }
  back(){
    this.route.navigateByUrl('/post')
  }

}

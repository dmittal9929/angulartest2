import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  data:any
  constructor(private ser:PostService,private router:Router) {
    
      this.ser.getAlldata().subscribe(e=>{
        console.log(e)
        this.data = e
      }

      )
   } 
   Details(id){
     console.log("id = "+id);
    this.router.navigateByUrl('/post/{{id}}');
   }

  ngOnInit(): void {

  }

}

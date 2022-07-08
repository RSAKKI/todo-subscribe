import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  constructor(private api:ApiServiceService) { 
api.viewTodos().subscribe(
  (response)=>{
    this.data=response
  }
)

  }

  ngOnInit(): void {
  }
  data:any=
  []

}

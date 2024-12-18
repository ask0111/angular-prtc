import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-data',
  imports: [],
  templateUrl: './user-data.component.html',
  styleUrl: './user-data.component.css'
})
export class UserDataComponent implements OnInit {

  @Input() userData: {name: string, email: string, contact: number} | null = {name: "", email: "", contact: NaN};

  constructor(){
    console.log('UserDataComponent initialized with:');
  }

  ngOnInit(): void {
    console.log('UserDataComponent initialized with:', this.userData);
  }
}

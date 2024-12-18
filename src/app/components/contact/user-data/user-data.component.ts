import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user-data',
  imports: [],
  templateUrl: './user-data.component.html',
  styleUrl: './user-data.component.css',
})
export class UserDataComponent implements OnInit {
  @Input() userData: { name: string; email: string; contact: number } | null = {
    name: '',
    email: '',
    contact: NaN,
  };
  @Output() isVisible= new EventEmitter<boolean>();

  constructor() {
    console.log('UserDataComponent initialized with:');
  }

  getEventProps(event: Event): boolean {
    console.log((event.target as HTMLInputElement).checked);
    return (event.target as HTMLInputElement).checked;
  }
  isChangesSave(event: Event){
    const isChecked = this.getEventProps(event);
    this.isVisible.emit(isChecked)
  }
  ngOnInit(): void {
    console.log('UserDataComponent initialized with:', this.userData);
  }
}

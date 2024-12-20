import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterEvent, RouterOutlet } from '@angular/router';
import { UserDataComponent } from './user-data/user-data.component';

@Component({
  selector: 'app-contact',
  // imports: [FormsModule],
  imports: [UserDataComponent, RouterOutlet],
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  name = 'Hariom yadav';
  email = 'hariomask0111@gmail.com';
  contact = 7806014949;
  disable= false;

  user = {name: "", email: "", contact: NaN};

  private getInputValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }

  setName(event: Event): void {
    this.name = this.getInputValue(event);
    console.log('Name updated:', this.name);
  }
  setEmail(event: Event): void {
    this.email = this.getInputValue(event);
  }
  setContact(event: Event): void {
    this.contact = parseInt(this.getInputValue(event));
  }

  onSubmit(event: Event, name: string, email: string, contact: number){
    event.preventDefault();
    this.user = {name, email, contact};
    setTimeout(()=>{}, 40000)
    console.log(this.user)
  }

  isVisibleFun(value: boolean){
    this.disable = value;
  }
}

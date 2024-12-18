import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterEvent, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  name = 'Hariom yadav';
  email = 'hariomask0111@gmail.com';
  contact = 7806014949;

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
}

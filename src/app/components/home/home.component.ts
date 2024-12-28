import { Component, OnInit } from '@angular/core';
import { ApiServicesService } from '../services/api-services.service';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'], // Corrected property name
})
export class HomeComponent implements OnInit {
  data: any[] = []; // Variable to store fetched data

  constructor(private apiService: ApiServicesService) {}

  ngOnInit(): void {
    this.apiService.fetchData().subscribe(
      (response: any) => {
        this.data = response; // Assign the response data to the variable
      },
      (error: any) => {
        console.error('Error fetching data:', error);
      }
    );
  }
}

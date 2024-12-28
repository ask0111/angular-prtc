import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonComponent } from './components/common/common.component';
import { HomeComponent } from './components/home/home.component';
import { ApiServicesService } from './components/services/api-services.service';

@Component({
  selector: 'app-root',
  imports: [CommonComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [ApiServicesService]
})
export class AppComponent {
  title = 'angular1';
}

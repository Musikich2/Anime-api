
import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Output } from '@angular/core';
import { UserServicesService } from './user-services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular_routing_3';
}

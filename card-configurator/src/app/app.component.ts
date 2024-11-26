import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CardConfiguratorComponent } from './card-configurator/card-configurator.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    ReactiveFormsModule,
    CardConfiguratorComponent,
    CommonModule 
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'card-configurator';
}

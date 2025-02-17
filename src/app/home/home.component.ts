import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { PropuestaDiaComponent } from '../propuesta-dia/propuesta-dia.component';
import { MenuInferiorComponent } from '../menu-inferior/menu-inferior.component';
import { NovedadesComponent } from '../novedades/novedades.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeaderComponent, PropuestaDiaComponent, MenuInferiorComponent, NovedadesComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

}
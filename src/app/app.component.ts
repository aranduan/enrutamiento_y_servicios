import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router'; // Importa RouterLinkActive
import { HeaderComponent } from './header/header.component';
import { PropuestaDiaComponent } from './propuesta-dia/propuesta-dia.component';
import { MenuInferiorComponent } from './menu-inferior/menu-inferior.component';
import { NovedadesComponent } from './novedades/novedades.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, MenuInferiorComponent,RouterLink, RouterLinkActive ], // Importa RouterLinkActive
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-companion'
}
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NovedadesService } from './novedades.service';
import { HeaderComponent } from '../header/header.component'; // Importa HeaderComponent
import { MenuInferiorComponent } from '../menu-inferior/menu-inferior.component'; // Importa MenuInferiorComponent

@Component({
  selector: 'app-novedades',
  standalone: true,
  imports: [CommonModule, HeaderComponent, MenuInferiorComponent], // Agrega HeaderComponent y MenuInferiorComponent a los imports
  templateUrl: './novedades.component.html',
  styleUrl: './novedades.component.css',
  providers: [NovedadesService]
})
export class NovedadesComponent implements OnInit {
  novedades: any[] = [];

  constructor(private novedadesService: NovedadesService) { }

  ngOnInit(): void {
    this.novedades = this.novedadesService.obtenerNovedades();
  }
}
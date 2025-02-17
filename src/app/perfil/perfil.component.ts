import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
  encapsulation: ViewEncapsulation.None // Deshabilita ViewEncapsulation
})
export class PerfilComponent {
  email = 'monica.geller@example.com';
  instagramUrl = 'friends_ig';
}
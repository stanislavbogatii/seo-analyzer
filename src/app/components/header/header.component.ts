import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButton, MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { CommonModule } from '@angular/common';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: true,
  imports: [MatButtonModule , MatIconModule, MatToolbarModule, MatSidenavModule, CommonModule, SidebarModule, ButtonModule, RouterModule]
})
export class HeaderComponent {
  sidebarVisible = false;
  // isMenuOpen = true;

  // toggleMenu() {
  //   this.isMenuOpen = !this.isMenuOpen;
  // }
}

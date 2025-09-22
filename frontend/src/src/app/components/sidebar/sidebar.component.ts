import { Component } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  collapsed = false;


  constructor(private sidebarService: SidebarService) {
    this.sidebarService.collapsed$.subscribe(state => {
      this.collapsed = state;
      console.log('Sidebar collapsed state:', this.collapsed);
    });
  }
}

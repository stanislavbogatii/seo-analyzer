import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})

export class AppComponent implements OnInit {
  title = 'seo-checker_v2';
  ngOnInit(): void {
    initFlowbite()
  }
}

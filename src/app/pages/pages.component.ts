import { Component, OnChanges, OnInit, SimpleChange } from '@angular/core';
import { Router } from '@angular/router';
import { AuthPagesService } from '../core/service/authPages.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
  fullName: string = '';
  currentIndex = 1;
  bool: boolean = true;
  constructor(private router: Router, private authPagesService: AuthPagesService) {
  }

  ngOnInit(): void {
    this.authPagesService.fullName.subscribe(msg => this.fullName = msg);
    console.log('====================================');
    console.log(this.fullName.length);
    console.log('====================================');
  }

  goTo(path: string, index?: number): void {
    if (!index) {
      this.router.navigate([path]);
    } else if (index !== this.currentIndex) {
      this.currentIndex = index;
      this.router.navigate([path]);
    }
  }

  logplz() {
    alert(this.fullName)
  }

}

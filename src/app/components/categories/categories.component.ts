import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterService } from '../../services/master.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers: [MasterService],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css',
})
export class CategoriesComponent implements OnInit {
  categories: any[] = [];

  constructor(private mast: MasterService, private router: Router) {}

  ngOnInit(): void {
    this.loadAllCategories();
  }

  loadAllCategories() {
    this.mast.getAllCategories().subscribe((res: any) => {
      this.categories = res.data;
    });
  }

  //this helps to navigate to the restaurant-items component
  navigate(item: string) {
    this.router.navigate(['/restaurant-items', item]);
  }
}

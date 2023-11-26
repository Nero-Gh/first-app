import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MasterService } from '../../services/master.service';

@Component({
  selector: 'app-restaurant-items',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers: [MasterService],
  templateUrl: './restaurant-items.component.html',
  styleUrl: './restaurant-items.component.css',
})
export class RestaurantItemsComponent {
  items: any[] = [];
  constructor(
    private activator: ActivatedRoute,
    private mast: MasterService,
    private router: Router
  ) {
    this.activator.params.subscribe((params: any) => {
      this.loadItem(params.categoryname);
    });
  }

  loadItem(name: string) {
    this.mast.getCategoryByName(name).subscribe((res: any) => {
      this.items = res.data;
    });
  }

  //this helps to navigate to the restaurant-items component
  navigate(item: string) {
    this.router.navigate(['/restaurant-items', item]);
  }
}

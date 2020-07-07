import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Product } from '../../shared/product';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  products: Product[];
  constructor(
    private productsService: ApiService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.products = this.productsService.getProducts();
  }
}

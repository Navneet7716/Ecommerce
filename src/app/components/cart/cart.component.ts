import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Product } from '../../shared/product';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Cart } from './../detail/detail.component';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  displayedColumns = ['title', 'quantity', 'price', 'actions'];
  cart: Product[] = Cart;
  cartUpdated: Product[] = [];
  constructor(
    private apiService: ApiService,
    private location: Location,
    private route: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.cartUpdated = this.cart;
  }
  goBack() {
    this.location.back();
  }
  getTotalCost() {
    let total: number = 0;
    this.cart.forEach((x) => {
      total = total + x.Quantity * x.price;
    });
    return total;
  }
  delete(id: number) {
    for (let i = 0; i < this.cart.length; i++) {
      if (this.cart[i].id === id) {
        this.snackBar.open(this.cart[i].title + ' Deleted From Cart', 'OK', {
          duration: 3000,
        });
        this.cart.splice(i, 1);
        this.route.navigate([`lol`]);
      }
    }

    this.cartUpdated = this.cart;
  }
  deleteAll() {
    if (this.cart.length !== 0) {
      this.cart.splice(0, this.cart.length);
      this.snackBar.open('Cart Emptied', 'OK', {
        duration: 3000,
      });
      this.route.navigate(['lol']);
    }
  }

  getQuantity() {
    let total: number = 0;
    this.cart.forEach((x) => {
      total = total * 1 + x.Quantity * 1;
    });
    return total;
  }
}

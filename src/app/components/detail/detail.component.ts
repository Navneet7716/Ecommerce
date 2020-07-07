import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Location } from '@angular/common';
import { Params, ActivatedRoute } from '@angular/router';
import { Product } from '../../shared/product';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  selected = 1;
  product: Product;
  constructor(
    private apiService: ApiService,
    private location: Location,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.product = this.apiService.getProduct(parseInt(id));
  }
  addToCart(id) {
    this.product.Quantity = this.selected;
    if (Cart.length === 0) {
      Cart.push(this.product);
      this.snackBar.open(this.product.title + ' Added To Cart', 'OK', {
        duration: 3000,
      });
    } else {
      let f = 0;
      for (let i = 0; i < Cart.length; i++) {
        if (Cart[i].id === id) {
          f = 1;
          this.snackBar.open('Already in the cart', 'OK', {
            duration: 3000,
          });
          break;
        }
      }
      if (f === 0) {
        Cart.push(this.product);
        this.snackBar.open(this.product.title + ' Added To Cart', 'OK', {
          duration: 3000,
        });
      }
    }
  }
  goBack() {
    this.location.back();
  }
}
export const Cart: Product[] = [];

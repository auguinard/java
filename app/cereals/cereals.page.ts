import { Component } from '@angular/core';
import {CartService} from '../cart.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-cereals',
    templateUrl: 'cereals.page.html',
    styleUrls: ['cereals.page.scss']
})
export class CerealsPage {

    constructor(private cartService: CartService,
                private router: Router) {}

    addToCart(product) {
        this.cartService.addProduct(product);
    }

    openCart() {
        this.router.navigate(['cart']);
    }

}

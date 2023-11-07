import { Component } from "@angular/core";

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html'
})
export class ProductListComponent {
    pageTitle: string = "Product List";
    imageWidth: number = 50;
    imageMargin: number = 2;
    isShowingImage: boolean = false;
    listFilter: string = "cart";
    products: any[] = [
        {
            "productId": 2,
            "productName": "Some Cart",
            "productCode": "Some-CODE",
            "releaseDate": "June 28, 2023",
            "description": "Some descr",
            "price": 29.01,
            "starRating": 3.8,
            "imageUrl": "assets/images/garden_cart.png"
        },
        {
            "productId": 4,
            "productName": "Other Hammer",
            "productCode": "Other-CODE",
            "releaseDate": "July 2, 2023",
            "description": "Other descr",
            "price": 29.99,
            "starRating": 4.8,
            "imageUrl": "assets/images/hammer.png"
        }
    ];

    toggleImage(): void {
        this.isShowingImage = !this.isShowingImage;
    }
}
import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent  implements OnInit{
    pageTitle: string = "Product List";
    imageWidth: number = 50;
    imageMargin: number = 2;
    isShowingImage: boolean = false;

    private _listFilter: string = "";
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        console.log("In setter", value);
    }

    products: IProduct[] = [
        {
            "productId": 2,
            "productName": "Some Cart",
            "productCode": "Some-1CODE",
            "releaseDate": "June 28, 2023",
            "description": "Some descr",
            "price": 29.01,
            "starRating": 3.8,
            "imageUrl": "assets/images/garden_cart.png"
        },
        {
            "productId": 4,
            "productName": "Other Hammer",
            "productCode": "Other-2CODE",
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

    ngOnInit(): void {
        this._listFilter = "cart";
    }
}
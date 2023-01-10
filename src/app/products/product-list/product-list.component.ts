import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductListApiService } from '../core/services/product-list-api/product-list-api.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  allProductList:any = [];
  constructor(private apiService: ProductListApiService, private route: Router, private activateRoute:ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.activateRoute)
    this.getProductListData();
  }

  // get all product list data
  getProductListData(){
    this.apiService.getProductList().subscribe((data:any)=>{
      if(data.products){
        this.allProductList = data.products;
        console.log(this.allProductList)
      }
    })
  }
  // route for single product
  routeToGetInfo(item:any){
    /* first way without api call */
      // localStorage.setItem('product', JSON.stringify(item));
      this.route.navigate([`/product/${item.id}`], {queryParams: item});
    /* second way with API call */
    // this.apiService.getSingleProductDetails(item.id).subscribe((data:any)=>{
    //   if(data){
    //     // console.log(data)
    //     // localStorage.setItem('product', JSON.stringify(data));
    //     // this.route.navigateByUrl(`/product/${item.id}`, {state: data});
    //     this.route.navigate([`/product/${item.id}`], {queryParams: data});
    //   } else {
    //     alert(data.message)
    //   }
    // },
    // (error)=>{
    //   alert(error.message)
    // })
  }
}


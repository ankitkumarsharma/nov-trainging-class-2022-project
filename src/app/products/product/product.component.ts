import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productDetails:any;
  roleTypeFlag:boolean = false;
  constructor(private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRoute.data.subscribe((item:any)=>{
      if(item.roles == 'admin'){
        this.roleTypeFlag = true;
        console.log(this.activateRoute)
        // this.productDetails = localStorage.getItem('product');
        // this.productDetails = JSON.parse(this.productDetails);
      this.activateRoute.queryParams.subscribe((data)=>{
          if(data){
            this.productDetails = data;
          }
      })
      } else {
        this.roleTypeFlag = false;
      }
    })

  }

}

import { Component, OnInit } from '@angular/core';
import { TopbarComponent } from "../topbar/topbar.component";
import { HeaderComponent } from "../header/header.component";
import { NavbarComponent } from "../pages/navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";
import { ProductService } from '../shared/services/product.service';
import { HttpResponse } from '@angular/common/http';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [TopbarComponent, HeaderComponent, NavbarComponent, FooterComponent, NgFor, RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {
  productList: any = [];
  constructor(private productService: ProductService) { }
  ngOnInit(): void {
    this.getProduct()

  }
  getProduct(): void {
    this.productService.query().subscribe((res: HttpResponse<any>) => {
      this.productList = res.body
      console.log(res.body)
    })
  }

}

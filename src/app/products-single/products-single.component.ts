import { Component, OnInit } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { ActivatedRoute } from '@angular/router';
import { ProductSingleService } from '../shared/services/productsingle.service';
import { HttpResponse } from '@angular/common/http';
import { TopbarComponent } from "../topbar/topbar.component";
import { HeaderComponent } from "../header/header.component";
import { NavbarComponent } from "../pages/navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CarouselModule, ButtonModule, TagModule, TopbarComponent, HeaderComponent, NavbarComponent, FooterComponent, CurrencyPipe],
  templateUrl: './products-single.component.html',
  styleUrl: './products-single.component.scss'
})
export class ProductSingleComponent implements OnInit {
  productSingleList: any = []
  responsiveOptions!: any[];
  constructor(private router: ActivatedRoute, private productSingleService: ProductSingleService) { }
  ngOnInit(): void {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];
    this.getProductDetails()
  }

  getProductDetails(): void {
    this.router.params.subscribe((id => {
      this.productSingleService.getSingleData(id['id']).subscribe((res: HttpResponse<any>) => {
        this.productSingleList = res.body
        console.log(res.body)
      })
    }))

  }

}

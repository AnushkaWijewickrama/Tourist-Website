import { NgFor, CommonModule } from '@angular/common';
import { HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { BannersService } from '../shared/services/banners.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [SlickCarouselModule, NgFor, CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  bannerList: any = [];
  constructor(public bannerService: BannersService) { }
  ngOnInit(): void {
    this.getBanner()
  }
  slideConfig = {
    slidesToShow: 1,
    nav: true,
    arrows: false,
    dots: true,
    autoplay: true,
    slideSpeed: 100,
    loop: true,
    responsive: {
      0: {
        items: 1,
        dots: false,
      },
      400: {
        items: 1,
        dots: false,
      },
      450: {
        items: 2,
        dots: false,
      },
      740: {
        items: 4,
        dots: false,
      },
      940: {
        items: 4,
        dots: false,
      }
    },

  }
  getBanner(): void {
    this.bannerService.query().subscribe((res: HttpResponse<any>) => {
      this.bannerList = res.body
    })
  }
}

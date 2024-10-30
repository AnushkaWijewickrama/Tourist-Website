import { Component, OnInit } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import { TopbarComponent } from "../topbar/topbar.component";
import { HeaderComponent } from "../header/header.component";
import { NavbarComponent } from "../pages/navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";
import { CurrencyPipe } from '@angular/common';
import { PackageSingleService } from '../shared/services/Package-details.service';

@Component({
  selector: 'app-packagedetails',
  standalone: true,
  imports: [CarouselModule, ButtonModule, TagModule, TopbarComponent, HeaderComponent, NavbarComponent, FooterComponent, CurrencyPipe],
  templateUrl: './package-details.component.html',
  styleUrl: './package-details.component.scss'
})
export class PackageDetailsComponent implements OnInit {
  packageDetailsList: any = []
  responsiveOptions!: any[];
  constructor(private router: ActivatedRoute, private packageSingleService: PackageSingleService) { }
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
      this.packageSingleService.getSingleData(id['id']).subscribe((res: HttpResponse<any>) => {
        this.packageDetailsList = res.body
      })
    }))

  }

}

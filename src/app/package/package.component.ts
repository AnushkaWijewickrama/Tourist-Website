import { Component, OnInit } from '@angular/core';
import { packageService } from '../shared/services/package.service';
import { HttpResponse } from '@angular/common/http';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-package',
  standalone: true,
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './package.component.html',
  styleUrl: './package.component.scss'
})
export class PackageComponent implements OnInit {
  packageList: any = [];
  constructor(private packageService1: packageService) { }

  ngOnInit(): void {
    this.getPakage()
  }
  getPakage(): void {
    this.packageService1.query().subscribe((res: HttpResponse<any>) => {
      console.log(res.body)
      this.packageList = res.body
    })
  }

}

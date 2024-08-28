import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../shared/services/gallery.service';
import { HttpResponse } from '@angular/common/http';
import { TopbarComponent } from "../topbar/topbar.component";
import { HeaderComponent } from "../header/header.component";
import { NavbarComponent } from "../pages/navbar/navbar.component";

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, TopbarComponent, HeaderComponent, NavbarComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent implements OnInit {
  galleryList: any = [];

  constructor(private galleryService: GalleryService) { }

  ngOnInit(): void {
    this.getGalleryList()
  }

  getGalleryList(): void {
    this.galleryService.query().subscribe((res: HttpResponse<any>) => {
      console.log(res.body)
      this.galleryList = res.body
    })
  }

}

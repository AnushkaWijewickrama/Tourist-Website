import { Component, inject, OnInit } from '@angular/core';
import { TestimonialComponent } from "../testimonial/testimonial.component";
import { FooterComponent } from "../footer/footer.component";
import { TopbarComponent } from "../topbar/topbar.component";
import { HeaderComponent } from "../header/header.component";
import { NavbarComponent } from "../pages/navbar/navbar.component";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MessageboxComponent } from '../messagebox/messagebox.component';
import { TestimonialService } from '../shared/services/testimonial.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-review',
  standalone: true,
  imports: [TestimonialComponent, FooterComponent, TopbarComponent, HeaderComponent, NavbarComponent],
  templateUrl: './review.component.html',
  styleUrl: './review.component.scss'
})
export class ReviewComponent implements OnInit {
  private modalService = inject(NgbModal);
  dataList: any = []

  constructor(private testimonialService: TestimonialService) { }

  ngOnInit(): void {
    this.getPublicData()
  }


  openLgMessageBox() {
    this.modalService.open(MessageboxComponent, { size: 'lg' });
  }

  getPublicData(): void {
    this.testimonialService.query().subscribe((res: HttpResponse<any>) => {
      this.dataList = res.body
    })
  }







}

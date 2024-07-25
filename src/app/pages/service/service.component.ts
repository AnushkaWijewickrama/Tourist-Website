import { Component } from '@angular/core';
import { HeaderComponent } from "../../header/header.component";
import { NavbarComponent } from "../navbar/navbar.component";
import { TestimonialComponent } from "../../testimonial/testimonial.component";
import { FooterComponent } from "../../footer/footer.component";
import { ServiceComponent } from "../../service/service.component";
import { TopbarComponent } from "../../topbar/topbar.component";

@Component({
  selector: 'app-servicep',
  standalone: true,
  imports: [HeaderComponent, NavbarComponent, TestimonialComponent, FooterComponent, ServiceComponent, TopbarComponent],
  templateUrl: './service.component.html',
  styleUrl: './service.component.scss'
})
export class ServiceComponentP {

}

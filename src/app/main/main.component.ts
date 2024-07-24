import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { TopbarComponent } from "../topbar/topbar.component";
import { AboutComponent } from "../about/about.component";
import { ServiceComponent } from "../service/service.component";
import { DestinationComponent } from "../destination/destination.component";
import { PackageComponent } from "../package/package.component";
import { BookingComponent } from "../booking/booking.component";
import { ProcessComponent } from "../process/process.component";
import { TestimonialComponent } from "../testimonial/testimonial.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [HeaderComponent, TopbarComponent, AboutComponent, ServiceComponent, DestinationComponent, PackageComponent, BookingComponent, ProcessComponent, TestimonialComponent, FooterComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}

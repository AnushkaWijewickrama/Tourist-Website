import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';



@Component({
  selector: 'app-testimonial',
  standalone: true,
  imports: [SlickCarouselModule, NgFor, NgIf],
  templateUrl: './testimonial.component.html',
  styleUrl: './testimonial.component.scss'
})
export class TestimonialComponent {
  slides = [
    { img: "http://placehold.it/350x150/111111" },
    { img: "http://placehold.it/350x150/111111" },
    { img: "http://placehold.it/350x150/333333" },
    { img: "http://placehold.it/350x150/666666" }
  ];
  //   <div>
  //   <img class="bg-white rounded-circle shadow p-1 mx-auto mb-3" src="img/testimonial-2.jpg"
  //       style="width: 80px; height: 80px;">
  //   <h5 class="mb-0">John Doe</h5>
  //   <p>New York, USA</p>
  //   <p class="mt-2 mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam
  //       et
  //       eos.
  //       Clita erat ipsum et lorem et sit.</p>
  // </div>
  slideConfig = {
    slidesToShow: 3,
    nav: true,
    arrows: false,
    dots: true,
    autoplay: true,
    slideSpeed: 300,
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
        items: 3,
        dots: false,
      },
      740: {
        items: 3,
        dots: false,
      },
      940: {
        items: 3,
        dots: false,
      }
    },

  }



}

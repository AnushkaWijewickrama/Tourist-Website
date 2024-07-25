import { Component } from '@angular/core';
import { HeaderComponent } from "../../header/header.component";
import { TopbarComponent } from "../../topbar/topbar.component";
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../../footer/footer.component";

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [HeaderComponent, TopbarComponent, NavbarComponent, FooterComponent],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {

}

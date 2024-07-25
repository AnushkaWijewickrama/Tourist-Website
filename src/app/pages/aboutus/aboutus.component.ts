import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { AboutComponent } from "../../about/about.component";
import { FooterComponent } from "../../footer/footer.component";
import { HeaderComponent } from "../../header/header.component";
import { TopbarComponent } from "../../topbar/topbar.component";

@Component({
  selector: 'app-aboutus',
  standalone: true,
  imports: [NavbarComponent, AboutComponent, FooterComponent, HeaderComponent, TopbarComponent],
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.scss'
})
export class AboutusComponent {

}

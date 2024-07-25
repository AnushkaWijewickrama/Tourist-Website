import { Component } from '@angular/core';
import { TopbarComponent } from "../../topbar/topbar.component";
import { HeaderComponent } from "../../header/header.component";
import { NavbarComponent } from "../navbar/navbar.component";
import { PackageComponent } from "../../package/package.component";
import { FooterComponent } from "../../footer/footer.component";

@Component({
  selector: 'app-packegep',
  standalone: true,
  imports: [TopbarComponent, HeaderComponent, NavbarComponent, PackageComponent, FooterComponent],
  templateUrl: './packegep.component.html',
  styleUrl: './packegep.component.scss'
})
export class PackegepComponent {

}

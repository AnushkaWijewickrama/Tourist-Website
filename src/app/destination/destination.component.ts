import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DestinationService } from '../shared/services/destination.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-destination',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './destination.component.html',
  styleUrl: './destination.component.scss'
})
export class DestinationComponent implements OnInit {
  destinationList: any = [];
  constructor(private destinationService: DestinationService) { }
  ngOnInit(): void {
    this.getDestinationList()
  }
  getDestinationList(): void {
    this.destinationService.query().subscribe((res: HttpResponse<any>) => {
      this.destinationList = res.body
    })
  }


}

import { Component, inject, OnInit, TemplateRef } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { TestimonialService } from '../shared/services/testimonial.service';
import { HttpResponse } from '@angular/common/http';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-messagebox',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './messagebox.component.html',
  styleUrl: './messagebox.component.scss'
})
export class MessageboxComponent implements OnInit {
  form!: FormGroup;
  constructor(public modal: NgbModal, config: NgbModalConfig, private testimonialService: TestimonialService) {
    config.backdrop = 'static';
    config.keyboard = false;
  }
  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      subject: new FormControl(null),
      message: new FormControl(null),
    });
  }


  closeModal() {
    this.modal.dismissAll();
  }
  sendData(): void {
    this.testimonialService.create(this.form.value).subscribe((res: HttpResponse<any>) => {
      this.modal.dismissAll();
      Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success"
      });

    })
  }

}

import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent {
  brandForm! : FormGroup;
  constructor(private fb: FormBuilder) {
    
  }

  ngOnInit(): void {
    this.brandForm = this.fb.group({
      brandName: ['']
    })
  }

  createBrand() {
    alert("Brand Created!")
  }
}

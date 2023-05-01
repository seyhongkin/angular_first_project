import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { BrandService } from 'src/app/service/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent {
  form! : FormGroup;
  brands! : any[];

  constructor(private fb: FormBuilder, private brandService: BrandService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['']
    })
    this.getAllBrands()
  }

  createBrand() {
    console.log(this.form.value);
    this.brandService.saveBrand(this.form.value).subscribe(t => {
      console.log(t)
    })
  }

  getAllBrands(){
    this.brandService.getBrand().subscribe(t =>{
      console.log(t.list)
      this.brands = t.list;
    })
  }
}

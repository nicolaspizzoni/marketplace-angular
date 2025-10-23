import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-product',
  imports: [ReactiveFormsModule],
  templateUrl: './new-product.html',
  styleUrl: './new-product.css'
})
export class NewProduct {
  imageBase64 = ''
  formProduct = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    price: new FormControl(0, [Validators.required]),
    category: new FormControl('', [Validators.required])
  })

  saveProduct() {
    console.log("novo produto", this.formProduct)
  }

  onFileUpload(event: Event) {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {
      const file = input.files[0]

      this.convertToBase64(file)
    }

  }

  convertToBase64(file: File) {
    const reader = new FileReader()

    reader.onload = (e: any) => {
      const imageBase64 = e.target.result as string;

      this.imageBase64 = imageBase64;
      console.log(imageBase64)
    }

    reader.onerror = () => {
      this.imageBase64 = ''
    }

    reader.readAsDataURL(file)
  }
}

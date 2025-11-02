import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductsService } from '../../services/products';
import { INewProductRequest } from '../../interfaces/new-product-request';
import { take } from 'rxjs';
import { Router } from '@angular/router';

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
  successMessage= '';

  private readonly _productsNewService = inject(ProductsService)
  private readonly _router = inject(Router)

  saveProduct() {
    console.log("novo produto", this.formProduct)

    if (this.formProduct.invalid || !this.imageBase64) return;

    const newProduct: INewProductRequest = {
      title: this.formProduct.value.title!,
      description: this.formProduct.value.description!,
      category: this.formProduct.value.category!,
      price: this.formProduct.value.price!,
      imageBase64: this.imageBase64
    }

    this._productsNewService.saveProduct(newProduct).pipe(take(1)).subscribe({
      next: (response) => {
        this.successMessage = response.message;
      }
    })
  }

  cancel() {
    this._router.navigate(['/products'])
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

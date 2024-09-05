import { Component } from '@angular/core';
import { BackgroundComponent } from '../background/background.component';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-kapcsolat',
  standalone: true,
  imports: [BackgroundComponent, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './kapcsolat.component.html',
  styleUrl: './kapcsolat.component.scss'
})
export class KapcsolatComponent {
  isLoading = false;
  document: any;
  checked: any;
  //formgroup cucc
  formGroup: FormGroup = this.formbuilder.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    phone: ['', Validators.required],
    text: ['', Validators.required],
    terms: [false, Validators.required]
  });

  constructor(public formbuilder: FormBuilder) {}

  onSubmit() {
    this.formGroup.markAllAsTouched();
    if (!this.formGroup.valid) return;
    this.isLoading = true;
    console.log('Loading state before fetch:', this.isLoading);

    // if(!this.formGroup.valid) return;
    fetch("https://brass-loud-whip.glitch.me/email", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.formGroup.value),
    })
      .then((response) => response.json())
      .then((data) => {
        this.isLoading = false;
        alert("Sikeres e-mail küldés!");

      })
      .catch((error) => {
        this.isLoading = false;
        console.error("Error:", error);
        alert("A funkció jelenleg nem elérhető!");
      });
  }








  // sender2() {
  //   const data = {
  //     text: 'szövegszöveg'
  //   }
  //   fetch("https://brass-loud-whip.glitch.me/email", {
  //     method: "POST", // or 'PUT'
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(this.data),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       alert("Sikeres e-mail küldés!");

  //     })
  //     .catch((error) => {
  //       console.error("Error:", error);
  //       alert("A funkció jelenleg nem elérhető!");
  //     });
  // }

  data: any = {
  }

  changer(data: any, name: string) {
    this.data[name] = data.target.value
  }
}

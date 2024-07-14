import { Component } from '@angular/core';
import { BackgroundComponent } from '../background/background.component';

@Component({
  selector: 'app-kapcsolat',
  standalone: true,
  imports: [BackgroundComponent],
  templateUrl: './kapcsolat.component.html',
  styleUrl: './kapcsolat.component.scss'
})
export class KapcsolatComponent {
  sender() {
    const data = {
      name: 'bármi',
      email: 'test@gmail.com',
      phone: '1341516145',
      text: 'szövegszöveg'
    }
    fetch("https://brass-loud-whip.glitch.me/email", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.data),
    })
      .then((response) => response.json())
      .then((data) => {
        alert("Sikeres e-mail küldés!");

      })
      .catch((error) => {
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

  data:any = {
  }

  changer(data:any, name: string){
    this.data[name] = data.target.value
  }
}

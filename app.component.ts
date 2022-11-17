import { Component } from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})

export class AppComponent {
  condition: boolean = true;
  delete(): void {
    this.condition = !this.condition;
  }

  fillColor = 'rgb(0, 0, 0)';

  changeColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    this.fillColor = `rgb(${r}, ${g}, ${b})`;
  }

  items: string[] = ['Artom', 'Vaspur', 'Gegham', 'Gurgen'];

}



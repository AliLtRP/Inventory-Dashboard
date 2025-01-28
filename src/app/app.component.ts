import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SiderNavComponent } from "./shared/sider-nav/sider-nav.component";
import { HeaderComponent } from "./shared/header/header.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SiderNavComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}

import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar } from "./components/nav-bar/nav-bar";
import { Footer } from "./components/footer/footer";
import { About } from "./components/about/about";
import { Portfolio } from "./components/portfolio/portfolio";
import { Contact } from "./components/contact/contact";
import { Default } from "./components/default/default";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBar, Footer, About, Portfolio, Contact, Default],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('First_Angular');
}

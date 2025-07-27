import { TuiRoot } from '@taiga-ui/core';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WelcomePage } from './pages/welcome-page/welcome-page';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TuiRoot, WelcomePage],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}

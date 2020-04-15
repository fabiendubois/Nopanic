import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment'
@Component({
  selector: 'app-footer-layout',
  templateUrl: './footer-layout.component.html',
  styleUrls: ['./footer-layout.component.css']
})
export class FooterLayoutComponent implements OnInit {

  applicationName = environment.name;
  applicationVersion = environment.version;

  constructor() { }

  ngOnInit(): void { }

}

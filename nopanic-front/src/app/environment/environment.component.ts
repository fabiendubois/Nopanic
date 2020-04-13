import { Component, OnInit } from '@angular/core';
import { EnvironmentService } from '../core/services/environment.service';

@Component({
  selector: 'app-environment',
  templateUrl: './environment.component.html',
  styleUrls: ['./environment.component.css']
})
export class EnvironmentComponent implements OnInit {

  environments: string[];

  constructor(private envrionmentService: EnvironmentService) { }

  ngOnInit(): void {
    this.envrionmentService.getAll().subscribe(
      data => {
        this.environments = data;
      }
    )
  }

}

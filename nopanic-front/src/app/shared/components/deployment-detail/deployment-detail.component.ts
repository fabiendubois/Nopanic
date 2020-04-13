import { Component, OnInit, Input } from '@angular/core';
import { Deployment } from 'src/app/core/models/deployment.model';

@Component({
  selector: 'app-deployment-detail',
  templateUrl: './deployment-detail.component.html',
  styleUrls: ['./deployment-detail.component.css']
})
export class DeploymentDetailComponent implements OnInit {

  @Input()
  deployment: Deployment;

  @Input()
  withTitle: boolean;

  nbCardAccent = '';

  constructor() { }

  ngOnInit(): void {
    if (this.deployment && this.deployment.status) {
      this.nbCardAccent = 'success';
    } else {
      this.nbCardAccent = 'danger';
    }
  }
}

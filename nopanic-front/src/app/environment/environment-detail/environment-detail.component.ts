import { Component, OnInit, Input } from '@angular/core';
import { Deployment } from 'src/app/core/models/deployment.model';
import { DeploymentService } from 'src/app/core/services/deployment.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-environment-detail',
  templateUrl: './environment-detail.component.html',
  styleUrls: ['./environment-detail.component.css']
})
export class EnvironmentDetailComponent implements OnInit {

  @Input()
  environment: string;

  deployments: Deployment[];

  constructor(private deploymentService: DeploymentService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    if (this.environment || this.route.snapshot.params.environment) {
      if (!this.environment) {
        this.environment = this.route.snapshot.params.environment;
      }
      this.fetchDeployments();
    }
  }

  fetchDeployments() {
    this.deploymentService.getAll(undefined, this.environment).subscribe(
      deployments => {
        this.deployments = deployments;
      }
    )
  }

}

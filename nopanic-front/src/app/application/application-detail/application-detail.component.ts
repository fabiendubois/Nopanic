import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Deployment } from 'src/app/core/models/deployment.model';
import { DeploymentService } from 'src/app/core/services/deployment.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-application-detail',
  templateUrl: './application-detail.component.html',
  styleUrls: ['./application-detail.component.css']
})
export class ApplicationDetailComponent implements OnInit {

  @Input()
  application: string;

  deployments: Deployment[];

  constructor(private deploymentService: DeploymentService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    if (this.application || this.route.snapshot.params.application) {
      if (!this.application) {
        this.application = this.route.snapshot.params.application;
      }
      this.fetchDeployments();
    }
  }

  fetchDeployments() {
    this.deploymentService.getAll(this.application).subscribe(
      deployments => {
        this.deployments = deployments;
      }
    )
  }

}

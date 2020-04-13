import { Component, OnInit } from '@angular/core';
import { EnvironmentService } from 'src/app/core/services/environment.service';
import { DeploymentService } from 'src/app/core/services/deployment.service';
import { Deployment } from 'src/app/core/models/deployment.model';

interface TreeNode<T> {
  data: T;
  children?: TreeNode<T>[];
  expanded?: boolean;
}

interface FSEntry {
  environment: string;
  deployments: number;
}

@Component({
  selector: 'app-deployment-environment-rate',
  templateUrl: './deployment-environment-rate.component.html',
  styleUrls: ['./deployment-environment-rate.component.css']
})
export class DeploymentEnvironmentRateComponent implements OnInit {

  allColumns = ['environment', 'deployments', 'successfulDeployments', 'failedDeployments'];

  data: TreeNode<FSEntry>[];

  loading = true;

  constructor(private environmentService: EnvironmentService, private deploymentService: DeploymentService) { }

  ngOnInit(): void {
    this.loadData();
  }

  async loadData() {
    let environments = await this.fetchEnvironments();
    let _data = []
    for (const env of environments) {
      let deployments = await this.deploymentService.getAll(undefined, env).toPromise();
      _data.push({ data: { environment: env, deployments: deployments.length, successfulDeployments: this.getSuccessfulDeployments(deployments), failedDeployments: this.getFailedDeployments(deployments) } });
    }
    this.data = _data;
    this.loading = false;
  }

  async fetchEnvironments(): Promise<any> {
    return await this.environmentService.getAll().toPromise();
  }

  private getSuccessfulDeployments(deployments: Deployment[]): number {
    return deployments.filter(deployment => deployment.status === true).length;
  }

  private getFailedDeployments(deployments: Deployment[]): number {
    return deployments.filter(deployment => deployment.status === false).length;
  }
}



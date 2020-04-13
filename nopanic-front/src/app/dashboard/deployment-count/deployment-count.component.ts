import { Component, OnInit } from '@angular/core';
import { DeploymentService } from 'src/app/core/services/deployment.service';

@Component({
  selector: 'app-deployment-count',
  templateUrl: './deployment-count.component.html',
  styleUrls: ['./deployment-count.component.css']
})
export class DeploymentCountComponent implements OnInit {

  deploymentsCount: number;

  loading = true;

  constructor(private deploymentService: DeploymentService) { }

  ngOnInit(): void {
    this.deploymentService.getAll().subscribe(
      data => {
        this.deploymentsCount = data.length;
        this.loading = false;
      }
    )
  }

}

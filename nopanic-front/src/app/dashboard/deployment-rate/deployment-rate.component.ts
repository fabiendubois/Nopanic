import { Component, OnInit } from '@angular/core';

export var single = [
  {
    "name": "Réussis",
    "value": 40
  },
  {
    "name": "Ratés",
    "value": 60
  }
];

@Component({
  selector: 'app-deployment-rate',
  templateUrl: './deployment-rate.component.html',
  styleUrls: ['./deployment-rate.component.css']
})
export class DeploymentRateComponent implements OnInit {
  single: any[];
  view: any[] = [300, 300];

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = false;
  isDoughnut: boolean = true;
  legendPosition: string = 'below';

  colorScheme = {
    domain: ['#00d68f', '#ff3d71']
  };

  constructor() {
    Object.assign(this, { single });
  }

  ngOnInit() { }

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

}

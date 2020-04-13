import { Component, OnInit } from '@angular/core';
import { ApplicationService } from '../core/services/application.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {

  displayedApplications: string[];

  applications: string[];

  constructor(private applicationService: ApplicationService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.applicationService.getAll().subscribe(
      data => {
        this.applications = data;
        this.displayedApplications = data;
      }
    );
  }

  onKeyUp(event) {
    this.displayedApplications = this.applications.filter((value) => value.includes(event.target.value));
  }

  onNavigate(application: string) {
    this.router.navigate([`${application}`], { relativeTo: this.route });
  }
}

import { Component, OnInit } from '@angular/core';
import { ApplicationService } from 'src/app/core/services/application.service';

@Component({
  selector: 'app-application-count',
  templateUrl: './application-count.component.html',
  styleUrls: ['./application-count.component.css']
})
export class ApplicationCountComponent implements OnInit {

  applicationsCount: number;

  loading = true;

  constructor(private applicationService: ApplicationService) { }

  ngOnInit(): void {
    this.applicationService.getAll().subscribe(
      data => {
        this.applicationsCount = data.length;
        this.loading = false;
      }
    );
  }
}

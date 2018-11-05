import { Component, OnInit } from '@angular/core';

import { Log } from '../../models/Log';

import { LogService } from '../../services/log.service';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss']
})
export class LogsComponent implements OnInit {
  logs: Log[];

  constructor(private logService: LogService) { }

  ngOnInit() {
    this.logService.getLogs()
      .subscribe(logs => this.logs = logs);
  }

  onSelect(log: Log): void {
    this.logService.setFormLog(log);
  }

  onDelete(log: Log): void {
    if (confirm('Are you sure?')) {
      this.logService.deleteLog(log);
    }
  }
}

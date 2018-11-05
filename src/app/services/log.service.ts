import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

import { Log } from '../models/Log';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  logs: Log[];

  private logSource = new BehaviorSubject<Log>({ id: null, text: null, date: null});

  selectedLog = this.logSource.asObservable();

  constructor() {
    this.logs = [
      {
        id: '1',
        text: 'Generated components',
        date: new Date('12/27/2017 12:54:23')
      },
      {
        id: '2',
        text: 'Added Bootstrap',
        date: new Date('12/28/2017 11:20:23')
      },
      {
        id: '3',
        text: 'Added logs component',
        date: new Date('12/27/2017 16:16:09')
      },
    ]
  }

  getLogs(): Observable<Log[]> {
    return of(this.logs);
  }

  setFormLog(log: Log) {
    this.logSource.next(log);
  }

  addLog(log: Log): void {
    this.logs.unshift(log);
  }

  updateLog(log: Log): void {
    this.logs.forEach(l => {
      if (l.id === log.id) {
        l.text = log.text;
        l.date = log.date;
      }
    })
  }

  deleteLog(log: Log): void {
    this.logs.forEach((cur, i) => {
      if (cur.id === log.id) {
        this.logs.splice(i, 1);
      }
    });
  }
}

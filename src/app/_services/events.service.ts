import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { CalendarEvent } from 'angular-calendar';
import {startOfDay, endOfDay, subDays, addDays, endOfMonth, isSameDay, isSameMonth, addHours} from 'date-fns';
import { HttpClient } from '@angular/common/http';

const colors: any = {
    red: {
      primary: '#ad2121',
      secondary: '#FAE3E3'
    },
    blue: {
      primary: '#1e90ff',
      secondary: '#D1E8FF'
    },
    yellow: {
      primary: '#e3bc08',
      secondary: '#FDF1BA'
    }
  };

@Injectable()
export class EventsService {
baseUrl = environment.apiUrl;

constructor(private authHttp: HttpClient) { }

getAllEvent(): CalendarEvent[] {
    return [
        {
          start: (new Date(2018, 4, 10, 8, 0)),
          end: (new Date(2018, 4, 10, 17, 0)),
          title: 'Etienne Mermillod | Vacation'
        },
        {
          start: (new Date(2018, 4, 10, 8, 0)),
          end: (new Date(2018, 4, 10, 17, 0)),
          title: 'Yannick Dufils | Sick'
        },
        {
          start: subDays(endOfMonth(new Date()), 3),
          end: addDays(endOfMonth(new Date()), 3),
          title: 'Leonard Richard | Vacation'
        }
      ];
}

}

import { Employee } from './Employee';

export interface CalendarEvent {
    start: Date;
    end: Date;
    employee: Employee[];
}

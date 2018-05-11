import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './_guards/auth.guard';
import { CalendarComponent } from './calendar/calendar.component';

export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            {path: 'calendar', component: CalendarComponent}
        ]
    },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

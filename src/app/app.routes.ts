import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { ServiceComponentP } from './pages/service/service.component';
import { PackegepComponent } from './pages/packegep/packegep.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';

export const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        data: {
            title: "Tourist"
        }
    },
    {
        path: 'about',
        component: AboutusComponent,
        data: {
            title: "Tourist"
        }
    },
    {
        path: 'services',
        component: ServiceComponentP,
        data: {
            title: "Tourist"
        }
    },
    {
        path: 'packeges',
        component: PackegepComponent,
        data: {
            title: "Tourist"
        }
    },
    {
        path: 'contact',
        component: ContactUsComponent,
        data: {
            title: "Tourist"
        }
    }
];

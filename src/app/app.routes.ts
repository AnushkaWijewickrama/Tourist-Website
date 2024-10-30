import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { ServiceComponentP } from './pages/service/service.component';
import { PackegepComponent } from './pages/packegep/packegep.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ProductSingleComponent } from './products-single/products-single.component';
import { ProductsComponent } from './products/products.component';
import { ReviewComponent } from './review/review.component';
import { PackageDetailsComponent } from './package-details/package-details.component';

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
    },
    {
        path: 'gallery',
        component: GalleryComponent,
        data: {
            title: "Tourist"
        }
    },
    {
        path: 'productsingle/:id',
        component: ProductSingleComponent,
        data: {
            title: "Tourist"
        }
    },
    {
        path: 'packagedetails/:id',
        component: PackageDetailsComponent,
        data: {
            title: "Tourist"
        }
    },
    // {
    //     path: 'products',
    //     component: ProductsComponent,
    //     data: {
    //         title: "Tourist"
    //     }
    // },
    {
        path: 'reviews',
        component: ReviewComponent,
        data: {
            title: "Tourist"
        }
    },
];

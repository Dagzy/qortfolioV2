import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ReaderComponent } from '../reader/reader.component';
import { LovelyDayComponent } from '../lovely-day/lovely-day.component';
import { DogpiesComponent } from '../dogpies/dogpies.component';

export const routes =  [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'reader',
        component: ReaderComponent
    },
    {
        path: 'lovely',
        component: LovelyDayComponent
    },
    {
        path: 'dogpies',
        component: DogpiesComponent
    }

];

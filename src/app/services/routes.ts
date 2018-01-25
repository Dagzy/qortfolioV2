import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ReaderComponent } from '../reader/reader.component';

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
    }

];

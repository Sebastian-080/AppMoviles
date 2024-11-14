import { Routes } from '@angular/router';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { RegistroUserComponent } from './pages/registro-user/registro-user.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { AsistenciaComponent} from './pages/asistencia/asistencia.component';
import { ImagenComponent } from './pages/imagen/imagen.component';

export const routes: Routes = [
    {
        path: 'contacto',
        component: ContactoComponent
    },
    {
        path: 'registrar',
        component: RegistroUserComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'asistencia',
        component: AsistenciaComponent
    },
    {
        path: 'imagen',
        component: ImagenComponent
    }
];

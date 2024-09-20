import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { AuthGuard } from './auth.guard';
import { RegisterComponent } from './pages/register/register.component';

export const routes: Routes = [
    { path: '', loadChildren: () => import('./pages/pages.module').then((m) => m.PagesModule) },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
];

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Example1Component} from "./pages/example-1/example-1.component";
import {OverviewComponent} from "./pages/overview/overview.component";

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: OverviewComponent,
    },
    {
        path: 'example-1',
        component: Example1Component,
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: '',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}

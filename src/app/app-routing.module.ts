import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Example1Component} from "./pages/example-1/example-1.component";
import {Example2Component} from "./pages/example-2/example-2.component";
import {Example3Component} from "./pages/example-3/example-3.component";
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
        path: 'example-2',
        component: Example2Component,
    },
    {
        path: 'example-3',
        component: Example3Component,
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

import {Component, View, bootstrap} from 'angular2/angular2';
import {routerInjectables, RouterOutlet, RouteConfig} from 'angular2/router'

import {contact} from './components/contact/contact'
@Component({
    selector: 'my-app',
    template: '<h1>My First Angular 2 App</h1>'
})
@View({
    template:  '<router-outlet></router-outlet>',
    directives:[RouterOutlet]
})
@RouteConfig([
    {path: '/', component :contact, as:'contact' }
])
class AppComponent { }
bootstrap(AppComponent, [routerInjectables]);
import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';

@Component({
    selector: 'myapp',
    template: '<h1>dotCMS Config App</h1>'
})

export class AppComponent {}

bootstrap(AppComponent);
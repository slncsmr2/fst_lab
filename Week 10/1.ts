import { Component } from '@angular/core';

@Component({

    selector: 'simple-constructor',
    template: `<p>Hello today is {{today}}!</p>`,
})

export class UsingAConstructor {

    today: Date;
    constructor() {
        this.today = new Date();
    }
}
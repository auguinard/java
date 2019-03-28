import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';


import {InscriptionPage} from './inscription.page';

describe('Inscription', () => {
    let component:  InscriptionPage;
    let fixture: InscriptionFixture<InscriptionPage>;
    let InscriptionPage: HTMLElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ InscriptionPage ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        })
            .compileComponents();
    }));

    beforeEach(async () => {
        fixture = await TestBed.createComponent(InscriptionPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

});

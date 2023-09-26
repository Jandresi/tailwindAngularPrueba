import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaFormularioComponent } from './prueba-formulario.component';

describe('PruebaFormularioComponent', () => {
  let component: PruebaFormularioComponent;
  let fixture: ComponentFixture<PruebaFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruebaFormularioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PruebaFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

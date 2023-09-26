import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaContenidoComponent } from './prueba-contenido.component';

describe('PruebaContenidoComponent', () => {
  let component: PruebaContenidoComponent;
  let fixture: ComponentFixture<PruebaContenidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruebaContenidoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PruebaContenidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

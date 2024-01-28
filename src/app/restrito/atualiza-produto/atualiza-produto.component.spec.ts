import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtulizaProdutoComponent } from './atualiza-produto.component';

describe('AtulizaProdutoComponent', () => {
  let component: AtulizaProdutoComponent;
  let fixture: ComponentFixture<AtulizaProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AtulizaProdutoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AtulizaProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

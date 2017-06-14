import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SceneAssetComponent } from './scene-asset.component';

describe('SceneAssetComponent', () => {
  let component: SceneAssetComponent;
  let fixture: ComponentFixture<SceneAssetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SceneAssetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SceneAssetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

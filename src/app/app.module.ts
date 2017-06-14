import {BrowserModule} from '@angular/platform-browser';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import { SceneComponent } from './scene/scene.component';
import { DirectorComponent } from './director/director.component';
import { CharacterComponent } from './3-d/character/character.component';
import { SceneAssetComponent } from './3-d/scene-asset/scene-asset.component';
import { CameraComponent } from './3-d/camera/camera.component';

@NgModule({
  declarations: [
    AppComponent,
    SceneComponent,
    DirectorComponent,
    CharacterComponent,
    SceneAssetComponent,
    CameraComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

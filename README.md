# Angular layouts

Project provides Angular layout components

## What's in the box

### Layers layout

Represents ordered set of overlays.

Consist of following components:

- `<l-layers>` component represents container for one or more `<l-layer>` components
- `<l-layer>` components fill the parent and behaves as ordered overlays

##### Usage example:

###### Import layers layout module

```typescript
import {NgModule} from '@angular/core';
import {LayersLayoutModule} from '@ngry/layouts';

@NgModule({
  imports: [
    LayersLayoutModule
  ]
})
export class AppModule { 
}
```

###### Use layers layout in template

```angular2html
<l-layers>
  <l-layer>
    Background layer
  </l-layer>
  <l-layer>
    Middle layer
  </l-layer>
  <l-layer>
    Front layer
  </l-layer>
</l-layers>
```

##### Layers layout demo

- Visit [layers layout demo page](https://ngry-org.github.io/pkg/layouts#/layouts/layers) 




### Media layout

Represents row which usually contains some multimedia content, it's details and action triggers.

Consist of following components:

- `<l-media>` represents container for one or more `<l-media-content>`, `<l-media-details>` and `<l-media-action>` components
- `<l-media-content>` represents container for multimedia content, takes minimum required space
- `<l-media-action>` represents container for action trigger element, takes minimum required space
- `<l-media-details>` represents container for content description and related details

##### Usage example:

Import `MediaLayoutModule` in your app

```typescript
import {NgModule} from '@angular/core';
import {MediaLayoutModule} from '@ngry/layouts';

@NgModule({
  imports: [
    MediaLayoutModule
  ]
})
export class AppModule { 
}
```

Use media layout components in your templates

```angular2html
<l-media>
  <l-media-content>
    <img src="poster.jpg" alt="Poster">
  </l-media-content>
  <l-media-details>
    <p>Movie Title</p>
    <dl>
      <dt>Budget:</dt> <dd>$100 000 000</dd>
      <dt>Actors</dt> <dd>...</dd>
    </dl>
  </l-media-details>
  <l-media-action>
    <a href="/movie/123/buy">Buy Now</a>
  </l-media-action>
</l-media>
```

##### Media layout demo

- Visit [media layout demo page](https://ngry-org.github.io/pkg/layouts#/layouts/media) 

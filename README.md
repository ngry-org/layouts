# Angular layouts

Project provides Angular layout components

## What's in the box

### Layers layout

Represents ordered set of overlays.

Consist of following components:

- `<l-layers>` component represents container for one or more `<l-layer>` components. 
- `<l-layer>` components fill the parent and behaves as ordered overlays.

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

- Run `demo` application
- Open [`/layouts/layers`](http://localhost:4300/layouts/layers) page


### Media layout

Represents row which usually contains multimedia content, details and actions.

Consist of following components:

- `<l-media>` component represents container for one or more `<l-media-content>`, `<l-media-details>` and `<l-media-action>` components. 
- `<l-layer>` components fill the parent and behaves as ordered overlays.

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

- Run `demo` application
- Open [`/layouts/layers`](http://localhost:4300/layouts/layers) page

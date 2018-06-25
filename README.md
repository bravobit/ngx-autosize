# ngx-autosize

> Autosize your textareas with ease.

[![npm License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

- Use <kbd>command</kbd> + <kbd>F</kbd> or <kbd>ctrl</kbd> + <kbd>F</kbd> to search for a keyword.
- Contributions welcome, please see [contribution guide](.github/CONTRIBUTING.md).

## Features

* Easy implementation
* Library can be consumed by Angular CLI, Webpack, or SystemJS
* Compatibility
  * Angular Universal
  * Ahead-Of-Time compilation (AOT)
  * Lazy loading

## Demo

[Click here to play with the example](https://stackblitz.com/github/bravobit/ngx-autosize)

## Installation

To use ngx-autosize in your project install it via `npm` or `yarn`:

```bash
$ npm install @bravobit/ngx-autosize --save

# or

$ yarn add @bravobit/ngx-autosize
```

## Setup

Add the `NgxAutosizeModule` to your imports array in your `AppModule`.

```typescript
import {NgxAutosizeModule} from '@bravobit/ngx-autosize';

@NgModule({
    imports: [NgxAutosizeModule]
})
export class AppModule {}
```

## Example

```typescript
import {Component, OnInit} from '@angular/core';
import {StorageService} from '@bravobit/ngx-autosize';

@Component({
    selector: 'app-root',
    template: `
        <textarea ngxAutosize
                  minHeight="100px"
                  maxHeight="500px">Woop die floop</textarea>
    `,
    styles: ['textarea { resize: none; }']
})
export class AppComponent {
}
```